import {Route, Routes} from "react-router-dom";

import {Layout} from "./Layout";
import {TopNewsList} from "./components";


function App() {

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<TopNewsList/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export {App};
