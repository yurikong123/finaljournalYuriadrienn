import React from "react";
import { useSelector } from "react-redux"; // ✅ inserted
import "./Gallery.css";

import img1 from "./lapulapu.jpg";
import img2 from "./Somac.jpg";
import img3 from "./university.jpg";
import img4 from "./magellan.jpg";
import img5 from "./santo.jpg";
import img6 from "./buffet.jpg";
import img7 from "./bai.jpg";
import img8 from "./tarsierr.jpg";
import img9 from "./chocolate.jpg";
import img10 from "./panglao.jpg";
import img11 from "./alona.jpg";
import img12 from "./loboc.jpg";
import img13 from "./mirror.jpg";
import img14 from "./manmade.jpg";
import img15 from "./Davao.jpg";

// Gallery items
const galleryItems = [
  { id: 1, img: img1, title: "Lapu-Lapu Shrine" },
  { id: 2, img: img2, title: "Somac Korean Buffet" },
  { id: 3, img: img3, title: "Cebu Institute of Technology Univesity" },
  { id: 4, img: img4, title: "Magellan's Cross" },
  { id: 5, img: img5, title: "Basilica del Santo Niño" },
  { id: 6, img: img6, title: "Buffet 101 Cebu" },
  { id: 7, img: img7, title: "Bai Hotel" },
  { id: 8, img: img8, title: "Philippine Tarsier Sanctuary" },
  { id: 9, img: img9, title: "Chocolate Hills" },
  { id: 10, img: img10, title: "Panglao" },
  { id: 11, img: img11, title: "Alona Beach" },
  { id: 12, img: img12, title: "Loboc River" },
  { id: 13, img: img13, title: "Sikatuna Mirror of The World" },
  { id: 14, img: img14, title: "Bilar Man-Made Forest" },
  { id: 15, img: img15, title: "Davao International Airport" },
];

const Gallery = () => {
  const uiColor = useSelector(state => state.uiColor); // ✅ inserted

  return (
    <section
      id="gallery"
      style={{
        minHeight: "100vh",
        padding: "50px",
        "--theme-color": uiColor || "#333" // ✅ INSERTED
      }}
    >
      <h1>Gallery</h1>

      <div className="galleryGrid">
        {galleryItems.map((item) => (
          <div className="galleryBox" key={item.id}>
            <img src={item.img} alt={item.title} />
            <p className="galleryCaption">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
