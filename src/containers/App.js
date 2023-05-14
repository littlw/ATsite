import { Component } from 'react';
import './App.css';
import Navbar from '../components/Navbar/Navbar';
import 'tachyons';
import Questions from '../components/Questions/Questions';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

class App extends Component{
  constructor() {
    super() 
    this.state = {
      searchfield: '',
    }
  }


  render() {
    return( 
    <div>
      <Header />
      <Navbar />
      <Questions />
      <Footer />
    </div>
  )
}
}

export default App;
