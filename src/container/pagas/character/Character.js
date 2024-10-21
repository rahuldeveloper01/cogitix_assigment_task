import React from "react";
import PageIndex from "../../../components/PageIndex";
import { getCharacterList } from "../../../redux-toolkit/features/character/GetCharacterSlice";
import Index from "../../../components/Index";
import { Pagination } from "@mui/material";

const Character = () => {
  const { characterList } = PageIndex.useSelector((state) => state?.character);
  const dispatch = PageIndex.useDispatch();
  const [character, setCharacter] = PageIndex.useState([]);
  PageIndex.useEffect(() => {
    dispatch(getCharacterList());
  }, []);
  const rowPerPage = 5;
  const [currentPage, setCurrentPage] = React.useState(1);
  PageIndex.useEffect(() => {
    const lastIndex = currentPage * rowPerPage;
    const firstIndex = lastIndex - rowPerPage;
    const recordPerPage = characterList?.results?.slice(firstIndex, lastIndex);
    console.log(recordPerPage, "recodeperpage");

    setCharacter(recordPerPage);
  }, [currentPage, characterList?.results, rowPerPage]);

  const totalPages = Math.ceil(characterList?.results?.length / rowPerPage);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };
  return (
    <Index.Box className="charactershow-container">
      <Index.Box className="characterlist-main-box">
        {character?.map((element) => (
          <Index.Box key={element.id} className="character-item">
            <img src={element.image} alt={element.name} className="character-image"/>
            <Index.Typography className="character-image-text">{element.name}</Index.Typography>
          </Index.Box>
        ))}
      </Index.Box>
      <Index.Box className="pagination-box">
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
        />
      </Index.Box>
    </Index.Box>
  );
};

export default Character;
