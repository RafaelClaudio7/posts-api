import { IPost } from "../interfaces/interfacePost";
import { pool } from "../shared/mysql";

export class PostsServices {
  async findAllPosts(): Promise<IPost[]> {
    return new Promise<IPost[]>((resolve, reject) => {
      pool.query(`SELECT * FROM posts`, (error: any, results: IPost[]) => {
        if (error) {
          reject(error);
        }
        resolve(results);
      });
    });
  }

  findPostById(id: number) {
    return new Promise<IPost>((resolve, reject) => {
      pool.query(
        `SELECT * FROM posts where id = ${id}`,
        (error: any, results: IPost) => {
          if (error) {
            reject(error);
          }
          resolve(results);
        }
      );
    });
  }

  addPost(obj: IPost) {
    console.log("INSERT () INTO posts ....");
  }

  deletePost(id: number) {
    console.log("delete * where post.id = id");
  }
}
