"use client";
import { useState } from "react";
import DesktopIcon from "./desktop-icons";
import Certs from "../certs";
import AboutMe from "../about-me";
import Projects from "../projects";
import Contact from "../contact";

export default function Desktop() {
  const [openFile, setOpenFile] = useState(null);

  return (
    <div className="w-full min-h-[500px] bg-[#2C001E] relative">
      {/* IF nothing is open, show the icons */}
      {!openFile ? (
        <div className="p-6 flex flex-row flex-wrap gap-4">
          <DesktopIcon
            name="AboutMe.md"
            icon="/@me.svg"
            onClick={() => setOpenFile("about")}
          />

          <DesktopIcon
            name="Certs.md"
            icon="/certs.svg"
            onClick={() => setOpenFile("certs")}
          />
          <DesktopIcon
            name="Projects.md"
            icon="/projects.svg"
            onClick={() => setOpenFile("projects")}
          />

          <DesktopIcon
            name="Contact.md"
            icon="/contact.svg"
            onClick={() => setOpenFile("contact")}
          />
        </div>
      ) : (
        /* IF a file is open, show a "back" button and the content */
        <div className="bg-[#1e1e1e] p-6 text-white flex-1 min-h-[500px] ">
          <button
            onClick={() => setOpenFile(null)}
            className="cursor-pointer mb-4 text-xs bg-white/10 px-2 py-1 rounded"
          >
            [X] Close File
          </button>

          <div className="mt-4">{openFile === "certs" && <Certs />}</div>
          <div className="mt-4">{openFile === "about" && <AboutMe />}</div>
          <div className="mt-4">{openFile === "projects" && <Projects />}</div>
          <div className="mt-4">{openFile === "contact" && <Contact />}</div>
        </div>
      )}
    </div>
  );
}
