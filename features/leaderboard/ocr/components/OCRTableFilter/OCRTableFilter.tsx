import React from 'react';

import { RankingTable } from '@/features/leaderboard/shared/components/RankingTable';
import { AllTier, Ranking } from '@/features/leaderboard/shared/types';

import useGetOCRLeaderboard from '../../hooks/useGetOCRLeaderboard';

type OCRTableFilterProps = {
  tier: AllTier;
};

const OCRTableFilter = ({ tier }: OCRTableFilterProps) => {
  const { data, status } = useGetOCRLeaderboard({
    rank: tier,
  });

  if (status === 'pending') return;

  if (status === 'error') return;

  // Parse data
  const tableData: Ranking[] = data.data.map((item) => {
    if ('rank_in_tier' in item) {
      return {
        avatar: item.name,
        rank: item.rank_in_tier,
        name: item.name,
        elo: item.elo_rating,
        tier: item.elo_rank,
        winRate: item.win_rate,
      };
    }

    return {
      avatar: item.name,
      rank: item.rank,
      name: item.name,
      elo: item.elo_rating,
      tier: item.elo_rank,
      winRate: item.win_rate,
    };
  });

  return <RankingTable data={tableData} />;
};

export default OCRTableFilter;
