import { ReactNode } from 'react'

type clickProps = {
    children: ReactNode;
    onClick: (React.MouseEventHandler<HTMLSpanElement>);   
}

export const Span = ({onClick, children}: clickProps) => {
    return <span onClick={onClick}>{children}</span>    
}