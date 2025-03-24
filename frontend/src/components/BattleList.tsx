import React, { useEffect, useState } from 'react';
import api from '../services/api';

interface Battle {
  id: string;
  contestant_1: string;
  contestant_2: string;
  winner_id: string;
  death_occurred: boolean;
  injuries: string;
  date: string;
}

const BattleList: React.FC = () => {
  const [battles, setBattles] = useState<Battle[]>([]);

  useEffect(() => {
    const fetchBattles = async () => {
      try {
        const response = await api.get('/battles');
        setBattles(response.data);
      } catch (error) {
        console.error('Error fetching battles:', error);
      }
    };

    fetchBattles();
  }, []);

  return (
    <div>
      <h2>Batallas</h2>
      <ul>
        {battles.map((battle) => (
          <li key={battle.id}>
            <strong>Batalla:</strong> {battle.contestant_1} vs {battle.contestant_2}
            <br />
            Ganador: {battle.winner_id}
            <br />
            ¿Hubo muertes?: {battle.death_occurred ? 'Sí' : 'No'}
            <br />
            Heridas: {battle.injuries}
            <br />
            Fecha: {new Date(battle.date).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BattleList;