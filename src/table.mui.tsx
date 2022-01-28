import React from "react";
import { getMembers } from "./api/api-member";
import ApiMemberEntity from "./api/api-member-entity";
import { DataTable } from "./components/table/TableMUI/datatable.mui";
import Avatar from "@mui/material/Avatar";

interface Props {
  organization: string;
}

/*
    Creo que no es la mejor forma de añadir el componente, porque he intentado que DataTable fuere reutilizable y que la definicion
    de las columnas y los datos fueran pasados por parametros, pero sospecho que existe otra forma mejor.
    Seguiré trabajando en el resto de Tareas de Rick y Morty, y todo lo que pueda.
*/

export const TableMUI: React.FC<Props> = (props) => {
  const { organization } = props;
  const [inputMember, setInputMember] = React.useState(organization);

  const [members, setMembers] = React.useState<ApiMemberEntity[]>([]);

  React.useEffect(() => {
    getMembers(inputMember).then((data) => {
      setMembers(data);
    });
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "avatar_url",
      headerName: "Avatar",
      width: 430,
      renderCell: (params) => <Avatar alt="Remy Sharp" src={params.value} />,
    },
    { field: "login", headerName: "Name", width: 130 },
  ];

  return (
    <>
      <DataTable columns={columns} rows={members} />
    </>
  );
};
