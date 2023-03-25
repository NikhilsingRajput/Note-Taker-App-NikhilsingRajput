
export default function Signup(){
return <>
<div className="Front-container">
    <form method="POST" >
        <h2>SIGN UP</h2>
        <div>
            <input type={"email"} placeholder="Email" />
        </div>
        <div>
            <input type={"password"} placeholder="Password" />
        </div>
        <div>
            <input type={"password"} placeholder="Repeat Password"/>
        </div>
        <div>
            <input type={"checkbox"} />
            <label>I agree with <u> terms and conditions </u></label>
        </div>

        <button>Continue</button>
    </form>
</div>

</>
}