import { useQuery } from '@tanstack/react-query';
import { getProjectDetailUrl } from '../../Utils/Urls';
import API from '../../Utils/helperFunc';

const useProjectDetailScreen = ({ navigate }, { params }) => {
  const { data, error, refetch } = useQuery({
    queryKey: ['eventDetail'],
    queryFn: () => API.get(getProjectDetailUrl + params),
  });
  return {
    projectDetails: data?.data?.data?.project_details,
  };
};

export default useProjectDetailScreen;
