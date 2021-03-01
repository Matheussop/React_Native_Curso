import React from 'react'
import { Text, FlatList } from 'react-native'
import Style from  '../../Style/Style'
import produtos from './produtos'


export default props =>  {

    return (
        <>
            <Text style={Style.txtBig}>
                Lista de Produtos 
            </Text>
           <FlatList data={produtos}
           keyExtractor={i => `${i.id}`}
            renderItem={({item: p }) => {
                return <Text>{p.id}. {p.nome} </Text>
            }}
           />
        </>
    )
}