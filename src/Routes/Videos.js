import React, { useState } from 'react';
import '../CSS/videos.css'
import Nav from '../Components/Nav'
import Video from '../Components/Video';

function Videos() {
  return (
      <div>
        <Nav title="Videos" name="Charles R." id="1234" content={
        <div className='WrapperVideos'>
            <div class="WrapperList">
                <Video title="Emilio. 3450600" date="11 de Abril, 2022"/>
                <Video title="Emilio. 3450600" date="11 de Abril, 2022"/>
                <Video title="Emilio. 3450600" date="11 de Abril, 2022"/>
                <Video title="Emilio. 3450600" date="11 de Abril, 2022"/>
                <Video title="Emilio. 3450600" date="11 de Abril, 2022"/>
                <Video title="Emilio. 3450600" date="11 de Abril, 2022"/>
                <Video title="Emilio. 3450600" date="11 de Abril, 2022"/>
                <Video title="Emilio. 3450600" date="11 de Abril, 2022"/>
                <Video title="Emilio. 3450600" date="11 de Abril, 2022"/>
            </div>
        </div>}/>
        
      </div>
  );
}
export default Videos;