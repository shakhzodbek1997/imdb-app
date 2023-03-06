import Link from "next/link";

function MenuItem({title, address, Icon}) {
  return (
    <div>
      <Link href={address} className="mx-4 lg:mx-6 hover:text-amber-600">
        <Icon className="tex-2xl sm:hidden mx-4" />
        <p className="hidden sm:inline my-2 text-sm">{title}</p>
      </Link>
    </div>
  )
}

export default MenuItem;

// this menu item is going to get:
//                          title(HOME, ABOUT)
//                          address(link of HOME and ABOUT)
//                          Icon (in mobile version HOME and ABOUT will change to icon)
//  ↑↑↑ this 3 informations should come from Header.js file 
