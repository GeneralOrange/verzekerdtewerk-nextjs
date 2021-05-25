import MetaField from './MetaField'

export default function MetaFields({ metaFieldData }){
    if(!metaFieldData.meta_fields){
        return null;
    }

    return metaFieldData.meta_fields.map(meta_field => (
        <MetaField content={ meta_field }/>
    ));
}