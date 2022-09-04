import { useHistory } from "react-router-dom";
import * as C from "./style";
import { useForm, FormActions } from "../../contexts/FormContext";
import { Theme } from "../../components/Theme";
import React, { ChangeEvent, useEffect } from "react";
import Swal from 'sweetalert2';

export const FormStep1 = () => {
  const history = useHistory();
  const { state, dispatch } = useForm();

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1,
    });
  },[]);

  const handleNextStep = () => {
    state.name !== "" ? history.push("/step2") : 
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Preencha seu nome!',
    });
  };

  const handleKeyPress = (e: any) => {
    if(e.key === 'Enter'){
      handleNextStep();
    }
  }

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setName,
      payload: e.target.value,
    });
  };

  return (
    <Theme>
      <C.Container>
        <p>Passo 1/4</p>
        <h1>Vamos começar com o seu nome</h1>
        <p>Preencha o campo abaixo com o seu nome.</p>
        <hr />
        <label>
          Digite seu nome
          <input
            type="text"
            autoFocus
            value={state.name}
            onChange={handleChangeName}
            onKeyPress={handleKeyPress}
          />
        </label>

        <button onClick={handleNextStep}>Próximo</button>
      </C.Container>
    </Theme>
  );
};
