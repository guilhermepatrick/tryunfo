import React from 'react';
import Card from './components/Card';
import CardList from './components/CardList';
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
      isSuperTrunfoDisabled: false,
    };
  }

  validateForm = () => {
    const {
      cardName,
      cardImage,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;
    const AttrMax = 90;
    const somaMax = 210;
    const arr = [cardName, cardImage, cardDescription];
    const arrAttr = [cardAttr1, cardAttr2, cardAttr3];
    const verificaSoma = parseInt(cardAttr1, 10)
        + parseInt(cardAttr2, 10)
        + parseInt(cardAttr3, 10)
      <= somaMax;
    const verificaAttr = arrAttr.every(
      (element) => element >= 0 && element <= AttrMax,
    );
    const verificaTamanho = arr.every((element) => element.length > 0);
    if (verificaTamanho && verificaAttr && verificaSoma) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  };

  validateSuperTrunfo = () => {
    const { savedCards } = this.state;
    const verificacao = savedCards.filter(
      (actualCard) => actualCard.cardTrunfo === true,
    );
    if (verificacao.length > 0) {
      this.setState({ isSuperTrunfoDisabled: true });
    }
  };

  onInputChange = (event) => {
    const { name, type, checked } = event.target;
    const value = type === 'checkbox' ? checked : event.target.value;
    this.setState({ [name]: value }, this.validateForm);
  };

  onSaveButtonClick = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      savedCards,
    } = this.state;
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
      cardTrunfo: false,
      isSaveButtonDisabled: false,
    });
    this.validateSuperTrunfo();
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      isSuperTrunfoDisabled,
      savedCards,
    } = this.state;
    return (
      <div>
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
            isSuperTrunfoDisabled={ isSuperTrunfoDisabled }
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
        <CardList savedCards={ savedCards } />
      </div>
    );
  }
}

export default App;
