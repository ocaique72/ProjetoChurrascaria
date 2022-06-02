import React from "react";

function FormContact(props) {
  return (
    <form>
      <div>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        <div>
          <label htmlFor=""></label>
          <imput type="text" placeholder='Digite seu nome...'></imput>
        </div>

        <div>
          <label htmlFor=""></label>
          <imput type="email" placeholder='Digite seu email...'></imput>
        </div>

        <div>
          <label htmlFor=""></label>
          <imput type="text" placeholder='Digite seu telefone'></imput>
        </div>

        <div>
          <label htmlFor=""></label>
          <imput type="text" placeholder='Digite sua mensagem'></imput>
        </div>

        {/* ------IMPORTAR BUTTON--------- */}

        <div>
          <input type="submit" value="" />
        </div>
      </div>
    </form>
  );
}

export default FormContact 
