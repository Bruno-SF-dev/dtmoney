import { FormEvent, useContext, useState } from "react";
import Modal from "react-modal";
import { TransactionsListContext } from "../../contexts/transactionsListContext";

import * as Styled from "./styles";

import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { SubmitButton } from "../SubmitButton";

interface NewTransactionModalProps {
  isOpen: boolean;
  onCloseNewTransactionModal: () => void;
}

function onlyNumbers(value: string) {
  return value.replace(/\D/g, "");
}

const NewTransactionModal = ({
  isOpen,
  onCloseNewTransactionModal,
}: NewTransactionModalProps) => {
  const { createTransaction } = useContext(TransactionsListContext);

  const [type, setType] = useState("deposit");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [hasError, setHasError] = useState(false);

  const handleCreateNewTransaction = async (e: FormEvent) => {
    e.preventDefault();
    setHasError(false);

    if (!type.trim() || !title.trim() || !amount.trim() || !category.trim()) {
      setHasError(true);
      return;
    }

    // divide por 100 para considerar as casas decimais
    const amountFormatted = Number(onlyNumbers(amount)) / 100;

    await createTransaction({
      title,
      amount: amountFormatted,
      category,
      type,
      createdAt: Date.now(),
    });

    setHasError(false);
    setType("deposit");
    setTitle("");
    setAmount("");
    setCategory("");
    onCloseNewTransactionModal();
  };

  function handleChangeCurrencyField(e: FormEvent<HTMLInputElement>) {
    let value = e.currentTarget.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d)(\d{2})$/, "$1,$2");
    value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");

    e.currentTarget.value = value;
    setAmount(value);
    return e;
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCloseNewTransactionModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onCloseNewTransactionModal}
        className="react-modal-btn-close"
      >
        <img src={closeImg} alt="Fechar modal" draggable="false" />
      </button>

      <Styled.Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>
        {hasError && <p className="alert-message">Preencha todos os campos</p>}

        <input
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="Valor"
          value={amount}
          onChange={handleChangeCurrencyField}
        />

        <Styled.TransactionTypeContainer>
          <Styled.RadioBox
            type="button"
            onClick={() => setType("deposit")}
            isActive={type === "deposit"}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" draggable="false" />
            <span>Entrada</span>
          </Styled.RadioBox>

          <Styled.RadioBox
            type="button"
            onClick={() => setType("withdraw")}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" draggable="false" />
            <span>Saída</span>
          </Styled.RadioBox>
        </Styled.TransactionTypeContainer>

        <input
          placeholder="Categoria"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <SubmitButton>Cadastrar</SubmitButton>
      </Styled.Container>
    </Modal>
  );
};

export { NewTransactionModal };
