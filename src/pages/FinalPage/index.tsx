import { Link, useHistory } from "react-router-dom";
import * as C from "./style";
import { useForm, FormActions } from "../../contexts/FormContext";
import { Theme } from "../../components/Theme";
import { useEffect } from "react";
import Swal from 'sweetalert2';


export const FinalPage = () => {
  const history = useHistory();
  const { state, dispatch } = useForm();

  useEffect(() => {
    state.name === ""
      ? history.push("/")
      : dispatch({
          type: FormActions.setCurrentStep,
          payload: 4,
        });
  }, []);

  const handleNextStep = () => {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Suas informações foram salvas. Obrigada por realizar o cadastro! 💖',
      showConfirmButton: false,
      timer: 2000
    })
  };

  return (
    <Theme>
      <C.Container>
        <p>Passo 4/4</p>
        <h1>{state.name}, confira seu dados</h1>
        <p>Confira se suas informações estão corretas e confirme!</p>

        <hr />

        <div>
          <p>Nome:</p>
          <h4>{state.name}</h4>
        </div>

        <div>
          <p>Nível:</p>
          <h4>
            {state.level === 0
              ? "👶 Sou iniciante"
              : "😎 Programo há mais de 2 anos"}
          </h4>
        </div>
        <div>
          <p>E-mail:</p>
          <h4>{state.email}</h4>
        </div>
        <div>
          <p>GitHub:</p>
          <h4>{state.github}</h4>
        </div>
        <Link to="/step3" className="backButton">
          Voltar
        </Link>
        <button onClick={handleNextStep}>Confirmar Informações</button>
      </C.Container>
    </Theme>
  );
};
