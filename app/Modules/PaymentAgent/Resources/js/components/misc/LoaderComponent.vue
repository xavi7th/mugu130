<template>
  <div class="loader" :style="{ width: size + 'px', height: size + 'px' }"></div>
</template>

<script>
  export default {
      name: 'Loader',
      props: {
        size: {
          type: Number,
          default: 30
        }
      }
  }
</script>

<style>
  .loader {
    display: inline-block;
    border: 5px solid rgba(189,189,189, 0.25);
    border-left-color: #8ace42;
    border-top-color: #8ace42;
    border-radius: 50%;
    animation: rotate 600ms infinite linear;
  }

  @keyframes rotate {
      to {
          transform: rotate(1turn)
        }
  }
</style>
