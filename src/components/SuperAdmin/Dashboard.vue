<template>
  <div class="margin">
    <div class="overflow-x-auto relative shadow-md rounded-md">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-2xl text-gray-100 uppercase bg-primary dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="py-3 px-6 whitespace-nowrap">
              แจ้งเหตุการณ์
            </th>
            <th scope="col" class="py-3 px-6 whitespace-nowrap">
              แอดมินเสนอราคา
            </th>
            <th scope="col" class="py-3 px-6 whitespace-nowrap">
              ลูกค้ารับข้อเสนอ
            </th>
            <th scope="col" class="py-3 px-6 whitespace-nowrap">
              ช่างรับงาน
            </th>
            <th scope="col" class="py-3 px-6 whitespace-nowrap">
              ลูกค้าโอนเงิน
            </th>
            <th scope="col" class="py-3 px-6 whitespace-nowrap">
              หมายเหตุ
            </th>
          </tr>
        </thead>
        <tbody class="text-2xl ">
          <tr class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
            <td class="py-4 px-6 whitespace-nowrap ">
                <div class="inline-block font-bold text-green-400">21/10/65 23.15</div>
                <img :src="avatar" :width="size" class="inline-block mx-1 rounded-full" /> 
                <div class="inline-block">มุซอับ สาแหละ : แบตเตอรี่หมด</div>
            </td>
            <td class="py-4 px-6 whitespace-nowrap hover:font-bold ">
            </td>
            <td class="py-4 px-6 whitespace-nowrap hover:font-bold ">
            </td>
            <td class="py-4 px-6 whitespace-nowrap hover:font-bold ">
            </td>
            <td class="py-4 px-6 whitespace-nowrap hover:font-bold ">
            </td>
            <td class="py-4 px-6 whitespace-nowrap font-bold text-green-400">
            </td>
          </tr>

          <tr class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
            <td class="py-4 px-6 whitespace-nowrap ">
                <div class="inline-block">
                  21/10/65 23.15 <img :src="avatar" :width="size" class="inline-block mx-1 rounded-full" /> มุซอับ สาแหละ
                  : แบตเตอรี่หมด
                </div>
            </td>
            <td class="py-4 px-6 whitespace-nowrap font-bold text-yellow-400">
              21/10/65 23.25
            </td>
            <td class="py-4 px-6 whitespace-nowrap hover:font-bold ">
            </td>
            <td class="py-4 px-6 whitespace-nowrap hover:font-bold ">
            </td>
            <td class="py-4 px-6 whitespace-nowrap hover:font-bold ">
            </td>
            <td class="py-4 px-6 whitespace-nowrap hover:font-bold ">
            </td>
          </tr>

          <tr class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
            <td class="py-4 px-6 whitespace-nowrap ">
              <div class="inline-block">
                21/10/65 23.15 <img :src="avatar" :width="size" class="inline-block mx-1 rounded-full" /> มุซอับ สาแหละ
                : แบตเตอรี่หมด
              </div>
            </td>
            <td class="py-4 px-6 whitespace-nowrap ">
              21/10/65 23.25
            </td>
            <td class="py-4 px-6 whitespace-nowrap font-bold text-yellow-400">
              21/10/65 23.30
            </td>
            <td class="py-4 px-6 whitespace-nowrap ">
            </td>
            <td class="py-4 px-6 whitespace-nowrap ">
            </td>
            <td class="py-4 px-6 whitespace-nowrap ">
            </td>
          </tr>

          <tr class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
            <td class="py-4 px-6 whitespace-nowrap ">
              <div class="inline-block">
                21/10/65 23.15 <img :src="avatar" :width="size" class="inline-block mx-1 rounded-full" /> มุซอับ สาแหละ
                : แบตเตอรี่หมด
              </div>
            </td>
            <td class="py-4 px-6 whitespace-nowrap ">
              21/10/65 23.25
            </td>
            <td class="py-4 px-6 whitespace-nowrap ">
              21/10/65 23.30
            </td>
            <td class="py-4 px-6 whitespace-nowrap font-bold text-yellow-400">
              21/10/65 23.40
            </td>
            <td class="py-4 px-6 whitespace-nowrap ">
            </td>
            <td class="py-4 px-6 whitespace-nowrap ">
            </td>
          </tr>

          <tr class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
            <td class="py-4 px-6 whitespace-nowrap ">
              <div class="inline-block">
                21/10/65 23.15 <img :src="avatar" :width="size" class="inline-block mx-1 rounded-full" /> มุซอับ สาแหละ
                : แบตเตอรี่หมด
              </div>
            </td>
            <td class="py-4 px-6 whitespace-nowrap ">
              21/10/65 23.25
            </td>
            <td class="py-4 px-6 whitespace-nowrap ">
              21/10/65 23.30
            </td>
            <td class="py-4 px-6 whitespace-nowrap ">
              21/10/65 23.40
            </td>
            <td class="py-4 px-6 whitespace-nowrap font-bold text-yellow-400" > 
              21/10/65 23.45
            </td>
            <td class="py-4 px-6 whitespace-nowrap ">
            </td>
          </tr>

          <!-- <tr class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
            <td class="py-4 px-6 whitespace-nowrap ">
              <div class="inline-block">
                21/10/65 23.15 <img :src="avatar" :width="size" class="inline-block mx-1 rounded-full" /> มุซอับ สาแหละ
                : แบตเตอรี่หมด
              </div>
            </td>
            <td class="py-4 px-6 whitespace-nowrap ">
              21/10/65 23.25
            </td>
            <td class="py-4 px-6 whitespace-nowrap ">
              21/10/65 23.30
            </td>
            <td class="py-4 px-6 whitespace-nowrap ">
              21/10/65 23.40
            </td>
            <td class="py-4 px-6 whitespace-nowrap ">
              21/10/65 23.45
            </td>
            <td class="py-4 px-6 whitespace-nowrap font-bold text-red-400" v-on:click="sosNew()">
              22/10/65 00.00
            </td>
            <td class="py-4 px-6 whitespace-nowrap ">
              ปิดงานเรียบร้อย
            </td>
          </tr> -->

        </tbody>
      </table>
    </div>
  </div>
  <!-- modal - เเจ้งเหตุการณ์ -->
  <div v-if="SosNew"
    class="overflow-scroll fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">

    <div class="mx-10 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

      <div class="flex items-start justify-between p-3 border-b border-solid border-slate-200 rounded-t">
        <h3 class="text-2xl text-black">
          ไทม์ไลน์การเเจ้ง SOS
        </h3>
        <button
          class="p-1 ml-auto bg-transparent border-0 text-black opacity-100 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
          v-on:click="sosNew()">
          X
        </button>
      </div>

      <form @submit.prevent="AddAdminData" class="p-3" enctype="multipart/form-data">
        <!-- <div class="flex flex-wrap items-center justify-center">
          <div class="bg-white w-full mb-3 rounded-lg dark:bg-gray-800 shadow-md transform duration-200 easy-in-out ">
            <div class="px-7 mb-8">
              <div class="text-black-500 mt-2  dark:text-gray-400 text-3xl font-bold">ข้อมูลผู้แจ้ง</div>
              <div class="mt-0 text-gray-600 px-3 dark:text-gray-300 text-2xl ">
                ชื่อ : มุซอับ สาแหละ เบอร์โทรที่ 1 : 0656078532, เบอร์โทรที่ 2 : 0639958741,
              </div>
              <div class="text-black-500 mt-0  dark:text-gray-400 text-3xl font-bold">ที่เกิดเหตุ</div>
              <div class="mt-0 text-gray-600 px-3 dark:text-gray-300 text-2xl ">
                ถนน 418 ปตท.ท่าสาป
              </div>
              <div class="text-black-500 mt-2  dark:text-gray-400 text-3xl font-bold">ข้อมูลเหตุการณ์</div>
              <div class="mt-0 text-gray-600 px-3 dark:text-gray-300 text-2xl ">
                เเบตเตอรี่หมด
              </div>
              <div class="text-black-500 mt-2  dark:text-gray-400 text-3xl font-bold">เสนอราคา</div>
              <div class="mt-0 text-gray-600 px-3 dark:text-gray-300 text-2xl">
                <input type="text" class=" px-3 bg-gray-50 text-2xl rounded-md shadow-sm w-96"
                  placeholder="เสนอราคา...">
              </div>
              <div class="text-black-500 mt-2  dark:text-gray-400 text-3xl font-bold">รายละเอียดเพิ่มเติม</div>
              <div class="mt-0 text-gray-600 px-3 dark:text-gray-300 text-2xl">
                <textarea class=" px-3 bg-gray-50 text-2xl rounded-md shadow-sm w-96" placeholder="รายละเอียด..."
                  cols="30" rows="5"></textarea>
              </div>
              <button class="p-3 m-3 bg-green-500 text-2xl text-white shadow-md rounded-md">เสนอราคา</button>
            </div>
          </div>
        </div> -->
