import React, {useEffect, useState} from 'react';
import TemplatePage from "../../templates/TemplatePage";
import {useDispatch, useSelector} from "react-redux";
import {actionSetFilms} from "../../app/redux/filmsReducer/filmActionTypes";
import IndexMenu from "../molecules/index/indexMenu/indexMenu";
import IndexList from "../molecules/index/indexList/indexList";

const IndexPage = () => {
    const dispatch = useDispatch();
    // @ts-ignore
    const films = useSelector((state => state.films.films))
    const [position, setPosition] = useState({x: 0, y: 0})

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
        if (position.x < -100){
            dispatch(actionSetFilms(data[0].id, data[0].imageUrl, data[0].title, data[0].summary, data[0].rating, false))
            films.map((item: { id: any; }) => {
                setData(data.filter((results: { id: string; }) => !item.id.includes(results.id)))
            })
            setPosition({x: 0, y: 0})
        } else if (position.x > 100) {
            dispatch(actionSetFilms(data[0].id, data[0].imageUrl, data[0].title, data[0].summary, data[0].rating, true))
            films.map((item: { id: any; }) => {
                setData(data.filter((results: { id: string; }) => !item.id.includes(results.id)))
            })
            setPosition({x: 0, y: 0})
        }
    }, [position])

    const handleDrag = (e: any, data: any) => {
        setPosition({x: data.x, y: 0})
    };

    return (
        <TemplatePage className={"py-5 "}>
            {data.length > 0 ?
                <IndexMenu data={data} handleChange={handleChange} handleDrag={handleDrag} position={position} isDragImage={true}/>
                :
                <div className={"flex w-full py-20 laptop:h-[730px] items-center justify-center"}>
                    <h2 className={"text-center"}>Przykro nam, nie mamy więcej filmów do ocenienia</h2>
                </div>
            }

            <IndexList films={films}/>

        </TemplatePage>
    );
};

export default IndexPage;