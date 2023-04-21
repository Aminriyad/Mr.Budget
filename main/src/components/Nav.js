//assests
import { Form, NavLink } from 'react-router-dom';
import logomark from '../assests/logomark.svg'
import { TrashIcon } from '@heroicons/react/24/solid'

const Nav = ({userName}) => {
    return (
        <nav>
            <NavLink
            to="/"
            aria-label="Go Home">
             <img src={logomark} alt="" height={30} />
             <span>Home Budget</span>
            </NavLink>
            {/* This is the delete use button */}
            { 
            userName &&  (
                <Form
                method='post'
                action="/logout"
                onSubmit={(e)=>{
                    // eslint-disable-next-line no-restricted-globals
                    if(!confirm("Delete user and all data?")){
                        e.preventDefault();}
                }}
                >
                    <button className="btn btn--warning">
                        <span>Delete User</span>
                        <TrashIcon width={20}/>
                    </button>
                </Form>
            )}
        </nav>
     );
}
 
export default Nav;