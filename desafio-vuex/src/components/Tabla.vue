
<template>
  <div class="tabla">
    <table>
      <thead>
        <tr>
          <th>Código</th>
          <th>Nombre</th>
          <th>Stock</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(juego, i) in $store.state.juegos" :key="juego.id">
          <td>{{ juego.codigo }}</td>
          <td>{{ juego.nombre }}</td>
          <td>{{ juego.stock }}</td>
          <td>{{ juego.precio }}</td>
          <td>
            <button class="sumar" @click="$emit('incrementar', i)">+</button>
            <button class="restar" @click="$emit('disminuir', i)">-</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin: 25px 0;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}

thead {
  background-color: #B19CD7;
  color: #fff;
}

th, td {
  padding: 12px 15px;
  text-align: left; 
}

th {
  font-size: 1.1em;
}

tbody tr {
  border-bottom: 1px solid #ddd;
}

button{
  border: none;
  padding: 1rem;
  cursor: pointer;
}

.sumar{
  background-color: #5B7B57;
}

.restar{
  background-color: #DD111B;
}
</style>
