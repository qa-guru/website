<template>
  <div class="flex flex-col mt-16 md:mt-32 overflow-hidden position-relative">
    <div><!--<img class="absolute right-0 transform translate-x-48 -top-32 h-192" src="~/assets/background/wave1.svg" />--></div>
    <h1 class="font-bold text-2xl md:text-6xl leading-none md:w-2/3">Курс по автоматизации тестирования</h1>
    <p class="font-regular md:text-lg leading-normal mt-8 w-4/5 md:w-2/3" >Почему наш курс круче других? На рынке сейчас сложился best-practice в инструментарии и я собрал в преподавательском составе основателей / разработчиков этих библиотек. Тебе точно понравится :)</p>

    <div class="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-12 my-8">
      <div>
        <h4 class="font-bold text-2xl md:text-3xl leading-normal">3 месяца</h4>
        <p class="font-regular md:text-lg leading-tight">длительность</p>
      </div>
      <div>
        <h4 class="font-bold text-2xl md:text-3xl leading-normal">29 марта</h4>
        <p class="font-regular md:text-lg leading-tight">Начало обучения</p>
      </div>
      <div>
        <h4 class="font-bold text-2xl md:text-3xl leading-normal">от 15 000 руб</h4>
        <p class="font-regular md:text-lg leading-tight">Стоимость</p>
      </div>
    </div>
    <qa-button type="primary" class="text-center font-bold w-full md:w-fit-content">Попробовать</qa-button>
  </div>
</template>

<script>
import QAButton from '@/components/ui/Button.vue';

export default {
  name: 'Offer',
  components: {
    'qa-button': QAButton
  }
}
</script>
