const TaskList = ({ tasks, removeTask }) => {
  if (tasks.length === 0) {
    return <></>;
  }

  return (
    <>
      <p className='display-6'>Gorevler:</p>
      <ul className='list-group my-5'>
        {tasks.map((item) => {
          return (
            <li
              key={item.uuid}
              className='list-group-item d-flex justify-content-between'
            >
              {item.task}
              <span
                className='btn btn-danger btn-sm'
                onClick={() => removeTask(item.uuid)}
              >
                Sil
              </span>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TaskList;
