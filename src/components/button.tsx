import type { FC } from 'react';

interface ButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ text, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type="button"
      className="easy-transition m-1 h-10 rounded-md bg-blue-500 px-4 py-2 leading-none text-white hover:bg-blue-400 focus:bg-blue-400 focus:outline-none"
    >
      {text}
    </button>
  );
};

export default Button;
