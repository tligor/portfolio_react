import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'
import { Descricao, BotaoTema, SidebarCont } from './styles'

type Props = {
  switchTheme: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarCont>
      <Avatar />
      <Title fontSize={20}>Igor Santana</Title>
      <Paragraph fontSize={16} type="secundario">
        tligor
      </Paragraph>
      <Descricao type="principal" fontSize={12}>
        Desenvolvedor Front-end React | Vue
      </Descricao>
      <BotaoTema onClick={props.switchTheme}>Trocar tema</BotaoTema>
    </SidebarCont>
  </aside>
)

export default Sidebar
