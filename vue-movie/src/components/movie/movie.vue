<template>
  <div id="movie">
    <div id="movie-header">
      <div class="position">
        <span>北京</span>
      </div>
      <div class="movie-tabs">
        <div class="movie-tabs-item">
          <span>正在上映</span>
        </div>
        <div class="movie-tabs-item">
          <span>即将上映</span>
        </div>
      </div>
      <div class="search">
        <span>搜索</span>
      </div>
    </div>

    <movie-list></movie-list>
  </div>
</template>

<script type="text/ecmascript-6">
  import MovieList from 'components/movielist/movielist'

  export default {
    components: {
      MovieList
    }
  }
</script>

<style>
  #movie {
    position: fixed;
    top: 0;
    bottom: 45px;
    left: 0;
    right: 0;
  }
  #movie-header {
    height: 30px;
    line-height: 30px;
    display: flex;
    border-bottom: 1px solid gray;
  }
  .position {
    flex: 1;
  }
  .position span {
    padding: 0 5px;
  }
  .movie-tabs {
    display: flex;
  }
  .search {
    flex: 1;
    text-align: right;
  }
  .search span {
    padding: 0 5px;
  }
  .movie-tabs-item {
    flex: 1;
  }
  .movie-tabs-item span {
    padding: 0 5px;
  }
</style>


