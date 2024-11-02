<script setup lang="ts">
import type {Room} from '../../../functions/index.ts'
import GetPostDate from '../../../functions/getPostDate.vue'
import { ref } from 'vue';

const props = defineProps<{
  room: Room
}>()

const generateImgPath = (fileName: string): string => {
  return new URL(`${fileName}`, import.meta.url).href
}

const isMultipleMember = ref(true)

if(props.room.talkMembers > 1){isMultipleMember.value = true} else {isMultipleMember.value = false}

</script>

<template>
  <div class = "room">
    <div class = "room_icon">
      <a href="#">
        <img :src="generateImgPath(`../../../icons/${room.icon}`)" :alt="room.icon" />
      </a>
    </div>
    <div class = "room_info">
      <div class = "room_info_text">
        <p class = "room_info_text_name">
          {{room.roomName}}
          <!-- group -->
        </p>
        <p v-if="isMultipleMember" class = "room_info_text_count">
          <!-- members -->
           <!-- 1人部屋の場合、表示なし
           複数人の部屋の場合、人数を表示 -->
           ({{ room.talkMembers }})
        </p>
        <p class = "room_info_text_post_time">
          <!-- time -->
          <!-- 最終投稿日時を表示 -->
          <GetPostDate :time = room.recentlyPostDate />
        </p>
      </div>
      <div class = "room_info_message">
        <p>
          <!-- message -->
          {{ room.recentlyMessage }}
        </p>
      </div>
    </div>
  </div>

</template>

<style scoped>
.room {
  /* border: solid 0.5px #000000; */
  display: flex;
  width: inherit;
  height: 72px;

  .room_icon {
    /* border: solid 0.5px #000000; */
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
    /* border: solid 0.5px #000000; */
    width: 75%;
    height: 72px;
    font-size: 14px;

    .room_info_text {
      display: flex;
      justify-content: space-between;
      padding-top: 8px;

      .room_info_text_name {
        width: 45%;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;

        .room_info_text_count {

        }
      }

      .room_info_text_post_time {
        width: 30%;
        text-align: right;
        padding-top: 2px;
        padding-right: 12px;
        font-size: 12px;
        color: rgb(134, 134, 134);
      }
    }

    .room_info_message {
      width: 70%;
      font-size: 12px;
      line-height: 12px;
      /* overflow-x: hidden; */
      /* text-overflow: ellipsis "[..]"; */
      /* white-space: pre; */
      /* border: solid 0.5px #000000; */
      margin-right: 24px;
      color: rgb(134, 134, 134);

      p {
        font-size: 12px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        /* border: solid 0.5px #000000; */
      }
    }
  }

}
</style>
