import React, { useEffect, useState } from 'react';
import api from '../services/api';

interface Sponsor {
  id: string;
  company_name: string;
  donated_items: string;
  preferred_fighter: string;
}

const SponsorList: React.FC = () => {
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);

  useEffect(() => {
    const fetchSponsors = async () => {
      try {
        const response = await api.get('/sponsors');
        setSponsors(response.data);
      } catch (error) {
        console.error('Error fetching sponsors:', error);
      }
    };

    fetchSponsors();
  }, []);

  return (
    <div>
      <h2>Patrocinadores</h2>
      <ul>
        {sponsors.map((sponsor) => (
          <li key={sponsor.id}>
            <strong>{sponsor.company_name}</strong>
            <br />
            Ítems donados: {sponsor.donated_items}
            <br />
            Luchador preferido: {sponsor.preferred_fighter}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SponsorList;