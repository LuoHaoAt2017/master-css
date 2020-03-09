<template>
    <div class="container">
        <div class="item1 item"></div>
        <div class="item2 item"></div>
        <div class="item3 item"></div>
        <div class="item4 item"></div>
        <div class="item5 item"></div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    methods: {
    }
  }
</script>

<style scoped lang="scss">

    .container {
        display: flex;
        margin: auto;
        background: #EEEEEE;
    }

    .item {
        border: 1px solid #aaa;
        height: 150px;
        margin: 0 5px;
    }

    .item1 {
        flex-basis: 300px;
        flex-grow: 2;
        flex-shrink: 2;
    }

    .item2, .item3 {
        flex-basis: 150px;
        flex-grow: 1;
        flex-shrink: 1;
    }

    .item4, .item5 {
        flex-basis: 50px;
        flex-grow: 3;
        flex-shrink: 0;
    }

</style>
