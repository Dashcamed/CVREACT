import React from "react";
import AvatarPortrait3 from "../../common/avatars/AvatarPortrait3";
import MockupCode from "../../common/mockupCode/MockupCode";

const About = ({ content }) => {
  return (
    <section className="h-fit bg-gradient-to-b from-base-100 via-base-300 to-base-100 grid grid-cols-1 sm:grid-cols-2 gap-3">
      <div className="content-center justify-self-center">
        <AvatarPortrait3 />
      </div>
      <div className="content-center justify-self-center mx-2 bg-inherit">
        <MockupCode content={content} />
      </div>
      <article className="content-center justify-self-center mx-2 bg-inherit border border-primary-content p-6 rounded-lg mb-3">
        <h2 className="text-3xl mb-2">Resume</h2>
        <p className="prose lg:prose-xl">
          Estudiante de desarrollo web full-stack, administrador gastronómico
          con 8 años de experiencia. Me enfoco principalmente en las tecnologías
          y lenguajes más demandadas del desarrollo web como lo son HTML, CSS y
          Javascript. Busco crear interfaces visuales únicas con React, Tailwind
          y librerias UI que entreguen una gran experiencia al usuario. Tengo
          conocimientos en Java para la construcción de APIS en Springboot y
          técnicas de prompting con Python. Me considero apasionado, responsable
          y autodidacta. Me adapto facilmente a entornos colaborativos para
          resolver requerimientos del dia a dia. Espero con muchas ansias
          trabajar y construir software de calidad siempre usando las ultimas
          tendencias del desarrollo web.
        </p>
      </article>
      <article className="place-content-start mx-2 bg-inherit border border-primary-content p-6 rounded-lg mb-3">
        <h2 className="text-3xl mb-3">Certificados</h2>
        <ul>
          <li>
            <button className="btn btn-outline w-full my-1">React</button>
          </li>
          <li>
            <button className="btn btn-outline w-full my-1">Java</button>
          </li>
          <li>
            <button className="btn btn-outline w-full my-1">Ingles</button>
          </li>
        </ul>
        <h2 className="text-3xl mb-2  mt-3">Recomendaciones</h2>
      </article>
    </section>
  );
};

export default About;
