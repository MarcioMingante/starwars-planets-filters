import { useEffect, useState } from 'react';
import APIInfoContext from './APIInfoContext';
import { getPlanetData } from '../services/api';
import { FiltersType, PlanetInfoType, SortType } from '../types/types';

function APIInfoProvider({ children }:{ children: React.ReactNode }) {
  const [planetsList, setPlanetsList] = useState<PlanetInfoType[]>([]);
  const [planetListByName, setPlanetListByName] = useState<PlanetInfoType[]>([]);
  const [filters, setFilters] = useState<FiltersType[]>([]);
  const [order, setOrder] = useState<SortType>({
    column: 'population',
    sort: '',
  });

  const handleFilterByName = (content: string) => {
    const filteredList = planetsList
      .filter((planet) => planet.name.toLowerCase().includes(content));

    setPlanetListByName(filteredList);
  };

  const addFilter = (filter: FiltersType) => {
    setFilters((prev) => [...prev, filter]);
  };

  const removeFilter = (filter: FiltersType) => {
    setFilters(filters.filter((event) => event.column !== filter.column));
  };

  const changeOrder = (sort: SortType) => {
    setOrder(sort);
  };

  useEffect(() => {
    const handleAPI = async () => {
      const apiInfo = await getPlanetData();
      const data = apiInfo.map(({ residents, ...rest }) => rest);

      setPlanetsList(data);
      setPlanetListByName(data);
    };

    handleAPI();
  }, []);

  const value = { planetListByName,
    filters,
    handleFilterByName,
    addFilter,
    removeFilter,
    setFilters,
    changeOrder,
    order,
  };

  return (
    <APIInfoContext.Provider value={ value }>
      { children }
    </APIInfoContext.Provider>
  );
}

export default APIInfoProvider;
