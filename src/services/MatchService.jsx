export const fetchMatch = async (pageMatch = 1) => {
    const responce = await fetch("https://api.sofascore.com/api/v1/sport/football/scheduled-events/2025-04-16");
    const data = await responce.json();

    if (!responce.ok) {
        throw new Error(data?.error ?? data?.message);
    }
    
    const filteredMatches = data.events.filter(
        event =>
            event.tournament?.name === "UEFA Champions League, Knockout Phase" &&
            event.status?.type === "finished"
    );

    const formattedMatches = filteredMatches.map(match => ({
        team1: match.homeTeam?.name,
        teamCurrent1: match.awayScore?.current,
        teamCurrent2: match.homeScore?.current,
        team2: match.awayTeam?.name,
        logo1: match.homeTeam?.logo,
        logo2: match.awayTeam?.logo,
        date: new Date(match.startTimestamp * 1000).toLocaleDateString("fr-MA", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        }),
    }));

    const paginateMatchs = formattedMatches.slice((pageMatch - 1) * 2, pageMatch     * 2);
    // console.log(paginateMatchs);
    

    return paginateMatchs;
}