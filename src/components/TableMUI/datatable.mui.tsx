import React from "react";
import {
  DataGrid,
  GridColDef,
  gridRowsLookupSelector,
  GridValueGetterParams,
  GridRenderCellParams,
} from "@mui/x-data-grid";
import Avatar from "@mui/material/Avatar";

import MemberRowEntity from "../../common/member-row-entity";

interface Props {
  rows: MemberRowEntity[];
  columns: GridColDef[];
}

export const DataTable: React.FC<Props> = (props) => {
  const { columns, rows } = props;
  /*
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "avatar_url",
      headerName: "Avatar",
      width: 130,
      renderCell: (params) => <Avatar alt="Remy Sharp" src={params.value} />,
    },
    { field: "login", headerName: "Name", width: 130 },
  ];

  const rows = [
    {
      id: 1,
      avatar_url: "https://avatars.githubusercontent.com/u/14540103?v=4",
      login: "Jon",
      age: 35,
    },
    {
      id: 2,
      avatar_url: "https://avatars.githubusercontent.com/u/14540103?v=4",
      login: "Cersei",
      age: 42,
    },
    {
      id: 3,
      avatar_url: "https://avatars.githubusercontent.com/u/14540103?v=4",
      login: "Jaime",
      age: 45,
    },
    {
      id: 4,
      avatar_url: "https://avatars.githubusercontent.com/u/14540103?v=4",
      login: "Arya",
      age: 16,
    },
    {
      id: 5,
      avatar_url: "https://avatars.githubusercontent.com/u/14540103?v=4",
      login: "Daenerys",
      age: null,
    },
    {
      id: 6,
      avatar_url: "https://avatars.githubusercontent.com/u/14540103?v=4",
      login: null,
      age: 150,
    },
    {
      id: 7,
      avatar_url: "https://avatars.githubusercontent.com/u/14540103?v=4",
      login: "Ferrara",
      age: 44,
    },
    {
      id: 8,
      avatar_url: "https://avatars.githubusercontent.com/u/14540103?v=4",
      login: "Rossini",
      age: 36,
    },
    {
      id: 9,
      avatar_url: "https://avatars.githubusercontent.com/u/14540103?v=4",
      login: "Harvey",
      age: 65,
    },
  ];
*/

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
};
