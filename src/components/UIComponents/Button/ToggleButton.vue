<template>
    <div class="ml-43 toggle-container">
      <p>{{ label }}</p>
      <v-btn-toggle
        :id="id"
        :name='name'
        v-model="model"
      >
        <slot />
      </v-btn-toggle>
    </div>
</template>

<script>

export default {
  name: 'ToggleButton',
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
  watch: {
    value(value) {
      console.log(value)
      this.model = value;
    },
    model(value) {
      this.$emit('input', value);
    },
  },
  mounted() {
    this.model = this.value;
  }
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
      background-color: rgb(68, 187, 164, 0.2)!important;
  }

  .toggle-container p {
      margin-bottom: 0px;
      color: #909CA7;
      font-weight: 500;
  }
</style>
