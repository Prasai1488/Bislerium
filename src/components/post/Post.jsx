import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://img.freepik.com/free-photo/happy-man-restaurant-drinking-coffee_23-2148395383.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1714176000&semt=ais"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCats">Music</span>
          <span className="postCats">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
        <div className="react">
        <span className="reactIcon"><i class="fa-regular fa-thumbs-up"></i></span>
        <span className="reactIcon"><i class="fa-regular fa-thumbs-down"></i></span>
        <span className="reactIcon"><i class="fa-regular fa-comments"></i></span>
        </div>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias adipisci
        fugit, ex recusandae omnis, doloremque commodi doloribus aliquid atque
        ipsum quos. Quia ipsa fuga iste commodi sint similique aut voluptatibus.
      </p>
    </div>
  );
}
