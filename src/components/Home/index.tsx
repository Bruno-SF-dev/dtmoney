import { useState } from "react";
import { TransactionsListProvider } from "../../contexts/transactionsListContext";

import { Dashboard } from "../../components/Dashboard";
import { Header } from "../../components/Header";
import { NewTransactionModal } from "../../components/NewTransactionModal";

export function Home() {
  const [isNewTransactionsModalOpen, setIsNewTransactionsModalOpen] =
    useState(false);

  const handleOpenNewTransactionModal = () => {
    setIsNewTransactionsModalOpen(true);
  };

  const handleCloseNewTransactionModal = () => {
    setIsNewTransactionsModalOpen(false);
  };

  return (
    <TransactionsListProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        onCloseTransactionModal={handleCloseNewTransactionModal}
        isOpen={isNewTransactionsModalOpen}
      />
    </TransactionsListProvider>
  );
}
