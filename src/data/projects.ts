export interface Project {
  title: string;
  description: string;
  role?: string;
  tags: string[];
  link: string;
}

export const projects: Project[] = [
  {
    title: "xfrdp3-gui",
    description:
      "A graphical user interface for the FreeRDP v3 client. Simplifies remote desktop parameters, session management, and authentication configurations on Linux systems.",
    tags: ["Python", "FreeRDP", "Linux"],
    link: "https://github.com/Mvlprem/xfrdp3-gui",
  },
  {
    title: "Simple Icons",
    role: "Former Maintainer",
    description:
      "Maintained one of the most widely used open-source brand icon libraries. Reviewed community pull requests, audited asset submissions, and helped enforce repository contribution standards.",
    tags: ["Open-Source", "Code-Review"],
    link: "https://github.com/simple-icons/simple-icons",
  },
  {
    title: "Poly Clash",
    description:
      "A mobile arcade car game built in Unity. Developed independently to explore game physics, state management, mobile performance optimization, and asset pipelines.",
    tags: ["Unity", "C#", "Blender", "Game-Physics", "Mobile"],
    link: "https://github.com/Mvlprem/poly-clash",
  },
];
