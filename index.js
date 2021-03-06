let sData =  [
          ['Shareholders', 'Board'],
          ['Board', 'CEO'],
          ['CEO', 'CTO'],
          ['CEO', 'CPO'],
          ['CEO', 'CSO'],
          ['CEO', 'CMO'],
          ['CEO', 'HR'],
          ['CTO', 'Product'],
          ['CTO', 'Web'],
          ['CSO', 'Sales'],
          ['CMO', 'Market']
      ];


let tData = [{
          id: 'Shareholders'
      }, {
          id: 'Board'
      }, {
          id: 'CEO',
          title: 'CEO',
          name: 'Grethe Hjetland',
          image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/12132317/Grethe.jpg'
      }, {
          id: 'HR',
          title: 'HR/CFO',
          name: 'Anne Jorunn Fjærestad',
          color: '#007ad0',
          image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/12132314/AnneJorunn.jpg',
          column: 3,
          offset: '75%'
      }, {
          id: 'CTO',
          title: 'CTO',
          name: 'Christer Vasseng',
          column: 4,
          image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/12140620/Christer.jpg',
          layout: 'hanging'
      }, {
          id: 'CPO',
          title: 'CPO',
          name: 'Torstein Hønsi',
          column: 4,
          image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/12131849/Torstein1.jpg'
      }, {
          id: 'CSO',
          title: 'CSO',
          name: 'Anita Nesse',
          column: 4,
          image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/12132313/Anita.jpg',
          layout: 'hanging'
      }, {
          id: 'CMO',
          title: 'CMO',
          name: 'Vidar Brekke',
          column: 4,
          image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg',
          layout: 'hanging'
      }, {
          id: 'Product',
          name: 'Product developers'
      }, {
          id: 'Web',
          name: 'Web devs, sys admin'
      }, {
          id: 'Sales',
          name: 'Sales team'
      }, {
          id: 'Market',
          name: 'Marketing team'
      }];




Highcharts.chart('container', {
  chart: {
      height: 600,
      inverted: true
  },

  title: {
      text: 'Highcharts Org Chart'
  },

  accessibility: {
      point: {
          descriptionFormatter: function (point) {
              var nodeName = point.toNode.name,
                  nodeId = point.toNode.id,
                  nodeDesc = nodeName === nodeId ? nodeName : nodeName + ', ' + nodeId,
                  parentDesc = point.fromNode.id;
              return point.index + '. ' + nodeDesc + ', reports to ' + parentDesc + '.';
          }
      }
  },

  series: [{
      type: 'organization',
      name: 'Highsoft',
      keys: ['from', 'to'],
      data: sData,
      levels: [{
          level: 0,
          color: 'silver',
          dataLabels: {
              color: 'black'
          },
          height: 25
      }, {
          level: 1,
          color: 'silver',
          dataLabels: {
              color: 'black'
          },
          height: 25
      }, {
          level: 2,
          color: '#980104'
      }, {
          level: 4,
          color: '#359154'
      }],
      nodes: tData,
      colorByPoint: false,
      color: '#007ad0',
      dataLabels: [{
        enabled: true,
        format: '<div style="width: 20px; height: 20px; overflow: hidden; border-radius: 50%; margin-left: -25px">' +
            '<img src="https://www.highcharts.com/images/employees2014/{point.assignee}.jpg" ' +
            'style="width: 30px; margin-left: -5px; margin-top: -2px"></div>',
        useHTML: true,
        align: 'left'
    }, {
        enabled: true,
        format: '<i class="fa fa-{point.fontSymbol}" style="font-size: 1.5em"></i>',
        useHTML: true,
        align: 'right'
    }]
}],
      borderColor: 'white',
      nodeWidth: 65
  }],
  tooltip: {
      outside: true
  },
  exporting: {
      allowHTML: true,
      sourceWidth: 800,
      sourceHeight: 600
  }

});