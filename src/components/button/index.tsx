import { ReactNode } from 'react'

type ButtonProps = {
    children: ReactNode;
    type: "button" | "submit" | "reset" | undefined
}

export const Button = ({type, children}: ButtonProps) => {
    return <button type={type}>{children}</button>
}