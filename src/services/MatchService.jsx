export const fetchMatch = async () => {
    const responce = await fetch("https://api.sofascore.com/api/v1/sport/football/scheduled-events/2025-04-15");
    const data = await responce.json();

    if (!responce.ok) {
        return {
            'error': data?.error ?? data?.message,
            'match': data ?? null,
        }
    }

    return data;
}