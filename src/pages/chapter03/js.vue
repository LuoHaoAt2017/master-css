<template>
    <div class="js-child">
        <ul class="jobs">
            <li v-for="(item, index) in jobs" :key="index" class="job">
                {{item}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            jobs: [
                '基本上，可以看出是position:relative和position:fixed的结合体——当元素在屏幕内，表现为relative，就要滚出显示器屏幕的时候，表现为fixed。',
                'position:sticky要想生效，top属性或则left属性（看滚动方向）是必须要有明确的计算值的，否则fixed的表现不会出现。',
                'sticky元素效果完全受制于父级元素们。如果你的position:sticky无效，看看是不是某一个祖先元素设置了overflow:hidden，移除之即可。',
                '同一个父容器中的sticky元素，如果定位值相等，则会重叠；如果属于不同父元素，且这些父元素正好紧密相连，则会鸠占鹊巢，挤开原来的元素，形成依次占位的效果。',
                '设置了position:sticky粘性定位的元素的父元素如果高度计算值和粘性定位元素一样高，则垂直滚动的时候，粘性定位效果是不会出现的。',
                '粘性定位设置了top，粘性元素是先滚动再固定。粘性定位设置了bottom，粘性元素是先固定再滚动。',
                'position:sticky布局的时候，使用合适的HTML结构很重要',
                'position:兼容性问题，采用js。监听元素的scrollTop，根据scrollTop的值设置position是relative还是fixed。',
            ]
        }
    }
};
</script>

<style lang="scss" scope>
.js-child {
    .jobs {
        padding: 0;
        text-align: left;
        .job {
            list-style: none;
            height: 300px;
            margin-bottom: 20px;
            border: 1px solid #eee;
            box-shadow: 0 0 4px 4px #ddd;
        }
    }
}
</style>