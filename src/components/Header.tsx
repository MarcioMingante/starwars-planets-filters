import { useContext, useEffect, useState } from 'react';
import APIInfoContext from '../context/APIInfoContext';
import Input from './Input';
import Select from './Select';
import { FiltersType } from '../types/types';
import Button from './Button';

const numericOptions = ['population', 'rotation_period', 'orbital_period',
  'diameter', 'surface_water'];
const operatorOptions = ['maior que', 'menor que', 'igual a'];

function Header() {
  const { handleFilterByName, addFilter, filters } = useContext(APIInfoContext);
  const [infoOptions, setInfoOptions] = useState(numericOptions);
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

  useEffect(() => {
    const filterOptions = () => {
      const newOptions = numericOptions.filter((option) => (
        filters.every(({ column }) => {
          return option !== column;
        })
      ));

      setInfoOptions(newOptions);
      setFormInfo((prev) => ({
        ...prev,
        column: newOptions[0],
      }));
    };

    console.log(infoOptions);
    filterOptions();
  }, [filters]);

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
            options={ infoOptions }
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
