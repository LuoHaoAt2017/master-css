<template>
    <div class="margin-test">
        <div class="block block-1"></div>
        <div class="block block-2"></div>
        <div class="block block-3"></div>
    </div>
</template>

<script>
    export default {
    	name: 'MarginTest'
    }
</script>

<style>
    .block {
        width: 200px;
        height: 200px;
        display: inline-block;
    }

    .block-1 {
        background: beige;
    }

    .block-2 {
        background: coral;
    }

    .block-3 {
        background: aqua;
    }
</style>
