
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './component/Product';
import Footer from './component/Footer';
import Header from './component/Header';
import { useState } from 'react';

function App() {
  const [profil,setprofil] = useState({fullName:"Lynda_Store" , date:" Since 2017" ,
actualité:" 'Venez découvrir nos promotions à l'occasion de notre 6ème anniversaire' " })
  return (
    <div className="App" style={{ 
      backgroundImage: `url("https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000")`, height:"2000px"}} >
      <Header/>
      <center>
      <h1> {profil.fullName}</h1>
      <h4>{profil.date}</h4>
      <h1 className='actu'>{profil.actualité}</h1>
      </center>
      <Product/>
    </div>
  );
}

export default App;
