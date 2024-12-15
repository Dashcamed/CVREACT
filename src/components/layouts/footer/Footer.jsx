import React from "react";

const Footer = ({ content }) => {
  return (
    <footer className="footer footer-center bg-primary text-primary-content p-10">
      <aside>
        <p className="font-bold">{content.footerText1}</p>
        <p>
          {content.footerText2} {new Date().getFullYear()} {content.footerText3}
        </p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <button className="btn btn-ghost p-0">
            <a href={content.instagramUrl} target="_blank">
              <img
                src={content.instagramLogo}
                alt={content.instagramTitle}
                className="h-12"
              />
            </a>
          </button>
          <button className="btn btn-ghost p-0">
            <a href={content.githubUrl} target="_blank">
              <img
                src={content.githubLogo}
                alt={content.githubTitle}
                className="h-12"
              />
            </a>
          </button>
          <button className="btn btn-ghost p-0">
            <a href={content.linkedinUrl} target="_blank">
              <img
                src={content.linkedinLogo}
                alt={content.linkedinTitle}
                className="h-12"
              />
            </a>
          </button>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
