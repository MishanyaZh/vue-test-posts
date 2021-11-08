<template>
  <div class="home">
    <h2 class="title">Welkome to HomePage</h2>
  </div>
</template>

<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: url(https://pixabay.com/get/gfd482baa633576431f860c20b25a45e0041669eb15e34817f0b0c244542991dad4519e8694320b0cf69bbf74a253c4ed58a79b9f5753481f43689ceb2bcaee26_1280.jpg);
  background-size: cover;
  background-position: center;
}
.title {
  display: block;
  text-align: center;
  font-weight: 500;
  font-size: 48px;
  background-color: rgba(113, 90, 68, 0.7);
  color: rgba(12, 12, 12, 0.9);
  border-radius: 5px;
}
</style>
