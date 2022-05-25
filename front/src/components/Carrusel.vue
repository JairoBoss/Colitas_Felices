<template>
  <section class="slider-area" >
    <carousel :items-to-show="1" :mouseDrag="false" :autoplay="10000" :wrapAround="true" :transition="600">
      <slide v-for="(slide, index) in slides" :key="slide"  :style="{ backgroundImage: 'url(' + slide.imagen + ')' , height: auto}">
            <div
              class="slider-content"
              
            >
              <div class="slider-title">
                <h2
                  class="title"
                >
                  {{ slide.titulo }}
                </h2>
              </div>
              <div class="slider-desc">
                <p
                  class="desc"

                >
                  {{ slide.subtitulo }}
                </p>
              </div>
              <a
                href="#"
                class="btn"
                data-animation="fadeInUpBig"
                data-delay=".6s"
                data-duration="1.2s"
                >Nuestra mision<img src="img/icon/w_pawprint.png" alt=""
              /></a>
            </div>
      </slide>
    </carousel>
  </section>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
  name: "Carrusel",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      slides: [
        {
          titulo: "Colitas felices de Oaxaca",
          subtitulo: "Haciendo lo que nos gusta",
          imagen:
            "https://themebeyond.com/pre/petco-prev/petco-live/img/slider/slider_bg01.jpg",
        },
        {
          titulo: "Colitas felices de Oaxaca",
          subtitulo: "Haciendo lo que nos gusta",
          imagen:
            "https://themebeyond.com/pre/petco-prev/petco-live/img/slider/slider_bg02.jpg",
        },
      ],
    };
  },
};
</script>
