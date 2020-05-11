<template>
  <div class="sticky-layout" id="sticky">
    <div class="navigate">
      <button class="link" v-on:click="navigate('Javascript')">导航栏锁定</button>
      <button class="link" v-on:click="navigate('CSS')">多个滚动元素交互作用</button>
      <button class="link" v-on:click="navigate('Html')">兼容性处理</button>
    </div>
    <div class="content">
        <router-view></router-view>
    </div>
    <div class="footer">
        <a href="#sticky">回到顶部</a>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    methods: {
        navigate(name) {
            if(this.$route.name !== name) {
                this.$router.push({
                    name: name
                });
            }
        }
    }
};
</script>

<style lang="scss" scope>
.sticky-layout {
    padding: 20px;
    .navigate {
        display: flex;
        position: sticky;
        top: 0;
        margin-bottom: 30px;
        z-index: 2;
        background: #fff;
        .link {
            flex-basis: 150px;
            flex-grow: 1;
            flex-shrink: 1;

            background: none;
            outline: none;
            background: #fff;
            border: 1px solid #eee;
            padding: 10px 20px;
            font-size: 24px;

            cursor: pointer;
        }
        .link:hover {
            background: #eee;
        }
    }
    .footer {
        position: sticky;
        bottom: 0;
        background: #fff;
        height: 40px;
        line-height: 40px;
        z-index: 2;
        border: 1px solid #eee;
        cursor: pointer;

        a {
            text-decoration: none;
            color: #000;
        }
    }
}
</style>