<template>
  <div>
    <div class="my-8 md:my-16 w-full">
       <div class="flex flex-col md:flex-row md:flex-wrap w-full">
        <div class="flex flex-col md:w-1/2">
          <div class="md:w-3/4">
            <h3 class="text-3xl md:text-6xl font-bold">Визуализация результатов</h3>
            <h4 class="text-2xl font-bold"></h4>
            <p class="text-xl mt-6 md:mt-0">
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
            <p class="text-xl mt-6 md:mt-0">
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
  name: "CourseDetailsAdditionalСomponent",
  components: {
    FrameworkCard
  }
};
</script>

