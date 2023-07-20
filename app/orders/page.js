"use client";

import Datable from "@/components/Datatable/Datable";
import Header from "@/components/Header";
import Image from "next/image";
import { del, noavatar, view } from "@/public/image";
import { rows } from "@/utils/contentExports";
import Link from "next/link";

const page = () => {
  const handleDelete = (id) => {
    //delete the id
    console.log(id + " has been deleted");
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "avatar",
      headerName: "Avatar",
      width: 100,
      renderCell: (params) => {
        return (
          <Image
            className="rounded-full mx-auto my-auto shadow-sm object-cover"
            src={params.row.image || noavatar}
            alt="Avatar"
            width={32}
            height={32}
          />
        );
      },
    },

    {
      field: "firstName",
      headerName: "First name",
      width: 150,
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
      editable: true,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
    { field: "status", headerName: "Status", width: 100, type: "boolean" },
    {
      field: "actions",
      headerName: "Actions",
      width: 100,
      renderCell: (params) => {
        return (
          <div className="action flex justify-between items-center gap-3">
            <Link href="/" className="view">
              <Image src={view} alt="view" />
            </Link>
            <div
              className="delete"
              onClick={() => handleDelete(params.row.id)}
            >
              <Image src={del} alt="delete" />
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="p-2 m-2 md:p-10 md:m-10 rounded-3xl bg-gray-950 h-full">
      <Header category="orders" title="all orders" />
      <div className="p-7 bg-white rounded-2xl overflow-hidden w-full max-h-[100vh]">
        <Datable columns={columns} rows={rows} />
      </div>
    </div>
  );
};

export default page;
