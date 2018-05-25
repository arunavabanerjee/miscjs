========================
<script type="text/javascript">
$(document).ready(function(){
  var map = new BMap.Map("dituContent1");
  <?php foreach($addresspr as $key => $value){ ?>
  var locaddress="<?php echo $addresspr[$key]; ?>";
  createMapMarker(locaddress, map);
  <?php } ?>
});

function createMapMarker(address, map){
  var geocoder = new BMap.Geocoder();
  geocoder.getPoint(address, function(res){ console.log(res); //console.log(res.lat);
    alert(address);
    var lng=res.lng; var lat=res.lat; //alert(res.lng +','+ res.lat);
    var point = new BMap.Point(lng,lat);
    var sContent = "<h4 style='margin:0 0 5px 0;padding:0.2em 0'></h4>" +
		"<p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>"+address+"</p></div>";
    var icon = new BMap.Icon('http://www.swisschamofcommerce.com/wp-content/uploads/2017/02/map-marker.png', new BMap.Size(30, 42), {
		anchor: new BMap.Size(10, 30),
		infoWindowAnchor: new BMap.Size(10, 0)
    });
    var marker = new BMap.Marker(point, { icon: icon, title: address }); 
    alert(sContent);									

    //var marker = new BMap.Marker(point);
    var infoWindow = new BMap.InfoWindow(sContent);
    map.addControl(new BMap.NavigationControl());
    map.centerAndZoom(point, 15);
    map.enableScrollWheelZoom(); 
    map.addOverlay(marker);
    
    marker.addEventListener("click", function(){
	this.openInfoWindow(infoWindow);
	document.getElementById('imgDemo').onload = function (){ infoWindow.redraw(); }
    });
  });
}
</script>
   
