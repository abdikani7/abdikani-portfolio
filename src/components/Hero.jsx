

const Hero = () => {
  return (
    <section id="hero" className="pt-28 lg:pt-36">
        <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">
            <div>
                <div className="">
                    <figure className="">
                        <img src="/public/image/favicon.png"
                        width={40}
                        height={40}
                         alt="abdikani"
                         className="img-cover"
                          />
                    </figure>
                    <div className="">
                        <span className="">
                            <span className=""></span>
                        </span>
                        Available for work
                    </div>
                </div>
                <h2>
                    Building Scalable Modern Websites for the Future
                </h2>
                <div className="">
                    ButtonPrmary

                    ButtonOutline
                </div>
            </div>

            <div className="">
                <figure className="">
                    <img src="/public/image/ss-bc.png" 
                    width={100}
                    height={200}
                    alt="Abdikani" className="w-full" />
                </figure>
            </div>
        </div>

    </section>

)
}

export default Hero