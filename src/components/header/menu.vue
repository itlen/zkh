<template>
  <div class="menu">
    <button @click="isActive = !isActive" :class="{ red: isActive }">
      Menu
    </button>
    <ul v-show="isActive" class="menu-list">
      <li class="menu-list_item">
        <router-link class="menu-list_link" to="/">Главная</router-link>
      </li>
      <li class="menu-list_item">
        <router-link class="menu-list_link" to="/site">Сайт</router-link>
      </li>
      <li class="menu-list_item">
        <router-link class="menu-list_link" to="/orders">Заявки</router-link>
      </li>
      <li class="menu-list_item">
        <router-link class="menu-list_link" to="/settings"
          >Настройки</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MyMenu",
  props: {
    msg: String,
  },
  data: function () {
    return {
      isActive: false,
    };
  },
};
</script>

<style scoped>
</style>