import React from "react";
import { Typography, Select } from "antd";
const { Title } = Typography;
const { Option } = Select;

export default function TitleSegment({
    //inputs
    svgTitle,
    svgNameList,
    changeCurrentSVG,
    }) {

    //Overall titlesegment, showing all svg options that can be 
    //selected using the dropdown
    return (
        <>
            <Title>SVG from a Decentralized Database Viewer</Title>
            
            <Title level={2}>
                Current display: <b>{svgTitle}</b>
            </Title>

            <Select
                defaultValue = {svgNameList[0]}
                style={{width:360}}
                onChange={changeCurrentSVG}
            >
                {svgNameList.map((svgName) => {
                    return <Option value={svgName}>{svgName}</Option>;
                })}
            </Select>
        </>
    );
}