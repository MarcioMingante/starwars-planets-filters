import { FilterItemType } from '../types/types';
import Button from './Button';

function FilterItem({ filter, onClick }: FilterItemType) {
  return (
    <div data-testid="filter">
      <h3>{`${filter.column} ${filter.comparison} ${filter.value}`}</h3>
      <Button
        text="img"
        onClick={ onClick }
      />
    </div>
  );
}

export default FilterItem;
