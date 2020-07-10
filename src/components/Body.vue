<template>
  <div id="main-body">
    <MobileMenu :links="links" :slide="slide" :isMobileMenuSlideOut='isMobileMenuSlideOut' :mobileMenuClose='mobileMenuClose' />
    <div class="body" :class='{ bodyShift: isMobileMenuSlideOut }' :isMobileMenuSlideOut='isMobileMenuSlideOut' @click="mobileMenuClose" :bodyData="bodyData" >
      <Home :bodyData="bodyData" />
      <MyService :bodyData="bodyData" />
      <AboutMe :bodyData="bodyData" />
      <MyWork :bodyData="bodyData" />
    </div>
  </div>
</template>

<script>
import Home from "../components/Home";
import MyService from "../components/MyService";
import AboutMe from "../components/AboutMe";
import MyWork from "../components/MyWork";
import MobileMenu from "./MobileMenu";

export default {
  name: "main-body",
  components: {
    Home,
    MyService,
    AboutMe,
    MyWork,
    MobileMenu
  },
  props: ["links", "isMobileMenuSlideOut", "slide", "mobileMenuClose", "bodyData"]
};
</script>

<style scoped>
.body {
  transition: 0.3s ease-in-out;
}
.bodyShift {
  transform: translateX(70vw);
  opacity: 0.2;
}
@media screen and (max-width: 320px) {
  .body {
    width: 100vw;
    margin: 0 auto !important;
  }
}
</style>