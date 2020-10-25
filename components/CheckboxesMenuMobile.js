import Checkboxes from "./Checkboxes";
import MenuToggle from "./MenuToggle";
import style from "./CheckboxesMenuMobile.module.css";
import { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#__next");

const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#ffffffaa",
    zIndex: "30",
  },
  content: {
    position: "absolute",
    inset: "30px",
    top: "30px",
    left: "30px",
    right: "30px",
    bottom: "30px",
    background: "#1e243d",
    overflow: "scroll",
    WebkitOverflowScrolling: "touch",
    padding: "10px",
  },
};

const CheckboxesMenuMobile = (props) => {
  const body = document.querySelector("body");
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
    body.classList.add("menuToggled");
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
    body.classList.remove("menuToggled");
  }

  return (
    <>
      <MenuToggle openModal={openModal} />
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Refine Search"
      >
        <button className={style.closeButton} onClick={closeModal}>
          close
        </button>
        <Checkboxes
          isMobile={props.isMobile}
          checkArray={props.checkArray}
          setCheckArray={props.setCheckArray}
          departments={props.stalls.map((stall) => {
            return stall.departments;
          })}
          criteria={props.stalls.map((stall) => {
            return stall.criteria;
          })}
          categories={props.stalls.map((stall) => {
            return stall.categories;
          })}
        />
      </Modal>

      {/* <div
      >
        <Checkboxes
          isMobile={props.isMobile}
          checkArray={props.checkArray}
          setCheckArray={props.setCheckArray}
          departments={props.stalls.map((stall) => {
            return stall.departments;
          })}
          criteria={props.stalls.map((stall) => {
            return stall.criteria;
          })}
          categories={props.stalls.map((stall) => {
            return stall.categories;
          })}
        />
      </div> */}
    </>
  );
};

export default CheckboxesMenuMobile;
