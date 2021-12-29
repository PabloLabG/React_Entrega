import React from "react";
import { MemberTableHead } from "./member-table-head";
import { MemberTableRow } from "./member-table-row";
import ApiMemberEntity from "../api/api-member-entity";

interface Props {
  members: ApiMemberEntity[];
}

export const MemberTable: React.FC<Props> = (props) => {
  const { members } = props;

  return (
    <>
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
};
