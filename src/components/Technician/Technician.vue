<template>
    <div class="margin">
        <div class="overflow-x-auto relative shadow-md rounded-md">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-2xl text-gray-100 uppercase bg-primary dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="py-3 px-6 whitespace-nowrap">
                            รายชื่อช่างซ่อม
                        </th>
                        <th scope="col" class="py-3 px-6" colspan="3" width="5%">
                        </th>
                    </tr>
                </thead>
                <tbody class="text-2xl ">
                    <tr class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700"
                        v-for="rows in technician_approve" v-bind:key="rows.id">
                        <td class="py-4 px-6 whitespace-nowrap hover:font-bold hover:text-blue-600">
                        <router-link :to="'/Technician-Detail/'+rows.id" class="nav-link">
                            {{rows.name}}
                        </router-link>
                        </td>
                        <!-- <td class="py-4 px-6 whitespace-nowrap text-right">
                            <button type="button"
                                class="p-3 bg-green-600 text-white shadow-md rounded-md ">ดูข้อมูล</button>
                        </td> -->
                        <td class="py-4 px-6 whitespace-nowrap text-right">
                        <router-link :to="'/Technician-Edit/'+rows.id" class="nav-link">
                            <button type="button" class="p-3 bg-yellow-600 text-white shadow-md rounded-md ">แก้ไข</button>
                        </router-link>
                        </td>
                        <td class="py-4 px-6 whitespace-nowrap text-right">
                            <button type="button" class="p-3 bg-red-600 text-white shadow-md rounded-md"
                            @click="DeleteTechnicianData(rows.id)">ลบ</button>
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
    name: 'TechNiCian',
    data() {
        return {
            AddUser: false,
            technician_approve: [],
        }
    },
    mounted() {
        this.getTechnicianData();
    },
    methods: {
        getTechnicianData() {
            axios.get('http://racroad-api.test/api/technician/approve').then((response) => {
                this.technician_approve = response.data.data.technician_approve;
            });
        },
        DeleteTechnicianData(id) {
            axios.delete('http://racroad-api.test/api/technician/destroy/' + id)
                .then(() => {
                    this.getTechnicianData();
                })
                .then(function () {
                    Swal.fire(
                        'ลบข้อมูลช่างสำเร็จ!',
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
    