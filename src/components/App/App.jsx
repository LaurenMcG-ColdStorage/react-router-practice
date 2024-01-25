import axios from 'axios';
import './App.css';
import StudentForm from '../StudentForm/StudentForm.jsx';
import StudentList from '../StudentList/StudentList.jsx';
import About from '../About/About.jsx';
import { HashRouter as Router, Route, Link } from 'react-router-dom/cjs/react-router-dom.min.js';

function App() {
    return (
        <div className="App">
            <Router>
                <Route path='/'>
                    <header className="App-header">
                    <h1 className="App-title">GitHub Student List</h1>
                    <nav>
                        <Link to='/'>Home</Link>
                        <Link to='/about'>About</Link>
                        <Link to='/allStudents'>All Students</Link>
                    </nav>
                    </header>
                    <br/>
                    <StudentForm />
                </Route>
                <Route path='/allStudents'>
                    <StudentList />
                </Route>
                <Route path='/about'>
                    <About />
                </Route>
            </Router>
        </div>
    );
}

export default App;
