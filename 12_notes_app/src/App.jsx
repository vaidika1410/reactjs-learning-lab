import { useEffect, useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const [notes, setNotes] = useState([])

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || []
  
    setNotes(savedNotes)
  }, [])
  


  const submitHandler = (e) => {
    e.preventDefault()
    const copyNotes = [...notes]
    copyNotes.push({ title, note })
    
    setTitle('')
    setNote('')
    setNotes(copyNotes)
    localStorage.setItem('notes', JSON.stringify(copyNotes))
  }

  const deleteBtn = (idx) => {
    const tempNotes = [...notes]
    tempNotes.splice(idx, 1)

    setNotes(tempNotes)
  }

  return (
    <div className='bg-black min-h-screen max-w-screen text-white'>
      <div className='p-5'>
        <form
          onSubmit={(e) => {
            submitHandler(e)
          }}
          className='flex flex-col gap-4 '>
          <h1 className='text-4xl font-bold'>Add Your Notes</h1>
          <input
            value={title}
            onChange={(e) => {
              setTitle(e.target.value)
            }} className='w-full border p-4 rounded text-2xl ' type="text" placeholder='Write your title here' />
          <textarea
            value={note}
            onChange={(e) => {
              setNote(e.target.value)
            }}
            className='w-full h-50 border p-4 rounded text-2xl ' type="text" placeholder='Write your notes here' />
          <button className='p-4 active:bg-gray-300 hover:bg-gray-200 transition-all bg-white text-black rounded cursor-pointer'>Add Notes</button>
        </form>
        <h1 className='text-4xl font-bold mt-5 text-center'>Recent Notes</h1>
        <div className='p-5 flex flex-wrap gap-2 justify-center'>
          {notes.map(function (elem, idx) {
            return <div key={idx} className="notes relative lg:h-110 lg:w-80 max-lg:h-110 max-lg:w-80 max-sm:h-80 max-sm:w-55 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] bg-cover bg-center text-black rounded-2xl p-10">
              <h3 className='text-2xl mb-2'>{elem.title}</h3>
              <p>{elem.note}</p>
              <button onClick={() => {
                deleteBtn(idx)
              }} className='absolute bottom-8 bg-red-400 w-3/4 p-3 rounded-2xl active:scale-90 transition-all cursor-pointer'>Delete</button>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App