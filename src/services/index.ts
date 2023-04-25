import { IPost } from "../interfaces/interfacePost";
import { pool } from "../shared/mysql";

export class PostsServices {
  async findAllPosts() {
    pool.query("SELECT * from posts", function (error: any, results) {
      if (error) throw error;
      return results;
    });
  }

  findPostById(id: number) {
    console.log("select * from posts where posts.id = id");
  }

  addPost(obj: IPost) {
    console.log("INSERT () INTO posts ....");
  }

  deletePost(id: number) {
    console.log("delete * where post.id = id");
  }
}
