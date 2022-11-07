<template>
    <div
        class="flex mb-3 items-center justify-between text-3xl mr-2 font-bold mb-1 text-gray-100 bg-primary w-full p-2 shadow-md rounded-md">
        <div class="flex items-center">
            <span>ข้อมูลคลับ</span>
        </div>
    </div>
    <div class="overflow-x-auto relative shadow-md rounded-md">
        <table class="w-full text-sm text-left bg-primary dark:text-gray-400">
            <thead class="text-2xl text-gray-100 uppercase bg-primary dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="py-3 px-6 whitespace-nowrap">
                        ชื่อคลับ
                    </th>
                    <th scope="col" class="py-3 px-6 whitespace-nowrap">
                        คลับโซน
                    </th>
                    <th scope="col" class="py-3 px-6 whitespace-nowrap">
                        คำอธิบาย
                    </th>
                    <th scope="col" class="py-3 px-6 whitespace-nowrap">
                        ชื่อผู้ดูแลคลับ
                    </th>
                </tr>
            </thead>
            <tbody class="text-2xl ">
                <tr class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700" >
                    <th scope="row" class="py-4 px-6 whitespace-nowrap whitespace-nowrap font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {{club_name}}
                    </th>
                    <td class="py-4 px-6 whitespace-nowrap">
                        {{club_zone}}
                    </td>
                    <td class="py-4 px-6 whitespace-nowrap">
                        {{description}}
                    </td>
                    <td class="py-4 px-6 whitespace-nowrap">
                        {{admin}}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="overflow-x-auto relative shadow-md rounded-md mt-3">
        <table class="w-full text-sm text-left bg-primary dark:text-gray-400">
            <thead class="text-2xl text-gray-100 uppercase bg-primary dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="py-3 px-6 whitespace-nowrap">
                        กรรมการคลับ
                    </th>
                </tr>
            </thead>
            <tbody class="text-2xl ">
                <tr class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700" v-for="(rows, index) in club_director" :key="rows.id">
                    <th scope="row" class="py-4 px-6 whitespace-nowrap whitespace-nowrap font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        คนที่ {{index+1}} {{rows.name}}
                    </th>
                </tr>
            </tbody>
        </table>
    </div>
</template>
    
<script>
import axios from "axios";
//import Swal from 'sweetalert2';
export default {
  name: 'ClubDetail',
  data() {
    return {
        club_name : '',
        club_zone : '',
        description : '',
        admin : '',
        club_director : [],
    }
  },
mounted() {
    this.getClubDetail();
},
  methods: {
    getClubDetail() {
        axios.get('http://racroad-api.test/api/club/approve/detail/' +this.$route.params.id ).then((response) => {
            this.club_name = response.data.data.club_approve_detail.club_name;
            this.club_zone = response.data.data.club_approve_detail.club_zone;
            this.description = response.data.data.club_approve_detail.description;
            this.admin = response.data.data.club_approve_detail.admin;
            this.club_director = response.data.data.club_director;
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
    