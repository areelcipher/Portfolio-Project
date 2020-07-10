<template>
  <div class="quiz">
    <Arrow />
    <section class="intro">
      <h1 class="section__title section__title--intro">
        <strong>Quiz</strong>
      </h1>
      <p class="section__subtitle section__subtitle--intro">App</p>
      <img src="../assets/qz.jpg" alt class="intro__img" />
    </section>

    <div class="portfolio-item-individual">
      <p>The main purpose of this project is to test my skill in fluter.</p>
      <p>
        This mobile application was designed with flutter. It is a cross platform mobile application, it runs on iOS and Android. You can get details of the project from
        <a
          class="repo"
          href="https://github.com/areel007"
          target="_blank"
        >Quiz App</a>
      </p>
    </div>
  </div>
</template>

<script>
import Arrow from "./Arrow";

export default {
  name: "quiz",
  components: {
    Arrow
  }
};
</script>

<style scoped>
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

.repo {
  color: var(--clr-accent);
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