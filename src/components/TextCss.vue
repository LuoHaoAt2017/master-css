<template>
    <div class="container">
        <section class="title">
            <span>将进酒</span>
            <span>李白</span>
        </section>
        <section class="content">
            <span>君不见黄河之水天上来</span>
            <span>奔流到海不复回</span>
            <span>君不见高堂明镜悲白发</span>
            <span>朝如青丝暮成雪</span>
            <span>人生得意须尽欢</span>
            <span>莫使金樽空对月</span>
            <span>天生我材必有用</span>
            <span>千金散尽还复来</span>
            <span>烹羊宰牛且为乐</span>
            <span>会须一饮三百杯</span>
            <span>岑夫子</span>
            <span>丹丘生</span>
            <span>将进酒</span>
            <span>杯莫停</span>
            <span>与君歌一曲</span>
            <span>请君为我倾耳听</span>
            <span>钟鼓馔玉不足贵</span>
            <span>但愿长醉不复醒</span>
            <span>古来圣贤皆寂寞</span>
            <span>惟有饮者留其名</span>
            <span>陈王昔时宴平乐</span>
            <span>斗酒十千恣欢谑</span>
            <span>主人何为言少钱</span>
            <span>径须沽取对君酌</span>
            <span>五花马</span>
            <span>千金裘</span>
            <span>呼儿将出换美酒</span>
            <span>与尔同销万古愁</span>
        </section>
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

    div.container {
        display: flex;
        flex-direction: column;
        padding: 40px 0;
        width: 600px;
        height: 40px;
        margin: auto;
        background: #EEEEEE;
    }
    .title {
        width: 400px;
        display: flex;
    }
    .content {
        span {
            flex-shrink: 0;
            flex-grow: 1;
            flex-basis: auto;
        }
    }
</style>
