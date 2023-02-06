const getlocation = document.getElementById("getlocation");
getlocation.addEventListener('click',evt =>{
    if('geolocation' in navigator){
        let WatchID = navigator.geolocation.getCurrentPosition(position =>{
            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude;

            letgoogleMapURL = `https://api.mapbox.com/geocoding/v5/{endpoint}/{search_text}.json center=${latitude},${longitude}&zoom=11&size=400x400`;
            const mapImage = document.getElementById("mapImage");
            mapImage.src = googleMapURL;

            

            console.log(latitude,longitude);


        },error=>{

            enableHighAccuracy:true

        });

        console.log(WatchID)

    }else{
        console.log("Not support");
    }

});