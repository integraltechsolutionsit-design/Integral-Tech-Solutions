export default function Footer() {
  return (
    <div className="">
    
   <div className="w-full bg-[#4A4A43] text-white py-16 px-10 mt-auto">


      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        <div>
          <h2 className="text-3xl font-serif mb-2">Integral Tech Solutions</h2>
          <p className="text-sm opacity-80">Empowering Businesses</p>
        </div>

        <div>
          <h3 className="text-xl font-serif mb-3">My office</h3>
          <p>Sector 28/ Plot 299 Pradhikaran<br />Nigdi Pune -411044</p>
        </div>

        <div>
          <h3 className="text-xl font-serif mb-3">Contacts</h3>
          <a href="mailto:email@example.com" className="underline block">
            integraltechsolutions.it@gmail.com
          </a>
          {/* <a href="tel:+33445677654" className="underline block mt-1">
            9850799482
          </a> */}
        </div>

      </div>
    </div>
    </div>
  );
}
