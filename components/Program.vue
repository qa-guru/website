<template>
  <div name="program" id="program" class="pt-8 py-16 bg-grayBack">
    <div class="px-32" style="width: 1440px;">
      <div class="flex justify-between">
        <div class="font-black text-5xl">
          Программа
        </div>
        <div>
          <qa-button type="secondary">Открыть PDF</qa-button>
        </div>
      </div>

      <div class="flex mt-10 mb-20 space-x-10">
        <div
          class="rounded-xl py-20 px-10 bg-white w-1/3"
          style="box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.05);"
        >
          <div class="text-5xl font-bold">29 марта</div>
          <div class="text-2xl font-bold">1 блок</div>
          <p class="text-black opacity-25">
            Погружаемся в курс, знакомимся с куратором и понимаем, как будет
            проходить обучение.
          </p>
        </div>
        <div
          class="rounded-xl py-20 px-10 bg-white w-1/3"
          style="box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.05);"
        >
          <div class="text-5xl font-bold">3 апреля</div>
          <div class="text-2xl font-bold">2 блок</div>
          <p class="text-black opacity-25">
            Профессионально работаем с IntelliJ IDEA
          </p>
        </div>
        <div
          class="rounded-xl py-20 px-10 bg-white w-1/3"
          style="box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.05);"
        >
          <div class="text-5xl font-bold">10 апреля</div>
          <div class="text-2xl font-bold">3 блок</div>
          <p class="text-black opacity-25">
            Погружаемся в инструментарий и библиотеки
          </p>
        </div>
        <div
          class="rounded-xl py-20 px-10 bg-white w-1/3"
          style="box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.05);"
        >
          <div class="text-5xl font-bold">22 апреля</div>
          <div class="text-2xl font-bold">4 блок</div>
          <p class="text-black opacity-25">
            Погружаемся в курс, знакомимся с куратором и понимаем, как будет
            проходить обучение.
          </p>
        </div>
      </div>
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
