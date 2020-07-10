<template>
  <header>
    <router-link to='/'><i class="fas fa-arrow-left"></i></router-link>
  </header>
</template>

<script></script>

<style scoped>
header {
  display: flex;
  justify-content: flex-start;
  padding: 1.5em 2em;
  top: 0;
}
.fa-arrow-left {
  color: var(--clr-accent);
  font-size: 20px;
  color: #fff;
}
a {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: var(--clr-accent);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
