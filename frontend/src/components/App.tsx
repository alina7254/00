import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';
import Main from '../pages/Main';
import BoardPage from '../pages/BoardPage';
import ThreadPage from '../pages/ThreadPage';

const App: React.FC = () => {
    return (
        <I18nextProvider i18n={i18n}>
            <Router>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/:currentBoard" element={<BoardPage />} />
                    <Route path="/:currentBoard/:id" element={<ThreadPage />} />
                </Routes>
            </Router>
        </I18nextProvider>
    );
};

export default App;


