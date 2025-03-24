import React, { useEffect, useState } from 'react';
import api from '../services/api';

interface Dictator {
  id: string;
  name: string;
  territory: string;
  number_of_slaves: number;
}

const DictatorList: React.FC = () => {
  const [dictators, setDictators] = useState<Dictator[]>([]);

  useEffect(() => {
    const fetchDictators = async () => {
      try {
        const response = await api.get('/dictators');
        setDictators(response.data);
      } catch (error) {
        console.error('Error fetching dictators:', error);
      }
    };

    fetchDictators();
  }, []);

  return (
    <div>
      <h2>Dictadores</h2>
      <ul>
        {dictators.map((dictator) => (
          <li key={dictator.id}>
            <strong>{dictator.name}</strong> - {dictator.territory}
            <br />
            Número de esclavos: {dictator.number_of_slaves}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DictatorList;