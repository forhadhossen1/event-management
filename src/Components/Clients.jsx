import Marquee from "react-fast-marquee";

const Clients = () => {
    return (
        <div>

            <div className=" bg-slate-300 pb-12">
                <h2 className="text-4xl font-semibold mb-4 text-center py-12">Test<span className='text-orange-700'>imonials</span> </h2>
                <h2 className="text-xl font-semibold mb-4 text-center py-3">Happy Clients About Us</h2>
                <Marquee speed={70} pauseOnHover={true}>
                    <div className="flex gap-4  md:max-w-7xl md:mx-auto">
                        {/* /......... 1  */}
                        <div className="card rounded-none  bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src="https://i.ibb.co/TL9zPKG/Education-Copy.png" alt="clint" className="rounded-full h-[50px] w-[50px]" />
                            </figure>
                            <div className="card-body items-center text-center">

                                <p className="text-xl">My family and I are beyond happy to have them plan our wedding day</p>
                                <h2 className="card-title">Addut</h2>
                            </div>
                        </div>

                        {/* /....2.....  */}
                        <div className="card rounded-none  bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src="https://i.ibb.co/GJy2sTq/old1.jpg" alt="client" className="rounded-full h-[50px] w-[50px]" />
                            </figure>
                            <div className="card-body items-center text-center">

                                <p className="text-xl">I invited these event planner to arrange a bachelor party for by best</p>

                                <h2 className="card-title">Snow</h2>
                            </div>
                        </div>

                        {/* /....3.....  */}
                        <div className="card rounded-none  bg-base-100 shadow-xl">

                            <figure className="px-10 pt-10">
                                <img src="https://i.ibb.co/RCPKwZ3/user.jpg" alt="client" className="rounded-full h-[50px] w-[50px]" />
                            </figure>
                            <div className="card-body items-center text-center">

                                <p className="text-xl">Look no Furter! You are in the right place to plan your celebration.</p>

                                <h2 className="card-title">Jessica</h2>
                            </div>
                        </div>


                        {/* .... 4 ...  */}
                        <div className="card rounded-none  bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src="https://i.ibb.co/chFznFh/user2.jpg" alt="client" className="rounded-full h-[50px] w-[50px]" />
                            </figure>
                            <div className="card-body items-center text-center">

                                <p className="text-xl">Perfect decoration and perfect buffet for my little sisters birthday party !.</p>

                                <h2 className="card-title">Jane</h2>
                            </div>
                        </div>


                        {/* .... 5...  */}
                        <div className="card rounded-none  bg-base-100 shadow-xl">

                            <figure className="px-10 pt-10">
                                <img src="https://i.ibb.co/hL35kfM/user4.jpg" alt="client" className="rounded-full h-[50px] w-[50px]" />
                            </figure>
                            <div className="card-body items-center text-center">

                                <p className="text-xl">I invited these event planner to arrange a bachelor party for by best</p>

                                <h2 className="card-title">Batlan</h2>
                            </div>
                        </div>

                        {/* /....7.....  */}
                        <div className="card rounded-none  bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src="https://i.ibb.co/5nHGQH5/wed6.jpg" alt="client" className="rounded-full h-[50px] w-[50px]" />
                            </figure>
                            <div className="card-body items-center text-center">

                                <p className="text-xl">I invited these event planner to arrange a bachelor party for by best</p>

                                <h2 className="card-title">Butler</h2>
                            </div>
                        </div>
                    </div>
                </Marquee>
            </div>


        </div>
    );
};

export default Clients;