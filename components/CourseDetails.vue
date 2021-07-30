<template>
  <div>
    <div class="my-8 md:my-16 w-full">
      <div class="flex flex-col md:flex-row md:flex-wrap w-full">
        <div class="flex flex-col md:w-1/2">
          <div class="md:w-3/4">

            <h3 class="text-3xl md:text-6xl font-bold">Код</h3>
            <h4 class="text-2xl font-bold mt-6 md:mt-0">Разработка автотестов</h4>
            <p class="text-xl mt-6 md:mt-0">
              Научитесь создавать скрипты, которые имитируют поведение человека
              для автоматической проверки работы продукта.
            </p>
          </div>
        </div>

        <div class="flex flex-row md:flex-col md:w-1/2 mt-6 md:mt-0 justify-center md:justify-start">
          <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12 mb-4 mr-4 md:mr-0">
            <framework-card image="idea" description="Intelij IDEA" />
            <framework-card image="java" description="Java" />
            <framework-card image="gradle" description="Gradle" />
            <framework-card image="junit5" description="JUnit 5" />
          </div>
          <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12">
            <framework-card image="rest-assured" description="RestAssured" />
            <framework-card image="selenium" description="Selenium" />
            <framework-card image="selenide" description="Selenide" />
            <framework-card image="appium" description="Appium" />
          </div>
        </div>
      </div>
    </div>

    <div class="my-8 md:my-16 w-full">
      <div class="flex flex-col-reverse md:flex-row md:flex-wrap w-full">
        <div class="flex flex-row md:flex-col md:w-1/2 mt-6 md:mt-0 justify-center md:justify-start">
          <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12 mb-4 mr-4 md:mr-0">
            <framework-card image="github" description="Github" />
            <framework-card image="jenkins" description="Jenkins" />
          </div>
          <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12">
            <framework-card image="docker" description="Docker" />
            <framework-card image="selenoid" description="Selenoid" />
            <framework-card image="browserstack" description="Browserstack" />
          </div>
        </div>

        <div class="flex flex-col md:w-1/2">
          <div class="md:w-3/4">
            <h3 class="text-3xl md:text-6xl font-bold">Инфраструктура</h3>
            <h4 class="text-2xl font-bold"></h4>
            <p class="text-xl mt-6 md:mt-0">
              Выстраивание инфраструктуры Узнаете как решать инфраструктурные
              задачи для встраивания запуска автотестов в CI/CD, контейнеризации
              браузеров и мобильных устройств
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FrameworkCard from "@/components/ui/FrameworkCard.vue";

export default {
  name: "CourseDetails",
  components: {
    FrameworkCard
  }
};
</script>

