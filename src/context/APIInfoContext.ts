import { createContext } from 'react';
import { FiltersType, PlanetInfoType, SortType } from '../types/types';

type APIContextType = {
  planetListByName: PlanetInfoType[]
  filters: FiltersType[]
  handleFilterByName: (content: string) => void
  addFilter: (filter: FiltersType) => void
  removeFilter: (filter: FiltersType) => void
  setFilters: React.Dispatch<React.SetStateAction<FiltersType[]>>
  changeOrder: (sort: SortType) => void
  order: SortType
};

const APIInfoContext = createContext({} as APIContextType);

export default APIInfoContext;
