import React from "react";
import { getMembers } from "./api/api-member";
import ApiMemberEntity from "./api/api-member-entity";
import { MemberTable } from "./components/member-table";

interface Props {
  organization: string;
}

export const ListPage: React.FC<Props> = (props) => {
  const { organization } = props;

  const [members, setMembers] = React.useState<ApiMemberEntity[]>([]);
  const [inputMember, setInputMember] = React.useState(organization);

  React.useEffect(() => {
    getMembers(inputMember).then((data) => {
      setMembers(data);
    });
  }, []);

  const handleInputMemberChange = (event) => setInputMember(event.target.value);
  const handleKeyUpMember = (event) => {
    if (event.key === "Enter" || event.keyCode === 13) {
      handleSearchClick();
    }
  };

  const handleSearchClick = () => {
    getMembers(inputMember).then((data) => {
      setMembers(data);
    });
  };

  return (
    <>
      <h2>Hello from List page</h2>

      <input
        type="text"
        value={inputMember}
        onChange={handleInputMemberChange}
        onKeyUp={handleKeyUpMember}
      />
      <button onClick={handleSearchClick}>Buscar</button>

      <MemberTable members={members} />
    </>
  );
};
