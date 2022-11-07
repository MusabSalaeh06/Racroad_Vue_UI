<template>
    <div
        class="flex mb-3 items-center justify-between text-3xl mr-2 font-bold mb-1 text-gray-100 bg-primary w-full p-2 shadow-md rounded-md">
        <div class="flex items-center">
            <span>แก้ไขข้อมูลผู้ใช้ : {{name}}</span>
        </div>
    </div>

    <div class="flex flex-wrap items-center justify-center">
        <div class="bg-white w-full mb-3 rounded-lg dark:bg-gray-800 shadow-md transform duration-200 easy-in-out ">
            <form @submit.prevent="EditUser" class="p-3" enctype="multipart/form-data">
                <div class="px-7 mb-8">
                    <label class="block text-2xl">
                        <div class="mt-0 text-gray-600 px-3 dark:text-gray-300 text-2xl ">
                            <img :src="avatar" alt="profile" :width="size" />
                                <input type="file" class=" p-1 bg-gray-100 text-2xl rounded-md shadow-sm w-full"
                                @change="avatarFile" name="avatar"  >
                        </div>
                    </label>
                    <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        <label class="block text-2xl">
                            <div class="text-black-500 mt-2  dark:text-gray-400 text-3xl font-bold">ชื่อ
                            </div>
                            <div class="mt-0 text-gray-600 px-3 dark:text-gray-300 text-2xl ">
                                <input type="text" class=" p-1 bg-gray-100 text-2xl rounded-md shadow-sm w-full"
                                    v-model="name">
                            </div>
                        </label>
                        <label class="block text-2xl">
                            <div class="text-black-500 mt-2  dark:text-gray-400 text-3xl font-bold">บัตรประจำตัวประชาชน
                            </div>
                            <div class="mt-0 text-gray-600 px-3 dark:text-gray-300 text-2xl ">
                                <input type="text" class=" p-1 bg-gray-100 text-2xl rounded-md shadow-sm w-full"
                                    v-model="card_id">
                            </div>
                        </label>
                        <label class="block text-2xl">
                            <div class="text-black-500 mt-0  dark:text-gray-400 text-3xl font-bold">เบอร์โทร</div>
                            <div class="mt-0 text-gray-600 px-3 dark:text-gray-300 text-2xl ">
                                <input type="text" class=" p-1 bg-gray-100 text-2xl rounded-md shadow-sm w-full"
                                    v-model="tel">
                            </div>
                        </label>
                    </div>
                    <label class="block text-2xl">
                            <div class="text-black-500 mt-0  dark:text-gray-400 text-3xl font-bold">อีเมล</div>
                            <div class="mt-0 text-gray-600 px-3 dark:text-gray-300 text-2xl ">
                                <input type="text" class=" p-1 bg-gray-100 text-2xl rounded-md shadow-sm w-full"
                                    v-model="email">
                            </div>
                        </label>
                    <label class="block text-2xl">
                            <div class="text-black-500 mt-0  dark:text-gray-400 text-3xl font-bold">ที่อยู่</div>
                            <div class="grid gap-6 mb-3 md:grid-cols-2 xl:grid-cols-3">
                            <lable class="mt-0 text-gray-600 px-3 dark:text-gray-300 text-2xl ">
                            <div class="text-black-500 mt-0  dark:text-gray-400 text-2xl font-bold">เขต</div>
                                <input type="text" class=" p-1 bg-gray-100 text-2xl rounded-md shadow-sm w-full"
                                    v-model="county">
                            </lable>
                            <lable class="mt-0 text-gray-600 px-3 dark:text-gray-300 text-2xl ">
                            <div class="text-black-500 mt-0  dark:text-gray-400 text-2xl font-bold">ถนน</div>
                                <input type="text" class=" p-1 bg-gray-100 text-2xl rounded-md shadow-sm w-full"
                                    v-model="road">
                            </lable>
                            <lable class="mt-0 text-gray-600 px-3 dark:text-gray-300 text-2xl ">
                            <div class="text-black-500 mt-0  dark:text-gray-400 text-2xl font-bold">ตรอก/ซอย</div>
                                <input type="text" class=" p-1 bg-gray-100 text-2xl rounded-md shadow-sm w-full"
                                    v-model="alley">
                            </lable>
                            <lable class="mt-0 text-gray-600 px-3 dark:text-gray-300 text-2xl ">
                            <div class="text-black-500 mt-0  dark:text-gray-400 text-2xl font-bold">หมู่ที่</div>
                                <input type="text" class=" p-1 bg-gray-100 text-2xl rounded-md shadow-sm w-full"
                                    v-model="group_no">
                            </lable>
                            <lable class="mt-0 text-gray-600 px-3 dark:text-gray-300 text-2xl ">
                            <div class="text-black-500 mt-0  dark:text-gray-400 text-2xl font-bold">บ้านเลขที่</div>
                                <input type="text" class=" p-1 bg-gray-100 text-2xl rounded-md shadow-sm w-full"
                                    v-model="house_number">
                            </lable>
                            <lable class="mt-0 text-gray-600 px-3 dark:text-gray-300 text-2xl ">
                            <div class="text-black-500 mt-0  dark:text-gray-400 text-2xl font-bold">ตำบล</div>
                                <input type="text" class=" p-1 bg-gray-100 text-2xl rounded-md shadow-sm w-full"
                                    v-model="sub_district">
                            </lable>
                            <lable class="mt-0 text-gray-600 px-3 dark:text-gray-300 text-2xl ">
                            <div class="text-black-500 mt-0  dark:text-gray-400 text-2xl font-bold">อำเภอ</div>
                                <input type="text" class=" p-1 bg-gray-100 text-2xl rounded-md shadow-sm w-full"
                                    v-model="district">
                            </lable>
                            <lable class="mt-0 text-gray-600 px-3 dark:text-gray-300 text-2xl ">
                            <div class="text-black-500 mt-0  dark:text-gray-400 text-2xl font-bold">จังหวัด</div>
                                <input type="text" class=" p-1 bg-gray-100 text-2xl rounded-md shadow-sm w-full"
                                    v-model="province">
                            </lable>
                            <lable class="mt-0 text-gray-600 px-3 dark:text-gray-300 text-2xl ">
                            <div class="text-black-500 mt-0  dark:text-gray-400 text-2xl font-bold">รหัสไปรษณีย์</div>
                                <input type="text" class=" p-1 bg-gray-100 text-2xl rounded-md shadow-sm w-full"
                                    v-model="ZIP_code">
                            </lable>
                            </div>
                        </label>
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
            name: '',
            tel: '',
            card_id: '',
            email: '',
            avatar: '',
            profile: '',
            address: '',
            size: 100,
        }
    },
    mounted() {
        this.getUserData();
    },
    methods: {
        getUserData() {
            axios.get('http://racroad-api.test/api/my/profile/' + this.$route.params.id).then((response) => {
                this.name = response.data.data.my_profile.name;
                this.tel = response.data.data.my_profile.tel;
                this.email = response.data.data.my_profile.email;
                this.card_id = response.data.data.my_profile.card_id;
                this.avatar = response.data.data.my_profile.avatar;
                this.address = response.data.data.my_profile.address;
                this.county = response.data.data.my_profile.county;
                this.road = response.data.data.my_profile.road;
                this.alley = response.data.data.my_profile.alley;
                this.group_no = response.data.data.my_profile.group_no;
                this.house_number = response.data.data.my_profile.house_number;
                this.sub_district = response.data.data.my_profile.sub_district;
                this.district = response.data.data.my_profile.district;
                this.province = response.data.data.my_profile.province;
                this.ZIP_code = response.data.data.my_profile.ZIP_code;
            });
        },
        EditUser(e) {
            this.submitted = true;
            e.preventDefault();
            let upload = new FormData();
            upload.append('name', this.name)
            upload.append('tel', this.tel)
            upload.append('card_id', this.card_id)
            upload.append('email', this.email)
            upload.append('avatar', this.profile)
            upload.append('county', this.county)
            upload.append('road', this.road)
            upload.append('alley', this.alley)
            upload.append('group_no', this.group_no)
            upload.append('house_number', this.house_number)
            upload.append('sub_district', this.sub_district)
            upload.append('district', this.district)
            upload.append('province', this.province)
            upload.append('ZIP_code', this.ZIP_code)
           // upload.append('address', this.address)
            axios.post('http://racroad-api.test/api/user/update/' + this.$route.params.id, upload)
                .then(() => {
                    this.getUserData();
                })
                .then(() => {
                    this.$router.push('/User')
                })
                .then(function () {
                    Swal.fire(
                        'อัปเดทข้อมูลผู้ใช้สำเร็จ',
                    )
                });
        },
        avatarFile(a) {
                this.profile = a.target.files[0];
                //console.log(a)
            },
    },
}
</script>
<style>
.margin {
    margin-inline: 5%;
}
</style>
    