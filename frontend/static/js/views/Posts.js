import AbstractView from "./AbstractView.js";

class PostsView extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Posts");
  }

  async getHtml() {
    return `
            <h1>Posts</h1>
            <p>You are viewing the posts!</p>
        `;
  }
}

const Posts = {
  route: "/posts",
  view: PostsView,
};

export default Posts;
