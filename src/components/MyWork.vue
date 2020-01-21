<template>
  <section class="my-work" id="work">
    <h2 class="section__title section__title--work">My Projects</h2>
    <p class="section__subtitle section__subtitle--work">
      A selection of my range of work
    </p>

    <div class="portfolio">
      <!-- Portfolio item 01 -->
      <a href="#/calculator" class="portfolio__item">
        <img src="https://ae01.alicdn.com/kf/HTB1shhyXAfb_uJkSnaVq6xFmVXa9.jpg" alt="" class="portfolio__img" />
      </a>

      <!-- Portfolio item 02 -->
      <a href="#/whatsapp" class="portfolio__item">
        <img src="../assets/whatsapp.png" alt="" class="portfolio__img" />
      </a>

      <!-- Portfolio item 03 -->
      <a href="#/weather" class="portfolio__item">
        <img src="../assets/weather.jpg" alt="" class="portfolio__img" />
      </a>

      <!-- Portfolio item 04 -->
      <a href="#/todo" class="portfolio__item">
        <img src="../assets/todo1.png" alt="" class="portfolio__img" />
      </a>
      
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.my-work {
  background-color: var(--clr-dark);
  color: var(--clr-light);
  text-align: center;
  z-index: -200;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.portfolio {
  display: grid;
  /* grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); */
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 10px;
}
@media (max-width: 700px) {
  .portfolio {
    display: flex;
    flex-direction: column;
  }
}

.portfolio__item {
  background: var(--clr-accent);
  overflow: hidden;
  margin: 10px auto;
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
</style>
