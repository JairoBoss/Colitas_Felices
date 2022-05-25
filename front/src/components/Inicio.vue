
<template>
  <Carrusel />
  <div class="slider-shape">
    <img src="img/slider/slider_shape01.png" alt="" />
  </div>
  <div class="slider-shape shape-two">
    <img src="img/slider/slider_shape02.png" alt="" />
  </div>
  <!-- slider-area-end -->

  <!-- find-area -->
  <div class="find-area">
    <div class="container custom-container">
      <div class="row">
        <div class="col-12">
          <form action="#">
            <div class="find-wrap">
              <div class="location">
                <svg-icon type="mdi" :path="mapMarker"></svg-icon> 
                <input type="text" value="Oaxaca de Juárez" />
              </div>
              <div class="find-category">
                <ul>
                  <li>
                    <a href="#"
                      ><svg-icon type="mdi" :path="dog"></svg-icon> Encuentra tu
                      perrito</a
                    >
                  </li>
                  <li>
                    <a href="#"
                      ><svg-icon type="mdi" :path="cat"></svg-icon> Encuentra tu
                      gato</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- find-area-end -->

  <!-- counter-area -->
  <section
    class="counter-area counter-bg"
    data-background="img/bg/counter_bg.jpg"
  >
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-6 col-lg-8">
          <div class="counter-title text-center mb-65">
            <h6 class="sub-title">¿Porque adoptar?</h6>
            <h2 class="title">Al adoptar tu ....</h2>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-3 col-md-4 col-sm-6">
          <div class="counter-item">
            <h2 class="count">
              <span class="odometer" data-count="">73</span>%
            </h2>
            <p>Porcentaje</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6">
          <div class="counter-item">
            <h2 class="count">
              <span class="odometer" > 200</span>+
            </h2>
            <p>Mascotas adoptadas</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6">
          <div class="counter-item">
            <h2 class="count">
              <span class="odometer" >39</span>K
            </h2>
            <p>Croquetas donadas</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6">
          <div class="counter-item">
            <h2 class="count">
              <span class="odometer" >5</span>+
            </h2>
            <p>Años de ayudar</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- counter-area-end -->

  <!-- adoption-area -->
  <section class="adoption-area">
    <div class="container">
      <div
        class="row align-items-center align-items-xl-end justify-content-center"
      >
        <div class="col-xl-7 col-lg-6 col-md-10 order-0 order-lg-2">
          <div class="adoption-img">
            <img src="https://themebeyond.com/pre/petco-prev/petco-live/img/images/adoption_img.jpg" alt="" />
          </div>
        </div>
        <div class="col-xl-5 col-lg-6">
          <div class="adoption-content">
            <h2 class="title">
              Trabajando <br />para hacer <span>felices</span>, a nuestras
              mascotas
            </h2>
            <p>
              Mascota es un término que procede del francés mascotte y que se
              utiliza para nombrar al animal de compañía. Estos animales, por lo
              tanto, acompañan a los seres humanos
            </p>
            <a href="#" class="btn"
              >Adopta <img src="img/icon/w_pawprint.png" alt=""
            /></a>
          </div>
        </div>
      </div>
    </div>
    <div class="adoption-shape">
      <img src="https://themebeyond.com/pre/petco-prev/petco-live/img/images/adoption_shape.png" alt="" />
    </div>
  </section>
  <!-- adoption-area-end -->

  <!-- breeds-services -->
  <section class="breeds-services pt-110 pb-110">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-7 col-lg-9">
          <div class="section-title text-center mb-65">
            <div class="section-icon">
              <img src="img/icon/pawprint.png" alt="" />
            </div>
            <h5 class="sub-title">Perritos en adopcion</h5>
            <h2 class="title">Perritos en adopcion</h2>
            <p>
              Mascota es un término que procede del francés mascotte y que se
              utiliza para nombrar al animal de compañía. Estos animales, por lo
              tanto, acompañan a los seres humanos en su vida cotidiana, por lo
              que
            </p>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="breed-services-active owl-carousel">
            <div class="breed-services-item">
              <div class="thumb">
                <img src="img/images/breed_services_img01.jpg" alt="" />
              </div>
              <div class="content">
                <h3 class="title"><a href="#">El es pep</a></h3>
              </div>
            </div>
            <div class="breed-services-item">
              <div class="thumb">
                <img src="img/images/breed_services_img02.jpg" alt="" />
              </div>
              <div class="content">
                <h3 class="title"><a href="#">German quiere un hogar</a></h3>
              </div>
            </div>
            <div class="breed-services-item">
              <div class="thumb">
                <img src="img/images/breed_services_img03.jpg" alt="" />
              </div>
              <div class="content">
                <h3 class="title"><a href="#">El es pep</a></h3>
              </div>
            </div>
            <div class="breed-services-item">
              <div class="thumb">
                <img src="img/images/breed_services_img04.jpg" alt="" />
              </div>
              <div class="content">
                <h3 class="title"><a href="#">El es pep</a></h3>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div
            class="breed-services-info"
            data-background="img/bg/breed_services_bg.jpg"
          >
            <h5 class="sub-title">Hay mas</h5>
            <h3 class="title">Mas perritos buscan un hogar</h3>
            <p>
              Mascota es un término que procede del francés mascotte y que se
              utiliza para nombrar al animal de compañía. Estos animales, por lo
              tanto, acompañan a los seres humanos en su vida cotidiana, por lo
              que
            </p>
            <a href="#" class="btn"
              >Ver mas <img src="img/icon/w_pawprint.png" alt=""
            /></a>
          </div>
        </div>
      </div>
    </div>
    <div class="breed-services-shape">
      <img src="img/images/breed_services_shape01.png" alt="" />
    </div>
    <div class="breed-services-shape shape-two">
      <img src="img/images/breed_services_shape02.png" alt="" />
    </div>
  </section>
  <!-- breeds-services-end -->

  <!-- faq-area -->
  <section class="faq-area faq-bg">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="faq-img-wrap">
            <img src="https://themebeyond.com/pre/petco-prev/petco-live/img/images/faq_tv.png" class="img-frame" alt="" />
            <img
              src="https://themebeyond.com/pre/petco-prev/petco-live/img/images/faq_img.png"
              class="main-img"
              alt=""
            />
            <a href="#" class="popup-video"></a>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="faq-wrapper">
            <div class="section-title mb-35">
              <h5 class="sub-title">FAQ Question</h5>
              <h2 class="title">Preguntas frecuentes</h2>
            </div>
            <div class="accordion" id="accordionExample">
              <div class="card">
                <div class="card-header" id="headingOne">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-link btn-block text-left"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Como adoptar
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseOne"
                  class="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordionExample"
                >
                  <div class="card-body">
                    Mascota es un término que procede del francés mascotte y que
                    se utiliza para nombrar al animal de compañía. Estos
                    animales
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingTwo">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-link btn-block text-left collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      ¿Cual es nuestra meta?
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseTwo"
                  class="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordionExample"
                >
                  <div class="card-body">
                    Mascota es un término que procede del francés mascotte y que
                    se utiliza para nombrar al animal de compañía. Estos
                    animales
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingThree">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-link btn-block text-left collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      ¿Como podemos ayudar?
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseThree"
                  class="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordionExample"
                >
                  <div class="card-body">
                    Mascota es un término que procede del francés mascotte y que
                    se utiliza para nombrar al animal de compañía. Estos
                    animales
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="faq-shape"><img src="img/images/faq_shape.png" alt="" /></div>
  </section>
  <!-- faq-area-end -->

  <!-- brand-area -->
  <div class="brand-area pt-80 pb-80">
    <div class="container">
      <div class="row brand-active">
        <div class="col-12">
          <div class="brand-item">
            <img src="img/brand/brand_item01.png" alt="img" />
          </div>
        </div>
        <div class="col-12">
          <div class="brand-item">
            <img src="img/brand/brand_item02.png" alt="img" />
          </div>
        </div>
        <div class="col-12">
          <div class="brand-item">
            <img src="img/brand/brand_item03.png" alt="img" />
          </div>
        </div>
        <div class="col-12">
          <div class="brand-item">
            <img src="img/brand/brand_item04.png" alt="img" />
          </div>
        </div>
        <div class="col-12">
          <div class="brand-item">
            <img src="img/brand/brand_item05.png" alt="img" />
          </div>
        </div>
        <div class="col-12">
          <div class="brand-item">
            <img src="img/brand/brand_item06.png" alt="img" />
          </div>
        </div>
        <div class="col-12">
          <div class="brand-item">
            <img src="img/brand/brand_item03.png" alt="img" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- brand-area-end -->

  <!-- adoption-shop-area -->
  <section class="adoption-shop-area">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-7 col-lg-9">
          <div class="section-title text-center mb-65">
            <div class="section-icon">
              <img src="img/icon/pawprint.png" alt="" />
            </div>
            <h5 class="sub-title">Conoce nuestras mascotas</h5>
            <h2 class="title">Ellos quieren ser adoptados</h2>
            <p>
              Mascota es un término que procede del francés mascotte y que se
              utiliza para nombrar al animal de compañía. Estos animales
            </p>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-4 col-md-6">
          <div class="adoption-shop-item">
            <div class="adoption-shop-thumb">
              <img src="img/product/adoption_shop_thumb01.jpg" alt="" />
              <a href="#" class="btn"
                >Adoption <img src="img/icon/w_pawprint.png" alt=""
              /></a>
            </div>
            <div class="adoption-shop-content">
              <h4 class="title"><a href="#">Señor perrito</a></h4>
              <div class="adoption-meta">
                <ul>
                  <li>
                    <i class="fas fa-cog"></i><a href="#">Señor perrito</a>
                  </li>
                  <li>
                    <i class="far fa-calendar-alt"></i> Cumpleaños : 10/08
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="adoption-shop-item">
            <div class="adoption-shop-thumb">
              <img src="img/product/adoption_shop_thumb01.jpg" alt="" />
              <a href="#" class="btn"
                >Adoption <img src="img/icon/w_pawprint.png" alt=""
              /></a>
            </div>
            <div class="adoption-shop-content">
              <h4 class="title"><a href="#">Señor perrito</a></h4>
              <div class="adoption-meta">
                <ul>
                  <li>
                    <i class="fas fa-cog"></i><a href="#">Señor perrito</a>
                  </li>
                  <li>
                    <i class="far fa-calendar-alt"></i> Cumpleaños : 10/08
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="adoption-shop-item">
            <div class="adoption-shop-thumb">
              <img src="img/product/adoption_shop_thumb01.jpg" alt="" />
              <a href="#" class="btn"
                >Adoption <img src="img/icon/w_pawprint.png" alt=""
              /></a>
            </div>
            <div class="adoption-shop-content">
              <h4 class="title"><a href="#">Señor perrito</a></h4>
              <div class="adoption-meta">
                <ul>
                  <li>
                    <i class="fas fa-cog"></i><a href="#">Señor perrito</a>
                  </li>
                  <li>
                    <i class="far fa-calendar-alt"></i> Cumpleaños : 10/08
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- adoption-shop-area-end -->

  <!-- testimonial-area -->
  <section class="testimonial-area testimonial-bg">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-7 col-lg-9">
          <div class="section-title text-center mb-65">
            <div class="section-icon">
              <img src="img/icon/pawprint.png" alt="" />
            </div>
            <h5 class="sub-title">Testimonios</h5>
            <h2 class="title">Que dicen de nosotros:</h2>
            <p>
              Mascota es un término que procede del francés mascotte y que se
              utiliza para nombrar al animal de compañía. Estos animales
            </p>
          </div>
        </div>
      </div>
      <div class="row testimonial-active">
        <div class="col-lg-6">
          <div class="testimonial-item">
            <div class="testi-avatar-thumb">
              <img src="img/images/testi_avatar01.png" alt="" />
            </div>
            <div class="testi-content">
              <p>
                “ Mascota es un término que procede del francés mascotte y que
                se utiliza para nombrar al animal de compañía. Estos animales ”
              </p>
              <div class="testi-avatar-info">
                <h5 class="title">Alejandra</h5>
                <span>Ayudante</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="testimonial-item">
            <div class="testi-avatar-thumb">
              <img src="img/images/testi_avatar02.png" alt="" />
            </div>
            <div class="testi-content">
              <p>
                “ Mascota es un término que procede del francés mascotte y que
                se utiliza para nombrar al animal de compañía. Estos animales ”
              </p>
              <div class="testi-avatar-info">
                <h5 class="title">Pepe</h5>
                <span>Adoptador</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- testimonial-area-end -->

  <!-- blog-area -->
  <section class="blog-area pt-110 pb-60">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-7 col-lg-9">
          <div class="section-title text-center mb-65">
            <div class="section-icon">
              <img src="img/icon/pawprint.png" alt="" />
            </div>
            <h5 class="sub-title">Noticias</h5>
            <h2 class="title">Ultimas noticias</h2>
            <p>
              Mascota es un término que procede del francés mascotte y que se
              utiliza para nombrar al animal de compañía. Estos animales
            </p>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-4 col-md-6">
          <div class="blog-post-item mb-50">
            <div class="blog-post-thumb">
              <a href="#"
                ><img src="img/blog/blog_post_thumb03.jpg" alt=""
              /></a>
              <div class="blog-post-tag">
                <a href="#"><i class="flaticon-bookmark-1"></i>Paquito</a>
              </div>
            </div>
            <div class="blog-post-content">
              <div class="blog-post-meta">
                <ul>
                  <li><i class="far fa-user"></i><a href="#">Admin</a></li>
                  <li><i class="far fa-bell"></i> Mar 12, 2021</li>
                </ul>
              </div>
              <h3 class="title"><a href="#">Paquito es un buen chico</a></h3>
              <p>
                Mascota es un término que procede del francés mascotte y que se
                utiliza para nombrar al animal de compañía. Estos animales.
              </p>
              <a href="#" class="read-more"
                >Leer mas <img src="img/icon/pawprint.png" alt=""
              /></a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="blog-post-item mb-50">
            <div class="blog-post-thumb">
              <a href="#"
                ><img src="img/blog/blog_post_thumb03.jpg" alt=""
              /></a>
              <div class="blog-post-tag">
                <a href="#"><i class="flaticon-bookmark-1"></i>Paquito</a>
              </div>
            </div>
            <div class="blog-post-content">
              <div class="blog-post-meta">
                <ul>
                  <li><i class="far fa-user"></i><a href="#">Admin</a></li>
                  <li><i class="far fa-bell"></i> Mar 12, 2021</li>
                </ul>
              </div>
              <h3 class="title"><a href="#">Paquito es un buen chico</a></h3>
              <p>
                Mascota es un término que procede del francés mascotte y que se
                utiliza para nombrar al animal de compañía. Estos animales.
              </p>
              <a href="#" class="read-more"
                >Leer mas <img src="img/icon/pawprint.png" alt=""
              /></a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="blog-post-item mb-50">
            <div class="blog-post-thumb">
              <a href="#"
                ><img src="img/blog/blog_post_thumb03.jpg" alt=""
              /></a>
              <div class="blog-post-tag">
                <a href="#"><i class="flaticon-bookmark-1"></i>Paquito</a>
              </div>
            </div>
            <div class="blog-post-content">
              <div class="blog-post-meta">
                <ul>
                  <li><i class="far fa-user"></i><a href="#">Admin</a></li>
                  <li><i class="far fa-bell"></i> Mar 12, 2021</li>
                </ul>
              </div>
              <h3 class="title"><a href="#">Paquito es un buen chico</a></h3>
              <p>
                Mascota es un término que procede del francés mascotte y que se
                utiliza para nombrar al animal de compañía. Estos animales.
              </p>
              <a href="#" class="read-more"
                >Leer mas <img src="img/icon/pawprint.png" alt=""
              /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- blog-area-end -->

  <!-- newsletter-area -->
  <div class="newsletter-area pb-110">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="newsletter-wrap">
            <div class="newsletter-content">
              <h2 class="title">Quieres recibir nuestras noticias?</h2>
              <p><span>*</span> No compartiremos tu correo.</p>
            </div>
            <div class="newsletter-form">
              <form action="#">
                <input type="email" placeholder="Coloca tu correo..." />
                <button type="submit" class="btn">Subscribete</button>
              </form>
            </div>
            <div class="newsletter-shape">
              <img src="img/images/newsletter_shape01.png" alt="" />
            </div>
            <div class="newsletter-shape shape-two">
              <img src="img/images/newsletter_shape02.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiDog, mdiCat, mdiMapMarker  } from "@mdi/js";
import Carrusel from "./Carrusel.vue";

export default {
  name: "Inicio",
  components: {
    SvgIcon,
    Carrusel,
  },
  data() {
    return {
      dog: mdiDog,
      cat:mdiCat,
      mapMarker: mdiMapMarker 
    };
  },
};
</script>

<style>

</style>
