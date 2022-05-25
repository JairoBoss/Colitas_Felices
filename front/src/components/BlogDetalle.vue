<template>
  <section
    class="breadcrumb-area breadcrumb-bg"
    data-background="img/bg/breadcrumb_bg.jpg"
  >
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="breadcrumb-content">
            <h2 class="title">Detalle Blog</h2>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a
                    href="/"
                    >Inicio</a
                  >
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Detalle Blog
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="blog-details-area">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="standard-blog-item mb-50">
            <div class="standard-blog-thumb">
              <img
                src="https://themebeyond.com/pre/petco-prev/petco-live/img/blog/blog_thumb01.jpg"
                alt=""
              />
            </div>
            <div class="standard-blog-content blog-details-content">
              <div class="blog-post-meta">
                <ul>
                  <li>
                    <svg-icon type="mdi" :path="user"></svg-icon>
                    <a
                      href="https://themebeyond.com/pre/petco-prev/petco-live/blog-details.html#"
                      >Dani</a
                    >
                  </li>
                  <li>
                    <svg-icon type="mdi" :path="calendar"></svg-icon> Mar 10,
                    2022
                  </li>
                </ul>
              </div>
              <h4 class="title">Blog {{ id }}</h4>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <blockquote>
                “ Dog to begin developing immunity. Until a puppy has receivd
                its entire vaccine series, or until an adult dog is up to date
                on vaines their exposure to parvovirus ”
                <footer>Dani</footer>
              </blockquote>
              <div
                class="blog-line"
                data-background="img/blog/blog_item_line.png"
              ></div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <aside class="blog-sidebar">
            <div class="widget">
              <h4 class="sidebar-title">Buscar</h4>
              <div class="sidebar-search">
                <form
                  action="https://themebeyond.com/pre/petco-prev/petco-live/blog-details.html#"
                >
                  <input type="text" placeholder="Buscar ..." />
                  <button type="submit">
                    <svg-icon type="mdi" :path="magnify"></svg-icon>
                  </button>
                </form>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiMagnify, mdiAccount, mdiCalendar } from "@mdi/js";
import { useRoute } from "vue-router";
export default {
  name: "BlogDetalle",
  components: {
    SvgIcon,
  },
  data() {
    return {
      magnify: mdiMagnify,
      user: mdiAccount,
      calendar: mdiCalendar,
      id: "",
    };
  },
  mounted() {
    const route = useRoute();
    this.id = route.params.id;
  },
};
</script>

<style>
.breadcrumb-bg {
  background-image: url("https://themebeyond.com/pre/petco-prev/petco-live/img/bg/breadcrumb_bg.jpg");
}
</style>
