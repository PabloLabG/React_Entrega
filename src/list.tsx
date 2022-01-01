import React, { useContext } from "react";
import { getMembers } from "./api/api-member";
import ApiMemberEntity from "./api/api-member-entity";
import { MemberTable } from "./components/member-table";
import { OrganizationContext } from "./context/organization-context";

/*
interface Props {
  organization: string;
}
*/
export const ListPage: React.FC /*<Props>*/ = (/*props*/) => {
  // const { organization } = props;
  const { organizationContext, setOrganizationContext } =
    React.useContext(OrganizationContext);

  //const [inputMember, setInputMember] = React.useState(organizationContext);
  const [members, setMembers] = React.useState<ApiMemberEntity[]>([]);

  React.useEffect(() => {
    getMembers(organizationContext).then((data) => {
      setMembers(data);
    });
  }, []);

  const handleInputMemberChange = (event) =>
    setOrganizationContext(event.target.value);
  const handleKeyUpMember = (event) => {
    if (event.key === "Enter" || event.keyCode === 13) {
      handleSearchClick();
    }
  };

  const handleSearchClick = () => {
    getMembers(organizationContext).then((data) => {
      setMembers(data);
    });
  };

  return (
    <>
      <h2>Hello from List page</h2>

      <input
        type="text"
        value={organizationContext}
        onChange={handleInputMemberChange}
        onKeyUp={handleKeyUpMember}
      />
      <button onClick={handleSearchClick}>Buscar</button>

      <MemberTable members={members} />
    </>
  );
};
