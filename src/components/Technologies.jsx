import { RiReactjsLine } from "react-icons/ri";
import { SiHtml5, SiCss3, SiJavascript, SiDjango, SiMysql, SiPostgresql, SiGit, SiPython } from "react-icons/si";
import { FaGithub, FaJava, FaCloud } from "react-icons/fa";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="text-black my-20 text-center text-4xl">Technologies</h1>
      <div className="space-y-10">

        {/* Programming */}
        <div>
          <h2 className="text-black mb-6 text-center text-3xl">Programming</h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
              <SiPython className="text-7xl" color="#3776AB" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
              <FaJava className="text-7xl" color="#007396" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
              <SiJavascript className="text-7xl" color="#F7DF1E" />
            </div>
          </div>
        </div>

        {/* Web Development */}
        <div>
          <h2 className="text-black mb-6 text-center text-3xl">Web Development</h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
              <SiHtml5 className="text-7xl" color="#E34F26" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
              <SiCss3 className="text-7xl" color="#1572B6" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
              <RiReactjsLine className="text-7xl" color="#61DBFB" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
              <SiDjango className="text-7xl" color="#092E20" />
            </div>
          </div>
        </div>

        {/* Tools and Databases Side by Side */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Tools */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-black mb-6 text-center text-3xl">Tools</h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiGit className="text-7xl" color="#F05032" />
              </div>
              <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaGithub className="text-7xl" color="#181717" />
              </div>
            </div>
          </div>

          {/* Databases */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-black mb-6 text-center text-3xl">Databases</h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMysql className="text-7xl" color="#4479A1" />
              </div>
              <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiPostgresql className="text-7xl" color="#336791" />
              </div>
            </div>
          </div>
        </div>

        {/* AWS Services */}
        <div>
          <h2 className="text-black mb-6 text-center text-3xl">AWS Services</h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
              <FaCloud className="text-7xl" color="#FF9900" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
