<template>
  <div class="col-12">
    <div class="d-flex justify-content-between">
      <router-link to="/adopcionDash">
        <button type="button" class="btn btn-outline-primary m-2">
          Regresar
        </button>
      </router-link>
    </div>
    <div class="col-sm-12 col-xl-12">
      <div class="bg-secondary rounded h-100 p-2">
        <h4 class="m-3 text-primary">Agregar Adopción</h4>
        <form>                  
          <div class="form-floating mb-3">
            <select
              class="form-select"
              id="floatingSelect"
              aria-label="Compañero de vida"
            >
              <option selected>Selecciona</option>
              
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <label for="floatingSelect">Compañeros de vida</label>
          </div>
        </form>
        <div class="form-floating">
          <textarea
            class="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea"
            style="height: 150px"
          ></textarea>
          <label for="floatingTextarea">Comments</label>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import "../../assets/cssDash/bootstrap.min.css";
@import "../../assets/cssDash/style.css";
</style>
