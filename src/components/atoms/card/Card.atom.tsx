import React, {FC} from 'react';

type Props = {
    id: string,
    imageUrl: string,
    title: string,
    summary: string,
    rating: string,
    handleChange: () => void;
}

const CardAtom: FC<Props> = ({children,id, handleChange,  imageUrl, title, summary, rating}) => {
    return (
        <div className={'flex flex-col max-w-md items-center space-y-4'}>
            <div className={"flex space-x-3"}>
                <h3>{title}</h3>
                <h3>({rating}/10)</h3>
            </div>
            <p>{summary}</p>
            <img src={imageUrl} alt={title}/>

            <div className={"w-full flex justify-between"}>
                <button className={"w-[100px] bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full"} onClick={handleChange}>
                    Reject
                </button>

                <button className={"w-[100px] bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full"} onClick={handleChange}>
                    Accept
                </button>
            </div>
        </div>
    );
};

export default CardAtom;