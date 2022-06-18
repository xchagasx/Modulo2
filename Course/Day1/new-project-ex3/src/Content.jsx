import React from "react";

import '../src/Content.css'

const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
  ];
class Content extends React.Component {
    render() {
        return(
          <main>
            <div className="content">{conteudos.map((element) => (<div key={element.conteudo} className='card'>
                    <h4>{`O Conteudo é: ${element.conteudo}`}</h4>
                    <p>{`Status: ${element.status}`}</p>
                    <p>{`Bloco: ${element.bloco}`}</p>
                </div>
                    ))}
            </div>
          </main>
        );
    }
}

export default Content;