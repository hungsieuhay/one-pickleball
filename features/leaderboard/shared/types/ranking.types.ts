export type Ranking = {
  rank: number;
  avatar: string;
  elo: number;
  tier: string;
  winRate: number;
  name: string;
};

export type OCRLeaderboardResponse = {
  data: {
    rank: number;
    user_id: number;
    name: string;
    elo_rating: number;
    elo_rank: string;
    total_matches: number;
    wins: number;
    losses: number;
    win_rate: number;
  }[];
  success: boolean;
};

export type OCRLeaderboardByRankResponse = {
  data: {
    rank_in_tier: number;
    user_id: number;
    name: string;
    elo_rating: number;
    elo_rank: UserTier;
    total_matches: number;
    wins: number;
    losses: number;
    win_rate: number;
  }[];
  success: boolean;
  meta: {
    rank_tier: UserTier;
    total_players: number;
  };
};

export type OCRUserEloResponse = {
  data: {
    user_id: number;
    name: string;
    elo_rating: number;
    elo_rank: string;
    total_matches: number;
    wins: number;
    losses: number;
    win_rate: number;
    oprs: {
      total: string;
      level: string;
      challenge_score: string;
      community_score: string;
    };
  };
  success: boolean;
};

export type UserTier = 'Bronze' | 'Silver' | 'Gold' | 'Platinum' | 'Diamond' | 'Master' | 'Grandmaster';

export type AllTier = UserTier | '';

export type FilterTier = {
  label: string;
  value: AllTier;
};
