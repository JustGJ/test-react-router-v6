import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    Link,
    Outlet,
    useParams,
    useNavigate,
    useLocation,
    NavLink,
} from 'react-router-dom';

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
            {/* Dans les liens et chemins, on doit écrire l'intégralité de la route */}
            <Link to="/learn/bundles" className="btn btn-primary">
                Bundles
            </Link>
            {/* Outlet affichera le composant enfant <Courses /> ou <Bundles /> */}
            <Outlet />
        </div>
    );
};

const Courses = () => {
    const courseList = ['React', 'Angular', 'Vue', 'Nodejs'];
    const randomCourseName = courseList[Math.floor(Math.random() * courseList.length)];

    return (
        <div>
            <h1>Courses list</h1>
            <h4>Courses card</h4>

            <p>More test</p>
            <NavLink
                to={`/learn/courses/${randomCourseName}`}
                style={({ isActive }) => {
                    return {
                        backgroundColor: isActive ? 'pink' : 'yellow',
                    };
                }}>
                {randomCourseName}
            </NavLink>
            <NavLink to={`/learn/courses/tests`} className="btn btn-light">
                tests
            </NavLink>

            {/* Outlet affichera le composant enfant <CourseId /> ou test*/}
            <Outlet />
        </div>
    );
};

const CourseId = () => {
    const navigate = useNavigate();
    const { courseid } = useParams();
    return (
        <div>
            <h1>URL params is : {courseid}</h1>
            <button
                onClick={() => navigate('/dashboard', { state: '299' })}
                className="btn btn-warning">
                Price
            </button>
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
const DashBoard = () => {
    const location = useLocation();
    console.log(location);
    return (
        <div>
            {/* Accès au state envoyé depuis CourseId navigate('/dashboard', { state: '299' })} */}
            <h1>Info that i got there is : {location.state} </h1>
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
            {/* /learn = route parent  /learn/courses & learn/bundles = routes enfants. Outlet affichera les composants enfants à partir du composant parent  */}
            <Route path="/learn" element={<Learn />}>
                <Route path="courses" element={<Courses />}>
                    <Route path=":courseid" element={<CourseId />} />
                </Route>
                <Route path="bundles" element={<Bundles />} />
            </Route>
            <Route path="/dashboard" element={<DashBoard />}></Route>
        </Routes>
    </Router>,
    document.getElementById('root')
);

reportWebVitals();
