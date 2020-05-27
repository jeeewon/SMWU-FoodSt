import React from 'react';
import MyMap from './Components/NaverMaps';
import Form from './Naver_test/Form';
import {  NaverMap, Marker } from 'react-naver-maps';
import './App.css';


/*
function NaverMapAPI() {
  const navermaps = window.naver.maps;
  return (
    <NaverMap
      mapDivId={'maps-getting-started-uncontrolled'}
      style={{
        width: '900px', // 네이버지도 가로 길이
        height: '85vh' // 네이버지도 세로 길이
      }}
      defaultCenter={{  lat: 37.5450416, lng: 126.9647459 }}
      defaultZoom={15}
      >
      <Marker
        key={1}
        position={new navermaps.LatLng(37.5450416, 126.9647459 )}
        animation={2}
        mouseover={() => {alert('여기는 숙명여대입니다.');}}
      />
      <Marker       
        key={2}
        position={new navermaps.LatLng(37.551229, 126.988205)}
        animation={1}
        onClick={() => {alert('여기는 N서울타워입니다.');}}
      />
    </NaverMap>
  );
}*/

function App() {
  return (
    <Form mapPop={(
      <MyMap />
    )}
    >
    </Form>
  );

}

export default App;



