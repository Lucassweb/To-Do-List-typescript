import { FormEvent, useState } from 'react'
import * as S from './styles'

export const Todo = () => {
    const [task, setTask] = useState('')
    const [show, setShow] = useState<string[]>([])

    console.log(show);

    const handleSubmitAdd = (event: FormEvent) => {
        event.preventDefault();
        setShow((stateList) => [...stateList, task])
    }

    return (
        <S.Formulario>
            <h1>To do List</h1>
            <form onSubmit={handleSubmitAdd}>
                <input type="text"
                    placeholder="digite sua tarefa"
                    onChange={event => setTask(event.target.value)}
                />
                <button type="submit">Adicionar</button>
            </form>
            
            <ul>
                {show.map((todo) => (
                    <li>{todo}</li>
                ))}
            </ul>
        </S.Formulario>
    )
}