<template>
  <div class="col-12">
    <div class="d-flex justify-content-between">
      <h4 class="m-3 text-primary">Adopción</h4>
      <router-link to="/agregarAdopcion">
        <button type="button" class="btn btn-outline-primary m-2">
          Agregar Adopción
        </button>
      </router-link>
    </div>
    <div class="bg-secondary rounded h-100 p-4">
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Fecha Adopción</th>
              <th scope="col">Estatus</th>
              <th scope="col">Mascota</th>
              <th scope="col">Persona</th>
              <th class="text-primary">Eliminar</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(adopcion, index) in adopciones" :key="index">
              <th>{{ adopcion.fechaAdopcion }}</th>
              <td>{{ adopcion.status }}</td>
              <td>{{ adopcion.Mascota.nombre }}</td>
              <td>{{ adopcion.Persona.nombres }}</td>
              <td>
                <button
                  type="button"
                  class="btn-sm btn-primary rounded-pill m-2"
                  @click="deleteAdopcion(adopcion._id)"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import AdopcionService from "../../services/Adopcion.js";
import { RouterLink } from "vue-router";

export default {
  name: "adopcion",
  components: {
    RouterLink,
  },
  data() {
    return {
      adopciones: [],
      tabla: [
        {
          nombre: "dani",
          precio: 12,
        },
        {
          nombre: "dani2",
          precio: 12,
        },
      ],
    };
  },
  methods: {
    async getAdopciones() {
      await AdopcionService.getAll().then((response) => {
        this.adopciones = response.data;
      });
    },
    async deleteAdopcion(id) {
      await AdopcionService.delete(id).then((response) => {
        this.getAdopciones();
      });
    },
  },
  mounted() {
    this.getAdopciones();
  },
};
</script>

<style scoped>
@import "../../assets/cssDash/bootstrap.min.css";
@import "../../assets/cssDash/style.css";
</style>
