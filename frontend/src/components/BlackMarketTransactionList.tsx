import React, { useEffect, useState } from 'react';
import api from '../services/api';

interface BlackMarketTransaction {
  id: string;
  buyer_id: string;
  seller_id: string;
  item: string;
  amount: number;
  status: string;
}

const BlackMarketTransactionList: React.FC = () => {
  const [transactions, setTransactions] = useState<BlackMarketTransaction[]>([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await api.get('/black-market');
        setTransactions(response.data);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div>
      <h2>Transacciones del Mercado Negro</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            <strong>Comprador:</strong> {transaction.buyer_id}
            <br />
            <strong>Vendedor:</strong> {transaction.seller_id}
            <br />
            <strong>Ítem:</strong> {transaction.item}
            <br />
            <strong>Monto:</strong> ${transaction.amount}
            <br />
            <strong>Estado:</strong> {transaction.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlackMarketTransactionList;