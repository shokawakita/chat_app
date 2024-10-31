<script setup lang="ts">
import type {RoomInfo} from '../../../functions/index.vue'
import roomInfoData from '../../../../data/data.ts'
import GetPostDate from '../../../functions/getPostDate.vue'
import { ref } from 'vue';
// import getPostDate from '../../../functions/getPostDate.vue'

const roomInfo:RoomInfo = roomInfoData

// 子コンポーネント側のコンポーネント情報を受け取る ref を宣言しています。
const getPostDateRef = ref();

// 子コンポーネント側に渡す props を宣言しています。
const getPostDateValue = roomInfo.postDate;

// console.log(getPostDateRef.value)

// 子コンポーネント側のメソッドを発火させるメソッドを実装しています。
// const getPostDate = () => {
  // getPostDateRef.value.getPostDate();
// };
// import { ref } from 'vue';
// import Child from './components/Child.vue';

// // 子コンポーネント側のコンポーネント情報を受け取る ref を宣言しています。
// const childRef = ref();

// // 子コンポーネント側に渡す props を宣言しています。
// const childValue = "Hello, Zenn";

// // 子コンポーネント側のメソッドを発火させるメソッドを実装しています。
// const onChildMethodClick = () => {
//     childRef.value.childMethod();
// };



const generateImgPath = (fileName: string): string => {
  return new URL(`${fileName}`, import.meta.url).href
}

// const getPostDate = () => getPostDate
// console.log(getPostDate())

// const postDate = new Date(roomInfo.postDate) // 最新投稿日付の定義
// const sysDate = new Date() // 現在日付の定義
// const postDateDate = postDate.toLocaleDateString("ja-JP", {year: "numeric",month: "2-digit", day: "2-digit"}) // 最新投稿日付(yyyy/mm/dd)
// const sysDate_millisecond = sysDate.getTime() // 現在日付（ミリ秒）
// const postDate_millisecond = postDate.getTime() // 最新投稿日付(ミリ秒)
// const postDate_mmdd = postDate.toLocaleDateString("ja-JP", {month: "2-digit", day: "2-digit"}) // 最新投稿日付（mm/dd）
// const postDate_hhmm = postDate.toLocaleString("ja-JP", {hour: "2-digit", minute: "2-digit"}) // 最新投稿日付（hh:mm）
// const postDate_hh = postDate.toLocaleString("ja-JP", {hour: "2-digit"}).substring(0,2) // 最新投稿日付（hh）
// const postDate_day = postDate.getDay() // 最新投稿日付（曜日の要素番号）
// const numberOfDays = Math.floor((sysDate_millisecond - postDate_millisecond)/(1000 * 60 * 60 * 24)); // 現在日付 - 最新投稿日付（日数）
// const postDate_yyyy =postDate.getFullYear().toString() //現在日付(yyyy)
// const sysDate_yyyy =sysDate.getFullYear().toString() //最新投稿日付（yyyy）
// const days = [
//   "日曜日",
//   "月曜日",
//   "火曜日",
//   "水曜日",
//   "木曜日",
//   "金曜日",
//   "土曜日",
// ];

// const getPostDate = () => {
//   // ▪️最新投稿日時が現在時刻の去年以上の場合、
//   // 　日付（yyyy/mm/dd）と表示する
//   if (sysDate_yyyy - postDate_yyyy >= 1) {
//      return postDateDate
//   // ▪️最新投稿日時が現在時刻より、1週以上後〜去年より前の場合、
//   // 　日付（mm/dd）を表示する
//   } else if (numberOfDays >= 7) {
//     return postDate_mmdd
//   // ▪️最新投稿日時が現在時刻より、2日以上後〜1週より前の場合、
//   // 　現在曜日を表示する
//   } else if (numberOfDays >= 2) {
//     return days[postDate_day]
//   // ▪️最新投稿日時が現在時刻より、1日以上後〜2日より前の場合、
//   //　「昨日」と表示する
//   } else if (numberOfDays >= 1) {
//     return '昨日'
//   // ▪️最新投稿日時が現在時刻より、現在時刻〜1日より前の場合、
//   //  時刻（hh:mm）
//   } else if (numberOfDays >= 0) {
//     if(postDate_hh <= 11) {
//       return `午前 ${postDate_hhmm}`
//     } else {
//       return `午後 ${postDate_hhmm}`
//     }
//   // ▪️最新投稿日時が現在時刻より、現在時刻より前の場合、
//   //　空白表示
//   } else {
//     return ''
//   }
// }

</script>

<template>
  <div class = "room">
    <div class = "room_icon">
      <a href="#">
        <img :src="generateImgPath(`../../../icons/${roomInfo.icon}`)" :alt="roomInfo.icon" />
      </a>
    </div>
    <div class = "room_info">
      <div class = "room_info_text">
        <p class = "room_info_text_name">
          {{roomInfo.name}}
          <!-- group -->
          <span class = "room_info_text_count">
            <!-- members -->
             <!-- 1人部屋の場合、表示なし
             複数人の部屋の場合、人数を表示 -->
             {{ `(${roomInfo.members})` }}
          </span>
        </p>
        <p class = "room_info_text_post_time">
          <!-- time -->
          <!-- 最終投稿日時を表示 -->
          <!-- {{getPostDate(roomInfo.postDate)}} -->
          <!-- <GetPostDate ref="GetPostDateRef" :value="getPostDateValue"/> -->
          <GetPostDate ref="getPostDateRef" :value="getPostDateValue"/>
          <!-- {{getPostDate()}} -->
        </p>
      </div>
      <div class = "room_info_message">
        <p>
          <!-- message -->
          {{ roomInfo.recentlyMessage }}
        </p>
      </div>
    </div>
  </div>

</template>

<style scoped>
.room {
  border: solid 0.5px #000000;
  display: flex;
  width: inherit;
  height: 72px;

  .room_icon {
    border: solid 0.5px #000000;
    width: 25%;
    height: 72px;
    display: flex;
    justify-content: center;
    align-items: center;

    a {

      img {
        width: 54px;
        height: 54px;
        border-radius:50%;
      }
    }
  }

  .room_info {
    border: solid 0.5px #000000;
    width: 75%;
    height: 72px;
    font-size: 14px;

    .room_info_text {
      display: flex;
      justify-content: space-between;

      .room_info_text_name {
        width: 70%;
        padding-top: 8px;

        .room_info_text_count {

        }
      }

      .room_info_text_post_time {
        width: 30%;
        text-align: right;
        padding-top: 4px;
        padding-right: 4px;
        font-size: 10px;
      }
    }

    .room_info_message {
      width: 70%;
      font-size: 10px;
      /* overflow-x: hidden; */
      /* text-overflow: ellipsis "[..]"; */
      /* white-space: pre; */
      border: solid 0.5px #000000;
      margin-right: 24px;

      p {
        font-size: 10px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        border: solid 0.5px #000000;
      }
    }
  }

}
</style>
