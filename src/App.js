import "./App.css";
import GlobalProvider from "./Context/GlobalState";
import Main from "./Components/Main";



function App() {

  return (
    <GlobalProvider>
      <Main/>
    </GlobalProvider>
  );
}

export default App;
