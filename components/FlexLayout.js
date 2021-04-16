import FlexContentController from './flexcontent/FlexContentController'
import Sidebar from './Sidebar'

export default function FlexLayout({ data, sidebar }){
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