const Header: React.FC = () => {
    return (
        <header className="flex flex-wrap items-center justify-around w-full h-1/6 pt-8 pb-4 border-b-2 ">
            <div>
                <h1 className="text-2xl font-bold">E-Commerce</h1>
            </div>
            <div>
                <ul className="flex list-none flex-row items-center gap-5 font-normal text-xl">
                    <li>
                        <p>Home</p>
                    </li>
                    <li>
                        <p>Contact</p>
                    </li>
                    <li>
                        <p>About</p>
                    </li>
                    <li>
                        <p>Sign Up</p>
                    </li>
                </ul>
            </div>
            <div>
                <ul className="flex list-none flex-row items-center gap-4">
                    <li>
                        <input type="text" className="p-2 px-8 border-none rounded-md bg-gray-200" placeholder="What are you looking for?" />
                    </li>
                    <li>
                        <svg className="h-8 w-8 text-black-900" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                            stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />  <path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7" />
                        </svg>
                    </li>
                    <li>
                        <svg className="h-8 w-8 text-black-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 
                            2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;