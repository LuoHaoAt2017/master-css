<template>
    <div class="caret-color-container">
        <input class="input-1 my-input" placeholder="光标的颜色"/>
        <input class="input-2 my-input" placeholder="光标大小和字体大小相关"/>
        <input class="input-3 my-input" placeholder="默认字体样式"/>
        <input class="input-4 my-input" placeholder="输入框聚焦时的样式"/>
    </div>
</template>

<script>
  export default {
    name: 'caret-color'
  }
</script>

<style lang="scss" scoped>
    .caret-color-container {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        .my-input {
            width: 240px;
            height: 32px;
            margin: 15px 0;
            font-size: 18px;
            border-radius: 5px;
            background: none;
            border: 1px solid;
        }

        .input-1 {
            color: #333;
            caret-color: #ff0000;
        }

        .input-2 {
            font-size: 20px;
        }

        .input-3::-webkit-input-placeholder {
            font-size: 16px;
            font-family: sans-serif;
            color: coral;
        }
        .input-3::-moz-placeholder {
            font-size: 16px;
            font-family: sans-serif;
            color: coral;
        }
        .input-3::-ms-input-placeholder {
            font-size: 16px;
            font-family: sans-serif;
            color: coral;
        }

        .input-4 {

        }

        .input-4:focus {
            outline: 2px solid #00ffff;
            //border: 2px solid #00ffff;
        }
    }
</style>
