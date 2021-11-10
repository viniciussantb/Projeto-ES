function SignupForm() {
    return (
        <div className='container'>
            <h1>Sign Up</h1>
            <form className='add-form'>
                <div className='form-control'>
                    <label>Name</label>
                    <input type='text' placeholder='Enter Name'/>
                </div>
                <div className='form-control'>
                    <label>Email</label>
                    <input type='text' placeholder='Enter Email'/>
                </div>
                <div className='form-control'>
                    <label>Password</label>
                    <input type='text' placeholder='Enter Password'/>
                </div>
                <input type='submit' value='Sign Up' className='btn btn-block'/>
            </form>
        </div>
    )
}

export default SignupForm
