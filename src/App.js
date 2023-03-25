import "./App.css";
import FooterButton from "./Components/FooterButton";
import Header from "./Components/Header";
import HeaderButton from "./Components/HeaderButton";
import TimerWindow from "./Components/TimerWindow";
import GlobalProvider from "./Context/GlobalState";
import Modal from "./Components/Modal";



function App() {

  return (
    <GlobalProvider>
      <div className="main">
        <Header />
        <div className="container">
          <HeaderButton />
          <TimerWindow />
          <FooterButton />
          <Modal/>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
