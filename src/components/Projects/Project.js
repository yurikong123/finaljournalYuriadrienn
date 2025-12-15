import React from "react";
import styles from "./project.module.css";
import ProjectItem from "./ProjectItem";
import ProjectsData from "../../Data/ProjectsData";
import Button from "../UI/Button";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const Projects = () => {
  const nonThemeColor = useSelector(state => state.nonThemeColor);
  const uiColor = useSelector(state => state.uiColor);
  let projects = ProjectsData.DUMMY_PROJECTS;

  return (
    <section id="projects" className={styles.carouselSection}>
      {/* Main title centered */}
      <div className={styles.titleWrapper}>
        <h1 className={styles.mainTitle}>Educational Tour</h1>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500 }}
        loop={true}
        spaceBetween={40}
        slidesPerView={1}
        className={styles.swiper}
      >
        {projects.map((item, index) => (
          <SwiperSlide key={index}>
            <div className={styles.carouselItem}>
              <img
                src={item.image}
                alt={item.title}
                className={styles.carouselImage}
              />
              <h2 className={styles.carouselTitle}>{item.title}</h2>
              <p className={styles.carouselDescription}>{item.description}</p>
              <a href={item.liveUrl} target="_blank" rel="noreferrer">
                {/* Optional button or link */}
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Projects;
