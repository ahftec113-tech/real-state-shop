import { useQuery } from '@tanstack/react-query';
import API from '../../Utils/helperFunc';

const useProjectsScreen = ({ navigate }, { params }) => {
  const { data } = useQuery({
    queryKey: [params?.url],
    queryFn: () => API.get(params?.url),
  });

  return {
    propertyListing: data?.data?.data,
  };
};

export default useProjectsScreen;
