
import {IDashboardManager, IDashboardManagerFactory} from "./idashboard-manager"

export const DashboardManagerFactory : IDashboardManagerFactory  = ()=>{
    const IDashboardManager = {
        render: async ()=>{
            return {
                id: 'Dashboard'
            }
        }
    }
    return IDashboardManager
    
}