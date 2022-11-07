<template>
  <div
    class="flex mb-3 items-center justify-between text-3xl mr-2 font-bold mb-1 text-gray-100 bg-primary w-full p-2 shadow-md rounded-md">
    <div class="flex items-center">
      <span>ไทม์ไลน์การเเจ้ง SOS</span>
    </div>
  </div>

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
              <router-link to="/" class="hover:font-bold hover:text-green-400">
              <button class="p-3 m-3 bg-green-500 text-2xl text-white shadow-md rounded-md">เสนอราคา</button>
              </router-link>
            </div>
          </div>
        </div> -->
  <!-- <div class="p-5 my-3 bg-white rounded-md shadow-lg ">
    <ol class="relative border-l border-gray-200 dark:border-gray-700">
      <li class="mb-10 ml-4">
        <div
          class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
        </div>
        <time class="mb-1 text-xl font-normal leading-none text-gray-400 dark:text-gray-500">29/10/65 21.30</time>
        <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">เเจ้งเหตุการณ์</h3>
        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"></p>
      </li>
      <li class="mb-10 ml-4">
        <div
          class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
        </div>
        <time class="mb-1 text-xl font-normal leading-none text-gray-400 dark:text-gray-500">29/10/65 22.00</time>
        <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">เสนอราคา</h3>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400"></p>
      </li>
      <li class="ml-4">
        <div
          class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
        </div>
        <time class="mb-1 text-xl font-normal leading-none text-gray-400 dark:text-gray-500">29/10/65 22.10</time>
        <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">ตอบรับข้อเสนอ</h3>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400"></p>
      </li>
    </ol>
  </div> -->

 
  <div class="px-10 bg-white py-6 flex flex-col justify-center sm:py-12 shadow-md rounded-md">
  <div class="py-3 w-full px-2 sm:px-0">

    <div class="relative text-gray-700 antialiased text-sm font-semibold">


      <div class="hidden sm:block w-1 bg-gray-300 absolute h-full left-1/2 transform -translate-x-1/2"></div>

      <div class="mt-6 sm:mt-0 sm:mb-12">
        <div class="flex flex-col xl:flex-row items-center">
          <div class="flex justify-start w-full mx-auto items-center">
            <div class="w-full sm:w-1/2 sm:pr-8">
              <div class="p-4 bg-white rounded shadow">
                <time class="mb-1 text-xl font-normal leading-none text-gray-400 dark:text-gray-500">29/10/65 21.30</time>
        <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">ผู้ใช้เเจ้งเหตุการณ์</h3>
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
        <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">แอดมินเสนอราคา</h3>
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
        <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">ผู้ใช้ตอบรับข้อเสนอ</h3>
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

      <div class="mt-6 sm:mt-0 sm:mb-12">
        <div class="flex flex-col sm:flex-row items-center">
          <div class="flex justify-end w-full mx-auto items-center">
            <div class="w-full sm:w-1/2 sm:pl-8">
              <div class="p-4 bg-white rounded shadow">
                <time class="mb-1 text-xl font-normal leading-none text-gray-400 dark:text-gray-500">29/10/65 22.15</time>
        <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">แอดมินหาช่างในพื้นที่ใกล้เคียง</h3>
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
                <time class="mb-1 text-xl font-normal leading-none text-gray-400 dark:text-gray-500">29/10/65 22.20</time>
        <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">ช่างตอบรับข้อเสนอ</h3>
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

      <div class="mt-6 sm:mt-0 sm:mb-12">
        <div class="flex flex-col sm:flex-row items-center">
          <div class="flex justify-end w-full mx-auto items-center">
            <div class="w-full sm:w-1/2 sm:pl-8">
              <div class="p-4 bg-white rounded shadow">
                <time class="mb-1 text-xl font-normal leading-none text-gray-400 dark:text-gray-500">29/10/65 22.25</time>
        <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">แอดมินส่งข้อมูลลูกค้า</h3>
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
                <time class="mb-1 text-xl font-normal leading-none text-gray-400 dark:text-gray-500">29/10/65 22.30</time>
        <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">ช่างออกปฏิบัติงาน</h3>
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

      <div class="mt-6 sm:mt-0 sm:mb-12">
        <div class="flex flex-col sm:flex-row items-center">
          <div class="flex justify-end w-full mx-auto items-center">
            <div class="w-full sm:w-1/2 sm:pl-8">
              <div class="p-4 bg-white rounded shadow">
                <time class="mb-1 text-xl font-normal leading-none text-gray-400 dark:text-gray-500">29/10/65 22.50</time>
        <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">แอดมินส่ง QR code สำหรับโอนเงินให้ผู้ใช้</h3>
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
                <time class="mb-1 text-xl font-normal leading-none text-gray-400 dark:text-gray-500">29/10/65 23.00</time>
        <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">ผู้ใช้โอนเงินค่าบริการ</h3>
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

      <div class="mt-6 sm:mt-0 sm:mb-12">
        <div class="flex flex-col sm:flex-row items-center">
          <div class="flex justify-end w-full mx-auto items-center">
            <div class="w-full sm:w-1/2 sm:pl-8">
              <div class="p-4 bg-white rounded shadow">
                <time class="mb-1 text-xl font-normal leading-none text-gray-400 dark:text-gray-500">29/10/65 23.10</time>
        <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">แอดมินตรวจการเงินและโอนเงินให้ช่างภายใน 24 ชม.</h3>
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

    </div>
  </div>
</div>
</template>
    
<script>
import axios from "axios";
//import Swal from 'sweetalert2';
export default {
  name: 'TechnicianDetail',
  data() {
    return {
      name: '',
      tel1: '',
      tel2: '',
      service_zone: '',
      service_time: '',
      service_type: '',
      work_history: '',
      address: '',
    }
  },
  mounted() {
    this.getTechnicianDetail();
  },
  methods: {
    getTechnicianDetail() {
      axios.get('http://racroad-api.test/api/technician/approve/detail/' + this.$route.params.id).then((response) => {
        this.name = response.data.data.technician_approve_detail.name;
        this.tel1 = response.data.data.technician_approve_detail.tel1;
        this.tel2 = response.data.data.technician_approve_detail.tel2;
        this.service_zone = response.data.data.technician_approve_detail.service_zone;
        this.service_time = response.data.data.technician_approve_detail.service_time;
        this.service_type = response.data.data.technician_approve_detail.service_type;
        this.work_history = response.data.data.technician_approve_detail.work_history;
        this.address = response.data.data.technician_approve_detail.address;
      });
    }
  },
}
</script>
<style>
.margin {
  margin-inline: 5%;
}
</style>
    