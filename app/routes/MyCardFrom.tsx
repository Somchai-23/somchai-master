import { useState } from "react";

export default function MyCardForm() {
    const [myName, setMyName] = useState('');
    const [myStatus, setMyStatus] = useState(true);
    const [myMajor, setMyMajor] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
    }

    return (
        <div className="m-3">
            <form method="post" onSubmit={handleSubmit}>
                <label className="text-gray-700 font-bold">
                    การเพิ่มข้อมูลนามบัตร
                </label>
                <hr />
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    ชื่อ-สกุล
                    <input
                        type="text"
                        name="myName"
                        className="border border-blue-300"
                        onChange={(e) => setMyName(e.target.value)}
                    />
                </p>
                <p className="font-normal text-gray-700">
                    สถานะนามบัตร
                    <input
                        type="checkbox"
                        name="myStatus"
                        checked={myStatus}
                        className="border border-blue-300"
                        onChange={(e) => setMyStatus(e.target.checked)}
                    />
                </p>
                <p className="font-normal text-gray-700">
                    สาขาวิชา:
                    <br />
                    <input
                        type="radio"
                        name="myMajor"
                        value="IT"
                        onChange={(e) => setMyMajor(e.target.value)}
                    />
                    <label className="m-2">เทคโนโลยีสารสนเทศ</label>
                    <br />
                    <input
                        type="radio"
                        name="myMajor"
                        value="CS"
                        onChange={(e) => setMyMajor(e.target.value)}
                    />
                    <label className="m-2">วิทยาการคอมพิวเตอร์</label>
                    <br />
                    <input
                        type="radio"
                        name="myMajor"
                        value="DBI"
                        onChange={(e) => setMyMajor(e.target.value)}
                    />
                    <label className="m-2">นวัตกรรมธุรกิจดิจิตอล</label>
                    <br />
                </p>
                <hr />
                <p>
                    <button type="submit" className="bg-green-300 m-2 p-2">
                        บันทึกข้อมูล
                    </button>
                    <button type="reset" className="bg-red-300 m-2 p-2">
                        เคลียร์ข้อมูล
                    </button>
                </p>
            </form>
            <hr />
            <div>
                <label className="text-lg font-bold">ข้อมูลนามบัตร</label>
                <div className="border border-green-300 rounded p-3">
                    <p>ชื่อ-สกุล: {myName || "กรุณากรอกชื่อ-สกุล"}</p>
                    <p>
                        สถานะนามบัตร:{" "}
                        {myStatus ? "[/]เปิดใช้งาน":"[X]ยังไม่เปิดใช้งาน!"}
                    </p>
                    <p>
                        สาขาวิชา: {myMajor || "กรุณาเลือกสาขาวิชา"}
                    </p>
                </div>
            </div>
        </div>
    );
}
