import { motion, useMotionValue } from "framer-motion"

const Achievements = ({ title, amount, children }) => {
    const number = useMotionValue(0)

    const count = (amount) => {
        let i = 0
        const updateCount = () => {
            let timeout
            

            if (i <= amount) {
                number.set(i++)
                timeout = setTimeout(updateCount, 0)
            }
            else{
                clearTimeout(timeout)
            }

        }
        updateCount()

    }
  return (
    <div className="flex items-end gap-x-3">
        

        <span className="text-4xl lg:text-2xl text-pink-600">
            {children}
        </span>
        {
            // skillsData.map(item, i)
        }
        <h1 className="flex flex-col gap-y-2">
                <motion.span 
                whileInView={() => count(amount)}
                viewport={{once: true}}
                className="text-2xl lg:text-xl font-semi-bold text-yellow-500 ">{number}</motion.span>
            <span className="text-sm tracking-wide text-gray-500 dark:text-slate-100">{title}</span>
        </h1>
        </div>



  )
}

export default Achievements
