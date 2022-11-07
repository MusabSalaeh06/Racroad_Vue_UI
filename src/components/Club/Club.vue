<template>
    <div class="margin">
        <div class="overflow-x-auto relative shadow-md rounded-md">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-2xl text-gray-100 uppercase bg-primary dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="py-3 px-6 whitespace-nowrap">
                            รายชื่อคลับ
                        </th>
                        <th scope="col" class="py-3 px-6 whitespace-nowrap" width="50%">
                            ชื่อผู้ดูเเลระบบ
                        </th>
                        <th scope="col" class="py-3 px-6 text-right" colspan="2" width="10%">
                        </th>
                    </tr>
                </thead>
                <tbody class="text-2xl ">
                    <tr class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700" v-for="rows in club_approve"
                        v-bind:key="rows.id">
                        <td class="py-4 px-6 whitespace-nowrap hover:font-bold hover:text-blue-600">
                        <router-link :to="'/Club-Detail/'+rows.id" class="nav-link">
                            {{rows.club_name}}
                        </router-link>
                        </td>
                        <td class="py-4 px-6 whitespace-nowrap">
                            {{rows.admin}}
                        </td>
                        <!-- <td class="py-4 px-6 whitespace-nowrap text-right">
                            <button type="button"
                                class="p-3 bg-green-600 text-white shadow-md rounded-md ">ดูข้อมูล</button>
                        </td> -->
                        <td class="py-4 px-6 whitespace-nowrap text-right">
                        <router-link :to="'/Club-Edit/'+rows.id" class="nav-link">
                            <button type="button"
                                class="p-3 bg-yellow-600 text-white shadow-md rounded-md ">แก้ไข</button>
                        </router-link>
                        </td>
                        <td class="py-4 px-6 whitespace-nowrap text-right">
                            <button type="button" class="p-3 bg-red-600 text-white shadow-md rounded-md"
                            @click="DeleteClubData(rows.id)">ลบ</button>
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
    name: 'ClubApprove',
    props: {
        msg: String
    },
    data() {
        return {
            AddUser: false,
            club_approve: [],
        }
    },
    mounted() {
        this.getClubData();
    },
    methods: {
        getClubData() {
            axios.get('http://racroad-api.test/api/club/approve').then((response) => {
                this.club_approve = response.data.data.club_approve;
            });
        },
        DeleteClubData(id) {
            axios.delete('http://racroad-api.test/api/club/destroy/' + id)
                .then(() => {
                    this.getClubData();
                })
                .then(function () {
                    Swal.fire(
                        'ลบข้อมูลคลับสำเร็จ!',
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
    