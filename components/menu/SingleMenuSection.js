import { NavDropdown } from 'react-bootstrap'

export default function SingleMenuSection({ data }){
    if(!data){
      return null;
    }

    return (
      <>
        {data.content && <NavDropdown.Item>
          {data.content}
        </NavDropdown.Item>}
        <NavDropdown.Divider />
        {data.pages.map(page => (
          <NavDropdown.Item
            key={page.id}
            href={`/${page.slug}`}>
              {page.name}
          </NavDropdown.Item>
        ))}
      </>
    )
    
  }