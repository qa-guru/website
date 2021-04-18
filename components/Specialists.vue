<template>
  <div class="pt-8 py-16 bg-grayBack">
    <div class="px-6 md:px-32">
      <h2 class="text-2xl md:text-6xl font-bold text-center leading-snug">
        Специалисты отрасли
      </h2>
      <div class="flex flex-col w-full space-y-6 md:space-y-0 md:flex-row md:flex-wrap mt-8 md:mt-16">
        <div class="flex flex-col md:flex-row md:flex-1">
          <div class="md:w-1/3 flex justify-center md:justify-start"><img src="~/assets/icons/expert-icon.svg" /></div>
          <div class="md:w-2/3 flex flex-col mt-6 md:mt-0 items-center md:items-start">
            <h4 class="font-bold text-xl md:text-4xl">Имя Фамилия</h4>
            <p class="text-blacky opacity-50">Лекции с ним</p>
            <h5 class="text-lg font-bold mt-2">Даст материал по темам:</h5>
            <ul class="list-disc pl-5 w-3/4 pt-4 md:pt-0">
              <li>код с автотестами в GitHub</li>
              <li>задача в Jenkins</li>
              <li>контейнеризация Selenoid</li>
              <li>отчет в Allure Report с логами, скриншотами и видео</li>
            </ul>
          </div>
        </div>
        <div class="flex flex-col md:flex-row md:flex-1">
          <div class="md:w-1/3 flex justify-center md:justify-start"><img src="~/assets/photos/danilov.png" /></div>
          <div class="md:w-2/3 flex flex-col mt-6 md:mt-0 items-center md:items-start">
            <h4 class="font-bold text-xl md:text-4xl">Евгений Данилов</h4>
            <p class="text-blacky opacity-50">Карьерное развитие</p>
            <h5 class="text-lg font-bold mt-2 w-2/3 md:w-full">
              К концу курса у вас будет боевой проект:
            </h5>
            <ul class="list-disc pl-5 w-3/4 pt-4 md:pt-0">
              <li>код с автотестами в GitHub</li>
              <li>задача в Jenkins</li>
              <li>контейнеризация Selenoid</li>
              <li>отчет в Allure Report с логами, скриншотами и видео</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
