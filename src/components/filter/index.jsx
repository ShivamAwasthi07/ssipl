import React, { Fragment, useState } from "react";
import CustomModal from "../modal";
import { ICONS } from "../../assets/icons";
import { StyledFilterButton } from "./styles";

const FilterButton = ({ filterContent = <></>, filters = {} }) => {
  const [open, setOpen] = useState(false);
  return (
    <Fragment>
      <StyledFilterButton
        type="button"
        variant="outlined"
        onClick={() => setOpen(true)}
        startIcon={ICONS.filter}
      >
        Filters
      </StyledFilterButton>
      <CustomModal
        open={open}
        onClose={() => setOpen(false)}
        headerImage="https://via.placeholder.com/30"
        title="Custom Modal Title"
        isClosable={true}
        content={filterContent}
        onDelete={() => console.log("delete")}
        onCancel={() => setOpen(false)}
        onDone={() => console.log("Doneee")}
        positiveTitle="Apply"
      />
    </Fragment>
  );
};

export default FilterButton;
