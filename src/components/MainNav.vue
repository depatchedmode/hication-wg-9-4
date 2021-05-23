<template>
  <nav class="main-nav">
    <a class="main-nav-logo" href="#">
      <img src="../assets/logo.svg"/>
    </a>
    <div class="main-nav-options">
      <a class="dark-mode-toggle">
        <img src="../assets/moon.svg"/>
      </a>
      <a class="menu-toggle" @click="toggleMenu">
        <img src="../assets/menu.svg"/>
      </a>
    </div>
  </nav>
  <div class="flyout-menu" v-if="state.menuOpen">
    <div class="flyout-menu-block create-block">
      <a>Create OBJKT</a>
      <a>My profile</a>
      <a>My collection</a>
    </div>
    <div class="flyout-menu-block explore-block">
      <a>Explore OBJKTs</a>
      <a>Galleries</a>
      <a>Help Center</a>
      <a>About hicetnunc</a>
    </div>
    <div class="flyout-menu-block profile-block">
      <a class="avatar"></a>
      <div>
        <div class="unsync"><img src="../assets/exit.svg"/>&nbsp;Unsync</div>
        <div>tz54A...q77zf</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const state = reactive({ 
  menuOpen: false 
});

const toggleMenu = () => {
  state.menuOpen = !state.menuOpen
}
</script>

<style scoped>
.main-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
}
.main-nav-options {
  display: flex;
  align-items: center;
}
.menu-toggle {
  margin-left: 16px;
}

.flyout-menu {
  position: absolute;
  top: 48px;
  left: 0; 
  right: 0;
  bottom: 0;
  border-top: 1px solid #000;
  display: flex;
  flex-direction: column;
}
@media screen and (min-width: 420px) {
  .flyout-menu {
    position: absolute;
    left: unset;
    bottom: unset;
    top: 48px;
    right: 16px;
    border: 1px solid #000;
  }
}
.flyout-menu-block {
  padding: 16px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #000;
  min-width: 224px;
}
.explore-block {
  flex-grow: 1;
}
.profile-block {
  background: #000;
  color: #fff;
  flex-direction: row;
  align-items: center;
  flex-shrink: 1;
}
.unsync {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.avatar {
  display: block;
  width: 36px;
  height: 36px;
  background: #b7b7b7;
  border-radius: 50%;
  margin-right: 16px;
}
</style>
