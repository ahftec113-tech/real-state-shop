import { useMutation, useQuery } from '@tanstack/react-query';
import {
  getAreasUrl,
  getCitriesUrl,
  getCountriesUrl,
  getCountryDataUrl,
  getFilterAttibutesUrl,
  getSearchProjectsUrl,
  homeDataUrl,
  searchByLocationUrl,
} from '../../Utils/Urls';
import API from '../../Utils/helperFunc';
import { useEffect, useState } from 'react';
import { errorMessage } from '../../Config/NotificationMessage';

const useHoemScreen = ({ navigate }) => {
  const [modalState, setModalState] = useState(false);

  const { data, refetch } = useQuery({
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
  const [type, setType] = useState({ id: 1, label: 'Rent' });

  const { mutateAsync, isPending } = useLocationMutation();

  const filterAttributesData = useQuery({
    queryKey: ['filterattributes'],
    queryFn: () => API.get(getFilterAttibutesUrl),
  });

  // 1️⃣ Load countries on mount
  const {
    data: countriesData,
    refetch: refetchCountries,
    error: countriesError,
  } = useQuery({
    queryKey: ['countries'],
    queryFn: () => API.get(getCountriesUrl),
    enabled: true,
    onError: error => console.error('Error fetching countries:', error),
  });

  useEffect(() => {
    if (countriesData?.data?.data) {
      setCountries(countriesData?.data?.data || []);
      const pakistan = countriesData?.data?.data?.filter(
        res => res?.slug === 'pakistan',
      )[0];
      setSelectedCountry(pakistan);
      if (pakistan?.slug) {
        refetchCities(pakistan?.slug);
      }
    } else if (countriesError) {
      console.error('Countries fetch failed:', countriesError);
    }
  }, [countriesData, countriesError]);

  // 2️⃣ Load cities when country selected
  const {
    data: citiesData,
    refetch: refetchCities,
    error: citiesError,
  } = useQuery({
    queryKey: ['cities', selectedCountry?.slug],
    queryFn: () => API.get(`${getCitriesUrl}${selectedCountry?.id}`),
    enabled: !!selectedCountry?.slug,
    onError: error => console.error('Error fetching cities:', error),
  });

  useEffect(() => {
    if (citiesData?.data?.data) {
      setCities(citiesData.data?.data || []);
      const karachi = citiesData?.data?.data?.filter(
        res => res?.slug === 'karachi',
      )[0];
      setSelectedCity(karachi);
    } else if (citiesError) {
      console.error('Cities fetch failed:', citiesError);
    }
  }, [citiesData, citiesError]);

  // 3️⃣ Load areas when city selected
  const {
    data: areasData,
    refetch: refetchAreas,
    error: areasError,
  } = useQuery({
    queryKey: ['areas', selectedCity?.slug],
    queryFn: () => API.get(`${getAreasUrl}${selectedCity?.id}`),
    enabled: !!selectedCity?.slug,
    onError: error => console.error('Error fetching areas:', error),
  });

  useEffect(() => {
    if (areasData?.data?.data) {
      setAreas(areasData.data?.data || []);
      // navigate('ProjectsScreen', {
      //   selectedCountry,
      //   selectedCity,
      //   selectedArea,
      //   selectedType: type,
      //   url:
      //     searchByLocationUrl +
      //     type +
      //     '/' +
      //     selectedCountry +
      //     '/' +
      //     selectedCity +
      //     '/' +
      //     selectedArea,
      //   title: 'Search Results',
      // });
    } else if (areasError) {
      console.error('Areas fetch failed:', areasError);
    }
  }, [areasData, areasError]);

  useEffect(() => {
    refetchCountries();
  }, []);

  // // 1️⃣ Load countries on mount

  // const fetchCountries = async () => {
  //   const res = await mutateAsync({ index_process_val: 'get_countries' });
  //   console.log('res.data?.datares.data?.datares.data?.data', res);
  //   if (res?.ok) {
  //     setCountries(res.data?.data || []);
  //     setSelectedCountry(
  //       res?.data?.data?.filter(res => res?.slug == 'pakistan')[0],
  //     );
  //     fetchCities(
  //       res?.data?.data?.filter(res => res?.slug == 'pakistan')[0]?.slug,
  //     );
  //   }
  // };

  // // 2️⃣ Load cities when country selected
  // const fetchCities = async country => {
  //   // setSelectedCountry(country);
  //   setSelectedCountry(country);
  //   setCities([]);
  //   setAreas([]);
  //   const res = await mutateAsync({
  //     index_process_val: 'get_cities',
  //     country: country?.slug,
  //   });
  //   if (res?.ok) {
  //     setCities(res.data?.data || []);
  //     setSelectedCity(
  //       res?.data?.data?.filter(res => res?.slug == 'karachi')[0],
  //     );
  //   }
  // };

  // // 3️⃣ Load areas when city selected
  // const fetchAreas = async city => {
  //   setSelectedCity(city);
  //   // setSelectedCity(city);
  //   console.log('kjasbkasbckasbckabskcbaskcbask', city);
  //   setAreas([]);
  //   const res = await mutateAsync({
  //     index_process_val: 'get_areas',
  //     city: city?.slug,
  //   });
  //   if (res?.ok) {
  //     setAreas(res.data?.data || []);
  //     navigate('ProjectsScreen', {
  //       selectedCountry,
  //       selectedCity,
  //       selectedArea,
  //       selectedType: type,
  //       url:
  //         searchByLocationUrl +
  //         type +
  //         '/' +
  //         selectedCountry +
  //         '/' +
  //         selectedCity +
  //         '/' +
  //         selectedArea,
  //       title: 'Search Results',
  //     });
  //   }
  // };

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

  const dynamicNavigation = ({
    minPrice,
    maxPrice,
    purposeId,
    minArea,
    maxArea,
  }) => {
    navigate('ProjectListScreen', {
      url: `${getSearchProjectsUrl}country_id=${
        selectedCountry?.id ?? null
      }&city_id=${selectedCity?.id ?? null}&area_id=${
        selectedArea?.id ?? null
      }&purpose_id=${purposeId ?? null}&searchPriceMin_val=${
        minPrice ?? null
      }&searchPriceMax_val=${maxPrice ?? null}&searchAreaMin_val=${
        minArea ?? null
      }&searchAreaMax_val=${maxArea ?? null}`,
      selectedType: type,
      selectedCountry,
      selectedCity,
      selectedArea,
    });
  };

  return {
    homeData: data?.data?.data,
    modalState,
    setModalState,
    countries,
    fetchAreas: refetchAreas,
    selectedCity,
    fetchCountries: refetchCountries,
    arrySelector,
    selectedCountry,
    selectTag,
    fetchCities: refetchCities,
    setSelectedArea,
    selectedArea,
    setSelectedCity,
    setSelectedCountry,
    type,
    setType,
    dynamicNavigation,
    filterAttributesData,
    refetch,
  };
};

export default useHoemScreen;
