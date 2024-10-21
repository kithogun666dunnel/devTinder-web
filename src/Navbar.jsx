
const Navbar = () => {
  return (<div className="bg-base-300 navbar">
  <div className="flex-1">
    <a className="text-xl btn btn-ghost">DEV-N-DEV</a>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
    </div>
    <div className="mx-7 dropdown dropdown-end">
      <div tabIndex={0} role="button" className="avatar btn btn-circle btn-ghost">
        <div className="rounded-full w-10">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="z-[1] bg-base-100 shadow mt-3 p-2 rounded-box w-52 dropdown-content menu menu-sm">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
  )
}

export default Navbar