import { FunctionComponent, useContext, useEffect, useState } from "react";
import Card from "../../interfaces/Card";
import { getmyCards } from "../../services/cardsService";
import CardComponent from "./CardComponent";
import DeleteCard from "../Modals/DeleteCard";
import UpdateCardModal from "../Modals/UpdateCardModal";
import { ThemeContext } from "../../App";

interface MyCardsProps {
  cardChanged: boolean;
  refresh: Function;
  isBusiness: boolean;
}

const MyCards: FunctionComponent<MyCardsProps> = ({
  cardChanged,
  refresh,
  isBusiness,
}) => {
  let theme = useContext(ThemeContext);
  let [myCards, setMyCards] = useState<Card[]>([]);
  let [deleteModal, setDeleteModal] = useState<boolean>(false);
  let [updateModal, setUpdateModal] = useState<boolean>(false);
  let [id, setId] = useState<number>(0);
  useEffect(() => {
    getmyCards()
      .then((res) => setMyCards(res.data))
      .catch((err) => console.log(err));
  }, [cardChanged]);

  return (
    <>
      <div
        className="container mt-3 w-100"
        style={{ backgroundColor: theme.backGroundComps }}
      >
        <div className="row">
          {myCards.length ? (
            myCards.map((card) => (
              <CardComponent
                isBusiness={isBusiness}
                card={card}
                setUpdateModal={setUpdateModal}
                setDeleteModal={setDeleteModal}
                setId={setId}
              />
            ))
          ) : (
            <h4 className="text-center" style={{ color: theme.color }}>
              There are no cards
            </h4>
          )}
        </div>
      </div>
      <UpdateCardModal
        onHide={() => setUpdateModal(false)}
        refresh={refresh}
        id={id}
        show={updateModal}
      ></UpdateCardModal>
      <DeleteCard
        refresh={refresh}
        id={id}
        onHide={() => setDeleteModal(false)}
        show={deleteModal}
      ></DeleteCard>
    </>
  );
};

export default MyCards;
