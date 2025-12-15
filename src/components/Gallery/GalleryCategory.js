import React from "react";
import { useParams, Link } from "react-router-dom";

const GalleryCategory = () => {
  const { category } = useParams();

  return (
    <div style={{ padding: "50px" }}>
      <h1>{category} Gallery</h1>
      <p>Here you can show more pictures for <strong>{category}</strong>.</p>
      <Link to="/gallery">← Back to Gallery</Link>
    </div>
  );
};

export default GalleryCategory;
