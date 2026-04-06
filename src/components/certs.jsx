import CertificateCard from "./ui/certificate-card";

export default function Certs() {
  return (
    <div className="max-w-[1024px]">
      <h1 className="font-druk text-white mb-8 border-b border-white/10 pb-2">
        CERTIFICATIONS
      </h1>

      <div className="grid grid-cols-1 gap-6">
        {/* TryHackMe SEC1 */}
        <CertificateCard
          badge="/badge/thm-sec1.png"
          title={
            <>
              TryHackMe <br /> Cyber Security 101 (SEC1)
            </>
          }
          issuedDate="APR 2026"
          description="A hands-on certification covering the core pillars of cybersecurity. Validated technical proficiency in network security, web exploitation basics, and defensive monitoring through interactive, lab-based challenges."
          credentialId="576db96f-e42f-4bbe-bdee-4996d5d0f9b9"
          credentialUrl="https://www.credly.com/badges/576db96f-e42f-4bbe-bdee-4996d5d0f9b9"
          platform="TryHackMe"
          skills={[
            "Nmap",
            "Wireshark",
            "Metasploit",
            "Snort",
            "Gobuster",
            "John the Ripper",
            "CyberChef",
          ]}
        />

        {/* Google Cybersecurity */}
        <CertificateCard
          badge="/badge/google.png"
          title={
            <>
              Google Cybersecurity <br /> Professional Certificate
            </>
          }
          issuedDate="FEB 2026"
          description="Foundational training in security analyst workflows and network architecture. Developed a solid understanding of OSI and TCP/IP models while building hands-on skills in Linux, SQL, and Python for security-related tasks and data analysis."
          credentialId="7c0e90f7-62f6-418b-bdb9-ae29bd1e9777"
          credentialUrl="https://www.credly.com/badges/7c0e90f7-62f6-418b-bdb9-ae29bd1e9777"
          platform="Coursera"
          skills={["Python", "SQL", "Linux", "BASH", "TCP/IP", "OSI"]}
        />
      </div>
    </div>
  );
}
