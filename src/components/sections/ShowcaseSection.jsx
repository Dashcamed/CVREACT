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
              <a href="https://www.lafikapanaderia.cl/" target="_blank">
                <img
                  src="https://res.cloudinary.com/dpisx0ysb/image/upload/v1755362358/Screenshot_2025-08-16_123445_iy9wkk.png"
                  alt="LaFikaPanaderia"
                  className="object-contain"
                />
              </a>
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
                <a href="https://aironfit.streamlit.app/" target="_blank">
                  <img
                    src="https://res.cloudinary.com/dpisx0ysb/image/upload/v1755387928/Screenshot_2025-08-16_194515_akkjwr.png"
                    alt="Generador de rutinas de gimnasio"
                  />
                </a>
              </div>
              <h2>Generador de rutinas de gimnasio</h2>
              <p className="text-white-50 md:text-xl">
                Proyecto con IA generativa usando Python y streamlit. Usa la API
                de Gemini para generar una rutina personalizada de gimnasio.
              </p>
            </div>
          </div>
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffe7db]">
                <a
                  href="https://github.com/Dashcamed/entregaFinalB3"
                  target="_blank"
                >
                  <img
                    src="https://res.cloudinary.com/dpisx0ysb/image/upload/v1755365210/Screenshot_2025-08-16_132639_xoouzf.png"
                    alt="API de Adopciones de mascotas"
                  />
                </a>
              </div>
              <h2>API de Adopciones de mascotas</h2>
              <p className="text-white-50 md:text-xl">
                API REST con NodeJs, Express y MongoDB para portal de adopción
                de mascotas. Usa autenticación JWT y Passport.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
