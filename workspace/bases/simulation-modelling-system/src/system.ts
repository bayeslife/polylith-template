import {SiteManagerFactory, ISite} from '../../../components/site/src' 
import {ProjectManagerFactory, IProject} from '../../../components/project/src' 
import {DashboardManagerFactory, IDashboard} from '../../../components/dashboard/src' 

export const viewsite = async ()=> {
    const project : IProject = await ProjectManagerFactory().create()
    const site : ISite = await SiteManagerFactory().create()
    const dashboard: IDashboard = await DashboardManagerFactory().render()
}