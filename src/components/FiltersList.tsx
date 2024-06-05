import { useContext } from 'react';
import APIInfoContext from '../context/APIInfoContext';
import FilterItem from './FilterItem';
import Button from './Button';

function FiltersList() {
  const { filters, removeFilter, setFilters } = useContext(APIInfoContext);

  const handleClick = () => {
    setFilters([]);
  };

  return (
    <div>
      {filters.map((filter, index) => (
        <FilterItem
          key={ index }
          filter={ filter }
          onClick={ () => removeFilter(filter) }
        />
      ))}

      {filters.length > 0 && (
        <Button
          dataTestid="button-remove-filters"
          text="Remover todas filtragens"
          onClick={ handleClick }
        />
      )}
    </div>
  );
}

export default FiltersList;
