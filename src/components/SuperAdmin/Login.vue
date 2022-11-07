<template>
  <div class="content-wrapper">
    <div class="content-wrapper d-flex align-items-center auth px-0 py-20 my-28">
      <div class="row w-100 mx-0">
        <div class="col-lg-4 mx-auto">
          <div class="auth-form-light text-left py-5 px-4 px-sm-5">
            <div class="brand-logo">
            </div>
            <div class="text-3xl">ยินดีต้อนรับผู้ดูเเลระบบ RacRoad</div>
            <div class="font-weight-light text-xl"></div>
            <form @submit.prevent="Login" class="p-3" enctype="multipart/form-data">
              <div class="form-group text-2xl">
                <input type="tel" v-model="tel" class="w-full text-xl p-3  rounded-lg shadow-sm" placeholder="กรอกเบอร์โทรศัพท์...">
              </div>
              <div class="form-group">
                <input type="password" v-model="password" class="w-full text-xl p-3  rounded-lg shadow-sm" placeholder="กรอกรหัสผ่าน...">
              </div>
              <div class="mt-3">
                <!-- <router-link to="/" class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">
                  <div class="text-2xl" v-on:click="User()">เข้าสู่ระบบ</div>
                </router-link> -->
                <center>
                <button type="submit" class="text-2xl text-white bg-primary p-2 py-3  rounded-md shadow-md ">
                  เข้าสู่ระบบ
                </button>
                </center>
              </div>
              <div class="my-2 d-flex justify-content-between align-items-center">
              </div>
              <div class="mb-2">
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
    
<script>
import http from '@/service/api.js';
import axios from "axios";
import Swal from 'sweetalert2';
export default {
  name: 'LogIn',
  data() {
    return {
      user_id : '',
      user : '',
      status: '',
      id: '',
      name: '',
      email: '',
      message: '',
    }
  },
  mounted() {
    this.getUser();
  },
  methods: {
    Login(e) {
      this.submitted = true;
      e.preventDefault();
      let upload = new FormData();
      upload.append('tel', this.tel)
      upload.append('password', this.password)
      axios.post('http://racroad-api.test/api/admin/login', upload)
        .then((response) => {
          localStorage.setItem('token',response.data.data.token)
          if (response.data.message == 'เข้าสู่ระบบสำเร็จ') {
                Swal.fire({
                position: 'top-end',
                title: response.data.message,
                icon: 'success',
                confirmButtonText: 'รับทราบ'
              }).then((result) => {
                if (result.isConfirmed) {
                  this.$router.go()
                }
              })
          }else{
            Swal.fire({
            position: 'top-end',
            title: response.data.message,
            icon: 'error',
            confirmButtonText: 'รับทราบ'
            }).then((result) => {
            if (result.isConfirmed) {
              this.$router.go()
            }
            })
          }
          //text: response.data.message,
          //this.$router.push('/Dashboard')
          // Swal.fire({
          //   position: 'top-center',
          //   icon: 'success',
          //   title: 'กำลังเข้าสู่ระบบ',
          //   showConfirmButton: false,
          //   timer: 2000
          // })
          //this.$router.go()
          //location.reload();
          // Swal.fire({
          //   title: 'การเข้าสู่ระบบ',
          //   text: this.message,
          //   icon: 'success',
          //   confirmButtonText: 'รับทราบ'
          // })
          // Swal.fire(
          //   'LOGIN',
          //   this.message,
          //   'success'
          // )
          // Swal.fire(this.message)
        })
        
    },
    getUser() {
      http.get('getUser')//http://racroad-api.test/api/
        .then((response) => {
          this.user_id = response.data.data.id;
          this.message = response.data.message;
          this.CheckLogin();
          console.log(this.user_id)
          console.log(this.message)
        })
    },
    CheckLogin() {
          if (this.user_id > 0) {
            this.$router.push('/Dashboard')
          }
    },
  },
}
</script>
<style scoped>
.margin {
  margin-top: 10%;
}
</style>
    