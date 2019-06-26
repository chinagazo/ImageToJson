import React from 'react';
import image from '../image/pose.jpg';
// var flipHorizontal = false;

// var imageElement = document.getElementById('cat');

// const net = posenet.load({
//     architecture: 'MobileNetV1',
//     outputStride: 16,
//     inputResolution: 513,
//     multiplier: 0.75
//   }).then(function (net) {
//     const pose = net.estimatePoses(imageElement, {
//       flipHorizontal: true
//     });
//     return pose;
//   }).then(function (pose) {
//     console.log(pose);
//   });




class Calculate extends React.Component {
        render(){
            return (
                <div> 
                    <img src={image} alt="test"/>
                </div>
            );
        }

}

export default Calculate;