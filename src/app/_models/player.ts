
interface Player {
    id_player: number;
    username: string;
    country: string;
}

interface History {
    lvl: number;
    date: Date;
    victory_points_value: number;
    victory_points_rank: number;
    pvp_wins_value: number;
    pvp_wins_rank: number;
    troll_wins_value: number;
    troll_wins_rank: number;
    soft_currency_value: number;
    soft_currency_rank: number;
    experience_value: number;
    experience_rank: number;
    girls_won_value: number;
    girls_won_rank: number;
    stats_upgrade_value: number;
    stats_upgrade_rank: number;
    girls_affection_value: number;
    girls_affection_rank: number;
    harem_level_value: number;
    harem_level_rank: number;
}

export interface PlayerModel {
    player: Player;
    history: Array<History>;
}

export const fields = [
    'victory_points',
    'pvp_wins',
    'troll_wins',
    'soft_currency',
    'experience',
    'girls_won',
    'stats_upgrade',
    'girls_affection',
    'harem_level',
];
