import { useCallback, useState } from 'react';
import { getFilterAttibutesUrl, getSearchProjectsUrl } from '../../Utils/Urls';
import { formatKeyName } from '../../Services/GlobalFunctions';
import API from '../../Utils/helperFunc';
import { useQuery } from '@tanstack/react-query';

const useFilterScreen = ({ navigate }, { params }) => {
  const { selectedCountry, selectedCity, selectedArea, selectedType } = params;

  const { data, refetch } = useQuery({
    queryKey: ['filterattributes'],
    queryFn: () => API.get(getFilterAttibutesUrl),
  });

  const [modalVisible, setModalVisible] = useState(false);
  const [modalState, setModalState] = useState(false);
  const [modalStateFilter, setModalStateFilter] = useState(null);
  const MIN_PRICE = 0;
  const MAX_PRICE = 10000000;

  const MIN_AREA = 0;
  const MAX_AREA = 400;

  const initialFilterState = {
    country: selectedCountry,
    city: selectedCity,
    type: selectedType,
    area: {},
    bedRooms: {},
    bathRoom: {},
    subChildArea: {},
    subArea: {},
    minPrice: 0,
    maxPrice: 10000000,
    areaRange,
    minArea: 0,
    maxArea: 4000,
    propertyType: {},
    AreaUnits: {
      id: null,
      label: null,
    },
  };

  const [filterSelectedVal, setFilterSelectedVal] =
    useState(initialFilterState);
  const {
    area,
    bathRoom,
    bedRooms,
    country,
    city,
    type,
    subChildArea,
    subArea,
    minPrice,
    maxPrice,
    areaRange,
    minArea,
    maxArea,
    propertyType,
    AreaUnits,
  } = filterSelectedVal;
  const updateState = data =>
    setFilterSelectedVal(prev => ({ ...prev, ...data }));
  const onChangeVal = (key, val) => updateState({ [key]: val });

  const handleValueChange = useCallback((newLow, newHigh) => {
    onChangeVal('minPrice', newLow);
    onChangeVal('maxPrice', newHigh);
  }, []);
  const handleValueChangeOfArea = useCallback((newLow, newHigh) => {
    onChangeVal('minArea', newLow);
    onChangeVal('maxArea', newHigh);
  }, []);

  const [disableRange, setDisableRange] = useState(false);
  const handleToggle = () => {
    setDisableRange(prev => !prev);
  };

  const onSearchFilter = () => {
    navigate('ProjectListScreen', {
      url: `${getSearchProjectsUrl}country_id=${country?.id}&city_id=${
        city?.id
      }&area_id=${area?.id}&sub_area_id=${subArea?.id}&sub_child_area_id=${
        subChildArea?.id
      }&purpose_id=${type?.id}&searchAreaCustomUnit_val=${
        AreaUnits?.id ?? undefined
      }&searchPriceMin_val=${minPrice}&searchPriceMax_val=${maxPrice}&searchAreaMin_val=${minArea}&searchAreaMax_val=${
        AreaUnits?.id ? areaRange?.sqYd ?? maxArea : undefined
      }&searchBeds_val=${bedRooms?.id}&searchBaths_val=${
        bathRoom?.id
      }&sortBy_val=high`,
      country,
      city,
      type,
      area,
    });
  };

  let filters = [];
  let idCounter = 1;

  Object.entries(filterSelectedVal).forEach(([key, value]) => {
    if (value) {
      filters.push({
        id: idCounter++,
        label: formatKeyName(key), // key name, e.g., "bedRooms"
        value:
          value?.id || typeof value === 'object'
            ? value?.name || value?.label || value?.sqYd || 'Not Selected'
            : value.toString() ?? 'Not Selected',
        onDelete: () => {
          setFilterSelectedVal(prev => ({
            ...prev,
            [key]: initialFilterState[key], // reset only that key
          }));
        },
      });
    }
  });

  const resetAll = () =>
    setFilterSelectedVal({
      country: selectedCountry,
      city: selectedCity,
      type: selectedType,
      area: {},
      bedRooms: {},
      bathRoom: {},
      subChildArea: {},
      subArea: {},
      minPrice: 0,
      maxPrice: 10000000,
      areaRange,
      minArea: 0,
      maxArea: 4000,
      propertyType: {},
      AreaUnits: {
        id: null,
        label: null,
      },
    });

  const arrySelector = {
    1: data?.data?.data?.AreaUnits,
  };

  const selectTag = {
    1: AreaUnits,
  };

  return {
    onChangeVal,
    area,
    bathRoom,
    bedRooms,
    country,
    city,
    type,
    disableRange,
    handleValueChange,
    handleToggle,
    subChildArea,
    subArea,
    minPrice,
    maxPrice,
    MIN_PRICE,
    MAX_PRICE,
    areaRange,
    minArea,
    maxArea,
    MIN_AREA,
    MAX_AREA,
    handleValueChangeOfArea,
    onSearchFilter,
    filters,
    setModalVisible,
    modalVisible,
    resetAll,
    modalState,
    setModalState,
    arrySelector,
    selectTag,
    attributesData: data?.data?.data,
    propertyType,
    AreaUnits,
    setModalStateFilter,
    modalStateFilter,
  };
};

export default useFilterScreen;
