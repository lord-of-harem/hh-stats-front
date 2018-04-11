
interface TopField {
    past: {
        rank: number,
        value: number,
    };
    delta: {
        rank: number,
        value: number,
    };
    today: {
        rank: number,
        value: number,
    };
    player: {
        username: string,
        id_player: number,
        country; string,
    };
}

export interface TopModel {
    date: {
        past: Date,
        today: Date,
        build: Date,
    };
    pvp_wins: TopField;
    girls_won: TopField;
    experience: TopField;
    troll_wins: TopField;
    harem_level: TopField;
    soft_currency: TopField;
    stats_upgrade: TopField;
    victory_points: TopField;
    girls_affection: TopField;
}
