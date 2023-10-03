interface RoleType {
  id: string
  name: string
  permissions: PermissionType[]
}

interface PermissionType {
  id: string
  name: string
}

export type { RoleType, PermissionType }
