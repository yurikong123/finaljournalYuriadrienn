import React, { useState, useEffect } from "react";

function Routes(props) {
  const [activeIndex, setActiveIndex] = useState(0);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#certificate", label: "Certificate" },
    { href: "#projects", label: "Tour" },
    { href: "#getInTouch", label: "Get In Touch" },
    { href: "#journal", label: "Journal" },
    { href: "#gallery", label: "Gallery" },
  ];
  

  // Optional: Update active nav on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 150; // adjust offset for navbar height
      navItems.forEach((item, index) => {
        const section = document.querySelector(item.href);
        if (section) {
          if (
            scrollPos >= section.offsetTop &&
            scrollPos < section.offsetTop + section.offsetHeight
          ) {
            setActiveIndex(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (index, href, e) => {
    e.preventDefault();
    setActiveIndex(index);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    props.onClick?.();
  };

  return (
    <nav>
      {navItems.map((item, index) => (
        <a
          key={index}
          href={item.href}
          className={`navs ${activeIndex === index ? "active" : ""}`}
          onClick={(e) => handleClick(index, item.href, e)}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}

export default Routes;
