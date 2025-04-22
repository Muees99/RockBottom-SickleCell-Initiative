import React from "react";

const Copyright: React.FC = () => {
     const currentDate = new Date();
     const currentYear = currentDate.getFullYear();
  return (
    <div className="flex flex-col justify-start items-start fixed bottom-0 mt-4 text-sm text-[#808080] w-full px-4">
      &copy; {currentYear} RockBottom SickleCell Initiative. | All rights reserved.
    </div>
  );
};

export default Copyright;
