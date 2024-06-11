<script setup>
import Navbar from '../components/Navbar.vue';
import Menu from '../components/menu.vue';

</script>

<template>
  <div class="bg-[#FDFDFD]">
    <Navbar />
    <Menu />
    <div class="pt-[100px] pl-[230px] container h-screen">

      <div class="grid grid-cols-4 gap-[30px]">
        <img src="../../public/coun1.png" alt="" class="w-full">
        <img src="../../public/count2.png" alt="" class="w-full">
        <img src="../../public/count.png" alt="" class="w-full">
        <img src="../../public/count4.png" alt="" class="w-full">
      </div>
      <router-view />

    </div>
  </div>
</template>

