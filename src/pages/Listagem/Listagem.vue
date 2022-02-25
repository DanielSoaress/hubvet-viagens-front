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
                            />                             
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
                        background-color="transparent">
                        <v-tab>PASSAGENS</v-tab>
                        <v-tab>HÓTEIS</v-tab>
                        <v-tab>CARROS</v-tab>
                        <v-tab>PACOTES</v-tab>
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
                        :headers="headers"
                        :items="desserts"
                        :items-per-page="5"
                        class="elevation-1"
                        :expanded.sync="expanded"
                        show-expand
                        show-select    
                        item-key="calories"                        
                    >
                        <template v-slot:expanded-item="{ headers, item }">
                            <td :colspan="headers.length">
                                More info about {{ item.name }}
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
                    v-model="checkbox1"
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
                        @click="dialog = false"
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
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
        expanded: [],
        isShowCart: true,
        isShowBuyModal: true,        
        filters: {
            search: null,
            category: null,
            moeda: 'real',
            local: null,
            type: null,
        },
        headers: [
          { text: 'Código', value: 'calories'},
          { text: 'Nome', value: 'fat', sortable: false },
          { text: 'Preço (R$)', value: 'carbs', sortable: false },
          { text: 'Etiquetas', value: 'protein', sortable: false },
          { text: '', value: 'data-table-expand' },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%',
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%',
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%',
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%',
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%',
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%',
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
          },
        ],
    };
  },
  computed: {
    ...mapGetters('inicio', {
      filters: 'filters',
    }),
  },
  methods: {
    async comprar() {
      await this.listar({
        filters: this.filters,
      });
      this.$router.push('/viagens')
    }
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