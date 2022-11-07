<template>
    <div
        class="flex mb-3 items-center justify-between text-3xl mr-2 font-bold mb-1 text-gray-100 bg-primary w-full p-2 shadow-md rounded-md">
        <div class="flex items-center">
            <span>แก้ไขข้อมูลช่าง : {{name}}</span>
        </div>
    </div>

    <div class="flex flex-wrap items-center justify-center">
        <div class="bg-white w-full mb-3 rounded-lg dark:bg-gray-800 shadow-md transform duration-200 easy-in-out ">
            <form @submit.prevent="EditTechnician" class="p-3" enctype="multipart/form-data">
                <div class="px-7 mb-8">
                    <label class="block text-2xl">
                        <div class="text-black-500 mt-2  dark:text-gray-400 text-3xl font-bold">ข้อมูลที่อยู่ตามบัตร
                        </div>
                        <div class="mt-0 text-gray-600 px-3 dark:text-gray-300 text-2xl ">
                            <textarea class=" p-3 bg-gray-100 text-2xl rounded-md shadow-sm w-full" rows="3"
                                v-model="address"></textarea>
                        </div>
                    </label>
                    <div class="grid gap-6 mb-3 md:grid-cols-2 xl:grid-cols-2">
                        <label class="block text-2xl">
                            <div class="text-black-500 mt-0  dark:text-gray-400 text-3xl font-bold">เบอร์โทร 1</div>
                            <div class="mt-0 text-gray-600 px-3 dark:text-gray-300 text-2xl ">
                                <input type="text" class=" p-1 bg-gray-100 text-2xl rounded-md shadow-sm w-full"
                                    v-model="tel1">
                            </div>
                        </label>
                        <label class="block text-2xl">
                            <div class="text-black-500 mt-0  dark:text-gray-400 text-3xl font-bold">เบอร์โทร 2</div>
                            <div class="mt-0 text-gray-600 px-3 dark:text-gray-300 text-2xl ">
                                <input type="text" class=" p-1 bg-gray-100 text-2xl rounded-md shadow-sm w-full"
                                    v-model="tel2">
                            </div>
                        </label>
                        <label class="block text-2xl">
                            <div class="text-black-500 mt-2  dark:text-gray-400 text-3xl font-bold">โซนให้บริการ</div>
                            <div class="mt-0 text-gray-600 px-3 dark:text-gray-300 text-2xl ">
                                <textarea class=" p-3 bg-gray-100 text-2xl rounded-md shadow-sm w-full" rows="3"
                                    v-model="service_zone"></textarea>
                            </div>
                        </label>
                        <label class="block text-2xl">
                            <div class="text-black-500 mt-2  dark:text-gray-400 text-3xl font-bold">
                                ระยะเวลาที่เปิดให้บริการ
                            </div>
                            <div class="mt-0 text-gray-600 px-3 dark:text-gray-300 text-2xl ">
                                <textarea class=" p-3 bg-gray-100 text-2xl rounded-md shadow-sm w-full" rows="3"
                                    v-model="service_time"></textarea>
                            </div>
                        </label>
                        <label class="block text-2xl">
                            <div class="text-black-500 mt-2  dark:text-gray-400 text-3xl font-bold">
                                ประเภทงานที่ให้บริการ
                            </div>
                            <div class="mt-0 text-gray-600 px-3 dark:text-gray-300 text-2xl ">
                                <textarea class=" p-3 bg-gray-100 text-2xl rounded-md shadow-sm w-full" rows="3"
                                    v-model="service_type"></textarea>
                            </div>
                        </label>
                        <label class="block text-2xl">
                            <div class="text-black-500 mt-2  dark:text-gray-400 text-3xl font-bold">ประวัติการทำงาน
                            </div>
                            <div class="mt-0 text-gray-600 px-3 dark:text-gray-300 text-2xl ">
                                <textarea class=" p-3 bg-gray-100 text-2xl rounded-md shadow-sm w-full" rows="3"
                                    v-model="work_history"></textarea>
                            </div>
                        </label>
                    </div>

                    <center>
                        <button type="submit"
                            class="p-3 text-2xl font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                            อัปเดท
                        </button>
                    </center>
                </div>
            </form>
        </div>
    </div>
</template>
    
<script>
import axios from "axios";
import Swal from 'sweetalert2';
//import Swal from 'sweetalert2';
export default {
    name: 'EditTechnician',
    data() {
        return {
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
        },
        EditTechnician(e) {
            this.submitted = true;
            e.preventDefault();
            let upload = new FormData();
            upload.append('address', this.address)
            upload.append('tel1', this.tel1)
            upload.append('tel2', this.tel2)
            upload.append('service_zone', this.service_zone)
            upload.append('service_time', this.service_time)
            upload.append('service_type', this.service_type)
            upload.append('work_history', this.work_history)
            axios.post('http://racroad-api.test/api/technician/update/' + this.$route.params.id, upload)
                .then(() => {
                    this.getTechnicianDetail();
                })
                .then(() => {
                        this.$router.push('/User-technician')
                    })
                .then(function () {
                    Swal.fire(
                        'อัปเดทข้อมูลช่างสำเร็จ',
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
    