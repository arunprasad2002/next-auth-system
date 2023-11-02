import React from "react";

interface AuthInputProps {
  name: string;
  id: string;
  type: string;
  placeholder: string;
  required: boolean;
  label?: string;
  value?: string;
  onChange?: (e: any) => void;
}

const AuthInput = ({
  label,
  id,
  name,
  type,
  placeholder,
  onChange,
  value,
}: AuthInputProps) => {
  return (
    <div>
      <label
        htmlFor="email"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          id={id}
          name={name}
          type={type}
          autoComplete={type}
          required
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};

export default AuthInput;
