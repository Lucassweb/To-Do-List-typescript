import { FormEvent, useState } from 'react'
import { Input } from '../../input/index'
import { Button } from '../../button/index'
import { Trash2 } from 'lucide-react';
import {Span} from '../../span/index'
import * as S from './styles'

export const Todo = () => {
    const [task, setTask] = useState('')
    const [show, setShow] = useState<string[]>([])


    const handleSubmitAdd = (event: FormEvent) => {
        event.preventDefault();

        if (task === '') return // se o elemento estiver vazio, ele retorna vazio
        
        setShow((stateList) => [...stateList, task]);
        setTask('');
    }

    const deleteTask = (index : any) => {  
        setShow(show.filter((_, i) => i !== index))
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
                        <Span onClick={() => deleteTask(index)}><Trash2/></Span>
                    </S.itemList>
                ))}
            </S.listItem>
        </S.Formulario>
    )
}