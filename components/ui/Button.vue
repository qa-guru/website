<template>
  <button
    class="uppercase font-medium text-lg px-6 py-4 rounded-full"
    :class="[
      {'bg-blacky text-white': type === 'primary' },
      {'bg-white text-blacky border border-solid border-blacky': type === 'secondary' }
    ]">
      <slot/>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: ['type']
}
</script>
