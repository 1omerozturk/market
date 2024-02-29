import React from 'react';
import ReactLoading from 'react-loading';
 
interface  LoadingProps {
    type:string|any,
    height:string|any,
    width:string|any,
    color: string|any;
}

const Loading:React.FC<LoadingProps> =({ type, color,height,width }) => (
    <ReactLoading type={type} color={color} height={height} width={width} />
);
 
export default Loading;