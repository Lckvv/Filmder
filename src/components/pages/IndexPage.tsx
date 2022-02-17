import React, {useEffect, useState} from 'react';
import TemplatePage from "../../templates/TemplatePage";

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

    return (
        <TemplatePage className={"py-20"}>
            <ul>
                {data !== undefined && data.map(item => (
                    <li key={item.title}>
                        {item.title}
                    </li>
                ))}
            </ul>
        </TemplatePage>
    );
};

export default IndexPage;