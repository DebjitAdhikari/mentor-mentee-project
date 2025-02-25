import { createContext, useEffect, useState } from "react";

// Create Context
export const MentorContext = createContext();

function MentorProvider({ children }) {
  // Define state or functions to share
  const [mentorDetails, setMentorDetails] = useState();
  useEffect(()=>{
 console.log('men',mentorDetails)
  },[mentorDetails])

  return (
    <MentorContext.Provider value={{ mentorDetails, setMentorDetails }}>
      {children}
    </MentorContext.Provider>
  );
}

export default MentorProvider;


