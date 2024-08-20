import axios from 'axios';
import React, { useState } from 'react';

const CreateBoard = () => {
        const [boardName, setBoardName] = useState('');

        const handleSubmit = (e: React.FormEvent) => {
                e.preventDefault();

                axios.post('/api/boards', { name: boardName })
                        .then(response => {
                                console.log('Board created:', response.data);
                                alert('The board has been successfully created!');
                        })
                        .catch(error => {
                                console.error('Error creating board:', error);
                        });
        };

        return (
                <form onSubmit={handleSubmit}>
                        <input
                                type="text"
                                value={boardName}
                                onChange={(e) => setBoardName(e.target.value)}
                                placeholder="Enter board name"
                        />
                        <button type="submit">Create Board</button>
                </form>
        );
}

export default CreateBoard;