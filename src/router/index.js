import Vue from 'vue'
import Router from 'vue-router'
import AnnouncementDetail from '@/components/AnnouncementDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AnnouncementDetail',
      component: AnnouncementDetail
    }
  ]
})
