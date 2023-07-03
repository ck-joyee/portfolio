import { motion } from "framer-motion";
import project1 from "../../Images/p1.png";
import project2 from "../../Images/p2.png";
import project3 from "../../Images/p3.png";
const projects = [
    {
      id: 1,
      title: "Language Club",
      description: "This website is for language learning club, where childerns can learn so many other languages with their mother tongue on their summer break. ",
      image: project1,
      liveLink: "https://language-learning-53ce1.web.app/",
    },
    {
      id: 2,
      title: "Chef-Squad",
      description: "This website for the famous chef's recipes. Each chef's all favourite receipes can be found here with just one click with his/her imformation.",
      image: project2,
      liveLink: "https://web-assignment10.web.app/",
    },
    {
      id: 3,
      title: "Job Hunt",
      description: "This website is for hunting jobs. One can search for any kind of job with all the deatils infomation. A easy way to find our tough but dream job.",
      image: project3,
      liveLink: "https://jobhuntjoyee.netlify.app/",
    },
  ];
const Work = () => {
    return (
        <section className="section py-10 ml-10 mr-10 font-mono text-center" id="work">
            <div className="container mx-auto">
        <h2 className="h2 text-gradient scale-up">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-gradient shadow-lg rounded-lg overflow-hidden mb-20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover scale-up"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 scale-up">{project.title}</h3>
                <p className="text-gray-600 mb-4 scale-up">{project.description}</p>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" text-white px-4 py-2 rounded-lg btn hover scale-up"
                >
                  View Live
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
        </section>
    );
};

export default Work;