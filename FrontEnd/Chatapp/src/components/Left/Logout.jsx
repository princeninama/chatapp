import React from 'react'
import { BiLogOut } from "react-icons/bi";
import logout from "../../API/userInfo.js";
const Logout = () => {
  return (
    <div className='mt-auto'>
            < BiLogOut className='w-6 h-6 text-white cursor-pointer' onClick={logout} />
    </div>
  )
}

export default Logout
