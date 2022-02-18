import React, {FC} from 'react';
import CardAtom from "../../../atoms/card/Card.atom";

type Props = {
    films: {
        id: React.Key | null | undefined;
        imageUrl: string;
        title: string;
        rating: string;
        isLike: boolean;

    }[]
}

const IndexList: FC<Props> = ({films}) => {
    return (
        <div className={"flex flex-col space-y-5 pt-5"}>
            <h3>Filmy które Ci się podobają:</h3>
            <div className={"flex tablet:flex-col tablet:items-center laptop:items-start laptop:flex-row laptop:space-x-10"}>
                {films !== undefined &&
                films.map((film: { id: React.Key | null | undefined; imageUrl: string; title: string; rating: string; isLike: boolean }) => {
                    if (film.isLike)
                        return (
                            <CardAtom key={film.id} imageUrl={film.imageUrl} title={film.title} rating={film.rating}
                                      className={"w-20 ml-0"}/>
                        )
                })
                }
            </div>

            {films.length > 0 &&
            <button className={"w-[200px] bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full"}
                    onClick={() => (localStorage.clear(), window.location.reload())}
            >
                Wyczyść listę
            </button>
            }
        </div>
    );
};

export default IndexList;