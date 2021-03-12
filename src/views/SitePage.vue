<template>
  <div class="site">
    <h1>Site page ({{ selfCount }})</h1>
  </div>
</template>

<script>
export default {
  name: "SitePage",
  data: function () {
    return {
      nameCount: "sitepage",
      selfCount: 0,
      breadcrumb: {
        label: "Сайт",
        slug: "site",
      },
    };
  },
  beforeMount() {
    this.$store.commit("M_INCREMENT_PAGE", this.nameCount.toLowerCase());
    this.$store.commit("M_BREADCRUMBS", this.breadcrumb);
  },
  mounted() {
    this.selfCount = this.$store.state.pagesCounts[this.nameCount];
  },
  // beforeRouteEnter(to, from, next) {
  //   next((vm) => {
  //     vm.$store.commit("M_BREADCRUMBS", to.path.split("/").slice(1, 3)[0]);
  //     // TODO исправить 3 на нормальную длину вложенности
  //   });
  // },
};
</script>