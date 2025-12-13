import { queryOptions } from '@tanstack/react-query';

import OCRLeaderboardAPI from './ocr-leaderboard.api';

const OCRLeaderboardQueries = {
  all: () => ['ocr-leaderboard'],
  lists: () => [...OCRLeaderboardQueries.all(), 'list'],
  list: (rank: string, filters: string) =>
    queryOptions({
      queryKey: [...OCRLeaderboardQueries.lists(), rank, filters],
      queryFn: async () => {
        if (rank) {
          return await OCRLeaderboardAPI.getByRank(rank, filters);
        } else {
          return await OCRLeaderboardAPI.getAll(filters);
        }
      },
    }),

  user: () => ['ocr-user'],
  userElo: (id?: number) =>
    queryOptions({
      queryKey: [...OCRLeaderboardQueries.all(), 'elo', id],
      queryFn: () => OCRLeaderboardAPI.getUserElo(id!),
      enabled: !!id,
    }),
};

export default OCRLeaderboardQueries;
