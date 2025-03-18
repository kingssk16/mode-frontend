import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [outfits, setOutfits] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/outfits").then((res) => setOutfits(res.data));
  }, []);

  const handleLike = async (id) => {
    await axios.post(`http://localhost:5000/outfits/${id}/like`);
    setOutfits((prev) =>
      prev.map((outfit) =>
        outfit._id === id ? { ...outfit, likes: outfit.likes + 1 } : outfit
      )
    );
  };

  return (
    <div>
      <h1>Modeflöde</h1>
      {outfits.map((outfit) => (
        <div key={outfit._id}>
          <img src={outfit.imageUrl} alt="outfit" width="200" />
          <p>{outfit.likes} likes</p>
          <button onClick={() => handleLike(outfit._id)}>Like</button>
        </div>
      ))}
    </div>
  );
}
