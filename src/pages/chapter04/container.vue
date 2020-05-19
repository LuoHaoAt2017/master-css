<template>
  <div class="container-grid-layout">
    <p>
      Flex 布局是轴线布局，只能指定"项目"针对轴线的位置，可以看作是一维布局。
      Grid 布局则是将容器划分成"行"和"列"，产生单元格，然后指定"项目所在"的单元格，
      可以看作是二维布局。Grid 布局远比 Flex 布局强大。
    </p>
    <button class="common-btn" v-on:click="changeLayout">切换布局方向</button>
    <div class="jiu-gong-ge jiu-gong-ge-1" :class="{column: isCol}">
      <div class="item item-1">1</div>
      <div class="item item-2">2</div>
      <div class="item item-3">3</div>
      <div class="item item-4">4</div>
      <div class="item item-5">5</div>
      <div class="item item-6">6</div>
      <div class="item item-7">7</div>
      <div class="item item-8">8</div>
      <div class="item item-9">9</div>
    </div>

    <p>
      容器宽度不固定，希望每一行尽可能多地放置单元格。
      grid-template-columns: repeat(auto-fill, 100px)，
      每一列地的宽度是100px，每一行能够放置多少个100px就放置
      多少个100px。
    </p>
    <div class="jiu-gong-ge jiu-gong-ge-2">
      <div class="item item-1">1</div>
      <div class="item item-2">2</div>
      <div class="item item-3">3</div>
      <div class="item item-4">4</div>
      <div class="item item-5">5</div>
      <div class="item item-6">6</div>
      <div class="item item-7">7</div>
      <div class="item item-8">8</div>
      <div class="item item-9">9</div>
    </div>

    <p>
      grid-template-columns: 1fr 1fr minmax(300px, 1fr);
      这一行只有三列，每一列的宽度之比是1:1:1。但是第三列的宽度最低
      不能小于300px。
    </p>
    <div class="jiu-gong-ge jiu-gong-ge-3">
      <div class="item item-1">1</div>
      <div class="item item-2">2</div>
      <div class="item item-3">3</div>
      <div class="item item-4">4</div>
      <div class="item item-5">5</div>
      <div class="item item-6">6</div>
      <div class="item item-7">7</div>
      <div class="item item-8">8</div>
      <div class="item item-9">9</div>
    </div>

    <p>
      grid-template-columns: 100px auto 100px;
      第一列，第三列的宽度固定，第二列的宽度自适应。
    </p>
    <div class="jiu-gong-ge jiu-gong-ge-4">
      <div class="item item-1">1</div>
      <div class="item item-2">2</div>
      <div class="item item-3">3</div>
      <div class="item item-4">4</div>
      <div class="item item-5">5</div>
      <div class="item item-6">6</div>
      <div class="item item-7">7</div>
      <div class="item item-8">8</div>
      <div class="item item-9">9</div>
    </div>

    <p>
      grid-row-gap: 20px;行与行之间的间隔
      grid-column-gap: 20px;列与列之间的间隔
    </p>
    <div class="jiu-gong-ge jiu-gong-ge-5">
      <div class="item item-1">1</div>
      <div class="item item-2">2</div>
      <div class="item item-3">3</div>
      <div class="item item-4">4</div>
      <div class="item item-5">5</div>
      <div class="item item-6">6</div>
      <div class="item item-7">7</div>
      <div class="item item-8">8</div>
      <div class="item item-9">9</div>
    </div>

    <div class="jiu-gong-ge jiu-gong-ge-6">
      <div class="item item-1">1</div>
      <div class="item item-2">2</div>
      <div class="item item-3">3</div>
      <div class="item item-4">4</div>
    </div>

    <p>
      Grid 布局只对项目生效。
      Grid 布局的属性分成两类。一类定义在容器上面，称为容器属性；
      另一类定义在项目上面，称为项目属性。
    </p>
  </div>
</template>

<script>
export default {
  name: "Container",
  data() {
    return {
      isCol: false
    };
  },
  methods: {
    navigate(name) {
      if (this.$route.name !== name) {
        this.$router.push({
          name: name
        });
      }
    },
    changeLayout() {
      this.isCol = !this.isCol;
    }
  }
};
</script>

<style lang="scss" scope>
.container-grid-layout {
  padding: 20px;
  text-align: left;
  .jiu-gong-ge {
    margin: 20px 0;
    grid-auto-flow: row;
    .item {
      font-size: 4em;
      text-align: center;
      border: 1px solid #e5e4e9;
    }
    .item-1 {
      background-color: #ef342a;
    }
    .item-2 {
      background-color: #f68f26;
    }
    .item-3 {
      background-color: #4ba946;
    }
    .item-4 {
      background-color: #0376c2;
    }
    .item-5 {
      background-color: #c077af;
    }
    .item-6 {
      background-color: #f8d29d;
    }
    .item-7 {
      background-color: #b5a87f;
    }
    .item-8 {
      background-color: #d0e4a9;
    }
    .item-9 {
      background-color: #4dc7ec;
    }
  }
  .jiu-gong-ge-1 {
    display: grid;
    grid-auto-flow: row;
    grid-template-rows: repeat(3, 100px);
    grid-template-columns: repeat(3, 100px);
  }
  .jiu-gong-ge-1.column {
    grid-auto-flow: column;
  }
  .jiu-gong-ge-2 {
    display: grid;
    grid-template-columns: repeat(auto-fill, 100px);
  }
  .jiu-gong-ge-3 {
    display: grid;
    grid-template-columns: 1fr 1fr minmax(300px, 1fr);
  }
  .jiu-gong-ge-4 {
    display: grid;
    grid-template-columns: 100px auto 100px;
  }
  .jiu-gong-ge-5 {
    display: grid;
    grid-row-gap: 20px;
    grid-column-gap: 20px;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(3, 1fr);
  }
  .jiu-gong-ge-6 {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 20px;
    grid-column-gap: 20px;
    grid-template-areas:
      "a a b"
      "a a b"
      "c c d";
    .item-1 {
      background-color: #ef342a;
    }
    .item-2 {
      background-color: #f68f26;
    }
    .item-3 {
      background-color: #4ba946;
    }
    .item-4 {
      background-color: #0376c2;
    }
    .item-5 {
      background-color: #c077af;
    }
    .item-6 {
      background-color: #c077af;
    }
  }
}
</style>