// "use client";
// import React, { FC, ReactNode, useEffect, useState } from "react";
// import isOnline from "is-online";
// import { usePathname, useRouter } from "next/navigation";

// const CheckInternetLayout: FC<{ children: ReactNode }> = ({ children }) => {
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   const [isOnlineStatus, setIsOnlineStatus] = useState(false);
//   const router = useRouter();
//   const pathname = usePathname();

//   /* eslint-disable react-hooks/exhaustive-deps*/
//   useEffect(() => {
//     const checkOnlineStatus = async () => {
//       const currentUrl = window.location.href;
//       const online = await isOnline();

//       if (!online) {
//         if (pathname !== `${currentUrl}no-connection`) {
//           router.push("/no-connection");
//         }
//       }

//       if (online) {
//         if (pathname === `${currentUrl}no-connection`) {
//           router.push("/");
//         }
//       }
//     };

//     checkOnlineStatus();
//   }, []);
//   return <div>{children}</div>;
// };

// export default CheckInternetLayout;


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
