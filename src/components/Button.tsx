type ButtonType = {
  type?: 'button' | 'reset' | 'submit' | undefined
  dataTestid?: string
  onClick: () => void
  text: string
};

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
