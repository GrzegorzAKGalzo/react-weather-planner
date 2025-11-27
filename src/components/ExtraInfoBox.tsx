import type { ReactNode } from "react";

interface InfoProps {
  children: ReactNode;
}

function ExtraInfoBox({ children }: InfoProps) {
  return (
    <div className="bg-accent rounded-lg w-full flex p-3 items-center text-left gap-5 ">
      {children}
    </div>
  );
}

ExtraInfoBox.propTypes = {};

export default ExtraInfoBox;
