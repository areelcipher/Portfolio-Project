<template>
  <div class="mobile-menu" :class="{ mobileMenuShift: isMobileMenuSlideOut }" >
    <ul>
      <li v-for="link in links" :key="link.menu" @click="mobileMenuClose">
        <router-link :to="link.path" v-if="link.menu==='Blog'">{{ link.menu }}</router-link>
        <a v-else :href="link.path">{{ link.menu }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "mobile-menu",
  props: ["links", "isMobileMenuSlideOut", "mobileMenuClose"]
};
</script>

<style scoped>
.mobile-menu {
  position: fixed;
  height: 90vh;
  top: 10vh;
  left: 0;
  z-index: 2000;
  width: 70vw;
  background-color: var(--clr-dark);
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateX(-70vw);
  transition: .3s ease-in-out;
}
.mobile-menu ul {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 0;
}
.mobile-menu ul li {
  list-style: none;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.mobile-menu ul li:hover {
  background-color: #383838;
}
.mobile-menu ul li a {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: var(--clr-accent);
}
.mobileMenuShift {
    transform: translateX(0vw);
}

</style>