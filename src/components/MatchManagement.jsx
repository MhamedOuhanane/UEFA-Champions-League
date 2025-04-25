import { useState } from "react";
import { fetchMatch } from "../services/MatchService";

const MatchManagement = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    
    const getMatchs = async () => {
        setIsLoading(true);
        try {
            const matchData = await fetchMatch();
            
        } catch (error) {
            
        }
        
    }


    return (
        <div className="bg-[#97afff5f] rounded-lg w-[65%] h-[60%]">

        </div>
    );
}

export default MatchManagement;