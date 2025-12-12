import { useQuery } from '@tanstack/react-query';

import OCRLeaderboardQueries from '../api/ocr-leaderboard.queries';

const useGetOCRUserElo = (id?: number) => {
  return useQuery(OCRLeaderboardQueries.userElo(id));
};

export default useGetOCRUserElo;
