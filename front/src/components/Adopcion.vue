<template>  
    <!-- breadcrumb-area -->
    <section
      class="breadcrumb-area breadcrumb-bg"     
    >
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="breadcrumb-content">
              <h2 class="title">Lista de adopción</h2>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="/">Inicio</a>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Lista de adopción
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- breadcrumb-area-end -->

    <!-- adoption-shop-area -->
    <section class="adoption-shop-area">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-7 col-lg-9">
            <div class="section-title text-center mb-65">
              <div class="section-icon">
                <img
                  src="https://themebeyond.com/pre/petco-prev/petco-live/img/icon/pawprint.png"
                  alt=""
                />
              </div>
              <h5 class="sub-title">Conoce a las compañeritos de vida</h5>
              <h2 class="title">Compañeros de vida</h2>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div v-for="mascota in mascotas" class="col-lg-4 col-md-6">
            <div class="adoption-shop-item">
              <div class="adoption-shop-thumb">
                <img src="../assets/adoption_shop_thumb01.jpg" alt="" />
                <a
                  href="https://themebeyond.com/pre/petco-prev/petco-live/shop-details.html"
                  class="btn"
                  >Adoptar
                  <img
                    src="./Petco - Pet Breeder &amp; Adoption HTML Template_files/w_pawprint.png"
                    alt=""
                /></a>
              </div>
              <div class="adoption-shop-content">
                <h4 class="title">
                  <a
                    href="https://themebeyond.com/pre/petco-prev/petco-live/shop-details.html"
                    >{{mascota.nombre}}</a
                  >
                </h4>
                <div class="adoption-meta">
                  <ul>
                    <li>
                      <i class="fas fa-cog"></i
                      ><a
                        href="https://themebeyond.com/pre/petco-prev/petco-live/dog-list.html#"
                        >{{mascota.raza}}</a
                      >
                    </li>
                    <li><i class="far fa-calendar-alt"></i> {{mascota.cumple}}</li>
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
export default {
  name: "Adopcion",  
  data() {
    return {
      mascotas:[          
          {
              nombre: 'peter',
              raza: 'Callejero',
              cumple: '01-01-2022'
          },
          {
              nombre: 'jose',
              raza: 'Callejero',
              cumple: '01-02-2022'
          },
          {
              nombre: 'marco',
              raza: 'Callejero',
              cumple: '01-03-2022'
          },
          {
              nombre: 'Raul',
              raza: 'Callejero',
              cumple: '01-04-2022'
          }
      ]
    };
  }
};
</script>

<style>
.breadcrumb-bg{
  background-image: url("https://themebeyond.com/pre/petco-prev/petco-live/img/bg/breadcrumb_bg.jpg");
}
</style>