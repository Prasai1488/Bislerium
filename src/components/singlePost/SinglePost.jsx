import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://img.freepik.com/free-photo/happy-man-restaurant-drinking-coffee_23-2148395383.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1714176000&semt=ais"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-regular fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Prithvi Prasai</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
          consequuntur vitae, tempora asperiores magnam cupiditate consectetur
          rerum nesciunt culpa placeat aut sequi doloremque ducimus debitis
          omnis in, fuga numquam voluptates! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Fuga deserunt velit, esse expedita in
          cumque delectus maxime vitae debitis possimus ratione illo. Eum error
          atque est harum ipsa sequi ad. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Veniam sequi laudantium obcaecati! Fuga reiciendis
          impedit omnis reprehenderit ipsam recusandae voluptatibus quod porro
          laboriosam vel facilis nam dolorum, voluptates tenetur cum?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
          consequuntur vitae, tempora asperiores magnam cupiditate consectetur
          rerum nesciunt culpa placeat aut sequi doloremque ducimus debitis
          omnis in, fuga numquam voluptates! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Fuga deserunt velit, esse expedita in
          cumque delectus maxime vitae debitis possimus ratione illo. Eum error
          atque est harum ipsa sequi ad. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Veniam sequi laudantium obcaecati! Fuga reiciendis
          impedit omnis reprehenderit ipsam recusandae voluptatibus quod porro
          laboriosam vel facilis nam dolorum, voluptates tenetur cum?
        </p>
      </div>
    </div>
  );
}
