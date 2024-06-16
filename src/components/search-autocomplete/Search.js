import React, { useEffect, useState } from 'react'

const Search = () => {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [text, setText] = useState('');
    const [hideList, setHideList]  = useState(false);

    const filterResults = (e) => {
        setHideList(false);
        const searchText = e.target.value;
        setText(searchText);
        setFilteredUsers(users.filter(user => user.firstName.toLowerCase().includes(searchText.toLowerCase())));
    }

    const fetchListOfUsers = async () => {
        setLoading(true);
        const response = await fetch('https://dummyjson.com/users');
        const data = await response.json();
        setUsers(data.users);
        setFilteredUsers(data.users); 
        setLoading(false);
    }

    const handleClick = (e) => {
        setText(e.target.innerText);
        setHideList(true);
    }

    useEffect(() => {
        fetchListOfUsers();
    }, []);

    return (
        <div className='search-autocomplete-container'>
            <input 
                type="text" 
                name='search-users' 
                placeholder='Search User here....' 
                onChange={filterResults} 
                value={text} 
            />
            <button>Search</button>
            {loading && <p>Loading...</p>}
            {text!=='' && !hideList && <ul>
                {filteredUsers.map(user => (
                    <li onClick={handleClick} key={user.id}>{user.firstName} {user.lastName}</li>
                ))}
            </ul>}
        </div>
    )
}

export default Search
