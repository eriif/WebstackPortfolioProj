import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
	const [posts, setPosts] = useState([]);
	
	useEffect(() => {
		async function fetchPosts() {
			const res = await axios.get('/api/posts');
			setPosts(res.data);
		}
		fetchPosts();
	}, []);
	
	return (
		<div className="home">
		<h1>All Posts</h1>
		{posts.map(post => (
			<div key={post._id}>
			<h2>{post.title}</h2>
			<p>{post.content}</p>
			<small>By {post.author.username}</small>
			</div>
		))}
		</div>
	);
}

export default Home;
