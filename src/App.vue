<template>
  <div id="app">
    <Header />
    <main>
      <aside>aside</aside>
      <section>
        <Bc />
        <router-view />
      </section>
    </main>
  </div>
</template>

<script>
import Header from "@/components/header/header.vue";
import Bc from "@/components/breadcrumbs.vue";
export default {
  components: {
    Header,
    Bc,
  },
  // data: function () {
  //   return {
  //     routs: [],
  //   };
  // },
  // mounted() {
  //   this.routs = Array.from(new Set(this.$store.state.breadcrumbs));
  // },
  // beforeRouteEnter(to, from, next) {
  //   console.log("wtf 1");
  //   next((vm) => {
  //     console.log("wtf 2");
  //     vm.routs = Array.from(new Set(this.$store.state.breadcrumbs));
  //     // vm.$store.commit("M_BREADCRUMBS", to.path.split("/").slice(1, 3)[0]);
  //     // TODO исправить 3 на нормальную длину вложенности
  //   });
  // },
};
</script>
