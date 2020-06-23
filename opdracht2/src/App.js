import React, {Component} from 'react';
import './App.css';
import Validation from './Component/Validation'
import Char from './Component/Char'


class App extends Component {
  state = {
    word: ''
  }

  changeHandler = (event) => {
    this.setState({word: event.target.value})
  }

  deleteHandler = (index) => {
    const text = this.state.word.split('')
    text.splice(index, 1)
    const updatedText = text.join('')
    this.setState({word: updatedText});
  }

  render(){
    const letters = this.state.word.split('').map((ch, index) => {
      return <Char
                character = {ch}
                key= {index}
                clicked = {() => this.deleteHandler(index)}
            />;
    })

  return (
    <div className="App">

      <p>When you fill in a word, the amount of letters will be counted and each letter of the word will be displayed.</p>
      <p>You can delete each letter by clicking on it.</p>
      <input type="text" onChange={(event) => this.changeHandler(event)} value={this.state.word} />
      <Validation 
      length={this.state.word.length}/>

      {letters}

    </div>
  );
}
}
export default App;
