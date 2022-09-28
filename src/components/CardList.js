import PropTypes from 'prop-types';
import React from 'react';
import Card from './Card';

class CardList extends React.Component {
  render() {
    const { savedCards } = this.props;
    const cardList = savedCards;

    return (
      <div>
        <h1>Meu Baralho</h1>
        {cardList.map((actualCard) => (
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
        ))}
      </div>
    );
  }
}
CardList.propTypes = {
  savedCards: PropTypes.string,
};
CardList.defaultProps = {
  savedCards: '',
};

export default CardList;
