import express from "express";
import { PostsController } from "../controllers/PostsController";

export const postsRouter = express.Router();

const postsController = new PostsController();

postsRouter.get("/posts", postsController.listAll);

postsRouter.get("/posts/:id", postsController.list);
