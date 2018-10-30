import React from 'react';
import Link from 'next/link';


export default class extends React.Component{
    render(){
        return(
            <main>
                <form method='post' action='/adminLogin'>
                    <input type='text' name='username' placeholder='Enter username' />
                    <input type='password' name='password' placeholder='Enter password' />
                    <button type='submit'>Login</button>
                </form>
            </main>
        )
    }
}