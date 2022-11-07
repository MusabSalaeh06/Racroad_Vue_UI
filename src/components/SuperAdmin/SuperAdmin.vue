<template>
    <div class="margin">
        <div class="overflow-x-auto relative shadow-md rounded-md">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-2xl text-gray-100 uppercase bg-primary dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="py-3 px-6 whitespace-nowrap">
                            รายชื่อผู้ดูเเลระบบ
                        </th>
                        <th scope="col" class="py-3 px-6 text-right" colspan="3" width="15%">
                            <button
                                class="bg-white text-rigth text-gray-700 font-bold uppercase text-xl p-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button" v-on:click="addAdmin()">
                                เพิ่มข้อมูล
                            </button>
                            <div v-if="AddAdmin"
                                class="overflow-scroll fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">

                                <div
                                    class="mx-10 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                                    <div
                                        class="flex items-start justify-between p-3 border-b border-solid border-slate-200 rounded-t">
                                        <h3 class="text-2xl text-black">
                                            เพิ่มข้อมูลเจ้าหน้าที่
                                        </h3>
                                        <button
                                            class="p-1 ml-auto bg-transparent border-0 text-black opacity-100 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                            v-on:click="addAdmin()">
                                            X
                                        </button>
                                    </div>

                                    <form @submit.prevent="AddAdminData" class="p-3" enctype="multipart/form-data">
                                        <div class="grid gap-6 mb-3 md:grid-cols-2 xl:grid-cols-3">
                                            <label class="block text-2xl">
                                                <span class="text-gray-700 dark:text-gray-400">ชื่อ-นามสกุล</span>
                                                <input type="text" v-model="name" placeholder="..."
                                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                            </label>
                                            <label class="block text-2xl">
                                                <span class="text-gray-700 dark:text-gray-400">เบอร์โทรศัพท์</span>
                                                <input type="text" v-model="tel" placeholder="..."
                                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                            </label>
                                            <label class="block text-2xl">
                                                <span class="text-gray-700 dark:text-gray-400">เลขประจำตัวประชาชน</span>
                                                <input type="text" v-model="card_id" placeholder="..."
                                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                            </label>
                                        </div>
                                        <center>
                                            <button type="submit"
                                                class="p-3 text-xl font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                                                บันทึก
                                            </button>
                                        </center>
                                    </form>
                                </div>
                            </div>
                            <div v-if="AddAdmin" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
                        </th>
                    </tr>
                </thead>
                <tbody class="text-2xl ">
                    <tr class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700" v-for="rows in admin_data"
                        v-bind:key="rows.id">
                        <td class="py-4 px-6 whitespace-nowrap hover:font-bold hover:text-blue-600">
                        <router-link :to="'/User-Detail/'+rows.id" class="nav-link">
                            {{rows.name}}
                        </router-link>
                        </td>
                        <!-- <td class="py-4 px-6 whitespace-nowrap text-right">
                            <button type="button"
                                class="p-3 bg-green-600 text-white shadow-md rounded-md ">ดูข้อมูล</button>
                        </td> -->
                        <td class="py-4 px-6 whitespace-nowrap text-right">
                            <button type="button"
                                class="p-3 bg-yellow-600 text-white shadow-md rounded-md ">แก้ไข</button>
                        </td>
                        <td class="py-4 px-6 whitespace-nowrap text-right">
                            <button type="button" class="p-3 bg-red-600 text-white shadow-md rounded-md"
                                @click="DeleteAdminData(rows.id)">ลบ</button>
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
    name: 'SuperAdmin',
    props: {
        msg: String
    },
    data() {
        return {
            AddAdmin: false,
            admin_data: [],
        }
    },
    mounted() {
        this.getAdminData();
    },
    methods: {
        addAdmin: function () {
            this.AddAdmin = !this.AddAdmin;
        },
        AddAdminData(e) {
            this.submitted = true;
            e.preventDefault();
            let upload = new FormData();
            upload.append('name', this.name)
            upload.append('tel', this.tel)
            upload.append('card_id', this.card_id)
            axios.post('http://racroad-api.test/api/admin/store', upload)
                .then(() => {
                    this.addAdmin();
                    this.getAdminData();
                })
                .then(function () {
                    Swal.fire(
                        'เพิ่มข้อมูลเจ้าหน้าที่ใหม่สำเร็จ!',
                    )
                });
        },
        getAdminData() {
            axios.get('http://racroad-api.test/api/admin/data').then((response) => {
                this.admin_data = response.data.data.admin_data;
            });
        },
        DeleteAdminData(id) {
            axios.delete('http://racroad-api.test/api/user/destroy/' + id)
                .then(() => {
                    this.getAdminData();
                })
                .then(function () {
                    Swal.fire(
                        'ลบข้อมูลเจ้าหน้าที่สำเร็จ!',
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
    