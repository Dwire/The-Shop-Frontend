import React from 'react'
import { connect } from 'react-redux'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

import * as actions from '../actions';

export class MapContainer extends React.Component {
  state = {
   showingInfoWindow: false,
   activeMarker: {},
   selectedPlace: {},
  };

  localUserMarker = () => {
      return this.props.localUsers.map(user => {
        return <Marker
              onClick={this.onMarkerClick}
              key={user.id}
              title={'Your Next Best Friend'}
              // label={user.name}
              name={user.name}
              position={{lat: user.latitude, lng: user.longitude}}
            />
          })
  }


  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    })
  };

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  // createCircle = () => {
  //     return  this.props.google.maps.Circle({
  //                 strokeColor: '#FF0000',
  //                 strokeOpacity: 0.8,
  //                 strokeWeight: 2,
  //                 fillColor: '#FF0000',
  //                 fillOpacity: 0.35,
  //                 // map: map,
  //                 center: {lat: -74.0344977, lng: 40.740813},
  //                 radius: Math.sqrt(100000) * 100
  //               });
  // }

  // findDistance = () => {
  //   return this.props.DistanceMatrixService(origins, destination, travelMode, (res, status) => {
  //     console.log(distance)
  //     if (status === "OK") {
  //
  //     }else{
  //       console.log(err, 'status:', status)
  //     }
  //   })
  // }
  //
  render() {
    const longitude = this.props.currentUser.longitude
    const latitude = this.props.currentUser.latitude

    const style = {
      // margin: '60px',
      width: '94%',
      height: '60%'
    }


    console.log("map", this.props.google)
    return (
      <Map
        onClick={this.onMapClicked}
        google={this.props.google}
        style={style}
        className="map"
        initialCenter={{
          lat: latitude,
          lng: longitude
        }}
        zoom={16}
      >

        <Marker onClick={this.onMarkerClick}
                title={'This is Your Current Location'}
                label={'YOU'}
                name={this.props.currentUser.name}
              />

        {this.localUserMarker()}
        {/* {this.createCircle()} */}
        {/* {this.findDistance({lat: -74.0344977, lng: 40.740813}, {lat: -75.0344977, lng: 40.740813})} */}


        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
              <h3>{this.state.selectedPlace.title}</h3>
            </div>
        </InfoWindow>


      </Map>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.auth.currentUser,
    localUsers: state.auth.localUsers
  }
}


export default  connect(mapStateToProps, actions)(GoogleApiWrapper({apiKey: "AIzaSyD-R-LpUSv7NomAd2ev-MF49YTl7ZSCNzk"})(MapContainer))




// google maps api key AIzaSyD-R-LpUSv7NomAd2ev-MF49YTl7ZSCNzk
