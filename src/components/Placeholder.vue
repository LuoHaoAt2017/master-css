<template>
    <div class="placeholder-container">
        <input class="my-input input-1" placeholder="hello world"/>
        <input class="my-input input-2" placeholder="hello world"/>
    </div>
</template>

<script>
  export default {
    name: 'placeholder'
  }
</script>

<style lang="scss" scoped>

    .my-input {
        width: 300px;
        height: 30px;
        border: 1px solid #aaa;
        margin: 20px;
    }

    .input-2::-webkit-input-placeholder {
        font-size: 18px;
        font-family: sans-serif;
        color: coral;
    }

    .input-2::-moz-placeholder {
        font-size: 18px;
        font-family: sans-serif;
        color: coral;
    }

    .input-2::-ms-input-placeholder {
        font-size: 18px;
        font-family: sans-serif;
        color: coral;
    }

</style>
