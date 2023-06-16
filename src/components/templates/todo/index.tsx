import { FormEvent, useState } from 'react'
import { Input } from '../../input/index'
import { Button } from '../../button/index'
import { Trash2 } from 'lucide-react';
import * as S from './styles'

export const Todo = () => {
    const [task, setTask] = useState('')
    const [show, setShow] = useState<string[]>([])

    console.log(show);

    const handleSubmitAdd = (event: FormEvent) => {
        event.preventDefault();
        setShow((stateList) => [...stateList, task]);
        setTask('');
    }

    return (
        <S.Formulario>
            <S.Title>To do List</S.Title>
            <form onSubmit={handleSubmitAdd}>
                <Input type="text" value={task} placeholder="digite sua tarefa"
                    onChange={event => setTask(event.target.value)}/>
                <Button type="submit">Adicionar</Button>
            </form>

            <S.listItem>
                {show.map((todo,index) => (
                    <S.itemList key={index}>{todo}
                        <span><Trash2/></span>
                    </S.itemList>
                
                ))}
            </S.listItem>
        </S.Formulario>
    )
}