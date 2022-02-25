<template>
  <v-btn
    :id="id"
    :name='name'
    :x-large="xLarge"
    :tile="tile"
    :color="color"
    :dark="dark"
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
    clear() {
      this.$emit('clear', this.id);
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

<style>
  .toggle-container {
      margin-top: -6px;
  }

  .toggle-container .v-item-group{
      border: 1px solid rgba(0, 0, 0, 0.12);
      border-radius: 4px;
      background-color: transparent;
  }

  .toggle-container .v-btn-toggle:not(.v-btn-toggle--dense) .v-btn.v-btn.v-size--default {
      height: 36px;
  }

  .toggle-container .v-btn{
      background-color: #E5E5E5!important;
  }

  .toggle-container .v-btn--active {
      background-color: #42b29c6c!important;
      border-color: rgba(33, 33, 33, 0.08)!important;
  }

  .toggle-container p {
      margin-bottom: 0px;
      color: #909CA7;
      font-weight: 500;
  }
</style>
