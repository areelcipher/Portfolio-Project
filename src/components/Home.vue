<template>
  <section class="intro" id="home">
    <h1 class="section__title section__title--intro">
      Hi, I am <strong>Sunday Morenikeji</strong>
    </h1>
    <p class="section__subtitle section__subtitle--intro">frontend dev</p>
    <img
      src="../assets/3.jpg"
      alt="a picture of Jane Smith smiling"
      class="intro__img"
    />
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
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
