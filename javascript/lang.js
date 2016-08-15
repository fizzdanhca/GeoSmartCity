/**
 * Created by Dmitry Khramov on 12.08.2016.
 */

////////////////////CHANGING LANGUAGES////////////////////

/**
 * Anonymous function which hides current language option
 * and shows two other possible options.
 */
$(function() {
    // Getting the substring of page URL
    var pageUrl = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);

    // Comparing the pageUrl with the 'href' attribute of language link
    $("#myNavbar ul li a").each(function () {
        if ($(this).attr("href") == pageUrl) {
            $('#FI').addClass("show");
            $(this).addClass("hide");
        }
        else if ($(this).attr("href") != pageUrl) {
            $('#FI').addClass("hide");
        }
    })
});


/**
 * Function called from LRM and sets the language properties
 * for the instructions displayed after building the route.
 * @returns {String} the language options: en; sv; fi(by default)
 */
function setRoutingLanguage(){
    var pageUrl = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
    if (pageUrl === "?lang=en")
        return 'en';
    else if (pageUrl === "?lang=sv")
        return 'sv';
    else if (pageUrl === "")
        return 'fi';
}


/**
 * Three language objects with the properties: "propertyName" : "language equivalent"
 * @type {Object}
 */
var lang = {
    fi: {
        'TITLE': 'Varsinais-Suomen Reittiopas',
        'ERROR': 'Valitettavasti emme voineet laskea tätä reittiä.',
        'walkSpeed': 'Kävelynopeus:',
        'bikeSpeed': 'Pyöräilynopeus:',
        'fast': 'Nopea',
        'medium': 'Keski',
        'slow': 'Hidas',
        'walkDistance': 'Max. kävelymatka(m):',
        'bikeDistance': 'Max. pyöräilymatka(km):',
        'passenger': 'Matkustajamäärä:',
        'carSize': 'Auton koko:',
        'small': 'Pieni',
        'large': 'Iso',
        'fuelType': 'Polttoaine:',
        'petrol': 'Bensiini',
        'diesel': 'Diesel',
        'electric': 'Sähkö',
        'consumption': 'Kulutus (l/100 km)',
        'emission': 'CO2 päästö (g/km)',
        'NOW': 'Nyt',
        'DEPARTURE': 'Lähtö',
        'ARRIVAL': 'Saapuminen'
    },

    en: {
        'TITLE': 'Southwest Finland Routing',
        'ERROR': 'Sorry, we could not calculate this route.',
        'walkSpeed': 'Walking speed:',
        'bikeSpeed': 'Biking speed:',
        'fast': 'Fast',
        'medium': 'Medium',
        'slow': 'Slow',
        'walkDistance': 'Max. walking distance(m):',
        'bikeDistance': 'Max. biking distance (km):',
        'passenger': 'No.of passenger:',
        'carSize': 'Car size:',
        'small': 'Small',
        'large': 'Large',
        'fuelType': 'Fuel type:',
        'petrol': 'Petrol',
        'diesel': 'Diesel',
        'electric': 'Electric',
        'consumption': 'Consumption (l/100 km)',
        'emission': 'CO2 emission (g/km)',
        'NOW': 'Now',
        'DEPARTURE': 'Departure',
        'ARRIVAL': 'Arrival'

    },

    sv: {
        'TITLE': 'Egentliga Finland Routing',
        'ERROR': 'Tyvärr, vi kunde inte räkna ut den vägen.',
        'walkSpeed': 'Gånghastighet:',
        'bikeSpeed': 'Cykling hastighet:',
        'fast': 'Snabb',
        'medium': 'Mediet',
        'slow': 'Långsamt',
        'walkDistance': 'Max. gångavstånd(m):',
        'bikeDistance': 'Max. cykelavstånd (km):',
        'passenger': 'Antalet passagerare:',
        'carSize': 'Storleken på bil:',
        'small': 'Små',
        'large': 'Stor',
        'fuelType': 'Motorbränsle:',
        'petrol': 'Bensin',
        'diesel': 'Diesel',
        'electric': 'El',
        'consumption': 'Förbrukning (l/100 km):',
        'emission': 'CO2 utsläpp (g/km)',
        'NOW': 'Nu',
        'DEPARTURE': 'Avresa',
        'ARRIVAL': 'Ankomst'
    }
};


/**
 * Anonymous function which is used for changing languages for UI
 * depending on the selected "lang" object.
 */
$(function() {
    var lng = '';
    var pageUrl = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
    if (pageUrl === "?lang=en")
        lng = 'en';
    else if (pageUrl === "?lang=sv")
        lng = 'sv';
    else if (pageUrl === "")
        lng = 'fi';

    $('#logoTitle').html(lang[lng]['TITLE']);
    $('#error').find('span').html(lang[lng]['ERROR']);
    $('#walkSpeed').html(lang[lng]['walkSpeed']);
    $('#bikeSpeed').html(lang[lng]['bikeSpeed']);
    $('#walkDistance').html(lang[lng]['walkDistance']);
    $('#bikeDistance').html(lang[lng]['bikeDistance']);
    $('#walkFast, #bikeFast').html(lang[lng]['fast']);
    $('#walkMedium, #bikeMedium, #carMedium').html(lang[lng]['medium']);
    $('#walkSlow, #bikeSlow').html(lang[lng]['slow']);
    $('#passenger').html(lang[lng]['passenger']);
    $('#carSize').html(lang[lng]['carSize']);
    $('#carSmall').html(lang[lng]['small']);
    $('#carLarge').html(lang[lng]['large']);
    $('#fuelType').html(lang[lng]['fuelType']);
    $('#petrol').html(lang[lng]['petrol']);
    $('#diesel').html(lang[lng]['diesel']);
    $('#electric').html(lang[lng]['electric']);
    $('#consumption').html(lang[lng]['consumption']);
    $('#emission').html(lang[lng]['emission']);
    $('label[for="nowID"]').html(lang[lng]['NOW']);
    $('label[for="depID"]').html(lang[lng]['DEPARTURE']);
    $('label[for="arrID"]').html(lang[lng]['ARRIVAL']);

});