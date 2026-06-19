
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'
const ReactElement={
    type:'a',
    props:{
        href:"https://youtube.com",
        target:'_blank'
    },
    children:'Click me to visit youtube'
}

function Ap() {
    return (
        <h1>Inside App</h1>
    )
}

const areactelement=React.createElement(
     'a',
     {href:'https://youtube.com',target:'_blank'},
     'click to visit youtube'
     // eevrything in culry braces come here as children it will be evaluated as javascript which means it should give result
     // attribute gets added here
)

const Ele=(
    <h1>hey</h1>
)
createRoot(document.getElementById('root')).render(
    <App/>
)
