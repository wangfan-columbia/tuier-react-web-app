/*const TodoItem = (todo) => {
    return(`
       <li>${todo}</li>
   `);
} */



/*const TodoItem = (todo) => {
    return(`
       <li>
           ${todo.title}
           (${todo.status})
       </li>
   `);
}
*/



const TodoItem = (todo) => {
    return(`
    <li>
      <input type="checkbox"
        ${todo.done ? 'checked' : ''}/>
      ${todo.title}
      (${todo.status})
    </li>`
    );
}


export default TodoItem;