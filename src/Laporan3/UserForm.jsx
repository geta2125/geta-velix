import { useState } from "react";
import InputField from "./components/InputField";
import SelectField from "./components/SelectField";
import ResultCard from "./components/ResultCard";

export default function UserForm() {

  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    umur: "",
    membership: "",
    pembayaran: ""
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    let err = {};

    if (!formData.nama) err.nama = "Nama wajib diisi";
    else if (!isNaN(formData.nama)) err.nama = "Nama tidak boleh angka";

    if (!formData.email.includes("@")) err.email = "Email tidak valid";

    if (!formData.umur) err.umur = "Umur wajib diisi";
    else if (isNaN(formData.umur)) err.umur = "Umur harus angka";
    else if (formData.umur < 17) err.umur = "Minimal umur 17";

    if (!formData.membership) err.membership = "Pilih membership";
    if (!formData.pembayaran) err.pembayaran = "Pilih pembayaran";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  return (
    <div>

      {/* TITLE */}
      <div className="text-center mb-6">
        <h1 className="text-xl font-bold text-[#6b5e5b]">
          geta-velix
        </h1>
        <p className="text-sm text-[#8c7b75]">
          Form Member Coffee ☕
        </p>
      </div>

      {/* INPUT */}
      <div className="space-y-3">

        <InputField label="Nama" name="nama" type="text" onChange={handleChange}/>
        {errors.nama && <p className="text-red-500 text-sm">{errors.nama}</p>}

        <InputField label="Email" name="email" type="text" onChange={handleChange}/>
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

        <InputField label="Umur" name="umur" type="text" onChange={handleChange}/>
        {errors.umur && <p className="text-red-500 text-sm">{errors.umur}</p>}

        <SelectField
          label="Membership"
          name="membership"
          options={["Bronze", "Silver", "Gold"]}
          onChange={handleChange}
          error={errors.membership}
        />

        <SelectField
          label="Pembayaran"
          name="pembayaran"
          options={["Cash", "QRIS", "E-Wallet"]}
          onChange={handleChange}
          error={errors.pembayaran}
        />

      </div>

      {/* BUTTON */}
      {Object.keys(errors).length === 0 &&
        formData.nama &&
        formData.email &&
        formData.umur && (
          <button
            onClick={handleSubmit}
            className="w-full mt-5 py-2 rounded-xl 
                       bg-[#6b5e5b] text-white font-semibold 
                       hover:bg-[#8c7b75] transition shadow-lg"
          >
            Submit
          </button>
        )}

      {/* RESULT */}
      {submitted && (
        <div className="mt-5 p-4 rounded-xl 
                        bg-[#fdfaf7] 
                        border-l-4 border-[#d6ccc2] 
                        shadow-md">
          <ResultCard data={formData} />
        </div>
      )}

    </div>
  );
}