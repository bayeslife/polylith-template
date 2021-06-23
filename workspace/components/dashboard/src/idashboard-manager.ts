
export interface IDashboard {
    id: string
}

export interface IDashboardManager {
    render: ()=>Promise<IDashboard>
}

export type IDashboardManagerFactory = ()=>IDashboardManager