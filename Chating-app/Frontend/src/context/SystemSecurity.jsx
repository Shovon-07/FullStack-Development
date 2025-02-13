import { createContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

export const SystemSecurity = createContext();

const SecurityProvider = ({ children }) => {
  const baseUrl = import.meta.env.VITE_APP_SECURITY_URL;
  const socket = io(baseUrl);
  const [isBlocked, setIsBlocked] = useState(false);

  const credentials = {
    domain: "Radian agrovet for test",
    id: "67a7590e7e1ddde56ed22f99",
    token: "!@Sh@v@n@7$EX->Rit&Pri&Shem_Radian_test",
  };

  useEffect(() => {
    socket.on("connect", () => {
      console.log(`✅ Connected: ${socket.id}`);

      // Send security credentials to backend
      const payload = {
        domain: credentials.domain,
        id: credentials.id,
        token: credentials.token,
      };
      socket.emit("security-credentials", payload);
    });

    // Listen for security status updates from server
    socket.on("security-status", (data) => {
      if (
        data[0]._id == credentials.id &&
        data[0].domain == credentials.domain &&
        data[0].token == credentials.token
      ) {
        setIsBlocked(data[0].is_blocked);
        console.log(`✅ Application secured`);
      }
    });

    // return () => {
    //   socket.disconnect();
    // };
  }, []);

  return (
    <SystemSecurity.Provider value={{ isBlocked }}>
      {!isBlocked ? (
        children
      ) : (
        <div className="animated fadeInDown h-screen flex items-center justify-center flex-col">
          <h1 className="text-2xl">🚨 System Expired</h1>
          <a
            href="https://wa.me/+8801767692422"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-blue-700"
          >
            Contact Us
          </a>
        </div>
      )}
    </SystemSecurity.Provider>
  );
};

export default SecurityProvider;
