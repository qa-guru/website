<template>
  <div class="w-full flex justify-between md:justify-start">

    <div class="md:mr-20 text-xl font-bold">ЛОГОТИП</div>
    <button class="md:hidden z-20 outline-none focus:outline-none" @click="toggleHeaderNav()"><img :src="getImgUrl()"/></button>

    <ul class="md:flex font-bold md:space-x-6" :class="[{ 'border border-black border-solid flex flex-col justify-center text-center absolute left-0 top-0 w-screen h-screen bg-white z-10 text-2xl space-y-6' : toggleHeader === true},  {'hidden': toggleHeader === false}]">

      <li @click="handleClose()"><nuxt-link :to="{ path: '/', hash:'#bestfit'}">Для кого</nuxt-link></li>
      <li @click="handleClose()"><nuxt-link :to="{ path: '/', hash:'#experts'}">Преподаватели</nuxt-link></li>
      <li @click="handleClose()"><nuxt-link :to="{ path: '/', hash:'#program'}">Программа</nuxt-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      toggleHeader: false
    }
  },
  methods: {
    toggleHeaderNav() {
      this.toggleHeader = !this.toggleHeader;
    },
    handleClose() {
      if (this.toggleHeader) {
        this.toggleHeader = false;
      }
    },
    getImgUrl() {
      if (this.toggleHeader) {
        return require("~/assets/icons/close.svg");
      } else {
        return require("~/assets/icons/hamburger.svg");
      }

    }
  }
}
</script>
