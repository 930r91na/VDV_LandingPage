import { createContext, useContext } from "react";
import { RefObject } from "react";

type RefsContextType = {
    ourTeamRef: RefObject<HTMLElement>;
  };

const RefsContext = createContext<RefsContextType | undefined>(undefined);

export const useRefs = () => {
  const context = useContext(RefsContext);
  if (context === undefined) {
    throw new Error("useRefs must be used within a RefsProvider");
  }
  return context;
};
    
export default RefsContext;
