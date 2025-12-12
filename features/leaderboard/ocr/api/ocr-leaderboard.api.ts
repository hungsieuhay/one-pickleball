import { fetchWrapper } from '@/utils/fetch.utils';

import { OCRLeaderboardResponse, OCRUserEloResponse } from '../../shared/types';

const OCRLeaderboardAPI = {
  getAll: (filter: string) => {
    return fetchWrapper<OCRLeaderboardResponse>(`/ocr/leaderboard?${filter}`);
  },
  getUserElo: (id: number) => {
    return fetchWrapper<OCRUserEloResponse>(`/ocr/users/${id}/elo`);
  },
};

export default OCRLeaderboardAPI;
