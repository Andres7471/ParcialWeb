import React, { useEffect, useState } from 'react';
import api from '../services/api';

interface Contestant {
  id: string;
  name: string;
  nickname: string;
  origin: string;
  strength: number;
  agility: number;
  wins: number;
  losses: number;
  status: string;
}

const ContestantList: React.FC = () => {
  const [contestants, setContestants] = useState<Contestant[]>([]);

  useEffect(() => {
    const fetchContestants = async () => {
      try {
        const response = await api.get('/contestants');
        setContestants(response.data);
      } catch (error) {
        console.error('Error fetching contestants:', error);
      }
    };

    fetchContestants();
  }, []);

  return (
    <div>
      <h2>Concursantes</h2>
      <ul>
        {contestants.map((contestant) => (
          <li key={contestant.id}>
            <strong>{contestant.name}</strong> ({contestant.nickname}) - {contestant.origin}
            <br />
            Fuerza: {contestant.strength}, Agilidad: {contestant.agility}
            <br />
            Victorias: {contestant.wins}, Derrotas: {contestant.losses}
            <br />
            Estado: {contestant.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContestantList;