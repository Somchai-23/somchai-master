import { useState } from "react";
import MyMenu from "./templates/mymenu"
import MyFooter from "./templates/myfooter"

function MyContact () {
    return (
    <div className="m-0">
         <MyMenu/>
         <div className="m-5">
            <h1 className="text-xl">ติดต่อฉัน...</h1>
            <div className="flex flex-row justify-center">
            <p style={{color: 'black'}}>สมชาย เจริญรัมย์ <br/> 
            Somchai Charoenrum<br/></p>
            </div>
        </div>
          <MyFooter/>
    </div>
    );
}

export default MyContact;