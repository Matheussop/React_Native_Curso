import React from 'react'
import {Text} from 'react-native'

import Style from '../Style/Style'

export default props => {
    return (
        <>
            <Text style={Style.txtCenter}>{props.principal}</Text>
            <Text style={Style.txtSmall}>{props.secundario}</Text>
        </>
    )
}