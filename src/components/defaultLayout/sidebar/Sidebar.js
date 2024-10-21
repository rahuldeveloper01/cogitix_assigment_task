import React from "react";
import { getEpisodeList } from "../../../redux-toolkit/features/episode/GetEpisodeSlice";
import Index from "../../Index";
import PageIndex from "../../PageIndex";
import Character from "../../../container/pagas/character/Character";
import { resetCharacterList } from "../../../redux-toolkit/features/character/CharacterSlice";

const Sidebar = () => {
  const dispatch = PageIndex.useDispatch();
  const navigate = PageIndex.useNavigate();
  const [active, setActive] = PageIndex.useState(0);

  const results = PageIndex.useSelector(
    (state) => state?.episode?.episodeList?.results
  );
  console.log(results,'results-->');
  

  const { characterList } = PageIndex.useSelector(
    (state) => state?.character || {}
  );


  const handleActiveDeactive = (index) => {
    setActive(index);
   
  };

  PageIndex.useEffect(() => {
    dispatch(getEpisodeList());
  }, []);





  return (
    <>
      <Index.Box className="episode-container">
        <Index.Box className="episode-sidebar-contain">
          <Index.Box className="episode-heading-text-box">
            <Index.Typography className="episode-heading-text">
              Episodes
            </Index.Typography>
          </Index.Box>

          <Index.List className="episodelist-item">
            {results?.map((element,index) => (
              <Index.ListItem
                key={element.id}
                className={`listitem ${active === index ? "active" : ""}`}
              >
                <Index.Typography
                  onClick={() => {
                    handleActiveDeactive(index);
                    navigate(`/character-list/${element?.id}`, {
                      state: { active: element?.id },
                    });
                    dispatch(resetCharacterList(characterList))
                  }}
                >
                  {element.name}
                </Index.Typography>
              </Index.ListItem>
            ))}
          </Index.List>
        </Index.Box>
      </Index.Box>

      <Index.Box>
        <Character />
      </Index.Box>
      {/* <Index.Box>
        {showFirstCharacter && firstCharacter ? (
          <Index.Box key={firstCharacter.id}>
            <img src={firstCharacter.image} alt={firstCharacter.name} />
            <Index.Typography>{firstCharacter.name}</Index.Typography>
          </Index.Box>
        ) : (
          ""
        )}
      </Index.Box> */}
    </>
  );
};

export default Sidebar;
