

const Banner = () => {
    const bannerText = <>
        <div className="absolute flex flex-col gap-y-6 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-[100%] w-[100%] pt-20 pl-24 rounded-lg">
            <h3 className="text-white text-xl lg:text-5xl  font-bold w-[25%] h ">FOOD UNITY</h3>
            <p className="text-[#FFF]  text-lg w-[30vw]" >Bridging Communities, Reducing Food Waste, and Nourishing Lives Through a Sustainable Platform for Surplus Food Sharing and Support.</p>
            <div className="flex gap-4">
                <button className="btn btn-secondary bg-[#11ff70cb] text-white border-none">Discover More</button>
                
            </div>
        </div>
    </>
    return (
        <div className="carousel w-[90vw] mx-16  md:h-[80vh] rounded-lg">
            <div id="slide1" className="carousel-item relative w-[90vw]">
                <img src="https://i.ibb.co/LgJByXF/banner.jpg" className="w-full" />
                {bannerText}
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-4">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-[90vw]">
                <img src="https://i.ibb.co/LgJByXF/banner.jpg" className="w-full" />
                {bannerText}
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-4">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-[90vw]">
                <img src="https://i.ibb.co/LgJByXF/banner.jpg" className="w-full" />
                {bannerText}
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-4">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-[90vw]">
                <img src="https://i.ibb.co/LgJByXF/banner.jpg" className="w-full" />
                {bannerText}
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-4">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;