import './App.css';
import FooterButton from './Components/FooterButton';
import Header from './Components/Header';
import HeaderButton from './Components/HeaderButton';
import TimerWindow from './Components/TimerWindow';

function App() {
  return (
    <div className='main'>
        <Header/>
        <div className='container'>
        <HeaderButton/>
        <TimerWindow/>
        <FooterButton/>
        </div>
    </div>
  );
}

export default App;
