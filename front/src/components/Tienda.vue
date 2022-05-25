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
            <h2 class="title">Tienda</h2>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="/">Inicio</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Tienda
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- breadcrumb-area-end -->

  <!-- shop-area -->
  <div class="shop-area pt-110 pb-110">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-3 col-md-8 order-2 order-lg-0">
          <aside class="shop-sidebar">
            <div class="widget">
              <div class="sidebar-search">
                <form
                  action="https://themebeyond.com/pre/petco-prev/petco-live/shop.html#"
                >
                  <input type="text" placeholder="Buscar.." />
                  <button type="submit">
                    <svg-icon type="mdi" :path="magnify"></svg-icon>
                  </button>
                </form>
              </div>
            </div>
            <div class="widget">
              <h4 class="sidebar-title">Categoría</h4>
              <div class="shop-cat-list">
                <ul>
                  <li v-for="categoria in categorias" key="{{index}}">
                    <a
                      href="https://themebeyond.com/pre/petco-prev/petco-live/shop.html"
                      >{{ categoria }} <span>+</span></a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div class="widget"></div>
            <div class="widget">
              <h4 class="sidebar-title">Filtrar por precio</h4>
              <div class="price_filter">
                <div
                  id="slider-range"
                  class="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"
                >
                  <div
                    class="ui-slider-range ui-widget-header ui-corner-all"
                    style="left: 14.2857%; width: 64.2857%"
                  ></div>
                  <span
                    class="ui-slider-handle ui-state-default ui-corner-all"
                    tabindex="0"
                    style="left: 14.2857%"
                  ></span
                  ><span
                    class="ui-slider-handle ui-state-default ui-corner-all"
                    tabindex="0"
                    style="left: 78.5714%"
                  ></span>
                </div>
                <div class="price_slider_amount">
                  <span>Precio :</span>
                  <input
                    type="text"
                    id="amount"
                    name="price"
                    placeholder="Add Your Price"
                  />
                  <input type="submit" class="btn" value="Filter" />
                </div>
              </div>
            </div>
            <div class="widget shop-widget-banner">
              <a
                href="https://themebeyond.com/pre/petco-prev/petco-live/shop.html"
                ><img
                  src="./Petco - Pet Breeder &amp; Adoption HTML Template_files/shop_add.jpg"
                  alt=""
              /></a>
            </div>
          </aside>
        </div>
        <div class="col-lg-9">
          <div class="shop-wrap">
            <h4 class="title">Tienda</h4>
            <div class="shop-page-meta mb-30">
              <div class="shop-showing-result">
                <p>Items totales 10 - 12</p>
              </div>
              <div class="shop-show-list">
                <!-- <form
                  action="https://themebeyond.com/pre/petco-prev/petco-live/shop.html#"
                >
                  <label for="show">Show</label>
                  <select id="show" class="selected" style="display: none">
                    <option value="">08</option>
                    <option value="">12</option>
                    <option value="">16</option>
                    <option value="">18</option>
                    <option value="">20</option>
                  </select>
                  <div class="nice-select selected" tabindex="0">
                    <span class="current">08</span>
                    <ul class="list">
                      <li data-value="" class="option selected">08</li>
                      <li data-value="" class="option">12</li>
                      <li data-value="" class="option">16</li>
                      <li data-value="" class="option">18</li>
                      <li data-value="" class="option">20</li>
                    </ul>
                  </div>
                </form> -->
              </div>
              <div class="shop-short-by">
                <!-- <form
                  action="https://themebeyond.com/pre/petco-prev/petco-live/shop.html#"
                >
                  <label for="shortBy">Filtrar por</label>
                  <select id="shortBy" class="selected" style="display: none">
                    <option value="">Sort by latest</option>
                    <option value="">Low to high</option>
                    <option value="">High to low</option>
                    <option value="">Popularity</option>
                  </select>
                  <div class="nice-select selected" tabindex="0">
                    <span class="current">Sort by latest</span>
                    <ul class="list">
                      <li data-value="" class="option selected">
                        Sort by latest
                      </li>
                      <li data-value="" class="option">Low to high</li>
                      <li data-value="" class="option">High to low</li>
                      <li data-value="" class="option">Popularity</li>
                    </ul>
                  </div>
                </form> -->
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-lg-4 col-sm-6" v-for="producto in productos">
                <div class="shop-item mb-55">
                  <div class="shop-thumb">
                    <a :href="'/tiendaDetalle' + producto.id"
                      ><img :src="producto.foto" alt=""
                    /></a>
                  </div>
                  <div class="shop-content">
                    <span>{{ producto.categoria }}</span>
                    <h4 class="title">
                      <a 
                      :href="'/tiendaoDetalle' + producto.id">{{
                        producto.nombre
                      }}</a>
                    </h4>
                    <div class="shop-content-bottom">
                      <span class="price">${{ producto.precio }}</span>
                      <span class="add-cart"
                        ><a
                          :href="'/tiendaDetalle'+producto.id"
                          >Añadir +</a
                        ></span
                      >
                    </div>
                  </div>
                </div>
              </div>
              <!-- </div> -->
              <!-- <div class="shop-page-meta">
              <div class="shop-grid-menu">
                <ul>
                  <li class="active">
                    <a
                      href="https://themebeyond.com/pre/petco-prev/petco-live/shop.html#"
                      ><i class="fas fa-th"></i
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://themebeyond.com/pre/petco-prev/petco-live/shop.html#"
                      ><i class="fas fa-list"></i
                    ></a>
                  </li>
                </ul>
              </div>
              <div class="shop-showing-result">
                <p>Total Items 1-12 of 13</p>
              </div>
              <div class="shop-show-list">
                <form
                  action="https://themebeyond.com/pre/petco-prev/petco-live/shop.html#"
                >
                  <label for="bottomShow">Show</label>
                  <select
                    id="bottomShow"
                    class="selected"
                    style="display: none"
                  >
                    <option value="">08</option>
                    <option value="">12</option>
                    <option value="">16</option>
                    <option value="">18</option>
                    <option value="">20</option>
                  </select>
                  <div class="nice-select selected" tabindex="0">
                    <span class="current">08</span>
                    <ul class="list">
                      <li data-value="" class="option selected">08</li>
                      <li data-value="" class="option">12</li>
                      <li data-value="" class="option">16</li>
                      <li data-value="" class="option">18</li>
                      <li data-value="" class="option">20</li>
                    </ul>
                  </div>
                </form>
              </div>
              <div class="shop-pagination">
                <ul>
                  <li class="active">
                    <a
                      href="https://themebeyond.com/pre/petco-prev/petco-live/shop.html"
                      >1</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://themebeyond.com/pre/petco-prev/petco-live/shop.html"
                      >2</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://themebeyond.com/pre/petco-prev/petco-live/shop.html"
                      ><i class="fas fa-angle-double-right"></i
                    ></a>
                  </li>
                </ul>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiMagnify } from "@mdi/js";

