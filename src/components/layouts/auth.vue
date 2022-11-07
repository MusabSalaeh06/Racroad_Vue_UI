<template>  
  <nav class="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
    <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
      <!-- <a class="navbar-brand brand-logo mr-5" href="index.html"><img src="images/logo.svg" class="mr-2" alt="logo"/></a>
        <a class="navbar-brand brand-logo-mini" href="index.html"><img src="images/logo-mini.svg" alt="logo"/></a> -->
      <div class="navbar-brand brand-logo mr-5 text-5xl font-bold">RacRoad</div>
      <div class="navbar-brand brand-logo-mini font-bold">RacRoad</div>
    </div>
    <div class="navbar-menu-wrapper d-flex align-items-center justify-content-end">
      <ul class="navbar-nav mr-lg-2">
        <li class="nav-item nav-search d-none d-lg-block">
        </li>
      </ul>
      <ul class="navbar-nav navbar-nav-right">
        <li class="nav-item dropdown">
        </li>
        <li class="nav-item nav-profile dropdown">
        </li>
      </ul>
    </div>
  </nav>  
      <router-view />
</template>
  
  <script>
  import Swal from 'sweetalert2';
  import axios from "axios";
  import http from '@/service/api.js';
  //import Login from './components/SuperAdmin/Login.vue'
  
  export default {
    name: 'AuthLO',
    // components: {
    //   Login,
    // },
    data() {
      return {
        user_id: '',
        layout: '',
        name: '',
        tel: '',
        email: '',
        card_id: '',
        avatar: '',
        address: '',
      }
    },
    mounted() {
      this.getUser();
      this.getMyProfileData();
    },
    methods: {
      Logout() {
            localStorage.setItem('token','')
            this.layout = 1;
            this.$router.push('/login')
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'ออกจากระบบเรียบร้อย',
              showConfirmButton: false,
              timer: 2000
            })
      },
      getUser() {
        http.get('getUser')//http://racroad-api.test/api/
          .then((response) => {
            this.user_id = response.data.data.id;
            this.message = response.data.message;
            this.getMyProfileData();
            console.log(this.user_id)
            console.log(this.message)
          })
      },
      getMyProfileData() {
        axios.get('http://racroad-api.test/api/my/profile/'+this.user_id).then((response) => {
          this.name = response.data.data.my_profile.name;
          this.tel = response.data.data.my_profile.tel;
          this.email = response.data.data.my_profile.email;
          this.card_id = response.data.data.my_profile.card_id;
          this.avatar = response.data.data.my_profile.avatar;
          this.address = response.data.data.my_profile.address;
        });
      },
    },
  }
  </script>