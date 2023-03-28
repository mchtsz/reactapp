import React from "react";

const Addbtn = ({ handleCount }) => {
  return (
    <>
      <button onClick={handleCount} className="Addbtn" id="add">
        Legg til handlevogn
      </button>
    </>
  );
};

export default Addbtn;
