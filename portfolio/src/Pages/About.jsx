import { Mountain, Layers, Gamepad2, Mail, ArrowUpRight } from "lucide-react";
import Portratt from "../Images/portratt2.jpg";

const hobbies = [
  { name: "Climbing", icon: Mountain },
  { name: "Card Games", icon: Layers },
  { name: "Gaming", icon: Gamepad2 },
];

const About = () => {
  return (
    <main className=" text-white">
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        {/* Heading */}
        <section className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-shadow-lg/20">
            About Me<span className="text-violet-400">.</span>
          </h1>
          <p className="text-slate-600 mt-4 text-lg">
            Developer, problem solver & curious mind.
          </p>
        </section>

        {/* Introduction */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center mb-20">
          <div className="md:col-span-2 space-y-5">
            <h2 className="text-3xl font-semibold text-shadow-lg/20">
              Hello, I'm Gustav.
            </h2>

            <p className="text-slate-600 leading-relaxed">
              I'm a developer from Sweden who likes to play around with code and
              create applications that solve problems
            </p>

            <p className="text-slate-600 leading-relaxed">
              My background includes frontend and backend development, as well
              as teaching JavaScript and React.
            </p>

            <p className="text-slate-600 leading-relaxed">
              I enjoy working with both frontend and backend technologies
            </p>
          </div>

          {/* Profile image */}
          <div className="aspect-[3/4] rounded-2xl bg-zinc-800 overflow-hidden">
            <img
              src={Portratt}
              alt="Gustav Liffner"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        <div className="border-t border-zinc-800 mb-16" />

        {/* My Journey */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-10 text-shadow-lg/20">
            My Journey
          </h2>

          <div className="relative border-l border-zinc-700 ml-2 space-y-10">
            <div className="relative pl-8">
              <div className="absolute -left-[5px] top-2 w-[9px] h-[9px] rounded-full bg-violet-400" />

              <h3 className="text-xl font-medium">
                Frontend & Backend Development
              </h3>
              <p className="text-slate-600 mt-2 leading-relaxed">
                Studied web development at Sundsgårdens folkhögskola, focusing
                on modern web technologies and application development.
              </p>
            </div>

            <div className="relative pl-8">
              <div className="absolute -left-[5px] top-2 w-[9px] h-[9px] rounded-full bg-violet-400" />

              <h3 className="text-xl font-medium">
                Teaching JavaScript & React
              </h3>
              <p className="text-slate-600 mt-2 leading-relaxed">
                Worked as a programming teacher, helping students understand
                JavaScript, React and modern frontend development.
              </p>
            </div>

            <div className="relative pl-8">
              <div className="absolute -left-[5px] top-2 w-[9px] h-[9px] rounded-full bg-violet-400" />

              <h3 className="text-xl font-medium">
                Building Personal Projects
              </h3>
              <p className="text-slate-600 mt-2 leading-relaxed">
                Creating applications like Midgård, exploring mobile
                development, user experiences and creative problem-solving.
              </p>
            </div>
          </div>
        </section>

        <div className="border-t border-zinc-800 mb-16" />

        {/* Beyond the Code */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-5 text-shadow-lg/20">
            Beyond the Code
          </h2>

          <p className="text-slate-600 leading-relaxed max-w-2xl mb-8">
            When I'm not programming, you'll probably find me climbing, playing
            card games with friends or exploring something new.
          </p>

          <div className="flex flex-wrap gap-4">
            {hobbies.map((hobby) => {
              const Icon = hobby.icon;

              return (
                <div
                  key={hobby.name}
                  className="
                    flex items-center gap-3
                    hover:scale-105 transition-transform duration-300 shadow-md
                    rounded-xl px-5 py-4
                    
                    
                  "
                >
                  <Icon size={22} className="text-violet-400" />
                  <span className="text-slate-600">{hobby.name}</span>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
