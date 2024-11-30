import Item from "./Item";

export default function TodoList({ tasks, deleteTask }) {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {tasks.map((task, index) => (
        <Item key={index} task={task} index={index} deleteTask={deleteTask} />
      ))}
    </ul>
  );
}