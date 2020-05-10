<template>
    <div class="transform-container">
        <div class="common transform-head">
            <div class="helper-left"></div>
            <div class="tab left"
                 :class="{active: target === 0}"
                 v-on:click="onTabClick(0)">
                <span>黄鹤楼</span>
            </div>
            <div class="tab right"
                 :class="{active: target === 1}"
                 v-on:click="onTabClick(1)">
                <span>送孟浩然之广陵</span>
            </div>
            <div class="helper-right"></div>
        </div>
        <div class="common transform-body">
            <section class="tab-panel left" v-if="target === 0">
                <p>昔人已乘黄鹤去</p>
                <p>此地空余黄鹤楼</p>
                <p>黄鹤一去不复返</p>
                <p>白云千载空悠悠</p>
                <p>晴川历历汉阳树</p>
                <p>芳草萋萋鹦鹉洲</p>
                <p>日暮乡关何处是</p>
                <p>烟波江上使人愁</p>
            </section>
            <section class="tab-panel right" v-else>
                <p>故人西辞黄鹤楼</p>
                <p>烟花三月下扬州</p>
                <p>孤帆远影碧空尽</p>
                <p>唯见长江天际流</p>
            </section>
        </div>
    </div>
</template>

<script>
	export default {
		name: 'transform',
        data() {
		    return {
		    	target: 0
            }
        },
        methods: {
			onTabClick(option) {
                this.target = option;
            }
        }
	}
</script>

<style scoped lang="scss">
    .transform-container {
        width: 400px;
        overflow: hidden;
        padding: 50px;
        margin: auto;
        background-color: #fff;
        position: relative;

        .common {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            width: 100%;
            position: relative;

            .tab {
                overflow: hidden;
                flex-basis: 100px;
                flex-grow: 1;
                flex-shrink: 1;
                color: #fff;
                background-color: rgba(0, 0, 0, 0.1);
                cursor: pointer;
                padding: 10px;
            }

            .tab.active {
                color: #000;
                background: #fff;
            }

            .tab.left {
            }

            .tab.right {

            }

            .tab.left.active {
                transform: skewX(30deg);
                border-right: 1px solid rgba(0, 0, 0, 0.1);
                border-top:   1px solid rgba(0, 0, 0, 0.1);
                border-top-right-radius: 8px;
                margin-left: -20px;
                span {
                    display: inline-block;
                    transform: skewX(-30deg);
                }
            }


            .tab.right.active {
                transform: skewX(-30deg);
                border-left: 1px solid rgba(0, 0, 0, 0.1);
                border-top:  1px solid rgba(0, 0, 0, 0.1);
                border-top-left-radius: 8px;
                margin-right: -20px;
                span {
                    display: inline-block;
                    transform: skewX(30deg);
                }
            }

            .tab-panel {
                width: 100%;
                background: #fff;
                padding: 10px;
            }

            .helper-left {
                width: 50px;
                position: absolute;
                top: 0px;
                bottom: 0;
                left: -51px;
                z-index: 1005;
                border: none;
                border-right: 1px solid rgba(0, 0, 0, 0.1);
                background: #fff;
            }

            .helper-right {
                width: 50px;
                position: absolute;
                top: 0px;
                bottom: 0;
                right: -51px;
                z-index: 1005;
                border: none;
                border-left: 1px solid rgba(0, 0, 0, 0.1);
                background: #fff;
            }
        }

        .transform-head {
            border-left: 1px solid rgba(0, 0, 0, 0.1);
            border-right: 1px solid rgba(0, 0, 0, 0.1);
            background-color: rgba(0, 0, 0, 0.8);
        }

        .transform-body {
            border: 1px solid rgba(0, 0, 0, 0.1);
            border-top: none;
        }
    }
</style>
