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
            {/* Sur /learn, les deux buttons apparaitons. En cliquant sur courses par exemple, on sera mené vers /learn/course  */}
            <Link to="/learn/course" className="btn btn-success">
                courses
            </Link>
            <Link to="/learn/bundle" className="btn btn-primary">
                Bundle
            </Link>
        </div>
    );
};

const Courses = () => {
    return (
        <div>
            <h1>Courses list</h1>
            <h4>Courses card</h4>
        </div>
    );
};

const Bundle = () => {
    return (
        <div>
            <h1>Bundle list</h1>
            <h4>Bundle card</h4>
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
