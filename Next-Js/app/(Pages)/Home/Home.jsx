import dynamic from "next/dynamic";
import { useState } from "react";

//___ Components ___//
const HomeTable = dynamic(() => import("@/app/(Pages)/Home/HomeTable"), {
  loading: "",
});
const MyModal = dynamic(() => import("@/app/Components/Modal/MyModal"), {
  loading: "",
});

const Home = () => {
  const [relodeTable, setRelodeTable] = useState(false);

  // Input For modal
  const inputFields = [
    {
      field: "title",
      type: "text",
      label: "Title",
      placeholder: "Enter project title",
    },
    {
      field: "project_name",
      type: "text",
      label: "Project name",
      placeholder: "Enter Project name",
    },
    {
      field: "developer",
      type: "text",
      label: "Developer",
      placeholder: "Enter developer",
    },
  ];

  // Modals styles
  const editModalOpenBtnStyle = {
    // color: "green",
    fontSize: "1rem",
  };

  return (
    <>
      <h1 className="page-title">Dashboard</h1>
      <div style={{ textAlign: "end" }}>
        <MyModal
          slug={`Add new student`}
          inputFields={inputFields}
          ModalOpenBtnTitle="Add student"
          ModalOpenBtnStyle={editModalOpenBtnStyle}
          api={"/add-project"}
          setRelodeTable={setRelodeTable}
        />
      </div>
      <HomeTable relodeTable={relodeTable} setRelodeTable={setRelodeTable} />
    </>
  );
};

export default Home;
