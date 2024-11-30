export default function Task(tasks, deleteTask){
  return(
    <ul style={{ listStyle: "none", padding: 0 }}>
    {tasks.map((task, index) => (
      <li
        key={index}
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "10px",
          padding: "10px",
          border: "1px solid #ddd",
          borderRadius: "4px",
          background: "#fff",
          boxShadow: "1px 2px 5px ",
        }}
      >
        {task}
        <button onClick={() => deleteTask(index)} className="btn btn-danger">
          Delete
        </button>
      </li>
    ))}
  </ul>
  );
}