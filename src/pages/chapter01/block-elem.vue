<template>
    <div class="block-elem">
        <div class="box">
            <span class="content">            
                实现当文字少的时候，文字居中展示。
                当文字很多时，折行后文字左边展示。
            </span>
        </div>
    </div>
</template>

<script>
    // 流动性无宽度布局
	export default {
		name: "block-elem"
	}
</script>
// 对于绝对定位元素，当仅仅存在left或者right时，元素的尺寸由内部元素决定。
// 当left或者right同时存在时，元素的尺寸由外部第一个position不是static的元素决定。
<style scoped lang="scss">
    .block-elem {
        .box {
            text-align: center;
            border: 1px solid #eee;

            .content {
                display: inline-block;
                text-align: left;
            }
        }
    }
</style>
