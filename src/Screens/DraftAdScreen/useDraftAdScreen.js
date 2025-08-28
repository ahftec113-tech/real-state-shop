import { useQuery } from '@tanstack/react-query';
import useReduxStore from '../../Hooks/UseReduxStore';
import API from '../../Utils/helperFunc';
import { getFavByLocalIdUrl, getMyProjectUrl } from '../../Utils/Urls';
import { removeArryAndReturnDirectUrl } from '../../Services/GlobalFunctions';
import { useEffect } from 'react';

const useDraftAdsScreen = ({ addListener }) => {
  const { getState } = useReduxStore();
  const { DraftAds } = getState('DraftAds');
  console.log(
    'DraftAdsDraftAdsDraftAdsDraftAdsDraftAdsDraftAdsDraftAds',
    DraftAds,
  );
  return {
    projectsList: DraftAds ?? [],
  };
};

export default useDraftAdsScreen;
