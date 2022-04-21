import './App.css';
import WarningSign from './Components/WarningSign'
import 'bootstrap/dist/css/bootstrap.min.css'
import BadgeAsset from './Components/BadgeAsset'
import TheOneBook from './Components/TheOneBook'
import horror from './data/horror.json'
import TheManyBooks from './Components/TheManyBooks';

function App() {
  return (
    <div className='centerPlz'>
      <WarningSign text="Hello hello" />
      <BadgeAsset text="hello" color="warning" />
      <TheOneBook book={horror[0]} />
      <TheManyBooks books={horror} />
    </div>
  )
}

export default App;