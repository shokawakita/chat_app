<script setup lang="ts">

const props = defineProps<{
  time: string
}>()

const getRecentlyPostDate = (time:string): void => {
  const postDate = new Date(time) // 最新投稿日付の定義
  const sysDate = new Date() // 現在日付の定義
  const postDateDate = postDate.toLocaleDateString("ja-JP", {year: "numeric",month: "2-digit", day: "2-digit"}) // 最新投稿日付(yyyy/mm/dd)
  const sysDate_millisecond = sysDate.getTime() // 現在日付（ミリ秒）
  const postDate_millisecond = postDate.getTime() // 最新投稿日付(ミリ秒)
  const postDate_mmdd = postDate.toLocaleDateString("ja-JP", {month: "2-digit", day: "2-digit"}) // 最新投稿日付（mm/dd）
  const postDate_hhmm = postDate.toLocaleString("ja-JP", {hour: "2-digit", minute: "2-digit"}) // 最新投稿日付（hh:mm）
  const postDate_hh = postDate.toLocaleString("ja-JP", {hour: "2-digit"}).substring(0,2) // 最新投稿日付（hh）
  const postDate_day = postDate.getDay() // 最新投稿日付（曜日の要素番号）
  const numberOfDays = Math.floor((sysDate_millisecond - postDate_millisecond)/(1000 * 60 * 60 * 24)); // 現在日付 - 最新投稿日付（日数）
  const postDate_yyyy =postDate.getFullYear().toString() //現在日付(yyyy)
  const sysDate_yyyy =sysDate.getFullYear().toString() //最新投稿日付（yyyy）
  const days = [
    "日曜日",
    "月曜日",
    "火曜日",
    "水曜日",
    "木曜日",
    "金曜日",
    "土曜日",
  ];
  // ▪️最新投稿日時が現在時刻の去年以上の場合、
  // 　日付（yyyy/mm/dd）と表示する
  if (sysDate_yyyy - postDate_yyyy >= 1) {
    return postDateDate
  // ▪️最新投稿日時が現在時刻より、1週以上後〜去年より前の場合、
  // 　日付（mm/dd）を表示する
  } else if (numberOfDays >= 7) {
    return postDate_mmdd
  // ▪️最新投稿日時が現在時刻より、2日以上後〜1週より前の場合、
  // 　現在曜日を表示する
  } else if (numberOfDays >= 2) {
    return days[postDate_day]
  // ▪️最新投稿日時が現在時刻より、1日以上後〜2日より前の場合、
  //　「昨日」と表示する
  } else if (numberOfDays >= 1) {
    return '昨日'
  // ▪️最新投稿日時が現在時刻より、現在時刻〜1日より前の場合、
  //  時刻（hh:mm）
  } else if (numberOfDays >= 0) {
    if(postDate_hh <= 11) {
      return `午前 ${postDate_hhmm}`
    } else {
      return `午後 ${postDate_hhmm}`
    }
  // ▪️最新投稿日時が現在時刻より、現在時刻より前の場合、
  //　空白表示
  } else {
    return ''
  }
}

defineExpose({
  getRecentlyPostDate,
});

</script>
<template>
  <div>
    {{ getRecentlyPostDate(time) }}
  </div>
</template>
