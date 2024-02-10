import { useEffect, useState } from 'react';
import TaskListItem from './TaskListItem';

const TaskList = ({ tasks, removeTask, editTask, doneTask }) => {
  const [priority, setPriority] = useState(false);
  const [filteredTasks, setFilteredTasks] = useState(tasks);

  const handlePriorityFilter = () => {
    const newPriority = !priority;
    newPriority
      ? setFilteredTasks(tasks.filter((item) => item.priority))
      : setFilteredTasks(tasks);
    setPriority(newPriority);
  };

  useEffect(() => {
    setFilteredTasks(tasks);
  }, [tasks]);

  // useEffect(() => {
  //   priority
  //     ? setFilteredTasks(tasks.filter((item) => item.priority))
  //     : setFilteredTasks(tasks);
  // }, [priority]);

  if (tasks.length === 0) {
    return <></>;
  }

  return (
    <>
      <div className='p-4 bg-light mb-5 border rounded'>
        <h4 className='mb-3'>
          Gorevler:
          <button
            className={`btn btn-sm ${
              priority ? 'btn-primary' : 'btn-warning'
            } float-end`}
            onClick={handlePriorityFilter}
          >
            {priority ? 'Hepsini Goster' : 'Oncelikli Olanlari Goster'}
          </button>
        </h4>
        <ul className='list-group'>
          {filteredTasks.map((item) => {
            return (
              <TaskListItem
                key={item.uuid}
                {...item}
                removeTask={removeTask}
                editTask={editTask}
                doneTask={doneTask}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default TaskList;
