import * as S from './styles'

export const Todo = () => {
    return (
        <S.Formulario>
            <h1>Todo List</h1>
            <form>
                <input type="text" placeholder="digite sua tarefa"></input>
                <button type="submit">Adicionar</button>
            </form>
        </S.Formulario>
    )
}