<!-- <ol class="relative border-l border-gray-200 dark:border-gray-700">                  
    <li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-xl font-normal leading-none text-gray-400 dark:text-gray-500">29/10/65 21.30</time>
        <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">เเจ้งเหตุการณ์</h3>
        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"></p>
    </li>
    <li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-xl font-normal leading-none text-gray-400 dark:text-gray-500">29/10/65 22.00</time>
        <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">เสนอราคา</h3>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400"></p>
    </li>
    <li class="ml-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-xl font-normal leading-none text-gray-400 dark:text-gray-500">29/10/65 22.10</time>
        <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">ตอบรับข้อเสนอ</h3>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400"></p>
    </li>
</ol> -->


 <!-- <div class="px-10 bg-white py-6 flex flex-col justify-center sm:py-12 shadow-md rounded-md">
  <div class="py-3 w-full px-2 sm:px-0">

    <div class="relative text-gray-700 antialiased text-sm font-semibold">


      <div class="hidden sm:block w-1 bg-gray-300 absolute h-full left-1/2 transform -translate-x-1/2"></div>

      <div class="mt-6 sm:mt-0 sm:mb-12">
        <div class="flex flex-col xl:flex-row items-center">
          <div class="flex justify-start w-full mx-auto items-center">
            <div class="w-full sm:w-1/2 sm:pr-8">
              <div class="p-4 bg-white rounded shadow">
                <time class="mb-1 text-xl font-normal leading-none text-gray-400 dark:text-gray-500">29/10/65 21.30</time>
        <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">เเจ้งเหตุการณ์</h3>
              </div>
            </div>
          </div>
          <div class="rounded-full bg-gray-300 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </div>
        </div>
      </div>

      <div class="mt-6 sm:mt-0 sm:mb-12">
        <div class="flex flex-col sm:flex-row items-center">
          <div class="flex justify-end w-full mx-auto items-center">
            <div class="w-full sm:w-1/2 sm:pl-8">
              <div class="p-4 bg-white rounded shadow">
                <time class="mb-1 text-xl font-normal leading-none text-gray-400 dark:text-gray-500">29/10/65 22.00</time>
        <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">เสนอราคา</h3>
              </div>
            </div>
          </div>
          <div class="rounded-full bg-gray-300 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </div>
        </div>
      </div>

      <div class="mt-6 sm:mt-0 sm:mb-12">
        <div class="flex flex-col sm:flex-row items-center">
          <div class="flex justify-start w-full mx-auto items-center">
            <div class="w-full sm:w-1/2 sm:pr-8">
              <div class="p-4 bg-white rounded shadow">
                <time class="mb-1 text-xl font-normal leading-none text-gray-400 dark:text-gray-500">29/10/65 22.10</time>
        <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">ตอบรับข้อเสนอ</h3>
              </div>
            </div>
          </div>
          <div class="rounded-full bg-gray-300 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>

    </div>

  </div>
</div> -->

      </form>
    </div>
  </div>
  <div v-if="SosNew" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
</template>
  
<script>
//location.reload();
import axios from "axios";
import http from '@/service/api.js';

export default {
  name: 'DashBoard',
  props: {
    msg: String
  },
  data() {
    return {
      user_id: '',
      abc: '',
      avatar: '',
      size: '30',
      SosNew: false,
    }
  },
  mounted() {
    this.getUser();
    this.getMyProfileData();
   // location.reload();
  },
  methods: {
    sosNew: function () {
      this.SosNew = !this.SosNew;
    },
    loadOnce:function(){
      location.reload();
    },
    getUser() {
      http.get('getUser')//http://racroad-api.test/api/
        .then((response) => {
          this.user_id = response.data.data.id;
          this.message = response.data.message;
          this.abc = response.data.data.id;
          this.getMyProfileData();
          this.CheckLogin();
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
              
    // CheckLogin() {
    //       if (this.abc > 0) {
    //         this.$router.go()
    //       }
    //         this.abc = 0;
    // },
  }
}
</script>
<style>
.margin {
  margin-inline: 5%;
}
</style>