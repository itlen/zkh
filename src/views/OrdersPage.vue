<template>
  <div class="orders">
    <h1>Orders page ({{ selfCount }})</h1>
  </div>
</template>

<script>
export default {
  name: "OrdersPage",
  data: function () {
    return {
      nameCount: "orderspage", // TODO костыль, лишнее поле.
      selfCount: 0,
      breadcrumb: {
        label: "Звявки",
        slug: "orders",
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
  // next((vm) => {
  // vm.$store.commit("M_BREADCRUMBS", to.path.split("/").slice(1, 3)[0]);
  // TODO исправить 3 на нормальную длину вложенности
  // });
  // },
  beforeDestroy() {
    // this.$store.commit("M_BREADCRUMBS_REMOVE", this.path.split("/")[0]); // осталось немного
  },
};
</script>