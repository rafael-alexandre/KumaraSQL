import { useState, useEffect } from 'react'

/**
 * useStickyState - Hook que mantém o estado persistente usando localStorage.
 *
 * @param key Chave utilizada para armazenar o estado no localStorage.
 * @param defaultValue Valor inicial padrão do estado.
 * @returns Um array com o estado atual e a função para atualizá-lo.
 */
function useStickyState<T>(key: string, defaultValue: T): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [ value, setValue ] = useState<T>(() => {
    try {
      const stickyValue = localStorage.getItem(key)

      if (stickyValue !== null) {
        return JSON.parse(stickyValue)[key] as T
      }
    } catch (error) {
      console.error(`Error retrieving value from localStorage for key "${key}": ${error}`)
    }

    return defaultValue
  })

  useEffect(() => {
    if (value !== defaultValue) {
      localStorage.setItem(key, JSON.stringify({
        [key]: value,
      }))
    }
  }, [defaultValue, key, value])

  return [ value, setValue ]
}

export default useStickyState
