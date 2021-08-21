import React, { createContext, useState, useEffect } from 'react';

import getSelectedRegionData from '../api/Nepal';

export const NepalData = createContext();

const NepalDataProvider = props => {
  const provinceList = [
    { id: 1, name: 'Province 1' },
    { id: 2, name: 'Province 2' },
    { id: 3, name: 'Bagmati Pradesh' },
    { id: 4, name: 'Gandaki Pradesh' },
    { id: 5, name: 'Province 5' },
    { id: 6, name: 'Karnali Pradesh' },
    { id: 7, name: 'Sudurpaschim Pradesh' }
  ];
  const [districtList, setDistrictList] = useState([]);
  const [municipalityList, setMunicipalityList] = useState([]);

  const [regionData, setRegionData] = useState({});
  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedMunicipality, setSelectedMunicipality] = useState('');

  useEffect(() => {
    const fetchNepalData = async () => {
      const data = await getSelectedRegionData(selectedProvince, selectedDistrict, selectedMunicipality);
      setRegionData(data[0]);
      setDistrictList(data[1]);
      setMunicipalityList(data[2]);
    };
    fetchNepalData();
  }, [selectedProvince, selectedDistrict, selectedMunicipality]);

  return (
    <NepalData.Provider
      value={{
        provinceList,
        districtList,
        municipalityList,
        regionData,
        setSelectedProvince,
        setSelectedDistrict,
        setSelectedMunicipality
      }}
    >
      {props.children}
    </NepalData.Provider>
  );
};

export default NepalDataProvider;
