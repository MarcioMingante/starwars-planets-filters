import { createContext } from 'react';
import { FiltersType, PlanetInfoType } from '../types/types';

type APIContextType = {
  planetListByName: PlanetInfoType[]
  filters: FiltersType[]
  handleFilterByName: (content: string) => void
  addFilter: (filter: FiltersType) => void
};

const APIInfoContext = createContext({} as APIContextType);

export default APIInfoContext;
