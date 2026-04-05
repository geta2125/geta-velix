export default function ResultCard({ data }) {
  return (
    <div className="mt-4 p-4 bg-olive-100 border-l-4 border-b-olive-500">
      <h3 className="font-semibold">Data Berhasil</h3>
      <p>Nama: {data.nama}</p>
      <p>Email: {data.email}</p>
      <p>Umur: {data.umur}</p>
      <p>Membership: {data.membership}</p>
      <p>Pembayaran: {data.pembayaran}</p>
    </div>
  );
}