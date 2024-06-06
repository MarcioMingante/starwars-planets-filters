import { useContext, useEffect, useState } from 'react';
import APIInfoContext from '../context/APIInfoContext';
import TableItem from './TableItem';
import { FiltersType, PlanetInfoType, SortType } from '../types/types';

function Table() {
  const { planetListByName, filters, order } = useContext(APIInfoContext);
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
    return planetListByName;
  };

  const sortItems = (list: PlanetInfoType[]) => {
    if (order.sort === '') {
      return list;
    }

    if (order.sort === 'ASC') {
      const sortedList = list.sort((a, b) => {
        const firstItem = a[order.column as keyof PlanetInfoType];
        const secondItem = b[order.column as keyof PlanetInfoType];
        if (firstItem === 'unknown') return 1;
        if (secondItem === 'unknown') return -1;

        return Number(firstItem) - Number(secondItem);
      });

      return sortedList;
    }

    if (order.sort === 'DESC') {
      const sortedList = list.sort((a, b) => {
        const firstItem = a[order.column as keyof PlanetInfoType];
        const secondItem = b[order.column as keyof PlanetInfoType];
        if (firstItem === 'unknown') return 1;
        if (secondItem === 'unknown') return -1;

        return Number(secondItem) - Number(firstItem);
      });

      return sortedList;
    }
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

      const sortedList = sortItems(newList);

      setFilteredPlanetList(sortedList);
    };

    currentFilters();
  }, [filters, planetListByName, order]);

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
