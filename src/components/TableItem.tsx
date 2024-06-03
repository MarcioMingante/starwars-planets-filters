import { PlanetInfoType } from '../types/types';

function TableItem({ item }: { item: PlanetInfoType }) {
  const { name, rotation_period: rotationPeriod, orbital_period: orbitalPeriod, diameter,
    climate, gravity, terrain, surface_water: surfaceWater, population, films, created,
    edited, url } = item;

  return (
    <tr>
      <td>{name}</td>
      <td>{rotationPeriod}</td>
      <td>{orbitalPeriod}</td>
      <td>{diameter}</td>
      <td>{climate}</td>
      <td>{gravity}</td>
      <td>{terrain}</td>
      <td>{surfaceWater}</td>
      <td>{population}</td>
      <td>{films}</td>
      <td>{created}</td>
      <td>{edited}</td>
      <td>{url}</td>
    </tr>
  );
}

export default TableItem;
