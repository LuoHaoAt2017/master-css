<template>
    <div class="img-container">
        <span class="common img-1"></span>
        <!--<span class="common img-2"></span>-->
    </div>
</template>

<script>
	export default {
		name: "ImgLoad.vue"
	}
</script>

<style scoped>
    .common {

    }
    .img-container {
        display: none;
        /*visibility: hidden;*/
    }
    .img-1 {
        width: 250px;
        height: 250px;
        background-image: url("../assets/img/life.png");
    }
    .img-2 {

    }
</style>
