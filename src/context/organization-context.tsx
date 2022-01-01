import React from "react";
import OrganizationEntity from "../common/organization-entity";

const initialContextValue = {
  organizationContext: "",
  setOrganizationContext: (value: string) => {},
};

export const OrganizationContext =
  React.createContext<OrganizationEntity>(initialContextValue);
