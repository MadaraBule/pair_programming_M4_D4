import './App.css';
import WarningSign from './Components/WarningSign'
import 'bootstrap/dist/css/bootstrap.min.css';
import BadgeAsset from './Components/BadgeAsset'

function App() {
  return (
    <div>
   <WarningSign />
   <BadgeAsset color={'warning'} text={'hello'} />
   </div>
  );
}

export default App;