<template>
  <div class="profile-card">
    <div class="avatar"></div>
    <div class="details">
      <h1 class="name">ProfileName</h1>
      <p class="bio">Profile name written here long story in this profile</p>
      <div class="social-links">
        <a><img src="../assets/tezos.svg"></a>
        <a><img src="../assets/instagram-black.svg"></a>
        <a><img src="../assets/twitter-black.svg"></a>
        <a><img src="../assets/web.svg"> </a>
      </div>
    </div>
  </div>
  <div class="gallery-nav">
    <nav class="gallery-tabs">
      <span class="tab tab-active">Creations</span>
      <span class="tab">Collections</span>
    </nav>
    <div class="gallery-info-toggle">
      hide info
      <a 
        @click="state.hideInfo = !state.hideInfo" 
        :class="{ enabled: state.hideInfo }"
        class="gallery-info-toggle-btn">
      </a>
    </div>
  </div>
  <div class="gallery">
    gallery goes here
  </div>
</template>

<script setup>
import { reactive } from 'vue'
const state = reactive({ 
  hideInfo: true 
})
</script>

<style scoped>
.profile-card {
  display: flex;
  padding: 56px 16px;
}
.name {
  font-size: 18px;
}
.avatar {
  flex-shrink: 0;
  margin-right: 16px;
  width: 112px;
  height: 112px;
  border-radius: 50%;
  background: #b7b7b7;
}
.bio {
  margin-bottom: 16px;
}
.social-links {
  display: flex;
}
.social-links > * {
  padding-right: 20px;
}
.tab {
  padding: 8px;
}
.tab-active {
  background: #eaeaea;
}
.gallery-nav {
  padding: 16px;
  display: flex;
  justify-content: space-between;
}
.gallery-info-toggle {
  display: flex;
  align-items: center;
}
.gallery-info-toggle-btn {
  margin-left: 8px;
  display: inline-block;
  width: 24px;
  height: 14px;
  background: #b7b7b7;
  border-radius: 8px;
  position: relative;
}
.gallery-info-toggle-btn.enabled {
  background: #000;
}
.gallery-info-toggle-btn::before {
  content: '';
  border-radius: 4px;
  background: #fff;
  width: 8px;
  height: 8px;
  position: absolute;
  top: 3px;
  left: 3px;
}
.gallery-info-toggle-btn.enabled::before {
  left: unset;
  right: 3px;
}

.gallery {
  padding: 0 16px 16px;
}

@media screen and (min-width: 420px) {
  .profile-card {
    padding: 88px 16px;
    margin: 0 auto;
    max-width: 640px;
  }
  .avatar {
    margin-right: 32px;
  }
  .name {
    font-size: 30px;
  }
}
</style>
