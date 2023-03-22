import { useContext, useState } from "react"
import { FiltersContext } from "../context/filters"

import './Filters.css'

export function Filters () {
    
    const { filters, setFilters } = useContext( FiltersContext )
    
    const handleChangePrize = ( event ) => {
        //Actualizo el filtro
        setFilters( previousFilters =>  {
            return({
                ...previousFilters,
                minPrize: event.target.value
            })
        })
    }
    const handleChangeCategory = ( event ) => {
        //Actualizo el filtro
        setFilters( previousFilters => {
            return({
                ...previousFilters,
                category: event.target.value
            })
        })
    }
    return (
        <section className="filters">
            <div className="range">
                <label htmlFor="prize">Precio Mínimo</label>
                <input type="range" name="prize" id="prize" max="1000" min="0" value={filters.minPrize} onChange={handleChangePrize}/>
                <span>{filters.minPrize} €</span>
            </div>
            <div className="select">
                <label htmlFor="category">Categoría</label>
                <select name="category" id="category" onChange={handleChangeCategory}>
                    <option value="all" defaultValue>Todos</option>
                    <option value="smartphones">Móviles</option>
                    <option value="laptops">Portátiles</option>
                    <option value="fragrances">Fragancias</option>
                </select>
            </div>
        </section>
    )
}