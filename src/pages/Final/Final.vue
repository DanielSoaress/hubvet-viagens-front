<template>
    <v-container class="final">
        <div>
            <img alt="HubVet logo" src="../../assets/img/logo.png" width="297" height="92"> 
            <p class="blue-hub t1">Obrigado</p>
            <p class="t2">Desejamos uma viagem para</p>
            <p class="blue-hub t3">Copacabana!</p>
        </div>
    </v-container>
</template>

<style scoped>
    .final div {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
        border-radius: 16px;
        max-width: 450px;
        width: 100%;
        padding: 40px 28px;
    }

    .blue-hub {
        color: #44BBA4;
    }
    
    p {
        font-weight: 500;
    }

    .t1 {
        margin-top: 100px;
        margin-bottom: 64px;        
        font-size: 23px;
    }
    .t2 {
        font-size: 26px;
    }
    .t3 {
        font-size: 36px;
    }
</style>