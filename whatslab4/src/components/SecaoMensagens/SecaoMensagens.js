import React from 'react'
import styled from 'styled-components'
import NovaMensagem from '../NovaMensagem/NovaMensagem'

const Principal = styled.div`
    display:flex;
    justify-content:space-between;
    flex-direction:column;
    max-width: 600px;
    margin: 0 auto;
    border: 1px solid black;
    height:98vh;
`;

const MensagemPrincipal = styled.div`
    display:flex;
    height:100%;
    flex-direction:column;
    justify-content:flex-end;
`;

const Mensagem =styled.div`
    margin-top:10px;
    padding: 10px;
`;

export default class SecaoMensagens extends React.Component {

    state = {
        mensagens: [
            {
                nome:"josé isaac", 
                mensagem: "Eai clan"
            },
            {
                nome:"josé isaac", 
                mensagem: "Eai mano"
            }
        ]
    }
    
    
    enviarMensagem = (mensagem) =>{

        const novasMensagems = [...this.state.mensagens ,mensagem]

        this.setState({mensagens:novasMensagems});
    }
    
    isDblClick = (indexExcluido) =>{
        const mensagens = this.state.mensagens.filter((_, index) => {
            return index !== indexExcluido
        })

        this.setState({mensagens: mensagens})
    }
    render() {
        
        let mensagens;
        
        mensagens = this.state.mensagens.map((mensagem, index) =>{
            return(
                <Mensagem 
                    onDoubleClick={() => {this.isDblClick(index)}}
                    key={mensagem.mensagem}
                >
                    <strong>{mensagem.nome}</strong> {mensagem.mensagem}
                </Mensagem>
            );
        })


        return (
            <Principal>
                <MensagemPrincipal>
                    {mensagens}                    
                </MensagemPrincipal>
                
                <NovaMensagem 
                    enviar ={this.enviarMensagem}
                />
            </Principal>
        )
    }
}
