import { FormEvent, useContext, useState } from "react";
import Modal from "react-modal";
import { TransactionsListContext } from "../../contexts/transactionsListContext";

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
  const { createTransaction } = useContext(TransactionsListContext);

  const [type, setType] = useState("deposit");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const handleCreateNewTransaction = async (e: FormEvent) => {
    e.preventDefault();

    await createTransaction({
      title,
      amount: Number(amount),
      category,
      type,
      createdAt: Date.now(),
    });

    setType("deposit");
    setTitle("");
    setAmount("");
    setCategory("");
    onCloseTransactionModal();
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
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
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

        <button type="submit" className="btn-submit">
          Cadastrar
        </button>
      </Styled.Container>
    </Modal>
  );
};

export { NewTransactionModal };
