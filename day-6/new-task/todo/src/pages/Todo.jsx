function Todo() {
    return(
        <>
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
    <div className="px-4 py-2">
        <h1 className="text-gray-800 font-bold text-2xl uppercase">To-Do List</h1>
    </div>
    <form className="w-full max-w-sm mx-auto px-4 py-2">
        <div className="flex items-center border-b-2 border-teal-500 py-2">
            <input
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text" placeholder="Add a task" />
            <button
                className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                type="button">
                Add
            </button>
        </div>
    </form>
    <ul className="divide-y divide-gray-200 px-4">
        <li className="py-4">
            <div className="flex items-center">
                <input id="todo1" name="todo1" type="checkbox"
                    className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded" />
                <label for="todo1" className="ml-3 block text-gray-900">
                    <span className="text-lg font-medium">Finish project proposal</span>
                    <span className="text-sm font-light text-gray-500">Due on 4/1/23</span>
                </label>
            </div>
        </li>
        <li className="py-4">
            <div className="flex items-center">
                <input id="todo2" name="todo2" type="checkbox"
                    className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded" />
                <label for="todo2" className="ml-3 block text-gray-900">
                    <span className="text-lg font-medium">Buy groceries</span>
                    <span className="text-sm font-light text-gray-500">Bananas, milk, bread</span>
                </label>
            </div>
        </li>
        <li className="py-4">
            <div className="flex items-center">
                <input id="todo3" name="todo3" type="checkbox"
                    className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded" />
                <label for="todo3" className="ml-3 block text-gray-900">
                    <span className="text-lg font-medium">Go for a run</span>
                    <span className="text-sm font-light text-gray-500">3 miles</span>
                </label>
            </div>
        </li>
    </ul>
</div>
        </>
    );
}

export default Todo;