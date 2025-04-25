import { useEffect, useState } from "react";
import { fetchMatch } from "../services/MatchService";
import Swal from "sweetalert2";

const MatchManagement = () => {
    const [matchs, setMatchs] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    
    
    useEffect(() => {
        const getMatchs = async () => {
            setIsLoading(true);
            try {
                const matchData = await fetchMatch();
                setMatchs(matchData);
                Swal.fire({
                    icon: 'success',
                    title: 'Récuperation des Matchs',
                    text: matchData?.message || 'La récupération des matchs a réussi',
                    timer: 1200,
                    timerProgressBar: true,
                });
    
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Récuperation des Matchs',
                    text: error.message,
                    confirmButtonText: 'Réssayé!',
                    confirmButtonColor: 'red',
                }).then((resutl) => {
                    if (resutl.isConfirmed) {
                        getMatchs();
                    }
                });
    
            }
            setIsLoading(false);
        }
        getMatchs();        
    }, []);

    return (
        <div className="relative flex items-center justify-center w-[65%] h-[60%] rounded-sm bg-cover bg-center">
           
            <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a8a] to-[#05052f] opacity-70 rounded-lg"></div>

            <div className="relative z-10 w-full h-full p-6 overflow-y-auto flex flex-col justify-center">
                {isLoading ? (
                    <div className="flex items-center justify-center h-full">
                        <div className="w-12 h-12 border-4 border-t-transparent border-cyan-400 rounded-full animate-spin"></div>
                    </div>
                ) : matchs && matchs.length > 0 ? (
                    <div className="grid grid-cols-1 gap-4">
                        {matchs.map((match, index) => (
                            <div
                                key={index}
                                className="grid grid-cols-3 items-center p-4 bg-none bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all duration-300 border-b-2 border-gray-300"
                            >
                                <div className="flex space-x-3 justify-center">
                                    <span className="text-white font-medium text-lg">{match.team1}</span>
                                </div>

                                <div className="text-center space-y-1">
                                    <p className="text-cyan-400 font-semibold">{match.teamCurrent1} - {match.teamCurrent2}</p>
                                    <p className="text-[#c9c9c9ea] text-sm">{match.date}</p>
                                </div>

                                <div className="flex space-x-3 justify-center">
                                    <span className="text-white font-medium text-lg">{match.team2}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex items-center justify-center h-full text-white">
                        <p className="text-lg">Aucun match trouvé.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default MatchManagement;