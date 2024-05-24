const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const auth = require('../middleware/auth');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.post('/', auth, upload.single('headerImage'), async (req, res) => {
	const { title, content } = req.body;
	const headerImage = req.file ? req.file.path : null;
	try {
		const newPost = new Post({ title, content, author: req.user.id, headerImage });
		const post = await newPost.save();
		res.json(post);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});

router.get('/', async (req, res) => {
	try {
		const posts = await Post.find().populate('author', 'username');
		res.json(posts);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});

router.put('/:id', auth, async (req, res) => {
	const { title, content } = req.body;
	try {
		let post = await Post.findById(req.params.id);
		if (!post) return res.status(404).json({ msg: 'Post not found' });
		if (post.author.toString() !== req.user.id) return res.status(401).json({ msg: 'User not authorized' });
		post.title = title;
		post.content = content;
		post = await post.save();
		res.json(post);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});

router.delete('/:id', auth, async (req, res) => {
	try {
		let post = await Post.findById(req.params.id);
		if (!post) return res.status(404).json({ msg: 'Post not found' });
		if (post.author.toString() !== req.user.id) return res.status(401).json({ msg: 'User not authorized' });
		await post.remove();
		res.json({ msg: 'Post removed' });
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});

module.exports = router;
