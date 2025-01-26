import { useState } from "react";
import { useParams } from "@remix-run/react";
import { toDoItem } from "./toDolists";
import MyMenu from "./templates/mymenu"
import MyFooter from "./templates/myfooter"

function GetDetail () {
    const myParams = useParams();
    const todl_id = myParams.tid;

    const tdItem = toDoItem.filter((item) =>
        item.id == todl_id
    );

    console.log(tdItem);

    return (
    <div className="m-0">
         <MyMenu/>
         <div className="m-5">
            <h1 className="text-xl text-black">รายละเอียดข้อมูลที่ต้องทำ</h1>
            <div className="flex flex-row justify-center">
            {
                tdItem.length === 0 ? 
                <h1 style={{color: 'black'}}>
                ไม่พบข้อมูลกิจกรรมที่คุณเลือก!</h1> :
                ( 
                    <>
                        <p style={{color: 'black'}}>
                        รหัสข้อมูล: {tdItem[0].id} <br/> 
                        หัวข้อ: {tdItem[0].title}<br/>
                        วันที่สร้าง: {tdItem[0].created}<br/>
                        สถานะ: {tdItem[0].compleded}<br/>
                        </p>
                     </>
                )
            }
            </div>
            <div className="mt-3">
            <a href="/getToDoLists" className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900"
            >ย้อนกลับ</a>
            </div>
        </div>
          <MyFooter/>
    </div>
    );
}

export default GetDetail;