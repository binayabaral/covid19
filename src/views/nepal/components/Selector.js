import React from 'react';

const Selector = props => {
  const handleChange = e => {
    if (props.setSelectedProvince) {
      props.setSelectedProvince('');
    }
    if (props.setSelectedDistrict) {
      props.setSelectedDistrict('');
    }
    if (props.setSelectedMunicipality) {
      props.setSelectedMunicipality('');
    }
    props.changeHandler(e.target.value);
  };
  return (
    <select onChange={handleChange}>
      <option key="0" value="" selected>
        --Not Selected--
      </option>
      {props.choices.map(choice => (
        <option key={choice.id} value={choice.id}>
          {choice.name}
        </option>
      ))}
    </select>
  );
};

export default Selector;
