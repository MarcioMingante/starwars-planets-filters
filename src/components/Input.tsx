import { InputType } from '../types/types';

function Input({
  label,
  id,
  type = 'text',
  name,
  placeholder,
  dataTestid = '',
  onChange,
  value }: InputType) {
  return (
    <label htmlFor={ id }>
      {label}
      <input
        id={ id }
        type={ type }
        name={ name }
        placeholder={ placeholder }
        data-testid={ dataTestid }
        onChange={ onChange }
        value={ value }
      />
    </label>
  );
}

export default Input;
