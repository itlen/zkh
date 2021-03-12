<template>
  <div class="home">
    <h1>Home page ({{ selfCount }})</h1>
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data: function () {
    return {
      nameCount: "homepage",
      selfCount: 0,
      text: "some text on home page",
      breadcrumb: {
        label: "Хоум пейдж",
        slug: "home",
      },
    };
  },
  beforeMount() {
    this.$store.commit("M_INCREMENT_PAGE", this.nameCount.toLowerCase());
    this.$store.commit("M_BREADCRUMBS", this.breadcrumb);
  },
  mounted() {
    this.selfCount = this.$store.state.pagesCounts[this.nameCount];
    this.$toast.info(this.text);
  },
};
</script>
