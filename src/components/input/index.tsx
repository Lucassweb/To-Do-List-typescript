import {ChangeEvent} from 'react'

type InputProps = {
    type: string;
    value: string;
    placeholder: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({type, value, placeholder, onChange}: InputProps) => {
    return <input type={type} value={value} placeholder={placeholder} onChange={onChange} />
}