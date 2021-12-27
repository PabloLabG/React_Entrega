import React from "react";
import { Link, generatePath } from "react-router-dom";

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

const getMembers = (inputMember: string): Promise<MemberEntity[]> => {
  return fetch(`https://api.github.com/orgs/${inputMember}/members`).then(
    (response) => {
      if (response.ok) {
        return response.json();
      } else {
        return [];
      }
    }
  );
};

export const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [inputMember, setInputMember] = React.useState("lemoncode");

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
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Id</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {members?.map((member) => (
            <tr key={member.id}>
              <td>
                <img src={member.avatar_url} style={{ width: "5rem" }} />
              </td>
              <td>
                <span>{member.id}</span>
              </td>
              <td>
                <Link to={generatePath("/detail/:id", { id: member.login })}>
                  {member.login}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
