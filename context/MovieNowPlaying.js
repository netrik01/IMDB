import { createContext, useState } from "react"
export const PageContext = createContext(null)

const Context = (props) => {
  // console.log(props)
  const [PageCount, setPageCount] = useState(1)

  return (
    <PageContext.Provider value={[PageCount, setPageCount]} >
      {props.children}
    </PageContext.Provider>
  )
}

export default Context
