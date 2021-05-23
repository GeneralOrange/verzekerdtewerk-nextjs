import MenuSection from './MenuSection'
import MenuItem from './MenuItem'

export default function MenuComponentHandler({ component }) {
    if(!component){
        return null;
    }
        
    switch(component.__component){
        case 'custom.menu-item':
           
            return <MenuItem component={component} />
            break;
            
        case 'custom.footer-section':
            return <MenuSection component={component} />
            break;
        default:
            return null;
            break;
    }
}