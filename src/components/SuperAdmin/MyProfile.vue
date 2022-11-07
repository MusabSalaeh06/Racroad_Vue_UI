<template>
    <div
        class="flex mb-3 items-center justify-between text-3xl mr-2 font-bold mb-1 text-gray-100 bg-primary w-full p-2 shadow-md rounded-md">
        <div class="flex items-center">
            <span>โปรไฟล์ของฉัน</span>
        </div>
    </div>

    <div class="flex flex-wrap items-center justify-center">
            <div class="bg-white w-full mb-3 rounded-lg dark:bg-gray-800 shadow-md transform duration-200 easy-in-out ">
                <div class="flex justify-start px-5 pt-3 mb-3">
                    <span clspanss="block relative h-24 w-24">
                        <img alt="Photo by aldi sigun on Unsplash" :src="avatar"
                            class="mx-auto object-cover rounded-full h-44 w-44 bg-white p-1" />
                    </span>
                </div>
                <div class="">
                    <div class="px-7 mb-8">
                        <h2 class="text-4xl font-bold text-black-800 dark:text-gray-300">{{name}}</h2>
                        <div class="text-black-500 mt-2  dark:text-gray-400 text-3xl ">ข้อมูลส่วนตัว</div>
                        <div class="mt-0 text-gray-600 px-3 dark:text-gray-300 text-2xl ">
                            เบอร์โทร : {{tel}}, บัตรประจำตัวประชาชน : {{card_id}}, อีเมล : {{email}}
                        </div>
                        <div class="text-black-500 mt-0  dark:text-gray-400 text-3xl ">ข้อมูลที่อยู่</div>
                        <div class="mt-0 text-gray-600 px-3 dark:text-gray-300 text-2xl ">
                            {{address}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>
    
<script>
import axios from "axios";
import http from '@/service/api.js';
//import Swal from 'sweetalert2';
export default {
  name: 'MyProfile',
  data() {
    return {
        user_id: '',
        name : '',
        tel : '',
        email : '',
        card_id : '',
        avatar : '',
        address : '',
    }
  },
mounted() {
    this.getUser();
    this.getMyProfileData();
},
  methods: {
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
    <style>
      .margin {
        margin-inline: 5%;
      }
    </style>
    