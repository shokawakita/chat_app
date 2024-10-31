<script setup lang="ts">
import {RouterLink} from 'vue-router'
import SvgIcon from '@jamescoyle/vue-icon';
import {mdiAccount, mdiAccountPlus, mdiSettingsHelper} from '@mdi/js';
import { mdilMessage } from '@mdi/light-js';

</script>

<template>
  <div class="navi_header">
    <nav class="header_list">
      <RouterLink to="/">
          dummy
      </RouterLink>
      <RouterLink to="/friend">
          <svg-icon type="mdi" :path="mdiAccount"></svg-icon>
      </RouterLink>
      <RouterLink to="/talk">
        <svg-icon type="mdi" :path="mdilMessage"></svg-icon>
      </RouterLink>
      <RouterLink to="/add_friend"><svg-icon type="mdi" :path="mdiAccountPlus"></svg-icon></RouterLink>
    </nav>
  </div>

  <div class="navi_footer">
    <nav class="footer_list">
      <RouterLink to="/option">
        <svg-icon type="mdi" :path="mdiSettingsHelper"></svg-icon>
      </RouterLink>
    </nav>
  </div>
</template>

<style scoped>
.navi_header {
  width:86px;
  min-height: max-content;
  position: relative;
  top: 2px;
  left: 2px;
}

.header_list {
  display: flex;
  flex-direction: column;
}

.navi_footer {
  width:86px;
  min-height: max-content;
  display: flex;
  flex-direction: column;
  position: relative;
  top: 500px;
  left: 2px;
}
</style>

