'use strict';

import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import {
  ViroARScene,
  ViroText,
  ViroMaterials,
  ViroBox,
  ViroARPlane,
  Viro3DObject,
  ViroAmbientLight,
  ViroSpotLight,
  ViroARPlaneSelector,
  ViroSurface,
  ViroDirectionalLight,
} from 'react-viro';
var createReactClass = require('create-react-class');
var HelloWorldSceneAR = createReactClass({

  getInitialState() {
    return {
      text : "Initializing AR..."
    };
  },

  render: function() {
    ViroMaterials.createMaterials({
      bottle: {
        diffuseTexture: require('./res/obj/Poltrona+Fava/_auto_14.jpg'),
        lightingModel: "Lambert",
      },
    });
      
    return (
      <ViroARScene 
        physicsWorld={{
          gravity: [0, -9,81],drawBounds:true
        }}
        onTrackingInitialized={()=>{this.setState({text : "CADEIRA X!"})}}>
          <ViroARPlaneSelector>
          <ViroSpotLight position={[0, -0.25, 0]}
                 color="#777777"
                 direction={[0, 0, -1]}
                 attenuationStartDistance={5}
                 attenuationEndDistance={10}
                 innerAngle={5}
                 outerAngle={20}
                 castsShadow={true} />
                      <ViroAmbientLight color="#ffffff" />
                      <Viro3DObject 
                        dragType={'FixedToPlane'}
                        source={require('./res/obj/PoltronaFava.obj')}
                        resources={[require('./res/obj/PoltronaFava.mtl'), require('./res/obj/Poltrona+Fava/_auto_14.jpg')]}
                        scale={[.009, .009, .009]}
                        position={[0, 0, 0]}
                        materials="bottle"
                        rotation={[45, 0, 0]}
                        transformBehaviors={["billboard"]}
                        type="OBJ" 
                        />
                      <ViroDirectionalLight color="#cdcdcd"
                                                    direction={[0, -1, 0]}
                                                    shadowOrthographicPosition={[-1, 0, -10]}
                                                    shadowOrthographicSize={100}
                                                    shadowNearZ={5}
                                                    shadowFarZ={90}
                                                    castsShadow={true} />
          </ViroARPlaneSelector>
      </ViroARScene> 
    );
  },
});

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 50,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

module.exports = HelloWorldSceneAR;