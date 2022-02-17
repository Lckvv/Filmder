import React, {useEffect, useState} from 'react';
import TemplatePage from "../../templates/TemplatePage";
import CardAtom from "../atoms/card/Card.atom";

const IndexPage = () => {
    const [data, setData] = useState(
        [{
            id: "1",
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
            console.log(result)
        }

        fetchData();
    }, []);

    const handleChange = () => {
        console.log("")
    }

    return (
        <TemplatePage className={"py-20 "}>
            <div className={"flex flex-col items-center"}>
                {data !== undefined &&
                    <CardAtom key={data[0].id} id={data[0].id} imageUrl={data[0].imageUrl} title={data[0].title} summary={data[0].summary} rating={data[0].rating} handleChange={handleChange}/>
                }
            </div>
        </TemplatePage>
    );
};

export default IndexPage;