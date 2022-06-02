import './Home.css'
import Baseboard from '../../components/footer/Baseboard'
import NavBar from '../../components/header/NavBar'
import BackgroundHome from '../../components/header/VideoBg'
import CardList from '../../components/Cards/CardList'
import FormContact from '../../components/forms/FormContact'
import { MdTitle } from 'react-icons/md'

function Home() {

  return (
    <div>
      <NavBar/>
      <BackgroundHome />
      <CardList />
      <FormContact title='testeeee' />
      <hr></hr>
      <Baseboard />
    </div>
  )
}

export default Home
