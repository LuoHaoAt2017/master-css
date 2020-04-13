<template>
    <ul>
        <li v-for="(item, index) in images" :key="index">
            <div class="img-container">
                <img :src="item.src" :alt="item.alt">
            </div>
        </li>
    </ul>
</template>

<script>
	export default {
		name: "img-autofit",
        data() {
            return {
                images: [
                    {
                        src: require("../../assets/img/chicago.png"),
                        alt: "chicago"
                    },
                    {
                        src: require("../../assets/img/cupid-chastised.png"),
                        alt: "cupid-chastised"
                    },
                    {
                        src: require("../../assets/img/mountain-brook.png"),
                        alt: "mountain-brook"
                    },
                    {
                        src: require("../../assets/img/hopper-nighthawks.png"),
                        alt: "hopper-nighthawks"
                    }
                ]
            }
        }
	}
</script>

<style scoped lang="scss">
    ul {
        padding: 0px 20px;
        margin: 0;
        

        li {
            list-style: none;
            padding: 10px 10px;
            margin: 20px 0;
            background: #050;
            height: 100%;

            div {
                height: 100%;
                width: 60%;
                background: #005;

                img {
                    display: inline-block;
                    max-width: 100%;
                    height: auto;
                }
            }
        }
    }
</style>
