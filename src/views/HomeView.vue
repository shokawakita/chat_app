<script lang="ts">
import {applyReactInVue, applyPureReactInVue} from 'veaury';
import {ref} from 'vue';
import ChatReactComponent from '../react_app/Chat.jsx';
const config = {
  APP_ID: "YOUR_SENDBIRD_APP_ID",
  USER_ID: "Bob_1",
  NICKNAME: "Bob"
}
export default {
  components: {
    Chat: applyPureReactInVue(ChatReactComponent)
  },
  setup() {
    const userRef = ref(null);
    const messageCountRef = ref(null);
    return {
      config:config,
      setSbUserInfo: (user:any)=>{
        userRef.value = user;
      },
      setUnreadMessageCount: (count:any)=>{
        messageCountRef.value = count;
      },
      sbUserInfo: userRef,
      messageCount: messageCountRef
    }
  }
}
</script>
<template>
  <header class="header">
  <svg class="logo" viewBox="0 0 128 128" width="24" height="24" data-v-97393f76=""><path fill="#42b883" d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z" data-v-97393f76=""></path><path fill="#35495e" d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z" data-v-97393f76=""></path></svg>
    Your Vue.js App
      <div class="message-count">
        <img class="message-icon" src="src/assets/message.png" alt=""/>
        <div class="current-count" v-if="messageCount> 0 ">{{messageCount}}</div>
      </div>
      <div class="nickname">{{sbUserInfo?.nickname}}</div>
  </header>
  <main>
      <Chat :config="config" :setSbUserInfo="setSbUserInfo" :setUnreadMessageCount="setUnreadMessageCount"/>
  </main>
</template>
<style scoped>

</style>
