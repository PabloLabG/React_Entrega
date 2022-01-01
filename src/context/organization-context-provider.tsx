import React, { Children } from "react";
import { OrganizationContext } from "./organization-context";

export const OrganizationContextProvider: React.FC = ({
  children, //Descomponemos las PROPS y nos quedamos con childrens
}) => {
  // Con useState podremos setear el contexto
  const [organizationContext, setOrganizationContext] =
    React.useState("lemoncode");

  return (
    <>
      <OrganizationContext.Provider
        value={{
          organizationContext,
          setOrganizationContext,
        }}
      >
        {children}
      </OrganizationContext.Provider>
    </>
  );
};
