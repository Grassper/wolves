class Post {
  constructor(_id, title, author, description, imageUrl, date, comments) {
    this._id = _id;
    this.title = title;
    this.author = author;
    this.description = description;
    this.imageUrl = imageUrl;
    this.date = date;
    this.comments = comments;
  }
}

export default Post;
