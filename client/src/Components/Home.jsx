import React, { useState } from 'react'
import InputText from './InputText';

function Home() {

    const [posts, setPosts] = useState([]);

    return (
        <div>
            <h1>Instagram</h1>
            <InputText />
            {
                posts.length === 0
                    ?
                    <div><h2>Nothing Posted</h2></div>
                    :
                    posts.map(post => (
                        <div>
                            {post}
                        </div>
                    ))
            }
        </div>

    )
}

export default Home;

