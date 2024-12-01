
import { Board } from '../../../models.tsx';

function BoardDiv({ currentBoard }: {
    currentBoard: Board,
}) {
    return (
        <div>
            <h1 className="text-4xl font-bold">{currentBoard.name}</h1>
        </div>
        
    );
}

export default BoardDiv;
