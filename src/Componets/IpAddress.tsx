import { useEffect, useState } from "react"
import SearchBar from "./SearchBar"
import Stacts from "./Stacts"
import Map from "./Map";


interface coordinates {
    lat: number;
    lng:number;
} 

const IpAddress = () => {

    const [IPAddress, setIPAddress] = useState<string>("");
    const [location, setLocation] = useState<string>("");
    const [timezone, setTimezone] = useState<string>("");
    const [ISP, setISP] = useState<string>("");
    const [coordinates, setCoordinates] = useState<coordinates | undefined>();

    const fetchLocation = (IpAddress = "") => {
        fetch(
            `https://geo.ipify.org/api/v2/country,city?apiKey=at_Q4loerHm5AzOTEmN0UNfO8zHgfidm&ipAddress=${IpAddress}`
        ).then((resp)=> resp.json())
        .then((data)=> {
            setIPAddress(data.ip);
            setLocation(`${data.location.city}, ${data.location.country}
            ${data.location.postalCode}`);
            setTimezone(`UTC ${data.location.timezone}`);
            setISP(`${data.isp}`);
            setCoordinates({lat: data.location.lat, lng: data.location.lng});
        });
    };

    useEffect(()=> {
        fetchLocation();
    }, [])

  return (
    <div className="flex flex-col h-screen relative">
        <SearchBar fetchLocation={fetchLocation}/>
        <Stacts
            ipAddress={IPAddress}
            location={location}
            timezone={timezone}
            isp={ISP}/>
        <Map coordinates={coordinates}/>
    </div>
  )
}

export default IpAddress
