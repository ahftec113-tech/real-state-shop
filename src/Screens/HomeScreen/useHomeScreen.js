import { useMutation, useQuery } from '@tanstack/react-query';
import {
  getCountryDataUrl,
  homeDataUrl,
  searchByLocationUrl,
} from '../../Utils/Urls';
import API from '../../Utils/helperFunc';
import { useEffect, useState } from 'react';
import { errorMessage } from '../../Config/NotificationMessage';

const useHoemScreen = ({ navigate }) => {
  const [modalState, setModalState] = useState(false);

  const { data } = useQuery({
    queryKey: ['homeData'],
    queryFn: () => API.get(homeDataUrl),
  });

  const useLocationMutation = () => {
    return useMutation({
      mutationFn: body => API.post(getCountryDataUrl, body),

      onError: () => {
        errorMessage('Problem occurred while fetching data.');
      },
    });
  };

  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [areas, setAreas] = useState([]);

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedArea, setSelectedArea] = useState(null);
  const [type, setType] = useState({ id: 'Rent' });

  const { mutateAsync, isPending } = useLocationMutation();
  useEffect(() => {
    fetchCountries();
  }, []);

  // 1️⃣ Load countries on mount

  const fetchCountries = async () => {
    const res = await mutateAsync({ index_process_val: 'get_countries' });
    console.log('res.data?.datares.data?.datares.data?.data', res);
    if (res?.ok) {
      setCountries(res.data?.data || []);
      setSelectedCountry(
        res?.data?.data?.filter(res => res?.slug == 'pakistan')[0],
      );
    }
  };

  // 2️⃣ Load cities when country selected
  const fetchCities = async country => {
    // setSelectedCountry(country);
    setSelectedCountry(country);
    setCities([]);
    setAreas([]);
    const res = await mutateAsync({
      index_process_val: 'get_cities',
      country: country?.slug,
    });
    if (res?.ok) {
      setCities(res.data?.data || []);
      setSelectedCity(
        res?.data?.data?.filter(res => res?.slug == 'karachi')[0],
      );
    }
  };

  // 3️⃣ Load areas when city selected
  const fetchAreas = async city => {
    setSelectedCity(city);
    // setSelectedCity(city);
    console.log('kjasbkasbckasbckabskcbaskcbask', city);
    setAreas([]);
    const res = await mutateAsync({
      index_process_val: 'get_areas',
      city: city?.slug,
    });
    if (res?.ok) {
      setAreas(res.data?.data || []);
      navigate('ProjectsScreen', {
        country: selectedCountry,
        city: selectedCity,
        area: selectedArea,
        type,
        url:
          searchByLocationUrl +
          type +
          '/' +
          selectedCountry +
          '/' +
          selectedCity +
          '/' +
          selectedArea,
        title: 'Search Results',
      });
    }
  };

  const arrySelector = {
    1: countries,
    2: cities,
    3: areas,
  };

  const selectTag = {
    1: selectedCountry,
    2: selectedCity,
    3: selectedArea,
  };

  return {
    homeData: data?.data?.data,
    modalState,
    setModalState,
    countries,
    fetchAreas,
    selectedCity,
    fetchCountries,
    arrySelector,
    selectedCountry,
    selectTag,
    fetchCities,
    setSelectedArea,
    selectedArea,
    setSelectedCity,
    setSelectedCountry,
    type,
    setType,
  };
};

export default useHoemScreen;
