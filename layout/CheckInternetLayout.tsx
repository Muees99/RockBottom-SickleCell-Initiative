"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const CheckInternetLayout = ({ children }: { children: React.ReactNode }) => {
  const [isOnline, setIsOnline] = useState(true);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const updateOnlineStatus = () => {
      const online = navigator.onLine;
      setIsOnline(online);

      if (!online) {
        // Save current path before redirecting
        sessionStorage.setItem("last-visited", pathname);
        router.push("/no-connection");
      }
    };

    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);

    // Initial check
    updateOnlineStatus();

    return () => {
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
    };
  }, [pathname, router]);

  return <>{isOnline ? children : null}</>;
};

export default CheckInternetLayout;
