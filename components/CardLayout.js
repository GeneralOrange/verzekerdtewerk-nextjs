import Cards from './flexcontent/Cards'
import Sidebar from './Sidebar'

const CardLayout = ({ data, sidebar }) => {
    if(!data && !sidebar){
        return (
            <>
            </>
        )
    }

    if(!sidebar.sidebarBolean){
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Cards data={data}/>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-8">
                        <Cards data={data}/>
                    </div>
                    <div className="col-12 col-lg-4">
                        <Sidebar data={sidebar.rawSidebarData}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardLayout;