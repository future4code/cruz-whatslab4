import React from 'react'
import styled from 'styled-components'
import NovaMensagem from '../NovaMensagem/NovaMensagem'

const Botao = styled.button`
    color: black;
`

export default class SecaoMensagens extends React.Component {
    render() {
        return (
            <div>
                <Botao>Envair</Botao>
                <NovaMensagem />
            </div>
        )
    }
}
