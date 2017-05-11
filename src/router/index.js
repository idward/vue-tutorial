import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import TimeEntries from '@/components/TimeEntries';

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
    component: TimeEntries
  },
  {
    path: '/time-entries/log-time',
    name: 'LogTime',
    component: LogTime
  }
];

const router = new Router({
  routes: routes
});

export default router;
