import React from 'react'
import { TiShoppingCart } from "react-icons/ti";

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div>

      <nav className="flex justify-between px-20 py-10 items-center bg-white">
        <h1 className="text-xl text-gray-800 font-bold">Task Management</h1>
        <div className="flex items-center">

          <ul className="flex items-center space-x-6">
            <li>
              <TiShoppingCart color='black' fontSize={40} />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar