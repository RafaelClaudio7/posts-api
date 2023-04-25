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

  async findPostById(id: number) {
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

  async addPost(post: IPost): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      pool.query(
        `insert into posts (user_id, title, body) values (${post.user_id}, '${post.title}', '${post.body}');`,
        (error: any, results) => {
          if (error) {
            reject(error);
          }
          console.log(results);
          resolve(true);
        }
      );
    });
  }

  async deletePost(id: number): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      pool.query(
        `DELETE FROM posts WHERE id = ${id}`,
        (error: any, results) => {
          if (error) {
            reject(error);
          }
          console.log(results);
          resolve(true);
        }
      );
    });
  }
}
