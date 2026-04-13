import { useState } from "react";
import data from "../data/data.json";
import CardItem from "../components/CardItem";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";

export default function Guest() {

  const [search, setSearch] = useState("");
  const [membership, setMembership] = useState("");
  const [status, setStatus] = useState("");

  const filteredData = data.filter((item) => {
    return (
      item.nama.toLowerCase().includes(search.toLowerCase()) &&
      (membership === "" || item.membership === membership) &&
      (status === "" || item.detail.status === status)
    );
  });

  return (
    <div>
      <h2 className="text-xl font-bold mt-6 mb-4">Guest View</h2>

      <SearchBar search={search} setSearch={setSearch} />

      <FilterBar
        membership={membership}
        setMembership={setMembership}
        status={status}
        setStatus={setStatus}
      />

      <div className="grid md:grid-cols-4 gap-4 mt-4">
        {filteredData.map((item, index) => (
          <CardItem key={item.id} item={item} index={index} />
        ))}
      </div>

      {filteredData.length === 0 && (
        <p className="text-center mt-4 text-gray-500">
          Data tidak ditemukan
        </p>
      )}
    </div>
  );
}