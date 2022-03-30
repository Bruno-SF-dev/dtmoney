import { useContext } from "react";
import Modal from "react-modal";
import { TransactionsListContext } from "../../contexts/transactionsListContext";

import * as Styled from "./styles";

import closeImg from "../../assets/close.svg";

interface Transaction {
  id: string;
  title: string;
  amount: number;
  category: string;
  type: string;
  createdAt: number;
}

interface RemoveTransactionModalProps {
  isOpen: boolean;
  onCloseRemoveModal: () => void;
  transactionId: string;
  transactionSelected: Transaction;
}

export function RemoveTransactionModal({
  isOpen,
  onCloseRemoveModal,
  transactionId,
  transactionSelected,
}: RemoveTransactionModalProps) {
  const { removeTransaction } = useContext(TransactionsListContext);

  const handleRemoveTransaction = () => {
    removeTransaction(transactionId);
    onCloseRemoveModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCloseRemoveModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onCloseRemoveModal}
        className="react-modal-btn-close"
      >
        <img src={closeImg} alt="Fechar modal" draggable="false" />
      </button>

      <Styled.Container>
        <h2>Remover Transação</h2>
        <p>
          Deseja remover <span>{transactionSelected.title}</span> das suas
          transações?
        </p>
        <div className="actions-wrapper">
          <button onClick={onCloseRemoveModal}>Cancelar</button>
          <button onClick={handleRemoveTransaction} className="btn-danger">
            Confirmar
          </button>
        </div>
      </Styled.Container>
    </Modal>
  );
}
