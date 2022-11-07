<template>
      <head>
        <link rel="stylesheet" href="../../vendors/mdi/css/materialdesignicons.min.css">
      </head>
      <div class="container-scroller">
        <nav class="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
          <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
            <!-- <a class="navbar-brand brand-logo mr-5" href="index.html"><img src="images/logo.svg" class="mr-2" alt="logo"/></a>
          <a class="navbar-brand brand-logo-mini" href="index.html"><img src="images/logo-mini.svg" alt="logo"/></a> -->
            <div class="navbar-brand brand-logo mr-5 text-5xl font-bold">RacRoad</div>
          </div>
          <div class="navbar-menu-wrapper d-flex align-items-center justify-content-end">
            <button class="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
              <span class="icon-menu"></span>
            </button>
            <ul class="navbar-nav mr-lg-2">
              <li class="nav-item nav-search d-none d-lg-block">
              </li>
            </ul>
            <ul class="navbar-nav navbar-nav-right">
              <li class="nav-item dropdown">
                <a class="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#"
                  data-toggle="dropdown">
                  <i class="icon-bell mx-0"></i>
                  <span class="count"></span>
                </a>
                <div class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                  aria-labelledby="notificationDropdown">
                  <p class="mb-0 font-weight-normal float-left dropdown-header text-xl">การเเจ้งเตือน</p>
                  <router-link to="/Respond-technician" class="dropdown-item preview-item">
                    <div class="preview-thumbnail">
                      <div class="preview-icon bg-info">
                        <i class="ti-user mx-0"></i>
                      </div>
                    </div>
                    <div class="preview-item-content">
                      <h6 class="preview-subject font-weight-normal text-xl">มีผู้ใช้ต้องการขอสิทธ์เป็นช่าง</h6>
                      <p class="font-weight-light small-text mb-0 text-muted">
                        17 นาทีที่เเล้ว
                      </p>
                    </div>
                  </router-link>
                  <router-link to="/Respond-club" class="dropdown-item preview-item">
                    <div class="preview-thumbnail">
                      <div class="preview-icon bg-info">
                        <i class="mdi mdi-home ml-2"></i>
                      </div>
                    </div>
                    <div class="preview-item-content">
                      <h6 class="preview-subject font-weight-normal text-xl">มีผู้ใช้ต้องการเปิดคลับ</h6>
                      <p class="font-weight-light small-text mb-0 text-muted">
                        35 นาทีที่เเล้ว
                      </p>
                    </div>
                  </router-link>
                </div>
              </li>
              <li class="nav-item nav-profile dropdown">
                <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" id="profileDropdown">
                  <img :src="avatar" alt="profile" class="object-cover" />
                </a>
                <div class="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
                  <router-link to="/My-profile" class="dropdown-item">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="w-5 h-5 text-primary mr-1">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
  
                    <div class="text-xl">โปรไฟล์ของฉัน</div>
                  </router-link>
                  <a class="dropdown-item">
                    <i class="ti-settings text-primary"></i>
                    <div class="text-xl">การตั้งค่า</div>
                  </a>
                  <router-link to="/Login" class="dropdown-item">
                    <i class="ti-power-off text-primary"></i>
                    <button type="button" class="text-xl" v-on:click="Logout()" >ออกจากระบบ</button>
                  </router-link>
                </div>
              </li>
            </ul>
            <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button"
              data-toggle="offcanvas">
              <span class="icon-menu"></span>
            </button>
          </div>
        </nav>
        <div class="container-fluid page-body-wrapper">
          <nav class="sidebar sidebar-offcanvas" id="sidebar">
            <ul class="nav">
              <li class="nav-item">
                <router-link to="/" class="nav-link">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 mr-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                  </svg>
  
                  <span class="menu-title">
                    <div class="text-2xl">แดชบอร์ด</div>
                  </span>
                </router-link>
              </li>
              <!-- <li class="nav-item">
              <a class="nav-link" data-toggle="collapse" href="#sos" aria-expanded="false" aria-controls="sos">
                <i class="mdi mdi-book-minus menu-icon"></i>
                <span class="menu-title"><div class="text-2xl">รายการ SOS</div></span>
                <i class="menu-arrow"></i>
              </a>
              <div class="collapse" id="sos">
                <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                  <router-link to="/Sos/New" class="nav-link">
                    <span><div class="text-xl">SOS เข้าใหม่</div></span>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/Sos/Respond" class="nav-link">
                    <span><div class="text-xl">SOS ตอบรับเเล้ว</div></span>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/Sos/Working" class="nav-link">
                    <span><div class="text-xl">SOS กำลังดำเนินการ</div></span>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/Sos/Pay" class="nav-link">
                    <span><div class="text-xl">SOS โอนเงินเเล้ว</div></span>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/sos/success" class="nav-link">
                    <span><div class="text-xl">SOS ปิดงานเเล้ว</div></span>
                  </router-link>
                </li>
                </ul>
              </div>
            </li> -->
              <li class="nav-item">
                <a class="nav-link" data-toggle="collapse" href="#respond" aria-expanded="false" aria-controls="respond">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 mr-2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
  
                  <span class="menu-title">
                    <div class="text-2xl">รายการอนุมัติ</div>
                  </span>
                  <i class="menu-arrow"></i>
                </a>
                <div class="collapse" id="respond">
                  <ul class="nav flex-column sub-menu">
                    <li class="nav-item">
                      <router-link to="/Respond-club" class="nav-link">
                        <span>
                          <div class="text-xl">อนุมัติคำขอเปิดคลับ</div>
                        </span>
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="/Respond-technician" class="nav-link">
                        <span>
                          <div class="text-xl">อนุมัติคำขอสิทธิ์เป็นช่าง</div>
                        </span>
                      </router-link>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="collapse" href="#users" aria-expanded="false" aria-controls="users">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 mr-2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
  
                  <span class="menu-title">
                    <div class="text-2xl">รายการผู้ใช้ระบบ</div>
                  </span>
                  <i class="menu-arrow"></i>
                </a>
                <div class="collapse" id="users">
                  <ul class="nav flex-column sub-menu">
                    <li class="nav-item">
                      <router-link to="/SuperAdmin" class="nav-link">
                        <span>
                          <div class="text-xl">ผู้ดูเเลระบบ</div>
                        </span>
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="/User" class="nav-link">
                        <span>
                          <div class="text-xl">ผู้ใช้ทั่วไป</div>
                        </span>
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="/User-technician" class="nav-link">
                        <span>
                          <div class="text-xl">ช่างซ่อม</div>
                        </span>
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="/Club" class="nav-link">
                        <span>
                          <div class="text-xl">คลับที่ให้บริการ</div>
                        </span>
                      </router-link>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-item">
                <router-link to="/Car-Data" class="nav-link">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 mr-2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                  </svg>
  
  
                  <span class="menu-title">
                    <div class="text-2xl">จัดการข้อมูลรถยนต์</div>
                  </span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/Report/sos" class="nav-link">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 mr-2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
  
  
                  <span class="menu-title">
                    <div class="text-2xl">รายงาน SOS</div>
                  </span>
                </router-link>
              </li>
            </ul>
          </nav>
          <div class="main-panel">
            <div class="content-wrapper">
              <router-view />
            </div>
          </div>
        </div>
      </div>
  </template>
  
  <script>
  import Swal from 'sweetalert2';
  import axios from "axios";
  import http from '@/service/api.js';
  //import Login from './components/SuperAdmin/Login.vue'
  
  export default {
    name: 'DefaultLO',
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
            this.layout = '';
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
            this.layout = this.user_id;
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