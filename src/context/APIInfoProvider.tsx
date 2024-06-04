import { useEffect, useState } from 'react';
import APIInfoContext from './APIInfoContext';
import { getPlanetData } from '../services/api';
import { FiltersType, PlanetInfoType } from '../types/types';

function APIInfoProvider({ children }:{ children: React.ReactNode }) {
  const [planetsList, setPlanetsList] = useState<PlanetInfoType[]>([]);
  const [planetListByName, setPlanetListByName] = useState<PlanetInfoType[]>([]);
  const [filters, setFilters] = useState<FiltersType[]>([]);

  const handleFilterByName = (content: string) => {
    const filteredList = planetsList
      .filter((planet) => planet.name.toLowerCase().includes(content));

    setPlanetListByName(filteredList);
  };

  // const addFilter = (filter) => {
  //   setFilters((prev) => [...prev, filter]);
  // };

  // const removeFilter = () => {

  // };

  useEffect(() => {
    const handleAPI = async () => {
      const apiInfo = await getPlanetData();
      const data = apiInfo.map(({ residents, ...rest }) => rest);

      setPlanetsList(data);
      setPlanetListByName(data);
    };

    handleAPI();
  }, []);

  const value = { planetListByName, filters, handleFilterByName };

  return (
    <APIInfoContext.Provider value={ value }>
      { children }
    </APIInfoContext.Provider>
  );
}

export default APIInfoProvider;
