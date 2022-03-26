import { useContext } from "react";
import { TransactionsListContext } from "../../contexts/transactionsListContext";

import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";
import * as Styled from "./styles";

const Dashboard = () => {
  return (
    <Styled.Container>
      <Summary />
      <TransactionsTable />
    </Styled.Container>
  );
};

export { Dashboard };
