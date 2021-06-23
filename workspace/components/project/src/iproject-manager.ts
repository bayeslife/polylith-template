
export interface IProject {
    id: string
}

export interface IProjectManager {
    create: ()=>Promise<IProject>
}

export type IProjectManagerFactory = ()=>IProjectManager