<template>
    <div
        class="flex mb-3 items-center justify-between text-3xl mr-2 font-bold mb-1 text-gray-100 bg-primary w-full p-2 shadow-md rounded-md">
        <div class="flex items-center">
            <span>แก้ไขข้อมูลรถยนต์</span>
        </div>
    </div>

    <div class="flex flex-wrap items-center justify-center">
        <div class="bg-white w-full mb-3 rounded-lg dark:bg-gray-800 shadow-md transform duration-200 easy-in-out ">
            <form @submit.prevent="EditCar" class="p-3" enctype="multipart/form-data">
                <div class="px-7 mb-8">
                    <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-1">
                        <label class="block text-2xl">
                            <span class="text-gray-700 dark:text-gray-400">ยี่ห้อ</span>
                            <input type="text" v-model="brand"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        </label>
                        <label class="block text-2xl">
                            <span class="text-gray-700 dark:text-gray-400">รุ่น</span>
                            <input type="text" v-model="model"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        </label>
                        <label class="block text-2xl">
                            <span class="text-gray-700 dark:text-gray-400">โฉม</span>
                            <input type="text" v-model="makeover"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        </label>
                        <label class="block text-2xl">
                            <span class="text-gray-700 dark:text-gray-400">รุ่นย่อย</span>
                            <input type="text" v-model="subversion"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        </label>
                        <label class="block text-2xl">
                            <span class="text-gray-700 dark:text-gray-400">เชื้อเพลิง</span>
                            <input type="text" v-model="fuel"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
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
    name: 'EditUser',
    data() {
        return {
            brand: '',
            model: '',
            makeover: '',
            subversion: '',
            fuel: '',
        }
    },
    mounted() {
        this.getCarDetail();
    },
    methods: {
        getCarDetail() {
            axios.get('http://racroad-api.test/api/car/detail/' + this.$route.params.id).then((response) => {
                this.brand = response.data.data.car_detail.brand;
                this.model = response.data.data.car_detail.model;
                this.makeover = response.data.data.car_detail.makeover;
                this.subversion = response.data.data.car_detail.subversion;
                this.fuel = response.data.data.car_detail.fuel;
            });
        },
        EditCar(e) {
            this.submitted = true;
            e.preventDefault();
            let upload = new FormData();
            upload.append('brand', this.brand)
            upload.append('model', this.model)
            upload.append('makeover', this.makeover)
            upload.append('subversion', this.subversion)
            upload.append('fuel', this.fuel)
            axios.post('http://racroad-api.test/api/car/update/' + this.$route.params.id, upload)
                .then(() => {
                    this.getCarDetail();
                })
                .then(() => {
                    this.$router.push('/Car-Data')
                })
                .then(function () {
                    Swal.fire(
                        'อัปเดทข้อมูลรถยนต์สำเร็จ',
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
    