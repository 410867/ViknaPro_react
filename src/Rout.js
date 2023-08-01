import * as React from "react";
import App from "./Pages/App";
import Contacts from "./Pages/Contacts";
import {
    Route,
    Routes,
} from 'react-router-dom';
import {Component} from "react";

class Rout extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route exact path="*" element={ <App /> }/>
                    <Route exact path="/:contacts" element={ <Contacts /> }/>
                    {/*                        <Route path="/:path_param/Page" element={<Page />} />
                        <Route path="/:path_param/Page/Edit" element={<Edit />} />
                        <Route path="/Create-Page" element={<Create_Page />} />*/}
                </Routes>
            </>
        );
    }
}

export default Rout;
