import React from "react";

const Footer = ({ links }) => {
  return (
    <footer className="footer footer-center bg-primary text-primary-content p-10">
      <aside>
        <p className="font-bold">Creada con ❤️ por Camilo Medina</p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          {links.map((link) => (
            <button key={link.title} className="btn btn-ghost p-0">
              <a href={link.url} target="_blank">
                <img src={link.imgUrl} alt={link.title} className="h-12" />
              </a>
            </button>
          ))}
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
