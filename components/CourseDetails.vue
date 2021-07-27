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
<!-- разбиваем отсюда -->
    <!-- <div class="my-8 md:my-16 w-full">
    <img class="absolute h-full w-full md:w-1/2 md:h-1/2 -z-10" src="~/assets/backgrounds/wave4.svg" />
      <div class="flex flex-col md:flex-row md:flex-wrap w-full">
        <div class="flex flex-col md:w-1/2">
          <div class="md:w-3/4">
            <h3 class="text-3xl md:text-6xl font-bold">Визуализация результатов</h3>
            <h4 class="text-2xl font-bold"></h4>
            <p class="mt-6 md:mt-0">
              Визуализация результатов тестирования В этом блоке вы освоите
              навык формирования отчётности понятной вам и заказчику и сможете
              получать уведомления в мессенджеры о статусе ваших тестов
            </p>
          </div>
        </div>

        <div class="flex flex-row md:flex-col md:w-1/2 mt-6 md:mt-0 justify-center md:justify-start">
          <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12 mb-4 mr-4 md:mr-0">
            <framework-card image="allure" description="Allure Report" />
            <framework-card
              image="allure-testops"
              description="Allure TestOps"
            />
            <framework-card image="jira" description="Jira" />
          </div>
          <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12">
            <framework-card />
            <framework-card />
            <framework-card image="telegram" description="Telegram" />
            <framework-card image="slack" description="Slack" />
          </div>
        </div>
      </div>
    </div>

    <div class="my-8 md:my-16 w-full">
      <div class="flex flex-col-reverse md:flex-row md:flex-wrap w-full">
        <div class="flex flex-row md:flex-col md:w-1/2 mt-6 md:mt-0 justify-center md:justify-start">
          <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12 mb-4 mr-4 md:mr-0">
            <framework-card
              image="allure-testops"
              description="Allure TestOps"           />
            <framework-card image="jira" description="Jira" />
          </div>
        </div>

        <div class="flex flex-col md:w-1/2">
          <div class="w-full">
            <h3 class="text-3xl md:text-6xl font-bold">Тест-менеджмент</h3>
            <h4 class="text-2xl font-bold"></h4>
            <p class="mt-6 md:mt-0">
              Сможете "по—взрослому" управлять большим объёмом тестов в
              тест-менеджмент системе, поддерживающей ручные и автотесты, во
              взаимодействии с CI/CD инструментами и таск-трекерами
            </p>
          </div>
        </div>

      </div>
    </div> -->
    <!-- и до сюда -->
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

