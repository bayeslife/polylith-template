import React, { FC, useState } from 'react'
import {IProjectManager, IProjectManagerFactory, IProjectStore, IProjectListProps} from "./iproject-manager"

const ProjectList: FC<IProjectListProps> = (props) => {
    const {store}= props
    return <div>Projects List</div>
}

export const ProjectManagerFactory : IProjectManagerFactory  = {
    createProjectStore: ()=>{
        return {
            query: async ()=>[]
        }
    },
    createProjectManager: (store: IProjectStore)=>{
        const ProjectManager = {
            create: async ()=>{
                return {
                    id: 'Project'
                }
            },
            view: <ProjectList store={store}/>
            
        }
        return ProjectManager
    }
}
