<template>
  <div>
    <h1 class="site-heading text-center text-white d-none d-lg-block">
      <span class="site-heading-upper text-primary mb-3">Coffee At Coffee Shop</span>
      <span class="site-heading-lower">Coffee Shop {{ headingTitle }}</span>
    </h1>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
      <div class="container">
        <a class="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none" href="#">Start Bootstrap</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item px-lg-4"
            v-bind:class="{ active: isActive('')}">
            <router-link :to="{ path : '/' }"
            class="nav-link text-uppercase text-expanded" >
            {{'Home'}}
          </router-link>
        </li>
        <li class="nav-item px-lg-4"
        v-bind:class="{ active: isActive('About')}">
        <router-link :to="{ path: '/about' }"
        class="nav-link text-uppercase text-expanded" >
        {{'About'}}
      </router-link>
      <a class="nav-link text-uppercase text-expanded" href="about.html"></a>
    </li>
    <li class="nav-item px-lg-4"
    v-bind:class="{ active: isActive('Products')}">
    <router-link :to="{ path: '/products' }"
    class="nav-link text-uppercase text-expanded" >
    {{'Products'}}
  </router-link>
  <a class="nav-link text-uppercase text-expanded" href="products.html"></a>
</li>
<li class="nav-item px-lg-4"
v-bind:class="{ active: isActive('Store')}">
<router-link :to="{ path: '/store' }"
class="nav-link text-uppercase text-expanded" >
{{'Store'}}
</router-link>
<a class="nav-link text-uppercase text-expanded" href="store.html"></a>
</li>
</ul>
</div>
</div>
</nav>
  </div>
</template>
<script>
  export default {
    methods: {
       isActive(menuItem) {
         return this.$route.name === menuItem;
       },
     },
     computed: {
       headingTitle() {
          return this.$route.name;
       }
     }
  }
</script>
