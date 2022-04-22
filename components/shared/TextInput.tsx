import React from 'react';

interface TextInputProps {
  label?: string;
  placeholder?: string;
  name: string;
  error?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<TextInputProps> = ({
  error,
  name,
  label,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className='form-control w-full'>
      <label className='label' htmlFor={name}>
        <span className='label-text'>{label}</span>
      </label>
      <input
        type='text'
        id={name}
        placeholder={placeholder}
        className='input input-bordered w-full'
        value={value}
        onChange={onChange}
      />
      <label className='label'>
        <span className='label-text-alt text-error'>{error}</span>
      </label>
    </div>
  );
};

export default TextInput;
