import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
	res.send('This is the auth endpoint');
});

router.get('/register', (req, res) => {
	res.send('This is the auth register endpoint');
});

export default router;
