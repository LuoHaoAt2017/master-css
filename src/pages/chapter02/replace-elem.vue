<template>
    <div class="replacement">
        <p>
            input type=button 的按钮和button按钮的区别是white-space的值pre。
            input type=button 不换行。
            button 换行。
        </p>
        <div>
            <img/>
            <select/>
            <input/>
            <textarea/>
            <video/>
        </div>
        <div>
            <input class="common" type="button" :value="value">
        </div>
        <div>
            <button class="common">{{value}}</button>
        </div>
        <div>
            <img class="cupid-chastised" src="../../assets/img/cupid-chastised.png"/>
        </div>
    </div>
</template>

// 常见的替换元素：img input textarea select video
// 替换元素的尺寸：css尺寸 > html尺寸 > 固有尺寸
// input select textarea等替换元素的固有尺寸在各个平台都是一致的

// 替换元素有默认的宽高比，如果只设置来width，那么height自动适配。
// height 同理。

// 替换元素有一个重要的属性：object-fill

// 但是img存在特殊，img标签当src为空或者src属性缺省时，
// img的默认尺寸chrome上是0*0。
// 当img的src有效时，同时没有设置width和height时，
// img的尺寸是图片的固有尺寸。

// 为非替换元素设置content，非替换元素就会变成替换元素。



<script>
	export default {
		name: "replace-elem",
        data: function () {
            return {
                value: 'i have a pen a have a apple'
            }
		},
        methods: {

        }
	}
</script>

<style scoped>
    .common {
        width: 100px;
    }
    .cupid-chastised {
        width: 400px;
        object-fit: contain;
    }
</style>
