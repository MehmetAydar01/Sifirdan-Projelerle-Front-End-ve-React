import { useEffect, useState } from 'react';
import { FaTrash, FaRocketchat } from 'react-icons/fa';

const TaskList = ({ tasks, removeTask, editTask }) => {
  const [priority, setPriority] = useState(false);
  const [filteredTasks, setFilteredTasks] = useState(tasks);

  const handlePriorityFilter = () => {
    setPriority((prev) => !prev);
  };

  useEffect(() => {
    setFilteredTasks(tasks);
  }, [tasks]);

  useEffect(() => {
    priority
      ? setFilteredTasks(tasks.filter((item) => item.priority))
      : setFilteredTasks(tasks);
  }, [priority]);

  if (tasks.length === 0) {
    return <></>;
  }

  return (
    <>
      <div className='p-4 bg-light mb-5 border rounded'>
        <h4 className='mb-3'>
          Gorevler:
          <span
            className={`btn btn-sm ${
              priority ? 'btn-primary' : 'btn-warning'
            } float-end`}
            onClick={handlePriorityFilter}
          >
            {priority ? 'Hepsini Goster' : 'Oncelikli Olanlari Goster'}
          </span>
        </h4>
        <ul className='list-group'>
          {filteredTasks.map((item) => {
            return (
              <li key={item.uuid} className='list-group-item'>
                {item.priority && (
                  <span className='badge text-bg-secondary me-2'>
                    <FaRocketchat />
                  </span>
                )}
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
