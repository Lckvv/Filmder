import React, {FC} from 'react';

type Props = {
    imageUrl: string,
    title: string,
    summary?: string,
    rating: string,
    className?: string
}

const CardAtom: FC<Props> = ({imageUrl, title, summary, rating, className}) => {

    return (
        <div className={'flex flex-col max-w-md space-y-4 items-center'}>
            <div className={"flex space-x-3 "}>
                <h3>{title}</h3>
                <h3>({rating}/10)</h3>
            </div>
            <p className={"text-center "}>{summary}</p>
            <img src={imageUrl} alt={title} className={className}/>
        </div>
    );
};

export default CardAtom;