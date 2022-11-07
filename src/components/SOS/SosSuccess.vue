<template>
    <div class="margin">
        <div class="text-3xl mr-2 font-bold mb-1 text-gray-100 bg-primary w-full p-2 shadow-md rounded-md">รายการ SOS ปิดงานเเล้ว</div>
        <form>
                    <div class="relative">
                        <div class="flex absolute inset-y-0 left-0 items-center pl-1 pointer-events-none">
                            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </div>
                        <input type="search" v-model="search"
                            class="block py-3 pl-10 w-full text-xl text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="ระบุวันที่ ที่ต้องการค้นหา ตัวอย่าง 22-08-65..." required="">
                        <button type="submit"
                            class="text-white absolute right-1 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-4 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                    </div>
                </form>
        <div class="overflow-x-auto relative shadow-md rounded-md">
            <table class="w-full text-sm text-left bg-primary dark:text-gray-400">
                <tr class="text-2xl text-gray-100 uppercase bg-primary dark:bg-gray-700 dark:text-gray-400">
                    <th scope="col" class="py-3 px-6 whitespace-nowrap">
                        วันที่-เวลา
                    </th>
                    <th scope="col" class="py-3 px-6 whitespace-nowrap">
                        ชื่อลูกค้า
                    </th>
                    <th scope="col" class="py-3 px-6 whitespace-nowrap">
                        สาเหตุเบื้องต้น
                    </th>
                    <th scope="col" class="py-3 px-6 whitespace-nowrap">
                        พิกัดที่อยู่
                    </th>
                    <th scope="col" class="py-3 px-6 whitespace-nowrap">
                        เบอร์โทรศัพท์
                    </th>
                    <th scope="col" class="py-3 px-6 whitespace-nowrap">
                        สถานะ
                    </th>
                </tr>
                <tr class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700 text-2xl" v-for="(item, i) in filteredItems" :key="i">
                    <th scope="row"
                        class="py-4 px-6 whitespace-nowrap whitespace-nowrap font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {{ item.date }}
                    </th>
                    <td class="py-4 px-6 whitespace-nowrap">
                        {{ item.name }}
                    </td>
                    <td class="py-4 px-6 whitespace-nowrap">
                        {{ item.sos }}
                    </td>
                    <td class="py-4 px-6 whitespace-nowrap">
                        {{ item.location }}
                    </td>
                    <td class="py-4 px-6 whitespace-nowrap">
                        {{ item.tel }}
                    </td>
                    <td class="py-4 px-6 whitespace-nowrap">
                        {{ item.status }}
                    </td>
                </tr>
            </table>
        </div>
    </div>
    </template>
    
    <script>
    export default {
      name: 'SosSuccess',
    data() {
        return {
     search : '',
     items: [
       { date: '20.30น. 22-09-65', name: 'สุธาวี สะอะ', sos: 'รถยางรั่ว', location: '6.6240878, 101.1681022', tel: '0935548721', status: 'ปิดงานเเล้ว' },
       { date: '18.40น. 20-09-65', name: 'นิสวีรา มะแน', sos: 'น้ำมันหมด', location: '6.6240878, 101.1681022', tel: '0939514628', status: 'ปิดงานเเล้ว' },
     ]  
        }
    },
    computed: {
    filteredItems () {
      return this.items.filter(item => {
         return item.date.toLowerCase().indexOf(this.search.toLowerCase()) > -1
      })
    }
  }
}
</script>
    <style>
      .margin {
        margin-inline: 5%;
      }
    </style>
    