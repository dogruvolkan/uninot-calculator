import "./App.css";
import Not from "./component/Not";
import ShowNot from "./component/ShowNot";
import { NotContextProvider } from "./context/NotContext";

function App() {
  return (
    <div className="App">
      <NotContextProvider>
        <Not />
        <ShowNot />
      </NotContextProvider>
    </div>
  );
}

export default App;
