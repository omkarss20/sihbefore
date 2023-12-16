import React, { useState } from "react";

const PostVideo = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    course: "",
    url: null,
    thumbnail: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const submitForm = () => {
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    fetch("http://127.0.0.1:8000/study/videos/", {
      method: "POST",
      body: data,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div>
      <form>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        ></textarea>
        <br />
        <label htmlFor="course">Course:</label>
        <input
          type="number"
          id="course"
          name="course"
          value={formData.course}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="url">Video File:</label>
        <input type="file" id="url" name="url" onChange={handleChange} />
        <br />
        <label htmlFor="thumbnail">Video Thumbnail:</label>
        <input
          type="file"
          id="thumbnail"
          name="thumbnail"
          onChange={handleChange}
        />
        <br />
        <button type="button" onClick={submitForm}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostVideo;
