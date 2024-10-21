import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [entries, setEntries] = useState([]);

  const handleAdd = () => {
    if (name.trim() && age.trim()) {
      setEntries([...entries, { name, age }]);
      setName('');
      setAge('');
      console.log(entries);
    }
  };

  return (
    <div>
      <form>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Age:
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <button type="button" onClick={handleAdd}>
          Add
        </button>
      </form>

      <ul>
        {entries.map((entry, index) => (
          <li key={index}>
            {entry.name} is {entry.age} years old
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Form;

