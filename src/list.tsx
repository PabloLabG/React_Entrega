import React from "react";
import { getMembers } from "./api/api-member";
import ApiMemberEntity from "./api/api-member-entity";
import { MemberTableHead } from "./components/member-table-head";
import { MemberTableRow } from "./components/member-table-row";

interface Props {
  organization: string;
}

export const ListPage: React.FC<Props> = React.memo((props) => {
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

      <table className="table">
        <MemberTableHead />
        <tbody>
          {members?.map((member) => (
            <MemberTableRow member={member} key={member.id} />
          ))}
        </tbody>
      </table>
    </>
  );
});
