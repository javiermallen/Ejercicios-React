import { createContext, useState } from "react"

// 1. Crear el Contexto
export const FiltersContext = createContext()

// 2.Crear el Provider, para proveer el contexto
export function FiltersProvider ({ children }) {
    const [ filters, setFilters] = useState({
        minPrize: 0,
        category: 'all'
    })
    return (
        <FiltersContext.Provider value={{
            filters,
            setFilters
        }}>
            {children}
        </FiltersContext.Provider>
    )
}