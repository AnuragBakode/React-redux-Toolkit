import './App.css';
import { CakeView } from './app/features/cake/CakeView';
import { IcecreamView } from './app/features/icecream/Icecream';
import { User } from './app/features/user/User';


function App() {
  return (
    <div className="App">
      <CakeView/>
      <IcecreamView/>
      <User/>
    </div>
  );
}

export default App;
