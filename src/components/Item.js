
export default function Item({ task, index, deleteTask }) {
  return (
    <li
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: "10px",
        padding: "10px",
        border: "1px solid #ddd",
        borderRadius: "4px",
        background: "#fff",
      }}
      className="shadow"
    >
      {task}
      <button
        onClick={() => deleteTask(index)}
        style={{ color: "red", border: "none", background: "none", cursor: "pointer" }}
      >
        <i class="bi bi-trash-fill"></i>
      </button>
    </li>
  );
}