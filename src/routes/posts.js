import express from 'express';

const router = express.Router();

import * as postController from '../app/controllers/PostController.js';

router.get('/', postController.getPosts);

router.post('/', postController.createPost);

router.post('/update', postController.updatePost);

export default router;
