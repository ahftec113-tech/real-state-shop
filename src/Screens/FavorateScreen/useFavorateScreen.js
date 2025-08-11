import { useQuery } from '@tanstack/react-query';
import useReduxStore from '../../Hooks/UseReduxStore';
import API from '../../Utils/helperFunc';
import { getFavByLocalIdUrl } from '../../Utils/Urls';
import { removeArryAndReturnDirectUrl } from '../../Services/GlobalFunctions';

const useFavorateScreen = () => {
  const { getState } = useReduxStore();

  const { favProjects } = getState('favProjects');
  const { data, refetch } = useQuery({
    queryKey: ['favByLocalId'],
    queryFn: () =>
      API.get(getFavByLocalIdUrl + removeArryAndReturnDirectUrl(favProjects)),
  });

  return {
    favList: data?.data?.data,
    refetch,
  };
};

export default useFavorateScreen;
