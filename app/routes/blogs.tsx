const myBlogs = () => {
    let title = 'xxx'
    let rating = 5
    let descriptTion = 'BBB...'

    const Comment = ({avatar, message,author, top }) => {
        return (
            <div>
                <GetTop top = {top} />
                <img src={avatar}
                title={author}
                width={100}
                />
                <p>{message}</p>
                <i>{author}
                    <hr /><br />
                </i>
            </div>
        )
    }

    const GetTop = (top) => {
        if(top){
            return '\u2764'
        }
        else{
            return '';
        }

            
    }

    // const getRating = () => {
    //     return <span>&#11088;&#11088;&#11088;&#11088;&#11088;</span>
    // }
    
    const getRating2 = (r) => {
        
        let msg = ''
        for(let i = 0; i < r ; i++){
            msg = msg + '\u2B50'         
        }
        return <span>{msg}</span>;
        //return <span>&#11088;&#11088;&#11088;&#11088;&#11088;</span>
    }
    return (
        <div className="m-3">
            <p><strong>
                หัวข้อ : {title}
                </strong>
            </p>
            <p>
            <strong>
                รายละเอียด : {descriptTion}
            </strong>

            </p>
            <p>
            <strong>
                ชื่นชอบ : {getRating2(rating)}
            </strong>

            </p>

            <p>
            <strong>
                อื่นๆ : ....
            </strong>

            </p>

            <h1 className="text-lg font-bold">Comments</h1>
            <br />
            <Comment
                avatar="public\ครูบาเฮง-2.jpg"
                message='hello world'
                author='somchai'
                top={true}
                />
                <Comment
                avatar="public\ครูบาเฮง-2.jpg"
                message='hello world'
                author='somchai'
                top={false}
                />
            

            
        </div>
    )
}



export default myBlogs;