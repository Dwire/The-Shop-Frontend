import React from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends React.Component {
  render() {
    console.log("map props:", this.props);
    const style = {
      width: '100%',
      height: '100%'
    }
    return (
      <Map
      google={this.props.google}
      style={style}
      center={{
        lat: 40.854885,
        lng: -88.081807
      }}
      zoom={15}
    >

        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>Window</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyD-R-LpUSv7NomAd2ev-MF49YTl7ZSCNzk"
})(MapContainer)


// google maps api key AIzaSyD-R-LpUSv7NomAd2ev-MF49YTl7ZSCNzk
