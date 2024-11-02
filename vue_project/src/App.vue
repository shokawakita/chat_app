<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
import MenuBar from "./components/app/menu_bar/menu_bar.vue"
import { RouterView } from 'vue-router'
import TalkMain from './components/app/main/talk_main/talk_main.vue'

// export default defineComponent({
//   setup() {
//     const state = reactive({
//       count: 0,
//     });

//     const increment = () => ({
//       state.count++;
//     });

//     const decrement = () => ({
//       state.count--;
//     });

//     const double = computed(() => {
//       return state.count * 2;
//     });

//     return {
//       state,
//       increment,
//       decrement,
//       double,
//     }
//   }
// })



</script>

<template>
  <body>
    <header>
      <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
      <div class="menu_bar">
        <MenuBar/>
      </div>
    </header>
    <main>
      <div class="talk_header">
        <!-- <HelloWorld/> -->
        <!-- <RouterView /> -->
      </div>
      <div class="talk_area">
        <div class="talk_bar">
          <!-- <HelloWorld/>
          <RouterView /> -->
          <RouterView />
        </div>
        <div class="talk_main">
          <!-- <HelloWorld/> -->
          <TalkMain />
        </div>
      </div>
    </main>
  </body>

</template>

<style scoped>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  height: 100vh;
  width: 100vh;
  background-color: rgb(244, 226, 226);

  header {
    height: 100vh;
    width:64px;
    min-height: max-content;
    background-color: rgb(145, 99, 163);

    .menu_bar {
      width:64px;
      min-height: max-content;
      text-align: center;
      /* display: flex;
      flex-direction: column; */
    }
  }

  main {
    height: inherit;
    position: absolute;
    top: 0px;
    right: 0px;
    left: 64px;
    background-color: rgb(163, 99, 132);
    width: calc(100% - 64px);
    .talk_header {
      height: 56px;
      background-color: rgb(205, 83, 39);
    }

    .talk_area {
      /* background-color: rgb(60, 60, 58); */
      position: absolute;
      display: flex;
      top: 56px;
      right: 0px;
      left: 0px;
      border: solid 1px #000000;

      .talk_bar {
        height: calc(100vh - 56px);
        width: 320px;
        background-color: rgb(255, 255, 255);
        position: absolute;
        top: 0px;
        right: 0px;
        left: 0px;
        border: solid 1px #000000;
      }

      .talk_main {
        position: absolute;
        top: 0px;
        /* left: calc(56px + 320px); */
        left: 320px;
        height: calc(100vh - 56px);
        width: calc(100%);
        border: solid 1px #000000;
        /* background-color: rgb(255, 0, 0); */
      }
    }

  }

}


/* header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
} */
/*
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    margin-left: -1rem;
    text-align: left;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
