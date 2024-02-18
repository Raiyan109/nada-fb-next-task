"use client"
import { useAppSelector } from '@/lib/store'

type Props = {}

export default function ViewTasks({ }: Props) {
    const title = useAppSelector((state) => state.tasksSlice.title)
    console.log(title);

    return (
        <div>ViewTasks</div>
    )
}