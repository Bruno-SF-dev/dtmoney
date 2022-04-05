import { useContext, useEffect, useState } from "react";
import { TransactionsListContext } from "../../contexts/transactionsListContext";

import * as Styled from "./styles";

import trashIcon from "../../assets/trash.svg";
import { RemoveTransactionModal } from "../RemoveTransactionModal";
import { Loader } from "../Loading";

interface Transaction {
  id: string;
  title: string;
  amount: number;
  category: string;
  type: string;
  createdAt: number;
}

const TransactionsTable = () => {
  const { transactionsList, transactionsListIsLoading } = useContext(
    TransactionsListContext,
  );
  const [transactionId, setTransactionId] = useState("");

  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);
  const [transactionSelected, setTransactionSelected] = useState(
    {} as Transaction,
  );

  const handleOpenRemoveModal = (id: string) => {
    setTransactionId(id);
    setIsRemoveModalOpen(true);
  };

  useEffect(() => {
    const transacionFound = transactionsList.find(
      (transaction) => transaction.id === transactionId,
    );

    if (transacionFound) setTransactionSelected(transacionFound);
  }, [transactionId]);

  const handleCloseRemoveModal = () => {
    setIsRemoveModalOpen(false);
  };

  return (
    <Styled.Container>
      {transactionsListIsLoading && <Loader />}

      {!transactionsListIsLoading && transactionsList.length === 0 && (
        <p>Você ainda não inseriu nenhuma transação.</p>
      )}

      {!transactionsListIsLoading && transactionsList.length > 0 && (
        <table>
          <thead>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </thead>

          <tbody>
            {transactionsList.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(transaction.amount)}
                </td>
                <td>{transaction.category}</td>
                <td>
                  <span>
                    {new Intl.DateTimeFormat("pt-BR").format(
                      transaction.createdAt,
                    )}
                  </span>
                  <button
                    title="Remover Transação"
                    onClick={() => handleOpenRemoveModal(transaction.id)}
                  >
                    <img
                      src={trashIcon}
                      alt="Lixeira (Remover Transação)"
                      draggable="false"
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <RemoveTransactionModal
        isOpen={isRemoveModalOpen}
        onCloseRemoveModal={handleCloseRemoveModal}
        transactionId={transactionId}
        transactionSelected={transactionSelected}
      />
    </Styled.Container>
  );
};

export { TransactionsTable };
