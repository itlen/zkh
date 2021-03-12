<template>
  <div class="breadcrumbs">
    <nav class="breadcrumbs-list">
      <li class="breadcrumbs-list_item"><a href="/">Главная</a></li>
      <li
        class="breadcrumbs-list_item"
        v-for="(rout, index) in routs"
        :key="index"
      >
        &nbsp;&nbsp;/&nbsp;&nbsp;<router-link :to="rout.slug">{{
          rout.label
        }}</router-link>
      </li>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Bc",
  data: function () {
    return {
      routs: [],
    };
  },
  mounted() {
    this.routs = this.$store.state.breadcrumbs;
  },
  updated() {
    // this.routs = this.$store.state.breadcrumbs;
  },
};
</script>