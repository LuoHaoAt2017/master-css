<template>
    <div class="display-container">
        <div class="common item-1">
            chrome上图片加载与否和图片的父元素的可见性之间的关系
            <ol>
                <li>如果图片的父元素是display:none;那么图片不会加载。</li>
                <li>如果图片的父元素是visibility: hidden;那么图片会加载。</li>
            </ol>
            <div class="img-container">
                <span class="img"></span>
            </div>
        </div>
        <div class="common item-2">
            每点击一个就消失一个，但是序号是正确的。
            <ol @click="handleSelect">
                <li>昔人已乘黄鹤去</li>
                <li>此地空余黄鹤楼</li>
                <li>黄鹤一去不复返</li>
                <li>白云千载空悠悠</li>
                <li>晴川历历汉阳树</li>
                <li>芳草萋萋鹦鹉洲</li>
                <li>日暮乡关何处是</li>
                <li>烟波江上使人愁</li>
            </ol>
        </div>
        <div class="common item-3"></div>
        <div class="common item-4"></div>
        <div class="common item-5"></div>
        <div class="common item-6"></div>
        <div class="common item-7"></div>
        <div class="common item-8"></div>
        <div class="common item-9"></div>
    </div>
</template>

<script>
	export default {
		name: "DisplayCase.vue",
        methods: {
			handleSelect(evt) {
                const target = evt.target;
                target.style.display = 'none';
            }
        }
	}
</script>

<style scoped lang="scss">
    .display-container {
        display: flex;
        flex-direction: column;
    }
    .common {
        width: 100%;
        min-height: 100px;
        border: 1px solid #eee;
        cursor: pointer;
        text-align: left;
    }
    .img-container {
        /*display: none;*/
        /*visibility: hidden;*/
        max-width: 250px;
        max-height: 250px;
        .img {
            // 图片的充填方式
            display: inline-block;
            width: 250px;
            height: 250px;
            background-image: url("../assets/img/life.png");
        }
    }

</style>
