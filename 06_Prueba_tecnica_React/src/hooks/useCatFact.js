import { useState, useEffect } from 'react'
import { getRandomFact } from '../services/fact'

export function useCatFact () {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    // El async da una advertencia en la consola
    getRandomFact().then(newFact => setFact(newFact))
  }

  useEffect(refreshFact, [])
  return { fact, refreshFact }
}
