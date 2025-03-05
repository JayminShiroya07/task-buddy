import { Link } from "react-router-dom";

export default function Home() {
    return (
        <main className="container mx-auto p-3">
            <section className="bg-cyan-700 p-8 rounded-lg shadow-lg mb-6 text-white flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 typewriter">
                    <h2 className="text-4xl font-bold mb-4 ">
                        The Importance of a Todo List....
                    </h2>
                    <p className="mb-4">
                        A todo list is a simple yet powerful tool that helps you organize your tasks and manage your time effectively. Here are some key benefits of using a todo list:
                    </p>
                    <ul className="list-disc list-inside mb-4">
                        <li>
                            Improves productivity by keeping you focused on important tasks.
                        </li>
                        <li>
                            Reduces stress by ensuring you don't forget important tasks.
                        </li>
                        <li>
                            Helps you prioritize tasks based on their importance and urgency.
                        </li>
                        <li>
                            Provides a sense of accomplishment as you check off completed tasks.
                        </li>
                    </ul>
                    <p>
                        By incorporating a todo list into your daily routine, you can achieve your goals more efficiently and maintain a better work-life balance.
                    </p>
                    <div className="text-center mt-20">
                        <Link to="/Tasks/AddTask" className="bg-cyan-800 animate-pulse  px-4 py-2 rounded-md box-button hover:bg-cyan-500 active:bg-cyan-400">Create Your First Task</Link>
                    </div>
                </div>
                <div className="md:w-1/2 flex justify-center">
                    <img alt="Illustration of a person using a todo list to organize tasks and improve productivity" className="w-full md:w-3/4 rounded-lg mb-4" height="300" src="https://storage.googleapis.com/a1aa/image/LjMgk2yPzXV436bsJPeJzyRPmMZvjsKXFZRMQmkuVYk.jpg" width="300" />
                </div>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-cyan-500 hover:bg-cyan-400 p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center text-white transition duration-300 ease-in-out">
                    <div className="md:w-2/3">
                        <h3 className="text-2xl font-bold mb-2">
                            Stay Organized
                        </h3>
                        <p className="mb-4">
                            A todo list helps you keep track of all your tasks in one place, ensuring you stay organized and on top of your responsibilities.
                        </p>
                    </div>
                    <img alt="Illustration of a person organizing tasks on a todo list" className="md:w-1/3 rounded-lg" height="200" src="https://storage.googleapis.com/a1aa/image/5KUvNy5s0cM2dvbmym3JjxOyr9tfTHXeoraeTgON1MM.jpg" width="200" />
                </div>
                <div className="bg-cyan-500 hover:bg-cyan-400 p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center text-white transition duration-300 ease-in-out">
                    <div className="md:w-2/3">
                        <h3 className="text-2xl font-bold mb-2">
                            Boost Productivity
                        </h3>
                        <p className="mb-4">
                            By having a clear list of tasks, you can focus on what needs to be done, boosting your productivity and efficiency.
                        </p>
                    </div>
                    <img alt="Illustration of a person being productive with the help of a todo list" className="md:w-1/3 rounded-lg" height="200" src="https://storage.googleapis.com/a1aa/image/qPMDQi8LZBoNAT1YauNt9Uj8tL72I0tu5XCDaAoVl7M.jpg" width="200" />
                </div>
                <div className="bg-cyan-500 hover:bg-cyan-400 p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center text-white transition duration-300 ease-in-out">
                    <div className="md:w-2/3">
                        <h3 className="text-2xl font-bold mb-2">
                            Achieve Goals
                        </h3>
                        <p className="mb-4">
                            Setting and tracking tasks on a todo list helps you achieve your goals more effectively by breaking them down into manageable steps.
                        </p>
                    </div>
                    <img alt="Illustration of a person achieving goals with the help of a todo list" className="md:w-1/3 rounded-lg" height="200" src="https://storage.googleapis.com/a1aa/image/IzZfh7DqjegGzvgiAsRKw3cXhKywjozpMc5tZdH-3Rw.jpg" width="200" />
                </div>
            </section>
        </main>
    )
}