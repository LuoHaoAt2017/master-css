<template>
    <div class="quiz-exercise">
        <div class="row-1">
            <span class="common">行内非替换元素 margin: 10px 10px;</span>
            <span class="common">行内非替换元素 margin: 10px 10px;</span>
        </div>
        <div class="row-2">
            <img class="common" src="#" alt="行内替换元素img margin: 10px">
            <img class="common" src="#" alt="行内替换元素img margin: 10px">
        </div>
        <div class="row-3">
            <span>行内非替换元素 padding: 10px;</span>
            <span>行内非替换元素 padding: 10px;</span>
        </div>
        <div class="row-4">
            <img src="#" alt="行内替换元素img padding: 10px">
        </div>
        <div class="row-5">
            <ul>
                <li>上下外边距对行内非替换元素(span) 不产生作用。</li>
                <li>上下外边距对行内替换元素(img)，产生作用。</li>
                <li>左右外边距对行内替换元素和行内非替换元素都产生作用。</li>
                <li>内边距对行内元素替换元素(img)或者非替换元素(span)都起作用。</li>
                <li>为行内非替换元素(span)设置padding-top padding-bottom，不会影响行高，但是影响背景色的可见区域。</li>
                <li>为行内替换元素(span)设置padding-top padding-bottom，影响行高，自燃也会影响背景色的可见区域。</li>
                <li>为行内替换元素替换元素或者非替换元素设置padding-left，padding-right都会发生作用。</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
    	name: 'quiz-exercise',
        data() {
    		return {
    			message: ''
            }
        }
    }
</script>

<style scoped lang="scss">
    .quiz-exercise {
        .row-1 {
            background: aquamarine;
            span {
                width: 150px;
                height: 32px;
                margin: 10px 10px;
                background: #ff0000;
            }
        }
        .row-2 {
            background: #eeeeee;
            img {
                width: 150px;
                height: 150px;
                background: #00ff00;
                margin: 20px;
            }
        }
        .row-3 {
            span {
                padding: 10px 20px;
                background: coral;
            }
            border: 1px solid;
        }
        .row-4 {
            img {
                padding: 10px;
                background: beige;
            }
            border: 1px solid;
        }
    }
</style>
