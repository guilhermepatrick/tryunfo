import PropTypes from 'prop-types';
import React from 'react';
import Card from './Card';
import '../styles/CardList.css';

class CardList extends React.Component {
  constructor() {
    super();
    this.state = {
      searchValue: '',
      rareValue: 'todas',
      isDisable: false,
    };
  }

  handleSearchValue = (event) => {
    this.setState({ searchValue: event.target.value.toLowerCase() });
  };

  handleRareValue = (event) => {
    this.setState({ rareValue: event.target.value });
  };

  handleSuperTrunfo = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      isDisable: value,
      searchValue: '',
      rareValue: 'todas',
    });
  };

  render() {
    const { searchValue, rareValue, isDisable } = this.state;
    const { savedCards, handleRemove } = this.props;
    const cardList = savedCards;

    return (
      <div>
        <h1>Meu Baralho</h1>
        <section className="filterCard">
          <input
            onChange={ this.handleSearchValue }
            type="text"
            name="search"
            id="search"
            value={ searchValue }
            data-testid="name-filter"
            disabled={ isDisable }
            placeholder="Digite aqui o nome de uma carta"
          />
          <label htmlFor="raridade">
            Raridade
            <select
              data-testid="rare-filter"
              onChange={ this.handleRareValue }
              name="cardRare"
              disabled={ isDisable }
            >
              <option value="todas">todas</option>
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
            <label htmlFor="supertrunfo">
              SuperTrunfo
              <input
                data-testid="trunfo-filter"
                type="checkbox"
                name="supertrunfo"
                id="supertrunfo"
                onChange={ this.handleSuperTrunfo }
                value={ isDisable }
              />
            </label>
          </label>
        </section>
        {cardList
          .filter((actualCard) => actualCard.cardName.toLowerCase()
            .includes(searchValue))
          .filter((actualCard) => {
            if (isDisable) {
              return actualCard.cardTrunfo === true;
            }
            if (rareValue === 'todas') {
              return actualCard.cardName.toLowerCase()
                .includes(searchValue);
            }
            return actualCard.cardName.toLowerCase()
              .includes(searchValue) && actualCard.cardRare === rareValue;
          })
          .map((actualCard, index) => (
            <div key={ index }>
              <Card
                id={ actualCard.cardName }
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
                id={ actualCard.cardName }
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
  savedCards: PropTypes.arrayOf(PropTypes.shape({
    cardName: PropTypes.string,
    cardDescription: PropTypes.string,
    cardAttr1: PropTypes.string,
    cardAttr2: PropTypes.string,
    cardAttr3: PropTypes.string,
    cardImage: PropTypes.string,
    cardTrunfo: PropTypes.bool,
    cardRare: PropTypes.string,
  })),
  handleRemove: PropTypes.func,
};
CardList.defaultProps = {
  savedCards: '',
  handleRemove: '',
};

export default CardList;
