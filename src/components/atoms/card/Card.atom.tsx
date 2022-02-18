import React, {FC} from 'react';
import Draggable from "react-draggable";

type Props = {
    imageUrl: string,
    title: string,
    summary?: string,
    rating: string,
    className?: string,
    wrapClassName?: string,
    position?: any,
    handleDrag?: any,
    isDragImage?: boolean
}


const CardAtom: FC<Props> = ({imageUrl, title, summary, rating, className, wrapClassName, position, handleDrag, isDragImage = false}) => {
    const nodeRef = React.useRef(null);
    return (
        <div className={`flex flex-col max-w-md space-y-4 items-center ${wrapClassName}`}>
            <div className={"flex space-x-3 "}>
                <h3>{title}</h3>
                <h3>({rating}/10)</h3>
            </div>
            <p className={"text-center "}>{summary}</p>
            {innerWidth < 900 && isDragImage === true ?
                <Draggable nodeRef={nodeRef} onDrag={handleDrag} position={position} axis="x">
                    <img src={imageUrl} alt={title} className={className} ref={nodeRef}/>
                </Draggable>
                :
                <img src={imageUrl} alt={title} className={className}/>
            }
        </div>
    );
};

export default CardAtom;