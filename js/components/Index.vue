<template>
  <div>
    <header-component></header-component>
    <router-view></router-view>
    <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderComponent from './common/Header.vue';
import FooterComponent from './common/Footer.vue';
export default {
    components: {
      'header-component' : HeaderComponent,
      'footer-component' : FooterComponent
    }
}
</script>
