import "./index.css";
import Sidebar from './components/Sidebar/Sidebar'
import Home from './components/Home/Home'
import About from './components/About/About'

function App() {
    return (
        <div className="App">
            <Sidebar/>
            <Home/>
            <About/>

        </div>
    );
}

export default App;
