
const Footer = () => {
    return (

        <footer className=" p-10 bg-white text-base-content">
            <h2 className="text-3xl font-bold py-5 text-center">Nic Event Agency</h2>
            <div className="footer md:max-w-5xl md:mx-auto  flex justify-between">
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Wedding</a>
                    <a className="link link-hover">Anniversaries</a>
                    <a className="link link-hover">Birthday</a>
                    <a className="link link-hover">Engagement</a>
                    <a className="link link-hover">Holiday </a>
                    <a className="link link-hover">Retirement Parties</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <form>
                    <header className="footer-title">Newsletter</header>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </footer>

    );
};

export default Footer;