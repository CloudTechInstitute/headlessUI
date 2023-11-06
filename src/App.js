import "./App.css";
import MyList from "./components/list";
import MyModal from "./components/modal";
import MyTab from "./components/tabs";

function App() {
  return (
    <div className="App">
      <div className="p-2 z-30">
        <MyTab />
      </div>
      <div className="p-2 z-20">
        <MyList />
      </div>
      <div className="p-2 z-10">
        <MyModal />
      </div>
    </div>
  );
}

export default App;
