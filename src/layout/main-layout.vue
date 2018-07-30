<template>
  <div class="main-layout">
    <img class="logo" src="@/assets/logo.png">
    <nav>
      <slot name="nav"></slot>
    </nav>
    <slot></slot>
  </div>
</template>

<style scoped>
.logo {
  display: block;
  margin: 60px auto 0 auto;
}
</style>