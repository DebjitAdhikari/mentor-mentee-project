import { createContext, useEffect, useState } from "react";

// Create Context
export const MentorContext = createContext();

function MentorProvider({ children }) {
  // Define state or functions to share
  const [MentorDetails, SetMentorDetails] = useState();
  useEffect(()=>{
 console.log('men',MentorDetails)
  },[MentorDetails])

  return (
    <MentorContext.Provider value={{ MentorDetails, SetMentorDetails }}>
      {children}
    </MentorContext.Provider>
  );
}

export default MentorProvider;


