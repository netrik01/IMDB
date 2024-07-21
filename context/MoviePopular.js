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



// import { createContext, useState } from "react"
// export const MovieContext = createContext(null)

// const Context = (props) => {
//   // console.log(props)
//   const [movies, setMovies] = useState([])

//   return (
//     <MovieContext.Provider value={[movies, setMovies]} >
//       {props.children}
//     </MovieContext.Provider>
//   )
// }

// export default Context


//////////////////////////////////////////////////

// export default Context

// import { createContext, useState } from "react"
// export const PageContext = createContext(null)

// const Context = (props) => {
//   console.log(props)
//   const [pageCount, setPageCount] = useState(1)

//   return (
//     <PageContext.Provider value={[pageCount, setPageCount]} >
//       {props.children}
//     </PageContext.Provider>
//   )
// }

// export default Context