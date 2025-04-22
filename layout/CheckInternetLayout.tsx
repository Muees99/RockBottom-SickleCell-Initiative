"use client";
import React, { FC, ReactNode, useEffect, useState } from "react";
import isOnline from "is-online";
import { usePathname, useRouter } from "next/navigation";

const CheckInternetLayout: FC<{ children: ReactNode }> = ({ children }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isOnlineStatus, setIsOnlineStatus] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  /* eslint-disable react-hooks/exhaustive-deps*/
  useEffect(() => {
    const checkOnlineStatus = async () => {
      const currentUrl = window.location.href;
      const online = await isOnline();

      if (!online) {
        if (pathname !== `${currentUrl}no-connection`) {
          router.push("/no-connection");
        }
      }

      if (online) {
        if (pathname === `${currentUrl}no-connection`) {
          router.push("/");
        }
      }
    };

    checkOnlineStatus();
  }, []);
  return <div>{children}</div>;
};

export default CheckInternetLayout;
