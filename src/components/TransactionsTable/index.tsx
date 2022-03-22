import { useEffect } from "react";
import { api } from "../../services/api";
import * as Styled from "./styles";

const TransactionsTable = () => {
  useEffect(() => {
    api.get("transactions").then((response) => console.log(response.data));
  }, []);

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
          <tr>
            <td>Desenvolvimento de Website</td>
            <td className="deposit">$12.000,00</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- $1.200,00</td>
            <td>Casa</td>
            <td>20/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Styled.Container>
  );
};

export { TransactionsTable };
