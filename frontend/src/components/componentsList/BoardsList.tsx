import React, { useEffect, useState } from "react";
import { getBoards } from "../../api/apiService";

interface Board {
    id: number;
    name: string;
}

const BoardsList: React.FC = () => {
    const [boards, setBoards] = useState<Board[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchBoards = async () => {
            setLoading(true);
            const data = await getBoards();
            setBoards(data);
            setLoading(false);
        };
        fetchBoards();
    }, []);

    if (loading) {
        return <div>Loading boards...</div>;
    }

    return (
        <div className="boards-list">
            <h3>Available Boards</h3>
            <ul>
                {boards.map((board) => (
                    <li key={board.id}>{board.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default BoardsList;
