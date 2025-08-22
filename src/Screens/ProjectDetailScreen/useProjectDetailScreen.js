import { useQuery } from '@tanstack/react-query';
import { getProjectDetailUrl } from '../../Utils/Urls';
import API from '../../Utils/helperFunc';
import { useState } from 'react';

const useProjectDetailScreen = ({ navigate }, { params }) => {
  const { data, error, refetch } = useQuery({
    queryKey: ['eventDetail'],
    queryFn: () => API.get(getProjectDetailUrl + params),
  });

  const [readMoreTitleState, setReadMoreTitle] = useState(false);

  const [selectedTab, setSelectedTab] = useState({
    id: 'Features&Amenitites',
    name: 'Features & Amenitites',
  });

  const readMoreTitle = () => setReadMoreTitle(!readMoreTitleState);

  return {
    projectDetails: data?.data?.data?.project_details,
    similarProjects: data?.data?.data?.similar_projects,
    readMoreTitle,
    readMoreTitleState,
    setSelectedTab,
    selectedTab,
  };
};

export default useProjectDetailScreen;
