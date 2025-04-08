import IConnection from './IConnection'

interface IDatabase {
  id: number
  connections: IConnection[]
}

export default IDatabase
