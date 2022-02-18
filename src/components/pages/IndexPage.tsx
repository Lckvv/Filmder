import React, {useEffect, useState} from 'react';
import TemplatePage from "../../templates/TemplatePage";
import CardAtom from "../atoms/card/Card.atom";
import {useDispatch, useSelector} from "react-redux";
import {actionSetFilms} from "../../app/redux/filmsReducer/filmActionTypes";
import IndexMenu from "../molecules/index/indexMenu/indexMenu";
import IndexList from "../molecules/index/indexList/indexList";

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

            if (films.length > 0) {
                films.map((item: { id: any; }) => {
                    console.log(item.id)
                    setData(result.filter((results: { id: string; }) => !item.id.includes(results.id)))
                })
            } else
                setData(result)
        }

        fetchData();
    }, []);

    const handleChange = (id: string, imageUrl: string, title: string, summary: string, rating: string, isLike: boolean) => () => {
        dispatch(actionSetFilms(id, imageUrl, title, summary, rating, isLike))
        films.map((item: { id: any; }) => {
            setData(data.filter((results: { id: string; }) => !item.id.includes(results.id)))
        })

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({id: id, imageUrl: imageUrl, title: title, summary: summary, rating: rating, isLike: isLike})
        };
    }

    useEffect(() => {
        console.log("test")
    }, [localStorage])

    return (
        <TemplatePage className={"py-20 "}>
            {data.length > 0 ?
                <IndexMenu data={data} handleChange={handleChange}/>
                :
                <div className={"w-full py-20"}>
                    <h2 className={"text-center"}>Przykro nam, nie mamy więcej filmów do ocenienia</h2>
                </div>
            }

            <IndexList films={films}/>

        </TemplatePage>
    );
};

export default IndexPage;