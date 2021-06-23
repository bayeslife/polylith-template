
import {ISiteManager, ISiteManagerFactory} from "./isite-manager"

export const SiteManagerFactory : ISiteManagerFactory  = ()=>{
    const ISiteManager = {
        create: async ()=>{
            return {
                id: 'site'
            }
        }
    }
    return ISiteManager
    
}