<template>
    <div class="interview">
        <ol>
            <li>
                <section>
                    <h3>display:none和visibility:hidden之间的区别是什么</h3>
                    <p>
                        父元素设置visibility:hidden，子元素也会看不见，究其原因是继承性，
                        子元素继承了visibility:hidden，但是，如果子元素设置了visibility:visible，
                        则子元素又会显示出来。这个和display隐藏有着质的区别。
                    </p>
                </section>
            </li>
        </ol>
    </div>
</template>

<script>
	export default {
		name: "Interview.vue"
	}
</script>

<style scoped>
    .interview {
        text-align: left;
    }
</style>
