"use client"
import { addTask } from "@/lib/features/tasks/tasksSlice"
import { AppDispatch, RootState } from "@/lib/store"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useAppSelector } from '@/lib/store'

type Props = {}

export default function AddTask({ }: Props) {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const dispatch = useDispatch<AppDispatch>()
    const tasks = useAppSelector((state) => state.tasksSlice.tasks)
    console.log(tasks);

    const handleTaskSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        dispatch(addTask({ title, desc }));

        // Clear the inputs after adding task
        setTitle('');
        setDesc('');
    }
    return (


        <div className="bg-gradient-to-tr from-slate-300 to-black-500">

            <section id="login" className="p-4 flex flex-col justify-center min-h-screen max-w-md mx-auto">
                <div className="p-6 bg-sky-100 rounded">
                    <div className="flex items-center justify-center font-black m-3 mb-12">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mr-3 text-red-600 animate-pulse" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>
                        <h1 className="tracking-wide text-3xl text-gray-900">Add Task</h1>
                    </div>
                    <form onSubmit={handleTaskSubmit}
                        className="flex flex-col justify-center">
                        {/* <div className="flex justify-between items-center mb-3">
                            <div className="inline-flex items-center self-start">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3 bg-gradient-to-r from-pink-600 to-red-600 shadow-lg rounded p-1.5 text-gray-100" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M13 7H7v6h6V7z" />
                                    <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd" />
                                </svg>
                                <span className="font-bold text-gray-900">$5 / Core</span>
                            </div>
                            <div className="flex">
                                <button type="button" className="bg-yellow-600 p-1.5 font-bold rounded">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                                    </svg>
                                </button>

                                <input id="item_count" type="number" value="1" className="max-w-[100px] font-bold font-mono py-1.5 px-2 mx-1.5
                                        block border border-gray-300 rounded-md text-sm shadow-sm  placeholder-gray-400
                                        focus:outline-none
                                        focus:border-sky-500
                                        focus:ring-1
                                        focus:ring-sky-500
                                        focus:invalid:border-red-500  focus:invalid:ring-red-500"/>

                                <button type="button" className="bg-green-600 p-1.5 font-bold rounded">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </div> */}
                        <label className="text-sm font-medium text-black">Title</label>
                        <input
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                            className="mb-3 px-2 py-1.5 mt-1 block w-full border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                            focus:outline-none
                            focus:border-sky-500
                            focus:ring-1
                            focus:ring-sky-500
                            focus:invalid:border-red-500 focus:invalid:ring-red-500 text-black" type="text" name="username" placeholder="title" />
                        <label className="text-sm font-medium text-black">Description</label>
                        <textarea
                            onChange={(e) => setDesc(e.target.value)}
                            value={desc}
                            className="
                            mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                            focus:outline-none
                            focus:border-sky-500
                            focus:ring-1
                            focus:ring-sky-500
                            focus:invalid:border-red-500 focus:invalid:ring-red-500 text-black" name="messages" placeholder="Write something"></textarea>
                        <button className="px-4 py-1.5 rounded-md shadow-lg bg-gradient-to-r from-pink-600 to-red-600 font-medium text-gray-100 block transition duration-300" type="submit">
                            <span id="login_process_state" className="hidden">Sending</span>
                            <span id="login_default_state">Add<span id="subtotal"></span></span>
                        </button>
                    </form>
                </div>
            </section>

            <div className="flex justify-center items-center border-red-500 border-2 w-32 rounded-xl">
                {
                    tasks.map((item) => (
                        <div key={item.title}>
                            <h1 >Title: {item.title}</h1>
                            <h1 > Description: {item.desc}</h1>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}