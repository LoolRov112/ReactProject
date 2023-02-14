import { FunctionComponent, useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../App";
import Card from "../../interfaces/Card";

interface CardComponentProps {
  card: Card;
  setUpdateModal: Function;
  setDeleteModal: Function;
  setId: Function;
  isBusiness: boolean;
}

const CardComponent: FunctionComponent<CardComponentProps> = ({
  card,
  setUpdateModal,
  setDeleteModal,
  setId,
  isBusiness,
}) => {
  let theme = useContext(ThemeContext);
  let userId = JSON.parse(sessionStorage.getItem("userDatas") as string).userId;
  let [canEdit, setCanEdit] = useState<boolean>(false);
  useEffect(() => {
    if (userId == card.userId) {
      setCanEdit(true);
    }
  }, [canEdit]);
  return (
    <>
      <div
        id="cardTransition"
        key={card.id}
        className="card col-md-3 mx-3 my-5 text-center"
        style={{
          width: "18rem",
          background: theme.bgCard,
          boxShadow: theme.shadow,
        }}
      >
        <img
          src={card.image}
          style={{ width: "14rem" }}
          className="card-img-top mx-3 mt-1"
          alt={card.name}
        />
        <div className="card-body">
          <h5 style={{ fontSize: "2rem", color: theme.color }}>{card.name}</h5>
          <p style={{ fontSize: "1.5em", color: theme.color }}>
            {card.description}
          </p>
          <hr />
          <p className="card-text" style={{ color: theme.color }}>
            {card.phone as string}
          </p>
          <hr />
          <p className="card-text" style={{ color: theme.color }}>
            {card.address}
          </p>

          {isBusiness && (
            <>
              <hr />
              <div>
                {canEdit && (
                  <>
                    <i
                      style={{ color: theme.editColor, cursor: "pointer" }}
                      className="fa-regular fa-pen-to-square mx-3"
                      onClick={() => {
                        setUpdateModal(true);
                        setId(card.id as number);
                      }}
                    ></i>
                    <i
                      style={{ color: theme.deleteColor, cursor: "pointer" }}
                      className="fa-regular fa-trash-can mx-3"
                      onClick={() => {
                        setDeleteModal(true);
                        setId(card.id as number);
                      }}
                    ></i>
                  </>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CardComponent;
