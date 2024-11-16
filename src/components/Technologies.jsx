import {RiReactjsLine} from "react-icons/ri";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiPython } from "react-icons/si";
import { FaJava } from "react-icons/fa"; // Placeholder for Java
import { FaCloud } from "react-icons/fa"; // Placeholder for AWS


const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h1 className="text-black my-20 text-center text-4xl">Technologies</h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl" color="#61DBFB" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiHtml5 className="text-7xl" color="#E34F26" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiCss3 className="text-7xl" color="#1572B6" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiJavascript className="text-7xl" color="#F7DF1E"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiDjango className="text-7xl" color="#092E20"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMysql className="text-7xl" color="#4479A1"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiPostgresql className="text-7xl" color="#336791"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiGit className="text-7xl" color="#F05032"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaGithub className="text-7xl" color="#181717"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiPython className="text-7xl" color="#3776AB"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaJava className="text-7xl" color="#007396"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaCloud className="text-7xl" color="#FF9900"/>
            </div>
            
        </div>
    </div>
  )
}

export default Technologies