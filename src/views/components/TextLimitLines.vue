<template>
    <div class="text-line-limit">
        <div class="multiple-line">
            昔人已乘黄鹤去，此地空余黄鹤楼。
            黄鹤一去不复返，白云千载空悠悠。
            晴川历历汉阳树，芳草萋萋鹦鹉洲。
            日暮乡关何处是？烟波江上使人愁。
        </div>
        <div class="single-line">
            故人西辞黄鹤楼，烟花三月下扬州。
            孤帆远影碧空尽，唯见长江天际流。
        </div>
    </div>
</template>

<script>
  export default {
    name: 'text-line-limit',
  }
</script>

<style scoped lang="scss">
    .text-line-limit {
        display: flex;
        flex-direction: column;

        .multiple-line {
            width: 270px;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            overflow: hidden;
            -webkit-box-orient: vertical;
            border: 1px solid #aaa;
            margin-bottom: 20px;
        }

        .single-line {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            width: 270px;

            border: 1px solid #aaa;
        }
    }
</style>
