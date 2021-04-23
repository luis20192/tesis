import React, { useState } from 'react';
import AsyncSelect from 'react-select/async';


export default function Menu() {

  const [inputValue, setValue] = useState('');
  const [selectedValue, setSelectedValue] = useState("");

  // handle input change event
  const handleInputChange = value => {
    setValue(value);
  };

  // handle selection
  const handleChange = value => {
    setSelectedValue(value);
  };

  // load options using API call
  const loadOptions = (inputValue) => {
    return fetch(`http://localhost:3001/api/get/select${inputValue}`).then(res => res.json());
  };


/* load options using API call
const loadOptions = (inputValue) => {
    return fetch(`http://jsonplaceholder.typicode.com/posts?userId=${inputValue}`)
    .then(res => res.json());
};

const actualizar = (nombres) => {
    axios.put("http://localhost:3001/api/get/auxiliar/update", {
       
        nombre: unombre,
        codigo: nombres,


        });
        setunombre()
};
*/

  return (
    <div className="App">
      <h3>Elige Tu Cuenta! </h3>
      <pre>Input Value: "{inputValue}"</pre>
      <AsyncSelect
        cacheOptions
        defaultOptions
        value={selectedValue}
        getOptionLabel={e => e.nombre}
        getOptionValue={e => e.id}
        loadOptions={loadOptions}
        onInputChange={handleInputChange}
        onChange={handleChange}
      />
      <pre>Selected Value: {JSON.stringify(selectedValue.nombre || {}, null, 2)}</pre>
    </div>
  );
}
