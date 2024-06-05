import { ButtonType } from '../types/types';

function Button({ type = 'button', dataTestid = '', onClick, text }: ButtonType) {
  return (
    <button
      type={ type }
      data-testid={ dataTestid }
      onClick={ onClick }
    >
      {text}
    </button>
  );
}

export default Button;
