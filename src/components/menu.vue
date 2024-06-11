<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
const user = ref(null)
const router = useRouter()


const logout = () => {
  localStorage.removeItem('user')
  router.push('/')
}
</script>

<template>
    <div class="fixed">
        <div class="bg-[#F2EAE1] h-screen container pt-[18px]">
            <h1 class="text-center font-bold text-[20px] leading-[39.01px] mb-[43px]">CRUD OPERATIONS</h1>
    
    
            <div class="flex flex-col space-y-3 p-4 mt-[100px]">
                <router-link to="/dashboard" class="flex items-center space-x-4 py-2 px-10 rounded [&.router-link-active]:bg-yellow-500 text-black">
                    <img src="../../public/Vector.png" alt="">
                    <span>Home</span>
                </router-link>
                <router-link to="" class="flex items-center space-x-4 py-2 px-10  rounded text-gray-700 hover:bg-gray-200">
                    <img src="../../public/bookmark 1.png" alt="">
                    <span>Course</span>
                </router-link>
                <router-link to="" class="flex items-center space-x-4 py-2 px-10  rounded text-gray-700 hover:bg-gray-200">
                    <img src="../../public/graduation-cap 1.png" alt="">
                    <span>Students</span>
                </router-link>
                <router-link to="" class="flex items-center space-x-4 py-2 px-10  rounded text-gray-700 hover:bg-gray-200">
                    <img src="../../public/usd-square 1.png" alt="">
                    <span>Payment</span>
                </router-link>
                <router-link to="" class="flex items-center space-x-4 py-2 px-10  rounded text-gray-700 hover:bg-gray-200">
                    <img src="../../public/file-chart-line 1.png" alt="">
                    <span>Report</span>
                </router-link>
                <router-link to="" class="flex items-center space-x-4 py-2 px-10  rounded text-gray-700 hover:bg-gray-200">
                    <img src="../../public/sliders-v-square 1.png" alt="">
                    <span>Settings</span>
                </router-link>
            </div>
            <button @click="logout" class="flex items-center gap-5 pl-[55px] mt-[80px]">Logout <img src="../../public/sign-out-alt 1.png" alt=""></button>
        </div>
    </div>
</template>


<style lang="scss" scoped>

</style>