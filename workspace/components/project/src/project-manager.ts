
import {IProjectManager, IProjectManagerFactory} from "./iproject-manager"

export const ProjectManagerFactory : IProjectManagerFactory  = ()=>{
    const ProjectManager = {
        create: async ()=>{
            return {
                id: 'dProject'
            }
        }
    }
    return ProjectManager
    
}