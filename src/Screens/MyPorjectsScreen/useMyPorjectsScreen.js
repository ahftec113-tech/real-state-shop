import { useQuery } from '@tanstack/react-query';
import useReduxStore from '../../Hooks/UseReduxStore';
import API from '../../Utils/helperFunc';
import { getFavByLocalIdUrl, getMyProjectUrl } from '../../Utils/Urls';
import { removeArryAndReturnDirectUrl } from '../../Services/GlobalFunctions';
import { useEffect, useState } from 'react';

const useMyProjectsScreen = ({ addListener }) => {
  const { data, refetch, isLoading } = useQuery({
    queryKey: ['myProjects'],
    queryFn: () => API.get(getMyProjectUrl),
    refetchOnWindowFocus: true,
  });
  useEffect(() => {
    const event = addListener('focus', refetch);
    return event;
  });
  const [statusValue, setStatusValue] = useState({
    id: 1,
  });
  console.log('datadatadatadatadatadatadatadatadatadatadata', data?.data);
  return {
    projectsList: data?.data?.data?.propertyListings,
    refetch,
    isLoading,
    statusData: data?.data?.data,
    statusValue,
    setStatusValue,
  };
};

export default useMyProjectsScreen;
