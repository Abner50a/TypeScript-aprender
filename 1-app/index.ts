import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/posts/1';

//Creamos interface para definir la estrucutra del objeto
interface Todo {
  id: number;
  title: string;
  userId: number;
}

axios.get(url).then(response => {

  /**
 * 
 * Como buscar errores con tyscript usando interface
 * 
 * 
 */
  const todo = response.data as Todo;

  const id = todo.id;
  const userid = todo.userId;
  const title = todo.title;


  logTodo(id,title);




})

const logTodo = (id: number,title:string) => {
  console.log(`Todo  id : ${id} 
    titulo : ${title}

  `);
}