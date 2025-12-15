import React from "react";

// Import images from the same folder
import journal1 from "./worldtech.jpg";
import journal2 from "./codechum.jpg";
import journal3 from "./rivanit.jpg";
import journal4 from "./mata.jpg";
import journal5 from "./tarsier.jpg";

const Journal = () => {
  return (
    <section
      id="journal"
      style={{ minHeight: "100vh", padding: "80px 10%", color: "inherit" }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "3rem",
          marginBottom: "4rem",
          letterSpacing: "2px",
        }}
      >
        Journal
      </h1>

      {/* TOP 3 BOXES */}
      <div className="journalRow">
        <div className="journalBox">
          <img src={journal1} alt="WorldTech" className="boxImage" />
          <p className="boxText">WorldTech</p>
        </div>

        <div className="journalBox">
          <img src={journal2} alt="CodeChum" className="boxImage" />
          <p className="boxText">CodeChum</p>
        </div>

        <div className="journalBox">
          <img src={journal3} alt="Rivan IT" className="boxImage" />
          <p className="boxText">Rivan IT</p>
        </div>
      </div>

      {/* BOTTOM 2 BOXES */}
      <div className="journalRow">
        <div className="journalBox">
          <img src={journal4} alt="Mata" className="boxImage" />
          <p className="boxText">Mata</p>
        </div>

        <div className="journalBox">
          <img src={journal5} alt="Tarsier" className="boxImage" />
          <p className="boxText">Tarsier</p>
        </div>
      </div>

      {/* CSS */}
      <style>
        {`
          .journalRow {
            display: flex;
            justify-content: center;
            gap: 3rem;
            margin-bottom: 3.5rem;
          }

          .journalBox {
            width: 100%;
            max-width: 340px;
            border-radius: 32px;
            border: 4px solid purple;
            overflow: hidden;
            box-shadow: 0 18px 40px rgba(0,0,0,0.12);
            transition: transform 0.3s ease;
            background: transparent;
          }

          .boxImage {
            width: 100%;
            height: 320px;
            object-fit: cover;
            display: block;
          }

          .boxText {
            text-align: center;
            padding: 1rem;
            font-size: 1.1rem;
            font-weight: 600;
            letter-spacing: 1px;
          }

          .journalBox:hover {
            transform: translateY(-8px);
          }

          @media (max-width: 1000px) {
            .journalRow {
              flex-direction: column;
              align-items: center;
              gap: 2rem;
            }

            .journalBox {
              max-width: 300px;
            }

            .boxImage {
              height: 280px;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Journal;
