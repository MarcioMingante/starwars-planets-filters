import { useContext } from 'react';
import APIInfoContext from '../context/APIInfoContext';
import TableItem from './TableItem';

function Table() {
  const { planetsList } = useContext(APIInfoContext);

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
        { planetsList.map((current) => (
          <TableItem
            key={ current.name }
            name={ current.name }
            rotation_period={ current.rotation_period }
            orbital_period={ current.orbital_period }
            diameter={ current.diameter }
            climate={ current.climate }
            gravity={ current.gravity }
            terrain={ current.terrain }
            surface_water={ current.surface_water }
            population={ current.population }
            films={ current.films }
            created={ current.created }
            edited={ current.edited }
            url={ current.url }
          />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
