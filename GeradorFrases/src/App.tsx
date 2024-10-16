import { useState } from 'react'
import './App.css'
import logoimg from './assets/logo.png'

function App() {
  const [textoFrase, setTextoFrase] = useState("")
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0)

  const allFrases = [
    {
      id: 1,
      nome: "Motivação",
      frases: [
        'Lute. Acredite. Conquiste. Perca. Deseje. Espere. Alcance. Invada. Caia. Seja tudo o quiser ser, mas, acima de tudo, seja você sempre.',
        'Desejar algo maior pra sua vida não significa que você está insatisfeito com o que tem.',
        'Lembre-se do seu passado com carinho. Afinal, é por causa dele que você está aqui hoje!',
        'A palavra “impossível” foi inventada para ser desafiada.',
        'Somos capazes de fazer muito mais do que imaginamos!',
        'Siga os bons e aprenda com eles',
        'O bom senso vale mais do que muito conhecimento',
        'Realize o óbvio, pense no improvável e conquiste o impossível',
        'Acredite em milagres mas não dependa deles',
        'A maior barreira para o sucesso é o medo do fracasso',
        'Deixe de lado as preocupações e seja feliz'
      ]
    },
    {
      id: 2,
      nome: "Bom dia",
      frases: [
        'Que seu dia seja leve e doce.Que traga amor, sorrisos e energia positiva.',
        'Olha o que temos aqui: um novo dia! É uma nova oportunidade para fazer coisas incríveis. ',
        'Um lindo dia, começando com café da manhã, música, boas energias, bom humor, pessoas de bem e gratidão.',
        'A capacidade de enxergar a beleza em cada amanhecer é um alimento que nos dá energia para o dia todo.',
        'Bom dia para aqueles que acordam com o coração cheio de esperança e a mente repleta de sonhos. ',
        'Que cada desafio seja superado com determinação e coragem neste novo dia e que a gratidão invada o seu coração. Bom dia, guerreiro!',
        'Hoje é um lindo dia para espalhar sorrisos, colher vitórias e desfrutar de tudo que é bom neste mundo. Tenha um bom dia! ',
        'Bom dia! Que Deus seja a sua fortaleza para este dia especial. '
      ]
    }
  ]

  function handleSwitchCategory(index: number){
    setCategoriaSelecionada(index)
  }

  function gerarFrase(){
    let numeroAleatorio = Math.floor(Math.random() * allFrases[categoriaSelecionada].frases.length)
    setTextoFrase(` "${allFrases[categoriaSelecionada].frases[numeroAleatorio]}"`)
  }

  return (
    <div className='container'>
      <img
        alt='Logo Frases'
        src={logoimg}
        className='logo'
      />

      <h2 className='title'>Categorias</h2>
      <section className='category-area'>
        {allFrases.map((item, index) => (
          <button
          key={item.id}
          className='category-button'
          style={{ 
            borderWidth: item.nome === allFrases[categoriaSelecionada].nome ? 2 : 0,
            borderColor: "#1fa4db"
           }}

           onClick={() => handleSwitchCategory(index)}
          >
            {item.nome}
          </button>
        ))}
      </section>

      <button className='button-frase' onClick={gerarFrase}>Gerar frase</button>

      {textoFrase !== '' && <p className='texto-frase'>{textoFrase} </p>}
    </div>
  )
}

export default App
