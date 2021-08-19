export function routerException(slug){
    switch(slug){
        case 'airco-plaatsen-of-vervangen':
            return false;
            break;
        case 'alarm-systeem-installatie-of-vervanging':
            return false;
            break;
        case 'buiten-schilderwerk':
            return false;
            break;
        case 'cv-ketel-onderhoud':
            return false;
            break;
        case 'dakgoot-schoonhouden':
            return false;
            break;
        case 'schoorsteen-vegen':
            return false;
            break;
        default:
            return true;
            break;
    }
}