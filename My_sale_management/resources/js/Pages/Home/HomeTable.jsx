import { lazy, Suspense, useEffect, useState } from "react";
const DataTable = lazy(() => import("react-data-table-component"));

//___ Css ___//
import "../../assets/css/DataTable.css";

//___ Components ___//
import Loader from "../../Components/Loader/Loader";

const HomeTable = () => {
    // States
    const [apiData, setApiData] = useState([]);
    const [searchData, setSearchData] = useState("");
    const [filteredApiData, setFilteredApiData] = useState([]);
    const [relodeHomeTable, setRelodeHomeTable] = useState(false);

    //___ Column for datatable start ____//
    const columns = [
        {
            name: "Sl No",
            field: "SlNo",
            selector: (row, index) => index + 1,
            width: "70px",
        },
        {
            name: "Material Name",
            field: "MaterialName",
            selector: (row) => row.name,
        },
        {
            name: "Meters Available",
            field: "MetersAvailable",
            selector: (row) => Number(row.stock).toFixed(2),
        },
        {
            // name: "Price Per Meter",
            name: "Buy price",
            field: "PricePerMeter",
            selector: (row) => Number(row.price).toFixed(2),
        },
        {
            name: "Total Value",
            field: "TotalValue",
            selector: (row) =>
                (Number(row.stock) * Number(row.price)).toFixed(2),
        },
        {
            name: "Action",
            cell: (row) =>
                // <div className="d-flex" style={{ gap: "3px" }}>
                //     <Suspense fallback={<Loader />}>
                //         <ModalPage
                //             id={row.id}
                //             slug={"Stock Material"}
                //             inputFields={inputFieldsForAddStockMaterial}
                //             ModalOpenBtnTitle="Stock"
                //             ModalOpenBtnStyle={stockModalOpenBtnStyle}
                //             api={"/updateStock"}
                //             setLoading={setLoading}
                //             setRelodeTable={setRelodeTable}
                //         />
                //         <ModalPage
                //             id={row.id}
                //             slug={"Deduct Material"}
                //             inputFields={inputFieldsForDeductMaterial}
                //             ModalOpenBtnTitle="Deduct"
                //             ModalOpenBtnStyle={deductModalOpenBtnStyle}
                //             api={"/updateDeduct"}
                //             setLoading={setLoading}
                //             setRelodeTable={setRelodeTable}
                //         />
                //         <ModalPage
                //             id={row.id}
                //             viewPrice={row.price}
                //             slug={"Price"}
                //             inputFields={inputFieldsForPriceMaterial}
                //             ModalOpenBtnTitle="Price"
                //             ModalOpenBtnStyle={priceModalOpenBtnStyle}
                //             api={"/updatePrice"}
                //             setLoading={setLoading}
                //             setRelodeTable={setRelodeTable}
                //         />
                //     </Suspense>
                // </div>
                "Edit",
        },
    ];

    //___ Column for datatable end ____//

    //___ Searching function ___//
    useEffect(() => {
        const result = apiData.filter((filteredApiData) => {
            return filteredApiData.name
                .toLowerCase()
                .match(searchData.toLowerCase());
        });
        setFilteredApiData(result);
    }, [searchData]);

    return (
        <>
            <div className="searchInput">
                <input
                    type="text"
                    placeholder="Search by material name"
                    value={searchData}
                    onChange={(e) => {
                        setSearchData(e.target.value);
                    }}
                />
            </div>
            <Suspense fallback={<Loader />}>
                <DataTable
                    columns={columns}
                    data={filteredApiData}
                    pagination
                    // fixedHeader
                    // fixedHeaderScrollHeight="400px"
                    highlightOnHover
                />
            </Suspense>
        </>
    );
};

export default HomeTable;
