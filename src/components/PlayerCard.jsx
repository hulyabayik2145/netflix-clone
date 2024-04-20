import { baseImgUrl } from "../constants";

const PlayerCard = ({ player }) => {
  console.log(player);
  return (
    <div className="w-[140px] rounded-md overflow-hidden">
      {player.profile_path ? (
        <img
          className="h-[175px]"
          src={baseImgUrl + player?.profile_path}
          alt=""
        />
      ) : (
        <div className="h-[175px] bg-gray-400  w-[116px] overflow-hidden"></div>
      )}
      <h2 className="font-semibold">{player.original_name}</h2>
      <h2 className="line-clamp-2">{player.character}</h2>
    </div>
  );
};

export default PlayerCard;
