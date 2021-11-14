import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route, Navigate, Link, Outlet } from 'react-router-dom';

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
            <Link to="/learn/courses" className="btn btn-success">
                courses
            </Link>
            <Link to="/learn/bundles" className="btn btn-primary">
                Bundles
            </Link>
            {/* Outlet permet d'afficher le composant enfant sur la route séléctionnée */}
            <Outlet />
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

const Bundles = () => {
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
            {/* /learn = route parent  /learn/courses & learn/bundles = routes enfants. Outlet affichera ces composants enfants  */}
            <Route path="/learn" element={<Learn />}>
                <Route path="courses" element={<Courses />} />
                <Route path="bundles" element={<Bundles />} />
            </Route>
        </Routes>
    </Router>,
    document.getElementById('root')
);

reportWebVitals();
