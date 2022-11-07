<template>
    <div class="overflow-y-auto py-4 px-3 bg-white-200 rounded dark:bg-gray-800 rounded-lg shadow-lg mb-3">
        <ul class="flex flex-wrap -mb-px text-xl font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent"
            role="tablist">
            <li>
                <ul v-if=" tab == 1 ">
                    <button @click="activeTabOne"
                        class="flex items-center p-2 text-2xl font-bold text-gray-900 rounded-lg text-white bg-blue-700 hover:text-white dark:hover:bg-gray-700">
                        <span class="ml-3">ข้อมูลยี่ห้อรถยนต์</span>
                    </button>
                </ul>
                <ul v-else>
                    <button @click="activeTabOne"
                        class="flex items-center p-2 text-2xl font-bold text-gray-900 rounded-lg dark:text-white hover:bg-blue-700 hover:text-white dark:hover:bg-gray-700">
                        <span class="ml-3">ข้อมูลยี่ห้อรถยนต์</span>
                    </button>
                </ul>
            </li>
            <li>
                <ul v-if=" tab == 2 ">
                    <button @click="activeTabTwo"
                        class="flex items-center p-2 text-2xl font-bold text-gray-900 rounded-lg text-white bg-blue-700 hover:text-white dark:hover:bg-gray-700">
                        <span class="flex-1 ml-3 whitespace-nowrap">ข้อมูลรุ่นของรถยนต์</span>
                    </button>
                </ul>
                <ul v-else>
                    <button @click="activeTabTwo"
                        class="flex items-center p-2 text-2xl font-bold text-gray-900 rounded-lg dark:text-white hover:bg-blue-700 hover:text-white dark:hover:bg-gray-700">
                        <span class="ml-3">ข้อมูลรุ่นของรถยนต์</span>
                    </button>
                </ul>
            </li>
            <li>
                <ul v-if=" tab == 3 ">
                    <button @click="activeTabThree"
                        class="flex items-center p-2 text-2xl font-bold text-gray-900 rounded-lg text-white bg-blue-700 hover:text-white dark:hover:bg-gray-700">
                        <span class="flex-1 ml-3 whitespace-nowrap">เช็คข้อมูลรถยนต์</span>
                    </button>
                </ul>
                <ul v-else>
                    <button @click="activeTabThree"
                        class="flex items-center p-2 text-2xl font-bold text-gray-900 rounded-lg dark:text-white hover:bg-blue-700 hover:text-white dark:hover:bg-gray-700">
                        <span class="ml-3">เช็คข้อมูลรถยนต์</span>
                    </button>
                </ul>
            </li>
        </ul>
    </div>
    <div v-show="tab === 1">
        <div
            class="flex mb-3 items-center justify-between text-3xl mr-2 font-bold mb-1 text-gray-100 bg-primary w-full p-2 shadow-md rounded-md">
            <div class="flex items-center">
                <span>เพิ่มข้อมูลรถยนต์</span>
            </div>
        </div>
        <div class="bg-white w-full p-3 rounded-md shadow-md">
            <form @submit.prevent="AddCarData" enctype="multipart/form-data">
                <label class="block text-2xl">
                    <span class="text-gray-700 dark:text-gray-400">ยี่ห้อ</span>
                    <input type="text" v-model="brand" value="1"
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
                <center>
                    <button type="submit"
                        class="p-3 my-3 text-2xl font-bold leading-5 text-white transition-colors duration-150 bg-primary border border-transparent rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                        บันทึกข้อมูล
                    </button>
                </center>
            </form>
        </div>
    </div>
    <div v-show="tab === 2">
        <div
            class="flex  items-center justify-between text-3xl mr-2 font-bold mb-1 text-gray-100 bg-primary w-full p-2 shadow-md rounded-md">
            <div class="flex items-center">
                <span>ตัวกรองข้อมูลรถยนต์</span>
            </div>
        </div>
        <div class="grid bg-white p-1 shadow-md rounded-md gap-6 mb-3 md:grid-cols-2 xl:grid-cols-4">
            <label class="block text-2xl">
                <span class="text-gray-700 dark:text-gray-400">เลือกยี่ห้อของรถยนต์</span>
                <select id="brand" v-model="brand_id"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option v-for="rows in brand_data" v-bind:key="rows.id" :value="rows.brand">{{rows.brand}}
                    </option>
                </select>
            </label>
            <label class="block text-2xl">
                <span class="text-gray-700 dark:text-gray-400">เลือกรุ่นของรถยนต์</span>
                <select id="model" v-model="model_id"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option v-for="rows in model_data" v-bind:key="rows.id" :value="rows.model">{{rows.model}}</option>
                </select>
            </label>
            <label class="block text-2xl">
                <span class="text-gray-700 dark:text-gray-400">เลือกโฉมของรถยนต์</span>
                <select id="makeover" v-model="makeover_id"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option v-for="rows in makeover_data" v-bind:key="rows.id" :value="rows.makeover">{{rows.makeover}}
                    </option>
                </select>
            </label>
            <label class="block text-2xl">
                <span class="text-gray-700 dark:text-gray-400">เลือกรุ่นย่อยของรถยนต์</span>
                <select id="subversion" v-model="subversion_id"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option v-for="rows in subversion_data" v-bind:key="rows.id" :value="rows.subversion">{{rows.subversion}}</option>
                </select>
            </label>
            <label class="block text-xl">
                <span class="text-gray-700 dark:text-gray-400">เลือกเชื้อเพลิงของรถยนต์</span>
                <select id="subversion" v-model="fuel_id"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option v-for="rows in fuel_data" v-bind:key="rows.id" :value="rows.fuel">
                        {{rows.fuel}}</option>
                </select>
            </label>
        </div>
        <div class="overflow-x-auto relative shadow-md rounded-md">
            <table class="w-full text-xl text-left text-gray-500 dark:text-gray-400">
                <thead class="text-2xl text-gray-100 uppercase bg-primary dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="py-3 px-6 whitespace-nowrap">
                            ยี่ห้อ
                        </th>
                        <th scope="col" class="py-3 px-6 whitespace-nowrap">
                            รุ่น
                        </th>
                        <th scope="col" class="py-3 px-6 whitespace-nowrap">
                            โฉม
                        </th>
                        <th scope="col" class="py-3 px-6 whitespace-nowrap">
                            รุ่นย่อย
                        </th>
                        <th scope="col" class="py-3 px-6 whitespace-nowrap">
                            เชื้อเพลิง
                        </th>
                        <th scope="col" class="py-3 px-6" colspan="2" width="10%">
                        </th>
                    </tr>
                </thead>
                <tbody class="text-2xl ">
                    <tr class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700"
                        v-for="(item, i) in filteredCars" :key="i">
                        <td class="py-4 px-6 whitespace-nowrap">
                            {{item.brand}}
                        </td>
                        <td class="py-4 px-6 whitespace-nowrap">
                            {{item.model}}
                        </td>
                        <td class="py-4 px-6 whitespace-nowrap">
                            {{item.makeover}}
                        </td>
                        <td class="py-4 px-6 whitespace-nowrap">
                            {{item.subversion}}
                        </td>
                        <td class="py-4 px-6 whitespace-nowrap">
                            {{item.fuel}}
                        </td>
                        <td class="py-4 px-6 whitespace-nowrap text-right">
                            <button type="button"
                                class="p-3 bg-yellow-600 text-white shadow-md rounded-md ">แก้ไข</button>
                        </td>
                        <td class="py-4 px-6 whitespace-nowrap text-right">
                            <button type="button" class="p-3 bg-red-600 text-white shadow-md rounded-md"
                            @click="DeleteCarData(item.car_id)">ลบ</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div v-show="tab === 3">
        <div
            class="flex mb-3 items-center justify-between text-3xl mr-2 font-bold mb-1 text-gray-100 bg-primary w-full p-2 shadow-md rounded-md">
            <div class="flex items-center">
                <span>เช็คข้อมูลรถยนต์</span>
            </div>
        </div>
        <div class="bg-white w-full p-5">
            <label class="block text-2xl">
                <span class="text-gray-700 dark:text-gray-400">เลือกยี่ห้อของรถยนต์</span>
                <select id="brand" v-model="brand_id"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option v-for="rows in brand_data" v-bind:key="rows.id" :value="rows.brand_id">{{rows.brand}}
                    </option>
                </select>
            </label>
            <label class="block text-2xl">
                <span class="text-gray-700 dark:text-gray-400">เลือกรุ่นของรถยนต์</span>
                <select id="model" v-model="model_id"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option v-for="(item, i) in filteredModels" :key="i" :value="item.model_id">{{item.model}}</option>
                </select>
            </label>
            <label class="block text-2xl">
                <span class="text-gray-700 dark:text-gray-400">เลือกโฉมของรถยนต์</span>
                <select id="makeover" v-model="makeover_id"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option v-for="(item, i) in filteredMakeOvers" :key="i" :value="item.makeover_id">{{item.makeover}}
                    </option>
                </select>
            </label>
            <label class="block text-2xl">
                <span class="text-gray-700 dark:text-gray-400">เลือกรุ่นย่อยของรถยนต์</span>
                <select id="subversion" v-model="subversion_id"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option v-for="(item, i) in filteredSubVersions" :key="i" :value="item.subversion_id">
                        {{item.subversion}}</option>
                </select>
            </label>
        </div>
    </div>
