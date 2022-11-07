<template>
    <div class="margin">
        <div class="text-3xl mr-2 font-bold mb-1 text-gray-100 bg-primary w-full p-2 shadow-md rounded-md">รายชื่อผู้ขอสิทธิ์ในการเปิดคลับ</div>
    <div class="overflow-x-auto relative shadow-md rounded-md">
        <table class="w-full text-sm text-left bg-primary dark:text-gray-400">
            <thead class="text-2xl text-gray-100 uppercase bg-primary dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="py-3 px-6 whitespace-nowrap">
                        ชื่อคลับ
                    </th>
                    <th scope="col" class="py-3 px-6 whitespace-nowrap">
                        ชื่อผู้ดูแลคลับ
                    </th>
                    <th scope="col" class="py-3 px-6" colspan="4" width="30%">
                    </th>
                </tr>
            </thead>
            <tbody class="text-2xl ">
                <tr class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700" v-for="rows in club_wait_approve" v-bind:key="rows.id">
                    <td class="py-4 px-6 whitespace-nowrap hover:font-bold hover:text-blue-600">
                        <router-link :to="'/Club-Detail/'+rows.id" class="nav-link">
                        {{rows.club_name}} [club_id:{{rows.id}}]
                        </router-link>
                    </td>
                    <td class="py-4 px-6 whitespace-nowrap">
                        {{rows.admin}}
                    </td>
                    <td class="py-4 px-6 whitespace-nowrap text-right">
                    <form @submit.prevent="RespondClubConfirm(rows.id)" enctype="multipart/form-data">
                        <button type="submit" class="p-3  bg-green-600 text-white shadow-md rounded-md ">อนุมัติ</button>
                    </form>
                    </td>

                    <td class="py-4 px-6 whitespace-nowrap text-right">
                    <form @submit.prevent="RespondClubCancle(rows.id)" enctype="multipart/form-data">
                        <button type="submit" class="p-3  bg-red-600 text-white shadow-md rounded-md ">ไม่อนุมัติ</button>
                    </form>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    </div>
    </template>
    
    
    <script>
    import axios from "axios";
import Swal from 'sweetalert2';
    export default {
        name: 'RespondClub',
        data() {
            return {
                club_wait_approve: [],
                sp_admin: '1',
                status0: 'ไม่อนุมัติ',
                status1: 'อนุมัติ',
                id: '',
                name: '',
                email: '',
            }
        },
        mounted() {
            this.getClubWaitApprove();
        },
        methods: {
            getClubWaitApprove() {
                axios.get('http://racroad-api.test/api/club/wait/approve').then((response) => {
                    this.club_wait_approve = response.data.data.club_wait_approve;
                });
            },
        RespondClubConfirm(event) {
            this.submitted = true;
            //e.preventDefault();
            let upload = new FormData();
                upload.append('status', this.status1),
                upload.append('sp_admin', this.sp_admin),
                axios.post('http://racroad-api.test/api/club/respond/' + event, upload)
                    .then(() => {
                        this.getClubWaitApprove();
                    })
                    .then(() => {
                        this.$router.push('/Club')
                    })
                    .then(function () {
                        Swal.fire(
                            'ท่านได้ทำการตัดสินใจเรียบร้อย',
                        )
                    });
        },
        RespondClubCancle(event) {
            this.submitted = true;
            //e.preventDefault();
            let upload = new FormData();
                upload.append('status', this.status0),
                upload.append('sp_admin', this.sp_admin),
                axios.post('http://racroad-api.test/api/club/respond/' + event, upload)
                    .then(() => {
                        this.getClubWaitApprove();
                    })
                    .then(() => {
                        this.$router.push('/Club')
                    })
                    .then(function () {
                        Swal.fire(
                            'ท่านได้ทำการตัดสินใจเรียบร้อย',
                        )
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
    