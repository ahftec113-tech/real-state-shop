import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import useReduxStore from '../../Hooks/UseReduxStore';
import { loadingFalse } from '../../Redux/Action/isloadingAction';
import { useState } from 'react';
import API from '../../Utils/helperFunc';

const useProjectListScreen = ({ navigate }, { params }) => {
  const { dispatch } = useReduxStore();

  const [listType, setListType] = useState(1);

  const {
    data,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    isPending,
    isFetching,
    isRefetching,
    refetch,
  } = useInfiniteQuery({
    queryKey: [params?.url],
    queryFn: async ({ pageParam = 10 }) => {
      //   setTimeout(() => {
      //     dispatch(loadingFalse());
      //   }, 100);
      return API.get(`${params?.url}&per_page=${pageParam}`);
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => (pages?.length ?? 0) + 1,
  });

  const list = data?.pages.flatMap(page => page.data?.data) || [];

  console.log(
    'sdjjvblskdvbklsdbvksdbklvbsdklvbdsklvbkldsvbkldvbkld',
    data?.pages.flatMap(page => page),
    `${params?.url}&per_page=${1}`,
    data?.pages,
  );

  return {
    projectList: list ?? [],
    listType,
    setListType,
  };
};

export default useProjectListScreen;
