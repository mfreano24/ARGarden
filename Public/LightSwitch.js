// -----JS CODE-----

//@input Component.LightSource mp
//@input Component.LightSource lt
//@input Component.LightSource biolum

//initialization
script.lt.enabled = true;
script.mp.enabled = true;
script.biolum.enabled = false;


script.api.onLightsOff = function(){
    print("Lights are OFF.");
    script.lt.enabled = false;
    script.mp.enabled = false;
    script.biolum.enabled = true;
}


script.api.onLightsOn = function(){
    print("Lights are ON.");
    script.lt.enabled = true;
    script.mp.enabled = true;
    script.biolum.enabled = false;
}