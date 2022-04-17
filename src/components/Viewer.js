import React from "react";

export default function Viewer({svgData}) {
    //component for the svg viewer
    return (
        <>
            <img 
                src = {`data:image/svg+xml;utf8,${encodeURIComponent(svgData)}`}
                alt = "SVG currently being displayed"
                style = {{maxWidth: 420,}}
            />
        </>
    )
}