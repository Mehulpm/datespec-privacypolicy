 function Navbar() {
    return (
        <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
        <div className="flex items-center space-x-4">
            <a href="/" className="font-bold">
            DateSpec
            </a>
        </div>
        <div className="flex items-center space-x-4">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-of-service">Terms & Conditions</a>
        </div>
        </nav>
    );
    }
export default Navbar;
    // Path: src/pages/about.tsx