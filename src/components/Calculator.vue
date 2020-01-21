<template>
  <div id="calculator">
    <Arrow />
    <section class="intro">
      <h1 class="section__title section__title--intro">
        <strong>Simple</strong>
      </h1>
      <p class="section__subtitle section__subtitle--intro">Calculator</p>
      <img src="https://ae01.alicdn.com/kf/HTB1shhyXAfb_uJkSnaVq6xFmVXa9.jpg" alt="" class="intro__img" />
    </section>

    <div class="portfolio-item-individual">
      <p>
        This project seeks to test my indept knowledge on HTML, CSS and Vanilla
        JavaScript. I did not use any third party library or framework for the
        project. The calculator is functioning and can only be used for simple
        calcultions, It cannot be use to do scientific calculations.
      </p>
      <p>
        You can get the details of the project from
        <a href="https://github.com/areelcipher">Calculator</a>
      </p>
    </div>
    <Footer />
  </div>
</template>

<script>
import Arrow from "./Arrow";
import Footer from "./Footer";
export default {
  components: {
    Arrow,
    Footer
  }
};
</script>

<style scoped>
.portfolio {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.portfolio__item {
  background: var(--clr-accent);
  overflow: hidden;
}

.portfolio__img {
  transition: transform 750ms cubic-bezier(0.5, 0, 0.5, 1), opacity 250ms linear;
}

.portfolio__item:focus {
  position: relative;
  z-index: 2;
}

.portfolio__img:hover,
.portfolio__item:focus .portfolio__img {
  transform: scale(1.2);
  opacity: 0.5;
}

.portfolio-item-individual {
  padding: 0 1em 1em;
  max-width: 1000px;
  margin: 0 auto 30px auto;
  border: 1px solid #dfdfdf;
  box-shadow: 0px 0px 3px #dfdfdf;
}

.portfolio-item-individual p {
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  margin-bottom: 0;
  text-align: justify;
}
.intro {
  position: relative;
    padding-top: 30px;
    padding-bottom: 30px;
}

.intro__img {
  box-shadow: var(--bs);
}

.section__subtitle--intro {
  display: inline-block;
}

@media (min-width: 600px) {
  .intro {
    display: grid;
    width: min-content;
    margin: 0 auto;
    grid-column-gap: 1em;
    grid-template-areas:
      "img title"
      "img subtitle";
    grid-template-columns: min-content max-content;
  }

  .intro__img {
    grid-area: img;
    min-width: 250px;
    position: relative;
    z-index: 2;
  }

  .section__subtitle--intro {
    align-self: start;
    grid-column: -1 / 1;
    grid-row: 2;
    text-align: right;
    position: relative;
    left: -1.5em;
    width: calc(100% + 1.5em);
  }
}
</style>
