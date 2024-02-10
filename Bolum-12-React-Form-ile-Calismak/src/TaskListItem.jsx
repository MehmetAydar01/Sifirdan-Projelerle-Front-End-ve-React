import { FaTrash, FaRocketchat } from 'react-icons/fa';

const TaskListItem = ({
  uuid,
  priority,
  task,
  removeTask,
  editTask,
  doneTask,
  isDone,
}) => {
  return (
    <li
      key={uuid}
      className={`list-group-item ${isDone && 'bg-success bg-gradient'}`}
    >
      {priority && (
        <span className='badge text-bg-secondary me-2'>
          <FaRocketchat />
        </span>
      )}
      <span className={`${isDone && 'text-decoration-line-through'}`}>
        {task}
      </span>
      <div className='btn-group float-end' role='group'>
        <button
          type='button'
          className='btn btn-sm btn-success'
          onClick={() => doneTask(uuid)}
        >
          Bitti
        </button>
        <button
          type='button'
          className='btn btn-sm btn-info'
          onClick={() => editTask(uuid)}
        >
          Duzenle
        </button>
        <button
          type='button'
          className='btn btn-sm btn-danger align-middle'
          onClick={() => removeTask(uuid)}
        >
          Sil
          <span className='ms-2'>
            <FaTrash />
          </span>
        </button>
      </div>
    </li>
  );
};

export default TaskListItem;
