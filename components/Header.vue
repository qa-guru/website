<template>
  <div class="w-full flex justify-between md:justify-start">
    <!--<img src="">-->
    <div class="md:mr-20">LOGO</div>
    <button class="md:hidden" style="background-image: url('~/assets/icons/hamburger.svg') no-repeat scroll 0 0 transparent">Menu</button>
    <ul class="hidden md:flex font-bold md:space-x-6 ">
      <li><nuxt-link :to="{ path: '/', hash:'#bestfit'}">Для кого</nuxt-link></li>
      <li><nuxt-link :to="{ path: '/', hash:'#experts'}">Преподаватели</nuxt-link></li>
      <li><nuxt-link :to="{ path: '/', hash:'#program'}">Программа</nuxt-link></li>
    </ul>
  </div>
</template>
