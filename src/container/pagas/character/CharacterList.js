import React from "react";
import Index from "../../../components/Index";
import PageIndex from "../../../components/PageIndex";
import { getCharacterListById } from "../../../redux-toolkit/features/character/GetCharacterSlice";
import { resetCharacterList } from "../../../redux-toolkit/features/character/CharacterSlice";

const CharacterList = () => {
  const params = PageIndex.useParams();
  const dispatch = PageIndex.useDispatch();
  const id = params.id;

  const { characterListGetById } = PageIndex.useSelector(
    (state) => state?.character
  );

  PageIndex.useEffect(() => {
    dispatch(getCharacterListById(id));
  }, [id]);

  PageIndex.useEffect(() => {
    if (id) {
      dispatch(resetCharacterList());
    }
  }, [id,characterListGetById]);
  return (
    <Index.Box className="image-container">
      {characterListGetById ? (
        <Index.Box className="image-item">
          <img
            src={characterListGetById.image}
            alt={characterListGetById.name}
          />
          <Index.Typography className="character-text">{characterListGetById?.name}</Index.Typography>
        </Index.Box>
      ) : (
        <Index.Typography>No characters available.</Index.Typography>
      )}
    </Index.Box>
  );
};

export default CharacterList;
