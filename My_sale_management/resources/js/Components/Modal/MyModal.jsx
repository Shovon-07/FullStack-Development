// import * as React from "react";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import Modal from "@mui/material/Modal";

// //___ Css ___//
// import "./MyModal.css";

// const style = {
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     width: 400,
//     bgcolor: "background.paper",
//     border: "2px solid #000",
//     boxShadow: 24,
//     p: 4,
// };

// const MyModal = (props) => {
//     const { slug } = props;
//     const [open, setOpen] = React.useState(false);
//     const handleOpen = () => setOpen(true);
//     const handleClose = () => setOpen(false);

//     return (
//         <div>
//             <Button onClick={handleOpen}>{slug}</Button>
//             <Modal
//                 open={open}
//                 onClose={handleClose}
//                 aria-labelledby="modal-modal-title"
//                 aria-describedby="modal-modal-description"
//             >
//                 <Box sx={style}>
//                     <h1>Modal</h1>
//                 </Box>
//             </Modal>
//         </div>
//     );
// };

// export default MyModal;

import React, { useState, lazy, Suspense } from "react";
const Backdrop = lazy(() => import("@mui/material/Backdrop"));
const Box = lazy(() => import("@mui/material/Box"));
const Modal = lazy(() => import("@mui/material/Modal"));
const Fade = lazy(() => import("@mui/material/Fade"));
const Button = lazy(() => import("@mui/material/Button"));

//___ Icons ___//
import { RxCross2 } from "react-icons/rx";

//___ Css ___//
import "./MyModal.css";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
};

//___ Additional utility ___//
// import AxiosConfig from "../../assets/AxiosConfig";
import Loader from "../Loader/Loader";

const MyModal = (props) => {
    const {
        id,
        slug,
        viewPrice,
        viewDue,
        inputFields,
        api,
        ModalOpenBtnTitle,
        ModalOpenBtnStyle,
        setLoading,
        setRelodeTable,
    } = props;
    // const { http } = AxiosConfig();

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [inputValue, setInputValue] = useState({
        name: "1",
        stock: "2",
        price: "3",
        deduct: "4",

        delivery_date: "",
        collection: viewDue,
    });
    const handleInputValue = (e) => {
        setInputValue({ ...inputValue, [e.target.name]: e.target.value });
    };

    const handleForm = async (e) => {};

    // const handleForm = async (e) => {
    //     e.preventDefault();
    //     const data = {
    //         id: id,
    //         name: inputValue.name,
    //         stock: inputValue.stock,
    //         price: inputValue.price,
    //         deduct: inputValue.deduct,
    //         // priceForStock: 0,
    //         delivery_date: inputValue.deliveryDate,
    //         collection: viewDue,
    //     };
    //     setLoading(true);
    //     try {
    //         http.post(api, data).then((response) => {
    //             if (response.data === "success") {
    //                 handleClose();
    //                 setLoading(false);
    //                 setRelodeTable((prev) => !prev);
    //             } else {
    //                 handleClose();
    //                 setLoading(false);
    //                 alert("You don't add duplicate data !");
    //             }
    //         });
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    return (
        <>
            <div>
                <Suspense fallback={<Loader />}>
                    <Button
                        onClick={handleOpen}
                        className="addBtn"
                        style={ModalOpenBtnStyle}
                    >
                        {ModalOpenBtnTitle}
                    </Button>
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        open={open}
                        onClose={handleClose}
                        closeAfterTransition
                        slots={{ backdrop: Backdrop }}
                        slotProps={{
                            backdrop: {
                                timeout: 500,
                            },
                        }}
                    >
                        <Fade in={open}>
                            <Box sx={style}>
                                <div className="modalCloseBtn">
                                    <RxCross2
                                        size={25}
                                        className="cursor"
                                        color="#fff"
                                        onClick={handleClose}
                                    />
                                </div>
                                <div className="modalContent">
                                    <h3 className="modalTitle">{slug}</h3>
                                    <form
                                        className="d-flex"
                                        onSubmit={handleForm}
                                    >
                                        {/* {inputFields.map((items, index) => {
return (
<div
style={{ width: "100%" }}
key={index}
>
<label>{items.label}</label>
<div className="inputBox">
<input
type={items.type}
name={items.field}
required
placeholder={`${items.placeholder}`}
onChange={
handleInputValue
}
value={
items.field ==
"collectedAmount"
    ? inputValue.collection
    : inputValue.field
}
/>
</div>
</div>
);
})} */}

                                        <div>
                                            <button
                                                type="submit"
                                                className="button"
                                            >
                                                next
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </Box>
                        </Fade>
                    </Modal>
                </Suspense>
            </div>
        </>
    );
};

export default MyModal;