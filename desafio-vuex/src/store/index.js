import { createStore } from 'vuex';
import juegos from '../assets/juegos.json';

export default createStore({
  state: {
    juegos,
  },
  actions: {
    sumar(context, i) {
      if (context.state.juegos[i]) {
        context.state.juegos[i].stock++;
      }
    },
    restar(context, i) {
      if (context.state.juegos[i] && context.state.juegos[i].stock > 0) {
        context.state.juegos[i].stock--;
      }
    },
  },
});
