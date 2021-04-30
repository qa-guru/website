<template>
  <div class="flex flex-col md:flex-row mt-16 md:mt-32 flex-wrap">
    <div class="flex-1">
      <img class="h-auto md:h-128" src="~/assets/photos/vasenkov.png" />
    </div>
    <div class="flex flex-col flex-1">
      <h4 class="mt-6 md:mt-0 text-2xl md:text-6xl font-bold leading-none">Станислав Васенков</h4>
      <p class="mt-8 font-regular">
        Основатель крупнейшего комьюнити по автоматизации @qa_automation
        Основатель крупнейшего комьюнити по автоматизации @qa_automation
        Основатель крупнейшего комьюнити по автоматизации @qa_automation
        Основатель крупнейшего комьюнити по автоматизации @qa_automation
        Основатель крупнейшего комьюнити по автоматизации @qa_automation
        Основатель крупнейшего комьюнити по автоматизации @qa_automation
      </p>
      <div class="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 mt-6 md:mt-32 w-full flex-wrap">
        <a
          href="https://t.me/qa_automation"
          rel="noopener"
          target="_blank"
          class="flex-1 hover:bg-grayBack"
        >
          <div
            to="https://t.me/qa_automation"
            class="p-4 rounded-md border border-solid border-grayBorder flex flex-col"
          >
            <div class="flex justify-between">
              <strong>Комьюнити</strong>
              <img src="~/assets/icons/arrow.svg" alt />
            </div>
            @qa_automation
          </div>
        </a>
        <a
          href="https://t.me/qa_guru_review"
          rel="noopener"
          target="_blank"
          class="flex-1 hover:bg-grayBack"
        >
          <div
            class="p-4 rounded-md border border-solid border-grayBorder flex flex-col"
          >
            <div class="flex justify-between">
              <strong>Отзывы</strong>
              <img src="~/assets/icons/arrow.svg" />
            </div>
            <a>@qa_guru_review</a>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
