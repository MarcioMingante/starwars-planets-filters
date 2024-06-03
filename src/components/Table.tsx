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
            item={ current }
          />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
