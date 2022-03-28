import { onValue, push, ref, set } from "firebase/database";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { database } from "../services/firebase";
import { AuthContext } from "./authContext";

interface TransactionsListProviderProps {
  children: ReactNode;
}

interface TransactionData {
  title: string;
  amount: number;
  category: string;
  type: string;
  createdAt: number;
}

interface Transaction {
  id: string;
  title: string;
  amount: number;
  category: string;
  type: string;
  createdAt: number;
}

type FirebaseTransactionsObj = Record<
  string,
  {
    title: string;
    amount: number;
    category: string;
    type: string;
    createdAt: number;
  }
>;

interface TransactionContextData {
  transactionsList: Transaction[];
  createTransaction: (transactionData: TransactionData) => Promise<void>;
}

export const TransactionsListContext = createContext<TransactionContextData>(
  {} as TransactionContextData,
);

export function TransactionsListProvider({
  children,
}: TransactionsListProviderProps) {
  const { user } = useContext(AuthContext);
  const [transactionsList, setTransactionsList] = useState<Transaction[]>([]);

  useEffect(() => {
    const transactionsRef = ref(database, `transactions/${user.id}`);

    console.log("transactionsRef", transactionsRef);

    onValue(transactionsRef, (transactions) => {
      const transactionsObj: FirebaseTransactionsObj = transactions.val() || {};

      console.log("transactions", transactions);
      console.log("transactionsObj", transactionsObj);

      const parsedTransactions = Object.entries(transactionsObj).map(
        ([key, value]) => {
          return {
            id: key,
            title: value.title,
            amount: value.amount,
            category: value.category,
            type: value.type,
            createdAt: value.createdAt,
          };
        },
      );

      setTransactionsList(parsedTransactions);
    });
  }, []);

  const createTransaction = async (transactionData: TransactionData) => {
    const transactionsRef = ref(database, `transactions/${user.id}`);

    const newTransactionRef = await push(transactionsRef);
    await set(newTransactionRef, transactionData);
  };

  return (
    <TransactionsListContext.Provider
      value={{ transactionsList, createTransaction }}
    >
      {children}
    </TransactionsListContext.Provider>
  );
}
