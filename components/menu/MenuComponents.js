import MenuComponentHandler from './MenuComponentHandler'

export default function MenuComponents({ components }) {
    if(!components){
        return null;
    }

    return components.map(component => (
        <MenuComponentHandler key={`${component.id}_${component.name}`} component={component}/>
    ));
}