<template>
  <div id="blog">
    <!-- <Arrow /> -->
    <div class="blog-header">
      <h1>AreelDev Tech Blog</h1>
      <i class="fab fa-drupal"></i>
    </div>
    <div class="blog-body">
      <div class="blog-posts">
        <div class="post">
          <h3 class="post__title">Post Title</h3>
          <div class="post__body">
            <img src='../assets/quiz.webp' alt />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta totam quis quibusdam delectus pariatur doloribus? Eligendi quasi facilis, similique veniam molestias totam voluptate commodi? Incidunt iste quaerat repudiandae reprehenderit excepturi sint labore, dignissimos magni quidem debitis a numquam reiciendis, eos itaque sed earum quam tempora aliquid quo ex officiis ducimus.</p>
          </div>
        </div>
      </div>
      <div class="advert"></div>
    </div>
  </div>
</template>

<script>
// import Arrow from './Arrow'
export default {
  components: {
    // Arrow
  }
};
</script>

<style scoped>
#blog {
  margin: 0 auto;
  max-width: 1000px;
}
.blog-header {
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--clr-accent);
}
.blog-header h1 {
  font-size: 2rem;
}
.fa-drupal {
  font-size: 2.5rem;
  margin-left: 0.5rem;
}
.blog-body {
  width: 100%;
  display: flex;
}
.blog-posts {
  width: 70%;
}
.advert {
  width: 30%;
  height: 200px;
  height: 200px;
}
.post__title {
    font-size: 1.5rem;
}
.post__body {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    min-height: 20rem;
    width: 100%;
    padding: .5rem;
}
.post__body p {
    grid-area: 1/2/-1/-1;
    margin-left: .5rem;
}
</style>