import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];

    projects.forEach((project, index) => {
      gsap.fromTo(
        project,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: project,
            start: "top bottom-=100",
          },
        }
      );
    });
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
  }, []);

  return (
    <section ref={sectionRef} id="work" className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* left */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img
                src="https://res.cloudinary.com/dpisx0ysb/image/upload/v1755362358/Screenshot_2025-08-16_123445_iy9wkk.png"
                alt="LaFikaPanaderia"
                className="object-contain"
              />
            </div>
            <div className="text-content">
              <h2>Ecommerce web-app La Fika Panaderia</h2>
              <p className="text-white-50 md:text-xl">
                Aplicación web hecha en NextJs v15, Backend en NodeJs con
                Express, Typescript y MongoDB. Integración de pagos reales con
                MercadoPago todo protegido por autenticación con JWT.
              </p>
            </div>
          </div>
          {/* right */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#ffefdb]">
                <img
                  src="https://res.cloudinary.com/dpisx0ysb/image/upload/v1755387928/Screenshot_2025-08-16_194515_akkjwr.png"
                  alt="Generador de rutinas de gimnasio"
                />
              </div>
              <h2>Generador de rutinas de gimnasio</h2>
            </div>
          </div>
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffe7db]">
                <img
                  src="https://res.cloudinary.com/dpisx0ysb/image/upload/v1755365210/Screenshot_2025-08-16_132639_xoouzf.png"
                  alt="API de Adopciones de mascotas"
                />
              </div>
              <h2>API de Adopciones de mascotas</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
