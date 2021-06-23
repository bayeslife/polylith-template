
export interface ISite {
    id: string
}

export interface ISiteManager {
    create: ()=>Promise<ISite>
}

export type ISiteManagerFactory = ()=>ISiteManager