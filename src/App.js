import logo from './logo.svg';
import './App.css';
import Demo from './component/Demo';
import List from './component/List';
import Moose from './component/Moose';

function App() {
  return (
    <div className="App"> 
      <Moose></Moose>
      <Demo></Demo>
      <List></List>
    </div>
  );
}

export default App;