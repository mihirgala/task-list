import TaskList from "./components/TaskList";



export default function Home() {
  return (
    <section className="p-2">
      <div>
      <h1 className="text-5xl text-center text-[#64C8FF] font-extrabold">
        TaskList
      </h1>
      </div>
      <TaskList/>
    </section>
  )
}
