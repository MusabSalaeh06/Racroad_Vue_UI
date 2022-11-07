import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/My-profile',
    name: 'MyProfile',
    component: () => import('../components/SuperAdmin/MyProfile.vue')
  },
  {
    path: '/Respond-club',
    name: 'RespondClub',
    component: () => import('../components/Respond/RespondClub.vue')
  },
  {
    path: '/Respond-technician',
    name: 'RespondTechnician',
    component: () => import('../components/Respond/RespondTechnician.vue')
  },
  {
    path: '/Report/sos',
    name: 'ReportSOS',
    component: () => import('../components/SOS/Report-sos.vue')
  },
  {
    path: '/Sos/New',
    name: 'SosNew',
    component: () => import('../components/SOS/SosNew.vue')
  },
  {
    path: '/Sos/Pay',
    name: 'SosPay',
    component: () => import('../components/SOS/SosPay.vue')
  },
  {
    path: '/Sos/Respond',
    name: 'SosRespond',
    component: () => import('../components/SOS/SosRespond.vue')
  },
  {
    path: '/Sos/Success',
    name: 'SosSuccess',
    component: () => import('../components/SOS/SosSuccess.vue')
  },
  {
    path: '/Sos/Working',
    name: 'SosWorking',
    component: () => import('../components/SOS/SosWorking.vue')
  },
  {
    path: '/Timeline/sos',
    name: 'TimelineSOS',
    component: () => import('../components/SOS/Timeline-sos.vue')
  },
  {
    path: '/SuperAdmin',
    name: 'SuperAdmin',
    component: () => import('../components/SuperAdmin/SuperAdmin.vue')
  },
  {
    path: '/User-technician',
    name: 'Technician',
    component: () => import('../components/Technician/Technician.vue')
  },
  {
    path: '/Technician-Detail/:id',
    name: 'TechnicianDetail',
    component: () => import('../components/Technician/TechnicianDetail.vue')
  },
  {
    path: '/Technician-Edit/:id',
    name: 'TechnicianEdit',
    component: () => import('../components/Technician/TechnicianEdit.vue')
  },
  {
    path: '/User',
    name: 'User',
    component: () => import('../components/Users/User.vue')
  },
  {
    path: '/User-Detail/:id',
    name: 'UserDetail',
    component: () => import('../components/Users/UserDetail.vue')
  },
  {
    path: '/User-Edit/:id',
    name: 'UserEdit',
    component: () => import('../components/Users/EditUser.vue')
  },
  {
    path: '/Club',
    name: 'Club',
    component: () => import('../components/Club/Club.vue')
  },
  {
    path: '/Club-Detail/:id',
    name: 'ClubDetail',
    component: () => import('../components/Club/ClubDetail.vue')
  },
  {
    path: '/Club-Edit/:id',
    name: 'ClubEdit',
    component: () => import('../components/Club/EditClub.vue')
  },
  {
    path: '/Car-Data',
    name: 'CarData',
    component: () => import('../components/Car/CarData.vue')
  },
  {
    path: '/Car-Edit/:id',
    name: 'CarEdit',
    component: () => import('../components/Car/EditCar.vue')
  },
  {
    path: '/Dashboard',
    name: 'DashBoard',
    component: () => import('../components/SuperAdmin/Dashboard.vue')
  },
  {
    path: '/',
    name: 'Login',
    component: () => import('../components/SuperAdmin/Login.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
