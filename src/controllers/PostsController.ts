import { Request, Response } from "express";
import { PostsServices } from "../services";

const postsServices = new PostsServices();

export class PostsController {
  async listAll(req: Request, res: Response) {
    try {
      const arr = await postsServices.findAllPosts();
      res.status(200).send("OK");
    } catch (error) {
      res.status(500).send("erro");
    }
  }
}
