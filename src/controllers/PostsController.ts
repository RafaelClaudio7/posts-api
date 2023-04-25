import { Request, Response } from "express";
import { PostsServices } from "../services";
import { IPost } from "../interfaces/interfacePost";

const postsServices = new PostsServices();

export class PostsController {
  async listAll(req: Request, res: Response) {
    postsServices
      .findAllPosts()
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  }

  async list(req: Request, res: Response) {
    const { id } = req.params;
    postsServices
      .findPostById(parseInt(id))
      .then((result) => {
        if (!result.id) res.status(404).json("Not found");
        res.status(200).send(result);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  }

  async add(req: Request, res: Response) {
    const post: IPost = req.body;

    postsServices
      .addPost(post)
      .then((result) => {
        res.status(201).send("Post created");
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    postsServices
      .deletePost(parseInt(id))
      .then((result) => {
        if (result) res.status(204).send();
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  }
}
