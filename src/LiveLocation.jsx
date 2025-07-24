import React,{useRef, useEffect} from  'react'

const LiveLocation = () => {
  const mapRef = useRef(null);
  useEffect(() => {
    if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const userLocation = new window.google.maps.LatLng(latitude, longitude);
        const map = new window.google.maps.Map(mapRef.current, {
          center: userLocation,
          zoom:15,
        });
        new window.google.maps.Marker({
          position: userLocation,
          map: map,
          title: "Your location"
        })
  },(error)=>{
    alert("Error getting your location:"+ error.message);
  }
    );
}else {
  alert("Geolocation is not supported by this browser.");
}
}, []);
  
 
  return (
    <div>
      <h2>Your Live Location</h2>
      <div id='map' ref={mapRef} style={{ height:"400px", width:"100%"}}></div>
    </div>
  )
}

export default LiveLocation
