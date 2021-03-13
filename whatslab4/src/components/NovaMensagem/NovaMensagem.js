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
    
    isValidEntry = (user, content) => {
        if (user === '' && content === '') {
           return 'Campo de usuário e mensagem estão vazio, impossível enviar a mensagem'
       } else if (user === '') {
           return 'Informe um nome de usuário'
       } else if (content === ''){
           return 'Compo de mensagem está vazio.'
       } else { return true}
    }

    onClickSendMessage = () => {
        const user = this.state.userInput
        const content = this.state.contentInput
        const isValid = this.isValidEntry(user, content)

        if (isValid) {
            const message = { nome: user, mensagem: content}
            this.props.enviar(message)

            this.setState({ userInput: '', contentInput: '', isValidMessage: ''})
        } else {
            this.setState({errorMessage: isValid})
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
                <ParagraphAlert>{this.state.isValidMessage}</ParagraphAlert>
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