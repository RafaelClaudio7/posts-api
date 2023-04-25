import { IPost } from "../interfaces/interfacePost";

export interface IPostsServices {
  findAllPosts: () => Promise<IPost[]>;
  findPostById: (id: number) => Promise<IPost>;
  addPost: (post: IPost) => Promise<boolean>;
  deletePost: (id: number) => Promise<boolean>;
}
