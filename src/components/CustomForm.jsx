import { PlusIcon } from '@heroicons/react/24/solid'

const CustomForm = () => {

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(e);
    }

  return (
    <form className="todo" 
    onSubmit={{handleFormSubmit}}
    >
        <div className='wrapper'>
            <input 
                className="input"
                type="text"
                id="task"
                // className="input"
                // onInput={(e) => setTask(e.target.value)} 
                required
                autoFocus
                maxLength={60}
                placeholder='Enter Task'
            />
            <label 
                htmlFor="task"
                className="label"
                >Enter Task</label>
        </div>
        <button 
            className="btn"
            aria-label="Add Task"
            type='submit'
            >
            <PlusIcon/>
        </button>
        

    </form>
  )
}

export default CustomForm