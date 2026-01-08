import { useEffect, useRef, useState } from "react";

const ScrollPage = () => {
  const sectionsRef = useRef({});
  const [active, setActive] = useState("About");

  const sections = ["About", "Services", "Portfolio", "Contact"];

  const scrollToSection = (name) => {
    sectionsRef.current[name].scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      for (let name of sections) {
        const section = sectionsRef.current[name];
        if (!section) continue;

        const { offsetTop, offsetHeight } = section;

        if (
          scrollPosition >= offsetTop - 100 &&
          scrollPosition < offsetTop + offsetHeight - 100
        ) {
          setActive(name);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav>
        {sections.map((name) => (
          <button key={name} onClick={() => scrollToSection(name)}>
            {active === name ? `▶ ${name}` : name}
          </button>
        ))}
      </nav>

      {sections.map((name) => (
        <section
          key={name}
          ref={(el) => (sectionsRef.current[name] = el)}
          style={{ height: "100vh" }}
        >
          <h2>{name}</h2>
          <p>{name} content</p>
        </section>
      ))}
    </>
  );
};

export default ScrollPage;