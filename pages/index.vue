<template>
  <div class="w-full flex flex-col md:pt-16 overflow-hidden bg-no-repeat bg-right-top" :style="{'background-image': `url(${require('@/assets/backgrounds/wave1.svg')})`}">
    <div class="p-6 md:px-32">
      <Header />
      <Offer />
      <BestFit />

          <div class="p-6 md:px-32 bg-no-repeat bg-left-course-owner" :style="{'background-image': `url(${require('@/assets/backgrounds/wave2.svg')})`}">
      <CourseOwner />
          </div>
      <Experts />
    </div>
    <Specialists class="w-full" />
    <div class="p-6 md:px-32 bg-no-repeat bg-right" :style="{'background-image': `url(${require('@/assets/backgrounds/wave3.svg')})`}">
      <CourseDetails />
    </div>
    <div class="p-6 md:px-32 bg-no-repeat bg-left" :style="{'background-image': `url(${require('@/assets/backgrounds/wave4.svg')})`}">
      <CourseDetailsAdditionalСomponent/>
    </div>

    <Program />
    <div class="p-6 md:px-32 bg-no-repeat bg-right-process-section-offset"  :style="{'background-image': `url(${require('@/assets/backgrounds/wave5.svg')})`}" >
      <LearningProcess />
    </div>
       <div class="p-6 md:px-32 bg-no-repeat bg-left-process-section-offset"  :style="{'background-image': `url(${require('@/assets/backgrounds/wave6.svg')})`}" >
      <LearningProcessAdditionalСomponent />
    </div>
      <Tariffs class="w-full" />
    <div class="p-6 md:px-32">
      <Register />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "@/components/Header.vue";
import Offer from "@/components/Offer.vue";
import BestFit from "@/components/BestFit.vue";
import CourseOwner from "@/components/CourseOwner.vue";
import Experts from "@/components/Experts.vue";
import Specialists from "@/components/Specialists.vue";
import CourseDetails from "@/components/CourseDetails.vue";
import CourseDetailsAdditionalСomponent from "@/components/CourseDetailsAdditionalСomponent.vue";
import Program from "@/components/Program.vue";
import LearningProcess from "@/components/LearningProcess.vue";
import LearningProcessAdditionalСomponent from "@/components/LearningProcessAdditionalСomponent.vue";
import Tariffs from "@/components/Tariffs.vue";
import Register from "@/components/Register.vue";

export default Vue.extend({
  components: {
    Header,
    Offer,
    BestFit,
    CourseOwner,
    Experts,
    Specialists,
    CourseDetails,
    CourseDetailsAdditionalСomponent,
    Program,
    LearningProcess,
    LearningProcessAdditionalСomponent,
    Tariffs,
    Register
  }
});
</script>

<style>

.bg-right-top {
   background-position: 65vw -15vh;
}

.bg-right {
   background-position: 55vw -5vh;
}
.bg-right-process-section-offset {
   background-position: 75vw -5vh;
}

.bg-left {
 background-position: -15vw -25vh;
}

.bg-left-course-owner {
 background-position: -3vw 4vh;
}

.bg-left-process-section-offset  {
 background-position: -15vw 5vh;
}

</style>

