import Vue from 'vue'
import Router from 'vue-router'
import Movie from 'components/movie/movie'
import Cinema from 'components/cinema/cinema'
import Performance from 'components/performance/performance'
import Game from 'components/game/game'
import Me from 'components/me/me'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/movie'
    },
    {
      path: '/movie',
      component: Movie
    },
    {
      path: '/cinema',
      component: Cinema
    },
    {
      path: '/performance',
      component: Performance
    },
    {
      path: '/game',
      component: Game
    },
    {
      path: '/me',
      component: Me
    }
  ]
})
