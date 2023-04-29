import React from 'react'


const filterData: string[] = [
    'All', 'Publication', 'Events', 'News'
]

const Filters = () => {
  return (
    <div className='mb-[66px]'>
        <form action="" className='flex gap-10 justify-center'>
            {filterData.map((fd)=>{
                return <button className='bg-[#F1F3FE] py-1 px-2 rounded-md text-[#525252]' name='filter' value={fd.toLowerCase()} key={fd}>{fd}</button>
            })}
        </form>
    </div>
  )
}

export default Filters