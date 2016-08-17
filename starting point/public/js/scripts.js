$(document).ready(function(){
	var $hotelMenu = $('#hotel-choices');
	var $restaurantMenu = $('#restaurant-choices');
	var $activityMenu = $('#activity-choices');

	hotels.forEach(function(hotel){
		$hotelMenu.append('<option value="'+hotel.name+'">' + hotel.name + '</option>');
	})

	restaurants.forEach(function(restaurant){
		$restaurantMenu.append('<option value="'+restaurant.name+'">' + restaurant.name + '</option>');
	})

	activities.forEach(function(activity){
		$activityMenu.append('<option value="'+activity.name+'">' + activity.name + '</option>');
	})
	$('#hotelSelector button').on('click', function(){
		$('#hotelList').append( '<div class="itinerary-item"> <span class="title">'+$hotelMenu.val()+'</span><button class="btn btn-xs btn-danger remove btn-circle">x</button>')
	})
	$('#restaurantSelector button').on('click', function(){
		$('#restaurantList').append('<div class="itinerary-item"> <span class="title">'+$restaurantMenu.val()+'</span><button class="btn btn-xs btn-danger remove btn-circle">x</button>')
	})
	$('#activitySelector button').on('click', function(){
		$('#activityList').append('<div class="itinerary-item"> <span class="title">'+$activityMenu.val()+'</span><button class="btn btn-xs btn-danger remove btn-circle">x</button>')
	})

})