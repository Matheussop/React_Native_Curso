import React from 'react'
import { Text } from 'react-native'
import Style from  '../../Style/Style'
import produtos from './produtos'


export default props =>  {

    function obterLita(){
        return produtos.map(p => {
            return <Text key={p.id}>{p.id}. {p.nome} por R$ {p.preco} </Text>
        })
    }

    return (
        <>
            <Text style={Style.txtBig}>
                Lista de Produtos 
            </Text>
            {obterLita()}
        </>
    )
}