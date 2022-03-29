import { useContext } from "react";
import { TransactionsListContext } from "../../contexts/transactionsListContext";

import * as Styled from "./styles";

import trashIcon from "../../assets/trash.svg";

const TransactionsTable = () => {
  const { transactionsList, removeTransaction } = useContext(
    TransactionsListContext,
  );

  const handleRemoveTransaction = (transactionId: string) => {
    removeTransaction(transactionId);
  };

  return (
    <Styled.Container>
      {transactionsList.length === 0 && (
        <p>Você ainda não inseriu nenhuma transação.</p>
      )}

      {transactionsList.length > 0 && (
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
                    onClick={() => handleRemoveTransaction(transaction.id)}
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
    </Styled.Container>
  );
};

export { TransactionsTable };
