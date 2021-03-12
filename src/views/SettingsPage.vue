<template>
  <div class="settings">
    <h1>Settings page ({{ selfCount }})</h1>
  </div>
</template>

<script>
export default {
  name: "SettingsPage",
  data: function () {
    return {
      nameCount: "settingspage",
      selfCount: 0,
      breadcrumb: {
        label: "Настройки",
        slug: "settings",
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