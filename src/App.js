import "./index.css";
import Sidebar from './components/Sidebar/Sidebar'
import Home from './components/Home/Home'
import About from './components/About/About'
import WorkEx from "./components/WorkExpi/WorkEx";
import Skills from "./components/Skills/Skills";

function App() {
    return (
        <div className="App">
            <Sidebar/>
            <Home/>
            <About/>
        {/* <WorkEx/> */}
        <Skills/>
        </div>
    );
}

export default App;
