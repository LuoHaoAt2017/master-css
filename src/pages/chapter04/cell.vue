<template>
  <div class="cell-grid-layout">
    <div class="jiu-gong-ge jiu-gong-ge-1">
      <div class="item item-1">
        <span class="child">1</span>
      </div>
      <div class="item item-2">
        <span class="child">2</span>
      </div>
      <div class="item item-3">
        <span class="child">3</span>
      </div>
      <div class="item item-4">
        <span class="child">4</span>
      </div>
      <div class="item item-5">
        <span class="child">5</span>
      </div>
      <div class="item item-6">
        <span class="child">6</span>
      </div>
      <div class="item item-7">
        <span class="child">7</span>
      </div>
      <div class="item item-8">
        <span class="child">8</span>
      </div>
      <div class="item item-9">
        <span class="child">9</span>
      </div>
    </div>
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
  </div>
</template>

<script>
export default {
  name: "Cell",
  data() {
    return {
      isCol: false
    };
  },
  methods: {
    changeLayout() {
      this.isCol = !this.isCol;
    }
  }
};
</script>

<style lang="scss" scope>
.cell-grid-layout {
  padding: 20px;
  text-align: left;
  min-height: 600px;
  .jiu-gong-ge {
    margin: 20px 0;
    grid-auto-flow: row;
    border: 1px solid #ccc;
    .item {
      cursor: pointer;
      border-radius: 5px;
      text-align: center;
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
    grid-template-rows: repeat(3, auto);
    grid-template-columns: repeat(3, auto);
    grid-row-gap: 20px;
    grid-column-gap: 20px;
    // 整个内容区域在容器里的水平位置
    justify-content: center;
    justify-items: center;
    // 整个内容区域在容器里的垂直位置
    align-content: center;
    align-items: center;

    padding: 20px;

    .child {
      display: block;
      width: 50px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      border: 2px solid #000;
    }
  }
  .jiu-gong-ge-2 {
    display: grid;
    grid-auto-flow: row;
    grid-template-rows: repeat(4, 100px);
    grid-template-columns: repeat(3, 100px);
    grid-row-gap: 20px;
    grid-column-gap: 20px;
    justify-content: center;
    align-content: center;
    padding: 20px;
    .item-1 {
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 3;
    }
  }
  .jiu-gong-ge-3 {
    display: grid;
    grid-auto-flow: row;
    grid-template-rows: repeat(4, 100px);
    grid-template-columns: repeat(3, 100px);
    grid-row-gap: 20px;
    grid-column-gap: 20px;
    justify-content: center;
    align-content: center;
    padding: 20px;
    .item-2 {
      grid-column-start: span 2;
    }
    .item-4 {
      grid-column-start: span 2;
    }
    .item-5 {
      grid-row-start: span 2;
    }
  }
  .jiu-gong-ge-4 {
    display: grid;
    grid-auto-flow: row;
    grid-template-rows: repeat(3, 100px);
    grid-template-columns: repeat(3, 100px);
    grid-row-gap: 20px;
    grid-column-gap: 20px;
    grid-template-areas: 'a b c' 'd e f' 'g h i';
    justify-content: center;
    align-content: center;
    padding: 20px;
    .item-1 {
        grid-area: e;
    }
  }
}
</style>