import { createContext } from 'react'

export const PermissionContext = createContext({
    permissions: [],
    hasPermission: () => false,
})
