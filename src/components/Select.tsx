import { SelectType } from '../types/types';

function Select({
  label,
  id,
  name,
  dataTestid,
  onChange,
  value,
  options }: SelectType) {
  return (
    <div>
      <label htmlFor={ id }>{ label}</label>
      <select
        id={ id }
        name={ name }
        data-testid={ dataTestid }
        onChange={ onChange }
        value={ value }
      >
        {options.map((option, index) => (
          <option key={ index } value={ option }>{option}</option>
        ))}
      </select>
    </div>
  );
}

export default Select;
