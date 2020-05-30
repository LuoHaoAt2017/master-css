<template>
  <div class="problem-1px">
    <img :src="icons[0].src" class="mountain-brook">
  </div>
</template>

<script>
export default {
  name: "Problem1px",
  data() {
    return {
      icons: [
        {
          src: require('@/assets/img/mountain-brook.png').default,
          alt: 'mountain-brook'
        }
      ]
    };
  },
  mounted() {
  },
  methods: {}
};
</script>

<style lang="scss" scope>
.mountain-brook {
  border: 1px solid red;
  height: 400px;
}
</style>