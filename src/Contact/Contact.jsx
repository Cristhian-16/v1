import './Contact.css'
export const Contact = () => {
    return (
        <form className='contact'>
            <div className='div-form'>
                <label htmlFor="name">Name</label>
                <input type="text" placeholder='Enter your name' />
            </div>
            <div className='div-form'>
                <label htmlFor="correo">Correo</label>
                <input type="email" placeholder='Enter your email' />
            </div>
            <div className='div-form'>
                <label htmlFor="table">Message</label>
                <textarea name="table" id="table"></textarea>
            </div>
            <div className='div-button'>
                <button>
                    Send
                </button>
            </div>
        </form>
    )
}
