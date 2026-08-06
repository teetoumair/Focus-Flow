import "./SearchBar.css"


interface searchBarProps{
    search: string;
    setSearch:(value:string)=>void;
}

function SearchBar({search, setSearch}:searchBarProps){


    return(
        <div className="searchBar">
            <input
            type="text"
            placeholder="Search"
            className="SearchInput"
            value = {search}
            onChange={(e)=>setSearch(e.target.value)}
            />
        </div>
    )
}

export default SearchBar