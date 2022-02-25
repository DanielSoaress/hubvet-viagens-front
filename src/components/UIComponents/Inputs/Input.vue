<template>
    <v-text-field
      :id="id"
      :name='name'
      :class="classCustom"
      :label="label"
      :background-color="backgroundColor"
      :prepend-inner-icon="prependInnerIcon"
      :solo='solo'
      :autofocus="autofocus"
      v-model="model"
    ></v-text-field>
</template>

<script>

export default {
  name: 'Input',
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
     * Dica que descreve o valor esperado de um campo de entrada
     */
    placeholder: {
      type: String,
      required: false,
    },
    /**
     * Habilita o foco em um elemento.
     */
    autofocus: {
      type: Boolean,
      default: false,
      required: false,
    },
    /**
     * Habilita o foco em um elemento.
     */
    solo: {
      type: Boolean,
      default: false,
      required: false,
    },
    /**
     * Classe customizada para elemento.
     */
    classCustom: {
      type: String,
      required: false,
    }, 
    /**
     * Cor Background customizado para elemento.
     */
    backgroundColor: {
      type: String,
      required: false,
    },  
    /**
     * Icon Prepend Inner Icon.
     */
    prependInnerIcon: {
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
      this.model = value;
    },
    model(value) {
      this.$emit('input', value);
    },
  },
  mounted() {
    this.model = this.value;
  },
};
</script>

