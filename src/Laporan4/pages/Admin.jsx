import { useState } from "react";
import data from "../data/data.json";
import TableAdmin from "../components/TableAdmin";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";

export default function Admin() {

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
      <h2 className="text-xl font-bold mt-10 mb-4">Admin View</h2>

      <SearchBar search={search} setSearch={setSearch} />

      <FilterBar
        membership={membership}
        setMembership={setMembership}
        status={status}
        setStatus={setStatus}
      />

      <TableAdmin data={filteredData} />
    </div>
  );
}