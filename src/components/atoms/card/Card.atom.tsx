import React, {FC} from 'react';

type Props = {
    imageUrl: string,
    title: string,
    summary: string,
    rating: string,
}

const CardAtom: FC<Props> = ({children,  imageUrl, title, summary, rating}) => {

    return (
        <div className={'flex flex-col max-w-md items-center space-y-4'}>
            <div className={"flex space-x-3"}>
                <h3>{title}</h3>
                <h3>({rating}/10)</h3>
            </div>
            <p>{summary}</p>
            <img src={imageUrl} alt={title}/>
        </div>
    );
};

export default CardAtom;