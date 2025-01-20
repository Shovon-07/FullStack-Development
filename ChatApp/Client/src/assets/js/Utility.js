export const TableStyles = () => {
  const customStyles = {
    rows: {
      style: {
        minHeight: "55px",
        border: "var(--table-border)",
        "&:nth-child(1)": {
          borderTop: "none",
        },
        "&:last-child": {
          borderBottom: "none",
        },
      },
    },
    headCells: {
      style: {
        textTransform: "capitalize",
        background: "var(--main-clr)",
        color: "var(--light-1)",
        fontSize: "1rem !important",
        justifyContent: "center",

        borderRight: "1px solid var(--main-clr)",
        "&:last-child": {
          borderRight: "none",
        },
      },
    },
    cells: {
      style: {
        justifyContent: "center",
        fontSize: "0.90rem",

        borderRight: "var(--table-border)",
        "&:last-child": {
          borderRight: "none",
        },
      },
    },
  };

  return customStyles;
};
