      google.charts.load('current', {
        'packages': ['geochart'],
      });
      google.charts.setOnLoadCallback(drawRegionsMap);



      function drawRegionsMap() {

        var f = location.hash.substr(1) || 'ng-fc';

        var arr = [
          ['State', 'Region'],

          // north central
          ['Kogi', null],
          ['Kwara', null],
          ['Benue', null],
          // ['Nasarawa', null], // does not work, but NG-NA does
          ['NG-NA', null], // this works
          ['Niger', null],
          ['Plateau', null],


          // north east
          ['Yobe', null],
          ['Gombe', null],
          ['Bauchi', null],
          ['Borno', null],
          ['Taraba', null],
          ['Adamawa', null],


          // north west
          ['Jigawa', null],
          ['Kebbi', null],
          ['Katsina', null],
          ['Kano', null],
          ['Kaduna', null],
          ['Sokoto', null],
          ['Zamfara', null],

          // south east
          ['Abia', null],
          ['Anambra', null],
          ['Ebonyi', null],
          ['Enugu', null],
          ['Imo', null],

          // south west
          ['Ekiti', null],
          ['Lagos', null],
          ['Ondo', null],
          ['Oyo', null],
          ['Osun', null],
          ['Ogun', null],

          // south south
          ['Akwa Ibom', null],
          ['Bayelsa', null],
          ['Cross River', null],
          ['Delta', null],
          ['Edo', null],
          ['Rivers', null],

          // territory
          // Abuja Federal Capital Territory
          //['Abuja', null] // does not work
          ['NG-FC', null] // this works
        ];


        arr.forEach(function(a,i){
          console.log(a[0].replace(/\s/, ''))
          if(!!a[0].replace(/\s/, '').match(new RegExp(f, 'ig'))) {
            arr[i][1] = 1;
          }
        });

        var data = google.visualization.arrayToDataTable(arr);

        // reference:
        // https://en.wikipedia.org/wiki/ISO_3166-2:NG

        var options = {

          tooltip:
          {
            trigger: 'none'
          },

          // when data value is 'null'
          defaultColor: '#caedd3',


          legend: 'none',

          // country code works
          region: 'NG',

          // state-level
          resolution: 'provinces'
        };

        var imgmap = document.getElementById('ngimg');
        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

        google.visualization.events.addListener(chart, 'ready', function () {
          imgmap.src = chart.getImageURI();
        //console.log(chart.getImageURI());
        });


        chart.draw(data, options);

      }


        window.onhashchange = function() {
          window.location.load();
        }
