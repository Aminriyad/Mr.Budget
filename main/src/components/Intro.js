import { UserPlusIcon } from '@heroicons/react/24/solid';
import {Form} from 'react-router-dom';
import illustration from "../assests/illustration.jpg"
const Intro = () => {
    return (
        <>
        <div className="intro">
            <div>
                <h1>Take Control of
                    <span className="accent"> Your Money </span>
                    </h1>
                    <p>Personal budgeting is the secret to financial freedom. Start your journey today.</p>
                    <Form
                    method="post">
                        <input
                        type="text"
                        name='userName'
                        placeholder='What is your name?'
                        aria-label='Your Name'
                        autoComplete='given-name' //auto name in device
                        required //required to be completed
                        />
                        <button type='submit' className='btn btn--dark'>
                            <span>Create Account</span>
                            <UserPlusIcon width={20}/>
                        </button>
                    </Form>
            </div>
            <img src={illustration} alt="" width={600}/>
        </div>
        </>
    );
}

export default Intro;