import React from 'react'
import { Text, View, StyleSheet, SafeAreaView } from 'react-native'



//Componentes criados
import MegaSena from './components/Mega/Mega'
// import FlexBoxV4 from './components/Layout/FlexBoxV4'
// import FlexBoxV3 from './components/Layout/FlexBoxV3'
// import FlexBoxV2 from './components/Layout/FlexBoxV2'
// import FlexBoxV1 from './components/Layout/FlexBoxV1'
// import Quadrado from './components/Layout/Quadrado'
// import DigiteSeuNome from './components/DigiteSeuNome'
// import ListaProdutosV2 from './components/Produtos/ListaProdutoV2'
// import ListaProdutos from './components/Produtos/ListaProduto'
// import UsuarioLogado from './components/UsuarioLogado'
// import Familia from './components/relacao/Familia'
// import Membro from './components/relacao/Membro'
// import ParImpar from './components/ParImpar'
// import Diferenciar from './components/Diferenciar'
// import Contador from './components/contador/ContadorV2'
// import Contador from './components/contador/ContadorV2'
// import Pai from './components/indireta/Pai'
// import Contador from './components/Contador'
// import Botao from './components/Botao'
// import Titulo from './components/Titulo'
// import Random from './components/Aleatorio'
// import MinMax from './components/MinMax'
// import Primeiro from './components/Primeiro'
// import {Comp1,Comp2} from './components/Multi'
// import Comp from './components/Multi''

export default () =>  (
    <SafeAreaView style={style.App} >
        <MegaSena qntNumeros={7}/>
        {/*
        <FlexBoxV4/>
        <FlexBoxV3/>
        <FlexBoxV2/>
        <FlexBoxV1/>
        <Quadrado/>
        <DigiteSeuNome/>
        <ListaProdutosV2/>
        <ListaProdutos/>
        <UsuarioLogado usuario={{nome: "Matheus", email:"teste@gmail.com"}}/>
        <UsuarioLogado usuario={{nome: "Matheus"}}/>
        <UsuarioLogado usuario={{email:"teste@gmail.com"}}/>
        <UsuarioLogado />
        <Familia>
            <Membro nome="Bia" sobrenome="Oliveira"/>
            <Membro nome="Matheus" sobrenome="Oliveira"/>
        </Familia>
        <Familia>
            <Membro nome="Gabriela" sobrenome="Thomaz"/>
            <Membro nome="Rafaela" sobrenome="Thomaz"/>
        </Familia>
        <ParImpar number={0}/>
        <Diferenciar/>
        <Contador/>
        <Pai/>
        <Contador numeroInicial={10}/>
        <Random a={1} b={3} />
        <Random a={1} b={3} />
        <Botao b={10}/>
        <Titulo principal="Cadastro Produto" secundario="Cadastro Produto"></Titulo>
        <Random a={1} b={3} />
        <Random a={1} b={3} /> 
        <MinMax a={200} b={20} /> 
        <Comp/>
        <Comp1/>
        <Comp2/>
        <Primeiro/> */}
    </SafeAreaView>
)

const style = StyleSheet.create({
    App: {
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        flex:1
    }
})