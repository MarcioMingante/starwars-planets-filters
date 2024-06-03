import { createContext } from 'react';
import { PlanetInfoType } from '../types/types';

type APIContextType = {
  planetsList: PlanetInfoType[]
};

const APIInfoContext = createContext({} as APIContextType);

export default APIInfoContext;
