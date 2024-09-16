import React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const RattingComponent = (props) => {
  const { precision, value } = props;

  return (
    <>
      <Stack spacing={1}>
        {/* <Rating name="half-rating" defaultValue={2.5} precision={0.5} /> */}
        <Rating
          name="half-rating-read"
          defaultValue={5}
          // precision={precision}
          value={value}
          readOnly
        />
      </Stack>
    </>
  );
};

export default RattingComponent;
