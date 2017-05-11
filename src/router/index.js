import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import TimeEntries from '@/components/TimeEntries';
// import LogTime from '@/components/LogTime';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/time-entries',
    name: 'TimeEntries',
    component: TimeEntries,
    children: [{
      path: 'log-time',
      name: 'LogTime',
      //懒加载
      component: resolve => require(['../components/LogTime.vue'], resolve)
    }]
  }
];

const router = new Router({
  routes: routes
});

export default router;
