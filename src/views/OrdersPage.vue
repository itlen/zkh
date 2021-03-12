<template>
  <div class="orders">
    <h1>Orders page ({{ selfCount }})</h1>
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "OrdersPage",
  data: function () {
    return {
      nameCount: "orderspage", // TODO костыль, лишнее поле.
      selfCount: 0,
      text: "some text on order page",
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
    this.$toast.info(this.text);
    // this.$toast("My toast content", {
    //   timeout: 2000,
    // });
    // this.$toast("Default toast");
    // this.$toast.info("Info toast");
    // this.$toast.success("Success toast");
    // this.$toast.error("Error toast");
    // this.$toast.warning("Warning toast");
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