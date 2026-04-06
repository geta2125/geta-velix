import UserForm from "./UserForm";

export default function Tailwindcss() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fdfcfb] via-[#e2d1c3] to-[#f8e8e8]">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-8 py-4 bg-[#6b5e5b] text-white shadow-lg">
        <h1 className="text-lg font-bold">geta-velix</h1>

        <ul className="flex space-x-6 text-sm">
          <li><a href="#" className="hover:text-[#eac7c7]">Home</a></li>
          <li><a href="#" className="hover:text-[#eac7c7]">Form</a></li>
          <li><a href="#" className="hover:text-[#eac7c7]">Contact</a></li>
        </ul>

        <button className="bg-[#eac7c7] text-[#6b5e5b] px-4 py-2 rounded-lg hover:opacity-80 transition">
          Login
        </button>
      </nav>

      {/* HEADER */}
      <div className="text-center mt-10">
        <h1 className="text-2xl font-bold text-[#6b5e5b]">
          Form Membership Coffee ☕
        </h1>
        <p className="text-sm text-[#8c7b75] mt-2">
          Isi data untuk menjadi member geta-velix
        </p>
      </div>

      {/* FORM */}
      <div className="flex justify-center mt-6 px-4">
        <div className="w-full max-w-md 
                        bg-white/80 backdrop-blur-xl 
                        p-8 rounded-3xl 
                        shadow-2xl border border-white/40 
                        transition hover:scale-[1.01]">

          <UserForm />
        </div>
      </div>

      {/* FOOTER */}
      <footer className="text-center mt-10 pb-6 text-sm text-[#8c7b75]">
        © 2026 geta-velix — semangat selalu yaa
      </footer>

    </div>
  );
}