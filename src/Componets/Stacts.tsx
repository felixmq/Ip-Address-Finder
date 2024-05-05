
type IPAddressProp = {
    ipAddress: string;
    location: string;
    timezone: string;
    isp: string;
}

const Stacts = ({
    ipAddress,
    location,
    timezone,
    isp
} : IPAddressProp) => {
  return (
    <div className="w-4/5 rounded-lg absolute top-52 md:top-56 left-10
    md:left-40 bg-white z-10 flex flex-col sm:flex-row container gap-4 md:gap-10 p-4">
      <div className="md:border-r-2 w-full 
      border-slate-300 flex flex-col gap-2 items-center">
        <p className="text-sm text-slate-400">IP Address</p>
        <p className="md:text-2xl text-black font-bold">{ipAddress}</p>
      </div>
      <div className="md:border-r-2 w-full 
      border-slate-300 flex flex-col gap-2 items-center">
        <p className="text-sm text-slate-400">Location</p>
        <p className="md:text-2xl text-black font-bold">{location}</p>
      </div>
      <div className="md:border-r-2 w-full 
      border-slate-300 flex flex-col gap-2 items-center">
        <p className="text-sm text-slate-400">TimeZone</p>
        <p className="md:text-2xl text-black font-bold">{timezone}</p>
      </div>
      <div className="w-full flex flex-col gap-2 items-center">
      <p className="text-sm text-slate-400">ISP</p>
      <p className="md:text-2xl text-black font-bold">{isp}</p>
      </div>
      
    </div>
  )
}

export default Stacts
