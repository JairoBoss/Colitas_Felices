<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="header-top-area">
      <div class="container custom-container">
        <div class="row align-items-center">
          <div class="col-md-7">
            <div class="header-top-left">
              <ul>
                <li>Llamanos: 951 --- --- --</li>
                <li>
                  <svg-icon type="mdi" width="20" :path="clock" />Horario de
                  atencion: 7:00 am - 9:00 pm (Lunes - Sabado)
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-5">
            <div class="header-top-right">
              <ul class="header-top-social">
                <li class="follow">Siguenos en :</li>
                <li>
                  <a href="#">
                    <svg-icon type="mdi" :path="twitter"></svg-icon>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg-icon type="mdi" :path="youtube"></svg-icon
                  ></a>
                </li>
                <li>
                  <a href="#">
                    <svg-icon type="mdi" :path="facebook"></svg-icon>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg-icon type="mdi" :path="linkedIn"></svg-icon>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="sticky-header" class="menu-area">
      <div class="container custom-container">
        <div class="row">
          <div class="col-12">
            <div class="mobile-nav-toggler"><i class="fas fa-bars"></i></div>
            <div class="menu-wrap">
              <nav class="menu-nav show">
                <div class="logo">
                  <a href="/"><img src="./assets/image 1.png" alt="" /></a>
                </div>
                <div class="navbar-wrap main-menu d-none d-lg-flex">
                  <ul class="navigation">
                    <li v-bind:class="isInicio">
                      <a href="/">Inicio</a>
                    </li>
                    <li  :class="isTienda">
                      <a href="/tienda">Tienda</a>
                    </li>
                    <li :class="isAdopcion">
                      <a href="/adopcion">Lista de Adopcion</a>
                    </li>
                    <li :class="isBlog">
                      <a href="/blog">Blog</a>                      
                    </li>
                    <li :class="isContacto"><a href="/contacto">Contacto</a></li>
                  </ul>
                </div>
                <div class="header-action d-none d-md-block">
                  <ul>
                    <li class="header-search">
                      <a href="#">
                        <svg-icon type="mdi" :path="magnify"></svg-icon
                      ></a>
                    </li>
                    <li class="header-shop-cart">
                      <a href="#"
                        ><svg-icon type="mdi" :path="cart"></svg-icon
                      ></a>
                      <ul class="minicart">
                        <li class="d-flex align-items-start">
                          <div class="cart-img">
                            <a href="#"
                              ><img src="img/product/cart_p01.jpg" alt=""
                            /></a>
                          </div>
                          <div class="cart-content">
                            <h4><a href="#">Juguete de perro</a></h4>
                            <div class="cart-price">
                              <span class="new">$229.9</span>
                              <span><del>$229.9</del></span>
                            </div>
                          </div>
                          <div class="del-icon">
                            <a href="#"><i class="far fa-trash-alt"></i></a>
                          </div>
                        </li>

                        <li>
                          <div class="total-price">
                            <span class="f-left">Total:</span>
                            <span class="f-right">$229.9</span>
                          </div>
                        </li>                        
                        <li>                          
                          <div class="checkout-link">
                            <a href="#">Pagar</a>
                            <a class="black-color" href="#">Cancelar</a>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li class="header-btn">
                      <a href="#" class="btn"
                        >Dona aqui <svg-icon type="mdi" :path="paw"></svg-icon
                      ></a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <!-- Mobile Menu  -->
            <div class="mobile-menu">
              <nav class="menu-box">
                <div class="close-btn"><i class="fas fa-times"></i></div>
                <div class="nav-logo">
                  <a href="#"
                    ><img src="img/logo/logo.png" alt="" title=""
                  /></a>
                </div>
                <div class="menu-outer">
                  <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header-->
                </div>
                <div class="social-links">
                  <ul class="clearfix">
                    <li>
                      <a href="#"><span class="fab fa-twitter"></span></a>
                    </li>
                    <li>
                      <a href="#"
                        ><span class="fab fa-facebook-square"></span
                      ></a>
                    </li>
                    <li>
                      <a href="#"><span class="fab fa-pinterest-p"></span></a>
                    </li>
                    <li>
                      <a href="#"><span class="fab fa-instagram"></span></a>
                    </li>
                    <li>
                      <a href="#"><span class="fab fa-youtube"></span></a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <div class="menu-backdrop"></div>
            <!-- End Mobile Menu -->
          </div>
        </div>
      </div>
      <div class="header-shape"></div>
    </div>
    <!-- header-search -->
    <div
      class="search-popup-wrap"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="search-close">
        <span><i class="fas fa-times"></i></span>
      </div>
      <div class="search-wrap text-center">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h2 class="title">... Busca ...</h2>
              <div class="search-form">
                <form action="#">
                  <input
                    type="text"
                    name="search"
                    placeholder="Type keywords here"
                  />
                  <button class="search-btn">
                    <i class="fas fa-search"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- header-search-end -->
  </header>

  <main>
    <RouterView />
  </main>

  <footer>
    <div class="footer-top-area footer-bg">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-3">
            <div class="footer-widget">
              <div class="f-logo">
                <a
                  href="/"
                  ><img
                    src="./assets/image 1.png"
                    alt=""
                /></a>
              </div>
              <div class="footer-text">
                <p>
                  Colitas Felices al servicio de la comunidad.
                </p>
              </div>
              <div class="footer-contact">
                <div class="icon"><svg-icon type="mdi" width="20" :path="phone" /></div>
                <div class="content">
                  <h4 class="title">
                    <a href="tel:0987654321">747-800-9880</a>
                  </h4>
                  <span>Llama ahora</span>
                </div>
              </div>
              <div class="footer-social">
                <!-- <ul>
                  <li>
                    <a
                      href="https://themebeyond.com/pre/petco-prev/petco-live/dog-list.html#"
                      ><i class="fab fa-facebook-f"></i
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://themebeyond.com/pre/petco-prev/petco-live/dog-list.html#"
                      ><i class="fab fa-twitter"></i
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://themebeyond.com/pre/petco-prev/petco-live/dog-list.html#"
                      ><i class="fab fa-youtube"></i
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://themebeyond.com/pre/petco-prev/petco-live/dog-list.html#"
                      ><i class="fab fa-linkedin-in"></i
                    ></a>
                  </li>
                </ul> -->
              </div>
            </div>
          </div>
          <div class="col-2">
            <div class="footer-widget">
              <h4 class="fw-title">Políticas</h4>
              <div class="fw-link">
                <ul>
                  <li>
                    <a
                      href="/privacidad"
                      >De privacidad</a
                    >
                  </li>                                    
                </ul>
              </div>
            </div>
          </div>
          <div class="col-2">
            <div class="footer-widget">
              <h4 class="fw-title">Servicios</h4>
              <div class="fw-link">
                <ul>
                  <li>
                    <a
                      href="/tienda"
                      >Tienda</a
                    >
                  </li>
                  <li>
                    <a
                      href="/adopcion"
                      >Adopción</a
                    >
                  </li>
                  <li>
                    <a
                      href="/donacion"
                      >Donación</a
                    >
                  </li>                 
                </ul>
              </div>
            </div>
          </div>
          <div class="col-3">
            <div class="footer-widget">
              <h4 class="fw-title">Instagram</h4>
              <div class="fw-insta">
                <ul>
                  <li>
                    <a
                      href="#"
                      ><img
                        src="https://themebeyond.com/pre/petco-prev/petco-live/img/images/insta_img01.png"
                        alt=""
                    /></a>
                  </li>
                  <li>
                    <a
                      href="#"
                      ><img
                        src="https://themebeyond.com/pre/petco-prev/petco-live/img/images/insta_img02.png"
                        alt=""
                    /></a>
                  </li>
                  <li>
                    <a
                      href="#"
                      ><img
                        src="https://themebeyond.com/pre/petco-prev/petco-live/img/images/insta_img03.png"
                        alt=""
                    /></a>
                  </li>
                  <li>
                    <a
                      href="#"
                      ><img
                        src="https://themebeyond.com/pre/petco-prev/petco-live/img/images/insta_img04.png"
                        alt=""
                    /></a>
                  </li>
                  <li>
                    <a
                      href="#"
                      ><img
                        src="https://themebeyond.com/pre/petco-prev/petco-live/img/images/insta_img05.png"
                        alt=""
                    /></a>
                  </li>
                  <li>
                    <a
                      href="#"
                      ><img
                        src="https://themebeyond.com/pre/petco-prev/petco-live/img/images/insta_img06.png"
                        alt=""
                    /></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-shape">
        <img
          src="https://themebeyond.com/pre/petco-prev/petco-live/img/images/footer_shape01.png"
          alt=""
        />
      </div>
      <div class="footer-shape shape-two">
        <img
          src="https://themebeyond.com/pre/petco-prev/petco-live/img/images/footer_shape02.png"
          alt=""
        />
      </div>
    </div>
    <div class="copyright-area">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <div class="copyright-text">
              <p>Copyright © 2021 Colitas Felices. Todos los derechos reservados.</p>
            </div>
          </div>
          <div class="col-md-4 d-none d-md-block">
            <div class="footer-lang">

            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import SvgIcon from "@jamescoyle/vue-icon";
