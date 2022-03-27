import React from "react";
import {
    BrowserRouter,
    Switch,
    Route,
    Routes,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";


export default function App() {
    return (
        <BrowserRouter>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/topics">Topics</Link>
                    </li>
                </ul>

                <Routes>
                    <Route path="/about" element={<About />} />
                    <Route path="/topics" element={<Topics />} />
                    <Route path="/" element={<Home />} />

                </Routes>
            </div>
        </BrowserRouter>
    );
}

function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Topics() {
    return <h2>About</h2>;
}

