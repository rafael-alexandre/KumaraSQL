import React from 'react'
import { ColumnDef } from '@tanstack/react-table'
import ICard from '@/interfaces/ICard'

export default () => React.useMemo(() => [
  {
    header: 'ID',
    accessorKey: 'id',
  },
] as ColumnDef<ICard, ICard>[], [])
