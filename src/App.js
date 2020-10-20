import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Footer from './components/Footer';

import './App.css';

function App() {
  const [pages] = useState(["about me", "portfolio", "contact", "resume"]);
  const [pageSelected, setPageSelected] = useState(pages[0]);

  return (
    <div id="html">
      <Header pageSelected={pageSelected}
        setPageSelected={setPageSelected} />
      <main className="light-blue darken-3 white-text">
        {(pageSelected === "about me") && <About />}
        {(pageSelected === "portfolio") && <Portfolio />}
        {(pageSelected === "contact") && <Contact />}
        {(pageSelected === "resume") && <Resume />}
      </main>
      <Footer>
        
      </Footer>
    </div>
  );
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload......

//           Marlon Guandique is the best.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
