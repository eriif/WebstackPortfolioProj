import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import Post from './pages/Post';
import Profile from './pages/Profile';
import PrivateRoute from './components/PrivateRoute';

function App() {
	return (
		<Router>
		<div className="App">
		<Navbar />
		<Switch>
		<Route exact path="/" component={Home} />
		<Route exact path="/login" component={Login} />
		<Route exact path="/register" component={Register} />
		<PrivateRoute exact path="/create-post" component={CreatePost} />
		<PrivateRoute exact path="/edit-post/:id" component={EditPost} />
		<Route exact path="/post/:id" component={Post} />
		<PrivateRoute exact path="/profile" component={Profile} />
		</Switch>
		</div>
		</Router>
	);
}

export default App;
