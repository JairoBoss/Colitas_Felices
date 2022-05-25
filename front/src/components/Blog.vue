<template>
  <!-- breadcrumb-area -->
  <section
    class="breadcrumb-area breadcrumb-bg"
    data-background="img/bg/breadcrumb_bg.jpg"
  >
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="breadcrumb-content">
            <h2 class="title">Blog</h2>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="/">Inicio</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">Blog</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- breadcrumb-area-end -->

  <!-- blog-area -->
  <section class="standard-blog-area">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="standard-blog-item" v-for="blog in blogs">
            <div class="standard-blog-thumb">
              <a :href="'/blogDetalle' + blog.id"
                ><img :src="blog.foto" alt=""
              /></a>
            </div>
            <div class="standard-blog-content">
              <div class="blog-post-meta">
                <ul>
                  <li>
                    <svg-icon type="mdi" :path="user"></svg-icon>
                    <a :href="'/blogDetalle' + blog.id">{{ blog.autor }}</a>
                  </li>
                  <li>
                    <svg-icon type="mdi" :path="calendar"></svg-icon>
                    {{ blog.fecha }}
                  </li>
                </ul>
              </div>
              <h2 class="title">
                <a :href="'/blogDetalle' + blog.id">{{ blog.nombre }}</a>
              </h2>
              <p>
                {{ blog.descripcion }}
              </p>
              <a :href="'/blogDetalle' + blog.id" class="read-more"
                >Read More
                <img
                  src="https://themebeyond.com/pre/petco-prev/petco-live/img/icon/pawprint.png"
                  alt=""
              /></a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-8">
          <aside class="blog-sidebar">
            <div class="widget">
              <h4 class="sidebar-title">Buscar</h4>
              <div class="sidebar-search">
                <form action="#">
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

export default {
  name: "Blog",
  components: {
    SvgIcon,
  },
  data() {
    return {
      magnify: mdiMagnify,
      user: mdiAccount,
      calendar: mdiCalendar,
      blogs: [
        {
          id: 1,
          nombre: "Blog 1",
          descripcion:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic ",
          foto: "https://themebeyond.com/pre/petco-prev/petco-live/img/blog/blog_thumb01.jpg",
          autor: "Dani",
          fecha: "Mar 10, 2022",
        },
        {
          id: 2,
          nombre: "Blog 2",
          descripcion:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic ",
          foto: "https://themebeyond.com/pre/petco-prev/petco-live/img/blog/blog_thumb02.jpg",
          autor: "Dani",
          fecha: "Mar 10, 2022",
        },
        {
          id: 3,
          nombre: "Blog 3",
          descripcion:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic ",
          foto: "https://themebeyond.com/pre/petco-prev/petco-live/img/blog/blog_thumb03.jpg",
          autor: "Dani",
          fecha: "Mar 10, 2022",
        },
      ],
    };
  },
};
</script>

<style>
.breadcrumb-bg {
  background-image: url("https://themebeyond.com/pre/petco-prev/petco-live/img/bg/breadcrumb_bg.jpg");
}
</style>
