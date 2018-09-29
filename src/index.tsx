import * as React from "react"
import * as ReactDOM from "react-dom"
import Resume from './resume.md'

ReactDOM.render(
    <div>
        <Resume ref={(el:string)=>{console.log(el)}}/>
    </div>
    ,
    document.getElementById("root")
)
