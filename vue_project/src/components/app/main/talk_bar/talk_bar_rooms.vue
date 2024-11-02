<script setup lang="ts">
import TalkBarRoom from './talk_bar_room.vue'
import type {Room} from '../../../functions/index.ts'
import rooms from '../../../../data/data.ts'
import { ref } from 'vue';

const roomsRef:Room[] = ref(rooms)

</script>

<template>
  <ul>
    <li v-for="room in roomsRef" :key="room.id">
      <TalkBarRoom
        :room = "room"
      />
    </li>
  </ul>
</template>

<style scoped>
  template {
    /* border: solid 3px #000000; */
  }

  ul {
      list-style: none;
      margin: 0;
      padding: 0px;

    li {
      list-style: none;
      margin: 0;
      padding: 0px;
    }
  }
</style>
