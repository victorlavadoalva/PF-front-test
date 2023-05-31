import axios from "axios";
import { useEffect, useState } from "react";
import Table, { Direction } from "react-data-table-component";
import SelectSmall from "../../Components/Select";
import imgDefault from "../../Img/ImgCardLanding/default.png";
import style from "./Table.module.css";

const TableAdmin = () => {
  const [bandera, setBandera] = useState(null);
  const [typeUser, setType_user] = useState("");
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("");
  const [galleta, setGalleta] = useState(false);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FkbWluIjp0cnVlLCJpYXQiOjE2ODU0MTc3NjAsImV4cCI6NDg0MTE3Nzc2MH0.afWU7ObBcuGkzTp4NelPghU-KG52h5IgOzBYTOCO0us";

  const columns = [
    {
      name: "Name",
      cell: (row) => (
        <div style={{ justifyContent: "center", display: "contents" }}>
          <img
            src={row.image || imgDefault}
            alt="Avatar"
            style={{ width: "40px", marginRight: "1em", borderRadius: "2em" }}
          />
          {row.name}
        </div>
      ),
      sortable: true,
    },
    { name: "Email", selector: (row) => row.email, sortable: true },
    { name: "Rol", selector: (row) => row.rol, sortable: true },
    {
      name: "Status",
      cell: (row) => (
        <p
          className={
            row.status === "active"
              ? style.status
              : row.status === "banned"
              ? style.statusBanned
              : style.statusInactive
          }
        >
          {row.status}
        </p>
      ),
      sortable: true,
    },
    { name: "Rating", selector: (row) => row.rating, sortable: true },
    { name: "Country", selector: (row) => row.country, sortable: true },
    {
      name: "Actions",
      cell: (row) =>
        bandera && bandera.email === row.email ? (
          row.status == "active" ? (
            <button
              id={row.id}
              name={row.rol}
              className={style.button}
              onClick={handlerBan}
            >
              Ban
            </button>
          ) : (
            <button
              id={row.email}
              className={style.buttonUndo}
              onClick={handlerUnban}
            >
              Unban
            </button>
          )
        ) : null,
    },
  ];

  let datas;
  useEffect(async () => {
    datas = await axios.get(`/admin`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    let filteredData = datas.data;

    if (typeUser !== "") {
      filteredData = filteredData.filter(
        (data) => data.rol.toLowerCase() === typeUser
      );
    }

    if (status !== "") {
      filteredData = filteredData.filter((data) => data.status === status);
    }

    if (!filteredData.length) {
      setData([0]);
    } else {
      setData(filteredData);
    }
  }, [typeUser, status, galleta]);

  const handlerClick = (row) => {
    setBandera(row);
  };

  const type_user = [
    {
      id: "restaurante",
      name: "restaurante",
    },
    {
      id: "user",
      name: "user",
    },
    {
      id: "admin",
      name: "admin",
    },
  ];
  const typeStatus = [
    {
      id: "banned",
      name: "banned",
    },
    {
      id: "active",
      name: "active",
    },
    {
      id: "innactive",
      name: "innactive",
    },
  ];

  const handleTypeUser = (event) => {
    setData([]);
    const selectedType = event.target.value || "";
    // const selectedType = 'User';
    setType_user(selectedType);
  };
  const handlerStatus = (event) => {
    setData([]);
    const selectedStatus = event.target.value || "";
    setStatus(selectedStatus);
  };

  const handlerBan = (event) => {
    axios
      .get(
        event.target.name == "Restaurant"
          ? `/restaurants/${event.target.id}`
          : `/users/${event.target.id}`
      )
      .then((data) => {
        axios.post(
          `/banned`,
          {
            user_banned: data.data,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        setGalleta(!galleta);
      })
      .catch((error) => console.log(error));
  };

  const handlerUnban = (event) => {
    console.log(token);
    axios
      .get(`/banned?email=${event.target.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          // 'Content-Type': 'application/json'
        },
      })
      .then((data) => {
        axios.delete(`/banned/${data.data._id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            // 'Content-Type': 'application/json'
          },
        });
        setGalleta(!galleta);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <SelectSmall
        value={typeUser}
        onChange={handleTypeUser}
        items={type_user}
        title="Filter Rol..."
      />
      <SelectSmall
        value={status}
        onChange={handlerStatus}
        items={typeStatus}
        title="Filter Status..."
      />
      {data.length ? (
        <Table
          columns={columns}
          data={data}
          direction={Direction.AUTO}
          // customStyles={styles}
          highlightOnHover={true}
          pointerOnHover={true}
          theme="solarized"
          onRowClicked={handlerClick}
          pagination={true}
          paginationPerPage={10}
        />
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default TableAdmin;
