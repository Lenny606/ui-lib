import React from 'react';

function SearchInput(props) {
  const { value, onChange } = props;

  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchInput;
