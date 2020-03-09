<template>
    <div class="container">
        <section>
            <div class="content-box">
                content-box的width包括padding和border
            </div>
            <div class="border-box">
                border-box的width包含padding和border
            </div>
        </section>

        <section>
            <!--自身尺寸与下面这几个方面有关：-->
            <!--box-sizing盒模型（这个已经介绍过了）-->
            <!--width/min-width/max-width等CSS属性设置；-->
            <!--content内容（min-content最小宽度）-->
            <div class="item12">
                <div class="item1 item">

                </div>
                <div class="item2 item">

                </div>
            </div>
        </section>

        <section>
            <div class="item34">
                <div class="item3 item">
                    在Flex布局中，除非万不得已，
                    否则没有使用width属性的理由，
                    请使用flex-basis代替。
                </div>
                <div class="item4 item">
                    当min-width小于flex-basis时，元素的最终尺寸是flex-basis，
                    当min-width大于flex-basis时，元素的最终尺寸是min-width
                </div>
            </div>
        </section>

        <section>
            <div class="item56">
                <div class="item5 item">

                </div>
                <div class="item6 item">

                </div>
            </div>
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

    .container {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        margin: auto;
        background: #EEEEEE;

        section {
            margin: 10px 0;
        }

        .content-box {
            flex-basis: 100px;
            padding: 20px;
            box-sizing: content-box;
            border: 1px solid #aaaaaa;
        }

        .border-box {
            flex-basis: 100px;
            padding: 20px;
            box-sizing: border-box;
            border: 1px solid #aaaaaa;
            word-break: normal;
        }

        .item12 {
            display: flex;
            flex-direction: row;
            margin: auto;
            background: #EEEEEE;
            width: 100%;
            .item {
                border: 1px solid #aaa;
                margin: 0 5px;
                height: 100px;
            }

            .item1 {
                width: 300px;
                flex-grow: 0;
            }

            .item2 {
                flex-basis: 300px;
                flex-grow: 0;
            }
        }

        .item34 {
            display: flex;
            flex-direction: row;
            margin: auto;
            background: #EEEEEE;
            width: 100%;

            .item {
                border: 1px solid #aaa;
                margin: 0 5px;
            }

            .item3 {
                min-width: 400px;
                width: 300px;
                flex-grow: 0;
            }

            .item4 {
                min-width: 400px;
                flex-basis: 300px;
                flex-grow: 0;
            }
        }

        .item56 {
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            background: #EEEEEE;
            width: 100%;

            .item {
                border: 1px solid #aaa;
                margin: 0 5px;
                height: 100px;
            }

            .item5 {
                flex-basis: 300px;
            }

            .item6 {
                flex-basis: 300px;
            }
        }
    }

</style>
