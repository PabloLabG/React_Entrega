import ApiMemberEntity from "./api-member-entity";

export const getMembers = (inputMember: string): Promise<ApiMemberEntity[]> => {
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
