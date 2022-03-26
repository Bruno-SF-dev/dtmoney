import { useContext } from "react";
import { TransactionsListContext } from "../../contexts/transactionsListContext";

import * as Styled from "./styles";

const TransactionsTable = () => {
  const { transactionsList } = useContext(TransactionsListContext);

  return (
    <Styled.Container>
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
                {new Intl.DateTimeFormat("pt-BR").format(transaction.createdAt)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Styled.Container>
  );
};

export { TransactionsTable };
