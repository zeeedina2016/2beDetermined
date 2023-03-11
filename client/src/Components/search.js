import "./search.css"
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';


/*const Search = () => {
    return(
        <div className="search">
        <input type="text" className="search-bar" placeholder="  search here..." />
        <div className="search-icon"> </div>
    </div>
    )
    
}
*/
function Searchbar({placeholder,data}) {
    return (
        <div className="search">
            <div className="search-inputs">
                <input type="text" placeholder={placeholder}/>
                <div className="search-icon"> 
                    <SearchIcon />
                </div>
            </div>
        </div>
    );
}
export default Searchbar;