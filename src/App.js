import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import './styles/Form.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      savedCards: [],
    };
  }

  validateForm = () => {
    const { cardName, cardImage, cardDescription,
      cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const attrMax = 90;
    const somaMax = 210;
    const verificaName = cardName.length > 0;
    const verificaImg = cardImage.length > 0;
    const verificaCardDescription = cardDescription.length > 0;
    const verificaAttr1 = cardAttr1 > attrMax || cardAttr1 < 0;
    const verificaAttr2 = cardAttr2 > attrMax || cardAttr2 < 0;
    const verificaAttr3 = cardAttr3 > attrMax || cardAttr3 < 0;
    const veriSomaMax = parseInt(cardAttr1, 10)
    + parseInt(cardAttr2, 10)
    + parseInt(cardAttr3, 10) > somaMax;
    return (verificaName
      && verificaImg
      && verificaCardDescription
      && !verificaAttr1
      && !verificaAttr2
      && !verificaAttr3
      && !veriSomaMax);
  };

  onInputChange = (event) => {
    const { name, type, checked } = event.target;
    const value = type === 'checkbox' ? checked : event.target.value;
    this.setState({ [name]: value });
  };

  onSaveButtonClick = () => {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, savedCards } = this.state;
    const actualCard = { cardName };
    actualCard.cardName = cardName;
    actualCard.cardDescription = cardDescription;
    actualCard.cardAttr1 = cardAttr1;
    actualCard.cardAttr2 = cardAttr2;
    actualCard.cardAttr3 = cardAttr3;
    actualCard.cardImage = cardImage;
    actualCard.cardRare = cardRare;
    actualCard.cardTrunfo = cardTrunfo;
    savedCards.push(actualCard);
    console.log(savedCards);
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
    });
  };

  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, isSaveButtonDisabled } = this.state;
    return (
      <div className="content">
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
          validateForm={ this.validateForm }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
