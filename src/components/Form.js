import PropTypes from 'prop-types';
import React from 'react';
import '../styles/Form.css';

class Form extends React.Component {
  render() {
    const state = this.props;
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      onInputChange,
      cardTrunfo,
      cardRare,
      validateForm,
      onSaveButtonClick,
    } = state;

    return (
      <section className="card">
        <label htmlFor="cardName">
          Nome da Carta
          <input
            data-testid="name-input"
            type="text"
            name="cardName"
            id="cardName"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="cardDescription">
          Descrição
          <textarea
            data-testid="description-input"
            name="cardDescription"
            id="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="atributo01">
          Atributo 01
          <input
            data-testid="attr1-input"
            type="number"
            name="cardAttr1"
            max={ 90 }
            id="cardAttr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="cardAttr2">
          Atributo 02
          <input
            data-testid="attr2-input"
            type="number"
            name="cardAttr2"
            id="cardAttr2"
            max={ 90 }
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="atributo03">
          Atributo 03
          <input
            data-testid="attr3-input"
            type="number"
            name="cardAttr3"
            id="cardAttr3"
            max={ 90 }
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="cardImage">
          URL da Imagem
          <input
            data-testid="image-input"
            type="text"
            name="cardImage"
            id="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="raridade">
          Raridade
          <select
            data-testid="rare-input"
            onChange={ onInputChange }
            name="cardRare"
            value={ cardRare }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option defaultValue="muitoRaro">muito raro</option>
          </select>
        </label>
        <label htmlFor="cardTrunfo">
          SuperTrunfo
          <input
            data-testid="trunfo-input"
            type="checkbox"
            name="cardTrunfo"
            id="cardTrunfo"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>
        <button
          type="button"
          data-testid="save-button"
          disabled={ !validateForm() }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </section>
    );
  }
}
Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  onInputChange: PropTypes.func,
  cardTrunfo: PropTypes.bool,
  cardRare: PropTypes.string,
  validateForm: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
};
Form.defaultProps = {
  cardName: 'Guizao',
  cardDescription: 'Muito forte, porem muito lento',
  cardAttr1: '3',
  cardAttr2: '10',
  cardAttr3: '11',
  cardImage: 'url qualquer',
  onInputChange: 'PropTypes.string',
  cardTrunfo: '',
  cardRare: '',
  validateForm: '',
  onSaveButtonClick: '',

};
export default Form;
