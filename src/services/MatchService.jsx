export const fetchMatch = async () => {
    const responce = await fetch("https://api.sofascore.com/api/v1/sport/football/scheduled-events/2025-04-15");
    const data = await responce.json();

    if (!responce.ok) {
        throw new Error(data?.error ?? data?.message);
    }
    
    const filteredMatches = data.events.filter(
        event =>
          event.tournament?.name === "UEFA Champions League, Knockout Phase" &&
          event.status?.type === "finished"
      );

    console.log(filteredMatches);

    return filteredMatches;
}