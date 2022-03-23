import { FormEvent, useState } from "react";
import Modal from "react-modal";
import { api } from "../../services/api";

import * as Styled from "./styles";

import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";

interface NewTransactionModalProps {
  isOpen: boolean;
  onCloseTransactionModal: () => void;
}

const NewTransactionModal = ({
  isOpen,
  onCloseTransactionModal,
}: NewTransactionModalProps) => {
  const [type, setType] = useState("deposit");
  const [title, setTitle] = useState("");
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState("");

  const handleCreateNewTransaction = (e: FormEvent) => {
    e.preventDefault();

    const data = {
      title,
      value,
      category,
      type,
    };

    api.post("transactions", data);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCloseTransactionModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onCloseTransactionModal}
        className="react-modal-btn-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <Styled.Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        />

        <Styled.TransactionTypeContainer>
          <Styled.RadioBox
            type="button"
            onClick={() => setType("deposit")}
            isActive={type === "deposit"}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </Styled.RadioBox>

          <Styled.RadioBox
            type="button"
            onClick={() => setType("withdraw")}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </Styled.RadioBox>
        </Styled.TransactionTypeContainer>

        <input
          placeholder="Categoria"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </Styled.Container>
    </Modal>
  );
};

export { NewTransactionModal };
