import { Request, Response } from "express";
import { PostsServices } from "../services";

const postsServices = new PostsServices();

export class PostsController {
  async listAll(req: Request, res: Response) {
    try {
      const allPosts = await postsServices.findAllPosts();
      res.status(200).json(allPosts);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async list(req: Request, res: Response) {
    const { id } = req.params;
    const number = parseInt(id);
    postsServices
      .findPostById(number)
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  }
}
