<template>
    <div class="container">
        <ul class="actress-list">
            <li class="item" v-for="(item, index) in items" v-bind:key="index">
                <section
                        class="actress-box"
                        :class="{active: item.active}"
                        @click="handleCardClick(item)">
                    <img :src="item.src" class="image">
                </section>
            </li>
        </ul>
        <p v-if="loading" class="loading-more">Loading more ...</p>
    </div>
</template>

<script>
    export default {
        data() {
          return {
            items: [
              {
                active: false,
              },
              {
                active: false,
              },
              {
                active: false
              },
              {
                active: false
              },
              {
                active: false
              }
            ],
            loading: true,
          }
        },
        methods: {
          handleCardClick(item) {
            item.active = !item.active;
          },
          loadMoreActress() {
            this.loading = true;
          }
        }
    }
</script>

<style scoped>

    div.container {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        background: #EEEEEE;
        padding: 40px 0;
        width: 400px;
        margin: auto;
    }

    ul.actress-list {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        margin: 0;
        padding: 0;
    }

    li.item {
        list-style: none;
        margin: 10px 0;
    }

    section.actress-box {
        box-shadow: 0 0 5px 5px #00AA5F;
        background: #FFFFFF;
        cursor: pointer;
        width: 300px;
        height: 300px;

        transition-delay: 1s;
        transition-duration: 3s;
        transition-property: background;
        transition-timing-function: ease-out;
    }

    section.actress-box:hover {
        background-size: cover;
        /*background-repeat: no-repeat;*/
        background-image: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583507807545&di=161c7f9b3f2e0cdd541117dd7e85c6aa&imgtype=0&src=http%3A%2F%2Fimages.china.cn%2Fattachement%2Fjpg%2Fsite1000%2F20160904%2Fc03fd543ecb01935d67552.jpg");
    }

    section.actress-box.active {
        box-shadow: 0 0 5px 5px #ffAA5F inset;
        background: #EEEEEE;

        -webkit-border-radius: 150px;
        -moz-border-radius: 150px;
        border-radius: 150px;
    }

    section.actress-box .image {
        width: 300px;
    }

    p.loading-more {
        font-family: sans-serif;
        font-size: 16px;
    }

</style>
