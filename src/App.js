// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Sidenav1 from './Components/Sidenav1';
import MainContent from './Components/MainContent';
import Sidenav2 from './Components/Sidenav2';
import Footer from './Components/Footer';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
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

// export default App;

function App() {
  return (
    <div className='grid-container'>
      <Header />
      <Sidenav1 />
      <MainContent />
      <Sidenav2 />
      <Footer />
    </div>
  )
}

export default App;