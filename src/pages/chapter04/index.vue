<template>
  <div class="grid-layout">
    <div class="navigate">
      <button class="link" v-on:click="navigate('Container')">容器布局</button>
      <button class="link" v-on:click="navigate('Cell')">项目布局</button>
      <button class="link" v-on:click="navigate('Complex')">存疑部分</button>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
    <div class="footer">
    </div>
  </div>
</template>

<script>
export default {
  name: "GridLayout",
  data() {
    return {
      isCol: false
    };
  },
  methods: {
    navigate(name) {
      if (this.$route.name !== name) {
        this.$router.push({
          path: name
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
.grid-layout {
  padding: 20px;
  .navigate {
    display: flex;
    position: sticky;
    top: 0;
    margin-bottom: 30px;
    z-index: 2;
    background: #fff;
    text-align: left;
    border: 1px solid #eee;
  }
  .content {
    
  }
  .footer {
    position: sticky;
    bottom: 0;
    background: #fff;
    z-index: 2;
    border: 1px solid #eee;
    cursor: pointer;
    text-align: left;
  }
}
</style>