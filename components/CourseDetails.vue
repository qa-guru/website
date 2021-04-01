<template>
  <div>
    <div class="my-16">
      <div class="flex flex-wrap w-full">
        <div class="flex flex-col w-1/2">
          <div class="w-3/4">
            <h3 class="text-6xl font-bold">Код</h3>
            <h4 class="text-2xl font-bold">Разработка автотестов</h4>
            <p>
              Научитесь создавать скрипты, которые имитируют поведение человека
              для автоматической проверки работы продукта.
            </p>
          </div>
        </div>

        <div class="flex flex-col w-1/2">
          <div class="flex space-x-12 mb-4">
            <framework-card image="idea" description="Intelij IDEA" />
            <framework-card image="java" description="Java" />
            <framework-card image="gradle" description="Gradle" />
            <framework-card image="junit5" description="JUnit 5" />
          </div>
          <div class="flex space-x-12">
            <framework-card image="rest-assured" description="RestAssured" />
            <framework-card image="selenium" description="Selenium" />
            <framework-card image="selenide" description="Selenide" />
            <framework-card image="appium" description="Appium" />
          </div>
        </div>
      </div>
    </div>

    <div class="my-16">
      <div class="flex flex-wrap w-full">
        <div class="flex flex-col w-1/2">
          <div class="flex space-x-12 mb-4">
            <framework-card image="github" description="Github" />
            <framework-card image="jenkins" description="Jenkins" />
          </div>
          <div class="flex space-x-12">
            <framework-card image="docker" description="Docker" />
            <framework-card image="selenoid" description="Selenoid" />
            <framework-card image="browserstack" description="Browserstack" />
          </div>
        </div>

        <div class="flex flex-col w-1/2">
          <div class="w-3/4">
            <h3 class="text-6xl font-bold">Инфраструктура</h3>
            <h4 class="text-2xl font-bold"></h4>
            <p>
              Выстраивание инфраструктуры Узнаете как решать инфраструктурные
              задачи для встраивания запуска автотестов в CI/CD, контейнеризации
              браузеров и мобильных устройств
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="my-16">
      <div class="flex flex-wrap w-full">
        <div class="flex flex-col w-1/2">
          <div class="w-3/4">
            <h3 class="text-6xl font-bold">Визуализация результатов</h3>
            <h4 class="text-2xl font-bold"></h4>
            <p>
              Визуализация результатов тестирования В этом блоке вы освоите
              навык формирования отчётности понятной вам и заказчику и сможете
              получать уведомления в мессенджеры о статусе ваших тестов
            </p>
          </div>
        </div>

        <div class="flex flex-col w-1/2">
          <div class="flex space-x-12 mb-4">
            <framework-card image="allure" description="Allure Report" />
            <framework-card
              image="allure-testops"
              description="Allure TestOps"
            />
            <framework-card image="jira" description="Jira" />
          </div>
          <div class="flex space-x-12">
            <framework-card />
            <framework-card />
            <framework-card image="telegram" description="Telegram" />
            <framework-card image="slack" description="Slack" />
          </div>
        </div>
      </div>
    </div>

    <div class="my-16">
      <div class="flex flex-wrap w-full">
        <div class="flex flex-col w-1/2">
          <div class="flex space-x-12 mb-4">
            <framework-card
              image="allure-testops"
              description="Allure TestOps"
            />
            <framework-card image="jira" description="Jira" />
          </div>
        </div>

        <div class="flex flex-col w-1/2">
          <div class="w-full">
            <h3 class="text-6xl font-bold">Тест-менеджмент</h3>
            <h4 class="text-2xl font-bold"></h4>
            <p>
              Сможете "по—взрослому" управлять большим объёмом тестов в
              тест-менеджмент системе, поддерживающей ручные и автотесты, во
              взаимодействии с CI/CD инструментами и таск-трекерами
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
