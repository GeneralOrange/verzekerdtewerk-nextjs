import Link from 'next/link'

export default function SimpleList({ data, uri }){
    if(!data || !uri){
        return null;
    }

    return data.map((value, key) => (
        <li key={key}>
          <Link href={`${uri}${value.slug}/`}>
            <a>
              {value.name}
            </a> 
          </Link>
        </li>
    ));
}