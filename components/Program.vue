<template>
  <div name="program" id="program" class="py-8 md:py-16 bg-grayBack">
    <div class="px-6 md:px-32">
      <div class="flex justify-between">
        <div class="font-black text-2xl md:text-5xl">
          Программа
        </div>
        <div>
          <qa-button class="hidden md:flex" type="secondary">Открыть PDF</qa-button>
        </div>
      </div>

      <div class="flex flex-col md:flex-row mt-10 mb-20 space-y-10 md:space-y-0 md:space-x-10">
        <div
          class="rounded-xl py-6 md:py-20 px-6 md:px-10 bg-white md:w-1/3"
          style="box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.05);"
        >
          <div class="text-3xl md:text-5xl font-bold">29 марта</div>
          <div class="text-lg md:text-2xl font-bold">1 блок</div>
          <p class="text-xl text-black opacity-50 mt-2 md:mt-0">
            Погружаемся в курс, знакомимся с куратором и понимаем, как будет
            проходить обучение.
          </p>
        </div>
        <div
          class="rounded-xl py-6 md:py-20 px-6 md:px-10 bg-white md:w-1/3"
          style="box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.05);"
        >
          <div class="text-3xl md:text-5xl font-bold">3 апреля</div>
          <div class="text-lg md:text-2xl font-bold">2 блок</div>
          <p class="text-xl text-black opacity-50 mt-2 md:mt-0">
            Профессионально работаем с IntelliJ IDEA
          </p>
        </div>
        <div
          class="rounded-xl py-6 md:py-20 px-6 md:px-10 bg-white md:w-1/3"
          style="box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.05);"
        >
          <div class="text-3xl md:text-5xl font-bold">10 апреля</div>
          <div class="text-lg md:text-2xl font-bold">3 блок</div>
          <p class="text-xl text-black opacity-50 mt-2 md:mt-0">
            Погружаемся в инструментарий и библиотеки
          </p>
        </div>
        <div
          class="rounded-xl py-6 md:py-20 px-6 md:px-10 bg-white md:w-1/3"
          style="box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.05);"
        >
          <div class="text-3xl md:text-5xl font-bold">22 апреля</div>
          <div class="text-lg md:text-2xl font-bold">4 блок</div>
          <p class="text-xl text-black opacity-50 mt-2 md:mt-0">
            Погружаемся в курс, знакомимся с куратором и понимаем, как будет
            проходить обучение.
          </p>
        </div>
      </div>
      <qa-button class="w-full justify-center flex md:hidden" type="secondary">Скачать</qa-button>
    </div>
  </div>
</template>

<script>
import QAButton from "@/components/ui/Button.vue";
export default {
  name: "Program",
  components: {
    "qa-button": QAButton
  }
};
</script>
