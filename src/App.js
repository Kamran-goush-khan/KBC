import { useDispatch, useSelector } from 'react-redux';
import OpeningImage from './components/UserInterface/OpeningImage';
import Question from './components/UserInterface/Question';
import { authSliceAction } from './store/slice/authSlice';
import Prize from './components/prize/prize';
import Restart from './components/help/Restart';
import Header from './components/help/Header';

function App() {
  const showLogo = useSelector((state) => state.auth.isLoggedIn);
  const win = useSelector((state) => state.auth.isWin);

  return (
    <div>
      {!showLogo && !win && <OpeningImage />}
      {showLogo && !win && <Header />}
      {showLogo && !win && <Prize />}
      {showLogo && !win && <Question />}
      {showLogo && win && <Restart />}
    </div>
  );
}

export default App;
