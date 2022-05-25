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
            <h2 class="title">Detalle de producto</h2>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="/">Inicio</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Detalle de producto
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- breadcrumb-area-end -->

  <!-- shop-details-area -->
  <section class="shop-details-area pt-110 pb-50">
    <div class="container">
      <div class="shop-details-wrap">
        <div class="row">
          <div class="col-7">
            <div class="shop-details-img-wrap">
              <div class="tab-content" id="myTabContent">
                <div
                  class="tab-pane show"
                  id="item-one"
                  role="tabpanel"
                  aria-labelledby="item-one-tab"
                ></div>
                <div class="shop-details-img">
                  <img
                    src="https://themebeyond.com/pre/petco-prev/petco-live/img/product/shop_details01.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col-5">
            <div class="shop-details-content">
              <span>Juguetes</span>
              <h2 class="title">Juguete</h2>

              <div class="shop-details-price">
                <h2 class="price">$30</h2>
                <h5 class="stock-status">- Disponible</h5>
              </div>
              <p>
                Juguetito muy bonito, la verdad es que sí
              </p>
              
              <div class="shop-details-quantity">
                <span>Cantidad :</span>
                <div class="cart-plus-minus">
                  <input type="text" value="1" />
                  <div class="dec qtybutton">-</div>
                  <div class="inc qtybutton">+</div>
                </div>
                <a
                  href="/"
                  class="cart-btn"
                  >Añadir al carrito +</a
                >
              </div>
              <div class="shop-details-bottom">
                <ul>
                  <li class="sd-category">
                    <span class="title">Categorías :</span>
                    <a
                      href="https://themebeyond.com/pre/petco-prev/petco-live/shop.html"
                      >Juguetes,</a
                    >
                  </li>
                  <li class="sd-sku">
                    <span class="title">SKU :</span>
                    <a
                      href="https://themebeyond.com/pre/petco-prev/petco-live/shop.html"
                      >H#666</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- shop-details-area-end -->
</template>

<script>
import { useRoute } from "vue-router";
export default {
  name: "Hola",
  data() {
    return {
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
