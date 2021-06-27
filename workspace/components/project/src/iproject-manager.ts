
export interface IProject {
    id: string
}

export interface IProjectManager {
    create: ()=>Promise<IProject>
    view: JSX.Element  
}

export interface IProjectStore{
    query: ()=>Promise<IProject[]>
}

export interface IProjectListProps {
    store: IProjectStore
}

export interface IProjectManagerFactory {
    createProjectStore: ()=>IProjectStore
    createProjectManager: (store:IProjectStore)=>IProjectManager
}