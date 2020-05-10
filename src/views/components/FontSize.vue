<template>
    <div class="font-size-container">
        <div>
            如果字号的设置是以rem为单位，那么当我们拖拽浏览器窗口并改变其大小的时候，
            字体不会动态随着窗口尺寸而改变。现象之后的本质是rem的实际值大小(px)和
            html元素的fontSize大小有关。<br>
            那么，如何做到字体的大小随着窗口尺寸的改变而动态变化呢？
            <ol>
                <li>字体的大小设置为rem而不是px</li>
                <li>通过resize事件监听文档元素documentElement的尺寸</li>
                <li>根据documentElement的尺寸设置html的fontSize</li>
            </ol>
        </div>
    </div>
</template>

<script>
	export default {
		name: "FontSize.vue",
        data() {
			return {

            }
        },
        methods: {
            adjustRem() {
            	// 当浏览器窗口尺寸发生改变的时候，动态调整html元素的字体大小。
                // 当浏览器尺寸小于375px的时候，字体就不会同步改变。
            	const rootHtml = document.documentElement;
            	let clientWidth = rootHtml.clientWidth;
				clientWidth = clientWidth < 375 ? 375 : clientWidth;
				// 14.4 = 设计稿的尺寸 / 100
				rootHtml.style.fontSize = `${(clientWidth / 14.4)}px`;
            }
        },
        mounted() {
            window.addEventListener('resize', this.adjustRem);
        }
	}
</script>

<style scoped>
    .font-size-container {
        /*
            rem是相对于html元素字体的大小
            当html字体的大小是24px时，那么1rem就是24px。
            当html字体的大小是32px时，那么1rem就是32px。
            因此可以通过修改html根元素的字体大小来调整全局所有使用rem的字体的大小。
        */
        font-size: 1rem;
        text-align: left;
    }
</style>
