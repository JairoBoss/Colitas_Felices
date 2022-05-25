<template>
  <section
    class="breadcrumb-area breadcrumb-bg"
    data-background="img/bg/breadcrumb_bg.jpg"
  >
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="breadcrumb-content">
            <h2 class="title">Contacto</h2>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="/">Inicio</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Contacto
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- breadcrumb-area-end -->

  <!-- contact-area -->
  <section class="contact-area pt-110 pb-110">
    <div class="container">
      <div class="container-inner-wrap">
        <div class="row justify-content-center justify-content-lg-between">
          <div class="col-lg-6 col-md-8 order-2 order-lg-0">
            <div class="contact-title mb-20">
              <h5 class="sub-title">Contáctanos</h5>
              <h2 class="title">Pregúntanos<span>.</span></h2>
            </div>
            <div class="contact-wrap-content">
              <p>Puedes poner tus comentarios aquí</p>
              <form
                action="https://themebeyond.com/pre/petco-prev/petco-live/contact.html#"
                class="contact-form"
              >
                <div class="form-grp">
                  <label for="name">Tu nombre <span>*</span></label>
                  <input type="text" id="name" placeholder="Jon Deo..." />
                </div>
                <div class="form-grp">
                  <label for="email">Tu Email <span>*</span></label>
                  <input
                    type="text"
                    id="email"
                    placeholder="info.example@.com"
                  />
                </div>
                <div class="form-grp">
                  <label for="message">Tu mensaje <span>*</span></label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Opinion..."
                  ></textarea>
                </div>
                <button type="button" class="btn rounded-btn">Enviar</button>
              </form>
            </div>
          </div>
          <div class="col-xl-5 col-lg-6 col-md-8">
            <div class="contact-info-wrap">
              <div class="contact-img">
                <img
                  src="https://themebeyond.com/pre/petco-prev/petco-live/img/images/contact_img.png"
                  alt=""
                />
              </div>
              <div class="contact-info-list">
                <ul>
                  <li>
                    <div class="icon">
                      <svg-icon type="mdi" :path="map"></svg-icon>
                    </div>
                    <div class="content">
                      <p>Oaxaca de Juárez, Oaxaca</p>
                    </div>
                  </li>
                  <li>
                    <div class="icon">
                      <svg-icon type="mdi" :path="phone"></svg-icon>
                    </div>
                    <div class="content">
                      <p>951-666-6666</p>
                    </div>
                  </li>
                  <li>
                    <div class="icon">
                      <svg-icon type="mdi" :path="mail"></svg-icon>
                    </div>
                    <div class="content">
                      <p>colitas@info.com</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="contact-social">
                <ul>
                  <li>
                    <a
                      href="https://themebeyond.com/pre/petco-prev/petco-live/contact.html#"
                      ><i><svg-icon type="mdi" :path="facebook"/></i
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://themebeyond.com/pre/petco-prev/petco-live/contact.html#"
                      ><i><svg-icon type="mdi" :path="twitter"/></i></a>                
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SvgIcon from "@jamescoyle/vue-icon";
import {
  mdiMapMarker,
  mdiPhone,
  mdiEmail,
  mdiFacebook,
  mdiTwitter,
} from "@mdi/js";

export default {
  name: "Contacto",
  components: {
    SvgIcon,
  },
  data() {
    return {
      map: mdiMapMarker,
      phone: mdiPhone,
      mail: mdiEmail,
      facebook: mdiFacebook,
      twitter: mdiTwitter,
    };
  },
};
</script>

<style>
.breadcrumb-bg {
  background-image: url("https://themebeyond.com/pre/petco-prev/petco-live/img/bg/breadcrumb_bg.jpg");
}
</style>
