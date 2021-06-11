import Social from './Social'

export default function Socials({ socialItems }) {
    if(!socialItems || socialItems.length < 1){
        return null;
    }

    return socialItems.map((socialItem, key) => (
        <Social key={key} socialItem={socialItem}/>
    ))
}