import {Route, Routes} from "react-router-dom";

import {Layout} from "./Layout";
import {EverythingNews, SearchListEverythingNews, TopNewsList} from "./components";


function App() {

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<TopNewsList/>}/>
                    <Route path={'/search/:current'} element={<SearchListEverythingNews/>}/>
                    <Route path={':current'} element={<EverythingNews/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export {App};
