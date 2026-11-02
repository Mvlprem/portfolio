export interface Credential {
  title: string;
  issuer: string;
  status: "In Progress" | "Completed";
  verifyUrl?: string;
  description: string;
  skills: string[];
}

export const credentials: Credential[] = [
  {
    title: "SOC Level 1 Pathway",
    issuer: "TryHackMe",
    status: "In Progress",
    description:
      "Active hands-on training focusing on network traffic analysis, SIEM log triage, endpoint monitoring, and incident response fundamentals.",
    skills: ["Wireshark", "Splunk", "Network-Analysis", "Incident-Triage"],
  },
  {
    title: "SEC1: Security Fundamentals",
    issuer: "TryHackMe",
    status: "Completed",
    verifyUrl:
      "https://www.credly.com/badges/576db96f-e42f-4bbe-bdee-4996d5d0f9b9",
    description:
      "Certified via hands-on practical exam. Covers core defensive and offensive mechanisms, system security, and vulnerability identification.",
    skills: ["Practical-Labs", "System-Security", "Threat-Vectors"],
  },
  {
    title: "Google Cybersecurity Professional",
    issuer: "Coursera",
    status: "Completed",
    verifyUrl:
      "https://www.credly.com/badges/7c0e90f7-62f6-418b-bdb9-ae29bd1e9777",
    description:
      "Foundational training in cybersecurity operations, Linux command-line auditing, SQL queries for threat detection, and security posture frameworks.",
    skills: [
      "Linux CLI",
      "Python",
      "Bash",
      "SQL",
      "Security-Frameworks",
      "SIEM Concepts",
    ],
  },
];
