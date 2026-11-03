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
      "A graphical user interface for the FreeRDP v3 client that simplifies session management on Linux while enforcing host-bound security. Implemented AES-128 (Fernet) encryption to lock target IPs, ports, and credentials on disk cryptographically binding the data to the local machine-id and user account to prevent unauthorized access and credential dumping.",
    tags: ["Python", "FreeRDP", "Linux", "Cryptography", "AES-128"],
    link: "https://github.com/Mvlprem/xfrdp3-gui",
  },
  {
    title: "Simple Icons",
    role: "Former Maintainer",
    description:
      "Maintained a globally utilized open-source brand icon library, managing high-volume repository workflows. Audited and verified community asset submissions against strict technical specifications and compliance guidelines before merging pull requests.",
    tags: [
      "Open-Source",
      "Asset-Verification",
      "Quality-Assurance",
      "Code-Review",
    ],
    link: "https://github.com/simple-icons/simple-icons",
  },
];
