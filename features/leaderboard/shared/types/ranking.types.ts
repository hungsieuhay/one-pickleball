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
