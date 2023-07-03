import JavaScript from "../../icons/javascript.png";
import ReactIcon from "../../icons/react-native.png";
import Html5 from "../../icons/html-5.png";
import Css3 from "../../icons/css-filetype.png";
import Bootstrap5 from "../../icons/bootstrap.png";
import TailwindCss from "../../icons/tailwindcss.png";
import MongoDB from "../../icons/mongodb.png";
import Nodejs from "../../icons/nodejs.png";
import C from "../../icons/c-key.png";
import Github from "../../icons/github.png";
import VsCode from "../../icons/visual-studio-code-2019.png";
import Netlify from "../../icons/netlify.png";
import Firebase from "../../icons/google-firebase-console.png";
import Figma from "../../icons/figma.png";

const Services = () => {
  const skills = [
    { name: "JavaScript", icons: JavaScript },
    { name: "React", icons: ReactIcon },
    { name: "HTML5", icons: Html5 },
    { name: "CSS3", icons: Css3 },
    { name: "Bootstrap 5", icons: Bootstrap5 },
    { name: "Tailwind CSS", icons: TailwindCss },
    { name: "MongoDB", icons: MongoDB },
    { name: "Node.js", icons: Nodejs },
    { name: "C", icons: C },
    { name: "GitHub", icons: Github },
    { name: "VS Code", icons: VsCode },
    { name: "Netlify", icons: Netlify },
    { name: "Firebase", icons: Firebase },
    { name: "Figma", icons: Figma },
  ];

  return (
    <section className="section font-mono text-center mt-16" id="services">
      <div className="container mx-auto">
        <h2 className="text-3xl text-center mb-10">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="text-center mx-4 my-2">
              <img
                src={skill.icons}
                alt={skill.name}
                className="w-12 h-12 mx-auto animate-bounce"
              />
              <p className="mt-2 text-sm">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
