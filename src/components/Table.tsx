import { useContext, useEffect, useState } from 'react';
import APIInfoContext from '../context/APIInfoContext';
import TableItem from './TableItem';
import { FiltersType, PlanetInfoType } from '../types/types';

function Table() {
  const { planetListByName, filters } = useContext(APIInfoContext);
  const [filteredPlanetList,
    setFilteredPlanetList] = useState<PlanetInfoType[]>(planetListByName);

  const compareValues = (
    comparison: string,
    planetColumn: string | string[],
    value: number,
  ) => {
    if (comparison === 'maior que') {
      return Number(planetColumn) > value ? planetColumn : undefined;
    }
    if (comparison === 'menor que') {
      return Number(planetColumn) < value ? planetColumn : undefined;
    }
    if (comparison === 'igual a') {
      return Number(planetColumn) === Number(value) ? planetColumn : undefined;
    }
    return planetColumn;
  };

  useEffect(() => {
    const currentFilters = () => {
      const newList = planetListByName.filter((planet: PlanetInfoType) => (
        filters.every(({ column, comparison, value }: FiltersType) => {
          const planetColumn = planet[column as keyof PlanetInfoType];

          const result = compareValues(comparison, planetColumn, value);

          return result;
        })
      ));

      setFilteredPlanetList(newList);
    };
    currentFilters();
  }, [filters, planetListByName]);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        { filteredPlanetList.map((current) => (
          <TableItem
            key={ current.name }
            item={ current }
          />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
