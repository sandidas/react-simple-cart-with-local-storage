import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';


function App() {
  return (
    <div>
      <Header></Header>
      <div className='max-w-screen-xl mx-auto'>
        <Shop></Shop>
      </div>
      

    </div>
  );
}

export default App;