</template>
    
    
<script>
import axios from "axios";
import Swal from 'sweetalert2';
export default {
    name: "CarData",
    data() {
        return {
            tab: 1,
            brand_id: '',
            model_id: '',
            makeover_id: '',
            subversion_id: '',
            car_data: [],
            brand_data: [],
            model_data: [],
            makeover_data: [],
            subversion_data: [],
            fuel_data: [],
        }
    },
    mounted() {
        this.getCarData();
        this.getBrand();
        this.getModel();
        this.getMakeOver();
        this.getSubVersion();
        this.getFuel();
    },
    methods: {
        activeTabOne() {
            this.tab = 1;
        },
        activeTabTwo() {
            this.tab = 2;
        },
        activeTabThree() {
            this.tab = 3;
        },
        AddCarData(e) {
            this.submitted = true;
            e.preventDefault();
            let upload = new FormData();
            upload.append('brand', this.brand),
                upload.append('model', this.model),
                upload.append('makeover', this.makeover),
                upload.append('subversion', this.subversion),
                upload.append('fuel', this.fuel),
                axios.post('http://racroad-api.test/api/car/store', upload)
                    .then(() => {
                        this.getCarData();
                    })
                    .then(function () {
                        Swal.fire(
                            'เพิ่มข้อมูลรถยนต์ใหม่สำเร็จ!',
                        )
                    });
        },
        getCarData() {
            axios.get('http://racroad-api.test/api/car/data').then((response) => {
                this.car_data = response.data.data.car_data;
            });
        },
        DeleteCarData(id) {
            axios.delete('http://racroad-api.test/api/car/destroy/' + id)
                .then(() => {
                    this.getCarData();
                })
                .then(function () {
                    Swal.fire(
                        'ลบข้อมูลรถยนต์สำเร็จ!',
                    )
                });
        },
        getBrand() {
            axios.get('http://racroad-api.test/api/brand/data').then((response) => {
                this.brand_data = response.data.data.brand;
            });
        },
        getModel() {
            axios.get('http://racroad-api.test/api/model/data').then((response) => {
                this.model_data = response.data.data.model;
            });
        },
        getMakeOver() {
            axios.get('http://racroad-api.test/api/makeover/data').then((response) => {
                this.makeover_data = response.data.data.makeover;
            });
        },
        getSubVersion() {
            axios.get('http://racroad-api.test/api/subversion/data').then((response) => {
                this.subversion_data = response.data.data.subversion;
            });
        },
        getSubFuel() {
            axios.get('http://racroad-api.test/api/fuel/data').then((response) => {
                this.fuel_data = response.data.data.fuel;
            });
        },
    },
    computed: {
        filteredCars() {
            return this.car_data.filter(item => {
                return item.brand.toLowerCase().indexOf(this.brand_id.toLowerCase()) > -1
                // ,item.model.toLowerCase().indexOf(this.model_id.toLowerCase()) > -1,
                //        item.makeover.toLowerCase().indexOf(this.makeover_id.toLowerCase()) > -1,
                //        item.subversion.toLowerCase().indexOf(this.subversion_id.toLowerCase()) > -1,
                //        item.fuel.toLowerCase().indexOf(this.fuel_id.toLowerCase()) > -1
            })
        },
        filteredBrands() {
            return this.brand_data.filter(item => {
                return item.brand.toLowerCase().indexOf(this.brand_id.toLowerCase()) > -1
            })
        },
        filteredModels() {
            return this.model_data.filter(item => {
                return item.brand.toLowerCase().indexOf(this.brand_id.toLowerCase()) > -1
            })
        },
        filteredMakeOvers() {
            return this.makeover_data.filter(item => {
                return item.model.toLowerCase().indexOf(this.model_id.toLowerCase()) > -1
            })
        },
        filteredSubVersions() {
            return this.subversion_data.filter(item => {
                return item.makeover.toLowerCase().indexOf(this.makeover_id.toLowerCase()) > -1
            })
        }
    }
}
</script>