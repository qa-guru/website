<template>
  <div class="flex flex-col mt-32 w-2/3">
    <h1 class="font-bold text-6xl leading-none">Курс по автоматизации тестирования</h1>
    <p class="font-regular text-lg leading-normal mt-8">Почему наш курс круче других? На рынке сейчас сложился best-practice в инструментарии и я собрал в преподавательском составе основателей / разработчиков этих библиотек. Тебе точно понравится :)</p>
    <div class="flex space-x-12 my-8">
      <div>
        <h4 class="font-bold text-3xl leading-normal">3 месяца</h4>
        <p class="font-regular text-lg leading-tight">длительность</p>
      </div>
      <div>
        <h4 class="font-bold text-3xl leading-normal">29 марта</h4>
        <p class="font-regular text-lg leading-tight">Начало обучения</p>
      </div>
      <div>
        <h4 class="font-bold text-3xl leading-normal">от 15 000 руб</h4>
        <p class="font-regular text-lg leading-tight">Стоимость</p>
      </div>
    </div>
    <qa-button type="primary">Попробовать</qa-button>
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
