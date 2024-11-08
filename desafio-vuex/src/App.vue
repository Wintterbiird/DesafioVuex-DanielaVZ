<script>
import Tabla from './components/Tabla.vue';
import { mapState } from 'vuex';

export default {
  components: {
    Tabla,
  },
  computed: {
    ...mapState(['juegos']),
  },
  methods: {
    incrementar(i) {
      this.$store.dispatch('sumar', i);
    },
    disminuir(i) {
      this.$store.dispatch('restar', i); 
    },
  },
};
</script>

<template>
  <div class="tienda">
    <h1>Tienda 32 Bits</h1>
    <h2>Lista de juegos</h2>
    <Tabla :juegos="juegos" @incrementar="incrementar" @disminuir="disminuir"/>
  </div>
</template>

<style scoped>
.tienda {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
