import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'
import { GithubSecao } from './styles'

const About = () => (
  <section>
    <Title fontSize={16}>Sobre</Title>
    <Paragraph type="secundario">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat optio
      officia fugit obcaecati beatae, quidem laudantium quis deleniti!
      Reprehenderit rerum ea molestiae tenetur accusantium a amet asperiores
      voluptatem voluptatum vel.
    </Paragraph>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=tligor&show_icons=true&theme=dracula&include_all_commits=true&count_private=false" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=tligor&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default About
