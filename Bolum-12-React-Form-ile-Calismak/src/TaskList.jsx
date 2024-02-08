import { FaTrash } from 'react-icons/fa';

const TaskList = ({ tasks, removeTask, editTask }) => {
  if (tasks.length === 0) {
    return <></>;
  }

  return (
    <>
      <div className='p-4 bg-light mb-5 border rounded'>
        <h4>Gorevler:</h4>
        <ul className='list-group'>
          {tasks.map((item) => {
            return (
              <li key={item.uuid} className='list-group-item'>
                {item.task}
                <div className='btn-group float-end' role='group'>
                  <button
                    type='button'
                    className='btn btn-sm btn-info'
                    onClick={() => editTask(item.uuid)}
                  >
                    Duzenle
                  </button>
                  <button
                    type='button'
                    className='btn btn-sm btn-danger align-middle'
                    onClick={() => removeTask(item.uuid)}
                  >
                    Sil
                    <span className='ms-2'>
                      <FaTrash />
                    </span>
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default TaskList;
