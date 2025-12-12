import React from 'react';

import { useSession } from '@/contexts/AuthProvider';

import { MyRanking } from '@/features/leaderboard/shared/components/MyRanking';
import { Ranking } from '@/features/leaderboard/shared/types';

import useGetOCRUserElo from '../../hooks/useGetOCRUserElo';

const OCRUserElo = () => {
  const { user } = useSession();
  const { data, status } = useGetOCRUserElo(user?.id);

  if (status === 'pending') return;

  if (status === 'error') return;

  const rankingData: Ranking = {
    avatar: data.data.name,
    rank: 0,
    name: data.data.name,
    elo: data.data.elo_rating,
    tier: data.data.elo_rank,
    winRate: data.data.win_rate,
  };

  return <MyRanking {...rankingData} />;
};

export default OCRUserElo;
