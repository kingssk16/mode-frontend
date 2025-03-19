import { useState } from "react";
import axios from "axios";

export default function Upload() {
  const [file, setFile] = useState(null);

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    const res = await axios.post("http://localhost:5000/upload", formData);
    console.log(res.data);
  };

  return (
    <div>
      <h2>Ladda upp din outfit</h2>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Ladda upp</button>
    </div>
  );
}
