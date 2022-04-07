import React from 'react'
import Header from "./components/Header"
import Main from './components/Main';
import Data from './Data'

function App() {
    return (
        <div className="app-container">
            <Header />
            <Main
                {...Data}
            />
        </div>
    );
}

export default App;