import { useContext } from "react";
import { TransactionsListContext } from "../../contexts/transactionsListContext";

import * as Styled from "./styles";

import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";

const Summary = () => {
  const { transactionsList, transactionsListIsLoading } = useContext(
    TransactionsListContext,
  );

  const summary = transactionsList.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      }

      if (transaction.type === "withdraw") {
        acc.withdraws += transaction.amount;
        acc.total -= transaction.amount;
      }

      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    },
  );

  if (transactionsListIsLoading) {
    return null;
  }

  return (
    <Styled.Container>
      <Styled.SummaryCard>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" draggable="false" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.deposits)}
        </strong>
      </Styled.SummaryCard>

      <Styled.SummaryCard>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" draggable="false" />
        </header>
        <strong>
          -
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.withdraws)}
        </strong>
      </Styled.SummaryCard>

      <Styled.SummaryCard
        className="highlight-background"
        isNegative={summary.total < 0}
      >
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" draggable="false" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.total)}
        </strong>
      </Styled.SummaryCard>
    </Styled.Container>
  );
};

export { Summary };
