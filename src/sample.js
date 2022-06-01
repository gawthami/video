import React, { Component } from 'react'
//import video from './video/'

const ObjectTest = {
    1: {
        id : 1,
        name:'http://localhost:3000/static/media/VID-20150514-WA0007.4e55e766a82675749e33.mp4'
    },
    3: {
        id: 3,
        name:'http://localhost:3000/static/media/VID-20150514-WA0007.4e55e766a82675749e33.mp4'
    }
}

class Sample extends React.Component{

	_renderObject(){
		return Object.entries(ObjectTest).map(([key, value], i) => {
           // const path={video}+value.name;
			return (
                
                
				<div key={key}>
                    <video width="750" height="500" controls >
                    <source src={value.name} type="video/mp4"/>
                    </video>
					id is: {value.id} ;
					name is: {value.name}
				</div>
			)
		})
	}

	render(){
		return(
			<div>
				{this._renderObject()}
			</div>
		)
	}
}

export default Sample;