/* eslint-disable no-undef */
import { useSelector } from "react-redux";
import { baseImgUrl } from "../constants";
import Loader from "./Loader";

const Hero = () => {
  // store da tutulan verilere eriş
  // store'da tutulan veriler eriş
  const store = useSelector((store) => store.movieReducer);

  // 0 - 19 arqasında rastgele sayı üreet
  const i = Math.floor(Math.random() * 20);

  // rastegele üretilen sıradaki filme eriş
  const randomMovie = store.popularMovies[i];
  //console.log(randomMovie);
  return (
    <div className="grid grid-cols-1  md:grid-cols-2 md:max-h-[400px] gap-5 mb-10">
      {!randomMovie ? (
        <Loader />
      ) : (
        <>
          <div className="flex flex-col gap-5 items-center justify-center">
            <h1 className="text-3xl font-bold">{randomMovie.title}</h1>
            <p>{randomMovie.overview}</p>
            <p>
              <span>IMDB:</span>
              <span className="text-yellow-400">
                {randomMovie.vote_average.toFixed(1)}
              </span>
            </p>
            <div className="flex gap-5">
              <button className="p-2 bg-red-700 rounded hover:bg-red-600">
                Filmi İzle
              </button>
              <button className="p-2 bg-blue-600 rounded hover:bg-blue-700">
                Listene Ekle
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              className="my-4 img-fluid object-contain rounded hero-img max-h-[450px]"
              src={baseImgUrl.concat(randomMovie.backdrop_path)}
              alt={randomMovie.title}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Hero;
