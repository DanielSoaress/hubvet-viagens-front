<template>
    <div>    
        <v-app-bar 
            elevate-on-scroll
            color="white">
            <img alt="Logo" src="../../assets/img/logo-header.png" > 
            <v-spacer></v-spacer>
            <v-avatar>
                <img alt="Profile" src="../../assets/img/profile.png" >    
            </v-avatar>                     
        </v-app-bar>
        <v-container class="container">
            <v-row>
                <v-col cols="4" class="pb-0">
                    <Input
                        id="text_search"
                        name="text_search"
                        solo
                        label="Copacabana"
                        background-color="#FFF"
                        autofocus
                        prepend-inner-icon="mdi-magnify"
                        v-model="filters.search"
                    />
                </v-col>   
                <v-col cols="4" class="pb-0"> 
                    <v-row>
                        <v-col cols="8" class="pb-0">
                            <Input
                                id="local"
                                name="local"
                                label="Onde você está?"
                                v-model="filters.local"
                            />   
                        </v-col>
                        <v-col cols="4" class="pb-0">
                            <ToggleButton
                                id="moeda"
                                name="moeda"
                                label="Milhas ou R$"
                                v-model="filters.moeda">
                                <v-btn value="milha">
                                    <img alt="Milhas" src="../../assets/img/milhas.png" width="18" height="13"> 
                                </v-btn>
                                <v-btn value="real">
                                    <img alt="Real" src="../../assets/img/money.png" > 
                                </v-btn>
                            </ToggleButton>  
                        </v-col>                           
                    </v-row>                
                </v-col> 
                <v-col cols='4' class="pb-0">                  
                     <v-row>
                         <v-col cols="10" class="pb-0">
                            <Autocomplete
                                id="chips_category"
                                name="chips_category"
                                label="Etiquetas"
                                v-model="filters.category"
                                multiple
                                chips
                                small-chips
                                :items="datasource_category"
                                itemText="nome"
                                itemValue="id"
                                :chipsValue="true"
                            >
                            </Autocomplete>                       
                        </v-col>
                        <v-col cols="1" class="pb-0 px-0">
                            <Button
                                id="grid_btn"
                                name="grid_btn"
                                icon
                            >
                                <img alt="grid layout" src="../../assets/img/grid-outline.svg">
                            </Button>
                        </v-col>
                        <v-col cols="1" class="pb-0 px-0">
                            <Button
                                id="list_btn"
                                name="list_btn"
                                icon                       
                            >
                                <img alt="list" src="../../assets/img/list.svg" > 
                            </Button>
                        </v-col>
                    </v-row>
                </v-col>                                 
            </v-row>
            <v-row class="mt-0">
                <v-col cols='11' class="pb-0">
                    <v-tabs
                        v-model="filters.type"
                        background-color="transparent">
                        <v-tab
                            v-for="item in datasource_type"
                            :key="item.id"
                        >
                            {{ item.nome }}
                        </v-tab>
                    </v-tabs>
                </v-col>
                <v-col class="pb-0">
                    <v-icon v-if="isShowCart === false">
                         mdi-chevron-left
                    </v-icon> 
                    <Button
                        id="cart_btn"
                        name="cart_btn"
                        fab
                        icon
                        @click="isShowCart = !isShowCart"
                    >
                        <v-icon>
                            mdi-cart-outline
                        </v-icon> 
                    </Button>  
                    <v-icon v-if="isShowCart === true">
                         mdi-chevron-right
                    </v-icon> 
                </v-col>
            </v-row>
            <v-row class="mt-0">
                <v-col :cols="isShowCart ? 8 : 12">
                    <v-data-table
                        :headers="filters.moeda === 'real' ?
                            pacote_headers_real : pacote_headers_milha"
                        :items="datasource_pacote"
                        :items-per-page="5"
                        class="elevation-1"
                        :expanded.sync="expanded"
                        show-expand
                        show-select
                        v-model="products"    
                        item-key="id" 
                        v-if="filters.type == 3"
                        :footer-props="{
                            'items-per-page-text':'Itens por página',
                            'page-text': '{0}-{1} de {2}'                            
                        }"                    
                    >
                        <template v-slot:expanded-item="{ headers, item }">
                            <td :colspan="headers.length">
                               {{ item.name }}
                            </td>
                        </template>
                    </v-data-table>
                </v-col>
                <v-col cols="4">
                    <v-navigation-drawer
                        v-model="isShowCart"
                        right
                        width="447"
                    >
                    </v-navigation-drawer>

                    <Button
                        v-if="isShowCart"
                        id="btn_buy"
                        name="btn_buy"
                        x-large
                        tile
                        class="mt-4 mb-5"
                        color="#44BBA4"
                        dark
                        @click="isShowBuyModal = true"
                    >
                    <v-icon class="mr-4">
                        mdi-page-next-outline
                    </v-icon>
                        Comprar
                    </Button>
                </v-col>
            </v-row>
        </v-container>

        <v-dialog
            v-model="isShowBuyModal"
            width="600px"
        >
            <v-card>
                <v-card-title>
                    <span >Opções de Pagamento</span>
                </v-card-title>
                <v-card-text class="text-left">
                    Tenha certeza ao selecionar a forma de pagamento correta de transação antes de continuar.
                </v-card-text>
                <v-checkbox
                    :label="`Boleto bancário`"
                ></v-checkbox>
                <v-card-text class="text-left">
                    Você será redirecionado para o download do documento.
                </v-card-text>
                <v-divider></v-divider>
                <v-card-title>
                    <span >Fechamento Financeiro</span>
                </v-card-title>
                <v-card-text class="text-left">
                    Confira os itens abaixo se estão de acordo com a compra  realizada.
                </v-card-text>     
                <div>
                    <p>Valor para 3 itens</p> <p>R$ 7.591,70</p>
                    <p>Frete</p> <p>não se aplica</p>                    
                </div>   
                <v-divider></v-divider>        
                <div>
                    <p>Subtotal</p> <p>R$ 7.591,70</p>
                    <p>Valor de Descontos</p> <p>R$ 350,76</p>     
                    <p>Valor Total</p> <p>R$ 7.240,94</p>                                   
                </div> 
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        text
                        @click="dialog = false"
                    >
                        Cancelar
                    </v-btn>
                    <v-btn
                        color="#44BBA4"
                        dark
                        x-large
                        tile
                        @click="comprar()"
                        class="px-5"
                    >
                        <v-icon class="mr-4">
                            mdi-page-next-outline
                        </v-icon>
                        Finalizar
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
        expanded: [],
        isShowCart: false,
        isShowBuyModal: false,  
        products: [],      
        filters: {
            search: null,
            category: null,
            moeda: 'real',
            local: null,
            type: null,
        },
        pacote_headers_real: [
          { text: 'Código', value: 'cod'},
          { text: 'Nome', value: 'name', sortable: false },
          { text: 'Preço (R$)', value: 'value', sortable: false },
          { text: 'Etiquetas', value: 'category', sortable: false },
          { text: '', value: 'data-table-expand' },
        ],
        pacote_headers_milha: [
          { text: 'Código', value: 'cod'},
          { text: 'Nome', value: 'name', sortable: false },
          { text: 'Milhas', value: 'milhas', sortable: false },
          { text: 'Etiquetas', value: 'category', sortable: false },
          { text: '', value: 'data-table-expand' },
        ],        
        datasource_pacote: [
          {
            id: 1,
            name: 'Final de ano em Copacabana',
            cod: 'HP556',
            value: '7.591,70',
            milhas: '3.591',            
            category: '',
          },
          {
            id: 2,  
            name: 'Carnaval em Copacabana',
            cod: 'HP504',
            value: '6.266,10',
            milhas: '2.591',                        
            category: '',
          },
          {
            id: 3,  
            name: 'Feriadão em Copacabana',
            cod: 'HP589',
            value: '2.190,75',
            milhas: '1.391',                        
            category: '',
          },
          {
            id: 4,  
            name: 'Semana Santa em Copacabana',
            cod: 'HP511',
            value: '3.490,11',
            milhas: '591',                        
            category: '',
          },                    
        ],
    };
  },
  computed: {
    ...mapGetters('inicio', {
      filters_store: 'filters',
      datasource_type: 'datasource_type',
      datasource_category: 'datasource_category'
    }),
  },
  methods: {
    async comprar() {
      this.$router.push('/final')
    },
    ...mapActions('inicio', {
      carregar_type: 'carregar_type',
      carregar_category: 'carregar_category'
    }),
  },
  async created() {
    this.filters = {...this.filters_store.filters};
    await this.carregar_type();
    await this.carregar_category();
  }
};
</script>

<style scoped>
    .container {
        margin-bottom: 65px;
    }

    @media (min-width: 900px) {
        .container {
            max-width: 1150px;
        }
    }

    @media (min-width: 1264px) {
        .container {
            max-width: 1360px;
        }
    }
</style>