<template>
  <div id="tab">
    <router-link tag="div" class="tab-item" to="/movie">
      <span class="tab-link">电影</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/cinema">
      <span class="tab-link">影院</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/performance">
      <span class="tab-link">演出</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/game">
      <span class="tab-link">赛事</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/me">
      <span class="tab-link">我</span>
    </router-link>
  </div>
</template>

<style>
  #tab {
    display: flex;
    height: 44px;
    line-height: 44px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    border-top: 1px solid gray;
  }
  .tab-item {
    flex: 1;
    text-align: center;
  }
</style>
