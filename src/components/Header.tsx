import { useContext, useState } from 'react';
import APIInfoContext from '../context/APIInfoContext';
import Input from './Input';
import Select from './Select';
import { FiltersType } from '../types/types';
import Button from './Button';

const numericOptions = ['rotation_period', 'orbital_period',
  'diameter', 'surface_water', 'population'];
const operatorOptions = ['maior que', 'menor que', 'igual a'];

function Header() {
  const { handleFilterByName, addFilter } = useContext(APIInfoContext);
  const [planetName, setPlanetName] = useState('');
  const [formInfo, setFormInfo] = useState<FiltersType>({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  const handleSearchBarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlanetName(e.target.value);
    handleFilterByName(e.target.value);
  };

  const handleFormChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>,
  ) => {
    setFormInfo({
      ...formInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleCLick = () => {
    addFilter(formInfo);
  };

  return (
    <header>
      <form action="">
        <div>
          <Input
            id="planet-name"
            name="Planet Name"
            placeholder="Planeta"
            dataTestid="name-filter"
            onChange={ handleSearchBarChange }
            value={ planetName }
          />
        </div>

        <div>
          <Select
            label="Coluna"
            id="column-filter"
            name="column"
            dataTestid="column-filter"
            onChange={ handleFormChange }
            value={ formInfo.column }
            options={ numericOptions }
          />

          <Select
            label="Operador"
            id="comparison-filter"
            name="comparison"
            dataTestid="comparison-filter"
            onChange={ handleFormChange }
            value={ formInfo.comparison }
            options={ operatorOptions }
          />

          <div>
            <Input
              id="value-filter"
              name="value"
              type="number"
              placeholder="0"
              dataTestid="value-filter"
              onChange={ handleFormChange }
              value={ formInfo.value }
            />
          </div>

          <Button
            type="button"
            dataTestid="button-filter"
            onClick={ handleCLick }
            text="FILTRAR"
          />
        </div>
      </form>
    </header>
  );
}

export default Header;
