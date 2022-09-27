import PropTypes from 'prop-types';
import React from 'react';

class Card extends React.Component {
  cardTrunfoIsTrue = (cardTrunfo) => {
    if (cardTrunfo) {
      return <span data-testid="trunfo-card">Super Trunfo </span>;
    }
  };

  render() {
    const { cardName, cardImage, cardDescription,
      cardAttr1, cardAttr2, cardAttr3,
      cardRare, cardTrunfo } = this.props;

    return (
      <div className="card">
        <span data-testid="name-card">{cardName}</span>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <span data-testid="description-card">{cardDescription}</span>
        <span data-testid="attr1-card">{cardAttr1}</span>
        <span data-testid="attr2-card">{cardAttr2}</span>
        <span data-testid="attr3-card">{cardAttr3}</span>
        <span data-testid="rare-card">{cardRare}</span>
        {this.cardTrunfoIsTrue(cardTrunfo)}
      </div>
    );
  }
}
Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  cardRare: PropTypes.string,

};
Card.defaultProps = {
  cardName: 'Guizao',
  cardDescription: 'Muito forte, porem muito lento',
  cardAttr1: '3',
  cardAttr2: '10',
  cardAttr3: '11',
  cardImage: 'url qualquer',
  cardTrunfo: 'SUPER TRUNFO',
  cardRare: 'Muito Raro',
};

export default Card;
