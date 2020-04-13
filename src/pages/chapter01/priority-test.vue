<template>
    <div class="priority-test">
        <img :src="icons[0].src" style="width: 400px;">
    </div>
</template>

<script>
	export default {
		name: "priority-test",
        data: function () {
            return {
            	icons: [
                    {
                    	src: require('../../assets/img/chicago.png'),
                        alt: 'chicago'
                    }
                ]
            }
		}
	}
</script>

// style属性的权重比css属性要高
// 但是important权重比style高
// max-width权重比width important权重要高

// 如何实现元素高度的展开和收起动画效果
// 问题是元素中的内容是不固定的，因此元
// 素的高度不能够设置成一个固定值。此时，
// 可以考虑max-height，虽然无法确定height
// 但是max-height还是可以确定的。

// 块级元素负责结构
// 内敛元素负责内容

<style scoped lang="scss">
    .priority-test {
        img {
            width: 500px!important;
            max-width: 300px;

            max-height: 100px;
            overflow: hidden;

            transition: max-height 1s;
        }

        img:hover {
            max-height: 1000px;
        }
    }
</style>
