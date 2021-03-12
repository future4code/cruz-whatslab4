import React from 'react'
import styled from 'styled-components'

const DivFlexRow = styled.div`
    display: flex;
`

const DivFlexColumn = styled(DivFlexRow)`
    flex-direction: column;
    width: 100%;
`

const Input = styled.input`
    padding: 10px;
    margin: 0 2px;
    width: 100px;
    box-sizing: border-box;
`

const InputMensagem = styled(Input) `
    flex: 2;
`

const Botton = styled.button`
    padding: 10px;   
    margin: 0 2px;
    cursor: pointer;
    box-sizing: border-box;
`

const ParagraphAlert = styled.p`
    color: red;
    font-size: .9em;
    margin: 0 2px;
    margin-bottom: 6px;
`

export default class NovaMensagem extends React.Component {
    state = {
        inputUsuario: '',
        inputMensagem: '',
        mensagemErro: ''
    }

    handleInputUsuario = (event) => {
        this.setState({inputUsuario : event.target.value})
    }
    handleInputMensagem = (event) => {
        this.setState({inputMensagem : event.target.value})
    }
    
    onClickEnviarMensagem = () => {
        if (this.state.inputUsuario === '' && this.state.inputMensagem === '') {
            this.setState({mensagemErro: <ParagraphAlert>Ambos os campos estão vazio, impossivel enviar mensagem</ParagraphAlert>})
        }
        else if (this.state.inputUsuario === '') {
            this.setState({mensagemErro: <ParagraphAlert>Informe um nome de usuário</ParagraphAlert>})
        } else if (this.state.inputMensagem === ''){
            this.setState({mensagemErro: <ParagraphAlert>Mensagem em branco.</ParagraphAlert>})
        } else {
            const mensagem = {
                nome: this.state.inputUsuario,
                mensagem: this.state.inputMensagem
            }

            this.setState({
                mensagemErro: '',
                inputUsuario: '',
                inputMensagem: ''
            })

            this.props.enviar(mensagem)
        }
    }

    isKeyEnter = (event) => {
        if (event.key === 'Enter') {
            this.onClickEnviarMensagem()
        }
    }

    render() {
        return (
            <DivFlexColumn>
                {this.state.mensagemErro}
                <DivFlexRow>
                    <Input onKeyUp={this.isKeyEnter} value={this.state.inputUsuario} onChange={this.handleInputUsuario} placeholder="Usuário"/>
                    <InputMensagem onKeyUp={this.isKeyEnter} value={this.state.inputMensagem} onChange={this.handleInputMensagem} placeholder="Digite sua mensagem..."/>
                    <Botton onClick={this.onClickEnviarMensagem}>Enviar</Botton>
                </DivFlexRow>
            </DivFlexColumn>
        )
    }
}