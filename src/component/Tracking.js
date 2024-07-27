import React from "react";
import GoogleMapReact from 'google-maps-react-markers';
import Header from "./Header";


export default function Tracking(){

// Using googlemap react library component for this: not really used for production


function createMapOptions(maps) {

    return {
        zoomControlOptions: {
        position: maps.ControlPosition.RIGHT_CENTER,
        style: maps.ZoomControlStyle.SMALL
        },
        mapTypeControlOptions: {
        position: maps.ControlPosition.TOP_RIGHT
        },
        mapTypeControl: true
    };
    }
  const defaultProps = {
    // Singapore cords
    center: {
      lat: 1.3521,
      lng: 103.8198
    },
    zoom: 11
  };

  const LifeCentreMarker = ({ lat, lng }) => (
    <div style={{ position: 'relative', width: '32px', height: '32px', transform: 'translate(-50%, -100%)' }}>
      <img src='https://cdn-icons-png.freepik.com/512/1/1808.png' alt="Life Centre" style={{ width: '100%', height: '100%' }} />
    </div>
  );


  
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <Header></Header>
      <div className="h-24">
        

        <img className='h-full' src='https://media.discordapp.net/attachments/744120656278454274/1266587994459082775/WhatsApp_Image_2024-07-27_at_10.47.55_2c80f258.jpg?ex=66a5b17d&is=66a45ffd&hm=042aad99c9e4f65a84e7a556c09aac0abf68b4647cbc262aa8863f7793497b2a&=&format=webp&width=822&height=290'>
        </img>
        




      </div>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
        
        options={createMapOptions}>

        // Marker areas
            
        // Singapore
        <LifeCentreMarker lat={1.4655} lng={103.7578}></LifeCentreMarker>
        // Munich
        <LifeCentreMarker lat={48.137154} lng={11.576124}></LifeCentreMarker>
        // Bhopal
        <LifeCentreMarker lat={23.259933} lng={77.412613}></LifeCentreMarker>
        // Mexico
        <LifeCentreMarker lat={19.432608} lng={-99.133209}></LifeCentreMarker>
        // Yorkshire
        <LifeCentreMarker lat={54.0000} lng={-1.5000}></LifeCentreMarker>
        // Greenland
        <LifeCentreMarker lat={71.706936} lng={-42.604303000000016}></LifeCentreMarker>
        // Leningrad
        <LifeCentreMarker lat={59.9386} lng={30.3141}></LifeCentreMarker>
        // Moscow
        <LifeCentreMarker lat={55.751244} lng={37.618423}></LifeCentreMarker>
        // California
        <LifeCentreMarker lat={36.778259} lng={-119.417931}></LifeCentreMarker>
        // Ohio
        <LifeCentreMarker lat={40.367474} lng={-82.996216}></LifeCentreMarker>
        // Antarctica
        <LifeCentreMarker lat={90} lng={0}></LifeCentreMarker>
        // Shenzhen
        <LifeCentreMarker lat={22.542883} lng={114.062996}></LifeCentreMarker>
        // Riyadh
        <LifeCentreMarker lat={24.774265} lng={46.738586}></LifeCentreMarker>
        // Bangui
        <LifeCentreMarker lat={4.3612} lng={18.5550}></LifeCentreMarker>
        //Reykjavik
        <LifeCentreMarker lat={64.128288} lng={-21.827774}></LifeCentreMarker>
        // Lima
        <LifeCentreMarker lat={-12.046374} lng={-77.042793}></LifeCentreMarker>
        // Adelaide
        <LifeCentreMarker lat={-34.9287} lng={138.5986}></LifeCentreMarker>
        // Chennai
        <LifeCentreMarker lat={13.067439} lng={80.237617}></LifeCentreMarker>
        



      </GoogleMapReact>
    </div>
  );
}