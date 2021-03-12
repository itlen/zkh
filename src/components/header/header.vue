<template>
  <header>
    <div class="wrapper">
      <router-link class="header-logo" to="/"
        ><img
          alt="logo"
          class="header-logo_img"
          src="../../assets/logo.png"
        />Logo</router-link
      >
      <div class="search-panel">
        <input type="text" list="listid" />
        <datalist id="listid">
          <option>Аa</option>
          <option>Aab</option>
          <option>Abc</option>
          <option>Abac</option>
          <option>Bc</option>
          <option>Ba</option>
          <option>Bb</option>
        </datalist>
      </div>
      <MyMenu msg="Exit" />
    </div>
  </header>
</template>

<script>
import MyMenu from "./menu";
export default {
  name: "Header",
  components: {
    MyMenu,
  },
};
</script>