import React, {Component, useState} from 'react'
import { Button, Text, TextInput, StyleSheet, View } from 'react-native' 
import Style from  '../../Style/Style'

import MegaNumero from './MegaNumero'

export default class Mega extends Component {
    
    state = {
        number: this.props.qntNumeros,
        numeros: []
    }
    
    gerarNumeroNaoContido = nums => {
        const novo = parseInt(Math.random() * 60 ) + 1
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
    }

    gerarNumeros = ({number}) => {
        const numeros = Array(this.state.number).fill().reduce(nums =>
            [...nums,this.gerarNumeroNaoContido(nums)],[]).sort((a,b) => a - b)
        this.setState({numeros})
    }
    // constructor(props){
    //     super(props)

    //     this.alterarQtdNumero= this.alterarQtdNumero.bind(this)
    // }

    // alterarQtdNumero(numb){
    //     this.setState({number: numb})
    // }

    exibirNumeros = () => {
        const nums = this.state.numeros;
        return nums.map( num => {
            return <MegaNumero key={num} num={num}/>
        })
    }


    render(){
        return(
            <>
                <Text style={Style.txtBig}>
                    Gerador de Mega-Sena {this.state.number}
                </Text>
                <TextInput placeholder="Quantidade de numeros"
                    value={this.state.qntNumeros}
                    onChangeText={texto => this.setState({number: +texto})}
                    keyboardType={'numeric'}
                    style={[{borderBottomWidth: 1}, style.Input]}
                />
                <Button title='Gerar' onPress={this.gerarNumeros} />
                <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                    {this.exibirNumeros()}
                </View>
            </>
        )
    }
}

const style= StyleSheet.create({
    Numero:{
        backgroundColor: "#000",
        color: '#FFF',
        padding: 5
    },
    Input:{
        fontSize: 15
    }
})