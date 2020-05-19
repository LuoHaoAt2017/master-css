<template>
  <div class="complex-grid-layout">
    <p>在容器中放置项目，容器的尺寸比所有的单元格加起来大，存在空间盈余。水平方向的盈余空间如何分配。垂直方向的盈余空间如何分配。</p>
    <p>在单元格中放置项目，单元格包裹项目，存在的盈余空间如何分配？</p>
    <div class="jiu-gong-ge jiu-gong-ge-1">
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
  name: "Complex"
};
</script>

<style lang="scss" scope>
.complex-grid-layout {
  .jiu-gong-ge {
    .item {
      cursor: pointer;
      border-radius: 5px;
        width: 80px;
        height: 80px;
      justify-self: center;
      align-self: center;
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
    grid-row-gap: 20px;
    grid-column-gap: 20px;
    grid-template-rows: 100px 100px 100px;
    grid-template-columns: 100px 100px 100px;
    border: 1px solid #eeeeee;
    background: rgb(83, 38, 246);
    justify-content: space-between; //容器中的内容在水平方向如何摆放
    align-content: center;          //容器中的内容在垂直方向如何摆放

    justify-items: center;          //单个项目在单元格中水平方向如何摆放
    align-items: center;            //单个项目在单元格中垂直方向如何摆放
  }
}
</style>