import React, {useState} from "react"

interface Props {
    id: number,
    todo: string
}

const Task:React.FC<Props> = ({todo}) => {
    return (
        <li>{todo}</li>
    )
}

interface Todo {
    id: number
    todo: string
}
interface Props {
    todoList: Todo[]
}

const List:React.FC<Props> = ({ todoList }) => {
    return(
        <ul>
            {todoList.map((todo: Todo) => (
                <Task id={todo.id} todo={todo.todo} todoList={[]}/>
            ))}
        </ul>
    )
}

const TodoList: React.FC = () => {
const [todoList, setTodoList] = useState([])
const [todo, setTodo] = useState('')
const handleCreate = (e) => {
    e.preventDefault()
    const newTodo = {
        id: Date.now(),
        todo
    }
    setTodoList([...todoList, newTodo])
    setTodo('')
}

 return(
    <div>
        <div>
            <form>
                <input value={todo} placeholder="Wpisz zadanie" onChange={(e) => setTodo(e.target.value)}/>
                <button onClick={handleCreate}>Dodaj</button>
                <List todoList={todoList} id={0} todo={""}/>
            </form>
        </div>
    </div>
 )
}

export default TodoList

