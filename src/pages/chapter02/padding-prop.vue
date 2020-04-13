<template>
    <div class="container">
        <div>
            <span>黄鹤楼</span>
            <span>岳阳楼</span>
        </div>
        <div>
            <span>滕王阁</span>
            <span>鹳雀楼</span>
        </div>
        <div class="percent">
            <span>padding百分比值总是相对于宽度计算</span>
        </div>
    </div>
</template>

// 给内联元素设置padding margin是否有效
// 分为内联替换元素和内敛非替换元素
// 对于内联非替换元素，padding对水平方向和垂直方向尺寸都有影响。margin对水平方向的宽度有影响，对垂直方向的高度没有影响。
// 对于内联替换元素，padding和margin对水平方向和垂直方向都有影响。

// padding百分比值总是相对于宽度计算和高度无关。
<script>
	export default {
		name: "padding-prop"
	}
</script>

<style scoped lang="scss">
    .container {
        display: flex;
        flex-direction: column;

        span {
            width: 100px;
            padding: 10px 20px;
            background: aquamarine;
        }

        .percent {
            span {
                width: 200px;
                height: 100px;
                padding: 20%;

            }
        }
    }
</style>
