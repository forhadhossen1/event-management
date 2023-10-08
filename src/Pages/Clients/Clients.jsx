import Footer from "../../Components/Footer";

const Clients = () => {
        
        const images = [
        "https://i.ibb.co/RCPKwZ3/user.jpg",
        "https://i.ibb.co/chFznFh/user2.jpg",
        "https://i.ibb.co/hL35kfM/user4.jpg",
        "https://i.ibb.co/qdtPqBC/wed3.jpg",
        "https://i.ibb.co/K9BPkHK/wed4.jpg",
        "https://i.ibb.co/zRZKhpZ/user5.jpg",
        "https://i.ibb.co/GJy2sTq/old1.jpg",
        "https://i.ibb.co/gm9nyBh/old2.jpg",
        "https://i.ibb.co/H7S24F6/retir2.jpg",
        "https://i.ibb.co/GJy2sTq/old1.jpg",
        "https://i.ibb.co/HtYjfvH/wed1.jpg",
        "https://i.ibb.co/3CXSHnW/wed5.jpg"
    ];

    return (
    <div>
        <div className="max-w-screen-xl mx-auto p-6 mt-4 pb-12">
            <h2 className="text-5xl font-semibold mb-4 text-center pt-12">Clients</h2>
            <p className="text-lg font-medium text-center py-5">Our Happy Clients</p>
            <div data-aos="fade-up"
                data-aos-duration="2000" className="grid gap-4 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 ">
                {images.map((imageUrl, index) => (
                    <div key={index} className="relative group">
                        <img
                            src={imageUrl}
                            alt={`Image ${index + 1}`}
                            className="w-full h-[350px] rounded-lg shadow-lg transition-transform transform group-hover:scale-105]"
                        />
                    </div>
                ))}
            </div>
        </div>

        <Footer></Footer>
        </div>
    );
};

export default Clients;