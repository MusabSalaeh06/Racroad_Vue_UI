<template>
    <div
        class="flex mb-3 items-center justify-between text-3xl mr-2 font-bold mb-1 text-gray-100 bg-primary w-full p-2 shadow-md rounded-md">
        <div class="flex items-center">
            <span>โปรไฟล์ของช่าง</span>
        </div>
    </div>

    <div class="flex flex-wrap items-center justify-center">
            <div class="bg-white w-full mb-3 rounded-lg dark:bg-gray-800 shadow-md transform duration-200 easy-in-out ">
                    <div class="px-7 mb-8">
                        <div class="text-black-500 mt-2  dark:text-gray-400 text-3xl font-bold">ข้อมูลส่วนตัว</div>
                        <div class="mt-0 text-gray-600 px-3 dark:text-gray-300 text-2xl ">
                         ชื่อ : {{name}}   เบอร์โทรที่ 1 : {{tel1}}, เบอร์โทรที่ 1 : {{tel2}},
                        </div>
                        <div class="text-black-500 mt-0  dark:text-gray-400 text-3xl font-bold">ชื่อช่างหรืออู่</div>
                        <div class="mt-0 text-gray-600 px-3 dark:text-gray-300 text-2xl ">
                            {{tnc_name}}
                        </div>
                        <div class="text-black-500 mt-0  dark:text-gray-400 text-3xl font-bold">ข้อมูลที่อยู่</div>
                        <div class="mt-0 text-gray-600 px-3 dark:text-gray-300 text-2xl ">
                            {{address}}
                        </div>
                        <div class="text-black-500 mt-0  dark:text-gray-400 text-3xl font-bold">ประวัติการศึกษา</div>
                        <div class="mt-0 text-gray-600 px-3 dark:text-gray-300 text-2xl ">
                            {{std_history}}
                        </div>
                        <div class="text-black-500 mt-2  dark:text-gray-400 text-3xl font-bold">โซนให้บริการ</div>
                        <div class="mt-0 text-gray-600 px-3 dark:text-gray-300 text-2xl ">
                            {{service_zone}}
                        </div>
                        <div class="text-black-500 mt-2  dark:text-gray-400 text-3xl font-bold">ระยะเวลาที่เปิดให้บริการ</div>
                        <div class="mt-0 text-gray-600 px-3 dark:text-gray-300 text-2xl ">
                            {{service_time}}
                        </div>
                        <div class="text-black-500 mt-2  dark:text-gray-400 text-3xl font-bold">ประเภทงานที่ให้บริการ</div>
                        <div class="mt-0 text-gray-600 px-3 dark:text-gray-300 text-2xl ">
                            {{service_type}}
                        </div>
                        <div class="text-black-500 mt-2  dark:text-gray-400 text-3xl font-bold">ประวัติการทำงาน</div>
                        <div class="mt-0 text-gray-600 px-3 dark:text-gray-300 text-2xl ">
                            {{work_history}}
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
        tnc_name : '',
        name : '',
        tel1 : '',
        tel2 : '',
        address : '',
        std_history : '',
        service_zone : '',
        service_time : '',
        service_type : '',
        work_history : '',
    }
  },
mounted() {
    this.getTechnicianDetail();
},
  methods: {
    getTechnicianDetail() {
        axios.get('http://racroad-api.test/api/technician/approve/detail/' +this.$route.params.id ).then((response) => {
            this.tnc_name = response.data.data.technician_approve_detail.tnc_name;
            this.name = response.data.data.technician_approve_detail.name;
            this.tel1 = response.data.data.technician_approve_detail.tel1;
            this.tel2 = response.data.data.technician_approve_detail.tel2;
            this.address = response.data.data.technician_approve_detail.address;
            this.std_history = response.data.data.technician_approve_detail.std_history;
            this.service_zone = response.data.data.technician_approve_detail.service_zone;
            this.service_time = response.data.data.technician_approve_detail.service_time;
            this.service_type = response.data.data.technician_approve_detail.service_type;
            this.work_history = response.data.data.technician_approve_detail.work_history;
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
    