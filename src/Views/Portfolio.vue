<template>
  <div id="portfolio">
    <Header />
    <Home />
    <MyService />
    <AboutMe />
    <MyWork />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../components/Home";
import MyService from "../components/MyService";
import AboutMe from "../components/AboutMe";
import MyWork from "../components/MyWork";
export default {
  components: {
    Header,
    Footer,
    Home,
    MyService,
    AboutMe,
    MyWork,
  }
};
</script>

<style scoped>
.about-me {
  max-width: 1000px;
  margin: 0 auto;
}

.about-me__img {
  box-shadow: var(--bs);
}

@media (min-width: 600px) {
  .about-me {
    display: grid;
    grid-template-columns: 1fr 200px;
    grid-template-areas:
      "title img"
      "subtitle img"
      "text img";
    grid-column-gap: 2em;
  }

  .section__title--about {
    grid-area: title;
  }

  .section__subtitle--about {
    grid-column: 1 / -1;
    grid-row: 2;
    position: relative;
    left: -1em;
    width: calc(100% + 2em);
    padding-left: 1em;
    padding-right: calc(200px + 4em);
  }

  .about-me__img {
    grid-area: img;
    position: relative;
    z-index: 2;
  }
}
</style>
