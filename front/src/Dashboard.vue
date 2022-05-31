<template>
  <div class="container-fluid position-relative d-flex p-0">
    <!-- Spinner Start -->
    <!-- <div
      id="spinner"
      class="show bg-dark position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
    >
      <div
        class="spinner-border text-primary"
        style="width: 3rem; height: 3rem"
        role="status"
      >
        <span class="sr-only">Loading...</span>
      </div>
    </div> -->
    <!-- Spinner End -->

    <!-- Sidebar Start -->
    <div class="sidebar pe-4 pb-3">
      <nav class="navbar bg-secondary navbar-dark">
        <a href="index.html" class="navbar-brand mx-4 mb-3">
          <h3 class="text-primary">
            <i class="fa fa-user-edit me-2"></i>Colitas
          </h3>
        </a>
        <div class="d-flex align-items-center ms-4 mb-4">
          <div class="position-relative">
            <img
              class="rounded-circle"
              src="https://technext.github.io/darkpan/img/user.jpg"
              alt=""
              style="width: 40px; height: 40px"
            />
            <div
              class="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"
            ></div>
          </div>
          <div class="ms-3">
            <h6 class="mb-0">Daniel Valdez</h6>
            <span>Admin</span>
          </div>
        </div>
        <div class="navbar-nav w-100">
          <a href="/productoDash" :class="isTienda" class="nav-item nav-link "
            ><i class="fa fa-shopping-cart me-2"></i>Productos</a
          >
          <a href="/adopcionDash" :class="isAdopcion" class="nav-item nav-link"
            ><i class="fa fa-hands me-2"></i>Adopción</a
          >
          <a href="/donacionDash" :class="isDonacion" class="nav-item nav-link"
            ><i class="fa fa-dollar-sign me-2"></i>Donacio...</a
          >
          <a href="/mascotaDash" :class="isMascotas" class="nav-item nav-link"
            ><i class="fa fa-dog me-2"></i>Mascotas</a
          >
          <a href="blogDash" :class="isBlog" class="nav-item nav-link"
            ><i class="fa fa-blog me-2"></i>Blog</a
          >
        </div>
      </nav>
    </div>
    <!-- Sidebar End -->

    <!-- Content Start -->
    <div class="content">
      <!-- Navbar Start -->
      <nav
        class="navbar navbar-expand bg-secondary navbar-dark sticky-top px-4 py-0"
      >
        <form class="d-none d-md-flex ms-4">
          <input
            class="form-control bg-dark border-0"
            type="search"
            placeholder="Search"
          />
        </form>
      </nav>

      <div :style="{ height: '77%' }">
        <RouterView />
      </div>

      <!-- Footer Start -->
      <div class="container-fluid pt-4 px-4">
        <div class="bg-secondary rounded-top p-4">
          <div class="row">
            <div class="col-12 col-sm-6 text-center text-sm-start">
              &copy; <a href="#">Colitas Felices</a>, Todos los derechos
              reservados
            </div>
            <div class="col-12 col-sm-6 text-center text-sm-end">
              <!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/-->
              Designed By <a href="https://htmlcodex.com">HTML Codex</a>
              <br />Distributed By:
              <a href="https://themewagon.com" target="_blank">ThemeWagon</a>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer End -->
    </div>
  </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";

export default {
  name: "Dashboard",
  components: {},
   computed: {
    currentRouteName() {
      return this.$route.name;
    },

    isAdopcion: function () {
      return { active: this.$route.name === "adopcionDash" };
    },
     isTienda: function () {
      return { active: this.$route.name === "productoDash" };
    },
     isBlog: function () {
      return { active: this.$route.name === "blogDash" };
    },
    isMascotas: function () {
      return { active: this.$route.name === "mascotaDash"};
    },
    isDonacion: function () {
      return { active: this.$route.name === "donacionDash"};
    },
  },
};
</script>

<style scoped>
@import url("./assets/cssDash/style.css");
@import url("./assets/cssDash/bootstrap.min.css");
</style>
