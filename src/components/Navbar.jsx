'use client'
import { navbarData } from "@/assets"
import { copyRightIcon } from "@/assets"

const Navbar = ({ id }) => {
  var today = new Date();
  let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  let date1 = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();

  return (
    <div className="fixed w-[70px] sm:hidden align-middle px-5 py-10 h-full left-0 top-0 flex flex-col justify-between border-r border-gray-300 z-20">

        <a href="/#home" className="">
          <span className="text-3xl font-semibold dark:text-red-500 text-red-400">M</span><span className="dark:text-yellow-600">.</span><span className="w-min rotate-90 block origin-bottom text-[12px] font-semibold translate-x-3 -translate-y-2 dark:text-yellow-600 text-gray-600">Code</span>
        </a>
        <div className="flex flex-col gap-y-3 sm:gap-y-2">

          {
            navbarData.map((item, i) => (
              <a key={item.id} href={`/#${item.id}`} className="group flex flex-col items-center gap-y-2">
                <span className={`text-2xl group-hover:scale-125 transition-all ${id === item.id ? 'text-red-500 scale-110' : 'text-yellow-600 scale-100'}`}>{item.icon}</span>
                <span className={`text-[10px] tracking-wide  opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-center dark:text-white ${item.id === id && 'opacity-100'}
`}>{item.name}</span>
              </a>
            ))
          }


        </div>
        <p className="flex items-center justify-center text-[13px] text-gray-500  ">
          
          <span className="absolute left-1/2 w-max flex tracking-wider items-center origin-bottom-left -rotate-90">{copyRightIcon} {date1}</span>
        </p>
    </div>
  )
}

export default Navbar


// ${id === item.id && '-translate-x-0 opacity-100'} ${i % 2 == 0 ? 'translate-x-2' : '-translate-x-2'}`
{/* -translate-x-8 'opacity-100 duration-300 translate-x-0' : 'opacity-0'*/}
{/* {
  navbarData.map((item, i) => (
    <a href="" className="">
    <span className="text-3xl font-semibold text-red-400">M</span><span className="w-min rotate-90 block origin-bottom text-[12px] font-semibold translate-x-3 -translate-y-2">Code</span>
    </a>  
    ))
  } */}
  
  {/* <span className="absolute left-1/2 w-max flex tracking-wider items-center origin-bottom-left -rotate-90">{copyRightIcon} 2003-2024</span> */}