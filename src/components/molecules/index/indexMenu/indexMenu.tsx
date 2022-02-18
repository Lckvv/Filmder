import React, {FC, useState} from 'react';
import Draggable from "react-draggable";
import CardAtom from "../../../atoms/card/Card.atom";

type Props = {
    data:
        {
            id: string,
            imageUrl: string,
            title: string,
            summary: string,
            rating: string
        }[],
    handleChange: (id: string, imageUrl: string, title: string, summary: string, rating: string, isLike: boolean) => any;
    handleDrag: any;
    position: any;
    isDragImage?: boolean;
}


const IndexMenu: FC<Props> = ({data, handleChange, handleDrag, position, isDragImage}) => {
    return (
        <div className={"flex flex-col items-center h-30 space-y-10"}>
            {data !== undefined
            &&
            data.length > 0
            &&
            <CardAtom key={data[0].id} imageUrl={data[0].imageUrl} title={data[0].title} summary={data[0].summary}
                      rating={data[0].rating} wrapClassName={"laptop:h-[730px] tablet:h-[420px]"} position={position}
                      handleDrag={handleDrag} isDragImage={isDragImage}/>
            }
            {data.length > 0 &&
            innerWidth > 900 ?
                <div className={"w-full flex justify-between px-100"}>
                    <button
                        className={"w-[100px] bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded-full"}
                        onClick={handleChange(data[0].id, data[0].imageUrl, data[0].title, data[0].summary, data[0].rating, false)}>
                        Reject
                    </button>

                    <button
                        className={"w-[100px] bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full"}
                        onClick={handleChange(data[0].id, data[0].imageUrl, data[0].title, data[0].summary, data[0].rating, true)}>
                        Accept
                    </button>
                </div>
                :
                null
            }
        </div>
    );
};

export default IndexMenu;