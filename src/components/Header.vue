<template>
  <header>
    <div class="logo">
      <img src="../assets/logo.png" alt="">
    </div>
    <nav class="nav">
      <ul>
        <li v-for="link in links" :key="link.menu">
          <router-link :to="link.path" v-if="link.menu==='Blog'">{{ link.menu }}</router-link>
          <a v-else :href="link.path">{{ link.menu }}</a>
        </li>
      </ul>
    </nav>
    <div class="hamburger" @click="slide">
      <div class="burger">
        <div class="bars"></div>
        <div class="bars"></div>
        <div class="bars"></div>
      </div>
    </div>
  </header>
</template>

<script>

export default {
  name: "main-header",
  props: ["links", "slide"],
};
</script>

<style scoped>
header {
  display: flex;
  position: fixed;
  top: 0;
  z-index: 1000;
  background-color: #fff;
  height: 10vh;
  box-shadow: 0px 0px 5px #d3d3d3;
  align-items: center;
  padding: 0 2rem;
  width: 100%;
}
header h4 {
  color: var(--clr-accent);
}

.logo {
  max-width: 40px;
  display: flex;
  align-items: center;
  margin-right: auto;
}

.logo img {
  width: 100% !important;
}

.nav {
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav ul {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
}

.nav ul li {
  list-style: none;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid var(--clr-light);
}

.nav ul li:hover {
  border-bottom: 2px solid var(--clr-accent);
}

.nav ul li a {
  text-decoration: none;
  color: var(--clr-accent);
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hamburger {
  width: 2rem;
  height: 2rem;
  display: none;
}

.burger {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.bars {
  width: 100%;
  height: 0.2rem;
  background-color: var(--clr-accent);
}

@media screen and (max-width: 1000px) {
  .nav {
    width: 70%;
  }
}

@media screen and (max-width: 700px) {
  .nav {
    display: none;
  }
  .hamburger {
    display: block;
  }
}

</style>
