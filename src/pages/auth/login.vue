<template>
  <div class="bg-gradient-to-r from-[#FEAF00] to-[#F8D442] h-screen flex justify-center items-center">


    <div class="bg-white w-[500px] p-10 rounded-[20px]">
      <h1 class="text-center font-bold text-[32px] leading-[39.01px] mb-[43px]">CRUD OPERATIONS</h1>

      <h2 class="text-center font-semibold text-[22px] leading-[26.82px] mb-[9px]">Sign In</h2>

      <p class="text-center font-normal text-[14px] leading-[17.07px] mb-[50px] opacity-[70%]">
        Enter your credentials to access your account
      </p>

      <form @submit.prevent="loginUser" class="flex flex-col gap-5">
        <label for="">
          Email
          <input v-model="userData.username" class="w-full py-3 px-5 border rounded outline-none focus:border-primary focus:border-red-200"
            type="text">
        </label>
        
        <label for="">
          Password
          <input v-model="userData.password" class="w-full py-3 px-5 border rounded outline-none focus:border-primary focus:border-red-200"
            type="text">
        </label>

        <h2 v-if="isError" class="text-red-500">Login or Password wrong</h2>

        <button class="py-3 px-5 text-xl bg-primary rounded text-white bg-[#FEAF00] mt-[20px] hover:bg-[#b68b3c] ">SIGN IN</button>

        <div class="flex justify-center gap-1">
          <p class="text-center font-normal text-[14px] leading-[17.07px] opacity-[70%]">Forgot your password?</p>
          <p class="text-center font-normal text-[14px] leading-[17.07px] text-[#FEAF00]">Reset Password</p>
        </div>
      </form>
    </div>


  </div>
</template>

<script setup>

import { ref, reactive } from 'vue';
import api from '../../api'

import { useRouter } from 'vue-router'

const router = useRouter()
const isError = ref(false)
const userData = reactive({
  username: '',
  password: ''
})


const loginUser = () => {
  api.post('/auth/login', userData)
    .then((res) => {
      localStorage.setItem('user', JSON.stringify(res.data))
      router.push('/dashboard')
      console.log('res', res);
    })
    .catch((err) => {
      console.log('err', err);
      isError.value = true
    })
}

</script>

<style  scoped></style>