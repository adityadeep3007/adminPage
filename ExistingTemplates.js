import React from "react";
import AdminLayout from "../../../components/AdminLayout";
import "../certifgen2/ExistingTemplates.css";
import Certi from "./certi.png"
import { Link } from "react-feather";
import Search from "./magnifying-glass.png"
import data from '../../../data/existingTemplate.json'

export default function ExistingTemplates(){
    return(
        
        <div className="templatePage">
            <h1 className="template_title">Existing Templates</h1> 
                <div className="searchBar">
                    <div className = " searchbar searchBar_tem">
                        <img src={Search}  className="search-icon"/>
                        <p>Search</p>
                    </div>
                    <button className="upload_template searchBar_tem">Upload Template</button>
                </div>
                <div className="template_container">
                    <img src={data.Templates.id.preview} className="template" />
                    <img src={Certi} className="template" />
                    <img src={Certi} className="template" />
                    <img src={Certi} className="template" />
                    <img src={Certi} className="template" />
                    <img src={Certi} className="template" />
                    <img src={Certi} className="template" />        
                 </div>  
        </div>     
        
    )
}
// name, url, font