<template>
  <div class="w-full flex">
    <!--<img src="">-->
    <div class="mr-20">LOGO</div>
    <ul class="flex space-x-6 font-bold font-">
      <li><nuxt-link :to="{ path: '/', hash:'#bestfit'}">Для кого</nuxt-link></li>
      <li><nuxt-link :to="{ path: '/', hash:'#experts'}">Преподаватели</nuxt-link></li>
      <li><nuxt-link :to="{ path: '/', hash:'#program'}">Программа</nuxt-link></li>
    </ul>
  </div>
</template>
