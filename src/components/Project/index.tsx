import Paragraph from '../Paragraph'
import Title from '../Title'
import { Card, LinkBotao } from './styles'

const Project = () => {
  return (
    <div>
      <Title>Projeto Lista de Tarefas</Title>
      <Paragraph type="secundario">
        Listas de tarefas feitas com VueJS
      </Paragraph>
      <LinkBotao>Visualizar</LinkBotao>
    </div>
  )
}

export default Project
