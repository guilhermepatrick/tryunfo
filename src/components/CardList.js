import PropTypes from 'prop-types';
import React from 'react';
import Card from './Card';

class CardList extends React.Component {
  constructor() {
    super();
    this.state = {
      searchValue: '',
    };
  }

  handleSearchValue = (event) => {
    this.setState({ searchValue: event.target.value.toLowerCase() });
  };

  render() {
    const { searchValue } = this.state;
    const { savedCards, handleRemove } = this.props;
    const cardList = savedCards;

    return (
      <div>
        <h1>Meu Baralho</h1>
        <input
          onChange={ this.handleSearchValue }
          type="text"
          name="search"
          id="search"
          value={ searchValue }
          data-testid="name-filter"
          placeholder="Digite aqui o nome de uma carta"
        />
        {cardList.filter((actualCard) => actualCard.cardName.toLowerCase()
          .includes(searchValue))
          .map((actualCard, index) => (
            <div key={ index }>
              <Card
                key={ actualCard.cardName }
                cardName={ actualCard.cardName }
                cardDescription={ actualCard.cardDescription }
                cardAttr1={ actualCard.cardAttr1 }
                cardAttr2={ actualCard.cardAttr2 }
                cardAttr3={ actualCard.cardAttr3 }
                cardImage={ actualCard.cardImage }
                cardRare={ actualCard.cardRare }
                cardTrunfo={ actualCard.cardTrunfo }
              />
              <button
                data-testid="delete-button"
                type="button"
                onClick={ handleRemove }
              >
                Remover Carta
              </button>
            </div>
          ))}
      </div>
    );
  }
}
CardList.propTypes = {
  savedCards: PropTypes.string,
  handleRemove: PropTypes.func,
};
CardList.defaultProps = {
  savedCards: '',
  handleRemove: '',
};

export default CardList;
