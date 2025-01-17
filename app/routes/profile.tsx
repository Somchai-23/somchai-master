function MyProfile(){
    return (
        <div className="p-5 m-5 border-8">
            <h1>
                My Profile
            </h1>
            <strong>
                Name: somchai Charoenrum 
            </strong>
            <strong>
                026740491604-6 
            </strong>
            <strong>
                ประวิติการทำงาน: Accounting Admin 
            </strong>
            <MyEducateion/>
        </div>
    )
}

function MyEducateion(){
    return (
        <div>
            <ul>
                <li>Information Technology, RMUTTO, 256-Present</li>
                <li>03/05/2003</li>
            </ul>
        </div>
    );

}

export default  MyProfile;