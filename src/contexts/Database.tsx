import React, { createContext, PropsWithChildren } from 'react'
import IDatabase from '@/interfaces/IDatabase'
import useStickyState from '@/hooks/useStickyState'

type Props = {
  databases: IDatabase[]
  setDatabases: (databases: IDatabase[]) => void
}

export const DatabaseContext = createContext<Props>({} as Props)

const DatabaseProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [ databases, setDatabases ] = useStickyState<IDatabase[]>('databases',[])

  return (
    <DatabaseContext.Provider
      value={{
        databases,
        setDatabases,
      }}
    >
      {children}
    </DatabaseContext.Provider>
  )
}

export default DatabaseProvider
