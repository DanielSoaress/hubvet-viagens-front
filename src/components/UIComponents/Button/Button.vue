<template>
  <v-btn
    :id="id"
    :name='name'
    :x-large="xLarge"
    :tile="tile"
    :color="color"
    :dark="dark"
    @click="handleClick"
    :icon="icon"
    :fab="fab"
  >
    <slot />
  </v-btn>
</template>

<script>

export default {
  name: 'Button',
  props: {
    // PROPRIEDADES DE LAYOUT
    /**
     * Identificador único para todo o documento.
     */
    id: {
      type: String,
      required: true,
    },
    /**
     * Identificação do elemento no formulário.
     */
    name: {
      type: String,
      required: true,
    },   
    /**
     * Etiqueta de entrada (texto antes da entrada)
     */
    label: {
      type: String,
      required: false,
    }, 
    /**
     * Cor do Button
     */
    color: {
      type: String,
      required: false,
    }, 
    /**
     * Habilita o Dark em um elemento.
     */
    dark: {
      type: Boolean,
      default: false,
      required: false,
    }, 
    /**
     * Habilita Icon em um elemento.
     */
    icon: {
      type: Boolean,
      default: false,
      required: false,
    }, 
    /**
     * Habilita Fab em um elemento.
     */
    fab: {
      type: Boolean,
      default: false,
      required: false,
    }, 
    /**
     * Habilita o x-large em um elemento.
     */
    xLarge: {
      type: Boolean,
      default: false,
      required: false,
    },
    /**
     * Habilita o Tile em um elemento.
    */
    tile: {
      type: Boolean,
      default: false,
      required: false,
    },     
    // PROPRIEDADES DE DADOS
    /**
     * Valor de ligação (value / v-model)
     */
    value: {
      default: '',
      require: false,
    },
  },
  data() {
    return {
      model: '',
    };
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    },
  },
  watch: {
    value(value) {
      this.model = value;
    },
    model(value) {
      this.$emit('input', value);
    },
  },
};
</script>

