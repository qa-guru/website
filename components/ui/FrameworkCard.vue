<template>
  <div
    class="flex flex-col rounded-xl p-3 bg-white items-center"
    :class="{'framework': image || description}"
    style="width: 100px; height: 128px;">
    <div class="h-2/3 h-full flex justify-center items-center"><img v-if="image" :src="resolve(image)" alt /></div>
    <div class="h-1/3 text-sm text-gray-500 text-center">{{ description }}</div>
  </div>
</template>

<script>
export default {
  name: 'FrameworkCard',
  props: [
    'image',
    'description'
  ],
  methods: {
    resolve(search) {
      return require(`~/assets/framework-icons/${search?.toLowerCase()}.svg`);
    }
  }
}
</script>

<style scoped>
.framework {
  box-shadow: 0px 0px 32px rgba(120, 110, 24, 0.28);
}
</style>
