import { createContext, useEffect, useState } from "react";

export const ProfileContext = createContext();

function ProfileProvider({ children }) {
  const [profile, setProfile] = useState(null);

  
  useEffect(() => {
    const existingUser = JSON.parse(
      sessionStorage.getItem("existinguser")
    );
    if (existingUser) {
      setProfile(existingUser);
    }
  }, []);

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
}

export default ProfileProvider;
