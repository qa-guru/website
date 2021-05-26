<template>
  <div class="flex mt-10">
    <div class="md:flex-1 flex flex-col">
      <h3 class="font-bold text-3xl">Запись на курс</h3>
      <form class="mt-10 text-lg md:text-3xl placeholder-black flex flex-col space-y-12 md:space-y-6 md:w-2/3">
        <input type="text" class="py-2 focus:outline-none border-b border-solid border-black" placeholder="Имя" />
        <input type="email" class="py-2 focus:outline-none border-b border-solid border-black" placeholder="Email" />
        <input type="text" class="py-2 focus:outline-none border-b border-solid border-black" placeholder="Телефон" />
        <qa-button type="primary" class="text-center font-bold w-full">Записаться</qa-button>
      </form>
      <p class="my-6 text-xs md:text-base md:w-2/3">Отправляя заявку, вы принимаете условия договора оферты и даёте согласие на обработку своих персональных данных в соответствии с политикой конфиденциальности.</p>
    </div>
    <div class="hidden md:flex-1 md:flex flex-col items-center">
      <div>
      <h3 class="font-bold text-2xl md:text-3xl">Процесс обучения:</h3>

      <h5 class="text-xl mt-8">Формат занятий</h5>
      <p class="font-bold text-3xl">Прямые эфиры</p>

      <h5 class="text-xl mt-8">Домашние задания</h5>
      <p class="font-bold text-3xl">Проверка с комментариями</p>

      <h5 class="text-xl mt-8">Коммуникация с менторами</h5>
      <p class="font-bold text-3xl">Чат</p>

      <h5 class="text-xl mt-8">Сохраняем записи всех потоков</h5>
      <p class="font-bold text-3xl">Бессрочный доступ</p>
      </div>
    </div>
  </div>
</template>
<script>
import QAButton from '@/components/ui/Button.vue';

export default {
  name: 'Register',
  components: {
    'qa-button': QAButton
  }
}
</script>
