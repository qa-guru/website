<template>
  <div class="w-full flex flex-col pt-16 overflow-hidden">
    <div class="px-32" style="width: 1440px;">
      <Header />
      <Offer />
      <BestFit />
      <CourseOwner />
      <Experts />
    </div>
    <Specialists class="w-full"/>
    <div class="px-32" style="width: 1440px;">
      <CourseDetails />
    </div>
      <Program />
      <div class="px-32" style="width: 1440px;">
      <!--
      <LearningProcess />
      <Tariffs />
      <Register />
      -->
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
import Program from "@/components/Program.vue";
import LearningProcess from "@/components/LearningProcess.vue";
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
    Program,
    LearningProcess,
    Tariffs,
    Register
  }
});
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
