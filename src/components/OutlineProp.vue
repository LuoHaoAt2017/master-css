<template>
    <div class="outline-container">
        <input class="my-input"/>
        <button class="my-button">
            outline
        </button>
        <a href="#" class="link inset">
            凹边轮廓
        </a>
        <a href="#" class="link outset">
            凸边轮廓
        </a>
        <a href="#" class="link ridge">
            3D 凸槽轮廓
        </a>
        <a href="#" class="link groove">
            3D 凹槽轮廓
        </a>
    </div>
</template>

<script>
  export default {
    name: 'placeholder'
  }
</script>

<style lang="scss" scoped>
    .outline-container {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        .my-input {
            width: 300px;
            height: 30px;
        }

        .my-button {
            width: 100px;
            height: 30px;
            cursor: pointer;
            margin: 20px 0;

        }

        .my-button:focus {
            outline: 1px solid #ff0000;
        }

        .link {
            display: inline-block;
            width: 300px;
            height: 300px;
            margin: 50px 0;
        }

        .link:focus {
            outline: none;
        }

        .inset {
            outline: 40px inset rgba(255, 0, 0, 0.5);
        }

        .outset {
            outline: 40px outset rgba(255, 0, 0, 0.5);
        }

        .ridge {
            outline: 40px ridge rgba(255, 0, 0, 0.5);
        }

        .groove {
            outline: 40px groove rgba(255, 0, 0, 0.5);
        }
    }
</style>
