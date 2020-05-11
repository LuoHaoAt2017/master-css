<template>
  <div class="html-child">
    <article>
      <section>
        <h3 id="yellow-crane-tower">黄鹤楼</h3>
        <div>
					<p>昔人已乘黄鹤去</p>
					<p>此地空余黄鹤楼</p>
					<p>黄鹤一去不复返</p>
					<p>白云千载空悠悠</p>
					<p>晴川历历汉阳树</p>
					<p>芳草萋萋鹦鹉洲</p>
					<p>日暮乡关何处是</p>
					<p>烟波江上使人愁</p>
				</div>
      </section>
    </article>
  </div>
</template>

<script>
export default {
  data() {
		return {
		}
  },
  methods: {
	}
};
</script>

<style lang="scss" scope>
article {
    section {
        margin-bottom: 20px;
        border: 1px solid #eee;
        font-size: 36px;

        h3 {
            padding: 10px;
						margin: 0;
						background-color: #888;
				}

        div {
            background-color: #ffffe0;
            position: relative;
            padding: 1px 10px;
        }
    }
}
</style>