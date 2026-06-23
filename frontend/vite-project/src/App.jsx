import { useState } from 'react';
import axios from 'axios';

function App() {
  const [formData, setFromData] = useState({
    title: "",
    description: "",
    image: "",
    slug: ""
  });
  
  const [submittedSlug, setSubmittedSlug] = useState("");

  const { title, description, image } = formData;

  const generateSlug = (text) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/=+/g, '-');
  };

  const handleInput = (e) => {
    let { name, value } = e.target;
    setFromData({ ...formData, [name]: value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const currentSlug = generateSlug(formData.title);
    
    const payload = {
      title: formData.title,
      description: formData.description,
      image: formData.image,
      slug: currentSlug
    };

    setFromData(payload);

    try {
      const { data } = await axios.post("http://localhost:5000/api/post", payload);
      
      if (data.success) {
        alert("Posted successfully!");
        setSubmittedSlug(currentSlug); 
      } else {
        alert("Failed to post");
      }
    } catch (error) {
      console.error("Error connecting to server:", error);
      alert("Server error. Check your backend console.");
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Create a post</h1>
      <div className="outer-div" style={{ maxWidth: "500px", margin: "0 auto", padding: "20px" }}>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title : </label>
            <input type="text" placeholder="Enter a title.." name="title" value={title} onChange={handleInput} required />
          </div>
          <br />
          <div>
            <label>Description : </label>
            <input type="text" placeholder="Describe the doc" name="description" value={description} onChange={handleInput} required />
          </div>
          <br />
          <div>
            <label>Image URL : </label>
            <input type="text" placeholder="Enter image string" name="image" value={image} onChange={handleInput} />
          </div>
          <br />
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>

      <hr style={{ margin: "40px 0" }} />

    </div>
  );
}

export default App;