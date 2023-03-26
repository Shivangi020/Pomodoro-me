import "./App.css";
import FooterButton from "./Components/FooterButton";
import Header from "./Components/Header";
import HeaderButton from "./Components/HeaderButton";
import TimerWindow from "./Components/TimerWindow";
import GlobalProvider, { GlobalContext } from "./Context/GlobalState";
import Modal from "./Components/Modal";
import { useContext, useEffect } from "react";
import Main from "./Components/Main";



function App() {
  // const {theme} = useContext(GlobalContext)
  // const {dark,light} = theme

  // useEffect(()=>{
  //   console.log(1)
  //   console.log(dark,light)
  //   const root = document.documentElement;
  //   root.style.setProperty('--dark', dark);
  //   root.style.setProperty('--light', light);
  // },[theme.dark,theme.light])

  return (
    <GlobalProvider>
      {/* <div className="main">
        <Header />
        <div className="container">
          <HeaderButton />
          <TimerWindow />
          <FooterButton />
          <Modal/>
        </div>
      </div> */}
      <Main/>
    </GlobalProvider>
  );
}

export default App;
