$.getJSON("http://twitcher.steer.me/user_timeline/rmlewisuk", function (data) {
    console.log("Getting tweets...");
	var i = 0, tweet, time;
	while (data[i].text.indexOf("@") === 0) {
		i++;
	}
		tweet = urlReplace(data[i].text);
		tweet = mentionReplace(tweet);
		time = relative_time(data[i].created_at);
		$('#latest-tweet').append("<a href='https://twitter.com/rmlewisuk/status/" + data[i].id_str + "'>" + time + "</a>");
		$('#tweet').append(tweet);
});

function urlReplace(tweet) {
	var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
		return tweet.replace(exp,"<a href='$1'>$1</a>");
}

function mentionReplace(thing) {
	var exp = /@\w+/;
	return thing.replace(exp, "<a href='http://twitter.com/$&'>$&</a>");
}

function relative_time(time_value) {
    var parsed_date = Date.parse(time_value);
	
    var relative_to = (arguments.length > 1) ? arguments[1] : new Date();
    var delta = parseInt((relative_to.getTime() - parsed_date) / 1000);
	
    if(delta < 60) {
        return 'less than a minute ago';
    } else if(delta < 120) {
        return 'about a minute ago';
    } else if(delta < (45*60)) {
        return (parseInt(delta / 60)).toString() + ' minutes ago';
    } else if(delta < (90*60)) {
            return 'about an hour ago';
        } else if(delta < (24*60*60)) {
        return 'about ' + (parseInt(delta / 3600)).toString() + ' hours ago';
    } else if(delta < (48*60*60)) {
        return '1 day ago';
    } else {
        return (parseInt(delta / 86400)).toString() + ' days ago';
    }
}

$.ajax({
    url: "https://api.github.com/users/rmlewisuk/repos?sort=pushed",
    success: function(data){
        $('#latest-push').append("<a href='http://github.com/rmlewisuk/" + data[0].name+ "'>" + data[0].name + "</a>");
        $('#repo-description').append(data[0].description);
    }
});