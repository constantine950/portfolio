import { FormFieldProps } from "../_types&data/type";

export default function FormField({
  label,
  id,
  name,
  value,
  error,
  onChange,
  type,
}: FormFieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm sm:text-base font-medium text-gray-700 mb-1 sm:mb-2"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-2 sm:px-5 sm:py-2.5 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base ${
          error ? "border-red-300" : "border-gray-300"
        }`}
      />
      {error && <p className="mt-1 text-xs sm:text-sm text-red-600">{error}</p>}
    </div>
  );
}
