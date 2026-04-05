export default function SelectField({ label, name, value, onChange, options, error }) {
  return (
    <div className="mb-3">
      <label className="block text-gray-700 font-medium mb-1">{label}</label>

      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full p-2 border border-gray-300 rounded"
      >
        <option value="">Pilih</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}