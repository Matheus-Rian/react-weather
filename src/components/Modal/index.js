import ReactDOM from 'react-dom';

import { Overlay, Container, Footer } from './styles';

export default function Modal({ title, onBack }) {
  return ReactDOM.createPortal(
    <Overlay>
      <Container>
        <h1>{title}</h1>
        <p>
          Por favor, tente mais tarde!
        </p>

        <Footer>
          <button type="button" className="back-button" onClick={onBack}>
            Voltar ao Home
          </button>
        </Footer>
      </Container>
    </Overlay>,
    document.getElementById('modal-root'),
  );
}
