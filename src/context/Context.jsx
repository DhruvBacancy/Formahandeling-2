import React, { createContext, useContext, useState } from "react";

const UserData = createContext([]);

function Context({ children }) {
  const [user, setUser] = useState([
    {
      id: 1,
      name: "AAAAAAAAB",
      email: "doug@basalsmartsolutions.com",
      phone: "09173040747",
      country: "India",
    },
    {
      id: 2,
      name: "AAAAAAAABC",
      email: "doug@basalsmartsolutions.com",
      phone: "09173040747",
      country: "India",
    },
    {
      id: 3,
      name: "AAAAAAAABCD",
      email: "doug@basalsmartsolutions.com",
      phone: "09173040747",
      country: "India",
    },
    {
      id: 4,
      name: "AAAAAAAABCDE",
      email: "doug@basalsmartsolutions.com",
      phone: "09173040747",
      country: "India",
    },
    {
      id: 5,
      name: "AAAAAAAABCDEF",
      email: "doug@basalsmartsolutions.com",
      phone: "09173040747",
      country: "India",
    },
    {
      id: 6,
      name: "AAAAAAAABCDEFG",
      email: "doug@basalsmartsolutions.com",
      phone: "09173040747",
      country: "India",
    },
  ]);

  const addUser = (data) => {
    setUser((prev) => [...prev, { id: prev.length + 1, ...data }]);
  };

  const deleteUser = (id) => {
    const updateduser = user.filter((val) => +val.id !== +id);
    setUser(updateduser);
  };
  const editUser = (id, data) => {
    const updateduser = user.map((val) => (+val.id === +id ? data : val));
    setUser(updateduser);
  };

  return (
    <UserData.Provider value={{ user, addUser, deleteUser, editUser }}>
      {children}
    </UserData.Provider>
  );
}

export const contextExport = () => {
  const contextValue = useContext(UserData);
  return contextValue;
};

export default Context;

// const searchUser = (fname) => {
//   const getFilteredName = (query) => {
//     if (!query) {
//       return user;
//     }
//     return user.filter((sname) => sname.name.includes(query));
//   };

// };