import {
  mdiFacebook,
  mdiLinkedin,
  mdiYoutube,
  mdiClockOutline,
  mdiMagnify,
  mdiCart,
  mdiPaw,
  mdiTwitter,
  mdiPhone
} from "@mdi/js";

export default {
  name: "public",
  components: {
    SvgIcon,
  },
  data() {
    return {
      facebook: mdiFacebook,
      linkedIn: mdiLinkedin,
      twitter: mdiTwitter,
      youtube: mdiYoutube,
      clock: mdiClockOutline,
      magnify: mdiMagnify,
      cart: mdiCart,
      paw: mdiPaw,
      route: "a",
      phone: mdiPhone
    };
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },

    isAdopcion: function () {
      return { active: this.$route.name === "adopcion" };
    },
    isInicio: function () {
      return { active: this.$route.name === "home" };
    },
     isTienda: function () {
      return { active: this.$route.name === "tienda" || this.$route.name.includes("tiendaDetalle")};
    },
     isBlog: function () {
      return { active: this.$route.name === "blog" || this.$route.name.includes("blogDetalle")};
    },
    isContacto: function () {
      return { active: this.$route.name === "contacto"};
    },
  },
};
</script>

<style>
@import "./assets/css/bootstrap.min.css";
@import "./assets/css/animate.min.css";
@import "./assets/css/magnific-popup.css";
@import "./assets/css/fontawesome-all.min.css";
@import "./assets/css/owl.carousel.min.css";
@import "./assets/css/nice-select.css";
@import "./assets/css/flaticon.css";
@import "./assets/css/odometer.css";
@import "./assets/css/style.css";
@import "./assets/css/default.css";
@import "./assets/css/responsive.css";
@import "./assets/css/slick.css";
@import "./assets/css/jquery-ui.css";


.footer-bg{
  background-image: url("https://themebeyond.com/pre/petco-prev/petco-live/img/bg/footer_bg.jpg");
}
</style>
