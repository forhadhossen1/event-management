
const Gallery = () => {
    const images = [
        "https://i.ibb.co/5nHGQH5/wed6.jpg",
        "https://i.ibb.co/TMFKDyD/parti4.jpg",
        "https://i.ibb.co/DKZkfP2/wed2.jpg",
        "https://i.ibb.co/qdtPqBC/wed3.jpg",
        "https://i.ibb.co/K9BPkHK/wed4.jpg",
        "https://i.ibb.co/VQJPxf9/parti5.jpg",
        "https://i.ibb.co/GJy2sTq/old1.jpg",
        "https://i.ibb.co/y5GTLbf/birthday1.jpg",
        "https://i.ibb.co/H7S24F6/retir2.jpg",
        "https://i.ibb.co/WKqLgzP/parti6.jpg",
        "https://i.ibb.co/HtYjfvH/wed1.jpg",
        "https://i.ibb.co/3CXSHnW/wed5.jpg"
    ];

    return (
        <div className="max-w-screen-xl mx-auto p-6 mt-4 pb-12">
            <h2 className="text-5xl font-semibold mb-4 text-center pt-12">Image Gallery</h2>
            <p className="text-lg font-medium text-center py-5">Our Best Events Gallery !</p>
            <div className="lg:grid lg:grid-cols-6 md:grid md:grid-cols-3 sm:grid gap-4">
                {images.map((imageUrl, index) => (
                    <div key={index} className="relative group">
                        <img
                            src={imageUrl}
                            alt={`Image ${index + 1}`}
                            className="w-full h-[150px] rounded-lg shadow-lg transition-transform transform group-hover:scale-105]"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
