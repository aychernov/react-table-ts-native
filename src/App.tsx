import React, {useEffect, useState} from 'react';
import './App.css';
import Table from "./components/Table";
import axios from "axios";



function App() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPostList = async () => {
            const data = await axios('https://jsonplaceholder.typicode.com/users')
            setPosts(data.data)
        }
        fetchPostList()
    },[])

    return (
        <div>
            <Table valueStart={0} valueEnd={2} posts={posts} whatkindofdata={['id', 'name', 'username', 'email']}/>
            <Table valueStart={2} valueEnd={5} posts={posts} whatkindofdata={['id', 'name', 'username', 'email']}/>
            <Table valueStart={5} valueEnd={7} posts={posts} whatkindofdata={['id', 'name', 'username', 'email']}/>
        </div>
    );
}

export default App;
