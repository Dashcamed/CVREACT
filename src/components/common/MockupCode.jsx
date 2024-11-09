import React from "react";
import { Link } from "react-router-dom";

const MockupCode = () => {
  return (
    <div className="mockup-code">
      <pre data-prefix="$">
        <code>npm i Juan Camilo Medina Escamilla</code>
      </pre>
      <pre data-prefix=">" className="text-warning">
        <code>installing...</code>
      </pre>
      <pre data-prefix=">" className="text-success">
        <code>Done!</code>
      </pre>
      <pre data-prefix="$">
        <code>Based in Chile GMT-4 </code>
        <code>From Colombia</code>
      </pre>
      <pre data-prefix="$">
        <code>Full-Stack Web Developer Student</code>
      </pre>
      <pre data-prefix="$" className="text-secondary">
        <code>
          <a href="https:/linkedin.com/in/camilomedinadev" target="_blank">
            User LinkedIn
          </a>
        </code>
      </pre>
      <pre data-prefix="$" className="text-secondary">
        <code>
          <a href="mailto:camilomedina.es@gmail.com">Email to user:</a>
        </code>
      </pre>
      <pre data-prefix="$" className="text-secondary">
        <code>
          <a href="https://github.com/Dashcamed" target="_blank">
            User Github:
          </a>
        </code>
      </pre>
      <pre data-prefix="$" className="text-primary">
        <code>
          <Link to={"/skills"}>User Skills: Click here!</Link>
        </code>
      </pre>
    </div>
  );
};

export default MockupCode;
