import React from 'react';
import Graph from 'react-graph-vis';


const graph = {
  nodes: [

    {id: 13, label: 'Root',font:'14px arial red',shape:'square',size:10},

      {id: 1, label: 'Node 1',font:'14px arial red',shape:'star',size:10},
      {id: 2, label: 'Node 2'},
      {id: 3, label: 'Node 3'},
      {id: 4, label: 'Node 4'},
      {id: 5, label: 'Node 5'},
      {id: 11, label: 'Football',font:'14px arial red',shape:'star',size:10},
      {id: 12, label: 'Politcs',font:'14px arial red',shape:'star',size:10},
      {id: "agri", label: 'Agriculture',font:'14px arial red',shape:'star',size:10},
      {id: "ele", label: 'Elevage',font:'14px arial red',shape:'star',size:10},
      
      {id: 7, label: 'foot1',shape:'image',image:'/images/football/1.jpg'},
      {id: 8, label: 'foot2',shape:'image',image:'/images/football/2.jpg'},
      {id: 9, label: 'foot1',shape:'image',image:'/images/football/3.jpg'},
      {id: 14, label: 'Keita',font:'14px arial red',shape:'star',size:10},
      {id: 15, label: 'Alpha',font:'14px arial red',shape:'star',size:10},
      {'label': 'aplha oumar', 'shape': 'image', 'image': '/images/alpha/1.jpg', 'id': 16}, {'label': 'aplha oumar', 'shape': 'image', 'image': '/images/alpha/2.jpg', 'id': 17}, {'label': 'aplha oumar', 'shape': 'image', 'image': '/images/alpha/3.jpg', 'id': 18}, {'label': 'aplha oumar', 'shape': 'image', 'image': '/images/alpha/4.jpg', 'id': 19}, {'label': 'aplha oumar', 'shape': 'image', 'image': '/images/alpha/5.jpg', 'id': 20}, {'label': 'aplha oumar', 'shape': 'image', 'image': '/images/alpha/6.jpg', 'id': 21}, {'label': 'aplha oumar', 'shape': 'image', 'image': '/images/alpha/7.jpg', 'id': 22}, {'label': 'aplha oumar', 'shape': 'image', 'image': '/images/alpha/8.jpg', 'id': 23}, {'label': 'aplha oumar', 'shape': 'image', 'image': '/images/alpha/9.jpg', 'id': 24}, {'label': 'aplha oumar', 'shape': 'image', 'image': '/images/alpha/10.jpg', 'id': 25},
      {'label': 'Modibo Keita', 'shape': 'image', 'image': '/images/keita/1.jpg', 'id': 26}, {'label': 'Modibo Keita', 'shape': 'image', 'image': '/images/keita/2.jpg', 'id': 27}, {'label': 'Modibo Keita', 'shape': 'image', 'image': '/images/keita/3.jpg', 'id': 28}, {'label': 'Modibo Keita', 'shape': 'image', 'image': '/images/keita/4.jpg', 'id': 29}, {'label': 'Modibo Keita', 'shape': 'image', 'image': '/images/keita/5.jpg', 'id': 30}, {'label': 'Modibo Keita', 'shape': 'image', 'image': '/images/keita/6.jpg', 'id': 31}, {'label': 'Modibo Keita', 'shape': 'image', 'image': '/images/keita/7.jpg', 'id': 32}, {'label': 'Modibo Keita', 'shape': 'image', 'image': '/images/keita/8.jpg', 'id': 33}, {'label': 'Modibo Keita', 'shape': 'image', 'image': '/images/keita/9.jpg', 'id': 34}, {'label': 'Modibo Keita', 'shape': 'image', 'image': '/images/keita/10.jpg', 'id': 35},
      {'label': 'Agriculture', 'shape': 'image', 'image': '/images/agriculture/1.jpg', 'id': 36}, {'label': 'Agriculture', 'shape': 'image', 'image': '/images/agriculture/2.jpg', 'id': 37}, {'label': 'Agriculture', 'shape': 'image', 'image': '/images/agriculture/3.jpg', 'id': 38}, {'label': 'Agriculture', 'shape': 'image', 'image': '/images/agriculture/4.jpg', 'id': 39}, {'label': 'Agriculture', 'shape': 'image', 'image': '/images/agriculture/5.jpg', 'id': 40}, {'label': 'Agriculture', 'shape': 'image', 'image': '/images/agriculture/6.jpg', 'id': 41}, {'label': 'Agriculture', 'shape': 'image', 'image': '/images/agriculture/7.jpg', 'id': 42}, {'label': 'Agriculture', 'shape': 'image', 'image': '/images/agriculture/8.jpg', 'id': 43}, {'label': 'Agriculture', 'shape': 'image', 'image': '/images/agriculture/9.jpg', 'id': 44}, {'label': 'Agriculture', 'shape': 'image', 'image': '/images/agriculture/10.jpg', 'id': 45},
      {'label': 'Elevage', 'shape': 'image', 'image': '/images/elevage/1.jpg', 'id': 46}, {'label': 'Elevage', 'shape': 'image', 'image': '/images/elevage/2.jpg', 'id': 47}, {'label': 'Elevage', 'shape': 'image', 'image': '/images/elevage/3.jpg', 'id': 48}, {'label': 'Elevage', 'shape': 'image', 'image': '/images/elevage/4.jpg', 'id': 49}, {'label': 'Elevage', 'shape': 'image', 'image': '/images/elevage/5.jpg', 'id': 50}, {'label': 'Elevage', 'shape': 'image', 'image': '/images/elevage/6.jpg', 'id': 51}, {'label': 'Elevage', 'shape': 'image', 'image': '/images/elevage/7.jpg', 'id': 52}, {'label': 'Elevage', 'shape': 'image', 'image': '/images/elevage/8.jpg', 'id': 53}, {'label': 'Elevage', 'shape': 'image', 'image': '/images/elevage/9.jpg', 'id': 54}, {'label': 'Elevage', 'shape': 'image', 'image': '/images/elevage/10.jpg', 'id': 55}


    ],
  edges: [
      {from:13,to:1},
      {from:13,to:11},
      {from:13,to:12},
      {from:13,to:"agri"},
      {from:13,to:"ele"},

      {from: 1, to: 2},
      {from: 1, to: 3},
      {from: 2, to: 4},
      {from: 2, to: 5},
     
      {from: 11, to: 7},
      {from: 11, to: 8},
      {from: 11, to: 9},
      {from: 12, to: 14},
      {from: 12, to: 15},
      {'to': 16, 'from': 15}, {'to': 17, 'from': 15}, {'to': 18, 'from': 15}, {'to': 19, 'from': 15}, {'to': 20, 'from': 15}, {'to': 21, 'from': 15}, {'to': 22, 'from': 15}, {'to': 23, 'from': 15}, {'to': 24, 'from': 15}, {'to': 25, 'from': 15},
      {'to': 26, 'from': 14}, {'to': 27, 'from': 14}, {'to': 28, 'from': 14}, {'to': 29, 'from': 14}, {'to': 30, 'from': 14}, {'to': 31, 'from': 14}, {'to': 32, 'from': 14}, {'to': 33, 'from': 14}, {'to': 34, 'from': 14}, {'to': 35, 'from': 14},
      {'to': 36, 'from': 'agri'}, {'to': 37, 'from': 'agri'}, {'to': 38, 'from': 'agri'}, {'to': 39, 'from': 'agri'}, {'to': 40, 'from': 'agri'}, {'to': 41, 'from': 'agri'}, {'to': 42, 'from': 'agri'}, {'to': 43, 'from': 'agri'}, {'to': 44, 'from': 'agri'}, {'to': 45, 'from': 'agri'},
      {'to': 46, 'from': 'ele'}, {'to': 47, 'from': 'ele'}, {'to': 48, 'from': 'ele'}, {'to': 49, 'from': 'ele'}, {'to': 50, 'from': 'ele'}, {'to': 51, 'from': 'ele'}, {'to': 52, 'from': 'ele'}, {'to': 53, 'from': 'ele'}, {'to': 54, 'from': 'ele'}, {'to': 55, 'from': 'ele'}
      
    ]
};

const options = {
    autoResize: true,
  height: '100%',
  width: '100%',
    layout: {
        hierarchical: false
        
    },
    edges: {
        color: "#000000"
    },
    nodes:{
        size:35,
        shape:'image',
        image:'/images/node1.jpg',
        chosen:true

    }
};

const events = {
    select: function(event) {
        var { nodes, edges } = event;

        console.log(event);
    }
}

class Network extends React.Component{

render(){


    return <Graph graph={graph} options={options} events={events} />
}

}

export default Network;