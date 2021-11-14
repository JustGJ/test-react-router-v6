import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Home route</h1>
        </div>
    );
};

const Learn = () => {
    return (
        <div>
            <h1>Learn</h1>
            <p>All courses are listed here</p>
        </div>
    );
};

// Navigate to="learn"
ReactDOM.render(
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />{' '}
            {/* sur /myapps, on redirige sur learn (aucun retour arrière possible). Replace permet le retour en arrière */}
            <Route path="/myapps" element={<Navigate replace to="/learn" />} />{' '}
            <Route path="/learn" element={<Learn />} />
        </Routes>
    </Router>,
    document.getElementById('root')
);

reportWebVitals();
