const ContactPage = () => {
  return (
    <section className="max-w-screen-3xl mx-auto w-full h-fit relative px-6 py-8 md:px-12 md:py-10 lg:px-28 lg:py-28">
      <div className="flex flex-col md:flex-row justify-center items-top gap-6 md:gap-10 lg:gap-24">
        {/* Container left */}
        <div className="flex flex-col justify-center items-start w-full h-full gap-6 py-8">
          <h1 className="text-4xl md:text-5xl lg:text-7xl leading-tight lg:leading-tight">
            Contact Page
          </h1>
          <p className="w-full md:w-3/4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            corrupti explicabo quae similique, recusandae magni atque odit
            minima eveniet accusantium? Sunt, sit adipisci enim porro doloribus
            excepturi at fugiat similique.
          </p>
        </div>
        <div className="max-w-screen-xl mx-auto w-full h-full">
          <form
            action="#"
            className="py-6 lg:py-8 mx-auto w-full h-full flex flex-col justify-center items-center gap-6 rounded-2xl"
          >
            <div className="flex flex-col justify-between items-start w-full h-full">
              <h2 className="text-2xl md:text-3xl">Contact Page</h2>
            </div>

            <input
              className=" p-4 bg-primary_backgroundLighterColor-200 hover:bg-primary_backgroundLighterColor-400 rounded-2xl border border-primary_lighterShade-300 w-full"
              type="email"
              placeholder="E.g Adam Smith"
              name="Smith"
            />
            <input
              className=" p-4 bg-primary_backgroundLighterColor-200 hover:bg-primary_backgroundLighterColor-400 rounded-2xl border border-primary_lighterShade-300 w-full "
              type="email"
              placeholder="E.g adamsmith93@gmail.com"
              name="email"
            />
            <textarea
              className=" p-4 bg-primary_backgroundLighterColor-200 hover:bg-primary_backgroundLighterColor-400 rounded-2xl border border-primary_lighterShade-300 w-full"
              name="message"
              rows={10}
              placeholder="Your message here"
            />
            <div className="flex flex-col justify-center items-start w-full h-full">
              <button className="px-6 py-4 bg-black hover:bg-primary_darkerShade-900 text-white text-transform: uppercase rounded-full ">
                Submit Your Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
