import { useQuery } from '@tanstack/react-query';
import { getProjectDetailUrl, getSearchProjectsUrl } from '../../Utils/Urls';
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

  const dynamicNavigation = () => {
    navigate('ProjectListScreen', {
      url: `${getSearchProjectsUrl}area_1=${data?.data?.data?.project_details?.area_id}&area_2=${data?.data?.data?.project_details?.sub_area_id}`,
      selectedCity: { name: 'Karachi' },
      extraFilter: [
        data?.data?.data?.project_details?.area_2 != null
          ? data?.data?.data?.project_details?.sub_area_name
          : data?.data?.data?.project_details?.area_name,
      ],
    });
  };

  return {
    projectDetails: data?.data?.data?.project_details,
    similarProjects: data?.data?.data?.similar_projects,
    readMoreTitle,
    readMoreTitleState,
    setSelectedTab,
    selectedTab,
    dynamicNavigation,
  };
};

export default useProjectDetailScreen;
