import React from 'react';
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}
export function Input({
  label,
  error,
  ...props
}: InputProps) {
  return <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input className={`block w-full px-4 py-3 rounded-lg border ${error ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200`} {...props} />
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>;
}