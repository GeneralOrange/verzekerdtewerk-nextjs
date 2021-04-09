import FlexContentController from '../components/flexcontent/FlexContentController'
import Sidebar from '../components/Sidebar'

const Layout = ({ data, sidebar }) => {
    if(!data || !sidebar){
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
                            <FlexContentController data={data}/>
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
                        <FlexContentController data={data}/>
                    </div>
                    <div className="col-12 col-lg-4">
                        <Sidebar data={sidebar.rawSidebarData}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout;