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

const ContentInput = styled(Input) `
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
        userInput: '',
        contentInput: '',
        errorMessage: ''
    }

    handleUserInput = (event) => {
        this.setState({userInput : event.target.value})
    }
    handleContentInput = (event) => {
        this.setState({contentInput : event.target.value})
    }
    
    onClickSendMessage = () => {
        let error = ''
        let user = this.state.userInput
        let content = this.state.contentInput

        if (user === '' && content === '') {
             error = 'Campo de usuário e mensagem estão vazio, impossível enviar a mensagem'
        } else if (user === '') {
            error = 'Informe um nome de usuário'
        } else if (content === ''){
            error = 'Compo de mensagem está vazio.'
        } else if (error === '') {
            const message = { nome: user, mensagem: content}
            this.props.enviar(message)

            this.setState({ userInput: '', contentInput: '', errorMessage: ''})
        } else {
            this.setState({errorMessage: error})
        }
    }

    isKeyEnter = (event) => {
        if (event.key === 'Enter') {
            this.onClickSendMessage()
        }
    }

    render() {
        return (
            <DivFlexColumn>
                <ParagraphAlert>{this.state.errorMessage}</ParagraphAlert>
                <DivFlexRow>
                    <Input 
                        onKeyUp={this.isKeyEnter} 
                        value={this.state.userInput} 
                        onChange={this.handleUserInput} 
                        placeholder="Usuário"
                    />
                    <ContentInput 
                        onKeyUp={this.isKeyEnter} 
                        value={this.state.contentInput} 
                        onChange={this.handleContentInput} 
                        placeholder="Digite sua mensagem..."
                    />
                    <Botton onClick={this.onClickSendMessage}>Enviar</Botton>
                </DivFlexRow>
            </DivFlexColumn>
        )
    }
}