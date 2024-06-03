import { useEffect, useState } from 'react';
import APIInfoContext from './APIInfoContext';
import { getPlanetData } from '../services/api';
import { PlanetInfoType } from '../types/types';

function APIInfoProvider({ children }:{ children: React.ReactNode }) {
  const [planetsList, setPlanetsList] = useState<PlanetInfoType[]>([]);

  useEffect(() => {
    const handleAPI = async () => {
      const apiInfo = await getPlanetData();
      const data = apiInfo.map(({ residents, ...rest }) => rest);

      setPlanetsList(data);
    };

    handleAPI();
  }, []);

  return (
    <APIInfoContext.Provider value={ { planetsList } }>
      { children }
    </APIInfoContext.Provider>
  );
}

export default APIInfoProvider;