export default {
  name: "Tienda",
  components: {
    SvgIcon,
  },
  data() {
    return {
      categorias: ["Comida", "Juguetes", "Correas"],
      productos: [
        {
          id: 1,
          nombre: "Juguete",
          precio: 200,
          foto: "https://themebeyond.com/pre/petco-prev/petco-live/img/product/shop_item01.jpg",
          categoria: "Juguetes",
        },
        {
          id: 2,
          nombre: "Juguete",
          precio: 200,
          foto: "https://themebeyond.com/pre/petco-prev/petco-live/img/product/shop_item01.jpg",
          categoria: "Juguetes",
        },
        {
          id: 3,
          nombre: "Juguete",
          precio: 200,
          foto: "https://themebeyond.com/pre/petco-prev/petco-live/img/product/shop_item01.jpg",
          categoria: "Juguetes",
        },
        {
          id: 4,
          nombre: "Juguete",
          precio: 200,
          foto: "https://themebeyond.com/pre/petco-prev/petco-live/img/product/shop_item01.jpg",
          categoria: "Juguetes",
        },
        {
          id: 5,
          nombre: "Juguete",
          precio: 200,
          foto: "https://themebeyond.com/pre/petco-prev/petco-live/img/product/shop_item01.jpg",
          categoria: "Juguetes",
        },
        {
          id: 6,
          nombre: "Juguete",
          precio: 200,
          foto: "https://themebeyond.com/pre/petco-prev/petco-live/img/product/shop_item01.jpg",
          categoria: "Juguetes",
        },
      ],
      magnify: mdiMagnify,
    };
  },
};
</script>

<style>
.breadcrumb-bg {
  background-image: url("https://themebeyond.com/pre/petco-prev/petco-live/img/bg/breadcrumb_bg.jpg");
}
</style>
