<template>
    <ul>
        <li>
            <div></div>
        </li>
        <li>
            <div></div>
        </li>
        <li>
            <div></div>
        </li>
        <li>
            <div></div>
        </li>
        <li>
            <div></div>
        </li>
        <li>
            <div></div>
        </li>
    </ul>
</template>

<script>
	export default {
		name: "my-button"
	}
</script>

// 无宽度，宽度分离原则。
// width属性不能和padding和border属性一起使用。
// 浏览器渲染的基本原理
// 对于width属性，就算父元素width为auto，其百分比值也是支持的；
// 但是，对于height属性，如果父元素height为auto，只要子元素
// 在文档流中，其百分比值完全就被忽略了。

// 绝对定位的宽高百分比计算是相对于padding
// box的，也就是说会把padding大小值计算在内，
// 但是，非绝对定位元素则是相对于content box计算的。

// 图片 按钮 输入框 下拉框都是内敛元素。
// 一个元素分为内盒子和外盒子，内盒子负责内容，外盒子负责结构。
// 如果一个元素的外在盒子独占一行，那么这个元素是块级元素，
// 如果一个元素的外在盒子并不独占一行，那么这个元素是内联元素。
// 归结一个元素是块级元素还是内联元素的决定性因素是它的外在盒子。

<style scoped lang="scss">
    ul {
        padding: 0px 20px;
        margin: 0;
        height: 250px;


        li {
            list-style: none;
            padding: 10px 10px;
            margin: 20px 0;
            background: #050;

            width: auto; // 自动充填
            height: 100%;
            position: relative;

            div {
                height: 50%;
                width: 50%;
                position: absolute;
                background: #005;
            }
        }
    }
</style>
