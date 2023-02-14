import { FunctionComponent, useContext } from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";
import { ThemeContext } from "../../App";
import UpdateCard from "../UpdateCard";
import CloseButton from "react-bootstrap/CloseButton";

interface UpdateCardModalProps {
  show: boolean;
  onHide: Function;
  id: number;
  refresh: Function;
}

const UpdateCardModal: FunctionComponent<UpdateCardModalProps> = ({
  show,
  onHide,
  id,
  refresh,
}) => {
  let theme = useContext(ThemeContext);
  return (
    <>
      <Modal
        show={show}
        onHide={() => onHide()}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{ background: theme.background, color: theme.color }}
      >
        <Modal.Header
          style={{ background: theme.bgAbout }}
          className="text-light"
        >
          <Modal.Title
            style={{ color: theme.color }}
            id="contained-modal-title-vcenter"
          >
            <p className="text-start mt-1" style={{ fontSize: "1.2em" }}>
              Update Card
            </p>
          </Modal.Title>
          <CloseButton
            style={{ fontSize: "1.5em" }}
            variant={theme.bgAbout == "#fffffb" ? "black" : "white"}
            onClick={() => onHide()}
          ></CloseButton>
        </Modal.Header>
        <Modal.Body style={{ background: theme.bgAbout }}>
          <UpdateCard id={id} refresh={refresh} onHide={() => onHide()} />
        </Modal.Body>
        <Modal.Footer style={{ background: theme.bgAbout }}></Modal.Footer>
      </Modal>
    </>
  );
};

export default UpdateCardModal;
