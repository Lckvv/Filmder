import React, {useEffect, useState} from 'react';
import TemplatePage from "../../templates/TemplatePage";
import CardAtom from "../atoms/card/Card.atom";
import {useDispatch, useSelector} from "react-redux";
import {actionSetFilms} from "../../app/redux/filmsReducer/filmActionTypes";

const IndexPage = () => {

    const dispatch = useDispatch();
    // @ts-ignore
    const films = useSelector((state => state.films.films))
    const [data, setData] = useState(
        [{
            id: "",
            imageUrl: "",
            title: "",
            summary: "",
            rating: ""
        }]
    );

    // @ts-ignore
    useEffect(() => {
        const fetchData = async () => {
            const result = (await require('../../app/data/films.json'));

            setData(result)
        }

        fetchData();
    }, []);

    const handleChange = (id: string, isLike: boolean) => () => {
        dispatch(actionSetFilms(id, isLike))
    }

    return (
        <TemplatePage className={"py-20 "}>
            <div className={"flex flex-col items-center"}>
                {data !== undefined &&
                <CardAtom key={data[0].id} imageUrl={data[0].imageUrl} title={data[0].title}
                          summary={data[0].summary} rating={data[0].rating}/>
                }
                <div className={"w-full flex justify-between"}>
                    <button className={"w-[100px] bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full"} onClick={handleChange(data[0].id, false)}>
                        Reject
                    </button>

                    <button className={"w-[100px] bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full"} onClick={handleChange(data[0].id, true)}>
                        Accept
                    </button>
                </div>
            </div>
        </TemplatePage>
    );
};

export default IndexPage;