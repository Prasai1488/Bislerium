// import "./write.css";

// export default function Write() {
//   return (
//     <div className="write">
//       <img
//         className="writeImg"
//         src="https://media.istockphoto.com/id/697120006/photo/amazing-cloudscape-on-the-sky.jpg?s=612x612&w=0&k=20&c=6GK5lZu6xbOpVBNw4tnyoMiu_O8JrD6Et1-TM2b6dqg="
//         alt=""
//       />
//       <form className="writeForm">
//         <div className="writeFormGroup">
//           <label htmlFor="fileInput">
//             <i className="writeIcon fa-solid fa-plus"></i>
//           </label>
//           <input type="file" id="fileInput" style={{ display: "none" }} />
//           <input
//             type="text"
//             placeholder="Title"
//             className="writeInput"
//             autoFocus={true}
//           />
//         </div>
//         <div className="writeFormGroup">
//           <textarea
//             className="writeInput writeText"
//             placeholder="Tell your story..."
//             type="text"
//           ></textarea>
//         </div>
//         <button className="writeSubmit">Publish</button>
//       </form>
//     </div>
//   );
// }


import React, { useState } from 'react';
import "./write.css";

export default function Write() {
  // Adding state to handle inputs and file upload
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [location, setLocation] = useState('');
  const [reaction, setReaction] = useState('');
  const [image, setImage] = useState(null);

  // Function to handle file selection
  const handleFileChange = (event) => {
    setImage(event.target.files[0]);
  };

  // Placeholder for submit function, you might want to do something like sending data to backend
  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement what happens on form submit, e.g., sending data to the backend
    console.log({ title, body, location, reaction, image });
  };

  return (
    <div className="write">
      <img
        className="writeImg"
        src={image ? URL.createObjectURL(image) : "https://media.istockphoto.com/id/697120006/photo/amazing-cloudscape-on-the-sky.jpg?s=612x612&w=0&k=20&c=6GK5lZu6xbOpVBNw4tnyoMiu_O8JrD6Et1-TM2b6dqg="}
        alt="Blog cover"
      />
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} onChange={handleFileChange} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <input
            type="text"
            placeholder="Location"
            className="writeInput"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <div className="writeFormGroup">
          <input
            type="text"
            placeholder="Reaction"
            className="writeInput"
            value={reaction}
            onChange={(e) => setReaction(e.target.value)}
          />
        </div>
        <button className="writeSubmit" type="submit">Publish</button>
      </form>
    </div>
  );
}


