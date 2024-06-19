const FilterDropdown = ({ filterMake, handleFilterChange }) => {
  return (
    <div className="filter-container">
      <label htmlFor="make-filter">Filter by Make:</label>
      <select id="make-filter" value={filterMake} onChange={handleFilterChange}>
        <option value="">All</option>
        <option value="Sony">Sony</option>
        <option value="Lumix">Lumix</option>
        <option value="Nikon">Nikon</option>
        <option value="Canon">Canon</option>
        <option value="Polaroid">Polaroid</option>
      </select>
    </div>
  );
};

export default FilterDropdown;
