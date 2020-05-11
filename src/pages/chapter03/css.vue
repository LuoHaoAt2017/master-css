<template>
  <div class="css-child">
      <article v-for="(item, index) in languages" :key="index">
          <section>
              <h3>{{item.title}}</h3>
              <div v-html="item.content"></div>
              <footer>{{item.foot}}</footer>
          </section>
      </article>
  </div>
</template>

<script>
export default {
    data() {
        return {
            languages: [
                {
                    title: '黄鹤楼送孟浩然之广陵',
                    content: '<p>故人西辞黄鹤楼</p><p>烟花三月下扬州</p><p>孤帆远影碧空尽</p><p>唯见长江天际流</p>',
                    foot: '朴素，优雅，意境'
                }, 
                {
                    title: '黄鹤楼送孟浩然之广陵',
                    content: '<p>故人西辞黄鹤楼</p><p>烟花三月下扬州</p><p>孤帆远影碧空尽</p><p>唯见长江天际流</p>',
                    foot: '朴素，优雅，意境'
                },
                {
                    title: '黄鹤楼送孟浩然之广陵',
                    content: '<p>故人西辞黄鹤楼</p><p>烟花三月下扬州</p><p>孤帆远影碧空尽</p><p>唯见长江天际流</p>',
                    foot: '朴素，优雅，意境'
                },
                {
                    title: '黄鹤楼送孟浩然之广陵',
                    content: '<p>故人西辞黄鹤楼</p><p>烟花三月下扬州</p><p>孤帆远影碧空尽</p><p>唯见长江天际流</p>',
                    foot: '朴素，优雅，意境'
                }, 
                {
                    title: '黄鹤楼送孟浩然之广陵',
                    content: '<p>故人西辞黄鹤楼</p><p>烟花三月下扬州</p><p>孤帆远影碧空尽</p><p>唯见长江天际流</p>',
                    foot: '朴素，优雅，意境'
                },
                {
                    title: '黄鹤楼送孟浩然之广陵',
                    content: '<p>故人西辞黄鹤楼</p><p>烟花三月下扬州</p><p>孤帆远影碧空尽</p><p>唯见长江天际流</p>',
                    foot: '朴素，优雅，意境'
                }
            ]
        }
    },
    methods: {

    }
};
</script>

<style lang="scss" scope>
article {
    section {
        margin-bottom: 20px;
        border: 1px solid #eee;
        font-size: 24px;

        h3 {
            background-color: #333;
            color: #fff;
            padding: 10px;
            margin: 0;
            top: 50px;
            z-index: 1;
            position: sticky;
        }

        div {
            background-color: #ffffe0;
            position: relative;
            padding: 1px 10px;
        }

        footer {
            background-color: #f0f3f9;
            padding: 10px;
            bottom: 38vh;
            z-index: -1;
            position: sticky;
        }
    }
}
</style>