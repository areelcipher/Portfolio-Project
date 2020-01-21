<template>
  <div id="newsletter">
    <div id="email">
      <input type="text" placeholder="Email address" />
      <button>Send</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#newsletter {
    display: flex;
    justify-content: center;
    align-items: center;
}
#email {
  box-sizing: border-box;
  padding: 5px;
  border: 1px solid var(--clr-accent);
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
}
input {
    background-color: #111;
    border: none;
    outline: none;
}
</style>
