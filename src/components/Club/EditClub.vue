<template>
    <div
        class="flex mb-3 items-center justify-between text-3xl mr-2 font-bold mb-1 text-gray-100 bg-primary w-full p-2 shadow-md rounded-md">
        <div class="flex items-center">
            <span>แก้ไขข้อมูลคลับ : {{club_name}}</span>
        </div>
    </div>

    <div class="flex flex-wrap items-center justify-center">
        <div class="bg-white w-full mb-3 rounded-lg dark:bg-gray-800 shadow-md transform duration-200 easy-in-out ">
            <form @submit.prevent="EditClub" class="p-3" enctype="multipart/form-data">
                <div class="px-7 mb-8">
                    <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-1">
                        <label class="block text-2xl">
                            <div class="text-black-500 mt-2  dark:text-gray-400 text-3xl font-bold">ชื่อคลับ
                            </div>
                            <div class="mt-0 text-gray-600 px-3 dark:text-gray-300 text-2xl ">
                                <input type="text" class=" p-1 bg-gray-100 text-2xl rounded-md shadow-sm w-full"
                                    v-model="club_name">
                            </div>
                        </label>
                        <label class="block text-2xl">
                            <div class="text-black-500 mt-2  dark:text-gray-400 text-3xl font-bold">โซนคลับ
                            </div>
                            <div class="mt-0 text-gray-600 px-3 dark:text-gray-300 text-2xl ">
                                <input type="text" class=" p-1 bg-gray-100 text-2xl rounded-md shadow-sm w-full"
                                    v-model="club_zone">
                            </div>
                        </label>
                        <label class="block text-2xl">
                            <div class="text-black-500 mt-2  dark:text-gray-400 text-3xl font-bold">คำอธิบาย
                            </div>
                            <div class="mt-0 text-gray-600 px-3 dark:text-gray-300 text-2xl ">
                                <textarea class=" p-3 bg-gray-100 text-2xl rounded-md shadow-sm w-full" rows="3"
                                    v-model="description"></textarea>
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
    name: 'EditUser',
    data() {
        return {
            club_name: '',
            club_zone: '',
            description: '',
            club_director: '',
            size: 100,
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
    },
    EditClub(e) {
            this.submitted = true;
            e.preventDefault();
            let upload = new FormData();
            upload.append('club_name', this.club_name)
            upload.append('club_zone', this.club_zone)
            upload.append('description', this.description)
            axios.post('http://racroad-api.test/api/club/update/' + this.$route.params.id, upload)
                .then(() => {
                    this.getClubDetail();
                })
                .then(() => {
                    this.$router.push('/Club')
                })
                .then(function () {
                    Swal.fire(
                        'อัปเดทข้อมูลคลับสำเร็จ',
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
    