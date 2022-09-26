import React from 'react';
import '../styles/Form.css';

class Form extends React.Component {
  render() {
    return (
      <section className="card">
        <label htmlFor="name">
          Nome da Carta
          <input data-testid="name-input" type="text" name="name" id="name" />
        </label>
        <label htmlFor="description">
          Descrição
          <textarea
            data-testid="description-input"
            name="description"
            id="description"
          />
        </label>
        <label htmlFor="atributo01">
          Atributo 01
          <input
            data-testid="attr1-input"
            type="number"
            name="atributo01"
            id="atributo01"
          />
        </label>
        <label htmlFor="atributo02">
          Atributo 02
          <input
            data-testid="attr2-input"
            type="number"
            name="atributo02"
            id="atributo02"
          />
        </label>
        <label htmlFor="atributo03">
          Atributo 03
          <input
            data-testid="attr3-input"
            type="number"
            name="atributo03"
            id="atributo03"
          />
        </label>
        <label htmlFor="imagemURL">
          URL da Imagem
          <input
            data-testid="image-input"
            type="text"
            name="imagemURL"
            id="imagemURL"
          />
        </label>
        <label htmlFor="raridade">
          Raridade
          <select data-testid="rare-input">
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option selected value="muito raro">
              Muito Raro
            </option>
          </select>
        </label>
        <label htmlFor="supertrunfo">
          SuperTrunfo
          <input
            data-testid="trunfo-input"
            type="checkbox"
            name="supertrunfo"
            id="supertrunfo"
          />
        </label>
        <button type="button" data-testid="save-button">Salvar</button>
      </section>
    );
  }
}
export default Form;
