import Link from "next/link"



export default function TopNav() {
  return (
    

    <div className="navbar bg-base-100 shadow-sm fixed z-10">
  <div className="navbar-start">
    
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2 bg-base-100 w-40 z-1">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <input
      type="checkbox"
      checked={true}
      className="toggle border-indigo-600 bg-indigo-500 checked:border-orange-500 checked:bg-orange-400 checked:text-orange-800"
    />
  </div>
</div>
  );
}
