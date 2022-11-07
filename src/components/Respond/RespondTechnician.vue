<template>
    <div class="margin">
        <div class="text-3xl mr-2 font-bold mb-1 text-gray-100 bg-primary w-full p-2 shadow-md rounded-md">รายชื่อผู้ขอสิทธิ์เป็นช่าง</div>
    <div class="overflow-x-auto relative shadow-md rounded-md">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-2xl text-gray-100 uppercase bg-primary dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="py-3 px-6 whitespace-nowrap">
                        ชื่อผู้ใช้
                    </th>
                    <th scope="col" class="py-3 px-6" colspan="" width="5%">
                    </th>
                    <th scope="col" class="py-3 px-6" colspan="" width="5%">
                    </th>
                </tr>
            </thead>
            <tbody class="text-2xl ">
                <tr class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700" 
                    v-for="rows in technician_wait_approve" v-bind:key="rows.id">
                    <td class="py-4 px-6 whitespace-nowrap hover:font-bold hover:text-blue-600">
                        <router-link :to="'/Technician-Detail/'+rows.id" class="nav-link">
                        {{rows.name}} [tnc_id:{{rows.id}}]
                        </router-link>
                    </td>
                    <!-- <td class="py-4 px-6 whitespace-nowrap text-right">
                        <button type="button" class="p-3 bg-yellow-600 text-white shadow-md rounded-md ">ดูข้อมูล</button>
                    </td> -->
                    <td class="py-4 px-6 whitespace-nowrap text-right">
                    <form @submit.prevent="RespondTechnicianConfirm(rows.id)" enctype="multipart/form-data">
                        <button type="submit" class="p-3 bg-green-600 text-white shadow-md rounded-md ">อนุมัติ</button>
                    </form>
                    </td>

                    <td class="py-4 px-6 whitespace-nowrap text-right">
                    <form @submit.prevent="RespondTechnicianCancle(rows.id)" enctype="multipart/form-data">
                        <button type="submit" class="p-3 bg-red-600 text-white shadow-md rounded-md ">ไม่อนุมัติ</button>
                    </form>
                    </td>

                </tr>
            </tbody>
        </table>
    </div>
    </div>
    </template>
    
<script>
//import http from '@/service/api.js'
import axios from "axios";
import Swal from 'sweetalert2';
export default {
    name: 'RespondTechnician',
    data() {
        return {
            technician_wait_approve: [],
            // tnc_id: '3',
             sp_admin: '1',
             status0: 'ไม่อนุมัติ',
             status1: 'อนุมัติ',
             id: '',
             name: '',
             email: '',
        }
    },
    mounted() {
        this.getTechnicianWaitApprove();
       // this.getUser();
    },
    methods: {
        // getUser() {
        // axios.get('https://racroad-api.test/api/getUser').then((response) => {
        //   this.id = response.data.data.id;
        //   this.name = response.data.data.name;
        //   this.email = response.data.data.email;
        //   console.log(this.id)
        //   console.log(this.name)
        //   console.log(this.email)
        // });
        // },
        getTechnicianWaitApprove() {
            axios.get('http://racroad-api.test/api/technician/wait/approve').then((response) => {
                this.technician_wait_approve = response.data.data.technician_wait_approve;
            });
        },
        RespondTechnicianConfirm(event) {
            this.submitted = true;
            //e.preventDefault();
            let upload = new FormData();
                upload.append('status', this.status1),
                upload.append('sp_admin', this.sp_admin),
                axios.post('http://racroad-api.test/api/technician/respond/' + event, upload)
                    .then(() => {
                        this.getTechnicianWaitApprove();
                    })
                    .then(() => {
                        this.$router.push('/User-technician')
                    })
                    .then(function () {
                        Swal.fire(
                            'ท่านได้ทำการตัดสินใจเรียบร้อย',
                        )
                    });
        },
        RespondTechnicianCancle(event) {
            this.submitted = true;
            //e.preventDefault();
            let upload = new FormData();
                upload.append('status', this.status0),
                upload.append('sp_admin', this.sp_admin),
                axios.post('http://racroad-api.test/api/technician/respond/' + event, upload)
                    .then(() => {
                        this.getTechnicianWaitApprove();
                    })
                    .then(() => {
                        this.$router.push('/User-technician')
                    })
                    .then(function () {
                        Swal.fire(
                            'ท่านได้ทำการตัดสินใจเรียบร้อย',
                        )
                    });
        },
        // RespondTechnician(e) {
        //         this.submitted = true;
        //         e.preventDefault();
        //         axios.post('http://racroad-api.test/api/technician/respond/' + 3, {
        //             sp_admin: this.sp_admin,
        //             status: this.status,
        //         })
        //             .then(function () {
        //                 Swal.fire(
        //                     '55!',
        //                 )
        //             })
        //             .then(() => {
        //                 this.getMyorg();
        //                 this.addOrgModal();
        //             });
        //     },
    },
}
</script>
    <style>
      .margin {
        margin-inline: 5%;
      }
    </style>
    