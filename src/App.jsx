import CardDescription from './components/CardDescription'
import CardHeader from './components/CardHeader'
import CardImage from './components/CardImage'
import CardTag from './components/CardTag'
import Finder from './components/Finder'
import PokemonCharacters from './components/PokemonCharacters'
import PokemonSlot from './components/PokemonSlot'
import TittleStat from './components/TittleStat'
import './styles.css'

function App() {
  
  /*Parte del titulo y numeral tiene un detalle*/
  /*Arreglar boton Finder*/
 
  return (
    <>
      <Finder></Finder>
      <CardHeader></CardHeader> 
      <div className="card">
        <CardImage></CardImage>
        <div className="poke-info">
          <CardTag></CardTag>
          <PokemonCharacters></PokemonCharacters>
          <CardDescription></CardDescription>
          <div className="base-stats">
            <TittleStat></TittleStat>
            <PokemonSlot></PokemonSlot>
          </div>
        </div>
      </div>
    </>
  )
}
export default App
