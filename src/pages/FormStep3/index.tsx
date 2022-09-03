import { Link, useHistory } from "react-router-dom";
import * as C from "./style";
import { useForm, FormActions } from "../../contexts/FormContext";
import { Theme } from "../../components/Theme";
import { ChangeEvent, useEffect } from "react";

export const FormStep3 = () => {
  const history = useHistory();
  const { state, dispatch } = useForm();

  useEffect(() => {
    state.name === ""
      ? history.push("/")
      : dispatch({
          type: FormActions.setCurrentStep,
          payload: 3,
        });
  }, []);

  const handleNextStep = () => {
    state.email !== "" && state.github !== ""
      ? console.log(state)
      : alert("Preencha os dados para finalizar!");
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value,
    });
  };

  const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setGithub,
      payload: e.target.value,
    });
  };

  return (
    <Theme>
      <C.Container>
        <p>Passo 3/3</p>
        <h1>Legal {state.name}, onde te encontramos?</h1>
        <p>Preencha seus dados para conseguirmos entrar em contato com você!</p>
        <hr />
        <label>
          Qual seu e-mail?
          <input
            type="email"
            value={state.email}
            onChange={handleEmailChange}
          />
        </label>

        <label>
          Qual seu GitHub?
          <input
            type="url"
            value={state.github}
            onChange={handleGithubChange}
          />
        </label>

        <Link to="/step2" className="backButton">
          Voltar
        </Link>
        <button onClick={handleNextStep}>Finalizar Cadastro</button>
      </C.Container>
    </Theme>
  );
};
