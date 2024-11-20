import NewTask from "./NewTask";

export default function Tasks({ tasks, onAdd, onRemove }) {
    return (
        <section >
            <h2 className="text-2xl font-bold text-stone-700 mb-4" >Tarefas</h2>
            <NewTask onAdd={onAdd} />
            {tasks.length === 0 && (
                <p className="text-stone-800 my-4">Este projeto ainda não tem tarefas.</p>
            )}
            {tasks.length > 0 && (
                <ul className="p-4 mt-8 rounded-md bg-slate-100">
                    {tasks.map((task) => (
                        <li key={task.id} className="flex justify-between my-4">
                            <span>{task.text}</span>
                            <button onClick={() => onRemove(task.id)} className="text-stone-700 hover:text-red-500">Limpar</button>
                        </li>
                    ))}
                </ul>
            )}

        </section>
    );
}