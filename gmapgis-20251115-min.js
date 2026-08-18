var mp = '',
rootUrl = '';
lineGroup = [],
lineSty = [],
lineName = [],
lineHTML = [],
tL = '',
lineStyles = [
  10
],
circleGroup = [],
circleSty = [],
circleName = [],
circleHTML = [],
tL = '',
circleStyles = [
  10
];
var copySty = defPolySty = '#FF0000,5,1,#ff8800,0.4',
mOverSty = '',
defArrowSty = '#000000,4,1,#000000,0.4,d6',
defDotSty = '#FF0000,5,1,#FF0000,1',
uniqPoly = [],
uniqMarker = [];
uniqPoly[uniqPoly.length] = defPolySty,
defRectanSty = '#000000,2,1,#ff8800,0.1';
var defLineSty = '#FF0000,5,1,#ff8800,0.4,d0',
dfltMarker = 'https://gmapgis.com/icons/redBallon.png^32^FF0000^000000^1';
markergroup = [],
points = [],
markerSty = [],
markerName = [],
markerHTML = [],
markerIcon = [];
var win1,
thisMarker = '',
numMarkers = 0,
distanceLine = 0,
shoCor = !1,
drawCircle = !1,
drawLine = !1,
drawScrib = !1,
drawRectangle = !1,
drawPolygon = !1,
measureLength = !1,
dsline = '',
circle = '',
x1 = '',
editShape = '',
thisRecord = '',
fR = '',
AddressMarker = '',
clickLis = '',
delimiter = '\t',
userEma = '',
tIt = '',
toolbar = '',
listenerMarker = tL = '',
bck = '',
IE = !1,
icon = '',
lisBlowup = '',
lisAddress = '',
windowhtml = '',
htmlFormat = '',
labelID = 'new',
mapTrail = [],
startzoom = 5,
mapType = 'Relief';
dflsty = 'double^medium^#000000^#FFCC00^14px^#000000',
tempLabSpec = '',
labID = [],
labPos = [],
labTxt = [],
labStyle = [];
var copyLabSty = 'double^medium^#000000^#FFCC00^large^#000000';
polyStyles = [],
polyStyles[0] = '#000000,1,0.5,#ff8800,0.4',
polyStyles[1] = '#000000,1,0.9,#008000,0.2',
polyStyles[2] = '#000000,1,0.5,#800080,0.2',
polyStyles[3] = '#000000,1,0.5,#FF00FF,0.2',
polyStyles[4] = '#000000,1,0.5,#00FFCC,0.2',
polyStyles[5] = '#000000,1,0.5,#800080,0.2';
var startpoint = '',
currentZoom = '',
clickLatlng = '',
mouseLatlng = '',
tempMarkerG = '',
tempinfo = '',
labelPoint = '',
thisFeature = '',
editFeature = '',
ftLayerOne = !1,
markSpecs = [],
autofile = '',
unsaved = !0,
file2save = '',
mapTitle = '',
geoObj = '',
jsonObj = '',
json = '',
treeJsonFile = 'default.json',
mobile = !1,
viewer = !1,
gisViewer = !1,
geoJsonFile = {
  type: 'FeatureCollection',
  source: 'gmapgis.com',
  mapTitle: ' Map Title',
  version: '4.0',
  user: {
    userID: 'xyj',
    created: 'cdate',
    updated: 'udate',
    acessed: 'adate',
    total: 'tViews',
    paid: 'pViews',
    remaining: 'rViews'
  },
  mapOptions: [],
  overlays: [],
  pointFeatures: [],
  lineFeatures: [],
  rectanFeatures: [],
  polyFeatures: [],
  circleFeatures: [],
  labelFeatures: [],
  legends: []
},
legendJson = {
  file: 'name',
  content: []
},
fileStats = {
  userName: 'name',
  userID: 0,
  signUpDate: 'not registered',
  userPaidToDate: null,
  numSignIns: 0,
  numFiles: 0,
  numMapViews: 0,
  fileName: 'name',
  fileCreaDate: null,
  filePaidToDate: null,
  views: 0,
  size: 0,
  features: 0,
  lines: 0
},
paidUser = !1,
noInfoWindow = !0,
showInfo = !0,
myInfoWindow = '',
copyInfoHTML = '',
defaultInfoHTML = '',
stichCircle = '',
curLocMarker = '',
gmpOvalay = [],
dropFN = '',
fileCode = '',
noAds = !0,
gmpShapes = [],
winHTMLshapes = [],
iFramed = !1,
adsense = '',
mDis = !1,
winX = 0,
labelsHidden = !1,
editable = !0,
drawings = !1,
delCircle = '',
drawArrow = !1,
userCountry = '',
countryCode = '55',
homeLess = !0,
editLink = !1,
precision = 5,
selelctedNodes = [];
function getmrkspec() {
  markSpecs[0] = '32^16^FF0000^000000^1',
  markSpecs[1] = '32^16^800000^000000^1',
  markSpecs[2] = '32^16^FF6600^000000^1',
  markSpecs[3] = '32^16^FFCC00^000000^1',
  markSpecs[4] = '32^16^FFFF00^000000^1',
  markSpecs[5] = '32^16^00FF00^000000^1',
  markSpecs[6] = '32^16^339966^000000^1',
  markSpecs[7] = '32^16^00CCFF^000000^1',
  markSpecs[8] = '32^16^0000FF^000000^1',
  markSpecs[9] = '32^16^000080^000000^1',
  markSpecs[10] = '32^16^FF6600^000000^1'
}
getmrkspec();
var tlbar = '',
sitedata = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  []
],
numRecords = 0,
numcolumns = 0,
xyFile = '',
isNumber = 0,
markerData = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  []
],
dfltMarker = 'https://maps.google.com/mapfiles/kml/pushpin/red-pushpin.png',
copyMarker = 'https://maps.google.com/mapfiles/kml/pushpin/red-pushpin.png';
(IE = !!document.all) ||
document.captureEvents(Event.MOUSEMOVE),
document.onmousemove = getMouseXY,
mousedown = topOffset = leftOffset = mouseY = mouseX = 0,
dragID = '',
dragEnabled = 1;
var adrWind,
adrMarker,
currentLoc = '',
miles = !0,
areaUnits = 'acr',
userID = 0,
userName = '',
apiKey = '',
poiShown = !1;
function $$(e) {
  return document.getElementById(e)
}
function getIEver() {
  var e = - 1;
  return 'Microsoft Internet Explorer' == navigator.appName &&
  (
    /MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent),
    e = parseFloat(RegExp.$1)
  ),
  e
}
function ckvn() {
  - 1 < getIEver() ? IE = !0 : FF = !0
}
function $(e) {
  return Ext.getCmp(e)
}
function showHint(e, t) {
  $$('hint-div').innerHTML = '<p style="text-align: center;font-size:120%;"><strong><span style="color: #ff0000;">' + e + '</span></strong></p>',
  $$('hint-div').style.visibility = 'visible',
  setTimeout(function () {
    $$('hint-div').style.visibility = 'hidden'
  }, t)
}
function getMouseXY(e) {
  if (
    mouseY = IE ? (
      mouseX = event.clientX + document.body.scrollLeft,
      event.clientY + document.body.scrollTop
    ) : (mouseX = e.pageX, e.pageY),
    mouseX < 0 &&
    (mouseX = 0),
    mouseY < 0 &&
    (mouseY = 0),
    1 == mousedown &&
    (
      dragID.style.left = mouseX + leftOffset + 'px',
      0 != topOffset &&
      (dragID.style.top = mouseY + topOffset + 'px'),
      'lab' == dragID.id.slice(0, 3)
    )
  ) for (i = 0; i < geoJsonFile.labelFeatures.length; i++) dragID.id == geoJsonFile.labelFeatures[i].apiObj &&
  (
    geoJsonFile.labelFeatures[i].geometry.coordinates = overlay.getProjection().fromContainerPixelToLatLng(new google.maps.Point(mouseX + leftOffset, mouseY + topOffset))
  );
  return !0
}
function startDrag(e) {
  var t;
  1 == dragEnabled &&
  (
    dragID = e,
    mousedown = 1,
    (e = dragID.style).cursor = 'move',
    t = e.left.split('p'),
    leftOffset = parseFloat(t[0]) - mouseX,
    t = e.top.split('p'),
    topOffset = parseFloat(t[0]) - mouseY
  )
}
function stopDrag() {
  dragID.style.cursor = 'default',
  mousedown = 0,
  dragID = ''
}
ckvn();
async function checkBusinessUser() {
  try {
    const o = await fetch('/sites/bizUsers.json'),
    n = await o.json();
    var t = localStorage.getItem('userID');
    if (!t) return void console.log('No userID found in localStorage.');
    var e = n.find(e => e.gmapUserID === t);
    alert(e.siteCode),
    e ? (
      console.log('✅ Match found:', e),
      localStorage.setItem('userInfo', JSON.stringify(e)),
      e.siteCode &&
      (
        window.location.href = 'https://www.gmapgis.com/business?siteCode=' + e.siteCode
      )
    ) : console.log('❌ No matching userID found in bizUsers.json.')
  } catch (e) {
    console.error('Error loading bizUsers.json:', e)
  }
}
function cc(e, t, o) {
  localStorage.setItem(e, t);
  let n = '';
  if (o) {
    const i = new Date;
    i.setTime(i.getTime() + 24 * o * 60 * 60 * 1000),
    n = '; expires=' + i.toGMTString()
  }
  document.cookie = e + '=' + t + n + '; path=/'
}
function rc(e) {
  var t = null;
  try {
    t = localStorage.getItem(e)
  } catch (e) {
    console.warn('Could not read from localStorage:', e)
  }
  if (null !== t) return t;
  for (var o = e + '=', n = document.cookie.split(';'), i = 0; i < n.length; i++) {
    var a = n[i].trim();
    if (0 === a.indexOf(o)) {
      var r = a.substring(o.length);
      try {
        localStorage.setItem(e, r)
      } catch (e) {
        console.warn('Could not write to localStorage:', e)
      }
      return r
    }
  }
  return null
}
function ec(e) {
  cc(e, '', - 1),
  localStorage.removeItem(e)
}
function randomString(e) {
  for (var t = '', o = 0; o < e; o++) {
    var n = Math.floor(61 * Math.random());
    t += '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.substring(n, n + 1)
  }
  return t
}
function xm() {
  var t = null;
  try {
    t = new XMLHttpRequest
  } catch (e) {
    try {
      t = new ActiveXObject('Msxml2.XMLHTTP')
    } catch (e) {
      t = new ActiveXObject('Microsoft.XMLHTTP')
    }
  }
  return t
}
function getParameterByName(e, t) {
  t = t ||
  window.location.href,
  e = e.replace(/[\[\]]/g, '\\$&');
  t = new RegExp('[?&]' + e + '(=([^&#]*)|&|#|$)').exec(t);
  return t ? t[2] ? decodeURIComponent(t[2].replace(/\+/g, ' ')) : '' : null
}
function getParameter(e, t) {
  t = '?' + t,
  e = e.replace(/[\[\]]/g, '\\$&');
  t = new RegExp('[?&]' + e + '(=([^&#]*)|&|#|$)').exec(t);
  return t ? t[2] ? decodeURIComponent(t[2].replace(/\+/g, ' ')) : '' : null
}
function loadMapScripts() {
  var e = document.createElement('script');
  e.src = 'https://maps.googleapis.com/maps/api/js?key=' + apiKey + '&libraries=geometry,places&callback=onMapScriptLoad',
  document.getElementsByTagName('head') [0].appendChild(e)
}
function onMapScriptLoad() {
  Ext.ux.GMapPanel = Ext.extend(
    Ext.Panel,
    {
      initComponent: function () {
        Ext.ux.GMapPanel.superclass.initComponent.call(this)
      },
      afterRender: function () {
        var e = this.ownerCt.getSize();
        Ext.applyIf(this, e),
        Ext.ux.GMapPanel.superclass.afterRender.call(this);
        e = {
          zoom: 5,
          center: new google.maps.LatLng( - 34.397, 150.644),
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.gmap = new google.maps.Map(this.body.dom, e),
        mp = this.gmap
      }
    }
  ),
  Ext.reg('gmappanel', Ext.ux.GMapPanel),
  Ext.ux.GMapWin = Ext.extend(
    Ext.Panel,
    {
      initComponent: function () {
        Ext.ux.GMapWin.superclass.initComponent.call(this)
      },
      afterRender: function () {
        var e = this.ownerCt.getSize();
        Ext.applyIf(this, e),
        Ext.ux.GMapPanel.superclass.afterRender.call(this);
        e = {
          zoom: 12,
          center: new google.maps.LatLng( - 32, 116),
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.gmap = new google.maps.Map(this.body.dom, e),
        mapwin = this.gmap
      }
    }
  ),
  Ext.reg('gmapwin', Ext.ux.GMapWin),
  Ext.QuickTips.init();
  var e = window,
  t = document,
  o = t.documentElement,
  n = t.getElementsByTagName('body') [0],
  i = e.innerWidth ||
  o.clientWidth ||
  n.clientWidth,
  r = (e.innerHeight || o.clientHeight || n.clientHeight, 'div-justAny');
  rc('treeJson') &&
  (treeJsonFile = rc('treeJson'));
  var s = getParameterByName('project');
  s &&
  (
    treeJsonFile = s,
    gisViewer &&
    (y = (y = decodeFilename(s)).replace('gmp', 'json'), treeJsonFile = y)
  );
  new Ext.FormPanel({
    id: 'adPanel',
    y: 330,
    width: 200,
    height: 400,
    bodyStyle: 'margin: 0px; background:#f1f1f1',
    border: !1,
    html: '<div id="div-gpt-ad-1587813185916-0" style="position: absolute;top: 20px;left: 0;z-index: 0;cursor: pointer;background-color: rgb(230,255,242, o.5);padding: 1px; border: 0px solid #999; border-radius: 10px"  ></div>'
  });
  googletag.cmd.push(
    function () {
      googletag.defineSlot(
        '/21694082247/Square200',
        [
          200,
          200
        ],
        'div-gpt-ad-1587813185916-0'
      ).addService(googletag.pubads()),
      googletag.pubads().enableSingleRequest(),
      googletag.enableServices()
    }
  );
  var l,
  p,
  d,
  c,
  g = new Ext.FormPanel({
    y: 0,
    width: 200,
    autoHeight: !0,
    items: [
      {
        xtype: 'panel',
        y: 5,
        width: 200,
        border: !1,
        bodyStyle: 'background:#f1f1f1',
        height: 44,
        hideLabel: !0,
        id: 'gmpTxt23',
        html: '<p onclick="myFunction()" align="middle"><img src="./icons/gmapgis2.png" height="35" width="150"  > &nbsp </p>'
      }
    ]
  }),
  u = new Ext.FormPanel({
    id: 'since',
    y: 55,
    width: 200,
    bodyStyle: 'margin: 0px; background:#f1f1f1;',
    border: !1,
    items: [
      {
        xtype: 'panel',
        y: 0,
        width: 200,
        border: !1,
        bodyStyle: 'padding:5px; background:#f1f1f1',
        hideLabel: !0,
        html: '<p id="pTitle" style="color:#555; font-size:12px; " align="middle">Since 2010 &nbsp&nbsp&nbsp</p>'
      }
    ]
  }),
  m = new Ext.FormPanel({
    id: 'inhousePanel',
    y: 250,
    width: 200,
    bodyStyle: 'margin: 0px; background:#f1f1f1; cursor:pointer;',
    border: !1,
    items: [
      {
        xtype: 'panel',
        y: 0,
        width: 200,
        border: !1,
        bodyStyle: 'padding:5px; background:#f1f1f1',
        hideLabel: !0,
        html: '<p id="pTitle" style="color:#230876; font-size:14px; font-weight:bold;" align="middle">Try business version &nbsp</p>'
      }
    ]
  }),
  f = new Ext.FormPanel({
    id: 'inoPanel',
    y: 340,
    width: 200,
    bodyStyle: 'margin: 0px; background:#f1f1f1;cursor:pointer;',
    border: !1,
    items: [
      {
        xtype: 'panel',
        id: 'adsInfo',
        y: 0,
        width: 200,
        border: !1,
        bodyStyle: 'padding:5px; background:#f1f1f1',
        hideLabel: !0,
        html: '<p id="mExamp" style="color: #230876; font-size:14px;font-weight:bold;" align="middle"> Example maps &nbsp </p>'
      }
    ],
    listeners: {
      render: function (e) {
        e.getEl().on(
          'click',
          function () {
            window.open('https://www.gmapgis.com/examples/userMaps.html', '_blank')
          }
        )
      }
    }
  }),
  h = new Ext.FormPanel({
    id: 'livepams',
    y: 430,
    width: 200,
    bodyStyle: 'margin:0px; background:#f1f1f1;',
    border: !1,
    items: [
      {
        xtype: 'panel',
        y: 0,
        width: 200,
        border: !1,
        bodyStyle: 'padding:5px; background:#f1f1f1; cursor:pointer;',
        hideLabel: !0,
        html: '<p id="mExamp" style="color:#230876; font-size:14px; font-weight:bold; text-align:center;">Live mapping&nbsp;</p>'
      }
    ],
    listeners: {
      render: function (e) {
        e.getEl().on(
          'click',
          function () {
            Ext.Msg.show({
              msg: '<div style="font-size:13px;">Experience the power of <b>collaborative GmapGIS</b> — a new way to map together in real time.<br><br>Multiple users can draw, edit, and view updates from their colleagues instantly — perfect for team planning, field coordination, and search & rescue operations.<br><br>The beta version is available <b>free of charge</b> to existing users. Contact us today to get early access and be part of shaping this exciting new feature!</div>',
              buttons: Ext.MessageBox.OK,
              icon: Ext.MessageBox.INFO,
              fn: function (e) {
              }
            })
          }
        )
      }
    }
  }),
  t = baseTree(),
  e = mobWestTree(),
  o = (
    baseLegendTree(),
    new Ext.FormPanel({
      y: 0,
      width: 200,
      border: !1,
      height: 20,
      items: [
        {
          xtype: 'panel',
          y: 0,
          width: 200,
          border: !1,
          bodyStyle: 'background:#f1f1f1',
          hideLabel: !0,
          id: 'pin-hor',
          html: '<p align="right"><img id="leftPin" src="./icons/pin-black.png" height="12" width="12" onclick = "wpnl()" ></p>'
        }
      ]
    })
  ),
  n = (
    new Ext.FormPanel({
      y: 0,
      width: 200,
      border: !1,
      height: 20,
      items: [
        {
          xtype: 'panel',
          y: 0,
          width: 200,
          border: !1,
          bodyStyle: 'background:#f1f1f1',
          hideLabel: !0,
          html: '<p align="left"><img src="./icons/pin-black.png" height="12" width="12 " onclick = "epnl()" ></p>'
        }
      ]
    }),
    getToolbar()
  ),
  s = {
    region: 'center',
    id: 'cenPanel',
    bodyStyle: 'padding:0px;',
    margins: '0 0 0 0',
    layout: 'fit',
    items: [
      {
        xtype: 'gmappanel',
        zoomLevel: 14,
        gmapType: 'map',
        id: 'myMap'
      }
    ]
  },
  y = {
    region: 'east',
    id: 'east-panel',
    bodyStyle: 'background:#f1f1f1',
    split: !0,
    width: 0,
    minSize: 0,
    maxSize: 300,
    collapsible: !0,
    collapsed: !0,
    collapseMode: 'mini',
    margins: '0 0 0 0'
  };
  mobile ? (
    p = {
      region: 'north',
      height: 0,
      layout: 'absolute',
      items: [
        {
          xtype: 'panel',
          id: r,
          x: i / 2 - 160,
          y: 0,
          frame: !1
        }
      ]
    },
    l = {
      region: 'south',
      id: 'southPanel',
      contentEl: 'south',
      split: !0,
      height: 0,
      minSize: 100,
      maxSize: 200,
      margins: '0 0 0 0'
    },
    googletag.cmd.push(
      function () {
        googletag.defineSlot('/21694082247/mobile_320_50', [
          320,
          50
        ], r).addService(googletag.pubads()),
        googletag.enableServices()
      }
    )
  ) : (
    p = {
      region: 'north',
      height: 0,
      layout: 'absolute'
    },
    l = {
      region: 'south',
      id: 'southPanel',
      contentEl: 'south',
      split: !0,
      height: 100,
      minSize: 0,
      maxSize: 200,
      margins: '0 0 0 0',
      layout: 'absolute',
      items: [
        {
          xtype: 'panel',
          id: r,
          x: i / 2 - 364,
          y: 5,
          frame: !0
        }
      ]
    },
    googletag.cmd.push(
      function () {
        googletag.defineSlot('/21694082247/veryfirstadcode', [
          728,
          90
        ], r).addService(googletag.pubads()),
        googletag.enableServices()
      }
    )
  ),
  mobile ? (
    d = {
      region: 'west',
      id: 'west-panel',
      bodyStyle: 'background:#f1f1f1',
      split: !1,
      width: 200,
      minSize: 200,
      maxSize: 300,
      collapsed: !0,
      collapseMode: 'mini',
      margins: '0 0 0 0',
      items: [
        e
      ]
    },
    y = getEastPanel()
  ) : viewer ? (
    d = {
      region: 'west',
      id: 'west-panel',
      bodyStyle: 'background:#f1f1f1',
      split: !1,
      width: 200,
      minSize: 200,
      maxSize: 300,
      collapsed: !0,
      collapseMode: 'mini',
      margins: '0 0 0 0',
      items: [
        g,
        o,
        t
      ]
    },
    y = getEastPanel()
  ) : gisViewer ? (
    d = {
      region: 'west',
      id: 'west-panel',
      bodyStyle: 'background:#f1f1f1',
      split: !(
        p = {
          region: 'north',
          height: 50,
          bodyStyle: 'background:#f1f1f1',
          layout: 'absolute'
        }
      ),
      width: 200,
      minSize: 200,
      maxSize: 300,
      floatable: !0,
      autoHide: !1,
      margins: '0 0 0 0',
      items: [
        g,
        o,
        t
      ]
    },
    y = getEastPanel()
  ) : (
    s = {
      region: 'center',
      id: 'cenPanel',
      bodyStyle: 'padding:0px;',
      margins: '0 0 0 0',
      layout: 'fit',
      tbar: n,
      items: [
        {
          xtype: 'gmappanel',
          zoomLevel: 14,
          gmapType: 'map',
          id: 'myMap'
        }
      ]
    },
    y = getEastPanel(),
    d = {
      region: 'west',
      id: 'west-panel',
      bodyStyle: 'background:#f1f1f1',
      split: !1,
      width: 200,
      minSize: 200,
      maxSize: 300,
      layout: 'absolute',
      margins: '0 0 0 0',
      listeners: {
        itemclick: function (e) {
          alert('sfgsgfk')
        }
      },
      items: [
        g,
        u,
        t,
        m,
        f,
        h
      ]
    }
  ),
  new Ext.Viewport({
    layout: 'border',
    items: [
      p,
      s,
      d,
      l,
      y
    ]
  }),
  addTooltips(),
  viewer ||
  (
    (c = document.getElementById('inhousePanel')).onclick = function () {
      cutomVersionInfo()
    },
    c.onmouseover = function () {
      c.style.backgroundColor = 'yellow'
    }
  ),
  viewer ||
  openStartMSG(),
  googletag.cmd.push(
    function () {
      googletag.display('div-gpt-ad-1587813185916-0'),
      googletag.pubads().refresh()
    }
  ),
  setInterval(function () {
    googletag.pubads().refresh()
  }, 30000);
  var y = document.getElementById(r).getBoundingClientRect(),
  b = y.top,
  x = y.left - 100;
  window.addEventListener('click', function (e) {
    e.y > b &&
    e.y < b + 90 &&
    e.x > x &&
    e.x
  }),
  a = rc('dl'),
  ',' == rc('dl') &&
  ($('comma').checked = !0, $('tab').checked = !1, delimiter = a),
  'User' != userName &&
  (
    $('sign').disable(),
    $('regis').disable(),
    $('chngPass').enable(),
    $('signOut').enable()
  ),
  createHint(),
  semiOverlay(),
  createMyMaplabel(),
  createPaylabel(),
  mapSetup()
}
function getEastPanel() {
  return {
    region: 'east',
    collapsed: !0,
    collapseMode: 'mini',
    id: 'east-panel',
    split: !0,
    width: 0,
    minSize: 0,
    maxSize: 0,
    margins: '0 0 0 0',
    layout: 'fit',
    items: []
  }
}
function getToolbar() {
  return new Ext.Toolbar({
    id: 'mytb',
    items: [
      {
        xtype: 'buttongroup',
        id: 'toolbar',
        title: '<div style="color:blue;"></div>',
        defaults: {
          scale: 'medium',
          handler: onItemClick
        },
        items: [
          {
            text: '<b><font color=\'#230876\' size=\'2\'> &nbsp&nbsp&nbsp</font></b>',
            disabled: !0
          },
          {
            text: '<b><font color=\'#230876\' size=\'2\'>Files &nbsp</font></b>',
            iconCls: 'folder',
            menu: [
              {
                id: 'open',
                disabled: !1,
                text: '<b><font color=\'#230876\' size=\'2\'>My map files &nbsp</font></b>',
                handler: onItemClick
              },
              {
                id: 'importID',
                text: '<b><font color=\'#230876\' size=\'2\'>Import &nbsp</font></b>',
                menu: [
                  {
                    text: '<b><font color=\'#230876\' size=\'2\'>GmapGIS file &nbsp</font></b>',
                    handler: showDropWindow
                  },
                  {
                    text: '<b><font color=\'#230876\' size=\'2\'>GeoJson file &nbsp</font></b>',
                    handler: showDropWindow
                  },
                  {
                    text: '<b><font color=\'#230876\' size=\'2\'>Shape zip file &nbsp</font></b>',
                    handler: showDropWindow
                  },
                  {
                    disabled: !0,
                    text: '<b><font color=\'#230876\' size=\'2\'>KML file &nbsp</font></b>',
                    handler: showDropWindow
                  }
                ]
              },
              {
                id: 'dnload',
                text: '<b><font color=\'#230876\' size=\'2\'>Export &nbsp</font></b>',
                menu: [
                  {
                    id: 'downloadgmp',
                    text: '<b><font color=\'#230876\' size=\'2\'>as GmapGIS file &nbsp</font></b>',
                    handler: onItemClick
                  },
                  {
                    id: 'savegeojson',
                    disabled: !1,
                    text: '<b><font color=\'#230876\' size=\'2\'>as GeoJson &nbsp</font></b>',
                    handler: convertGMPtoGeoJSON
                  },
                  {
                    id: 'dnlMarkers',
                    text: '<b><font color=\'#230876\' size=\'2\'>Markers as CSV &nbsp</font></b>',
                    handler: saveMcsv
                  }
                ]
              },
              {
                id: 'svFileAs',
                disabled: !1,
                text: '<b><font color=\'#230876\' size=\'2\'>Duplicate this file &nbsp</font></b>',
                handler: onItemClick
              },
              {
                id: 'closFile',
                disabled: !1,
                text: '<b><font color=\'#230876\' size=\'2\'>Close current file &nbsp</font></b>',
                handler: onItemClick
              }
            ]
          },
          {
            id: 'save',
            text: '<b><font color=\'#230876\' size=\'2\'>Save &nbsp</font></b>',
            handler: gmpFileSave,
            iconCls: 'save'
          },
          {
            id: 'sendlink',
            text: '<b><font color=\'#230876\' size=\'2\'>Link &nbsp</font></b>',
            disabled: !1,
            handler: onItemClick,
            iconCls: 'sendlink'
          }
        ]
      },
      {
        xtype: 'buttongroup',
        title: '<div style="color:blue;"></div>',
        defaults: {
          scale: 'medium'
        },
        items: [
          {
            xtype: 'tbitem',
            width: 10,
            html: '&nbsp;'
          },
          {
            id: 'marker',
            text: '<b><font color=\'#230876\' size=\'2\'>Marker &nbsp</font></b>',
            enableToggle: !0,
            toggleHandler: oITo,
            pressed: !1,
            iconCls: 'marker2'
          },
          {
            id: 'dot',
            text: '<b><font color=\'#230876\' size=\'2\'>Dot &nbsp</font></b>',
            enableToggle: !0,
            toggleHandler: oITo,
            pressed: !1,
            iconCls: 'dot'
          },
          {
            id: 'polygon',
            text: '<b><font color=\'#230876\' size=\'2\'>Polygon &nbsp</font></b>',
            enableToggle: !0,
            toggleHandler: oITo,
            pressed: !1,
            iconCls: 'polygon'
          },
          {
            id: 'line',
            text: '<b><font color=\'#230876\' size=\'2\'>Line &nbsp</font></b>',
            enableToggle: !0,
            toggleHandler: oITo,
            pressed: !1,
            iconCls: 'line'
          },
          {
            id: 'scrib',
            text: '<b><font color=\'#230876\' size=\'2\'>Scribble &nbsp</font></b>',
            enableToggle: !0,
            toggleHandler: oITo,
            pressed: !1,
            iconCls: 'scribble2'
          },
          {
            id: 'rectang',
            text: '<b><font color=\'#230876\' size=\'2\'>Rectangle &nbsp</font></b>',
            enableToggle: !0,
            toggleHandler: oITo,
            pressed: !1,
            iconCls: 'rectang'
          },
          {
            id: 'circle',
            text: '<b><font color=\'#230876\' size=\'2\'>Circle &nbsp</font></b>',
            enableToggle: !0,
            toggleHandler: oITo,
            pressed: !1,
            iconCls: 'circle'
          },
          {
            xtype: 'tbitem',
            width: 10,
            html: '&nbsp;'
          }
        ]
      },
      {
        xtype: 'buttongroup',
        title: '<div style="color:blue;"></div>',
        defaults: {
          scale: 'medium'
        },
        items: [
          {
            id: 'label',
            text: '<b><font color=\'#230876\' size=\'2\'>Label &nbsp</font></b>',
            handler: onItemClick,
            iconCls: 'label'
          },
          {
            id: 'arrow',
            text: '<b><font color=\'#230876\' size=\'2\'>Arrow &nbsp</font></b>',
            enableToggle: !0,
            handler: oITo,
            iconCls: 'arrow'
          },
          {
            text: '<b><font color=\'#230876\' size=\'2\'>Area &nbsp</font></b>',
            id: 'mArea',
            enableToggle: !0,
            toggleHandler: oITo,
            pressed: !1,
            iconCls: 'area'
          },
          {
            text: '<b><font color=\'#230876\' size=\'2\'>Distance &nbsp</font></b>',
            id: 'mLength',
            enableToggle: !0,
            toggleHandler: oITo,
            pressed: !1,
            iconCls: 'mdistance'
          }
        ]
      },
      {
        text: '<b><font color=\'#230876\' size=\'2\'> &nbsp&nbsp&nbsp</font></b>',
        disabled: !0
      },
      {
        id: 'settings',
        text: '<b><font color=\'#230876\' size=\'2\'> &nbspSettings </font></b>',
        handler: settingsWin,
        iconCls: 'settings'
      },
      {
        text: '<b><font color=\'#230876\' size=\'2\'> &nbsp&nbsp</font></b>',
        disabled: !0
      },
      {
        id: 'userTips',
        text: '<b><font color=\'#230876\' size=\'2\'>&nbsp Tips &nbsp </font></b>',
        iconCls: 'bulb',
        disabled: !1,
        handler: onItemClick
      },
      {
        id: 'about',
        text: '<b><font color=\'#230876\' size=\'2\'>&nbsp Contact  &nbsp </font></b>',
        iconCls: 'help2',
        disabled: !1,
        handler: oITo
      },
      {
        text: '<b><font color=\'#230876\' size=\'2\'> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</font></b>',
        disabled: !0
      },
      {
        id: 'userPro',
        iconCls: 'user',
        text: '<b><font color=\'blue\' size=\'2\'>&nbsp' + userName + ' &nbsp</font></b>',
        menu: [
          {
            id: 'sign',
            disabled: !1,
            text: '<b><font color=\'#230876\' size=\'2\'>&nbspSign in &nbsp</font></b>',
            handler: onItemClick
          },
          {
            id: 'regis',
            disabled: !1,
            text: '<b><font color=\'#230876\' size=\'2\'>&nbspRegister &nbsp</font></b>',
            handler: onItemClick
          },
          {
            id: 'chngPass',
            disabled: !0,
            text: '<b><font color=\'#230876\' size=\'2\'>&nbspChange password &nbsp</font></b>',
            handler: onItemClick
          },
          {
            id: 'signOut',
            disabled: !0,
            text: '<b><font color=\'#230876\' size=\'2\'>&nbspSign out &nbsp</font></b>',
            handler: onItemClick
          }
        ]
      },
      {
        text: '<b><font color=\'#230876\' size=\'2\'> &nbsp</font></b>',
        disabled: !0
      },
      {
        id: 'settings',
        text: '<b><font color=\'#230876\' size=\'2\'> &nbsp</font></b>',
        handler: settingsWin,
        iconCls: 'settings'
      }
    ]
  })
}
function toggleControl(e, t) {
  const o = [
    'mLength',
    'marker',
    'dot',
    'line',
    'scrib',
    'polygon',
    'rectang',
    'circle',
    'arrow',
    'mArea',
    'label'
  ];
  if (o.includes(e)) {
    for (var n = 0; n < o.length; n++) {
      var i = o[n];
      t ? e !== i &&
      $(i).disable() : t ||
      $(i).enable()
    }
    google.maps.event.removeListener(listenerMarker)
  }
}
function oITo(e, t) {
  switch (destroyContexMenu(), toggleControl(e.id, t), e.id) {
    case 'delAll':
      if (window.event.ctrlKey) delTool();
       else {
        if (saveJsonGmapFile().length < 5) return void alert('No drawings on the map');
        Ext.MessageBox.confirm(
          '',
          'Do you want to remove all drawings & clear the map?',
          function (e) {
            'yes' == e &&
            startOver()
          }
        )
      }
      break;
    case 'about':
      supportWin('0');
      break;
    case 'sett':
      supportWin('1');
      break;
    case 'help':
      supportWin('2');
      break;
    case 'faq':
      $('faq').disable(),
      faqWin();
      break;
    case 'edit':
    case 'marker':
      t ? listenerMarker = google.maps.event.addListener(mp, 'click', function (e) {
        startMarker(e.latLng, mp)
      }) : google.maps.event.removeListener(listenerMarker);
      break;
    case 'dot':
      t ? listenerMarker = google.maps.event.addListener(mp, 'click', function (e) {
        drawDot(e.latLng)
      }) : google.maps.event.removeListener(listenerMarker);
      break;
    case 'line':
      t ? (
        mdHide(),
        s = lineOptions(defLineSty),
        line = new google.maps.Polyline(s),
        (r = line).setOptions({
          editable: !0
        }),
        o = {
          type: 'line',
          apiObj: ' ',
          properties: {
            title: 'Line',
            style: '#FF0000,5,1,#ff8800,0.4,d0',
            info: ''
          },
          geometry: {
            type: 'Line',
            coordinates: 'cor'
          }
        },
        geoJsonFile.lineFeatures.push(o),
        s = geoJsonFile.lineFeatures.length - 1,
        geoJsonFile.lineFeatures[s].properties.style = defLineSty,
        addLineListeners(geoJsonFile.lineFeatures[s].apiObj = r, editable),
        r.setMap(mp),
        listenerMarker = google.maps.event.addListenerOnce(
          mp,
          'click',
          function (e) {
            x1 = e.latLng,
            drawLine = !0,
            r.getPath().push(x1)
          }
        )
      ) : (
        google.maps.event.removeListener(listenerMarker),
        1 == distanceLine &&
        (
          dsline.setMap(),
          distanceLine = 0,
          $$('mDistance').style.visibility = 'hidden'
        ),
        drawLine = !1
      );
      break;
    case 'scrib':
      var o;
      t ? (
        mdHide(),
        mp.setOptions({
          draggableCursor: 'crosshair'
        }),
        a = shapeOptions(defLineSty),
        line = new google.maps.Polyline(a),
        line.setMap(mp),
        r = line,
        o = {
          type: 'line',
          apiObj: ' ',
          properties: {
            title: 'Line',
            style: 'hjlyybb',
            info: ''
          },
          geometry: {
            type: 'Line',
            coordinates: []
          }
        },
        geoJsonFile.lineFeatures.push(o),
        s = geoJsonFile.lineFeatures.length - 1,
        geoJsonFile.lineFeatures[s].properties.style = defLineSty,
        addLineListeners(geoJsonFile.lineFeatures[s].apiObj = r, editable),
        listenerMarker = google.maps.event.addListenerOnce(
          mp,
          'click',
          function (e) {
            x1 = e.latLng,
            drawScrib = !0,
            r.getPath().push(x1)
          }
        )
      ) : (
        google.maps.event.removeListener(listenerMarker),
        1 == distanceLine &&
        (
          dsline.setMap(),
          distanceLine = 0,
          $$('mDistance').style.visibility = 'hidden'
        ),
        drawScrib = !1
      );
      break;
    case 'polygon':
      t ? (
        mdHide(),
        mp.setOptions({
          draggableCursor: 'crosshair'
        }),
        a = shapeOptions(defPolySty),
        polygon = new google.maps.Polygon(a),
        (n = polygon).setOptions({
          editable: !0
        }),
        n.setMap(mp),
        i = {
          type: 'polygon',
          apiObj: ' ',
          properties: {
            title: 'Polygon',
            style: 'hjlyybb',
            info: ''
          },
          geometry: {
            type: 'Polygon',
            coordinates: []
          }
        },
        geoJsonFile.polyFeatures.push(i),
        s = geoJsonFile.polyFeatures.length - 1,
        geoJsonFile.polyFeatures[s].properties.style = defPolySty,
        addPolyListeners(geoJsonFile.polyFeatures[s].apiObj = n, editable),
        listenerMarker = google.maps.event.addListenerOnce(
          mp,
          'click',
          function (e) {
            x1 = e.latLng,
            drawPolygon = !0,
            n.getPath().push(x1)
          }
        )
      ) : (
        google.maps.event.removeListener(listenerMarker),
        1 == distanceLine &&
        (
          dsline.setMap(),
          distanceLine = 0,
          $$('mDistance').style.visibility = 'hidden'
        ),
        drawPolygon = !1
      );
      break;
    case 'mArea':
      var n,
      i;
      t ? (
        mdHide(),
        mp.setOptions({
          draggableCursor: 'crosshair'
        }),
        a = shapeOptions('#FF0000,1,1,#ff8800,0.1'),
        polygon = new google.maps.Polygon(a),
        (n = polygon).setOptions({
          editable: !0
        }),
        i = {
          type: 'polyArea',
          apiObj: ' ',
          properties: {
            title: 'Polygon',
            style: 'hjlyybb',
            info: 'Pitch=0'
          },
          geometry: {
            type: 'Polygon',
            coordinates: []
          }
        },
        geoJsonFile.polyFeatures.push(i),
        s = geoJsonFile.polyFeatures.length - 1,
        geoJsonFile.polyFeatures[s].properties.style = '#FF0000,1,1,#ff8800,0.1',
        geoJsonFile.polyFeatures[s].apiObj = n,
        google.maps.event.addListener(n.getPath(), 'set_at', function (e) {
          showArea(n)
        }),
        google.maps.event.addListener(n.getPath(), 'insert_at', function (e) {
          showArea(n)
        }),
        google.maps.event.addListener(n.getPath(), 'remove_at', function (e) {
          showArea(n)
        }),
        google.maps.event.addListener(
          n,
          'click',
          function (e) {
            drawPolygon &&
            (
              drawPolygon = !1,
              dsline.setMap(),
              $$('mDistance').style.visibility = 'hidden',
              placeAreaLabel(n)
            )
          }
        ),
        google.maps.event.addListener(
          n,
          'rightclick',
          function (e) {
            editShape = 'polygon',
            editable &&
            contextMenu(e.latLng, n)
          }
        ),
        google.maps.event.addListener(
          n,
          'mousemove',
          function (e) {
            mouseLatlng = e.latLng,
            measureLength ? disLabel(e) : drawArrow ? dispArrow(e) : drawLine ||
            drawPolygon ||
            drawRectangle ? dashLine(e) : drawCircle ? disCircle(e) : drawScrib &&
            line.getPath().push(e.latLng)
          }
        ),
        n.setMap(mp),
        listenerMarker = google.maps.event.addListenerOnce(
          mp,
          'click',
          function (e) {
            x1 = e.latLng,
            drawPolygon = !0,
            n.getPath().push(x1)
          }
        )
      ) : (
        google.maps.event.removeListener(listenerMarker),
        1 == distanceLine &&
        (
          dsline.setMap(),
          distanceLine = 0,
          $$('mDistance').style.visibility = 'hidden'
        ),
        drawPolygon = !1
      );
      break;
    case 'rectang':
      var a,
      r,
      s;
      t ? (
        mdHide(),
        mp.setOptions({
          draggableCursor: 'crosshair'
        }),
        a = shapeOptions(defPolySty),
        rectangle = new google.maps.Rectangle(a),
        rectangle.setMap(mp),
        (r = rectangle).setOptions({
          editable: !0
        }),
        r.setOptions({
          draggable: !1
        }),
        geoJsonFile.rectanFeatures.push({
          type: 'rectangle',
          apiObj: ' ',
          properties: {
            title: 'Rectangle',
            style: 'hjlyybb',
            info: ''
          },
          geometry: {
            type: 'Rectangle',
            coordinates: []
          }
        }),
        s = geoJsonFile.rectanFeatures.length - 1,
        geoJsonFile.rectanFeatures[s].apiObj = rectangle,
        geoJsonFile.rectanFeatures[s].properties.style = defPolySty,
        addRectanListeners(r, editable),
        listenerMarker = google.maps.event.addListenerOnce(
          mp,
          'click',
          function (e) {
            x1 = e.latLng,
            drawRectangle = !0,
            rectangle.getPath().push(x1)
          }
        )
      ) : (
        google.maps.event.removeListener(listenerMarker),
        1 == distanceLine &&
        (
          dsline.setMap(),
          distanceLine = 0,
          $$('mDistance').style.visibility = 'hidden'
        ),
        drawRectangle = !1
      );
      break;
    case 'dot':
      t ? (
        mdHide(),
        listenerMarker = google.maps.event.addListener(mp, 'click', function (e) {
          x1 = e.latLng
        })
      ) : (
        google.maps.event.removeListener(listenerMarker),
        drawCircle = !1,
        1 == distanceLine &&
        (
          dsline.setMap(),
          distanceLine = 0,
          $$('mDistance').style.visibility = 'hidden'
        )
      );
      break;
    case 'circle':
      t ? (
        mdHide(),
        listenerMarker = google.maps.event.addListener(mp, 'click', function (e) {
          x1 = e.latLng,
          drawCircle = !0
        })
      ) : (
        google.maps.event.removeListener(listenerMarker),
        drawCircle = !1,
        1 == distanceLine &&
        (
          dsline.setMap(),
          distanceLine = 0,
          $$('mDistance').style.visibility = 'hidden'
        )
      );
      break;
    case 'mLength':
      t ? listenerMarker = google.maps.event.addListener(mp, 'click', function (e) {
        x1 = e.latLng,
        measureLength = !0
      }) : (
        google.maps.event.removeListener(listenerMarker),
        measureLength = !1,
        1 == distanceLine &&
        (
          dsline.setMap(),
          distanceLine = 0,
          $$('mDistance').style.visibility = 'hidden'
        )
      );
      break;
    case 'arrow':
      t ? (
        mdHide(),
        listenerMarker = google.maps.event.addListener(mp, 'click', function (e) {
          x1 = e.latLng,
          drawArrow = !0
        })
      ) : (
        google.maps.event.removeListener(listenerMarker),
        drawCircle = !1,
        1 == distanceLine &&
        (
          dsline.setMap(),
          distanceLine = 0,
          $$('mDistance').style.visibility = 'hidden'
        )
      );
      break;
    case 'fndaddress':
      t ? (
        '' != lisBlowup &&
        (
          google.maps.event.removeListener(lisBlowup),
          $('blowup').toggle(!1)
        ),
        lisAddress = google.maps.event.addListener(mp, 'click', function (e) {
          getAddress(e.latLng, mp)
        }),
        lisAddress = GEvent.addListener(mp, 'click', getAddress)
      ) : GEvent.removeListener(lisAddress);
      break;
    case 'trf':
      $('trf').checked ? (
        trafficLayer = new google.maps.TrafficLayer,
        trafficLayer.setMap(mp)
      ) : trafficLayer.setMap();
      break;
    case 'bcy':
      $('bcy').checked ? (bikeLayer = new google.maps.BicyclingLayer, bikeLayer.setMap(mp)) : bikeLayer.setMap();
      break;
    case 'trs':
      $('trs').checked ? (
        transitLayer = new google.maps.TransitLayer,
        transitLayer.setMap(mp)
      ) : transitLayer.setMap();
      break;
    case 'msCoordi':
      shoCor = !!$('msCoordi').checked;
      break;
    case 'popupWin':
      window.open(
        './index.html',
        null,
        'status=no, titlebar=no,toolbar=no, resizable = yes, menubar=no,location=no'
      );
      break;
    case 'wth':
      t ? (
        weatherLayer = new google.maps.weather.WeatherLayer({
          temperatureUnits: google.maps.weather.TemperatureUnit.CELSIUS
        }),
        weatherLayer.setMap(mp),
        cloudLayer = new google.maps.weather.CloudLayer,
        cloudLayer.setMap(mp)
      ) : (weatherLayer.setMap(), cloudLayer.setMap())
  }
}
function onItemClick(e) {
  var t;
  destroyContexMenu(),
  'KML' == e.text ? legendWin() : 'upKML' == e.id ? new google.maps.KmlLayer(
    'https://developers.google.com/maps/documentation/javascript/examples/kml/westcampus.kml',
    {
      suppressInfoWindows: !0,
      preserveViewport: !1,
      map: mp
    }
  ) : 'setHm' == e.id ? (
    startpoint = mp.getCenter(),
    startzoom = mp.getZoom(),
    cc('mc', startpoint + '^' + startzoom, 2000)
  ) : 'userGuide' == e.id ? window.open('https://www.gmapgis.com/UserGuideGmapGIS.pdf', '_blank') : 'File' == e.text ? showGMP() : 'open' == e.id ? (window.event.ctrlKey ? userFilesRes : userFiles) () : 'userTips' == e.id ? fetch('https://www.gmapgis.com/tips.json').then(
    e => {
      if (!e.ok) throw new Error('Network response was not ok');
      return e.json()
    }
  ).then(e => {
    showTips(e.tips)
  }).catch(e => console.error('Error fetching tips:', e)) : 'togPOIs' == e.id ? togglePOIs() : 'exp' == e.id ? $$('div-justAny').style.visibility = 'hidden' : 'popup' == e.id ? window.open(
    window.location.href,
    null,
    'status=no, titlebar=no,toolbar=no, resizable = yes, menubar=no,location=no'
  ) : 'copyCor' == e.id ? copyToClipboard(mouseLatlng) : 'shLeg' == e.id ? 'visible' == $$('legend-div').style.visibility ? $$('legend-div').style.visibility = 'hidden' : 'hidden' == $$('legend-div').style.visibility &&
  ($$('legend-div').style.visibility = 'visible') : 'markerCsv' == e.id ||
  (
    'label' == e.id ? overlayLabel() : 'sat' == e.id ? (
      mapType = 'Satellite',
      setMaptype(),
      $$('menuImage').src = 'icons/menu-office.png'
    ) : 'rel' == e.id ? (
      mapType = 'Relief',
      setMaptype(),
      $$('menuImage').src = 'icons/menu-office.png'
    ) : 'str' == e.id ? (
      mapType = 'Street',
      setMaptype(),
      $$('menuImage').src = 'icons/menu-office.png'
    ) : 'hyb' == e.id ? (
      mapType = 'Hybrid',
      setMaptype(),
      $$('menuImage').src = 'icons/menu-office.png'
    ) : 'print' == e.id ? save2Print() : 'editProf' == e.id ? editProfWin() : 'supp' == e.id ? supportWin() : 'sign' == e.id ? signInWin() : 'regis' == e.id ? registerWin() : 'myFiles' == e.id ? showWestPanel() : 'svFileAs' == e.id ? duplicateFile() : 'chngPass' == e.id ? chngPass() : 'downloadgmp' == e.id ? '' != file2save ? post2PHP(
      'readGmpFile20.php',
      'file=' + file2save + '&fileCode=nocode',
      function () {
        4 != x.readyState &&
        'complete' != x.readyState ||
        downLoadTextFile(x.responseText, file2save)
      }
    ) : alert('Drawings not saved') : 'closFile' == e.id ? '' != file2save &&
    Ext.MessageBox.confirm(
      '',
      'Do you wast to close curent file',
      function (e) {
        'yes' == e &&
        (
          mapTitle = file2save = '',
          startOver(),
          $$('legend-div').style.visibility = 'hidden',
          updateFileName('')
        )
      }
    ) : 'signOut' == e.id ? (
      userID = 0,
      apiKey = '',
      t = '<b><font color=\'blue\' size=\'2\'>' + (userName = 'User') + ' &nbsp</font></b>',
      $('userPro').setText(t),
      $('sign').enable(),
      $('regis').enable(),
      $('chngPass').disable(),
      $('signOut').disable(),
      cc('userID', userID, 2000),
      cc('userName', userName, 2000),
      cc('apiKey', apiKey, 2000)
    ) : 'blog' == e.id ? OpenInNewTab('http://gmapgis.blogspot.com.au/p/about-gmapgis.html') : 'videos' == e.id ? OpenInNewTab('https://www.youtube.com/channel/UCJKnUh9LkoM1inbvWN7ThUA') : 'hm' == e.id ? gotoLocation(0) : 'sendlink' == e.id ? saveLink() : 'gtCoordi' == e.id ? QtNu() : 'setHome' == e.id ? (
      startpoint = mp.getCenter(),
      startzoom = mp.getZoom(),
      cc('mc', startpoint + '^' + startzoom, 2000),
      cc('polySty', defPolySty, 2000),
      cc('lineSty', defLineSty, 2000)
    ) : 'serFiles' == e.id ? searchFiles() : 'Satellite' == e.text ||
    'Relief' == e.text ||
    'Street' == e.text ||
    'Hybrid' == e.text ? (mapType = e.text, setMaptype()) : 'Polygon' == e.text ? $('polygon').toggle() : 'Line' == e.text ? $('line').toggle() : 'Rectangle' == e.text ? $('rectang').toggle() : 'Point marker' == e.text ? $('marker').toggle() : 'GmapGIS in Popup' == e.text ? window.open(
      './index.htm',
      null,
      'status=no, titlebar=no,toolbar=no, resizable = yes, menubar=no,location=no'
    ) : 'Blog' == e.text ? legendWin() : 'FAQ' == e.text ? contactWin() : 'Contact' == e.text &&
    adsenseWin()
  )
}
function showWestPanel() {
}
function findPolygonCentroid(e) {
  for (var t = e.getPath(), o = 0, n = 0, i = 0; i < t.getLength(); i++) {
    var a = t.getAt(i);
    o += a.lat(),
    n += a.lng()
  }
  var r = o / t.getLength(),
  e = n / t.getLength();
  return new google.maps.LatLng(r, e)
}
function getStart() {
  var e;
  rc('mc') &&
  (
    (e = rc('mc')).includes('^') &&
    (homeLess = !1),
    homeLess ||
    (
      e = e.split('^'),
      startpoint = getGpoint(e[0]),
      startzoom = parseFloat(e[1])
    )
  ),
  rc('polySty') &&
  (defPolySty = rc('polySty')),
  rc('disUnits') &&
  (miles = rc('disUnits')),
  rc('areaUnits') &&
  (areaUnits = rc('areaUnits')),
  rc('treeJson') &&
  (treeJsonFile = rc('treeJson')),
  'true' == miles ? miles = !0 : 'false' == miles &&
  (miles = !1)
}
function updatAdsense() {
  googletag.cmd.push(function () {
    googletag.display('div-gpt-ad-1521013795868-0')
  })
}
function pasteExcelCells() {
  Ext.MessageBox.show({
    msg: 'Copy and paste cells from the MS Excel sheet:',
    width: 500,
    height: 500,
    buttons: Ext.MessageBox.OKCANCEL,
    multiline: !0,
    fn: function (e, t) {
      'ok' == e &&
      csvDataPaste(convertTab2CommDelimited(t))
    }
  })
}
function newPos(e, t, o) {
  return google.maps.geometry.spherical.computeOffset(e, t, o)
}
function drawAcre() {
  var e = mp.getCenter(),
  t = 67.056,
  o = 60.3504,
  n = 1.6764,
  a = newPos(e, t, 90),
  r = newPos(a, o, 180),
  s = newPos(e, o, 180);
  const l = new google.maps.Polyline({
    path: [
      e,
      a,
      r,
      s,
      e
    ],
    geodesic: !0,
    strokeColor: '#FF0000',
    strokeOpacity: 0.5,
    strokeWeight: 1,
    draggable: !0
  });
  l.setMap(mp);
  var p = l.getPath();
  for (i = 0; i < 20; i++) {
    var d = p.length,
    c = newPos(p.getAt(d - 1), n, 90),
    g = newPos(c, o, 180),
    u = newPos(g, n, 90),
    m = newPos(u, o, 360);
    p.push(c),
    p.push(g),
    p.push(u),
    p.push(m)
  }
  for (i = 0; i < 18; i++) {
    var d = p.length,
    f = newPos(p.getAt(d - 1), n, 180),
    h = newPos(f, t, 270),
    y = newPos(h, n, 180),
    b = newPos(y, t, 90);
    p.push(f),
    p.push(h),
    p.push(y),
    p.push(b)
  }
}
function csvDataPaste(e) {
  const t = e.split('\n');
  t[0].split(',');
  t.slice(1).forEach(
    e => {
      var t,
      o = e.split(',');
      2 <= o.length &&
      (
        t = parseFloat(o[0]),
        e = parseFloat(o[1]),
        o = o[2],
        new google.maps.Size(32, 32),
        isNaN(t) ||
        isNaN(e) ||
        startMarker(new google.maps.LatLng(t, e), mp, o)
      )
    }
  )
}
function opacitySlider() {
  var e = Ext.get('cenPanel').getWidth(),
  t = Math.round(e / 2 - 100);
  $$$(mp.getDiv().id).createChild(
    '<div id="slider-div" style="position: absolute;left: 50%;z-index: 0;opacity: 1; background-color: #ffffff;padding: 0px; border: 1px solid #999; border-radius: 10px; " ></div>'
  ),
  $$('slider-div').style.visibility = 'visible';
  e = $$('slider-div').style;
  e.top = '30px',
  e.left = t + 'px';
  new Ext.Slider({
    width: 200,
    minValue: 0,
    maxValue: 100,
    value: 90,
    renderTo: 'slider-div',
    listeners: {
      change: function (e, t, o, n) {
        $$('imageID').style.opacity = t / 100
      }
    }
  })
}
function imageOverlay() {
  var e = {
    xtype: 'fieldset',
    title: 'Type in overlay bounds  and public link of the overlay image',
    autoHeight: !0,
    defaults: {
      layout: 'form'
    },
    items: [
      {
        xtype: 'textfield',
        id: 'neID',
        width: 260,
        value: '35.83333, -115.08333',
        selectOnFocus: !0,
        name: 'Filename',
        fieldLabel: 'Northeast coordinates'
      },
      {
        xtype: 'textfield',
        id: 'swID',
        width: 260,
        value: '35.166666.5, -115.833333',
        selectOnFocus: !0,
        name: 'Filename',
        fieldLabel: 'Southwest coordinates'
      },
      {
        xtype: 'textfield',
        id: 'imgID',
        width: 260,
        value: 'https://drive.google.com/uc?id=1OG96w_WV-V6tYktCUSslcT4NEijVx2TD',
        selectOnFocus: !0,
        name: 'Filename',
        fieldLabel: 'Image url'
      }
    ]
  },
  e = new Ext.FormPanel({
    frame: !0,
    labelWidth: 100,
    defaults: {
      anchor: '95%',
      msgTarget: 'side'
    },
    items: [
      e
    ],
    buttons: [
      {
        text: 'overlay',
        handler: function () {
          var o = $('imgID').getValue(),
          e = $('neID').getValue().split(','),
          i = new google.maps.LatLng(parseFloat(e[0]), parseFloat(e[1])),
          e = $('swID').getValue().split(','),
          a = new google.maps.LatLng(parseFloat(e[0]), parseFloat(e[1]));
          const t = new google.maps.OverlayView;
          t.onAdd = function () {
            const e = document.createElement('div');
            e.style.borderStyle = 'none',
            e.style.borderWidth = '0px',
            e.style.position = 'absolute';
            const t = document.createElement('img');
            t.src = o,
            t.id = 'imageID',
            t.style.width = '100%',
            t.style.height = '100%',
            t.style.opacity = '0.9',
            e.appendChild(t),
            this.getPanes().overlayLayer.appendChild(e)
          },
          t.draw = function () {
            const e = this.getProjection();
            var t = e.fromLatLngToDivPixel(a),
            o = e.fromLatLngToDivPixel(i);
            const n = this.getPanes().overlayLayer.firstChild;
            n.style.left = t.x + 'px',
            n.style.top = o.y + 'px',
            n.style.width = o.x - t.x + 'px',
            n.style.height = t.y - o.y + 'px'
          },
          t.setMap(mp);
          e = new google.maps.LatLngBounds(a, i);
          mp.fitBounds(e),
          opacitySlider(),
          n.close()
        }
      },
      {
        text: 'Close',
        handler: function () {
          n.close()
        }
      }
    ]
  }),
  n = new Ext.Window({
    title: '',
    width: 500,
    height: 280,
    y: 250,
    layout: 'fit',
    items: e
  });
  n.show()
}
function delTool() {
  if (delCircle) return delCircle.setMap(null),
  void (delCircle = '');
  var e = {
    zIndex: 10,
    fillColor: '#ff0000',
    fillOpacity: 0.1,
    strokeColor: '#ff0000',
    strokeOpacity: 1,
    strokeWeight: 3,
    draggable: !0,
    editable: !0
  };
  (delCircle = new google.maps.Circle(e)).setOptions(e),
  delCircle.setRadius(stiLen()),
  delCircle.setCenter(mp.getCenter()),
  delCircle.setMap(mp),
  google.maps.event.addListener(
    delCircle,
    'click',
    function (e) {
      var t = thisFeature.apiObj.getPath();
      for (j = 0; j < t.getLength(); j++) {
        var o = t.getAt(j);
        isPointInCircle(delCircle, o) &&
        t.removeAt(j)
      }
      thisFeature.apiObj.setPath(t)
    }
  )
}
function isPointInCircle(e, t) {
  var o = e.getCenter(),
  e = e.getRadius();
  return google.maps.geometry.spherical.computeDistanceBetween(o, t) <= e
}
function delEnclosed(e) {
  for (i = 0; i < geoJsonFile.polyFeatures.length; i++) {
    var t = geoJsonFile.polyFeatures[i].apiObj.getPath(),
    o = !0;
    for (j = 0; j < t.getLength(); j++) {
      var n = t.getAt(j);
      if (!e.contains(n)) {
        o = !1;
        break
      }
    }
    o &&
    (
      geoJsonFile.polyFeatures[i].apiObj.setMap(null),
      geoJsonFile.polyFeatures.splice(i, 1),
      --i
    )
  }
  for (i = 0; i < geoJsonFile.lineFeatures.length; i++) {
    t = geoJsonFile.lineFeatures[i].apiObj.getPath(),
    o = !0;
    for (j = 0; j < t.getLength(); j++) {
      n = t.getAt(j);
      if (!e.contains(n)) {
        o = !1;
        break
      }
    }
    o &&
    (
      geoJsonFile.lineFeatures[i].apiObj.setMap(null),
      geoJsonFile.lineFeatures.splice(i, 1),
      --i
    )
  }
}
function searchFiles(e) {
  post2PHP(
    'searchFiles.php',
    'user=' + userID + '&searchText=' + e,
    function () {
      4 != x.readyState &&
      'complete' != x.readyState ||
      showGrid(getUserFiles(x.responseText))
    }
  )
}
function userFilesRes() {
  '98' === userID ? Ext.MessageBox.prompt(
    '',
    'Type in userID:',
    function (e, t) {
      'ok' == e &&
      post2PHP(
        'getUserFiles.php',
        'user=' + t,
        function () {
          4 != x.readyState &&
          'complete' != x.readyState ||
          showGrid(getUserFiles(x.responseText))
        }
      )
    }
  ) : alert('Not you')
}
function userFiles() {
  if (0 == userID) return signInWin(),
  signInWin(),
  void alert('You are not signed in. \n Sign in or Register');
  if ($('mymapsWin')) return $('mymapsWin').destroy(),
  void ($$('mymaps-div').style.backgroundColor = 'white');
  $$('mymaps-div').style.backgroundColor = 'orange';
  post2PHP(
    'getUserFiles.php',
    'user=' + userID,
    function () {
      4 != x.readyState &&
      'complete' != x.readyState ||
      showGrid(getUserFiles(x.responseText))
    }
  )
}
function getUserFiles(e) {
  var t = [],
  o = e.split('\n'),
  e = o[o.length - 1].split(',~');
  for (
    userName = e[0],
    teamName = e[1],
    adminName = e[2],
    secAdminName = e[3],
    i = 1;
    i < o.length;
    i++
  ) {
    var n = o[i].split(',~'),
    a = n[0],
    r = n[1],
    s = new Date(n[2]),
    l = new Date(n[3]),
    p = n[4],
    d = new Date(n[5]);
    'Invalid Date' == d &&
    (d = s);
    n[6];
    var c = new Date(n[7]);
    'Invalid Date' == c &&
    (c = new Date(n[2])).setDate(c.getDate() + 7);
    c = [
      a,
      r,
      s,
      d,
      l,
      p,
      c
    ];
    t.push(c)
  }
  return t
}
function fileGridAction(e) {
  var t,
  o = e.id;
  if (o.includes('togTeam')) userFiles();
   else if ((n = myGrid.getSelectionModel().getSelections()).length < 1) Ext.MessageBox.alert('', 'No file selected');
   else if (
    selectedFile = n[0].get('File'),
    selTitle = n[0].get('Title'),
    o.includes('opFile')
  ) openSavedFile(selectedFile),
  $('shapeWin') &&
  $('shapeWin').destroy();
   else if (o.includes('edtTitle')) Ext.MessageBox.prompt(
    '',
    'Enter new title:',
    function (e, t) {
      'ok' == e &&
      post2PHP(
        'updateTitle.php',
        'title=' + (t = t.replace(/[^\w\s]/gi, '')) + '&file=' + selectedFile,
        function () {
          4 != x.readyState &&
          'complete' != x.readyState ||
          userFiles()
        }
      )
    },
    [],
    !1,
    selTitle
  );
   else if (o.includes('del')) {
    var n = myGrid.getSelectionModel().getSelections(),
    a = [];
    for (i = 0; i < n.length; i++) a[i] = n[i].get('File');
    var e = JSON.stringify(a),
    r = (selectedFile, 'file=' + selectedFile + '&files=' + e),
    s = function () {
      4 != x.readyState &&
      'complete' != x.readyState ||
      userFiles()
    };
    Ext.MessageBox.confirm(
      '',
      'Sure to permanently delete this file?',
      function (e, t) {
        'yes' == e &&
        post2PHP('deleteFiles.php', r, s)
      }
    )
  } else o.includes('dnLoad') &&
  (
    t = selectedFile,
    post2PHP(
      'readGmpFile20.php',
      r = 'file=' + selectedFile + '&fileCode=nocode',
      s = function () {
        4 != x.readyState &&
        'complete' != x.readyState ||
        downLoadTextFile(x.responseText, t)
      }
    )
  )
}
function showGrid(e) {
  var t = new Ext.Toolbar({
    id: 'filegridtb',
    items: [
      {
        xtype: 'buttongroup',
        id: 'toolbarG',
        title: '<div style="color:blue;"></div>',
        defaults: {
          scale: 'small',
          handler: fileGridAction
        },
        items: [
          {
            id: 'togTeam',
            disabled: !0,
            text: '<b><font color=\'#230876\' size=\'2\'>My Team &nbsp</font></b>',
            enableToggle: !0,
            pressed: !1
          },
          {
            id: 'opFile',
            text: '<b><font color=\'#230876\' size=\'2\'>Open map &nbsp</font></b>'
          },
          {
            id: 'edtTitle',
            text: '<b><font color=\'#230876\' size=\'2\'>Edit Title &nbsp</font></b>'
          }
        ]
      },
      {
        xtype: 'buttongroup',
        title: '<div style="color:blue;"></div>',
        defaults: {
          scale: 'small',
          handler: fileGridAction
        },
        items: [
          {
            id: 'dnLoad',
            text: '<b><font color=\'#230876\' size=\'2\'>Download &nbsp</font></b>'
          },
          {
            id: 'delFile',
            text: '<b><font color=\'#230876\' size=\'2\'>Delete &nbsp</font></b>'
          }
        ]
      }
    ]
  });
  var o = new Ext.data.ArrayStore({
    fields: [
      {
        name: 'File'
      },
      {
        name: 'Title'
      },
      {
        name: 'dateCreated',
        type: 'date',
        dateFormat: 'n/j h:ia'
      },
      {
        name: 'lastSaved',
        type: 'date',
        dateFormat: 'n/j h:ia'
      },
      {
        name: 'lastViewed',
        type: 'date',
        dateFormat: 'n/j h:ia'
      },
      {
        name: 'TotalViews'
      },
      {
        name: 'paidUntil',
        type: 'date',
        dateFormat: 'n/j h:ia'
      }
    ]
  });
  o.loadData(e),
  o.sort('lastViewed', 'DESC'),
  myGrid = new Ext.grid.GridPanel({
    id: 'fileGrid',
    columnLines: !0,
    cls: 'custom-grid',
    tbar: t,
    store: o,
    columns: [
      {
        header: 'File name',
        width: 120,
        sortable: !0,
        renderer: function (e) {
          var t = e.split('.') [1];
          return 'gmp' == t ? '<span style="color:green;">' + e + '</span>' : 'json' == t ? '<span style="color:blue;">' + e + '</span>' : 'kml' == t ||
          'geojson' == t ? '<span style="color:red;">' + e + '</span>' : e
        },
        dataIndex: 'File'
      },
      {
        id: 'company',
        header: 'Map title',
        width: 200,
        editable: !0,
        sortable: !0,
        renderer: function (e) {
          return '<b>' + e + '</b>'
        },
        dataIndex: 'Title'
      },
      {
        header: 'Date created',
        width: 75,
        sortable: !0,
        renderer: Ext.util.Format.dateRenderer('d/m/Y'),
        dataIndex: 'dateCreated'
      },
      {
        header: 'Last saved',
        width: 75,
        sortable: !0,
        renderer: Ext.util.Format.dateRenderer('d/m/Y'),
        dataIndex: 'lastSaved'
      },
      {
        header: 'Last viewed',
        width: 78,
        sortable: !0,
        renderer: Ext.util.Format.dateRenderer('d/m/Y'),
        dataIndex: 'lastViewed'
      },
      {
        header: 'Views',
        width: 50,
        sortable: !0,
        dataIndex: 'TotalViews'
      }
    ],
    stripeRows: !0,
    style: 'font-weight: bold',
    autoExpandColumn: 'company',
    height: 500,
    width: 800,
    listeners: {
      rowdblclick: function (e, t, o) {
        var n = e.getStore().getAt(t).get('File');
        mapTitle = e.getStore().getAt(t).get('Title');
        e.getStore().getAt(t).get('dateCreated'),
        e.getStore().getAt(t).get('lastViewed');
        t = e.getStore().getAt(t).get('paidUntil') - new Date,
        Math.ceil(t / 86400000);
        openSavedFile(n)
      }
    },
    stateful: !0,
    stateId: 'grid'
  });
  o = new Ext.Button({
    text: 'Search',
    columnWidth: 0.2,
    x: 20,
    handler: function () {
      searchFiles($('serTxt').getValue())
    }
  }),
  new Ext.FormPanel({
    frame: !0,
    y: 100,
    autoHeight: !0,
    items: [
      {
        xtype: 'textfield',
        emptyText: 'type in search text',
        id: 'serTxt',
        selectOnFocus: !0,
        allowBlank: !0,
        fieldLabel: '<b><font color=\'#230876\' size=\'2\'>Search titles &nbsp</font></b>'
      },
      o
    ]
  });
  $('mymapsWin') &&
  $('mymapsWin').destroy();
  var n = new Ext.Window({
    frame: !0,
    id: 'mymapsWin',
    layout: 'fit',
    closable: !0,
    buttonAlign: 'center',
    items: [
      myGrid
    ],
    listeners: {
      close: function () {
        $$('mymaps-div').style.backgroundColor = 'white'
      }
    },
    buttons: [
      {
        text: 'Close',
        handler: function () {
          n.close(),
          $$('mymaps-div').style.backgroundColor = 'white'
        }
      }
    ]
  });
  n.show()
}
function updateFileName() {
  $$('titleDiv').textContent = mapTitle;
  var e = $$(mp.getDiv().id).offsetWidth / 2 - $$('titleDiv').offsetWidth / 2,
  e = Math.round(e);
  $$('titleDiv').style.left = e + 'px',
  $$('titleDiv').style.visibility = 'visible'
}
function togFileLabel() {
  var e;
  e = $$('file2saveID').innerHTML.includes(file2save) ? mapTitle : file2save,
  $$('file2saveID').innerHTML = e
}
function baseTree() {
  rc('treeJson') &&
  (treeJsonFile = rc('treeJson'));
  var e = new Ext.menu.Menu({
    items: [
      '-',
      {
        id: 'retro',
        text: '<b><font color=\'#230876\' size=\'2\'>Retro map &nbsp</font></b>'
      },
      {
        id: 'night',
        text: '<b><font color=\'#230876\' size=\'2\'>Night map &nbsp</font></b>'
      },
      {
        id: 'auber',
        text: '<b><font color=\'#230876\' size=\'2\'>Auber map &nbsp</font></b>'
      }
    ],
    listeners: {
      itemclick: function (e) {
        e.parentMenu.contextNode;
        switch (e.id) {
          case 'retro':
            mp.setMapTypeId('retro_map');
            break;
          case 'night':
            mp.setMapTypeId('night_map');
            break;
          case 'auber':
            mp.setMapTypeId('auber_map')
        }
      }
    }
  });
  return new Ext.tree.TreePanel({
    id: 'treeBase',
    height: 110,
    width: 300,
    useArrows: !0,
    autoScroll: !0,
    border: !0,
    y: 100,
    bodyStyle: 'background:#f1f1f1',
    animate: !0,
    enableDD: !0,
    containerScroll: !0,
    rootVisible: !1,
    text: 'Map layers',
    root: {
      nodeType: 'async'
    },
    dataUrl: './js/base-maps-25.json',
    contextMenu: e,
    listeners: {
      click: treeBaseClick,
      contextmenu: function (e, t) {
        e.select();
        var o = e.getOwnerTree().contextMenu;
        'strMap' == (o.contextNode = e).id &&
        o.showAt(t.getXY())
      }
    }
  })
}
function mobWestTree() {
  rc('treeJson') &&
  (treeJsonFile = rc('treeJson'));
  var e = new Ext.menu.Menu({
    items: [
      '-',
      {
        id: 'retro',
        text: '<b><font color=\'#230876\' size=\'2\'>Retro map &nbsp</font></b>'
      },
      {
        id: 'night',
        text: '<b><font color=\'#230876\' size=\'2\'>Night map &nbsp</font></b>'
      },
      {
        id: 'auber',
        text: '<b><font color=\'#230876\' size=\'2\'>Auber map &nbsp</font></b>'
      }
    ],
    listeners: {
      itemclick: function (e) {
        e.parentMenu.contextNode;
        switch (e.id) {
          case 'retro':
            mp.setMapTypeId('retro_map');
            break;
          case 'night':
            mp.setMapTypeId('night_map');
            break;
          case 'auber':
            mp.setMapTypeId('auber_map')
        }
      }
    }
  });
  return new Ext.tree.TreePanel({
    id: 'treeBase',
    height: 500,
    width: 300,
    useArrows: !0,
    autoScroll: !0,
    bodyStyle: 'border:0',
    containerScroll: !0,
    rootVisible: !1,
    text: 'Map layers',
    root: {
      nodeType: 'async'
    },
    dataUrl: './js/mob-west-menu.json',
    contextMenu: e,
    listeners: {
      click: treeBaseClick,
      contextmenu: function (e, t) {
        e.select();
        var o = e.getOwnerTree().contextMenu;
        'strMap' == (o.contextNode = e).id &&
        o.showAt(t.getXY())
      }
    }
  })
}
function baseLegendTree() {
  return new Ext.tree.TreePanel({
    id: 'legendTree',
    width: 300,
    bodyStyle: 'border:0',
    iconCls: 'x-tree-icon',
    enableDD: !0,
    rootVisible: !1,
    text: 'Map layers',
    frame: !0,
    root: {
      nodeType: 'async'
    },
    listeners: {
      click: treeBaseClick
    }
  })
}
function treeBaseClick(e) {
  switch (e.id) {
    case 'satMap':
      mapType = 'Satellite';
      break;
    case 'strMap':
      mapType = 'Street',
      setMaptype();
      break;
    case 'hybMap':
      mapType = 'Hybrid';
      break;
    case 'relMap':
      mapType = 'Relief';
      break;
    case 'bnkMap':
      mapType = 'Blank',
      blankLayerInfo();
      break;
    case 'tracMyL':
      var t;
      e.text.includes('Start tracking') ? (
        t = e.text.replace('Start tracking', 'Stop tracking'),
        e.setText(t),
        setInterval(updateLocation, 30000)
      ) : (
        t = e.text.replace('Stop tracking', 'Start tracking'),
        e.setText(t),
        clearInterval(setInterval(updateLocation, 30000))
      );
      break;
    case 'panMyL':
      mp.setCenter(currentLoc, 16);
      break;
    case 'shLegend':
      (
        'visible' == $$('legend-div').style.visibility ||
        'hidden' == $$('legend-div').style.visibility
      ) &&
      ($$('legend-div').style.visibility = 'hidden')
  }
  setMaptype()
}
function treeBaseCheckChange(e, t) {
  t ||
  e.getUI().toggleCheck(!0)
}
function treeDblClick(e) {
  e.isLeaf()
}
function treeClick(e) {
  e.text.includes('#230876') ? e.attributes.checked ? e.getUI().toggleCheck(!1) : e.getUI().toggleCheck(!0) : Ext.MessageBox.confirm(
    '',
    'Stop editing this layer?',
    function (e) {
      'yes' == e &&
      (clearLegend(), saveEditNode(), file2save = '', startOver())
    }
  )
}
function treeCheckChange(e, t) {
  var o,
  n;
  e.text.includes('#230876') &&
  (
    jsonRead(e.id),
    'gmp' === (n = (o = getFileName(e)).split('.') [1]) ? t ? (overlayGMP(e), legendJson.file = o) : (removeLayer(e), o == legendJson.file && clearLegend()) : 'kml' === n &&
    (
      n = new google.maps.KmlLayer({
        url: rootUrl + '/links/' + o
      }),
      t ? (n.setMap(mp), setNodeFile(e.id, [
        n,
        'file=' + o
      ])) : jsonRead(e.id) [0].setMap()
    )
  )
}
function setNodeFile(e, t) {
  for (i = 0; i < jsonObj.length; i++) for (j = 0; j < jsonObj[i].children.length; j++) jsonObj[i].children[j].id == e &&
  (jsonObj[i].children[j].file = t)
}
function getFileNameFromID(e) {
  var t = jsonRead(e),
  e = t;
  return 'object' == typeof t ? e = (e = t[t.length - 1]).split('=') [1] : t.startsWith('[') &&
  (e = e.split('=') [1]),
  e
}
function dropKML(e, t) {
  var o = Ext.getCmp('treePan').getRootNode(),
  n = randomString(5);
  return o.appendChild({
    id: n,
    iconCls: 'x-tree-icon',
    text: '<font color=\'#230876\' size=\'2\'>' + t + '</font>',
    file: 'file3',
    leaf: !0,
    checked: !1
  }),
  tree2Json(),
  setNodeFile(n, e),
  tree2Json(),
  saveJsonObj(),
  n
}
function tree2Json() {
  var e = Ext.getCmp('treePan'),
  t = (e.root.childNodes.length, '[');
  preIsleaf = !1;
  var o = 0;
  for (
    e.getRootNode().cascade(
      function (e) {
        preIsleaf = e.isLeaf() ? (preIsleaf ? t = t + ',' + leafJson(e) : t += leafJson(e), !0) : (
          e = e.text,
          preIsleaf ? t = t + ']},{"text":"' + e + '","cls": "x-tree-noicon" ,"singleClickExpand": true, "children": [' : 0 < o &&
          (
            t = t + '{"text":"' + e + '","cls": "x-tree-noicon" ,"singleClickExpand": true, "children": ['
          ),
          !1
        ),
        o += 1
      }
    ),
    t = (t += ']}]').replace('#efo726', '#230876');
    t.includes('<b>');
  ) t = t.replace('<b>', '');
  for (; t.includes('</b>'); ) t = t.replace('</b>', '');
  jsonObj = JSON.parse(t);
  JSON.stringify(jsonObj);
  return t
}
function leafJson(e) {
  var t = (t = e.text).replace('<b>', '').replace('</b>', ''),
  o = jsonRead(e.id);
  return '{"text":"' + t + '","id":"' + e.id + '","file":"' + o + '","checked": false,"cls": "x-tree-noicon","leaf":' + e.leaf + '}'
}
function ins2Tree(e, t) {
  'json' != e.split('.') [1] ? (
    e = ',{"text":"' + ('<font color=\'#230876\' size=\'2\'>' + t + '</font>') + '","id":"' + randomString(5) + '","file":"' + e + '","checked": false,"cls": "x-tree-noicon","leaf": true }]}]',
    postContent(
      tree2Json().replace(']}]', e),
      'savejson.php',
      treeJsonFile,
      function () {
        4 != x.readyState &&
        'complete' != x.readyState ||
        showWestPanel()
      }
    )
  ) : alert('This file type cannot be added to west panel')
}
function saveJsonObj() {
  'default.json' == treeJsonFile &&
  cc('treeJson', treeJsonFile = randomString(10) + '.json', 2000),
  tjsonFile = treeJsonFile;
  postContent(
    tree2Json(),
    'savejson.php',
    treeJsonFile,
    function () {
      var e;
      4 != x.readyState &&
      'complete' != x.readyState ||
      (
        rc('treeJson') &&
        (e = rc('treeJson')),
        treeJsonFile !== e &&
        Ext.MessageBox.confirm(
          '',
          'Saved. Set this project as deafault fault?',
          function (e) {
            'yes' == e &&
            cc('treeJson', treeJsonFile, 2000)
          }
        )
      )
    }
  )
}
function readProject() {
  file = 'file=' + treeJsonFile,
  x = xm(),
  null != x &&
  (
    x.open('POST', 'readproject.php', !0),
    x.onreadystatechange = function () {
      4 != x.readyState &&
      'complete' != x.readyState ||
      (jsonObj = JSON.parse(x.responseText))
    },
    x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'),
    x.send(file)
  )
}
function jsonRead(e) {
  var t = 'Default';
  for (i = 0; i < jsonObj.length; i++) for (j = 0; j < jsonObj[i].children.length; j++) if (jsonObj[i].children[j].id == e) {
    t = jsonObj[i].children[j].file;
    break
  }
  return t
}
function getFileName(e) {
  var t = jsonRead(e.id),
  e = t;
  return 'object' == typeof t ? e = (e = t[t.length - 1]).split('=') [1] : t.startsWith('[') &&
  (e = e.split('=') [1]),
  e
}
function mergeChecked(e) {
  Ext.getCmp('treePan').getRootNode().cascade(
    function (e) {
      e.isLeaf() &&
      e.attributes.checked &&
      (selelctedNodes[selelctedNodes.length] = e.id)
    }
  );
  var t = '';
  for (k = 0; k < selelctedNodes.length; k++) {
    for (nodeID = selelctedNodes[k], i = 0; i < jsonObj.length; i++) for (j = 0; j < jsonObj[i].children.length; j++) if (jsonObj[i].children[j].id == nodeID) {
      t = jsonObj[i].children[j].file;
      break
    }
    var o = t,
    n = o;
    'object' == typeof o ? n = (n = o[o.length - 1]).split('=') [1] : o.startsWith('[') &&
    (n = n.split('=') [1]),
    mergeGMPs(n),
    saveEdits()
  }
}
function overlayGMP(t) {
  var o = 'file=' + (o = getFileName(t));
  x = xm(),
  null != x &&
  (
    x.open('POST', 'readGmpFile20.php', !0),
    x.onreadystatechange = function () {
      var e;
      4 != x.readyState &&
      'complete' != x.readyState ||
      (
        (e = editGmapGIS(x.responseText, !1)).push(o),
        setNodeFile(t.id, e)
      )
    },
    x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'),
    x.send(o)
  )
}
function removeLayer(e) {
  var t,
  o = jsonRead(e.id);
  for (i = 0; i < o.length - 1; i++) 'object' == typeof o[i].apiObj ? o[i].apiObj.setMap() : $$(t = o[i].apiObj).parentNode.removeChild($$(t))
}
function unCheckAll() {
  var e = Ext.getCmp('treePan');
  e.getRootNode();
  e.getRootNode().cascade(
    function (e) {
      e.isLeaf() &&
      e.attributes.checked &&
      e.getUI().toggleCheck(!1)
    }
  )
}
function editDrawings(e) {
  saveEditNode();
  var t,
  o = getFileName(e),
  n = o.split('.') [1];
  'gmp' === n ? (
    t = (
      t = $('edit-draw').text.replace('Edit drawings', 'Stop editing')
    ).replace('#230876', '#efo726'),
    $('edit-draw').setText(t),
    file2save = o,
    Ext.getCmp('treePan').getRootNode(),
    t = e.text.replace('#230876', '#efo726'),
    e.setText(t),
    o = 'file=' + o,
    x = xm(),
    null != x &&
    (
      x.open('POST', 'readGmpFile20.php', !0),
      x.onreadystatechange = function () {
        var e;
        4 != x.readyState &&
        'complete' != x.readyState ||
        (e = editGmapGIS(x.responseText, !0), setNodeFile(node.id, e))
      },
      x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'),
      x.send(o)
    )
  ) : 'kml' === n &&
  Ext.MessageBox.alert('', 'Sorry, KML files can not be edited.')
}
function saveEditNode() {
  var e = Ext.getCmp('treePan');
  e.getRootNode();
  e.getRootNode().cascade(
    function (e) {
      var t;
      e.isLeaf() &&
      e.text.includes('#efo726') &&
      (
        t = e.text.replace('#efo726', '#230876'),
        e.setText(t),
        t = (
          t = $('edit-draw').text.replace('Stop editing', 'Edit drawings')
        ).replace('#efo726', '#230876'),
        $('edit-draw').setText(t),
        saveEdits(file2save)
      )
    }
  )
}
function getEditNode() {
  var e = Ext.getCmp('treePan');
  e.getRootNode();
  e.getRootNode().cascade(
    function (e) {
      if (
        e.isLeaf() &&
        (
          e.attributes.checked &&
          (e.getUI().toggleCheck(!1), e.text.includes('#efo726'))
        )
      ) return e.id
    }
  )
}
function post2PHP(e, t, o) {
  x = xm(),
  null != x ? (
    x.open('POST', e, !0),
    x.onreadystatechange = o,
    x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'),
    x.send(t)
  ) : alert('Error: Browser does not support HTTP Request')
}
function saveEdits(e, t, o) {
  '' == o &&
  (o = randomString(11));
  var n = saveJsonGmapFile(),
  o = 'user=' + userID + '&file=' + e + '&title=' + t + '&fileCode=' + o + '&content=' + n;
  5 < n.length ? (
    Ext.example.msg(' ', 'File saved successfully!'),
    post2PHP(
      'saveMapFile20-2.php',
      o,
      function () {
        4 != x.readyState &&
        'complete' != x.readyState ||
        updateFileName()
      }
    )
  ) : alert('No drawings ! \nAt least place a marker')
}
function getJsonObjContent() {
  var e = geoJsonFile,
  t = (getShapeCoordinates(e.polyFeatures[0].apiObj), e.polyFeatures);
  for (i = 0; i < t.length; i++) {
    t[i].geometry.coordinates = getShapeCoordinates(t[i].apiObj);
    JSON.stringify(t[i])
  }
  e.polyFeatures[0].geometry.coordinates,
  JSON.stringify(e)
}
function bubblePanel(e) {
  destroyContexMenu();
  var t = fromLatLngToPixels(clickLatlng = e);
  Ext.ux.BubblePanel = Ext.extend(Ext.Panel, {
    baseCls: 'x-bubble',
    frame: !0
  });
  e = new Ext.ux.BubblePanel({
    bodyStyle: 'padding-left: 8px;color: #0d2a59',
    html: '<h3>Ext.ux.BubblePaneloooooooooooooooooooooooooooooooooooooooooo</h3',
    width: 200,
    autoHeight: !0
  });
  new Ext.Window({
    frame: !1,
    x: t.x,
    y: t.y,
    id: 'Coggkgggk',
    width: 200,
    height: 230,
    layout: 'fit',
    closable: !1,
    items: [
      e
    ]
  }).show()
}
function downLoadEditFile(o) {
  gmpFileSave();
  var n = file2save,
  i = file2save;
  file = 'file=' + n,
  x = xm(),
  null != x &&
  (
    x.open('POST', 'readGmpFile20.php', !0),
    x.onreadystatechange = function () {
      if (4 == x.readyState || 'complete' == x.readyState) {
        var e = '',
        t = n.split('.');
        if ('gmp' == t[1]) switch (o.id) {
          case 'savegmp':
            e = x.responseText;
            break;
          case 'savekml':
            e = saveKML(x.responseText),
            i = t[0] + '.kml';
            break;
          case 'savegeojson':
            e = saveJsonGmapFile(x.responseText),
            i = t[0] + '.json';
            break;
          case 'dnCSV':
            e = saveGeoJson(x.responseText),
            i = t[0] + '.csv'
        }
        downLoadTextFile(e, i)
      }
    },
    x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'),
    x.send(file)
  )
}
function downLoadTextFile(e, t) {
  var o = new Ext.Window({
    title: '',
    frame: !0,
    y: 150,
    id: 'shapeWin2',
    width: 50,
    layout: 'fit',
    closable: !1,
    buttonAlign: 'center',
    items: [
      {
        id: 'htmlID',
        html: [
          '<a id=dl download="' + t + '"></a>'
        ]
      }
    ]
  });
  o.show(),
  $$('dl').href = 'data:text/plain,' + encodeURIComponent(e),
  $$('dl').click(),
  o.close(),
  Ext.MessageBox.alert('', 'File: ' + t + ' downloaded ')
}
function fileExists(e) {
  if (e) {
    var t = new XMLHttpRequest;
    return t.open('GET', e, !1),
    t.send(),
    200 == t.status
  }
  return !1
}
function supportWin(e) {
  var t;
  Ext.getCmp('mytb').disable(),
  $('winSupp') ? $('abtTabPanel').setActiveTab(parseInt(e)) : (
    t = new Ext.FormPanel({
      labelAlign: 'top',
      buttonAlign: 'center',
      frame: !0,
      bodyStyle: 'padding:5px 5px 0',
      width: 910,
      items: [
        {
          layout: 'column',
          items: [
            {
              columnWidth: 0.5,
              layout: 'form',
              items: [
                {
                  xtype: 'textfield',
                  fieldLabel: 'Name',
                  id: 'conFnam',
                  name: 'first',
                  anchor: '95%'
                },
                {
                  xtype: 'textfield',
                  fieldLabel: 'E-mail',
                  id: 'conEm',
                  name: 'email',
                  vtype: 'email',
                  anchor: '95%'
                }
              ]
            }
          ]
        },
        {
          xtype: 'textarea',
          id: 'conComm',
          fieldLabel: 'Message',
          height: 360,
          anchor: '98%'
        }
      ],
      buttons: [
        {
          text: 'Send',
          handler: sendContactForm
        }
      ]
    }),
    new Ext.FormPanel({
      frame: !0,
      autoHeight: !0,
      items: [
        {
          xtype: 'panel',
          autoScroll: !0,
          hideLabel: !0,
          readOnly: !0,
          flex: 1,
          autoLoad: {
            url: './about_gmapgis.html',
            script: !0
          }
        }
      ]
    }),
    new Ext.FormPanel({
      frame: !0,
      autoHeight: !0,
      items: [
        {
          xtype: 'panel',
          autoScroll: !0,
          hideLabel: !0,
          readOnly: !0,
          flex: 1,
          autoLoad: {
            url: './examples_gmapgis.html',
            script: !0
          }
        }
      ]
    }),
    new Ext.FormPanel({
      frame: !0,
      autoHeight: !0,
      items: [
        {
          xtype: 'panel',
          autoScroll: !0,
          hideLabel: !0,
          readOnly: !0,
          flex: 1,
          autoLoad: {
            url: './help_gmapgis.html',
            script: !0
          }
        }
      ]
    }),
    t = new Ext.TabPanel({
      id: 'abtTabPanel',
      region: 'center',
      margins: '3 3 3 0',
      activeTab: parseInt(e),
      defaults: {
        autoScroll: !0
      },
      items: [
        {
          title: '<b><font color=\'#230876\' size=\'2\'>Contact &nbsp</font></b>',
          items: [
            t
          ]
        }
      ]
    }),
    new Ext.Window({
      id: 'winSupp',
      closable: !0,
      width: 930,
      height: 600,
      plain: !0,
      layout: 'fit',
      listeners: {
        close: function (e) {
          Ext.getCmp('mytb').enable()
        }
      },
      items: [
        t
      ]
    }).show()
  )
}
function settingsWin() {
  destroyContexMenu(),
  $('winSett') &&
  $('winSett').destroy();
  var e,
  t;
  t ||
  (
    e = new Ext.FormPanel({
      frame: !0,
      labelWidth: 110,
      width: 600,
      bodyStyle: 'padding:0 10px 0;',
      items: [
        {
          xtype: 'fieldset',
          title: 'Measurment units',
          autoHeight: !0,
          items: [
            {
              xtype: 'radiogroup',
              fieldLabel: 'Distance',
              items: [
                {
                  boxLabel: 'Meters',
                  id: 'metric',
                  name: 'rb-auto',
                  inputValue: 1
                },
                {
                  boxLabel: 'Foot, yards, miles',
                  id: 'impe',
                  name: 'rb-auto',
                  inputValue: 2
                }
              ]
            },
            {
              xtype: 'radiogroup',
              itemCls: 'x-check-group-alt',
              fieldLabel: 'Area',
              allowBlank: !1,
              id: 'iRadios',
              anchor: '95%',
              items: [
                {
                  columnWidth: '.3',
                  items: [
                    {
                      boxLabel: 'Sq meters',
                      id: 'sqm',
                      name: 'rb-cust',
                      inputValue: 'sqm'
                    }
                  ]
                },
                {
                  columnWidth: '.3',
                  items: [
                    {
                      boxLabel: 'Sq ft',
                      id: 'sqft',
                      name: 'rb-cust',
                      inputValue: 'sqft',
                      checked: !1
                    }
                  ]
                },
                {
                  columnWidth: '.3',
                  items: [
                    {
                      boxLabel: 'Acres',
                      id: 'acre',
                      name: 'rb-cust',
                      inputValue: 'acr',
                      checked: !0
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          xtype: 'fieldset',
          title: 'Save defaults',
          autoHeight: !0,
          layout: 'form',
          items: [
            {
              xtype: 'checkboxgroup',
              itemCls: 'x-check-group-alt',
              columns: 1,
              items: [
                {
                  boxLabel: 'Current location as start up',
                  id: 'curLo',
                  name: 'cb-col-1',
                  checked: !0
                },
                {
                  boxLabel: 'Polygon and line styles',
                  id: 'svSty',
                  name: 'cb-col-2',
                  checked: !0
                },
                {
                  boxLabel: 'Save coordinates with sub-millimeter precision',
                  id: 'precision',
                  name: 'cb-col-2',
                  checked: !1
                }
              ]
            }
          ]
        }
      ]
    }),
    (
      t = new Ext.Window({
        layout: 'fit',
        id: 'winSett',
        buttonAlign: 'center',
        width: 600,
        height: 320,
        y: 100,
        items: [
          e
        ],
        buttons: [
          {
            text: 'Save',
            handler: settSave
          },
          {
            text: 'Close',
            handler: function () {
              t.close()
            }
          }
        ]
      })
    ).show(),
    $(miles ? 'impe' : 'metric').setValue(!0),
    $('acr' == areaUnits ? 'acre' : 'sqft' == areaUnits ? 'sqft' : 'sqm').setValue(!0),
    9 === precision &&
    Ext.getCmp('precision').setValue(!0)
  )
}
function settSave() {
  miles = !!$('impe').checked,
  $('curLo').checked &&
  (
    startpoint = mp.getCenter(),
    startzoom = mp.getZoom(),
    cc('mc', startpoint + '^' + startzoom, 2000)
  ),
  areaUnits = $('iRadios').items.items[0].getGroupValue(),
  $('precision').checked &&
  (precision = 9),
  $('svSty').checked &&
  (
    cc('areaUnits', areaUnits, 2000),
    cc('disUnits', miles, 2000),
    cc('polySty', defPolySty, 2000),
    cc('lineSty', defLineSty, 2000)
  ),
  $('winSett').close()
}
function iconWin() {
  destroyContexMenu();
  var e = new Ext.FormPanel({
    frame: !0,
    y: 100,
    autoHeight: !0,
    width: 700,
    items: [
      {
        xtype: 'panel',
        autoScroll: !0,
        y: 100,
        width: 700,
        height: 500,
        hideLabel: !0,
        readOnly: !0,
        flex: 1,
        autoLoad: {
          url: './edit_about_gmapgis.html',
          script: !0
        }
      }
    ]
  }),
  t = t ||
  new Ext.Window({
    frame: !0,
    x: 10,
    y: 150,
    layout: 'fit',
    closable: !0,
    closeAction: 'hide',
    buttonAlign: 'center',
    items: [
      e
    ],
    buttons: [
      {
        text: 'Close',
        handler: function () {
          t.close()
        }
      }
    ]
  });
  t.show()
}
function onClickFAQ(e) {
  e = e.nextElementSibling;
  e.style.maxHeight ? e.style.maxHeight = null : e.style.maxHeight = e.scrollHeight + 'px'
}
function iconClick(e) {
  var t = Url2Image(e.src);
  thisFeature.apiObj.setIcon(t),
  thisFeature.properties.style = e.src
}
function iconMousOver(e) {
  alert(e.src)
}
function faqWin() {
  var e,
  t;
  destroyContexMenu(),
  t ||
  (
    e = new Ext.FormPanel({
      frame: !0,
      y: 100,
      autoHeight: !0,
      width: 550,
      items: [
        {
          xtype: 'panel',
          autoScroll: !0,
          y: 100,
          width: 500,
          height: 500,
          hideLabel: !0,
          readOnly: !0,
          flex: 1,
          autoLoad: {
            url: './FAQ.html',
            script: !0
          }
        }
      ]
    }),
    t = new Ext.Window({
      frame: !0,
      x: 10,
      y: 150,
      width: 550,
      layout: 'fit',
      closable: !1,
      closeAction: 'hide',
      buttonAlign: 'center',
      items: [
        e
      ],
      buttons: [
        {
          text: 'Close',
          handler: function () {
            $('faq').enable(),
            t.close()
          }
        }
      ]
    })
  ),
  t.show()
}
function getLineSizeSpinner() {
  var o = randomString(3);
  return new Ext.ux.form.SpinnerField({
    fieldLabel: 'Size',
    id: o,
    width: 85,
    minValue: 1,
    maxValue: 10,
    value: getLineSz(),
    listeners: {
      spin: function (e, t) {
        lineSz('fg', $(o).getValue())
      }
    }
  })
}
function getLineOpacitySpinner() {
  var o = randomString(3);
  return new Ext.ux.form.SpinnerField({
    fieldLabel: 'Opacity',
    id: o,
    width: 85,
    minValue: 0,
    maxValue: 1,
    incrementValue: 0.1,
    value: getLineOpacity(),
    listeners: {
      spin: function (e, t) {
        lineOpacity($(o).getValue())
      }
    }
  })
}
function getFillOpacitySpinner() {
  var o = randomString(3);
  return new Ext.ux.form.SpinnerField({
    fieldLabel: 'Opacity',
    id: o,
    width: 85,
    minValue: 0,
    maxValue: 1,
    incrementValue: 0.1,
    value: getFillOpacity(),
    listeners: {
      spin: function (e, t) {
        fillOpacity($(o).getValue())
      }
    }
  })
}
function mapLineWin() {
  destroyContexMenu(),
  $('winPoly') &&
  $('winPoly').destroy();
  var e = new Ext.menu.ColorMenu({
    text: 'colorMenu',
    icon: 'color',
    handler: function (e, t) {
      var o = splitSty();
      o[0] = '#' + t,
      updateStyle(o)
    }
  }),
  e = (
    new Ext.Slider({
      fieldLabel: 'Opacity',
      width: 100,
      minValue: 0,
      maxValue: 100,
      increment: 10,
      value: 50,
      plugins: new Ext.ux.SliderTip,
      listeners: {
        changecomplete: function (e, t) {
          lineOp(e, t)
        }
      }
    }),
    new Ext.Slider({
      fieldLabel: 'Size',
      width: 100,
      id: 'lnszSl',
      minValue: 0,
      maxValue: 10,
      increment: 1,
      value: getLineSz(),
      clickHandler: function () {
      },
      plugins: new Ext.ux.SliderTip,
      listeners: {
        changecomplete: function (e, t) {
          lineSz(e, t)
        }
      }
    }),
    {
      xtype: 'fieldset',
      title: 'Select line style',
      autoHeight: !0,
      layout: 'column',
      defaults: {
        layout: 'form'
      },
      items: [
        {
          columnWidth: 0.3,
          items: [
            new Ext.Button({
              fieldLabel: 'Line',
              text: 'Color',
              iconCls: 'color',
              menu: e
            })
          ]
        },
        {
          columnWidth: 0.35,
          items: [
            getLineOpacitySpinner()
          ]
        },
        {
          columnWidth: 0.35,
          items: [
            getLineSizeSpinner()
          ]
        }
      ]
    }
  ),
  e = new Ext.FormPanel({
    labelWidth: 50,
    frame: !0,
    height: 400,
    width: 550,
    autoHeight: !0,
    items: [
      e
    ]
  }),
  t = new Ext.Window({
    layout: 'fit',
    title: '',
    closeable: !1,
    id: 'winPoly',
    buttonAlign: 'center',
    width: 500,
    height: 500,
    x: 60,
    y: 60,
    items: [
      e,
      {
        xtype: 'gmapwin',
        zoomLevel: 14,
        gmapType: 'map',
        mapConfOpts: [
          'enableScrollWheelZoom',
          'enableDoubleClickZoom',
          'enableDragging'
        ],
        mapControls: [
          'GSmallMapControl',
          'GMapTypeControl',
          'NonExistantControl'
        ]
      }
    ],
    buttons: [
      {
        text: 'Close',
        handler: function () {
          t.close()
        }
      }
    ]
  });
  t.show(),
  sampPoly(mapwin)
}
function mapWin() {
  destroyContexMenu(),
  $('winPoly') &&
  $('winPoly').destroy();
  var e,
  t = new Ext.menu.ColorMenu({
    text: 'colorMenu',
    handler: function (e, t) {
      var o = splitSty();
      o[3] = '#' + t,
      updateStyle(o)
    }
  }),
  o = new Ext.menu.ColorMenu({
    text: 'colorMenu',
    icon: 'color',
    handler: function (e, t) {
      var o = splitSty();
      o[0] = '#' + t,
      updateStyle(o)
    }
  }),
  t = (
    new Ext.Slider({
      fieldLabel: 'Opacity',
      labelWidth: 30,
      width: 100,
      minValue: 0,
      maxValue: 100,
      increment: 10,
      value: 50,
      plugins: new Ext.ux.SliderTip,
      listeners: {
        changecomplete: function (e, t) {
          fillOp(e, t)
        }
      }
    }),
    new Ext.Slider({
      fieldLabel: 'Opacity',
      width: 100,
      minValue: 0,
      maxValue: 100,
      increment: 10,
      value: 50,
      plugins: new Ext.ux.SliderTip,
      listeners: {
        changecomplete: function (e, t) {
          lineOp(e, t)
        }
      }
    }),
    new Ext.Slider({
      fieldLabel: 'Size',
      width: 100,
      id: 'lnszSl',
      minValue: 0,
      maxValue: 10,
      increment: 1,
      value: 2,
      clickHandler: function () {
      },
      plugins: new Ext.ux.SliderTip,
      listeners: {
        changecomplete: function (e, t) {
          lineSz(e, t)
        }
      }
    }),
    new Ext.Button({
      fieldLabel: 'Fill',
      text: 'Color',
      iconCls: 'color',
      menu: t
    })
  ),
  o = new Ext.Button({
    fieldLabel: 'Line',
    text: 'Color',
    iconCls: 'color',
    menu: o
  }),
  o = {
    xtype: 'fieldset',
    title: 'Select shape style',
    autoHeight: !0,
    layout: 'column',
    defaults: {
      layout: 'form'
    },
    items: [
      {
        columnWidth: 0.3,
        items: [
          t
        ]
      },
      {
        columnWidth: 0.7,
        items: [
          getFillOpacitySpinner()
        ]
      },
      {
        columnWidth: 0.3,
        items: [
          o
        ]
      },
      {
        columnWidth: 0.35,
        items: [
          getLineOpacitySpinner()
        ]
      },
      {
        columnWidth: 0.35,
        items: [
          getLineSizeSpinner()
        ]
      }
    ]
  },
  o = new Ext.FormPanel({
    labelWidth: 50,
    frame: !0,
    height: 400,
    width: 550,
    autoHeight: !0,
    items: [
      o
    ]
  });
  e ||
  (
    (
      e = new Ext.Window({
        layout: 'fit',
        title: '',
        closeable: !1,
        id: 'winPoly',
        buttonAlign: 'center',
        width: 500,
        height: 500,
        x: 60,
        y: 60,
        items: [
          o,
          {
            xtype: 'gmapwin',
            zoomLevel: 14,
            gmapType: 'map',
            mapConfOpts: [
              'enableScrollWheelZoom',
              'enableDoubleClickZoom',
              'enableDragging'
            ],
            mapControls: [
              'GSmallMapControl',
              'GMapTypeControl',
              'NonExistantControl'
            ]
          }
        ],
        buttons: [
          {
            text: 'Close',
            handler: function () {
              e.close()
            }
          }
        ]
      })
    ).show(),
    sampPoly(mapwin)
  )
}
function editProfWin() {
  var e,
  n,
  t;
  0 != userID ? (
    $('ConWin') &&
    $('ConWin').destroy(),
    e = new Ext.Panel({
      id: 'txtMsg',
      html: '  '
    }),
    e = new Ext.FormPanel({
      labelAlign: 'left',
      buttonAlign: 'center',
      y: 100,
      frame: !0,
      bodyStyle: 'padding:5px 5px 0',
      width: 505,
      height: 200,
      items: [
        {
          layout: 'column',
          items: [
            {
              columnWidth: 1,
              layout: 'form',
              items: [
                {
                  xtype: 'textfield',
                  y: 100,
                  fieldLabel: 'First Name',
                  id: 'fName',
                  name: 'email',
                  anchor: '95%'
                },
                {
                  xtype: 'textfield',
                  fieldLabel: 'Last name',
                  id: 'lName',
                  name: 'first',
                  anchor: '95%'
                },
                {
                  xtype: 'textfield',
                  fieldLabel: 'Api Key',
                  id: 'apiKey',
                  name: 'first',
                  anchor: '95%'
                },
                e
              ]
            }
          ]
        }
      ],
      buttons: [
        {
          text: 'Submit',
          handler: function () {
            var e = $('fName').getValue(),
            t = $('lName').getValue(),
            o = $('apiKey').getValue(),
            t = 'userID=' + userID + '&firstName=' + e + '&lastName=' + t + '&apiKey=' + o;
            x = xm(),
            null != x ? (
              x.open('POST', 'update.php', !0),
              x.onreadystatechange = function () {
                var e;
                4 != x.readyState &&
                'complete' != x.readyState ||
                (
                  userID = getParameter('userID', x.responseText),
                  userName = getParameter('userName', x.responseText),
                  o = getParameter('apiKey', x.responseText),
                  '' == userName &&
                  (userName = 'MyName'),
                  e = '<b><font color=\'#230876\' size=\'2\'>' + userName + ' &nbsp</font></b>',
                  $('userPro').setText(e),
                  $('sign').disable(),
                  cc('userName', userName, 2000),
                  cc('apiKey', o, 2000),
                  alert('Your profile updated'),
                  n.close()
                )
              },
              x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'),
              x.send(t)
            ) : alert('Error: Browser does not support HTTP Request')
          }
        }
      ]
    }),
    (
      n = new Ext.Window({
        layout: 'fit',
        title: '',
        closeable: !1,
        id: 'conWin',
        buttonAlign: 'center',
        width: 500,
        items: [
          e
        ]
      })
    ).show(),
    t = 'userID=' + userID,
    x = xm(),
    null != x ? (
      x.open('POST', 'getProfile.php', !0),
      x.onreadystatechange = function () {
        var e,
        t,
        o;
        4 != x.readyState &&
        'complete' != x.readyState ||
        x.responseText.includes('userID') &&
        (
          e = getParameter('firstName', x.responseText),
          t = getParameter('lastName', x.responseText),
          o = getParameter('apiKey', x.responseText),
          $('fName').setValue(e),
          $('lName').setValue(t),
          $('apiKey').setValue(o)
        )
      },
      x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'),
      x.send(t)
    ) : alert('Error: Browser does not support HTTP Request')
  ) : alert('Your are not signed in')
}
function signInWin() {
  $('conWin') &&
  $('conWin').destroy();
  var e = new Ext.Panel({
    id: 'txtMsg',
    html: ''
  }),
  e = new Ext.FormPanel({
    labelAlign: 'left',
    buttonAlign: 'center',
    y: 100,
    frame: !0,
    bodyStyle: 'padding:5px 5px 0',
    width: 505,
    height: 200,
    items: [
      {
        layout: 'column',
        items: [
          {
            columnWidth: 1,
            layout: 'form',
            items: [
              {
                xtype: 'textfield',
                y: 100,
                fieldLabel: 'E-mail',
                id: 'signEm',
                name: 'email',
                vtype: 'email',
                anchor: '95%'
              },
              {
                xtype: 'textfield',
                fieldLabel: 'Password',
                inputType: 'password',
                id: 'signPass',
                name: 'first',
                anchor: '95%'
              },
              e
            ]
          }
        ]
      }
    ],
    buttons: [
      {
        text: 'Sign in',
        handler: function () {
          var e = 'email=' + $('signEm').getValue() + '&password=' + $('signPass').getValue();
          x = xm(),
          null != x ? (
            x.open('POST', 'signin.php', !0),
            x.onreadystatechange = function () {
              var e;
              4 != x.readyState &&
              'complete' != x.readyState ||
              (
                x.responseText.includes('userID') ? (
                  userID = getParameter('userID', x.responseText),
                  '' == (userName = getParameter('userName', x.responseText)) &&
                  (userName = 'MyName'),
                  e = '<b><font color=\'#230876\' size=\'2\'>' + userName + ' &nbsp</font></b>',
                  $('userPro').setText(e),
                  $('sign').disable(),
                  $('regis').disable(),
                  $('chngPass').enable(),
                  $('signOut').enable(),
                  cc('userID', userID, 2000),
                  cc('userName', userName, 2000),
                  cc('apiKey', apiKey, 2000),
                  cc('treeJson', treeJsonFile, 2000),
                  t.close()
                ) : Ext.getCmp('txtMsg').update(x.responseText)
              )
            },
            x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'),
            x.send(e)
          ) : alert('Error: Browser does not support HTTP Request')
        }
      },
      {
        text: 'Forgot password ?',
        handler: forgotPassWin
      },
      {
        id: 'register',
        text: 'Register',
        handler: registerWin
      }
    ]
  }),
  t = new Ext.Window({
    layout: 'fit',
    title: '',
    closeable: !1,
    id: 'conWin',
    buttonAlign: 'center',
    width: 500,
    items: [
      e
    ]
  });
  t.show()
}
function activate() {
  var e = getParameterByName('code');
  getParameterByName('action');
  e &&
  post2PHP(
    'activate.php',
    'code=' + e,
    function () {
      4 != x.readyState &&
      'complete' != x.readyState ||
      (
        userID = getParameterByName('userID', x.responseText),
        userName = getParameterByName('userName', x.responseText),
        cc('userID', userID),
        cc('userName', userName),
        window.location.href = 'https://gmapgis.com/index.html'
      )
    }
  )
}
function chngPass() {
  var t = getParameterByName('code');
  var e = new Ext.Panel({
    id: 'txtMsgCh',
    html: '  <p>&nbsp;</p><h4 style="text-align: center;">    </h4>'
  }),
  e = new Ext.FormPanel({
    labelAlign: 'left',
    buttonAlign: 'center',
    y: 100,
    frame: !0,
    bodyStyle: 'padding:25px 15px 0',
    width: 450,
    height: 250,
    items: [
      {
        xtype: 'fieldset',
        autoHeight: !0,
        title: 'Change my password',
        items: [
          {
            xtype: 'textfield',
            fieldLabel: 'Password',
            inputType: 'password',
            id: 'signPassCh',
            name: 'first',
            anchor: '95%'
          },
          {
            xtype: 'textfield',
            fieldLabel: 'Retype ',
            inputType: 'password',
            id: 'retypePassCh',
            name: 'first',
            anchor: '95%'
          }
        ]
      },
      e
    ],
    buttons: [
      {
        text: 'Change password',
        handler: function () {
          var e = $('signPassCh').getValue();
          if (e != $('retypePassCh').getValue()) return Ext.getCmp('txtMsgCh').update(
            '<p>&nbsp;</p><h4 style="text-align: center;">Passowrds do not match. Type in again</h4>'
          ),
          $('signPass').setValue(''),
          void $('retypePass').setValue('');
          post2PHP(
            'changPass.php',
            'password=' + e + '&myID=' + userID + '&code=' + t,
            function () {
              4 != x.readyState &&
              'complete' != x.readyState ||
              (
                userID = getParameterByName('userID', x.responseText),
                userName = getParameterByName('userName', x.responseText),
                cc('userID', userID),
                cc('userName', userName),
                t ? window.location.href = 'https://gmapgis.com/' : (
                  Ext.getCmp('txtMsgCh').update(
                    '  <p>&nbsp;</p><h4 style="text-align: center;"> Password changed </h4>'
                  ),
                  $('ConWin').destroy(),
                  Ext.example.msg(' ', 'Password changed successfully!')
                )
              )
            }
          )
        }
      }
    ]
  });
  new Ext.Window({
    layout: 'fit',
    title: '',
    closeable: !1,
    id: 'ConWin',
    buttonAlign: 'center',
    width: 500,
    items: [
      e
    ]
  }).show()
}
function validateEmail(e) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())
}
function containsSpecial(e) {
  return !!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(e)
}
function registerWin() {
  $('conWin') &&
  $('conWin').destroy();
  var e = new Ext.Panel({
    id: 'txtMsg',
    html: '  <p>&nbsp;</p><h4 style="text-align: center;"> </h4>'
  }),
  e = new Ext.FormPanel({
    labelAlign: 'left',
    buttonAlign: 'center',
    y: 100,
    frame: !0,
    bodyStyle: 'padding:5px 5px 0',
    width: 300,
    height: 200,
    items: [
      {
        layout: 'column',
        items: [
          {
            columnWidth: 1,
            layout: 'form',
            items: [
              {
                xtype: 'textfield',
                y: 100,
                fieldLabel: 'First Name',
                id: 'firstNm',
                name: 'name',
                anchor: '95%'
              },
              {
                xtype: 'textfield',
                y: 100,
                fieldLabel: 'Last Name',
                id: 'lastNm',
                name: 'name',
                anchor: '95%'
              },
              {
                xtype: 'textfield',
                y: 100,
                fieldLabel: 'Email address',
                id: 'signEm',
                name: 'email',
                vtype: 'email',
                value: '',
                anchor: '95%'
              },
              e
            ]
          }
        ]
      }
    ],
    buttons: [
      {
        id: 'btnRegister',
        text: 'Register',
        handler: function () {
          Ext.getCmp('btnRegister').disable();
          var e,
          t,
          o,
          n = $('firstNm').getValue(),
          i = $('lastNm').getValue();
          containsSpecial(n) ? alert('Please only use alphanumeric characters in the user name') : containsSpecial(i) ? alert('Please only use alphanumeric characters in the password') : validateEmail(e = $('signEm').getValue()) ? (
            t = randomString(8),
            o = 'name=' + n + '&email=' + e + '&password=' + t + '&lastNm=' + i,
            x = xm(),
            null != x ? (
              x.open('POST', 'bmcd-register.php', !0),
              x.onreadystatechange = function () {
                4 != x.readyState &&
                'complete' != x.readyState ||
                (
                  userID = getParameter('userID', x.responseText),
                  '' == (userName = getParameter('userName', x.responseText)) &&
                  (userName = 'MyName'),
                  localStorage.setItem('userID', userID),
                  localStorage.setItem('userName', userName),
                  emailPassword(n = n + ' ' + i, e, t)
                )
              },
              x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'),
              x.send(o)
            ) : alert('Error: Browser does not support HTTP Request')
          ) : alert('Please type in valid email address')
        }
      }
    ]
  });
  new Ext.Window({
    layout: 'fit',
    title: '',
    closeable: !1,
    id: 'conWin',
    buttonAlign: 'center',
    width: 400,
    items: [
      e
    ]
  }).show()
}
function emailPassword(e, t, o) {
  function n() {
    var e;
    4 != x.readyState &&
    'complete' != x.readyState ||
    (
      $('conWin') &&
      $('conWin').destroy(),
      e = 'Your registration is complete and an auto-generated password has been emailed.<br><br>In case you do not receive the email, please note the following details for your future use:<br><br><b>Email:</b> ' + t + '<br><b>Password:</b> ' + o + '<br><br>You will be automatically signed in when you click OK.',
      Ext.Msg.show({
        msg: e,
        buttons: Ext.MessageBox.OK,
        icon: Ext.MessageBox.INFO,
        fn: function (e) {
          'ok' === e &&
          window.location.reload()
        }
      })
    )
  }
  var i = 'Hello  ' + e + ',\n\nYour GmapGIS account has been created successfully.\n\nPassword: ' + o + '\n\nUse your registered email address and the above auto-generated password to sign in when required.\n\nAfter signing in, you can change your password at any time from the User menu.\n\nBest regards,\nThe GmapGIS Team',
  a = 'name=' + e + '&emailAdd=' + t + '&content=' + i,
  e = 'bmcdEmailPassword.php';
  post2PHP(e, i, n),
  x = xm(),
  null != x ? (
    x.open('POST', e, !0),
    x.onreadystatechange = n,
    x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'),
    x.send(a)
  ) : alert('Error: Browser does not support HTTP Request')
}
function forgotPassWin() {
  $('conWin') &&
  $('conWin').destroy();
  var e = new Ext.Panel({
    id: 'txtMsg',
    html: '  <p>&nbsp;</p><h4 style="text-align: center;">Enter your email address</h4>'
  }),
  e = new Ext.FormPanel({
    labelAlign: 'left',
    buttonAlign: 'center',
    y: 100,
    frame: !0,
    bodyStyle: 'padding:5px 5px 0',
    width: 505,
    height: 200,
    items: [
      {
        layout: 'column',
        items: [
          {
            columnWidth: 1,
            layout: 'form',
            items: [
              {
                xtype: 'textfield',
                y: 100,
                fieldLabel: 'E-mail',
                id: 'signEm',
                name: 'email',
                vtype: 'email',
                anchor: '95%'
              },
              e
            ]
          }
        ]
      }
    ],
    buttons: [
      {
        id: 'btnForGot',
        text: 'Enter',
        handler: forGotPass
      }
    ]
  });
  new Ext.Window({
    layout: 'fit',
    title: '',
    closeable: !1,
    id: 'conWin',
    buttonAlign: 'center',
    width: 500,
    items: [
      e
    ]
  }).show()
}
function forGotPass() {
  post2PHP(
    'forgotPass.php',
    'email=' + $('signEm').getValue(),
    function () {
      4 != x.readyState &&
      'complete' != x.readyState ||
      (
        x.responseText.includes('success3157') ? (
          $('btnForGot').disable(),
          Ext.getCmp('txtMsg').update(
            '<p>&nbsp;</p><h4 style="text-align: center;">A password reset link has been sent to your email </h4>'
          )
        ) : x.responseText.includes('notregistered3157') &&
        Ext.getCmp('txtMsg').update(
          '<p>&nbsp;</p><h4 style="text-align: center;">This email address is not registered </h4>'
        )
      )
    }
  )
}
function contactWin() {
  alert('sgkfskgf');
  var e = new Ext.FormPanel({
    labelAlign: 'top',
    buttonAlign: 'center',
    frame: !0,
    bodyStyle: 'padding:5px 5px 0',
    width: 505,
    items: [
      {
        layout: 'column',
        items: [
          {
            columnWidth: 0.5,
            layout: 'form',
            items: [
              {
                xtype: 'textfield',
                fieldLabel: 'Name',
                id: 'conFnam',
                name: 'first',
                anchor: '95%'
              },
              {
                xtype: 'textfield',
                fieldLabel: 'E-mail',
                id: 'conEm',
                name: 'email',
                vtype: 'email',
                anchor: '95%'
              }
            ]
          }
        ]
      },
      {
        xtype: 'textarea',
        id: 'conComm',
        fieldLabel: 'Message',
        height: 290,
        anchor: '98%'
      }
    ]
  });
  new Ext.Window({
    layout: 'fit',
    title: '',
    closeable: !1,
    id: 'conWin',
    buttonAlign: 'center',
    width: 500,
    height: 500,
    items: [
      e
    ],
    buttons: [
      {
        text: 'Send',
        handler: sendContactForm
      }
    ]
  }).show()
}
function sendContactForm() {
  var e = $('conFnam').getValue(),
  t = $('conEm').getValue(),
  o = $('conComm').getValue();
  e &&
  t &&
  o ? (
    o = 'Name: ' + e + '\nEmail: ' + t + '\n\nComments:\n\n' + o + '\n\nUser ID: ' + userID,
    $('conComm').setValue(' '),
    $('conFnam').setValue(''),
    $('conEm').setValue(''),
    postEmail('bsbuttar@gmail.com', 'GmapGIS contact form', o),
    Ext.Msg.alert('', 'Thank you. \n Your query will be replied asap'),
    Ext.getCmp('winSupp').destroy(),
    Ext.getCmp('mytb').enable()
  ) : Ext.Msg.alert('Missing Information', 'Please fill in all required fields.')
}
function postEmail(e, t, o) {
  t = 'address=' + e + '&subject=' + t + '&content=' + o;
  x = xm(),
  null != x ? (
    x.open('POST', 'email_content.php', !0),
    x.onreadystatechange = function () {
      4 == x.readyState ||
      x.readyState
    },
    x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'),
    x.setRequestHeader('Content-length', o.length),
    x.setRequestHeader('Connection', 'close'),
    x.send(t)
  ) : alert('Error: Browser does not support HTTP Request')
}
function sampPoly(e) {
  var t;
  if (
    0 < (
      t = 'line' == editFeature.type ? 'eIH2K6WoDeX.gmp' : 'dAouZWS1Uxz.gmp'
    ).length
  ) var o = 'readGmpFile20.php',
  n = 'file=' + t + '&fileCode=somecode';
   else if (0 == t.length) return;
  x = xm(),
  null != x &&
  (
    x.open('POST', o, !0),
    x.onreadystatechange = function () {
      4 != x.readyState &&
      'complete' != x.readyState ||
      sampPolyDisp(e, x.responseText)
    },
    x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'),
    x.send(n)
  )
}
function samp_polygons(e, t) {
  alert('---yyyy---');
  var o = t.split('@') [1].split('\n');
  for (i = 0; i < o.length - 1; i++) {
    var n = o[i].split('^'),
    a = (n[1].split(','), new google.maps.Polygon);
    polygonName[rectanName.length] = n[0],
    polygonSty[polygonSty.length] = n[1],
    polygonHTML[polygonHTML.length] = n[2];
    var r = options(n[1]);
    a.setOptions(r),
    a.setMap(e),
    insPoints(a, n[3])
  }
}
function shapeOptions(e) {
  e = e.split(',');
  return {
    strokeColor: e[0],
    strokeWeight: e[1],
    strokeOpacity: e[2],
    fillColor: e[3],
    fillOpacity: e[4]
  }
}
function lineOptions(e) {
  var t = e.split(',');
  5 == t.length &&
  (t[5] = 'd0');
  switch (t[5]) {
    case 'd0':
      var o = [
        {
          icon: {
            path: 'M 0, 0 0, 0',
            strokeOpacity: t[2],
            scale: t[1]
          },
          repeat: '0px'
        }
      ],
      n = {
        zIndex: 5,
        strokeColor: t[0],
        strokeWeight: t[1],
        strokeOpacity: t[2],
        icons: o
      };
      break;
    case 'd1':
      o = [
        {
          icon: {
            path: 'M 0, 1 0, 1',
            strokeOpacity: t[2],
            scale: t[1]
          },
          repeat: '10px'
        }
      ],
      n = {
        zIndex: 5,
        strokeColor: t[0],
        strokeWeight: t[1],
        strokeOpacity: 0,
        icons: o
      };
      break;
    case 'd2':
      o = [
        {
          icon: {
            path: 'M 0, -1 0, 1',
            strokeOpacity: t[2],
            scale: t[1]
          },
          repeat: '20px'
        }
      ],
      n = {
        zIndex: 5,
        strokeColor: t[0],
        strokeWeight: t[1],
        strokeOpacity: 0,
        icons: o
      };
      break;
    case 'd4':
      o = [
        {
          icon: {
            path: 'M -2,0 0,-2 2,0 0,2 z',
            strokeOpacity: t[2],
            scale: t[1]
          },
          repeat: '15px'
        }
      ],
      n = {
        zIndex: 5,
        strokeColor: t[0],
        strokeWeight: t[1],
        strokeOpacity: 0,
        icons: o
      };
      break;
    case 'd3':
      o = [
        {
          icon: {
            path: 'M -2,-2 2,2 M 2,-2 -2,2',
            strokeOpacity: t[2],
            scale: t[1]
          },
          repeat: '20px'
        }
      ],
      n = {
        zIndex: 5,
        strokeColor: t[0],
        strokeWeight: t[1],
        strokeOpacity: 0,
        icons: o
      };
      break;
    case 'd5':
      o = [
        {
          icon: {
            path: 'M -2,0 0,-2 2,0 ',
            strokeOpacity: t[2],
            scale: t[1]
          },
          repeat: '15px'
        }
      ],
      n = {
        zIndex: 5,
        strokeColor: t[0],
        strokeWeight: t[1],
        strokeOpacity: 0,
        icons: o
      };
      break;
    case 'd6':
      o = [
        {
          icon: {
            path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
          },
          offset: '100%'
        }
      ],
      n = {
        zIndex: 5,
        strokeColor: t[0],
        strokeWeight: t[1],
        strokeOpacity: t[2],
        icons: o
      }
  }
  return n
}
function startOver2() {
  for (; 0 < lineGroup.length; ) {
    var e = lineGroup.length - 1;
    lineGroup[e].setMap(),
    lineGroup.splice(e, 1),
    lineName.splice(e, 1),
    lineSty.splice(e, 1)
  }
  for (; 0 < markergroup.length; ) {
    e = markergroup.length - 1;
    markergroup[e].setMap(),
    markergroup.splice(e, 1),
    markerName.splice(e, 1),
    markerSty.splice(e, 1)
  }
}
function winSaveproj() {
  var e = {
    xtype: 'form',
    labelWidth: 100,
    frame: !0,
    border: !0,
    buttons: [
      {
        text: 'Save',
        id: 'btnSave',
        handler: function () {
          saveProject($('projFn').getValue() + '.gmp')
        }
      },
      {
        text: 'Close',
        id: 'btnCancel',
        handler: function () {
          t.close()
        }
      },
      {
        text: 'Download',
        id: 'btnDownload',
        disabled: !0,
        handler: function () {
          popitup('./temp/' + $('projFn').getValue() + '.gmp')
        }
      }
    ],
    items: [
      {
        fieldLabel: 'Enter file name',
        xtype: 'textfield',
        name: 'filename',
        id: 'projFn',
        anchor: '-18'
      }
    ]
  },
  t = new Ext.Window({
    width: 420,
    y: 200,
    height: 100,
    border: !1,
    layout: 'fit',
    items: [
      e
    ]
  });
  t.show()
}
function OpenInNewTab(e) {
  window.open(e, '_blank').focus()
}
function popitup(e) {
  return newwindow = window.open(e, 'name', 'height=200,width=150'),
  window.focus &&
  newwindow.focus(),
  !1
}
function mdHide() {
  $('mLength').pressed &&
  $('mLength').toggle(),
  measureLength = !1,
  $$('mDistance').style.visibility = 'hidden'
}
function addScribListeners(t) {
  google.maps.event.addListener(
    t,
    'rightclick',
    function (e) {
      editShape = 'line',
      rightclick(e.latLng, t)
    }
  ),
  google.maps.event.addListener(
    t,
    'click',
    function (e) {
      if (drawScrib) endSrib(e),
      $$('mDistance').style.visibility = 'hidden';
       else {
        for (i = 0; i < lineGroup.length; i++) t == lineGroup[i] &&
        (thisRecord = i);
        showInfowin(e.latLng, lineHTML[thisRecord])
      }
    }
  )
}
function addRectanListeners(t, o) {
  google.maps.event.addListener(
    t,
    'rightclick',
    function (e) {
      editShape = 'rectan',
      thisFeature = getFeatureByObj(t),
      o &&
      contextRectanMenu(e.latLng, t)
    }
  ),
  google.maps.event.addListener(
    t,
    'click',
    function (e) {
      thisFeature = getFeatureByObj(t),
      showInfowin(e.latLng, thisFeature)
    }
  ),
  google.maps.event.addListener(
    t,
    'mousemove',
    function (e) {
      mouseLatlng = e.latLng,
      measureLength ? disLabel(e) : drawArrow ? dispArrow(e) : drawLine ||
      drawPolygon ||
      drawRectangle ? dashLine(e) : drawCircle ? disCircle(e) : drawScrib &&
      line.getPath().push(e.latLng)
    }
  ),
  google.maps.event.addListener(
    t,
    'mouseover',
    function (e) {
      mouseLabel(e.latLng),
      $$('mDistance').innerHTML = '',
      $('mLength').pressed &&
      (
        e = google.maps.geometry.spherical.computeArea(tempshape.getPath()),
        e = 'Area: ' + Math.round(e) + ' m<sup>2</sup>',
        $$('mDistance').style.visibility = 'visible',
        $$('mDistance').innerHTML = e
      )
    }
  ),
  google.maps.event.addListener(
    t,
    'mouseout',
    function (e) {
      $$('mDistance').style.visibility = 'hidden'
    }
  )
}
function conLlength(e) {
  for (var t = lineHTML[e].split('\n'), o = '', n = 0; n < t.length; n++) for (var i, a = t[n].split('\''), r = 0; r < a.length; r++) 'Llength' == a[r] &&
  (
    i = google.maps.geometry.spherical.computeLength(lineGroup[e].getPath()),
    a[r] = Math.round(i) + ' metres',
    10 < a[r].length &&
    (
      a[r] = a[r].slice(0, a[r].length - 10) + ',' + a[r].slice(a[r].length - 10)
    )
  ),
  o += a[r];
  return o
}
function addLineListeners(n, t) {
  google.maps.event.addListener(
    n,
    'rightclick',
    function (e) {
      editShape = 'line',
      thisFeature = getFeatureByObj(n),
      t &&
      contextLineMenu(e.latLng, n)
    }
  ),
  google.maps.event.addListener(
    n,
    'mouseover',
    function (e) {
      thisLineFeature = getFeatureByObj(n),
      $$('mDistance').innerHTML = '',
      mouseLabel(e.latLng),
      $('mLength').pressed &&
      (
        $$('mDistance').style.visibility = 'visible',
        $$('mDistance').innerHTML = LenMeters(n)
      ),
      mOverSty = (mOverSty = thisLineFeature.style) ||
      thisLineFeature.properties.style;
      e = lineOptions('#FF0000,10,.3,#ff8800,0.4,d0');
      n.setOptions(e)
    }
  ),
  google.maps.event.addListener(
    n,
    'mouseout',
    function (e) {
      var t = lineOptions(mOverSty);
      n.setOptions(t)
    }
  ),
  google.maps.event.addListener(
    n,
    'click',
    function (e) {
      var t,
      o;
      window.event.ctrlKey &&
      (o = !0),
      thisFeature = getFeatureByObj(n),
      drawLine ? (
        n.setOptions({
          editable: !1
        }),
        $('line').toggle(),
        drawLine = !1,
        dsline.setMap(),
        t = lineOptions(thisFeature.properties.style),
        n.setOptions(t),
        contextLineMenu(e.latLng, n),
        $$('mDistance').style.visibility = 'hidden'
      ) : drawScrib ? (
        drawSrib = !1,
        $('scrib').toggle(),
        $$('mDistance').style.visibility = 'hidden',
        contextLineMenu(e.latLng, n)
      ) : o ? (
        o = e.latLng,
        o = findVertexIndex(n.getPath(), o),
        n.getPath().removeAt(o)
      ) : showInfowin(e.latLng, thisFeature)
    }
  )
}
function alignPoly(e) {
  var t = !1;
  for (i = 0; i < polygonGroup.length; i++) {
    var o = polygonGroup[i],
    n = e.getPath(),
    a = o.getPath();
    if (e != polygonGroup[i]) {
      for (
        isClockwise = google.maps.geometry.spherical.computeSignedArea(n) < 0,
        preClockwise = google.maps.geometry.spherical.computeSignedArea(a) < 0,
        t = isClockwise ? !preClockwise : !!preClockwise,
        j = 0;
        j < n.getLength();
        j++
      ) (c = google.maps.geometry.poly.containsLocation(n.getAt(j), o)) &&
      (delVertex[delVertex.length] = n.getAt(j));
      if (0 == delVertex.length) {
        var r;
        for (j = 0; j < n.getLength(); j++) {
          (r = j + 1) == n.getLength() &&
          (r = 0),
          0;
          var s = google.maps.geometry.spherical.interpolate(n.getAt(j), n.getAt(r), 0.5);
          if (google.maps.geometry.poly.containsLocation(s, o)) {
            insertBetween(n.getAt(j), n.getAt(r), s, e);
            break
          }
        }
      }
      for (j = 0; j < n.getLength(); j++) {
        (r = j + 1) == n.getLength() &&
        (r = 0);
        var l,
        p,
        d,
        c = google.maps.geometry.poly.containsLocation(n.getAt(j), o),
        g = google.maps.geometry.poly.containsLocation(n.getAt(r), o);
        c &&
        (delVertex[delVertex.length] = n.getAt(j)),
        c ? 0 == g &&
        (
          p = {
            path: u = [
              n.getAt(r),
              n.getAt(j)
            ],
            strokeColor: '#FF0000',
            strokeOpacity: 1,
            strokeWeight: 3
          },
          l = new google.maps.Polyline(p)
        ) : g &&
        (
          p = {
            path: f = [
              n.getAt(j),
              n.getAt(r)
            ],
            strokeColor: '#FF0000',
            strokeOpacity: 1,
            strokeWeight: 5
          },
          d = new google.maps.Polyline(p)
        )
      }
      for (n = o.getPath(), j = 0; j < n.getLength(); j++) {
        (r = j + 1) == n.getLength() &&
        (r = 0);
        var u,
        m,
        f,
        h,
        c = google.maps.geometry.poly.containsLocation(n.getAt(j), e),
        g = google.maps.geometry.poly.containsLocation(n.getAt(r), e);
        (c = google.maps.geometry.poly.containsLocation(n.getAt(j), e)) ? 0 == g &&
        (
          u = [
            n.getAt(j),
            n.getAt(r)
          ],
          m = new google.maps.Polyline({
            path: u,
            strokeColor: '#FF0000',
            strokeOpacity: 1,
            strokeWeight: 5
          })
        ) : g &&
        (
          f = [
            n.getAt(j),
            n.getAt(r)
          ],
          h = new google.maps.Polyline({
            path: f,
            strokeColor: '#FF0000',
            strokeOpacity: 1,
            strokeWeight: 3
          })
        )
      }
      var y = l.getPath(),
      b = h.getPath(),
      x = getIntersection(y, b);
      x = t ? getIntersect(y.getAt(1), y.getAt(0), b.getAt(1), b.getAt(0)) : getIntersect(y.getAt(0), y.getAt(1), b.getAt(0), b.getAt(1));
      var v,
      w = o.getPath(),
      L = getIndex(b.getAt(0), w),
      a = getIndex(b.getAt(1), w);
      insertBetween(b.getAt(0), b.getAt(1), x, o),
      y = d.getPath(),
      b = m.getPath(),
      v = t ? getIntersect(y.getAt(1), y.getAt(0), b.getAt(1), b.getAt(0)) : getIntersect(y.getAt(0), y.getAt(1), b.getAt(0), b.getAt(1));
      w = o.getPath(),
      L = getIndex(b.getAt(0), w),
      a = getIndex(b.getAt(1), w);
      for (
        insertBetween(b.getAt(0), b.getAt(1), v, o),
        insertBetween((y = d.getPath()).getAt(0), y.getAt(1), v, e),
        insertBetween((y = l.getPath()).getAt(0), y.getAt(1), x, e),
        n = e.getPath(),
        r = 0;
        r < delVertex.length;
        r++
      ) {
        n = e.getPath();
        var F = getIndex(delVertex[r], n);
        n.removeAt(F)
      }
      var C = o.getPath();
      for (j = 0; j < C.getLength(); j++) {
        c = google.maps.geometry.poly.containsLocation(C.getAt(j), e);
        C.getAt(j).equals(v) &&
        (c = !0),
        C.getAt(j).equals(x) &&
        (c = !0),
        c &&
        (insVertex[insVertex.length] = C.getAt(j))
      }
      var n = e.getPath(),
      L = (
        getInsIndex(insVertex[0], insVertex[insVertex.length], e),
        getIndex(insVertex[0], n)
      ),
      a = getIndex(insVertex[insVertex.length - 1], n),
      S = 0,
      S = 1 == Math.abs(a - L) ? L < a ? a : L : 0;
      for (j = 0; j < insVertex.length; j++) n = e.getPath(),
      0 == C.getAt(S).equals(insVertex[j]) &&
      n.insertAt(S, insVertex[j])
    }
  }
}
function insertBetween(e, t, o, n) {
  n = n.getPath(),
  e = getIndex(e, n),
  t = getIndex(t, n);
  1 == Math.abs(t - e) ? e < t ? n.insertAt(t, o) : n.insertAt(e, o) : n.insertAt(0, o)
}
function getInsIndex(e, t, o) {
  o = o.getPath(),
  e = getIndex(e, o),
  o = getIndex(t, o);
  return 1 == Math.abs(o - e) ? e < o ? o : e : 0
}
function getIntersect(e, t, o, n) {
  var i = google.maps.geometry.spherical.computeDistanceBetween(e, t),
  a = google.maps.geometry.spherical.computeDistanceBetween(o, n),
  r = google.maps.geometry.spherical.computeDistanceBetween(e, n),
  e = google.maps.geometry.spherical.computeDistanceBetween(t, n),
  t = google.maps.geometry.spherical.computeDistanceBetween(t, o),
  t = (e * e + a * a - t * t) / (2 * e * a),
  i = (e * e + i * i - r * r) / (2 * e * i),
  t = 57.2958 * Math.acos(t),
  i = 57.2958 * Math.acos(i),
  t = 180 - i - t,
  e = Math.sin(i / 57.2958) / Math.sin(t / 57.2958) * e;
  return google.maps.geometry.spherical.interpolate(n, o, e / a)
}
function getIntersection(e, t) {
  var o = comLen(e),
  n = comLen(t),
  i = google.maps.geometry.spherical.computeDistanceBetween(e.getAt(0), t.getAt(1)),
  a = google.maps.geometry.spherical.computeDistanceBetween(e.getAt(1), t.getAt(1)),
  e = google.maps.geometry.spherical.computeDistanceBetween(e.getAt(1), t.getAt(0)),
  e = (a * a + n * n - e * e) / (2 * a * n),
  o = (a * a + o * o - i * i) / (2 * a * o),
  e = 57.2958 * Math.acos(e),
  o = 57.2958 * Math.acos(o),
  e = 180 - o - e,
  a = Math.sin(o / 57.2958) / Math.sin(e / 57.2958) * a,
  a = Math.abs(a);
  return google.maps.geometry.spherical.interpolate(t.getAt(1), t.getAt(0), a / n)
}
function firstLiesInSecondPoly(e, t) {
  var o = !1,
  n = e.getPath();
  for (j = 0; j < n.getLength(); j++) google.maps.geometry.poly.containsLocation(n.getAt(j), t) &&
  (o = !0);
  return o
}
function getIndex(e, t) {
  for (j = 0; j < t.getLength(); j++) if (t.getAt(j).equals(e)) return j
}
function antiClock(e) {
  var t = e.getPath().getLength(),
  o = '';
  for (j = 0; j < t; j++) o = o + '~' + e.getPath().getAt(j).toUrlValue(5);
  o = o.slice(1)
}
function startOver() {
  for (var e, t = geoJsonFile.polyFeatures; 0 < t.length; ) t[e = t.length - 1].apiObj.setMap(),
  t.splice(e, 1);
  for (t = geoJsonFile.lineFeatures; 0 < t.length; ) t[e = t.length - 1].apiObj.setMap(),
  t.splice(e, 1);
  for (t = geoJsonFile.rectanFeatures; 0 < t.length; ) t[e = t.length - 1].apiObj.setMap(),
  t.splice(e, 1);
  for (t = geoJsonFile.circleFeatures; 0 < t.length; ) t[e = t.length - 1].apiObj.setMap(),
  t.splice(e, 1);
  for (t = geoJsonFile.pointFeatures; 0 < t.length; ) t[e = t.length - 1].apiObj.setMap(),
  t.splice(e, 1);
  for (t = geoJsonFile.labelFeatures; 0 < t.length; ) t[e = t.length - 1].apiObj.setMap(),
  t.splice(e, 1)
}
function getFeatureByObj(e) {
  var t = '';
  for (i = 0; i < geoJsonFile.polyFeatures.length; i++) e == geoJsonFile.polyFeatures[i].apiObj &&
  (t = geoJsonFile.polyFeatures[i]);
  for (i = 0; i < geoJsonFile.lineFeatures.length; i++) e == geoJsonFile.lineFeatures[i].apiObj &&
  (t = geoJsonFile.lineFeatures[i]);
  for (i = 0; i < geoJsonFile.circleFeatures.length; i++) e == geoJsonFile.circleFeatures[i].apiObj &&
  (t = geoJsonFile.circleFeatures[i]);
  for (i = 0; i < geoJsonFile.rectanFeatures.length; i++) e == geoJsonFile.rectanFeatures[i].apiObj &&
  (t = geoJsonFile.rectanFeatures[i]);
  for (i = 0; i < geoJsonFile.pointFeatures.length; i++) e == geoJsonFile.pointFeatures[i].apiObj &&
  (t = geoJsonFile.pointFeatures[i]);
  for (i = 0; i < geoJsonFile.labelFeatures.length; i++) e == geoJsonFile.labelFeatures[i].apiObj &&
  (t = geoJsonFile.labelFeatures[i]);
  return t
}
function spliceThisFeature() {
  var e,
  t = [];
  for (
    'polygon' == thisFeature.type ||
    'polyArea' == thisFeature.type ? t = geoJsonFile.polyFeatures : 'line' == thisFeature.type ? t = geoJsonFile.lineFeatures : 'circle' == thisFeature.type ? t = geoJsonFile.circleFeatures : 'rectangle' == thisFeature.type ? t = geoJsonFile.rectanFeatures : 'point' == thisFeature.type ? t = geoJsonFile.pointFeatures : 'label' == thisFeature.type &&
    (t = geoJsonFile.labelFeatures),
    i = 0;
    i < t.length;
    i++
  ) thisFeature.apiObj == t[i].apiObj &&
  (e = i);
  t.splice(e, 1),
  'label' == thisFeature.type ||
  thisFeature.apiObj.setMap()
}
function findVertexIndex(t, o) {
  for (let e = 0; e < t.getLength(); e++) if (t.getAt(e).equals(o)) return e;
  return - 1
}
function addPolyListeners(i, t) {
  google.maps.event.addListener(
    i,
    'rightclick',
    function (e) {
      thisFeature = getFeatureByObj(i),
      editShape = 'polygon',
      t &&
      contextMenu(e.latLng, i)
    }
  ),
  google.maps.event.addListener(
    i,
    'click',
    function (e) {
      var t = e.latLng,
      t = findVertexIndex(i.getPath(), t);
      if (
        window.event.ctrlKey &&
        i.getPath().removeAt(t),
        window.event.altKey &&
        (o = !0),
        thisFeature = getFeatureByObj(i),
        $('mLength').pressed
      ) x1 = e.latLng,
      measureLength ? (distanceLine = 0, dsline.setMap()) : measureLength = !0;
       else if (drawPolygon) drawPolygon = !1,
      dsline.setMap(),
      i.setOptions({
        editable: !1
      }),
      $$('mDistance').style.visibility = 'hidden',
      $('polygon').toggle(),
      unsaved = !0,
      contextMenu(e.latLng, i);
       else if (o) {
        var o = shapeOptions(thisFeature.properties.style = copySty);
        thisFeature.apiObj.setOptions(o)
      } else {
        for (var n = thisFeature.properties.info; n.includes('~-'); ) n = n.replace('~-', '"');
        for (; n.includes('----'); ) n = n.replace('----', '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
        html = '<div style=\'text-align: center;\'><b>' + thisFeature.properties.title + '</b><br><br>' + n,
        showInfowin(e.latLng, thisFeature)
      }
    }
  ),
  google.maps.event.addListener(
    i,
    'mousemove',
    function (e) {
      mouseLatlng = e.latLng,
      measureLength ? disLabel(e) : drawArrow ? dispArrow(e) : drawLine ||
      drawPolygon ||
      drawRectangle ? dashLine(e) : drawCircle ? disCircle(e) : drawScrib &&
      line.getPath().push(e.latLng)
    }
  ),
  google.maps.event.addListener(
    i,
    'mouseover',
    function (e) {
      editShape = 'polygon',
      $$('mDistance').innerHTML = '',
      mouseLabel(e.latLng),
      $('mArea').pressed &&
      (
        e = formattedArea(google.maps.geometry.spherical.computeArea(i.getPath())),
        $$('mDistance').style.visibility = 'visible',
        $$('mDistance').innerHTML = e
      )
    }
  ),
  google.maps.event.addListener(
    i,
    'mouseout',
    function (e) {
      $$('mDistance').style.visibility = 'hidden'
    }
  )
}
function formattedArea(e) {
  var t = '';
  switch (areaUnits) {
    case 'sqm':
      t = Math.round(e).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' sqm';
      break;
    case 'sqft':
      t = Math.round(10.7639 * e).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' sq ft';
      break;
    case 'acr':
      var o = Math.round(e) / 4046.86;
      t = (
        o = (o = 999.99 < o ? o.toFixed(0) : o.toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      ) + ' acres'
  }
  return t
}
function saveProject(e) {
  postContent(
    saveJsonGmapFile(),
    'filesave.php',
    e,
    function () {
      4 != x.readyState &&
      'complete' != x.readyState ||
      (
        $('btnDownload').enable(),
        $('btnSave').disable(),
        $('projFn').disable()
      )
    }
  )
}
function postContent(e, t, o, n) {
  o = 'file=' + o,
  x = xm(),
  null != x ? (
    x.open('POST', t, !0),
    x.onreadystatechange = n,
    x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'),
    x.setRequestHeader('Content-length', e.length),
    x.setRequestHeader('Connection', 'close'),
    x.send(o + '&content=' + e)
  ) : alert('Error: Browser does not support HTTP Request')
}
function saveFileAs() {
  var o,
  n;
  '' != file2save ? (
    o = randomString(11) + '.gmp',
    n = randomString(11),
    Ext.MessageBox.prompt(
      '',
      'Enter new title:',
      function (e, t) {
        'ok' == e &&
        (
          mapTitle = t.replace(/[^\w\s]/gi, ''),
          legendJson.file = o,
          file2save = o,
          saveJsonGmapFile(),
          saveEdits(o, mapTitle, n),
          alert('A duplicate file saved on your user profile')
        )
      },
      [],
      !1,
      mapTitle + ' - copy'
    )
  ) : alert('There is no map file to duplicate')
}
function duplicateFile() {
  var o,
  n;
  '' != file2save ? (
    o = randomString(11) + '.gmp',
    n = randomString(11),
    Ext.MessageBox.prompt(
      '',
      'Enter new title:',
      function (e, t) {
        'ok' == e &&
        (
          t = 'user=' + userID + '&file=' + file2save + '&fileCode=' + n + '&newFile=' + o + '&title=' + t,
          Ext.Ajax.request({
            url: 'duplicateFile.php',
            method: 'POST',
            params: t,
            success: function (e) {
              Ext.example.msg(' ', 'Duplicate file saved')
            },
            failure: function () {
              Ext.Msg.alert('Error', 'Request failed')
            }
          })
        )
      },
      [],
      !1,
      mapTitle + ' - copy'
    )
  ) : alert('There is no map file to duplicate')
}
function gmpFileSave() {
  if ('' == file2save && 0 == userID) return signInWin(),
  void alert('Not signed in \n You need to sign in to save map files');
  saveJsonGmapFile().length < 5 ? alert('No drawings on the map') : '' == file2save ? Ext.MessageBox.prompt(
    '',
    'All map files can be saved, edited and shared. <BR> <BR> <BR> Type in a title for the map:',
    function (e, t) {
      'ok' == e &&
      (
        mapTitle = t.replace(/[^\w\s]/gi, ''),
        file2save = randomString(11) + '.gmp',
        fileCode = randomString(11),
        legendJson.file = file2save,
        5 < saveJsonGmapFile().length ? (
          updateFileName(file2save),
          $('sendlink').pressed &&
          ($('sendlink').toggle(), sendLink(file2save))
        ) : (file2save = '', $('sendlink').pressed && $('sendlink').toggle()),
        saveEdits(file2save, mapTitle, fileCode)
      )
    }
  ) : saveEdits(file2save)
}
function autosave() {
  unsaved &&
  postContent(
    getContent(),
    'autosave.php',
    autofile,
    function () {
      4 != x.readyState &&
      'complete' != x.readyState ||
      (unsaved = !1)
    }
  )
}
function save2tree() {
  var t,
  e = Ext.getCmp('treePan');
  e.getRootNode().cascade(
    function (e) {
      e.isLeaf() &&
      e.text.includes('#efo726') &&
      (file2save = getFileName(e))
    }
  ),
  '' == file2save ? (
    saveEdits(file2save = randomString(11) + '.gmp'),
    t = dropKML(file2save),
    e.getRootNode().cascade(
      function (e) {
        e.id == t &&
        (
          editDrawings(e),
          e.attributes.checked &&
          e.getUI().toggleCheck(!1)
        )
      }
    )
  ) : saveEdits(file2save)
}
function save2Print() {
  var e = getEditFileName();
  '' == e ? gmpFileSave() : OpenInNewTab('./printsetup.html?' + getEditFileName())
}
function saveLink(e) {
  var t = file2save;
  '' == t ? alert('The drawing not saved \n Save drawings first') : sendLink(t)
}
function getEditFileName() {
  var t = '',
  e = Ext.getCmp('treePan');
  e.getRootNode();
  return e.getRootNode().cascade(
    function (e) {
      e.isLeaf() &&
      e.text.includes('#efo726') &&
      (t = getFileName(e))
    }
  ),
  t
}
function readLegend() {
  alert('hyju');
  var e = Ext.getCmp('legendTree');
  legendObj = geojsonFile,
  alert(legendObj.length),
  0 < legendObj.length &&
  (
    alert('njuy'),
    Ext.getCmp('eastTabPanel').setActiveTab('infoTab')
  ),
  e.getRootNode().expand(!0)
}
function readLegendOld(e) {
  if (0 < e.length) {
    var t = 'readlegend.php';
    e = 'file=' + e
  } else if (0 == e.length) return;
  x = xm(),
  null != x &&
  (
    x.open('POST', t, !0),
    x.onreadystatechange = function () {
      if (4 == x.readyState || 'complete' == x.readyState) {
        var e = Ext.getCmp('legendTree');
        legendObj = JSON.parse(x.responseText),
        alert(legendObj.length);
        e = Ext.getCmp('legendTree');
        for (i = 0; i < legendObj.length; i++) {
          alert(i);
          var t = {
            iconCls: 'x-tree-icon',
            text: legendObj[i].text.replace('--', '&nbsp;&nbsp'),
            leaf: !0
          };
          e.getRootNode().appendChild(t)
        }
        alert('nhytr'),
        e.getRootNode().expand(!0)
      }
    },
    x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'),
    x.send(e)
  )
}
function getNoAds() {
  post2PHP(
    'showNoAds.php',
    'fileCode=' + fileCode,
    function () {
      4 != x.readyState &&
      'complete' != x.readyState ||
      (
        noAds = x.responseText,
        $$('div-justAny').style.visibility = '1' == noAds ? 'hidden' : 'visible'
      )
    }
  )
}
function loadLink() {
  var e = window.location.search.substring(1),
  t = 'nofile';
  0 != e.length &&
  (
    e.includes('fcode=') ? (fileCode = getParameterByName('fcode'), t = 'nofile') : e.includes('code=') ? ('password' == getParameterByName('action') ? chngPass : activate) () : e.includes('.gmp') &&
    (t = e, editLink = !(fileCode = '')),
    viewer &&
    14 < t.length &&
    (t = decodeFilename(t)),
    openSavedFile(t)
  )
}
function getContent() {
  return mp.getMapTypeId() + '^' + mp.getCenter() + '^' + mp.getZoom() + '^~' + savePolygons() + '^~' + saveLines() + '^~' + saveRectans() + '^~' + saveMarkers() + '^~' + saveLabels() + '^~' + saveCircles() + '^~V3'
}
function saveLabels() {
  var e = '';
  for (i = 0; i < labID.length; i++) e = e + getLabStyle(labID[i]) + '^' + labPos[i] + '^' + $$(labID[i]).textContent + '\n';
  return e
}
function getVertexies(e) {
  var t = e.getPath().getLength(),
  o = '';
  for (j = 0; j < t; j++) o = o + '~' + e.getPath().getAt(j).toUrlValue(5);
  return o = o.slice(1)
}
function savePolygons() {
  var e = '';
  for (i = 0; i < polygonGroup.length; i++) e = (e = e + polygonName[i] + '^' + polygonSty[i] + '^' + polygonHTML[i]) + '^' + getVertexies(polygonGroup[i]) + '\n';
  return e
}
function splitLine(e) {
  var t = stichCircle.getCenter(),
  o = stichCircle.getRadius(),
  n = thisFeature.apiObj.getPath();
  for (j = 0; j < n.getLength(); j++) {
    var i,
    a = [
      n.getAt(j),
      t
    ],
    a = google.maps.geometry.spherical.computeLength(a);
    (a = Math.floor(a)) < o &&
    (n.setAt(j, e.latLng), thisFeature.apiObj.setPath(n), i = j)
  }
  var r = new google.maps.Polyline,
  s = lineOptions(thisFeature.properties.style);
  for (r.setOptions(s), r.setMap(mp), k = 0; k < n.getLength(); k++) k >= i &&
  r.getPath().push(n.getAt(k));
  for (; n.getLength() > i + 1; ) n.pop();
  geoJsonFile.lineFeatures.push({
    type: 'line',
    apiObj: ' ',
    properties: {
      title: 'Line',
      style: '',
      info: ''
    },
    geometry: {
      type: 'Line',
      coordinates: []
    }
  });
  s = geoJsonFile.lineFeatures.length - 1;
  geoJsonFile.lineFeatures[s].properties.style = thisFeature.properties.style,
  addLineListeners(geoJsonFile.lineFeatures[s].apiObj = r, !0),
  togDrag(r),
  togStichCircle()
}
function dupLine(e) {
  var t = new google.maps.Polyline,
  o = lineOptions(thisFeature.properties.style);
  t.setOptions(o),
  t.setMap(mp);
  var n = getVertexies(e).split('~');
  for (j = 0; j < n.length; j++) {
    var i = n[j].split(','),
    i = new google.maps.LatLng(parseFloat(i[0]), parseFloat(i[1]));
    t.getPath().push(i)
  }
  geoJsonFile.lineFeatures.push({
    type: 'line',
    apiObj: ' ',
    properties: {
      title: 'Line',
      style: 'hjlyybb',
      info: ''
    },
    geometry: {
      type: 'Line',
      coordinates: []
    }
  });
  e = geoJsonFile.lineFeatures.length - 1;
  geoJsonFile.lineFeatures[e].properties.style = thisFeature.properties.style,
  addLineListeners(geoJsonFile.lineFeatures[e].apiObj = t, !0),
  togDrag(t)
}
function poly2csv(e) {
  var t = getVertexies(e).split('~'),
  o = 'Latitude,Longitude\n';
  for (j = 0; j < t.length; j++) var n = t[j].split(','),
  o = o + n[0] + ',' + n[1] + '\n';
  downLoadTextFile(o, 'shapeGmapGIS.csv')
}
function poly2Line(e) {
  var t = new google.maps.Polyline,
  o = lineOptions(thisFeature.properties.style + ',d0');
  t.setOptions(o),
  t.setMap(mp);
  var n = getVertexies(e).split('~');
  for (j = 0; j < n.length; j++) {
    var i = n[j].split(','),
    a = new google.maps.LatLng(parseFloat(i[0]), parseFloat(i[1]));
    t.getPath().push(a)
  }
  i = n[0].split(','),
  a = new google.maps.LatLng(parseFloat(i[0]), parseFloat(i[1]));
  t.getPath().push(a);
  geoJsonFile.lineFeatures.push({
    type: 'line',
    apiObj: ' ',
    properties: {
      title: 'Line',
      style: 'hjlyybb',
      info: ''
    },
    geometry: {
      type: 'Line',
      coordinates: []
    }
  });
  e = geoJsonFile.lineFeatures.length - 1;
  geoJsonFile.lineFeatures[e].properties.style = thisFeature.properties.style + ',d0',
  addLineListeners(geoJsonFile.lineFeatures[e].apiObj = t, !0),
  togDrag(t),
  spliceThisFeature()
}
function line2Poly(e) {
  var t = new google.maps.Polygon,
  o = shapeOptions(defPolySty);
  t.setOptions(o),
  t.setMap(mp),
  addPolyListeners(t, !0);
  var n = getVertexies(e).split('~');
  for (j = 0; j < n.length; j++) {
    var i = n[j].split(','),
    i = new google.maps.LatLng(parseFloat(i[0]), parseFloat(i[1]));
    t.getPath().push(i)
  }
  geoJsonFile.polyFeatures.push({
    type: 'polygon',
    apiObj: ' ',
    properties: {
      title: 'Polygon',
      style: 'hjlyybb',
      info: ''
    },
    geometry: {
      type: 'Polygon',
      coordinates: []
    }
  });
  e = geoJsonFile.polyFeatures.length - 1;
  geoJsonFile.polyFeatures[e].properties.style = defPolySty,
  geoJsonFile.polyFeatures[e].apiObj = t,
  spliceThisFeature()
}
function dupPolygon(e) {
  var t = new google.maps.Polygon,
  o = getVertexies(e).split('~');
  for (j = 0; j < o.length; j++) {
    var n = o[j].split(','),
    n = new google.maps.LatLng(parseFloat(n[0]), parseFloat(n[1]));
    t.getPath().push(n)
  }
  geoJsonFile.polyFeatures.push({
    type: 'polygon',
    apiObj: ' ',
    properties: {
      title: 'Polygon',
      style: 'hjlyybb',
      info: ''
    },
    geometry: {
      type: 'Polygon',
      coordinates: []
    }
  });
  var i = geoJsonFile.polyFeatures.length - 1;
  geoJsonFile.polyFeatures[i].properties.style = defPolySty,
  geoJsonFile.polyFeatures[i].apiObj = t;
  i = shapeOptions(defPolySty);
  t.setOptions(i),
  t.setMap(mp),
  togDrag(t),
  togDrag(e),
  addPolyListeners(t, !0)
}
function saveMcsv() {
  if (0 != geoJsonFile.pointFeatures.length) {
    var e = 'Latitude,Longitude,Information\n';
    for (i = 0; i < geoJsonFile.pointFeatures.length; i++) {
      var t = geoJsonFile.pointFeatures[i].apiObj.getPosition().toUrlValue(5);
      $$('mDistance').innerHTML = geoJsonFile.pointFeatures[i].properties.info;
      var o = $$('mDistance').textContent,
      t = t.split(','),
      e = e + t[0] + ',' + t[1] + ',' + o + '\n'
    }
    $$('mDistance').innerHTML = '',
    downLoadTextFile(e, 'markersGmapGIS.csv')
  } else alert('Thre are no markers on the map to save')
}
function saveMarkers() {
  var e = '';
  for (i = 0; i < markergroup.length; i++) {
    var t = markerIcon[i].split('^');
    t[0] = markergroup[i].getPosition().toUrlValue(5),
    e = e + t[0] + '^' + t[1] + '^' + markergroup[i].getIcon().url + '^' + t[3] + '^' + t[4] + '^' + t[5] + '^V3^' + markerHTML[i] + '\n'
  }
  return e
}
function saveLines() {
  var e = '';
  for (i = 0; i < lineGroup.length; i++) e = (e = e + lineName[i] + '^' + lineSty[i] + '^' + lineHTML[i]) + '^' + getVertexies(lineGroup[i]) + '\n';
  return e
}
function saveRectans() {
  var e = '';
  for (i = 0; i < rectanGroup.length; i++) e = (e = e + rectanName[i] + '^' + rectanSty[i] + '^' + rectanHTML[i]) + '^' + (
    rectanGroup[i].getBounds().getNorthEast().toUrlValue(5) + '~' + rectanGroup[i].getBounds().getSouthWest().toUrlValue(5)
  ) + '\n';
  return e
}
function saveCircles() {
  var e = '';
  for (i = 0; i < circleGroup.length; i++) e = (e = e + circleName[i] + '^' + circleSty[i] + '^' + circleHTML[i]) + '^' + (
    circleGroup[i].getCenter().toUrlValue(5) + '~' + circleGroup[i].getRadius()
  ) + '\n';
  return e
}
function showInfowin(e, t) {
  for (var o = t.properties.info; o.includes('-.-.-'); ) o = o.replace('-.-.-', '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
  for (; o.includes('^nbsp'); ) o = o.replace('^nbsp', '&nbsp');
  t = o;
  gisViewer ||
  !showInfo ? Ext.getCmp('eastInfoPanel').update(t) : showInfo &&
  0 < t.length &&
  getInfoWin(e, t)
}
function gtfn(e) {
  e = $(e).value;
  return IE &&
  (e = e.slice(e.lastIndexOf(bck) + 1)),
  e
}
function epnl() {
  destroyContexMenu();
  var e = Ext.getCmp('east-panel');
  e.collapsed ? e.expand() : e.collapse()
}
function wpnl() {
  var e = Ext.getCmp('west-panel');
  e.collapsed ? e.expand() : e.collapse(),
  e.collapsed ? (
    $$('leftPin').src = './icons/pin-black-ver.png',
    $$('leftPin').height = '16',
    $$('leftPin').width = '16'
  ) : (
    $$('leftPin').src = './icons/pin-black.png',
    $$('leftPin').height = '12',
    $$('leftPin').width = '12'
  )
}
function getGpoint(e) {
  return e = e.split(','),
  new google.maps.LatLng(parseFloat(e[0].slice(1)), parseFloat(e[1]))
}
function ddc() {
  mp.disableDoubleClickZoom()
}
function edc(e) {
  google.maps.event.addListener(e, 'mouseout', function () {
    mp.enableDoubleClickZoom()
  })
}
function sc() {
  if ('map' == (window.location + '').split('g') [1]) return !0
}
function cs() {
  if ('map' != (window.location + '').split('g') [1]) return !0
}
function endPoly(e, t) {
  alert('endpoly')
}
function rightclick(e, t) {
  e = fromLatLngToPixels(e);
  overlay &&
  (
    fR = thisRecord,
    frP = thisPoly,
    $('conWin') &&
    $('conWin').destroy(),
    'marker' == editShape ? (markerFormat(), $('mrkHTML').setValue(markerHTML[fR])) : 'line' == editShape ? (shapesTbar(), $('shHTML').setValue(lineHTML[fR])) : 'polygon' == editShape ? (contextMenu(e), $('shHTML').setValue(polygonHTML[fR])) : 'rectan' == editShape ? (shapesTbar(), $('shHTML').setValue(rectanHTML[fR])) : 'circle' == editShape &&
    (shapesTbar(), $('shHTML').setValue(circleHTML[fR]))
  )
}
function onItemC() {
}
function svTrail() {
  'new' == thisPoint() &&
  (mapTrail[mapTrail.length] = mp.getCenter() + '^' + mp.getZoom())
}
function thisPoint() {
  if (0 == mapTrail.length) return 'new';
  for (var e = 0; e < mapTrail.length; e++) if (mapTrail[e] == mp.getCenter() + '^' + mp.getZoom()) return e;
  return 'new'
}
function strToGLantLng(e) {
  e = (e = e.slice(1)).split(',');
  var t = parseFloat(e[0]),
  e = parseFloat(e[1]);
  return new google.maps.LatLng(t, e)
}
function setMaptype() {
  'Hybrid' === mapType ? mp.setMapTypeId('hybrid') : 'Relief' === mapType ? mp.setMapTypeId('terrain') : 'Street' === mapType ? mp.setMapTypeId('roadmap') : 'Blank' === mapType ? mp.setMapTypeId('blank') : 'Satellite' === mapType &&
  mp.setMapTypeId('satellite');
  const e = $$('POIs-div');
  e &&
  (e.style.display = 'Satellite' === mapType ? 'none' : 'block'),
  cc('mt', mapType, 2000)
}
function gotoLocation(e) {
  var t = '',
  o = '';
  0 == e ? (t = startpoint, o = startzoom) : 1 == e ? (
    t = strToGLantLng((e = mapTrail[thisPoint() - 1].split('^')) [0]),
    o = parseFloat(e[1])
  ) : 2 == e &&
  (
    t = strToGLantLng((e = mapTrail[thisPoint() + 1].split('^')) [0]),
    o = parseFloat(e[1])
  ),
  mp.setCenter(t, o)
}
function gotoLocation(e) {
  var t,
  o = '',
  n = '';
  0 == e ? (o = startpoint, n = startzoom) : 1 == e ? (
    o = strToGLantLng((t = mapTrail[thisPoint() - 1].split('^')) [0]),
    n = parseFloat(t[1])
  ) : 2 == e &&
  (
    o = strToGLantLng((t = mapTrail[thisPoint() + 1].split('^')) [0]),
    n = parseFloat(t[1])
  ),
  mp.setCenter(o, n)
}
function getAddress(o) {
  geocoder.geocode({
    latLng: o
  }, function (e, t) {
    t == google.maps.GeocoderStatus.OK ? e[1] ? (
      adrMarker.setPosition(o),
      adrMarker.setMap(mp),
      adrWind.setContent(e[1].formatted_address),
      google.maps.event.addListener(adrWind, 'closeclick', function () {
        adrMarker.setMap()
      }),
      adrWind.open(mp, adrMarker)
    ) : alert('No results found') : alert('Geocoder failed due to: ' + t)
  })
}
function showAddress(e) {
  var t;
  '' != AddressMarker &&
  mp.removeOverlay(AddressMarker),
  e &&
  200 == e.Status.code ? (
    place = e.Placemark[0],
    t = new google.maps.LatLng(place.Point.coordinates[1], place.Point.coordinates[0]),
    AddressMarker = new GMarker(t),
    GEvent.addListener(
      AddressMarker,
      'click',
      function () {
        mp.removeOverlay(AddressMarker)
      }
    ),
    mp.addOverlay(AddressMarker),
    AddressMarker.openInfoWindowHtml(
      '<font size="2"><b>Clicked coordinates: </b>' + e.name + '<br/><b>Address coordinates: </b>' + place.Point.coordinates[1] + ',' + place.Point.coordinates[0] + '<br><b>Address: </b>' + place.address + '<br></font<br>'
    )
  ) : alert('Status Code:' + e.Status.code)
}
function showBlowup(e, t) {
  null != t &&
  mp.showMapBlowup(t, {
    zoomLevel: 19,
    mapType: G_SATELLITE_MAP
  })
}
function toolTip(e, t) {
  new Ext.ToolTip({
    target: e,
    width: 150,
    html: '<div style="color:blue;">' + t + '</div>',
    trackMouse: !0
  })
}
function addTooltips() {
  toolTip('sett', 'Change distance and area units and save preferences'),
  toolTip('sendlink', 'Share maps for editing or view only'),
  toolTip('save', 'Save editable drawings'),
  toolTip(
    'open',
    'Shows your files saved in your account. Sign in first'
  ),
  toolTip('dnload', 'Download drawings as gmp, kml or geoJson files'),
  toolTip('label', 'Insert a text label'),
  toolTip('mLength', 'Measure distance with this tool'),
  toolTip('mArea', 'Measure area with this tool'),
  toolTip('marker', 'Put place a marker'),
  toolTip('polygon', 'Draw a polygon'),
  toolTip('line', 'Draw a line'),
  toolTip('scrib', 'Draw a freehand line'),
  toolTip('rectang', 'Draw a rectangle'),
  toolTip('circle', 'Draw a circle'),
  toolTip('eraser', 'Erase points of a line or polygon <br>'),
  toolTip('delAll', 'Delete all drawings and clear the map'),
  toolTip('edit', 'Toggle edit mode of drawings'),
  toolTip('svFileAs', 'Saves current file in a diffrent name'),
  toolTip('file2saveDiv', 'File name of current file show up here'),
  toolTip('userPro', 'Click for options'),
  toolTip('register', 'Regster using email and password'),
  toolTip('print', 'Open printsetup window in a new tab'),
  toolTip('print-map', 'Open printsetup for this layer in a new tab')
}
function getfname(e) {
  return $(e).value
}
function fileUpload(t, o) {
  var n;
  n = 'phpupload.php';
  var i = new Ext.FormPanel({
    fileUpload: !0,
    frame: !0,
    labelWidth: 40,
    defaults: {
      anchor: '95%',
      msgTarget: 'side'
    },
    items: [
      {
        xtype: 'fileuploadfield',
        id: 'form-file',
        emptyText: 'Select an file',
        fieldLabel: 'File',
        name: 'file',
        buttonCfg: {
          text: '',
          iconCls: 'upload-icon'
        }
      }
    ],
    buttons: [
      {
        text: 'Open',
        handler: function () {
          var e;
          i.getForm().isValid() &&
          (
            (e = getfname('form-file')).split('.') [1] == t ? i.getForm().submit({
              url: n,
              waitMsg: 'Opening file...',
              success: o,
              failure: function (e, t) {
                Ext.MessageBox.alert('Warning', 'failure uploading data...')
              }
            }) : Ext.MessageBox.alert('Message', e + ' is not a correct file', i.getForm().reset())
          )
        }
      },
      {
        text: 'Reset',
        handler: function () {
          i.getForm().reset()
        }
      }
    ]
  });
  new Ext.Window({
    width: 500,
    id: 'winFile',
    y: 200,
    height: 100,
    closable: !0,
    layout: 'fit',
    items: i
  }).show()
}
function encodeFilename(e) {
  for (
    var t = (a = e.split('.')) [0],
    o = [
      'A',
      'x',
      'B',
      'l',
      'E',
      'u',
      'F',
      'y',
      'X',
      'r',
      'G',
      'h',
      'Z',
      'H',
      'p',
      'M',
      'v',
      'C',
      'b',
      'I',
      'o',
      'D',
      'J',
      'q',
      'K',
      'f',
      'L',
      'e',
      'O',
      'n',
      'P',
      's',
      'Q',
      'c',
      'i',
      'd',
      'j',
      'k',
      'W',
      'g',
      'N',
      'm',
      'R',
      'S',
      't',
      'T',
      'a',
      'U',
      'z',
      'V',
      'Y',
      'w',
      '-',
      '}'
    ],
    n = '',
    i = 0;
    i < t.length;
    i++
  ) {
    for (var a = e.slice(i, i + 1), r = 0; r < o.length; r++) if (a == o[r]) {
      a = o[r + 1];
      break
    }
    n += a
  }
  return n + '.gmp'
}
function decodeFilename(e) {
  for (
    var t = (a = e.split('.')) [0],
    o = [
      'A',
      'x',
      'B',
      'l',
      'E',
      'u',
      'F',
      'y',
      'X',
      'r',
      'G',
      'h',
      'Z',
      'H',
      'p',
      'M',
      'v',
      'C',
      'b',
      'I',
      'o',
      'D',
      'J',
      'q',
      'K',
      'f',
      'L',
      'e',
      'O',
      'n',
      'P',
      's',
      'Q',
      'c',
      'i',
      'd',
      'j',
      'k',
      'W',
      'g',
      'N',
      'm',
      'R',
      'S',
      't',
      'T',
      'a',
      'U',
      'z',
      'V',
      'Y',
      'w',
      '-',
      '}'
    ],
    n = '',
    i = 0;
    i < t.length;
    i++
  ) {
    for (var a = e.slice(i, i + 1), r = 0; r < o.length; r++) if (a == o[r]) {
      a = o[r - 1];
      break
    }
    n += a
  }
  return n + '.gmp'
}
function sendLink(n) {
  function e() {
    var e = {
      xtype: 'textfield',
      width: 360,
      value: rootUrl + 'https://gmapgis.com/index.html?' + n,
      selectOnFocus: !0,
      name: 'Filename',
      fieldLabel: 'Editable'
    },
    t = {
      xtype: 'textfield',
      width: 360,
      value: rootUrl + 'https://gmapgis.com/viewer.html?' + ('fcode=' + fileCode),
      selectOnFocus: !0,
      name: 'Filename',
      fieldLabel: 'View only'
    };
    n.includes('kml') &&
    (
      e = {
        xtype: 'textfield',
        width: 360,
        value: 'kml not editable',
        selectOnFocus: !0,
        name: 'Filename',
        fieldLabel: 'Editable'
      }
    );
    var e = {
      xtype: 'fieldset',
      title: 'Copy Editable or View only  link to share',
      autoHeight: !0,
      defaults: {
        layout: 'form'
      },
      items: [
        t,
        e
      ]
    },
    e = new Ext.FormPanel({
      frame: !0,
      labelWidth: 60,
      defaults: {
        anchor: '95%',
        msgTarget: 'side'
      },
      items: [
        e
      ],
      buttons: [
        {
          text: 'Close',
          handler: function () {
            o.close()
          }
        }
      ]
    }),
    o = new Ext.Window({
      title: '',
      width: 500,
      height: 180,
      y: 250,
      layout: 'fit',
      items: e
    });
    o.show()
  }
  fileCode ? e() : post2PHP(
    'getFileTitle20.php',
    'file=' + n + '&fileCode=',
    function () {
      4 != x.readyState &&
      'complete' != x.readyState ||
      (fileCode = getParameter('fileCode', x.responseText), e())
    }
  )
}
function sendLink2(e) {
  var e = new Ext.FormPanel({
    frame: !0,
    labelWidth: 60,
    defaults: {
      anchor: '95%',
      msgTarget: 'side'
    },
    items: [
      {
        xtype: 'textfield',
        value: 'http://localhost/index.htm?' + e,
        selectOnFocus: !0,
        name: 'Filename',
        fieldLabel: 'Link '
      }
    ],
    buttons: [
      {
        text: 'Close',
        handler: function () {
          t.close()
        }
      }
    ]
  }),
  t = new Ext.Window({
    title: 'Copy link to send',
    width: 500,
    height: 100,
    y: 200,
    layout: 'fit',
    items: e
  });
  t.show()
}
function $(e) {
  return Ext.getCmp(e)
}
function TeYZ(e) {
  layer = new google.maps.FusionTablesLayer({
    query: {
      select: '\'Geocodable address\'',
      from: e[0]
    },
    styles: [
      {
        where: e[1],
        markerOptions: {
          iconName: e[2]
        }
      },
      {
        where: e[3],
        markerOptions: {
          iconName: e[4]
        }
      },
      {
        where: e[5],
        markerOptions: {
          iconName: e[6]
        }
      },
      {
        where: e[7],
        markerOptions: {
          iconName: e[8]
        }
      },
      {
        where: e[9],
        markerOptions: {
          iconName: e[10]
        }
      }
    ]
  }),
  layer.setMap(mp),
  ftLayerOne = !0;
  e = encodeURIComponent('SELECT \'Latitude\', \'Longitude\' FROM ' + e[0]);
  new google.visualization.Query('http://www.google.com/fusiontables/gvizdata?tq=' + e).send(zoomTo)
}
function QtNu() {
  $('ConMenu') &&
  $('ConMenu').destroy();
  var e = new Ext.FormPanel({
    frame: !0,
    border: !0,
    labelWidth: 65,
    defaults: {
      anchor: '95%',
      msgTarget: 'side'
    },
    items: [
      {
        xtype: 'numberfield',
        decimalPrecision: 13,
        id: 'gotoLat',
        name: 'Filename',
        fieldLabel: 'Latitude '
      },
      {
        xtype: 'numberfield',
        decimalPrecision: 13,
        id: 'gotoLong',
        name: 'Filename',
        fieldLabel: 'Longitude '
      }
    ],
    buttons: [
      {
        text: 'Cancel',
        handler: function () {
          b.close()
        }
      },
      {
        text: 'Go',
        handler: function () {
          var e = $('gotoLat').getValue(),
          t = $('gotoLong').getValue(),
          t = new google.maps.LatLng(e, t);
          mp.setCenter(t, startzoom);
          t = new google.maps.Marker({
            position: t,
            title: 'Searched location',
            icon: 'https://maps.google.com/mapfiles/kml/pushpin/red-pushpin.png'
          });
          t.setMap(mp),
          google.maps.event.addListener(t, 'click', function (e) {
          }),
          b.close()
        }
      }
    ]
  });
  b = new Ext.Window({
    width: 350,
    height: 130,
    y: 200,
    closable: !1,
    layout: 'fit',
    items: e
  }),
  b.show()
}
function wSvj() {
  var e = new Ext.Window({
    width: 420,
    y: 200,
    height: 100,
    border: !1,
    layout: 'fit',
    items: [
      {
        xtype: 'form',
        labelWidth: 100,
        frame: !0,
        border: !0,
        buttons: [
          {
            text: 'Save',
            id: 'btnSave',
            handler: function () {
              saveProject($('projFn').getValue() + '.gmp')
            }
          },
          {
            text: 'Close',
            id: 'btnCancel',
            handler: function () {
              e.close()
            }
          },
          {
            text: 'Download',
            id: 'btnDownload',
            disabled: !0,
            handler: function () {
              IE ? window.location = './temp/' + $('projFn').getValue() + '.gmp' : window.open('./temp/' + $('projFn').getValue() + '.gmp', '_newtab')
            }
          }
        ],
        items: [
          {
            fieldLabel: 'Enter file name',
            xtype: 'textfield',
            name: 'filename',
            id: 'projFn',
            anchor: '-18'
          }
        ]
      }
    ]
  });
  e.show()
}
function getFile(e, t) {
  e = 'file=' + e,
  x = xm(),
  null != x &&
  (
    x.open('POST', 'readins.php', !0),
    x.onreadystatechange = t,
    x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'),
    x.send(e)
  )
}
function pmol(e) {
  for (e = e.split('\n'), numMarkers = e.length, i = 0; i < e.length - 1; i++) {
    markerIcon[i] = e[i];
    var t = assemMarker(markerIcon[i]);
    addlisMarker(t),
    markergroup[markergroup.length] = t;
    var o = e[i].split('^');
    markerHTML[markerHTML.length] = o[7],
    mp.addOverlay(t)
  }
}
function LisMarker(t) {
  GEvent.addListener(
    t,
    'click',
    function () {
      for (i = 0; i < markergroup.length; i++) {
        var e;
        t == markergroup[i] &&
        (e = i)
      }
      t.openInfoWindowHtml(markerHTML[e])
    }
  )
}
function makeMarker(e) {
  var t = markerData[0][e];
  icon.image = markerData[1][e];
  var o = new GMarker(t, {
    icon: icon,
    clickable: !0,
    title: markerData[2][e]
  });
  GEvent.addListener(
    o,
    'click',
    function () {
      html = markerData[3][e],
      o.openInfoWindowHtml(html)
    }
  ),
  map.addOverlay(o)
}
function gTcn() {
  return mapType + '^' + mp.getCenter() + '^' + mp.getZoom() + '^~' + vPgn() + '^~' + vzln() + '^~' + vsRc() + '^~' + vmkr() + '^~' + WquY()
}
function vPgn() {
  var e = '';
  for (i = 0; i < polygonGroup.length; i++) {
    e = e + polygonName[i] + '^' + polygonSty[i] + '^' + polygonHTML[i];
    var t = polygonGroup[i].getVertexCount(),
    o = '';
    for (j = 0; j < t; j++) o = o + '~' + polygonGroup[i].getVertex(j).toUrlValue(5);
    e = e + '^' + (o = o.slice(1)) + '\n'
  }
  return e
}
function vmkr() {
  var e = '';
  for (i = 0; i < markergroup.length; i++) e = e + markerIcon[i] + '^' + markerHTML[i] + '\n';
  return e
}
function vzln() {
  var e = '';
  for (i = 0; i < lineGroup.length; i++) {
    e = e + lineName[i] + '^' + lineSty[i] + '^' + lineHTML[i];
    var t = lineGroup[i].getVertexCount(),
    o = '';
    for (j = 0; j < t; j++) o = o + '~' + lineGroup[i].getVertex(j).toUrlValue(5);
    e = e + '^' + (o = o.slice(1)) + '\n'
  }
  return e
}
function vsRc() {
  var e = '';
  for (i = 0; i < rectanGroup.length; i++) {
    e = e + rectanName[i] + '^' + rectanSty[i] + '^' + rectanHTML[i];
    var t = rectanGroup[i].getVertexCount(),
    o = '';
    for (j = 0; j < t; j++) o = o + '~' + rectanGroup[i].getVertex(j).toUrlValue(5);
    e = e + '^' + (o = o.slice(1)) + '\n'
  }
  return e
}
function CpBh(e, t, o, n) {
  o = 'file=' + o,
  x = xm(),
  null == x ? alert('Error: Browser does not support HTTP Request') : (
    x.open('POST', t, !0),
    x.onreadystatechange = n,
    x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'),
    x.setRequestHeader('Content-length', e.length),
    x.setRequestHeader('Connection', 'close'),
    x.send(o + '&content=' + e)
  )
}
function stateChanged() {
  4 != x.readyState &&
  'complete' != x.readyState ||
  alert('File saved successfully')
}
function $$$(e) {
  return Ext.get(e)
}
function startLabDrag(e) {
  var t;
  1 == dragEnabled &&
  0 == event.button &&
  (
    dragID = e.parentNode,
    mousedown = 1,
    (e = dragID.style).cursor = 'move',
    t = e.left.split('p'),
    leftOffset = parseFloat(t[0]) - mouseX,
    t = e.top.split('p'),
    topOffset = parseFloat(t[0]) - mouseY
  )
}
function stopLabDrag(e) {
  var t;
  0 == event.button &&
  (
    dragID.style.cursor = 'default',
    mousedown = 0,
    dragID = '',
    t = getLabelIndex(e),
    thisFeature = geoJsonFile.labelFeatures[t],
    e = overlay.getProjection().fromLatLngToContainerPixel(mp.getCenter()),
    t = mp.getDiv().getBoundingClientRect(),
    e.x = mouseX - t.left,
    e.y = mouseY - t.top + 10,
    e = overlay.getProjection().fromContainerPixelToLatLng(e),
    thisFeature.geometry.coordinates = e,
    reOverlayLabel(thisFeature)
  )
}
function getLabelIndex(e) {
  for (var t = e.id, o = 0; o < geoJsonFile.labelFeatures.length; o++) t == geoJsonFile.labelFeatures[o].properties.title &&
  (thisLabIndex = o);
  return thisLabIndex
}
function contextLabel(e) {
  var t,
  n,
  o,
  i;
  0 != event.button &&
  (
    destroyContexMenu(),
    t = getLabelIndex(e),
    (thisFeature = geoJsonFile.labelFeatures[t]).apiObj,
    n = thisFeature.properties.style,
    thisFeature.geometry.coordinates,
    o = fromLatLngToPixels(thisFeature.geometry.coordinates),
    i = new Ext.menu.ColorMenu({
      text: 'colorMenu',
      icon: 'color',
      handler: function (e, t) {
        var o = n.split('^');
        o[3] = '#' + t,
        n = o[0] + '^' + o[1] + '^' + o[2] + '^' + o[3] + '^' + o[4] + '^' + o[5],
        thisFeature.properties.style = n,
        reOverlayLabel(thisFeature)
      }
    }),
    e = new Ext.menu.ColorMenu({
      text: 'colorMenu',
      icon: 'color',
      handler: function (e, t) {
        var o = n.split('^');
        o[5] = '#' + t,
        n = o[0] + '^' + o[1] + '^' + o[2] + '^' + o[3] + '^' + o[4] + '^' + o[5],
        thisFeature.properties.style = n,
        reOverlayLabel(thisFeature)
      }
    }),
    conteMenu = new Ext.menu.Menu({
      width: 100,
      height: 290,
      margin: '0 0 10 0',
      floating: !1,
      listeners: {
        mouseover: function () {
        },
        mouseout: function () {
        }
      },
      items: [
        '-',
        {
          text: '<b><font color=\'#230876\' size=\'2\'>Edit  &nbsp</font></b>',
          handler: editLabel
        },
        {
          text: '<b><font color=\'#230876\' size=\'2\'>Grow font &nbsp</font></b>',
          handler: function () {
            chgFont('g')
          }
        },
        {
          text: '<b><font color=\'#230876\' size=\'2\'>Shrink font &nbsp</font></b>',
          handler: function () {
            chgFont('s')
          }
        },
        '-',
        {
          text: '<b><font color=\'#230876\' size=\'2\'>Font color &nbsp</font></b>',
          menu: e
        },
        {
          text: '<b><font color=\'#230876\' size=\'2\'>Background color &nbsp</font></b>',
          menu: i
        },
        '-',
        {
          text: '<b><font color=\'#230876\' size=\'2\'>Copy style &nbsp</font></b>',
          handler: function () {
            copyLabSty = thisFeature.properties.style,
            $('ConMenu').destroy()
          }
        },
        {
          text: '<b><font color=\'#230876\' size=\'2\'>Paste style &nbsp</font></b>',
          handler: function () {
            thisFeature.properties.style = copyLabSty,
            reOverlayLabel(thisFeature)
          }
        },
        {
          text: '<b><font color=\'#230876\' size=\'2\'>Set as default &nbsp</font></b>',
          handler: function () {
            dflsty = thisFeature.properties.style,
            $('ConMenu').destroy()
          }
        },
        '-',
        {
          text: '<b><font color=\'#230876\' size=\'2\'>Duplicate &nbsp</font></b>',
          handler: function () {
            overlayLabel(
              thisFeature.geometry.coordinates,
              thisFeature.properties.info,
              thisFeature.properties.style
            )
          }
        },
        {
          text: '<b><font color=\'#230876\' size=\'2\'>Delete &nbsp</font></b>',
          handler: function () {
            thisFeature.apiObj.setMap(null),
            geoJsonFile.labelFeatures.splice(t, 1),
            destroyContexMenu()
          }
        },
        '-'
      ]
    }),
    new Ext.Window({
      frame: !1,
      x: o.x + 100,
      y: o.y + 50,
      id: 'ConMenu',
      width: 200,
      layout: 'fit',
      closable: !1,
      items: [
        conteMenu
      ]
    }).show()
  )
}
function reOverlayLabel(e) {
  var t = e.geometry.coordinates,
  o = e.properties.info,
  n = e.properties.style,
  i = n.split('^');
  i[4].includes('px') ||
  (
    'medium' == i[4] ? i[4] = '14px' : 'large' == i[4] ? i[4] = '16px' : 'small' == i[4] &&
    (i[4] = '12px'),
    n = i[0] + '^' + i[1] + '^' + i[2] + '^' + i[3] + '^' + i[4] + '^' + i[5],
    e.properties.style = n
  );
  n = i[4].slice(0, - 2);
  let a = parseInt(n, 10);
  a < 0 ? a = 0 : 16 < a &&
  (a = 16),
  i[4] = a + 'px';
  n = document.createElement('div');
  n.id = 'lab' + randomString(5),
  n.innerHTML = o,
  n.style.backgroundColor = i[3],
  n.style.fontSize = i[4],
  n.style.color = i[5],
  n.onmousedown = function () {
    startLabDrag(this)
  },
  n.onmouseup = function () {
    stopLabDrag(this)
  },
  n.oncontextmenu = function () {
    contextLabel(this)
  };
  t = new gmapgisLabel(t, n);
  'obj' == e.apiObj ||
  e.apiObj.setMap(null),
  e.apiObj = t,
  e.properties.title = n.id,
  t.setMap(mp),
  n.parentNode.style.left = '0px',
  n.parentNode.style.top = '0px',
  destroyContexMenu()
}
function getInfoWin(e, t) {
  myInfoWindow &&
  myInfoWindow.setMap(null),
  i = mobile ? '200px' : '300px';
  var o = dflsty.split('^'),
  n = document.createElement('div');
  n.id = 'lab' + randomString(5),
  n.innerHTML = t,
  n.style.backgroundColor = '#CCD1D1',
  n.style.fontSize = o[4],
  n.style.color = o[5],
  n.style.width = i,
  n.ondblclick = function () {
    myInfoWindow.setMap(null)
  };
  var i = thisFeature.type;
  (myInfoWindow = new gmapgisInfoWin(e, n, i)).setMap(mp)
}
function overlayLabel(e, t, o) {
  o = o ||
  dflsty,
  t = t ||
  'Right click me',
  e = e ||
  mp.getCenter();
  var n = o.split('^');
  'medium' == n[4] &&
  (n[4] = '14px');
  var i = document.createElement('div');
  i.id = 'lab' + randomString(5),
  i.innerHTML = t,
  i.style.backgroundColor = n[3],
  i.style.fontSize = n[4],
  i.style.color = n[5],
  i.style.cursor = 'pointer',
  i.style.height = '200',
  i.onmousedown = function () {
    startLabDrag(this)
  },
  i.onmouseup = function () {
    stopLabDrag(this)
  },
  i.oncontextmenu = function () {
    contextLabel(this)
  };
  t = new gmapgisLabel(e, i);
  t.setMap(mp);
  geoJsonFile.labelFeatures.push({
    type: 'label',
    apiObj: ' ',
    properties: {
      title: 'Label',
      style: '',
      info: ''
    },
    geometry: {
      type: 'Label',
      coordinates: []
    }
  });
  n = geoJsonFile.labelFeatures.length - 1;
  geoJsonFile.labelFeatures[n].properties.style = o,
  geoJsonFile.labelFeatures[n].properties.title = i.id,
  geoJsonFile.labelFeatures[n].properties.info = i.innerHTML,
  geoJsonFile.labelFeatures[n].apiObj = t,
  geoJsonFile.labelFeatures[n].geometry.coordinates = e,
  $('mArea').pressed &&
  (
    geoJsonFile.labelFeatures[n].type = 'labelArea',
    geoJsonFile.labelFeatures[n].properties.style = 'double^medium^#000000^#99FFFF^14px^#000000'
  ),
  i.parentNode.style.left = '0px',
  i.parentNode.style.top = '0px'
}
function contextMenuInfowin() {
  destroyContexMenu(),
  'point' == thisFeature.type &&
  (
    e = thisFeature.geometry.coordinates,
    clickLatlng = new google.maps.LatLng(e[0], e[1])
  );
  var e = fromLatLngToPixels(clickLatlng);
  conteMenu = new Ext.menu.Menu({
    width: 100,
    height: 130,
    margin: '0 0 10 0',
    floating: !1,
    listeners: {
      mouseover: function () {
      },
      mouseout: function () {
      }
    },
    items: [
      '-',
      {
        text: '<b><font color=\'#230876\' size=\'2\'>Edit  &nbsp</font></b>',
        handler: shapesTbar
      },
      {
        text: '<b><font color=\'#230876\' size=\'2\'>Copy  &nbsp</font></b>',
        handler: function () {
          copyInfoHTML = thisFeature.properties.info,
          destroyContexMenu()
        }
      },
      {
        text: '<b><font color=\'#420BEE\' size=\'2\'>Paste &nbsp</font></b>',
        handler: function () {
          thisFeature.properties.info = copyInfoHTML,
          showInfowin(clickLatlng, thisFeature),
          destroyContexMenu()
        }
      },
      {
        text: '<b><font color=\'#230876\' size=\'2\'>Set as default &nbsp</font></b>',
        handler: function () {
          defaultInfoHTML = thisFeature.properties.info,
          destroyContexMenu()
        }
      },
      '-'
    ]
  }),
  new Ext.Window({
    frame: !1,
    x: e.x,
    y: e.y,
    id: 'ConMenu',
    width: 200,
    layout: 'fit',
    closable: !1,
    items: [
      conteMenu
    ]
  }).show()
}
function overlayInfoWin(e, t, o) {
  o = o ||
  dflsty,
  t = t ||
  'New label',
  e = e ||
  mp.getCenter();
  var n = o.split('^'),
  o = document.createElement('div');
  o.id = 'lab' + randomString(5),
  o.innerHTML = t,
  o.style.backgroundColor = n[3],
  o.style.fontSize = n[4],
  o.style.color = n[5];
  new gmapgisLabel(e, o);
  MyPopup.setMap(mp)
}
function label2Windows() {
  hidelabels(!0);
  var e = new google.maps.InfoWindow({
    size: new google.maps.Size(292, 120)
  });
  e.setContent('Hello'),
  e.setPosition(clickLatlng),
  e.setOptions({
    pixelOffset: new google.maps.Size(0, - 32)
  }),
  e.open(mp)
}
function labelExt() {
  var e = mp.getCenter().lng(),
  t = mp.getBounds().getNorthEast().lat();
  labelPoint = new google.maps.LatLng({
    lat: t,
    lng: e
  });
  geoJsonFile.labelFeatures;
  var o = 'lab' + randomString(5);
  geoJsonFile.labelFeatures.push({
    type: 'label',
    apiObj: ' ',
    properties: {
      title: 'Label',
      style: '',
      info: ''
    },
    geometry: {
      type: 'Label',
      coordinates: []
    }
  });
  var n = geoJsonFile.labelFeatures.length - 1;
  geoJsonFile.labelFeatures[n].properties.style = dflsty,
  geoJsonFile.labelFeatures[n].properties.info = 'New label text',
  geoJsonFile.labelFeatures[n].apiObj = o,
  geoJsonFile.labelFeatures[n].geometry.coordinates = labelPoint,
  insLab(o);
  t = fromLatLngToPixels(labelPoint),
  e = $$(o).style;
  e.top = t.y + 'px',
  e.left = t.x + 'px',
  formatLabel(o, dflsty),
  $$(o).innerHTML = geoJsonFile.labelFeatures[n].properties.info
}
function insLegendtemp() {
  $$$(mp.getDiv().id).createChild(
    '<div id="legend" style="padding-left: 3px; padding-right: 3px;padding-top: 1px;padding-bottom: 1px;position: absolute; " onmousedown = "startDrag(this)" onmouseup = "stopDrag ()"></div>'
  );
  var e = $$('legend');
  e.style.top = '100px',
  e.style.left = '100px',
  e.innerHTML = 'This is a new legend'
}
function insLab(e) {
  var t = '<div id=' + e + ' style="padding-left: 3px; padding-right: 3px;padding-top: 1px;padding-bottom: 1px;position: absolute;border-radius: 5px; " oncontextmenu="contextMenuLabel(this.id)" onmousedown = "startDrag(this)" onmouseup = "stopDrag ()"></div>';
  $$$(mp.getDiv().id).createChild(t),
  contextMenuLabel(e)
}
function fromLatLngToPixels(e) {
  return overlay.getProjection().fromLatLngToContainerPixel(e)
}
function fromPixelsToLatLng(e) {
  return overlay.getProjection().fromLatLngToContainerPixel(e)
}
function getLabStyle(e) {
  e = $$(e).style;
  return e.borderStyle + '^' + e.borderWidth + '^' + rgbToHex(e.borderColor) + '^' + rgbToHex(e.backgroundColor) + '^' + e.fontSize + '^' + rgbToHex(e.color)
}
function formatLabel(e, t) {
  t = t.split('^'),
  e = $$(e).style;
  e.borderStyle = t[0],
  e.borderWidth = t[1],
  e.borderColor = t[2],
  e.backgroundColor = t[3],
  e.fontSize = t[4],
  e.color = t[5]
}
function hidelabels(o) {
  var e = geoJsonFile.labelFeatures;
  if (o) for (var t = 0; t < e.length; t++) $$(e[t].apiObj).style.visibility = 'hidden';
   else for (t = 0; t < e.length; t++) $$(e[t].apiObj).style.visibility = 'visible';
  Ext.getCmp('treePan').getRootNode().cascade(
    function (e) {
      if (e.isLeaf() && e.attributes.checked) {
        var t = jsonRead(e.id);
        for (i = 0; i < t.length - 1; i++) 'object' == typeof t[i].apiObj ||
        ($$(t[i].apiObj).style.visibility = o ? 'hidden' : 'visible')
      }
    }
  )
}
function moveLabels() {
  if (!labelsHidden) {
    for (var e = 0; e < geoJsonFile.labelFeatures.length; e++) {
      var t = $$(geoJsonFile.labelFeatures[e].apiObj).style,
      o = fromLatLngToPixels(geoJsonFile.labelFeatures[e].geometry.coordinates);
      t.top = o.y + 'px',
      t.left = o.x + 'px'
    }
    Ext.getCmp('treePan').getChecked();
    Ext.getCmp('treePan').getRootNode().cascade(
      function (e) {
        if (e.isLeaf() && e.attributes.checked) {
          var t,
          o,
          n = jsonRead(e.id);
          for (i = 0; i < n.length - 1; i++) 'object' == typeof n[i].apiObj ||
          (
            t = $$(n[i].apiObj).style,
            o = fromLatLngToPixels(n[i].properties.info),
            t.top = o.y + 'px',
            t.left = o.x + 'px'
          )
        }
      }
    )
  }
}
function WquY() {
  var e = '';
  for (i = 0; i < labID.length; i++) e = e + labStyle[i] + '^' + labPos[i] + '^' + $$(labID[i]).innerHTML + '\n';
  return e
}
function delLab(e) {
  spliceThisFeature(),
  $$(e).parentNode.removeChild($$(e))
}
function RlBi(e) {
  $$(e).style.visibility = 'visible',
  $$(e).innerHTML = $('labHTML').getRawValue()
}
function getGpoint(e) {
  return e = e.split(','),
  new google.maps.LatLng(parseFloat(e[0].slice(1)), parseFloat(e[1]))
}
function SlYf(e) {
  return e.split('^')
}
function PkLb(e) {
  return e[0] + '^' + e[1] + '^' + e[2] + '^' + e[3]
}
function labelEditor(n) {
  for (i = 0; i < labID.length; i++) {
    var a;
    n == labID[i] &&
    (a = i)
  }
  var e = new Ext.menu.ColorMenu({
    text: 'colorMenu',
    icon: 'color',
    handler: function (e, t) {
      var o = SlYf(labStyle[a]);
      o[2] = '#' + t,
      labStyle[a] = PkLb(o),
      formatLabel(n, labStyle[a] + '^' + labPos[a])
    }
  }),
  t = new Ext.Button({
    fieldLabel: 'Border',
    text: 'Color',
    iconCls: 'color',
    menu: e
  }),
  o = new Ext.menu.ColorMenu({
    text: 'colorMenu',
    icon: 'color',
    handler: function (e, t) {
      var o = SlYf(labStyle[a]);
      o[3] = '#' + t,
      labStyle[a] = PkLb(o),
      formatLabel(n, labStyle[a] + '^' + labPos[a])
    }
  }),
  e = new Ext.Button({
    fieldLabel: 'Background',
    text: 'Color',
    iconCls: 'color',
    menu: o
  }),
  o = (
    new Ext.menu.ColorMenu({
      text: 'colorMenu',
      handler: function (e, t) {
        var o = SlYf(labStyle[a]);
        o[2] = '#' + t,
        labStyle[a] = PkLb(o),
        formatLabel(n, labStyle[a] + '^' + labPos[a])
      }
    }),
    new Ext.menu.ColorMenu({
      text: 'colorMenu',
      handler: function (e, t) {
        var o = SlYf(labStyle[a]);
        o[3] = '#' + t,
        labStyle[a] = PkLb(o),
        formatLabel(n, labStyle[a] + '^' + labPos[a])
      }
    })
  ),
  o = new Ext.FormPanel({
    labelAlign: 'top',
    frame: !0,
    autoHeight: !0,
    items: [
      {
        layout: 'column',
        items: [
          {
            columnWidth: 0.5,
            layout: 'form',
            items: [
              e
            ]
          },
          {
            columnWidth: 0.5,
            layout: 'form',
            items: [
              t
            ]
          }
        ]
      },
      {
        xtype: 'htmleditor',
        id: 'labHTML',
        width: 500,
        height: 75,
        anchor: '98%'
      }
    ],
    buttons: [
      {
        text: 'Update',
        handler: function () {
          RlBi(n)
        }
      },
      {
        text: 'Delete',
        handler: function () {
          delLab(n),
          $('winLabel').close(),
          $('label').enable()
        }
      },
      {
        text: 'Close',
        handler: function () {
          $('winLabel').close(),
          $('label').enable()
        }
      }
    ]
  });
  new Ext.Window({
    title: ' ',
    id: 'winLabel',
    closable: !1,
    width: 545,
    layout: 'fit',
    items: o
  }).show()
}
function getBrdWd(e) {
  return 'Default' == e ||
  'Thin' == e ? 'thin' : 'Medium' == e ? 'medium' : 'Thick' == e ? 'thick' : void 0
}
function getBrdSty(e) {
  return 'Default' == e ? 'solid' : 'Dashed' == e ? 'dashed' : 'Dotted' == e ? 'dotted' : 'Double' == e ? 'double' : 'Inset' == e ? 'inset' : 'Outset' == e ? 'outset' : 'Groove' == e ? 'groove' : 'Ridge' == e ? 'ridge' : 'Solid' == e ? 'solid' : void 0
}
function udhT() {
  var e = '<div class=\'infowindow\'>';
  e += $('mrkHTML').getRawValue(),
  markerHTML[thisRecord] = e
}
function rpmr() {
  var e = assemMarker(markerIcon[fR]);
  addlisMarker(e),
  mp.removeOverlay(markergroup[fR]),
  mp.addOverlay(e),
  markergroup[fR] = e
}
function markerSize(e, t) {
  var o = spltMrkSty();
  o[3] = t,
  updateMrkStyle(o),
  replaceMrker()
}
function psSO() {
  return markerIcon[fR].split('^')
}
function utMS(e) {
  markerIcon[fR] = e[0] + '^' + e[1] + '^' + e[2] + '^' + e[3] + '^' + e[4] + '^' + e[5] + '^' + e[6]
}
function replaceMrker() {
  markergroup[fR].setMap();
  var e = assemMarker(markerIcon[fR]);
  addlisMarker(e),
  e.setMap(mp),
  markergroup[fR] = e
}
function spltMrkSty() {
  return markerIcon[fR].split('^')
}
function updateMrkStyle(e) {
  markerIcon[fR] = e[0] + '^' + e[1] + '^' + e[2] + '^' + e[3] + '^' + e[4] + '^' + e[5] + '^' + e[6],
  markerSty[fR] = e[2] + '^' + e[3] + '^' + e[4] + '^' + e[5] + '^' + e[6]
}
function updateMrkHTML() {
  var e = '<div class=\'infowindow\'>';
  e += $('mrkHTML').getRawValue(),
  markerHTML[thisRecord] = e
}
function destroyContexMenu() {
  $('ConMenu') ? $('ConMenu').destroy() : google.maps.event.addListenerOnce(
    mp,
    'click',
    function (e) {
      destroyContexMenu(),
      myInfoWindow &&
      myInfoWindow.setMap(null)
    }
  )
}
function mobileMenu() {
  destroyContexMenu(),
  conteMenu = new Ext.menu.Menu({
    width: 100,
    height: 290,
    margin: '0 0 10 0',
    floating: !1,
    listeners: {
      mouseover: function () {
      },
      mouseout: function () {
      }
    },
    items: [
      '-',
      {
        id: 'sat',
        text: '<b><font color=\'#230876\' size=\'2\'>Sattelite &nbsp</font></b>',
        handler: onItemClick
      },
      {
        id: 'str',
        text: '<b><font color=\'#420BEE\' size=\'2\'>Street &nbsp</font></b>',
        handler: onItemClick
      },
      {
        id: 'hyb',
        text: '<b><font color=\'#230876\' size=\'2\'>Hybrid &nbsp</font></b>',
        handler: onItemClick
      },
      {
        id: 'rel',
        text: '<b><font color=\'#230876\' size=\'2\'>Relief &nbsp</font></b>',
        handler: onItemClick
      },
      '-',
      {
        id: 'load-tree',
        text: '<b><font color=\'#230876\' size=\'2\'>Load project&nbsp</font></b',
        handler: function () {
          Ext.MessageBox.prompt(
            '',
            'Enter project file name:',
            function (e, t) {
              'ok' == e &&
              (
                (e = Ext.getCmp('treePan')).getLoader().dataUrl = './projects/' + t,
                e.getRootNode().reload(),
                e.getRootNode().expand(!0),
                treeJsonFile = t,
                Ext.MessageBox.confirm(
                  '',
                  'Set this as default project?',
                  function (e) {
                    'yes' == e &&
                    cc('treeJson', treeJsonFile, 2000)
                  }
                ),
                readProject()
              )
            }
          )
        }
      },
      {
        id: 'resetPro',
        text: '<b><font color=\'#230876\' size=\'2\'>Reset projct &nbsp</font></b>',
        handler: function () {
          Ext.MessageBox.confirm(
            '',
            'Are you sure to set the project to default',
            function (e) {
              'yes' == e &&
              cc('treeJson', 'default.json', 2000)
            }
          )
        }
      },
      '-'
    ]
  }),
  new Ext.Window({
    frame: !1,
    x: mouseX,
    y: mouseY,
    id: 'ConMenu',
    width: 200,
    height: 230,
    layout: 'fit',
    closable: !1,
    items: [
      conteMenu
    ]
  }).show()
}
function onItemCheck(e, t) {
  destroyContexMenu(),
  e.text.includes('legend') ? e.checked ? $$('legend-div').style.visibility = 'visible' : $$('legend-div').style.visibility = 'hidden' : e.text.includes('coordinates') ? e.checked ? (shoCor = !0, $$('mDistance').style.visibility = 'visible') : (shoCor = !1, $$('mDistance').style.visibility = 'hidden') : e.text.includes('windows') ? showInfo = !!e.checked : e.text.includes('labels') &&
  hidelabels(labelsHidden = !!e.checked),
  e.text.includes('stich') &&
  e.checked
}
function contextMapMenu(e) {
  destroyContexMenu();
  e = fromLatLngToPixels(clickLatlng = e);
  0 < labID.length &&
  'hidden' == $$(labID[0]).style.visibility &&
  (hideLabel = !0),
  conteMenu = new Ext.menu.Menu({
    width: 100,
    height: 240,
    margin: '0 0 10 0',
    floating: !1,
    listeners: {
      mouseover: function () {
      },
      mouseout: function () {
      }
    },
    items: [
      '-',
      {
        id: 'sat',
        text: '<b><font color=\'#230876\' size=\'2\'>Sattelite &nbsp</font></b>',
        handler: onItemClick
      },
      {
        id: 'str',
        text: '<b><font color=\'#420BEE\' size=\'2\'>Street &nbsp</font></b>',
        handler: onItemClick
      },
      {
        id: 'hyb',
        text: '<b><font color=\'#230876\' size=\'2\'>Hybrid &nbsp</font></b>',
        handler: onItemClick
      },
      {
        id: 'rel',
        text: '<b><font color=\'#230876\' size=\'2\'>Relief &nbsp</font></b>',
        handler: onItemClick
      },
      {
        checked: shoCor,
        text: '<b><font color=\'#230876\' size=\'2\'>Mouse coordinates &nbsp</font></b>',
        checkHandler: onItemCheck
      },
      {
        id: 'copyCor',
        text: '<b><font color=\'#230876\' size=\'2\'>Copy mouse coordinates &nbsp</font></b>',
        handler: onItemClick
      },
      {
        text: '<b><font color=\'#230876\' size=\'2\'>Go to coordinates &nbsp</font></b>',
        id: 'gtCoordi',
        iconCls: 'gtcoordi',
        handler: QtNu
      },
      {
        text: '<b><font color=\'#230876\' size=\'2\'>Set as home &nbsp</font></b>',
        id: 'setHm',
        iconCls: 'mapcentre',
        handler: onItemClick
      },
      {
        text: '<b><font color=\'#230876\' size=\'2\'>Pan to home location &nbsp</font></b>',
        id: 'hm',
        iconCls: 'mapcentre',
        handler: onItemClick
      },
      '-'
    ]
  }),
  new Ext.Window({
    frame: !1,
    x: e.x + 200,
    y: e.y + 40,
    id: 'ConMenu',
    width: 200,
    layout: 'fit',
    closable: !1,
    items: [
      conteMenu
    ]
  }).show(),
  file2save &&
  $('shLeg').enable()
}
function mobWestMenu() {
  conteMenu = new Ext.menu.Menu({
    width: 100,
    height: 290,
    margin: '0 0 10 0',
    floating: !1,
    listeners: {
      mouseover: function () {
      },
      mouseout: function () {
      }
    },
    items: [
      '-',
      {
        id: 'sat',
        text: '<b><font color=\'#230876\' size=\'2\'>Sattelite &nbsp</font></b>',
        handler: onItemClick
      },
      {
        id: 'str',
        text: '<b><font color=\'#420BEE\' size=\'2\'>Street &nbsp</font></b>',
        handler: onItemClick
      },
      {
        id: 'hyb',
        text: '<b><font color=\'#230876\' size=\'2\'>Hybrid &nbsp</font></b>',
        handler: onItemClick
      },
      {
        id: 'rel',
        text: '<b><font color=\'#230876\' size=\'2\'>Relief &nbsp</font></b>',
        handler: onItemClick
      },
      '-',
      {
        checked: legend,
        text: '<b><font color=\'#230876\' size=\'2\'>Show legend &nbsp</font></b>',
        checkHandler: onItemCheck
      },
      {
        checked: hideLabel,
        text: '<b><font color=\'#230876\' size=\'2\'>Hide labels &nbsp</font></b>',
        checkHandler: onItemCheck
      },
      {
        checked: infoWindow,
        text: '<b><font color=\'#230876\' size=\'2\'>No click popups &nbsp</font></b>',
        checkHandler: onItemCheck
      },
      '-',
      {
        checked: shoCor,
        text: '<b><font color=\'#230876\' size=\'2\'>Mouse coordinates &nbsp</font></b>',
        checkHandler: onItemCheck
      },
      {
        text: '<b><font color=\'#230876\' size=\'2\'>Go to coordinates &nbsp</font></b>',
        id: 'gtCoordi',
        iconCls: 'gtcoordi',
        handler: QtNu
      },
      {
        text: '<b><font color=\'#230876\' size=\'2\'>Go to device location &nbsp</font></b>',
        id: 'gtCoordi',
        iconCls: 'gtcoordi',
        handler: showLocation
      },
      {
        text: '<b><font color=\'#230876\' size=\'2\'>Pan to home location &nbsp</font></b>',
        id: 'hm',
        iconCls: 'mapcentre',
        handler: onItemClick
      },
      '-'
    ]
  })
}
function adsenseWin() {
  alert('ad--yyy-s'),
  $('adWin') &&
  $('adWin').destroy();
  var e = new Ext.Panel({
    frame: !0,
    y: 100,
    autoHeight: !0,
    width: 400,
    html: ' <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script> <ins class="adsbygoogle"style="display:inline-block;width:728px;height:90px"data-ad-client="ca-pub-3591669422529050"data-ad-slot="3955935736"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>',
    items: []
  });
  new Ext.Window({
    frame: !1,
    x: 200,
    y: 200,
    id: 'adWin',
    width: 900,
    height: 260,
    layout: 'fit',
    closable: !1,
    items: [
      e
    ]
  }).show()
}
function contextArrowMenu(e, n) {
  destroyContexMenu(),
  editFeature = getFeatureByObj(n);
  var t = fromLatLngToPixels(clickLatlng = e),
  e = new Ext.menu.ColorMenu({
    handler: function (e, t) {
      var o = editFeature.properties.style.split(',');
      o[0] = '#' + t,
      editFeature.properties.style = o[0] + ',' + o[1] + ',' + o[2] + ',' + o[3] + ',' + o[4] + ',' + o[5],
      n.setOptions({
        strokeColor: o[0]
      })
    }
  });
  function o(e) {
    var t = Number(e.value),
    e = editFeature.properties.style.split(',');
    e[1] = t,
    editFeature.properties.style = e[0] + ',' + e[1] + ',' + e[2] + ',' + e[3] + ',' + e[4] + ',' + e[5],
    n.setOptions({
      strokeWeight: t
    })
  }
  conteMenu = new Ext.menu.Menu({
    width: 100,
    height: 300,
    margin: '0 0 10 0',
    floating: !1,
    listeners: {
      mouseover: function () {
      },
      mouseout: function () {
      }
    },
    items: [
      '-',
      {
        text: '<b><font color=\'#230876\' size=\'2\'>Edit name & description &nbsp</font></b>',
        handler: shapesTbar
      },
      {
        text: '<b><font color=\'#230876\' size=\'2\'>Toggle edit &nbsp</font></b>',
        handler: function () {
          togEdit(n),
          $('ConMenu').destroy()
        }
      },
      {
        id: 'togdrag',
        text: '<b><font color=\'#230876\' size=\'2\'>Toggle drag &nbsp</font></b>',
        handler: function () {
          togDrag(n),
          $('ConMenu').destroy()
        }
      },
      '-',
      {
        text: '<b><font color=\'#230876\' size=\'2\'>Choose color &nbsp</font></b>',
        menu: e
      },
      {
        id: 'arroWeight',
        text: '<b><font color=\'#230876\' size=\'2\'>Choose weight &nbsp</font></b>',
        menu: [
          {
            text: '<b><font color=\'#230876\' size=\'2\'> 1 &nbsp</font></b>',
            value: 1,
            handler: o
          },
          {
            text: '<b><font color=\'#230876\' size=\'2\'> 2 &nbsp</font></b>',
            value: 2,
            handler: o
          },
          {
            text: '<b><font color=\'#230876\' size=\'2\'> 3 &nbsp</font></b>',
            value: 3,
            handler: o
          },
          {
            text: '<b><font color=\'#230876\' size=\'2\'> 4 &nbsp</font></b>',
            value: 4,
            handler: o
          },
          {
            text: '<b><font color=\'#230876\' size=\'2\'> 5 &nbsp</font></b>',
            value: 5,
            handler: o
          },
          {
            text: '<b><font color=\'#230876\' size=\'2\'> 6 &nbsp</font></b>',
            value: 6,
            handler: o
          }
        ]
      },
      {
        text: '<b><font color=\'#230876\' size=\'2\'>Styles &nbsp</font></b>',
        menu: [
          {
            text: '<b><font color=\'#230876\' size=\'2\'>Set as default &nbsp</font></b>',
            handler: function () {
              $('ConMenu').destroy(),
              defArrowSty = thisFeature.properties.style
            }
          },
          '-',
          {
            text: '<b><font color=\'#230876\' size=\'2\'>Copy style &nbsp</font></b>',
            handler: function () {
              $('ConMenu').destroy(),
              copySty = thisFeature.properties.style
            }
          },
          {
            text: '<b><font color=\'#230876\' size=\'2\'>Paste style &nbsp</font></b>',
            handler: function () {
              $('ConMenu').destroy(),
              thisFeature.properties.style = copySty;
              var e = shapeOptions(thisFeature.properties.style);
              thisFeature.apiObj.setOptions(e)
            }
          }
        ]
      },
      '-',
      {
        text: '<b><font color=\'#230876\' size=\'2\'>Duplicate &nbsp</font></b>',
        handler: function () {
          dupLine(n),
          $('ConMenu').destroy()
        }
      },
      {
        text: '<b><font color=\'#230876\' size=\'2\'> Properties &nbsp</font></b>',
        handler: function () {
          lineProperties(n),
          $('ConMenu').destroy()
        }
      },
      {
        text: '<b><font color=\'#230876\' size=\'2\'>Delete &nbsp</font></b>',
        handler: function () {
          spliceThisFeature(),
          $('ConMenu').destroy()
        }
      },
      '-'
    ]
  }),
  new Ext.Window({
    frame: !1,
    x: t.x + 20,
    y: t.y,
    id: 'ConMenu',
    width: 200,
    layout: 'fit',
    closable: !1,
    items: [
      conteMenu
    ]
  }).show(),
  n.draggable ? (
    $('togdrag').addClass('highlight-menu-item'),
    $('togdrag').setText(
      '<b><font color=\'#230876\' size=\'2\'>Draggable &nbsp</font></b>'
    )
  ) : (
    $('togdrag').removeClass('highlight-menu-item'),
    $('togdrag').setText(
      '<b><font color=\'#230876\' size=\'2\'>Toggle drag &nbsp</font></b>'
    )
  )
}
function contextLineMenu(e, t) {
  destroyContexMenu(),
  editFeature = getFeatureByObj(t);
  e = fromLatLngToPixels(clickLatlng = e);
  conteMenu = new Ext.menu.Menu({
    width: 100,
    height: 300,
    margin: '0 0 10 0',
    floating: !1,
    listeners: {
      mouseover: function () {
      },
      mouseout: function () {
      }
    },
    items: [
      '-',
      {
        text: '<b><font color=\'#230876\' size=\'2\'>Edit name & description &nbsp</font></b>',
        handler: shapesTbar
      },
      {
        text: '<b><font color=\'#230876\' size=\'2\'>Toggle edit &nbsp</font></b>',
        handler: function () {
          togEdit(t),
          $('ConMenu').destroy()
        }
      },
      {
        id: 'togdrag',
        text: '<b><font color=\'#230876\' size=\'2\'>Toggle drag &nbsp</font></b>',
        handler: function () {
          togDrag(t),
          $('ConMenu').destroy()
        }
      },
      '-',
      {
        text: '<b><font color=\'#230876\' size=\'2\'>Styles &nbsp</font></b>',
        menu: [
          {
            text: '<b><font color=\'#230876\' size=\'2\'>Change style &nbsp</font></b>',
            handler: mapLineWin
          },
          {
            text: '<b><font color=\'#230876\' size=\'2\'>Set as default &nbsp</font></b>',
            handler: function () {
              $('ConMenu').destroy(),
              defLineSty = thisFeature.properties.style
            }
          },
          '-',
          {
            text: '<b><font color=\'#230876\' size=\'2\'>Copy style &nbsp</font></b>',
            handler: function () {
              $('ConMenu').destroy(),
              copySty = thisFeature.properties.style
            }
          },
          {
            text: '<b><font color=\'#230876\' size=\'2\'>Paste style &nbsp</font></b>',
            handler: function () {
              $('ConMenu').destroy(),
              thisFeature.properties.style = copySty;
              var e = shapeOptions(thisFeature.properties.style);
              thisFeature.apiObj.setOptions(e)
            }
          }
        ]
      },
      '-',
      {
        text: '<b><font color=\'#230876\' size=\'2\'>Duplicate &nbsp</font></b>',
        handler: function () {
          dupLine(t),
          $('ConMenu').destroy()
        }
      },
      {
        text: '<b><font color=\'#230876\' size=\'2\'>Convert to polygon &nbsp</font></b>',
        handler: function () {
          line2Poly(t),
          $('ConMenu').destroy()
        }
      },
      {
        text: '<b><font color=\'#230876\' size=\'2\'>Export coordinates as csv &nbsp</font></b>',
        handler: function () {
          poly2csv(t),
          $('ConMenu').destroy()
        }
      },
      {
        text: '<b><font color=\'#230876\' size=\'2\'> Properties &nbsp</font></b>',
        handler: function () {
          lineProperties(t),
          $('ConMenu').destroy()
        }
      },
      {
        text: '<b><font color=\'#230876\' size=\'2\'>Delete &nbsp</font></b>',
        handler: function () {
          spliceThisFeature(),
          $('ConMenu').destroy()
        }
      },
      '-'
    ]
  }),
  new Ext.Window({
    frame: !1,
    x: e.x + 20,
    y: e.y,
    id: 'ConMenu',
    width: 200,
    layout: 'fit',
    closable: !1,
    items: [
      conteMenu
    ]
  }).show(),
  t.draggable ? (
    $('togdrag').addClass('highlight-menu-item'),
    $('togdrag').setText(
      '<b><font color=\'#230876\' size=\'2\'>Draggable &nbsp</font></b>'
    )
  ) : (
    $('togdrag').removeClass('highlight-menu-item'),
    $('togdrag').setText(
      '<b><font color=\'#230876\' size=\'2\'>Toggle drag &nbsp</font></b>'
    )
  )
}
function chgFont(e) {
  var t = thisFeature.properties.style,
  o = t.split('^'),
  n = o[4];
  n = 'g' == e ? parseInt(n, 10) + 2 + 'px' : parseInt(n, 10) - 2 + 'px',
  o[4] = n,
  t = o[0] + '^' + o[1] + '^' + o[2] + '^' + o[3] + '^' + o[4] + '^' + o[5],
  thisFeature.properties.style = t,
  reOverlayLabel(thisFeature),
  destroyContexMenu()
}
function changeFontSize(e) {
  for (i = 0; i < geoJsonFile.labelFeatures.length; i++) {
    var t = geoJsonFile.labelFeatures[i],
    o = t.properties.style,
    n = o.split('^'),
    a = n[4],
    a = parseInt(a, 10) - 8 * e;
    n[4] = a + 'px',
    o = n[0] + '^' + n[1] + '^' + n[2] + '^' + n[3] + '^' + n[4] + '^' + n[5],
    t.properties.style = o,
    reOverlayLabel(t)
  }
}
function editLabel() {
  Ext.MessageBox.show({
    msg: 'Type new label:',
    value: thisFeature.properties.info,
    width: 300,
    buttons: Ext.MessageBox.OKCANCEL,
    multiline: !0,
    fn: function (e, t) {
      if ('ok' == e) {
        if (t.includes('\n')) for (; t.includes('\n'); ) t = t.replace('\n', ' ');
        t = t.replace(/[`~!#^&*()_|+\=;:'",<>\{\}\[\]\\\/]/gi, ''),
        thisFeature.properties.info = t,
        reOverlayLabel(thisFeature),
        destroyContexMenu()
      }
    }
  })
}
function contextMenuLabel(e) {
  destroyContexMenu();
  var n = (thisFeature = getFeatureByObj(e)).apiObj,
  i = thisFeature.properties.style,
  a = thisFeature.geometry.coordinates,
  t = (
    new Ext.menu.ColorMenu({
      text: 'colorMenu',
      icon: 'color',
      handler: function (e, t) {
        var o = SlYf(i);
        o[2] = '#' + t,
        i = PkLb(o),
        formatLabel(n, i + '^' + a)
      }
    }),
    new Ext.menu.ColorMenu({
      text: 'colorMenu',
      icon: 'color',
      handler: function (e, t) {
        var o = SlYf(i);
        o[3] = '#' + t,
        i = PkLb(o),
        formatLabel(n, i + '^' + a)
      }
    })
  ),
  o = new Ext.menu.ColorMenu({
    text: 'colorMenu',
    icon: 'color',
    handler: function (e, t) {
      $$(thisFeature.apiObj).style.color = '#' + t
    }
  }),
  e = fromLatLngToPixels(thisFeature.geometry.coordinates);
  conteMenu = new Ext.menu.Menu({
    width: 100,
    height: 310,
    margin: '0 0 10 0',
    floating: !1,
    listeners: {
      mouseover: function () {
      },
      mouseout: function () {
      }
    },
    items: [
      '-',
      {
        text: '<b><font color=\'#230876\' size=\'2\'>Edit  &nbsp</font></b>',
        handler: editLabel
      },
      {
        text: '<b><font color=\'#230876\' size=\'2\'>Grow font &nbsp</font></b>',
        handler: function () {
          chgFont('g')
        }
      },
      {
        text: '<b><font color=\'#230876\' size=\'2\'>Shrink font &nbsp</font></b>',
        handler: function () {
          chgFont('s')
        }
      },
      '-',
      {
        text: '<b><font color=\'#230876\' size=\'2\'>Font color &nbsp</font></b>',
        menu: o
      },
      {
        text: '<b><font color=\'#230876\' size=\'2\'>Background color &nbsp</font></b>',
        menu: t
      },
      '-',
      {
        text: '<b><font color=\'#230876\' size=\'2\'>Copy style &nbsp</font></b>',
        handler: function () {
          copyLabSty = getLabStyle(thisFeature.apiObj),
          $('ConMenu').destroy()
        }
      },
      {
        text: '<b><font color=\'#230876\' size=\'2\'>Paste style &nbsp</font></b>',
        handler: function () {
          formatLabel(thisFeature.apiObj, copyLabSty),
          $('ConMenu').destroy()
        }
      },
      {
        text: '<b><font color=\'#230876\' size=\'2\'>Set as default &nbsp</font></b>',
        handler: function () {
          dflsty = getLabStyle(thisFeature.apiObj),
          $('ConMenu').destroy()
        }
      },
      '-',
      {
        text: '<b><font color=\'#230876\' size=\'2\'>Duplicate &nbsp</font></b>',
        handler: function () {
          var e = mp.getBounds().getSouthWest().toUrlValue(4).split(','),
          t = mp.getBounds().getNorthEast().toUrlValue(4).split(','),
          o = (parseFloat(e[1]) + parseFloat(t[1])) / 2,
          e = parseFloat(e[0]) - parseFloat(t[0]),
          o = Math.round(10000 * o) / 10000,
          e = parseFloat(t[0]) + 0.2 * e;
          e = Math.round(10000 * e) / 10000,
          labelPoint = new google.maps.LatLng(e, o);
          t = geoJsonFile.labelFeatures,
          e = 'label' + (parseFloat(t[t.length - 1].apiObj.slice(5)) + 1);
          geoJsonFile.labelFeatures.push({
            type: 'label',
            apiObj: ' ',
            properties: {
              title: 'Label',
              style: '',
              text: ''
            },
            geometry: {
              type: 'Label',
              coordinates: []
            }
          });
          o = geoJsonFile.labelFeatures.length - 1;
          geoJsonFile.labelFeatures[o].properties.style = thisFeature.properties.style,
          geoJsonFile.labelFeatures[o].properties.info = thisFeature.properties.info,
          geoJsonFile.labelFeatures[o].apiObj = e,
          geoJsonFile.labelFeatures[o].geometry.coordinates = labelPoint,
          insLab(e);
          t = fromLatLngToPixels(thisFeature.geometry.coordinates),
          o = $$(e).style;
          o.top = t.y + 'px',
          o.left = t.x + 'px',
          formatLabel(e, thisFeature.properties.style),
          $$(e).innerHTML = thisFeature.properties.info,
          $('ConMenu').destroy()
        }
      },
      {
        text: '<b><font color=\'#230876\' size=\'2\'>Delete &nbsp</font></b>',
        handler: function () {
          delLab(n),
          $('ConMenu').destroy()
        }
      },
      '-'
    ]
  }),
  new Ext.Window({
    frame: !1,
    x: e.x + 100,
    y: e.y + 100,
    id: 'ConMenu',
    width: 200,
    layout: 'fit',
    closable: !1,
    items: [
      conteMenu
    ]
  }).show()
}
function moveShape(a) {
  var r = thisFeature.apiObj,
  e = mp.getZoom();
  if (
    moveStep = e < 14 ? 0.001 / Math.pow(1.08, e) : 14 <= e &&
    e < 16 ? 0.0005 / Math.pow(1.04, e) : 16 <= e &&
    e < 20 ? 0.0005 / Math.pow(1.02, e) : 0.000001 / Math.pow(1.01, e),
    'circle' == thisFeature.type
  ) {
    let e = r.getCenter(),
    t = e.lat(),
    o = e.lng();
    switch (a.key) {
      case 'ArrowUp':
        t += moveStep;
        break;
      case 'ArrowDown':
        t -= moveStep;
        break;
      case 'ArrowLeft':
        o -= moveStep;
        break;
      case 'ArrowRight':
        o += moveStep
    }
    var n = new google.maps.LatLng(t, o);
    r.setCenter(n)
  } else if ('rectangle' == thisFeature.type) {
    let e = r.getBounds(),
    t = e.getNorthEast().lat(),
    o = e.getNorthEast().lng(),
    n = e.getSouthWest().lat(),
    i = e.getSouthWest().lng();
    switch (a.key) {
      case 'ArrowUp':
        t += moveStep,
        n += moveStep;
        break;
      case 'ArrowDown':
        t -= moveStep,
        n -= moveStep;
        break;
      case 'ArrowLeft':
        o -= moveStep,
        i -= moveStep;
        break;
      case 'ArrowRight':
        o += moveStep,
        i += moveStep;
        break;
      default:
        return
    }
    r.setBounds({
      north: t,
      south: n,
      east: o,
      west: i
    })
  } else {
    let e = r.getPath().getArray();
    n = e.map(
      e => {
        let t = e.lat(),
        o = e.lng();
        switch (a.key) {
          case 'ArrowUp':
            t += moveStep;
            break;
          case 'ArrowDown':
            t -= moveStep;
            break;
          case 'ArrowLeft':
            o -= moveStep;
            break;
          case 'ArrowRight':
            o += moveStep;
            break;
          default:
            return e
        }
        return new google.maps.LatLng(t, o)
      }
    );
    r.setPath(n)
  }
}
function contextMenu(e, t) {
  editFeature = getFeatureByObj(t),
  destroyContexMenu();
  e = fromLatLngToPixels(clickLatlng = e);
  conteMenu = new Ext.menu.Menu({
    width: 100,
    height: 320,
    margin: '0 0 10 0',
    floating: !1,
    listeners: {
      mouseover: function () {
      },
      mouseout: function () {
      }
    },
    items: [
      '-',
      {
        text: '<b><font color=\'#230876\' size=\'2\'>Edit name & description &nbsp</font></b>',
        handler: shapesTbar
      },
      {
        text: '<b><font color=\'#230876\' size=\'2\'>Toggle edit &nbsp</font></b>',
        handler: function () {
          togEdit(t),
          $('ConMenu').destroy()
        }
      },
      {
        id: 'togdrag',
        text: '<b><font color=\'#230876\' size=\'2\'>Toggle drag &nbsp</font></b>',
        handler: function () {
          togDrag(t),
          $('ConMenu').destroy()
        }
      },
      '-',
      {
        text: '<b><font color=\'#230876\' size=\'2\'>Styles &nbsp</font></b>',
        menu: [
          {
            text: '<b><font color=\'#230876\' size=\'2\'>Change style &nbsp</font></b>',
            handler: mapWin
          },
          {
            text: '<b><font color=\'#230876\' size=\'2\'>Set as default &nbsp</font></b>',
            handler: function () {
              $('ConMenu').destroy(),
              defPolySty = thisFeature.properties.style
            }
          },
          '-',
          {
            text: '<b><font color=\'#230876\' size=\'2\'>Copy style &nbsp</font></b>',
            handler: function () {
              $('ConMenu').destroy(),
              copySty = thisFeature.properties.style
            }
          },
          {
            text: '<b><font color=\'#230876\' size=\'2\'>Paste style &nbsp</font></b>',
            handler: function () {
              $('ConMenu').destroy(),
              thisFeature.properties.style = copySty;
              var e = shapeOptions(thisFeature.properties.style);
              thisFeature.apiObj.setOptions(e)
            }
          }
        ]
      },
      {
        id: 'roofPitch',
        disabled: !0,
        text: '<b><font color=\'#230876\' size=\'2\'>Pitch &nbsp</font></b>',
        menu: [
          {
            text: '<b><font color=\'#230876\' size=\'2\'> None &nbsp</font></b>',
            value: 0,
            handler: pitchselector
          },
          {
            text: '<b><font color=\'#230876\' size=\'2\'> 1:12 &nbsp</font></b>',
            value: 1,
            handler: pitchselector
          },
          {
            text: '<b><font color=\'#230876\' size=\'2\'> 2:12 &nbsp</font></b>',
            value: 2,
            handler: pitchselector
          },
          {
            text: '<b><font color=\'#230876\' size=\'2\'> 3:12 &nbsp</font></b>',
            value: 3,
            handler: pitchselector
          },
          {
            text: '<b><font color=\'#230876\' size=\'2\'> 4:12 &nbsp</font></b>',
            value: 4,
            handler: pitchselector
          },
          {
            text: '<b><font color=\'#230876\' size=\'2\'> 5:12 &nbsp</font></b>',
            value: 5,
            handler: pitchselector
          },
          {
            text: '<b><font color=\'#230876\' size=\'2\'> 6:12 &nbsp</font></b>',
            value: 6,
            handler: pitchselector
          },
          {
            text: '<b><font color=\'#230876\' size=\'2\'> 7:12 &nbsp</font></b>',
            value: 7,
            handler: pitchselector
          },
          {
            text: '<b><font color=\'#230876\' size=\'2\'> 8:12 &nbsp</font></b>',
            value: 8,
            handler: pitchselector
          },
          {
            text: '<b><font color=\'#230876\' size=\'2\'> 9:12 &nbsp</font></b>',
            value: 9,
            handler: pitchselector
          },
          {
            text: '<b><font color=\'#230876\' size=\'2\'> 10:12 &nbsp</font></b>',
            value: 10,
            handler: pitchselector
          },
          {
            text: '<b><font color=\'#230876\' size=\'2\'> 11:12 &nbsp</font></b>',
            value: 11,
            handler: pitchselector
          },
          {
            text: '<b><font color=\'#230876\' size=\'2\'> 12:12 &nbsp</font></b>',
            value: 12,
            handler: pitchselector
          }
        ]
      },
      '-',
      {
        text: '<b><font color=\'#230876\' size=\'2\'>Duplicate &nbsp</font></b>',
        handler: function () {
          dupPolygon(t),
          $('ConMenu').destroy()
        }
      },
      {
        text: '<b><font color=\'#230876\' size=\'2\'>Convert to boundary line &nbsp</font></b>',
        handler: function () {
          poly2Line(t),
          $('ConMenu').destroy()
        }
      },
      {
        text: '<b><font color=\'#230876\' size=\'2\'> Properties &nbsp</font></b>',
        handler: function () {
          polyProperties(t),
          $('ConMenu').destroy()
        }
      },
      {
        text: '<b><font color=\'#230876\' size=\'2\'>Export vertices as csv file &nbsp</font></b>',
        handler: function () {
          poly2csv(t),
          $('ConMenu').destroy()
        }
      },
      {
        text: '<b><font color=\'#230876\' size=\'2\'>Delete &nbsp</font></b>',
        handler: function () {
          $('ConMenu').destroy(),
          spliceThisFeature()
        }
      },
      '-'
    ]
  }),
  new Ext.Window({
    frame: !1,
    x: e.x + 20,
    y: e.y,
    id: 'ConMenu',
    width: 200,
    layout: 'fit',
    closable: !1,
    items: [
      conteMenu
    ]
  }).show(),
  'polyArea' == editFeature.type &&
  $('roofPitch').enable(),
  t.draggable ? (
    $('togdrag').addClass('highlight-menu-item'),
    $('togdrag').setText(
      '<b><font color=\'#230876\' size=\'2\'>Draggable &nbsp</font></b>'
    )
  ) : (
    $('togdrag').removeClass('highlight-menu-item'),
    $('togdrag').setText(
      '<b><font color=\'#230876\' size=\'2\'>Toggle drag &nbsp</font></b>'
    )
  )
}
function togEdit(e) {
  e.editable ? e.setOptions({
    editable: !1
  }) : e.setOptions({
    editable: !0
  })
}
function togDrag(e) {
  e.draggable ? e.setOptions({
    draggable: !1
  }) : e.setOptions({
    draggable: !0
  })
}
function contextCircMenu(e, t) {
  editFeature = getFeatureByObj(t),
  destroyContexMenu();
  e = fromLatLngToPixels(clickLatlng = e);
  conteMenu = new Ext.menu.Menu({
    width: 100,
    height: 250,
    margin: '0 0 10 0',
    floating: !1,
    items: [
      '-',
      {
        text: '<b><font color=\'#230876\' size=\'2\'>Edit name & description &nbsp</font></b>',
        handler: shapesTbar
      },
      {
        text: '<b><font color=\'#230876\' size=\'2\'>Toggle edit &nbsp</font></b>',
        handler: function () {
          togEdit(t),
          $('ConMenu').destroy()
        }
      },
      {
        id: 'togdrag',
        text: '<b><font color=\'#230876\' size=\'2\'>Toggle drag &nbsp</font></b>',
        handler: function () {
          togDrag(t),
          $('ConMenu').destroy()
        }
      },
      '-',
      {
        text: '<b><font color=\'#230876\' size=\'2\'>Styles &nbsp</font></b>',
        menu: [
          {
            text: '<b><font color=\'#230876\' size=\'2\'>Change style &nbsp</font></b>',
            handler: mapWin
          },
          {
            text: '<b><font color=\'#230876\' size=\'2\'>Set as default &nbsp</font></b>',
            handler: function () {
              $('ConMenu').destroy(),
              defPolySty = thisFeature.properties.style
            }
          },
          '-',
          {
            text: '<b><font color=\'#230876\' size=\'2\'>Copy style &nbsp</font></b>',
            handler: function () {
              $('ConMenu').destroy(),
              copySty = thisFeature.properties.style
            }
          },
          {
            text: '<b><font color=\'#230876\' size=\'2\'>Paste style &nbsp</font></b>',
            handler: function () {
              $('ConMenu').destroy(),
              thisFeature.properties.style = copySty;
              var e = shapeOptions(thisFeature.properties.style);
              thisFeature.apiObj.setOptions(e)
            }
          }
        ]
      },
      '-',
      {
        text: '<b><font color=\'#230876\' size=\'2\'>Duplicate &nbsp</font></b>',
        handler: function () {
          dupCircle(t),
          $('ConMenu').destroy()
        }
      },
      {
        text: '<b><font color=\'#230876\' size=\'2\'>Convert to line &nbsp</font></b>',
        handler: function () {
          circleToPolyline(t, 1),
          $('ConMenu').destroy()
        }
      },
      {
        text: '<b><font color=\'#230876\' size=\'2\'> Properties &nbsp</font></b>',
        handler: function () {
          circleProperties(t),
          $('ConMenu').destroy()
        }
      },
      {
        text: '<b><font color=\'#230876\' size=\'2\'>Delete &nbsp</font></b>',
        handler: function () {
          spliceThisFeature(),
          $('ConMenu').destroy()
        }
      },
      '-'
    ]
  }),
  new Ext.Window({
    frame: !1,
    x: e.x + 20,
    y: e.y,
    id: 'ConMenu',
    width: 200,
    layout: 'fit',
    closable: !1,
    items: [
      conteMenu
    ]
  }).show(),
  t.draggable ? (
    $('togdrag').addClass('highlight-menu-item'),
    $('togdrag').setText(
      '<b><font color=\'#230876\' size=\'2\'>Draggable &nbsp</font></b>'
    )
  ) : (
    $('togdrag').removeClass('highlight-menu-item'),
    $('togdrag').setText(
      '<b><font color=\'#230876\' size=\'2\'>Toggle drag &nbsp</font></b>'
    )
  )
}
function contextRectanMenu(e, t) {
  editFeature = getFeatureByObj(t),
  destroyContexMenu();
  e = fromLatLngToPixels(clickLatlng = e);
  conteMenu = new Ext.menu.Menu({
    width: 100,
    height: 290,
    margin: '0 0 10 0',
    floating: !1,
    items: [
      '-',
      {
        text: '<b><font color=\'#230876\' size=\'2\'>Edit name & description &nbsp</font></b>',
        handler: shapesTbar
      },
      {
        text: '<b><font color=\'#230876\' size=\'2\'>Toggle edit &nbsp</font></b>',
        handler: function () {
          togEdit(t),
          $('ConMenu').destroy()
        }
      },
      {
        id: 'togdrag',
        text: '<b><font color=\'#230876\' size=\'2\'>Toggle drag  &nbsp</font></b>',
        handler: function () {
          togDrag(t),
          $('ConMenu').destroy()
        }
      },
      '-',
      {
        text: '<b><font color=\'#230876\' size=\'2\'>Change style &nbsp</font></b>',
        handler: mapWin
      },
      {
        text: '<b><font color=\'#230876\' size=\'2\'>Set as default &nbsp</font></b>',
        handler: function () {
          $('ConMenu').destroy(),
          defPolySty = thisFeature.properties.style
        }
      },
      '-',
      {
        text: '<b><font color=\'#230876\' size=\'2\'>Copy style &nbsp</font></b>',
        handler: function () {
          $('ConMenu').destroy(),
          copySty = thisFeature.properties.style
        }
      },
      {
        text: '<b><font color=\'#230876\' size=\'2\'>Paste style &nbsp</font></b>',
        handler: function () {
          $('ConMenu').destroy(),
          thisFeature.properties.style = copySty;
          var e = shapeOptions(thisFeature.properties.style);
          thisFeature.apiObj.setOptions(e)
        }
      },
      '-',
      {
        text: '<b><font color=\'#230876\' size=\'2\'>Duplicate &nbsp</font></b>',
        handler: function () {
          dupRectan(t),
          $('ConMenu').destroy()
        }
      },
      {
        text: '<b><font color=\'#230876\' size=\'2\'>Delete &nbsp</font></b>',
        handler: function () {
          spliceThisFeature(),
          $('ConMenu').destroy()
        }
      },
      '-'
    ]
  }),
  new Ext.Window({
    frame: !1,
    x: e.x + 20,
    y: e.y,
    id: 'ConMenu',
    width: 200,
    layout: 'fit',
    closable: !1,
    items: [
      conteMenu
    ]
  }).show(),
  t.draggable ? (
    $('togdrag').addClass('highlight-menu-item'),
    $('togdrag').setText(
      '<b><font color=\'#230876\' size=\'2\'>Draggable &nbsp</font></b>'
    )
  ) : (
    $('togdrag').removeClass('highlight-menu-item'),
    $('togdrag').setText(
      '<b><font color=\'#230876\' size=\'2\'>Toggle drag &nbsp</font></b>'
    )
  )
}
function shapesTbar() {
  $('ConMenu').destroy(),
  $('shapeWin') &&
  $('shapeWin').destroy();
  for (var e = thisFeature.properties.info; e.includes('^nbsp'); ) e = e.replace('^nbsp', '&nbsp');
  thisFeature.properties.title;
  Ext.ns('Ext.ux.form.HtmlEditor'),
  Ext.ux.form.HtmlEditor.HR = Ext.extend(
    Ext.util.Observable,
    {
      init: function (e) {
        this.cmp = e,
        this.cmp.on('render', this.onRender, this)
      },
      onRender: function () {
        this.cmp.getToolbar().add(
          [{
            iconCls: 'list',
            handler: function () {
              this.cmp.insertAtCursor('<hr>')
            },
            scope: this,
            tooltip: 'horizontal ruler',
            overflowText: 'horizontal ruler'
          }
          ]
        ),
        this.cmp.getToolbar().remove(18),
        this.cmp.getToolbar().remove(18),
        this.cmp.getToolbar().remove(18)
      }
    }
  ),
  Ext.preg('ux-htmleditor-hr', Ext.ux.form.HtmlEditor.HR);
  var t = {
    xtype: 'fieldset',
    collapsible: !1,
    layout: 'fit',
    title: 'Write description here',
    autoHeight: !0,
    buttons: [
      {
        text: '<b><font color=\'#230876\' size=\'2\'>Preview &nbsp</font></b>',
        handler: function () {
          updateHTML()
        }
      }
    ],
    items: [
      {
        xtype: 'htmleditor',
        plugins: [
          'ux-htmleditor-hr'
        ],
        value: e,
        id: 'shHTML',
        width: 550,
        height: 200,
        anchor: '98%'
      }
    ]
  },
  t = new Ext.FormPanel({
    labelWidth: 50,
    frame: !0,
    height: 400,
    width: 550,
    autoHeight: !0,
    items: [
      t
    ]
  });
  new Ext.Window({
    frame: !0,
    x: 10,
    y: 200,
    id: 'shapeWin',
    width: 600,
    layout: 'fit',
    closable: !0,
    items: [
      t
    ]
  }).show()
}
function cleanUserInput(e) {
  for (; e.includes('<a href='); ) e = e.replace('<a href=', '<a target="_blank" href=');
  for (; e.includes('"'); ) e = e.replace('"', '~-');
  for (; e.includes('&amp;'); ) e = e.replace('&amp;', ' and ');
  for (; e.includes('&lt;'); ) e = e.replace('&lt;', '-');
  for (; e.includes('&gt;'); ) e = e.replace('&gt;', '-');
  for (; e.includes('&'); ) e = e.replace('&', ' ');
  for (; e.includes('\\'); ) e = e.replace('\\', '');
  for (; e.includes('~-'); ) e = e.replace('~-', '\'');
  for (; e.includes('<span style=\'white-space:pre\'>\t</span>'); ) e = e.replace('<span style=\'white-space:pre\'>\t</span>', '-.-.-');
  for (; e.includes('rgb('); ) {
    var t = e,
    o = t.indexOf('rgb('),
    n = 0;
    for (i = o; i < o + 20; i++) ')' == t.charAt(i) &&
    (n += i);
    var a = t.slice(o, n + 1),
    r = rgbToHex(a);
    e = e.replace(a, r)
  }
  return e
}
function updateHTML() {
  $('shHTML').insertAtCursor('<br>');
  var e = $('shHTML').getRawValue();
  stripHtml(e);
  e = cleanUserInput(e = e.replace(/\n/g, '')),
  thisFeature.properties.info = e,
  showInfowin(clickLatlng, thisFeature),
  showInfowin(clickLatlng, thisFeature)
}
function shapesSty() {
  $('ConMenu').destroy(),
  $('shapeWin') &&
  $('shapeWin').destroy();
  var e = new Ext.menu.ColorMenu({
    text: 'colorMenu',
    handler: function (e, t) {
      var o = splitSty();
      o[3] = '#' + t,
      updateStyle(o)
    }
  }),
  t = new Ext.menu.ColorMenu({
    text: 'colorMenu',
    icon: 'color',
    handler: function (e, t) {
      var o = splitSty();
      o[0] = '#' + t,
      updateStyle(o)
    }
  }),
  o = new Ext.Slider({
    fieldLabel: 'Opacity',
    labelWidth: 30,
    width: 100,
    minValue: 0,
    maxValue: 100,
    increment: 10,
    value: 50,
    plugins: new Ext.ux.SliderTip,
    listeners: {
      changecomplete: function (e, t) {
        fillOp(e, t)
      }
    }
  }),
  n = new Ext.Slider({
    fieldLabel: 'Opacity',
    width: 100,
    minValue: 0,
    maxValue: 100,
    increment: 10,
    value: 50,
    plugins: new Ext.ux.SliderTip,
    listeners: {
      changecomplete: function (e, t) {
        lineOp(e, t)
      }
    }
  }),
  i = new Ext.Slider({
    fieldLabel: 'Size',
    width: 100,
    id: 'lnszSl',
    minValue: 0,
    maxValue: 10,
    increment: 1,
    value: 2,
    clickHandler: function () {
    },
    plugins: new Ext.ux.SliderTip,
    listeners: {
      changecomplete: function (e, t) {
        lineSz(e, t)
      }
    }
  }),
  i = {
    xtype: 'fieldset',
    title: 'Format shape',
    autoHeight: !0,
    layout: 'column',
    defaults: {
      layout: 'form'
    },
    items: [
      {
        columnWidth: 0.3,
        items: [
          new Ext.Button({
            fieldLabel: 'Fill',
            text: 'Color',
            iconCls: 'color',
            menu: e
          })
        ]
      },
      {
        columnWidth: 0.7,
        items: [
          o
        ]
      },
      {
        columnWidth: 0.3,
        items: [
          new Ext.Button({
            fieldLabel: 'Line',
            text: 'Color',
            iconCls: 'color',
            menu: t
          })
        ]
      },
      {
        columnWidth: 0.35,
        items: [
          n
        ]
      },
      {
        columnWidth: 0.35,
        items: [
          i
        ]
      }
    ]
  },
  i = new Ext.FormPanel({
    labelWidth: 50,
    frame: !0,
    height: 400,
    width: 550,
    autoHeight: !0,
    items: [
      i
    ]
  });
  new Ext.Window({
    frame: !0,
    x: 10,
    y: 200,
    id: 'shapeWin',
    width: 550,
    layout: 'fit',
    closable: !0,
    items: [
      i
    ]
  }).show()
}
function updateStyle(e) {
  e = 'line' == editFeature.type ? (
    editFeature.properties.style = e[0] + ',' + e[1] + ',' + e[2] + ',' + e[3] + ',' + e[4] + ',' + e[5],
    lineOptions(editFeature.properties.style)
  ) : (
    editFeature.properties.style = e[0] + ',' + e[1] + ',' + e[2] + ',' + e[3] + ',' + e[4],
    shapeOptions(editFeature.properties.style)
  ),
  editFeature.apiObj.setOptions(e)
}
function splitSty() {
  return thisFeature.properties.style.split(',')
}
function getLineOpacity() {
  var e = splitSty();
  return e[2] = parseFloat(e[2]),
  e[2]
}
function getFillOpacity() {
  var e = splitSty();
  return e[4] = parseFloat(e[4]),
  e[4]
}
function getLineSz() {
  var e = splitSty();
  return e[1] = parseInt(e[1]),
  e[1]
}
function lineSz(e, t) {
  var o = splitSty();
  o[1] = t,
  updateStyle(o)
}
function lineOpacity(e) {
  var t = splitSty();
  t[2] = e,
  updateStyle(t)
}
function fillOpacity(e) {
  var t = splitSty();
  t[4] = e,
  updateStyle(t)
}
function del() {
  'line' != editShape &&
  'polygon' == editShape &&
  (
    mp.removeOverlay(polygonGroup[thisRecord]),
    polygonGroup.splice(thisRecord, 1),
    polygonName.splice(thisRecord, 1),
    polygonSty.splice(thisRecord, 1)
  )
}
function TeYo(e) {
  frP.setStrokeStyle({
    color: e[0],
    weight: e[1],
    opacity: e[2]
  })
}
function JvBt(e) {
  frP.setFillStyle({
    color: e[3],
    opacity: e[4]
  })
}
function fillOp(e, t) {
  var o = splitSty();
  o[4] = parseFloat(t) / 100,
  updateStyle(o),
  JvBt(o)
}
function apSty(e) {
  e.checked &&
  (
    e = getSty(e.text),
    'line' == editShape ? lineSty[fR] = lineStyles[e] : 'polygon' == editShape ? polygonSty[fR] = polyStyles[e] : 'rectan' == editShape &&
    (rectanSty[fR] = rectStyles[e]),
    sty = splitSty(),
    TeYo(sty),
    'polygon' == editShape &&
    JvBt(sty)
  )
}
function svSty(e) {
  e.checked &&
  (
    e = getSty(e.text),
    'line' == editShape ? lineStyles[e] = lineSty[fR] : 'polygon' == editShape ? polyStyles[e] = polygonSty[fR] : 'rectan' == editShape &&
    (rectStyles[e] = rectanSty[fR])
  )
}
function getSty(e) {
  return 'Default' == e ? '0' : 'Style one' == e ? '1' : 'Style two' == e ? '2' : 'Style three' == e ? '3' : 'Style four' == e ? '4' : 'Style five' == e ? '5' : void 0
}
function lNSz(e, t) {
  var o = splitSty();
  o[1] = t,
  updateStyle(o),
  TeYo(o)
}
function getHTML() {
  return 'line' == editShape ? lineHTML[thisRecord] : 'polygon' == editShape ? polygonHTML[thisRecord] : 'rectan' == editShape ? rectanHTML[thisRecord] : void 0
}
function addIcon(e) {
  e.iconSize = new GSize(20, 20),
  e.shadowSize = new GSize(40, 20),
  e.shadow = 'http://labs.google.com/ridefinder/images/mm_20_shadow.png',
  e.iconAnchor = new GPoint(10, 20),
  e.infoWindowAnchor = new GPoint(10, 1)
}
function startRect() {
  var e = rectStyles[0].split(','),
  t = new GPolyline([], e[0]);
  tL = t,
  e = rectStyles[0].split(','),
  t.setStrokeStyle({
    color: e[0],
    weight: parseFloat(e[1]),
    opacity: parseFloat(e[2])
  }),
  mp.addOverlay(t),
  t.enableDrawing(),
  GEvent.addListener(
    t,
    'endline',
    function () {
      rectanGroup[rectanGroup.length] = t,
      rectanName[rectanName.length] = 'Rectangle ',
      rectanSty[rectanSty.length] = defRectanSty,
      rectanHTML[rectanHTML.length] = 'Length: \'Llength\'',
      drawRect(t),
      tL = '',
      $('sendlink').enable(),
      $('rectang').toggle()
    }
  )
}
function drawRect(e) {
  for (i = 0; i < rectanGroup.length; i++) {
    var t;
    e == rectanGroup[i] &&
    (t = i)
  }
  var o = e.getBounds().getSouthWest().toUrlValue(8).split(','),
  n = e.getBounds().getNorthEast().toUrlValue(8).split(','),
  a = new google.maps.LatLng(n[0], o[1]),
  o = new google.maps.LatLng(o[0], n[1]),
  n = e.getBounds().getSouthWest(),
  r = e.getBounds().getNorthEast(),
  s = rectanSty[t].split(','),
  a = new GPolyline([n,
  o,
  r,
  a,
  n], s[0], parseFloat(s[1]), parseFloat(s[2]));
  rectanGroup[t] = a,
  mp.removeOverlay(e),
  mp.addOverlay(a),
  a.enableEditing({
    onEvent: 'mouseover'
  }),
  a.disableEditing({
    onEvent: 'mouseout'
  }),
  rectAddListener(a)
}
function rectAddListener(l) {
  GEvent.addListener(
    l,
    'click',
    function (e, t) {
      if ('number' == typeof t) l.deleteVertex(t);
       else {
        for (thisPoly = l, i = 0; i < rectanGroup.length; i++) thisPoly == rectanGroup[i] &&
        (thisRecord = i);
        editShape = 'rectan';
        for (
          var o = rectanHTML[thisRecord].split('\n'),
          n = '',
          a = 0;
          a < o.length;
          a++
        ) for (var r = o[a].split('~'), s = 0; s < r.length; s++) 'Llength' == r[s] &&
        (
          r[s] = Math.round(l.getLength()) + ' metres',
          10 < r[s].length &&
          (
            r[s] = r[s].slice(0, r[s].length - 10) + ', ' + r[s].slice(r[s].length - 10)
          )
        ),
        n += r[s];
        html = '<div class=\'infowindow\'>',
        html += n,
        mp.openInfoWindowHtml(e, html)
      }
    }
  ),
  GEvent.addListener(
    l,
    'mouseover',
    function () {
      for (thisPoly = l, i = 0; i < rectanGroup.length; i++) thisPoly == rectanGroup[i] &&
      (thisRecord = i);
      editShape = 'rectan'
    }
  )
}
function insVertexies(e, t) {
  var o = t.split('~');
  for (j = 0; j < o.length; j++) {
    var n = o[j].split(','),
    n = new google.maps.LatLng(parseFloat(n[0]), parseFloat(n[1]));
    e.getPath().push(n)
  }
}
function startPoly() {
  var e = polyStyles[0].split(','),
  t = new GPolygon(
    [],
    e[0],
    parseFloat(e[1]),
    parseFloat(e[2]),
    e[3],
    parseFloat(e[4])
  );
  mp.addOverlay(t),
  (thisPoly = t).enableDrawing(),
  t.enableEditing({
    onEvent: 'mouseover'
  }),
  t.disableEditing({
    onEvent: 'mouseout'
  }),
  GEvent.addListener(
    t,
    'endline',
    function () {
      polygonGroup[polygonGroup.length] = t;
      var e = 'Polygon ' + ++polyCounter_;
      polygonName[polygonName.length] = e,
      polygonSty[polygonSty.length] = defPolySty,
      polygonHTML[polygonHTML.length] = '',
      $('sendlink').enable(),
      thisPoly = '',
      $('polygon').toggle()
    }
  ),
  padl(t)
}
function padl(l) {
  edc(l),
  GEvent.addListener(
    l,
    'click',
    function (e, t) {
      if ('number' == typeof t) l.deleteVertex(t);
       else {
        for (thisPoly = l, i = 0; i < polygonGroup.length; i++) thisPoly == polygonGroup[i] &&
        (thisRecord = i);
        editShape = 'polygon';
        for (
          var o = polygonHTML[thisRecord].split('\n'),
          n = '',
          a = 0;
          a < o.length;
          a++
        ) for (var r = o[a].split('~'), s = 0; s < r.length; s++) 'Parea' == r[s] &&
        (
          r[s] = Math.round(l.getArea()) + ' square metres',
          20 < r[s].length &&
          (
            r[s] = r[s].slice(0, r[s].length - 20) + ', ' + r[s].slice(r[s].length - 20)
          )
        ),
        n += r[s];
        html = '<div class=\'infowindow\'>',
        html += n,
        mp.openInfoWindowHtml(e, html)
      }
    }
  ),
  GEvent.addListener(
    l,
    'mouseover',
    function () {
      for (thisPoly = l, ddc(), i = 0; i < polygonGroup.length; i++) l == polygonGroup[i] &&
      (thisRecord = i);
      editShape = 'polygon'
    }
  )
}
function encodePath(e) {
  return google.maps.geometry.encoding.encodePath(e)
}
function decodePath(e) {
  return google.maps.geometry.encoding.decodePath(e)
}
function comArea(e) {
  return google.maps.geometry.spherical.computeArea(e)
}
function comLen(e) {
  return google.maps.geometry.spherical.computeLength(e)
}
function endRectangle(e) {
  drawRectangle = !1,
  dsline.setMap(),
  rectangle.setOptions({
    editable: !1
  }),
  mp.setOptions({
    draggableCursor: 'pointer'
  }),
  $('rectang').toggle(),
  rectanGroup[rectanGroup.length] = rectangle,
  rectanName[rectanName.length] = 'Rectangle ' + (rectanSty.length + 1),
  rectanSty[rectanSty.length] = defPolySty,
  rectanHTML[rectanHTML.length] = '',
  thisPoly = ''
}
function endLine(e) {
  drawLine = !1,
  dsline.setMap(),
  line.setOptions({
    editable: !1
  }),
  mp.setOptions({
    draggableCursor: 'pointer'
  }),
  lineGroup[lineGroup.length] = line,
  lineName[lineName.length] = 'line',
  lineSty[lineSty.length] = defLineSty,
  lineHTML[lineHTML.length] = '',
  thisLine = '',
  $('line').toggle()
}
function bearing(e, t) {
  t = ((t = google.maps.geometry.spherical.computeHeading(e, t)) + 360) % 360;
  return Math.round(t)
}
function round(e, t) {
  return Number(Math.round(e + 'e' + t) + 'e-' + t)
}
function dashLine(e) {
  var t,
  o;
  1 == distanceLine ? (
    (o = dsline.getPath()).setAt(1, e.latLng),
    t = bearing(o.getAt(0), o.getAt(1)),
    mouseLabel(e.latLng),
    $$('mDistance').innerHTML = LenMeters(dsline) + ', ' + t + '&deg'
  ) : (
    t = {
      strokeOpacity: 0,
      icons: [
        {
          icon: {
            path: 'M 0,-1 0,1',
            strokeColor: '#ff8800',
            strokeOpacity: distanceLine = 1,
            scale: 2
          },
          offset: '0',
          repeat: '10px'
        }
      ]
    },
    mp.setOptions({
      draggableCursor: 'pointer'
    }),
    (dsline = new google.maps.Polyline(t)).setMap(mp),
    (o = dsline.getPath()).push(x1),
    o.push(e.latLng),
    listenerDis = google.maps.event.addListener(
      dsline,
      'click',
      function (e) {
        var t,
        o,
        n,
        i;
        drawLine ? (
          line.getPath().push(e.latLng),
          mouseLabel(e.latLng),
          $$('mDistance').innerHTML = LenMeters(line)
        ) : drawPolygon ? (
          polygon.getPath().push(e.latLng),
          $('mArea').pressed &&
          showArea(polygon)
        ) : drawRectangle &&
        (
          x1.lat() > e.latLng.lat() ? (o = x1.lat(), t = e.latLng.lat()) : (t = x1.lat(), o = e.latLng.lat()),
          x1.lng() > e.latLng.lng() ? (i = x1.lng(), n = e.latLng.lng()) : (n = x1.lng(), i = e.latLng.lng()),
          n = new google.maps.LatLng(t, n),
          i = new google.maps.LatLng(o, i),
          i = new google.maps.LatLngBounds(n, i),
          rectangle.setBounds(i),
          drawRectangle = !1,
          endRectangle(e)
        ),
        x1 = e.latLng,
        distanceLine = 0,
        dsline.setMap()
      }
    )
  )
}
function disLabel(e) {
  var t,
  o;
  1 == distanceLine ? (
    (o = dsline.getPath()).setAt(1, e.latLng),
    t = bearing(o.getAt(0), o.getAt(1)),
    mouseLabel(e.latLng),
    $$('mDistance').innerHTML = LenMeters(dsline) + ', ' + t + '&deg'
  ) : (
    (
      dsline = new google.maps.Polyline({
        strokeColor: '#ff8800',
        strokeOpacity: 1,
        strokeWeight: 3
      })
    ).setMap(mp),
    mp.setOptions({
      draggableCursor: 'pointer'
    }),
    (o = dsline.getPath()).push(x1),
    o.push(e.latLng),
    distanceLine = 1,
    google.maps.event.addListener(
      dsline,
      'click',
      function (e) {
        x1 = e.latLng,
        distanceLine = 0,
        dsline.setMap(),
        $$('mDistance').style.visibility = 'hidden',
        measureLength = !1
      }
    )
  )
}
function startLine() {
  line = new google.maps.Polyline({
    strokeColor: '#000000',
    strokeOpacity: 1,
    strokeWeight: 2
  }),
  line.setMap(mp)
}
function lineAddListener(l) {
  GEvent.addListener(
    l,
    'click',
    function (e, t) {
      if ('number' == typeof t) l.deleteVertex(t);
       else {
        for (thisPoly = l, i = 0; i < lineGroup.length; i++) thisPoly == lineGroup[i] &&
        (thisRecord = i);
        editShape = 'line';
        for (
          var o = lineHTML[thisRecord].split('\n'),
          n = '',
          a = 0;
          a < o.length;
          a++
        ) for (var r = o[a].split('~'), s = 0; s < r.length; s++) 'Llength' == r[s] &&
        (
          r[s] = Math.round(l.getLength()) + ' metres',
          10 < r[s].length &&
          (
            r[s] = r[s].slice(0, r[s].length - 10) + ', ' + r[s].slice(r[s].length - 10)
          )
        ),
        n += r[s];
        html = '<div class=\'infowindow\'>',
        html += n,
        mp.openInfoWindowHtml(e, html)
      }
    }
  ),
  GEvent.addListener(
    l,
    'mouseover',
    function () {
      for (thisPoly = l, i = 0; i < lineGroup.length; i++) l == lineGroup[i] &&
      (thisRecord = i);
      editShape = 'line'
    }
  )
}
function dtwn() {
  var e = new Ext.menu.ColorMenu({
    text: 'colorMenu',
    handler: function (e, t) {
      var o = selClass,
      n = spltIcSpecs(markSpecs[o]);
      n[2] = t,
      markSpecs[o] = n[0] + '^' + n[1] + '^' + n[2] + '^' + n[3] + '^' + n[4],
      chngImg(o),
      10 == o ? (hideClasses(), nailmarkers()) : dumR(o)
    }
  }),
  e = new Ext.Button({
    fieldLabel: 'Fill',
    iconCls: 'color',
    text: 'Color',
    menu: e
  }),
  t = new Ext.Slider({
    fieldLabel: 'Size',
    labelWidth: 30,
    width: 100,
    minValue: 10,
    maxValue: 64,
    increment: 4,
    value: 32,
    plugins: new Ext.ux.SliderTip,
    listeners: {
      changecomplete: function (e, t) {
        var o = selClass,
        n = spltIcSpecs(markSpecs[o]);
        n[1] = t,
        markSpecs[o] = n[0] + '^' + n[1] + '^' + n[2] + '^' + n[3] + '^' + n[4],
        chngImg(o),
        10 == o ? (hideClasses(), nailmarkers()) : dumR(o)
      }
    }
  });
  e = new Ext.FormPanel({
    labelWidth: 50,
    frame: !0,
    height: 400,
    width: 620,
    autoHeight: !0,
    items: [
      {
        xtype: 'fieldset',
        title: 'Format Icon',
        autoHeight: !0,
        layout: 'column',
        defaults: {
          layout: 'form'
        },
        items: [
          {
            columnWidth: 0.3,
            items: [
              e
            ]
          },
          {
            columnWidth: 0.7,
            items: [
              t
            ]
          }
        ]
      },
      {
        xtype: 'fieldset',
        collapsible: !0,
        collapsed: !0,
        title: 'Write information window content here',
        autoHeight: !0,
        buttons: [
          {
            text: 'Save',
            handler: function () {
              windowhtml = $('dtHTML').getRawValue(),
              upHTML()
            }
          }
        ],
        items: [
          {
            xtype: 'htmleditor',
            id: 'dtHTML',
            width: 600,
            height: 100,
            anchor: '98%'
          }
        ]
      }
    ]
  }),
  t = new Ext.menu.Menu;
  for (var o = 3; o < numcolumns; ++o) t.add({
    text: sitedata[o][0],
    group: 'fileCols',
    checked: !1,
    checkHandler: colSelect
  });
  new Ext.Window({
    frame: !0,
    y: 150,
    width: 620,
    layout: 'fit',
    id: 'winData',
    closable: !0,
    listeners: {
      close: function () {
        clsHilite()
      }
    },
    items: [
      e
    ]
  }).show()
}
function WcTn() {
  $('tocData') &&
  $('tocData').destroy(),
  $('toc').add({
    xtype: 'form',
    id: 'tocData',
    frame: !0,
    defaults: {
      xtype: 'box',
      anchor: '95%'
    },
    layout: 'column'
  }),
  $('toc').doLayout();
  for (var e = new Ext.menu.Menu, t = 3; t < numcolumns; ++t) e.add({
    text: sitedata[t][0],
    group: 'fileCols',
    checked: !1,
    checkHandler: colSelect
  });
  t = {
    columnWidth: 0.7,
    autoEl: {
      tag: 'div',
      children: [
        {
          id: 'dataFn',
          style: 'margin: 10px 0 10px 10px',
          html: '<div style="color:blue; font-weight: bold">File: ' + xyFile + '</div>'
        }
      ]
    }
  };
  var o = {
    columnWidth: 0.3,
    autoEl: {
      tag: 'div',
      children: [
        {
          tag: 'img',
          id: 'img10',
          style: ' margin: 10px 0 10px 30px; visibility: visible',
          src: getmrkImg(markSpecs[10])
        }
      ]
    }
  };
  for (
    $('tocData').add(t),
    $('tocData').add(o),
    t = new Ext.Button({
      columnWidth: 0.4,
      text: '<div style="font-weight: bold">  Column</div>',
      style: 'margin: 10px 0 10px 10px',
      menu: e
    }),
    $('tocData').add(t),
    $('tocData').add({
      columnWidth: 0.5,
      autoEl: {
        tag: 'div',
        children: [
          {
            id: 'dataCol',
            style: 'margin: 10px 0 4px 30px; visibility: hidden',
            html: 'None'
          }
        ]
      }
    }),
    t = 0;
    t < 10;
    t++
  ) e = {
    columnWidth: 0.7,
    autoEl: {
      tag: 'div',
      children: [
        {
          style: ' margin:0 0 4px 40px; visibility: hidden',
          id: 'capt' + t,
          html: 'Image Caption'
        }
      ]
    }
  },
  o = {
    columnWidth: 0.3,
    autoEl: {
      tag: 'div',
      children: [
        {
          tag: 'img',
          style: ' margin:0 20px 4px 20px; visibility: hidden',
          id: 'img' + t,
          src: getmrkImg(markSpecs[t])
        }
      ]
    }
  },
  $('tocData').add(e),
  $('tocData').add(o);
  $('tocData').doLayout(),
  $$('img10').ondblclick = function () {
    var e = this.id.split('g');
    selClass = parseFloat(e[1]),
    $('winData') &&
    $('winData').destroy(),
    dtwn()
  }
}
function hideClasses() {
  for (var e = 0; e < 10; e++) $$('capt' + e).style.visibility = 'hidden',
  $$('img' + e).style.visibility = 'hidden',
  $$('dataCol').style.visibility = 'hidden'
}
function reftoc() {
  for (var e = 0; e < 10; e++) {
    var t = getmrkImg(markSpecs[e]);
    $$('img' + e).src = t
  }
}
function spltIcSpecs(e) {
  return e.split('^')
}
function chngImg(e) {
  $$('img' + e).src = getmrkImg(markSpecs[e])
}
function loadFile(i) {
  i = 'file=' + i;
  var a = xm();
  null == a ? alert('Error: Browser does not support HTTP Request') : (
    a.open('POST', 'fileread.php', !0),
    a.onreadystatechange = function () {
      if (4 == a.readyState || 'complete' == a.readyState) {
        var e = a.responseText.split('\n');
        numRecords = e.length - 2;
        for (var t = 0; t < e.length - 1; t++) {
          var o = e[t].split(delimiter);
          numcolumns = o.length;
          for (var n = 0; n < o.length; n++) sitedata[n][t] = o[n]
        }
        nailmarkers(),
        $('sendlink').enable(),
        WcTn(i),
        $('west-panel').expand()
      }
    },
    a.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'),
    a.send(i)
  )
}
function dumR(e) {
  for (i = 1; i < numRecords + 1; i++) {
    var t,
    o,
    n;
    'Text' == dtClass ? sitedata[selCol][i] == dispClasses[e].max &&
    (
      t = i - 1,
      o = markergroup[t].getTitle(),
      n = sitedata[1][i] + ',' + sitedata[2][i],
      markerIcon[t] = n + '^' + o + '^' + markSpecs[e],
      mp.removeOverlay(markergroup[t]),
      addlisMarker(o = assemMarker(markerIcon[t])),
      mp.addOverlay(o),
      markergroup[t] = o
    ) : 'Numerical' == dtClass &&
    parseFloat(sitedata[selCol][i]) < parseFloat(dispClasses[e].max) &&
    parseFloat(sitedata[4][i]) > parseFloat(dispClasses[e].min) &&
    (
      t = i - 1,
      o = markergroup[t].getTitle(),
      n = sitedata[1][i] + ',' + sitedata[2][i],
      markerIcon[t] = n + '^' + o + '^' + markSpecs[e],
      mp.removeOverlay(markergroup[t]),
      addlisMarker(o = assemMarker(markerIcon[t])),
      mp.addOverlay(o),
      markergroup[t] = o
    )
  }
}
function colSelect(e) {
  if (
    getmrkspec(),
    reftoc(),
    $$('dataCol').innerHTML = '<div style="font-weight: bold">' + e.text + '</div>',
    $$('dataCol').style.visibility = 'visible',
    e.checked
  ) {
    for (var t = 3; t < numcolumns; ++t) e.text == sitedata[t][0] &&
    (selCol = t);
    IEfindCategories(selCol)
  }
}
function IEfindCategories(e) {
  rawClasses = [];
  for (var t = 0, o = [], n = isNumber = 1; n < numRecords + 1; n++) {
    for (var i = 1, a = 0; a < rawClasses.length; a++) rawClasses[a] == sitedata[e][n] &&
    (i = 0);
    1 == i &&
    rawClasses.push(sitedata[e][n]),
    isNaN(sitedata[e][n]) &&
    (isNumber = 0),
    1 == isNumber &&
    (
      o[n - 1] = parseFloat(sitedata[e][n]),
      t += parseFloat(sitedata[e][n])
    )
  }
  for (
    1 == isNumber ? (new Stats(o), rawClasses.sort(function (e, t) {
      return e - t
    })) : 0 == isNumber &&
    rawClasses.sort(),
    a = maxCount = 0;
    a < rawClasses.length;
    a++
  ) {
    for (t = 0, n = 1; n < numRecords + 1; n++) rawClasses[a] == sitedata[e][n] &&
    (t += 1);
    (rwcValue[a] = t) > maxCount &&
    (maxCount = t),
    dtClass.push([rawClasses[a],
    t])
  }
  if (
    dtClass = 'Numerical',
    0 == isNumber &&
    (dtClass = 'Text'),
    rawClasses.length < 11
  ) {
    for (
      numClasses = rawClasses.length,
      classesSelected = 1,
      a = 0;
      a < numClasses;
      a++
    ) dispClasses[a].label = '' + rawClasses[a],
    dispClasses[a].min = rawClasses[a],
    dispClasses[a].max = rawClasses[a],
    dispClasses[a].img = $$('img' + a).src;
    colorMarkers(e),
    updateToc()
  } else 10 < rawClasses.length &&
  1 == isNumber &&
  (classify(), colorMarkers(e), updateToc())
}
function classify() {
  numClasses = 10;
  for (
    var e = (rawClasses[rawClasses.length - 1] - rawClasses[0]) / 10,
    e = Math.round(e),
    t = parseFloat(rawClasses[0]),
    o = 0;
    o < numClasses;
    o++
  ) dispClasses[o].min = t + e * o,
  dispClasses[o].max = t + e * (o + 1),
  dispClasses[o].label = dispClasses[o].min + '--' + dispClasses[o].max,
  dispClasses[o].img = $$('img' + o).src
}
function updateToc() {
  for (var e = 0; e < 10; e++) $$('img' + e).style.visibility = 'hidden',
  $$('capt' + e).style.visibility = 'hidden';
  for (e = 0; e < numClasses; e++) $$('capt' + e).innerHTML = dispClasses[e].label,
  $$('capt' + e).style.visibility = 'visible',
  $$('img' + e).style.visibility = 'visible',
  $$('img' + e).ondblclick = function () {
    var e = this.id.split('g');
    selClass = parseFloat(e[1]),
    clsHilite(),
    hilite(),
    $('winData') &&
    $('winData').destroy(),
    dtwn()
  }
}
function hilite() {
  var e = $$('capt' + selClass).style;
  e.color = '#FF0000',
  e.fontWeight = 'bold'
}
function clsHilite() {
  for (var e = 0; e < 10; e++) {
    var t = $$('capt' + e).style;
    t.color = '#000000',
    t.fontWeight = 'normal'
  }
}
function graphWin() {
  $('winData').close();
  var e = new Ext.data.ArrayStore({
    fields: [
      'month',
      'hits'
    ],
    data: dtClass
  }),
  e = new Ext.FormPanel({
    labelAlign: 'top',
    frame: !0,
    bodyStyle: 'padding:5px 5px 0',
    layout: 'fit',
    items: {
      xtype: 'columnchart',
      store: e,
      yField: 'hits',
      url: '/ext-3.1.1/resources/charts.swf',
      xField: 'month',
      xAxis: new Ext.chart.CategoryAxis({
        title: 'Month'
      }),
      yAxis: new Ext.chart.NumericAxis({
        title: 'Hits'
      }),
      extraStyle: {
        xAxis: {
          labelRotation: - 90
        }
      }
    },
    buttons: [
      {
        text: 'Save'
      },
      {
        text: 'Close'
      }
    ]
  });
  new Ext.Window({
    frame: !0,
    title: 'Login for advanced services',
    width: 600,
    height: 400,
    layout: 'fit',
    id: 'winGraph',
    closable: !0,
    items: e
  }).show()
}
function colorMarkers(e) {
  remMarkers();
  var t = '';
  for (i = 1; i < numRecords + 1; i++) {
    for (var o = 0; o < numClasses; o++) if ('Text' == dtClass) {
      if (sitedata[e][i] == dispClasses[o].max) {
        t = markSpecs[o];
        break
      }
    } else if (
      'Numerical' == dtClass &&
      parseFloat(sitedata[e][i]) <= parseFloat(dispClasses[o].max) &&
      parseFloat(sitedata[e][i]) > parseFloat(dispClasses[o].min)
    ) {
      t = markSpecs[o];
      break
    }
    o = i - 1;
    var n = sitedata[1][i] + ',' + sitedata[2][i],
    a = markergroup[o].getTitle(),
    r = addListener(r = assemMarker(n + '^' + a + '^' + t));
    mp.removeOverlay(markergroup[o]),
    mp.addOverlay(r),
    markergroup[o] = r,
    markerIcon[o] = n + '^' + a + '^' + t
  }
}
function nailmarkers() {
  for (remMarkers(), i = 1; i < numRecords + 1; i++) {
    var e = sitedata[1][i] + ',' + sitedata[2][i];
    markerData[0][i] = e,
    markerData[1][i] = icon.image,
    markerData[2][i] = sitedata[0][i],
    markerData[3][i] = makeHTML(i),
    markerHTML[markerHTML.length] = makeHTML(i);
    var t = addListener(t = assemMarker(e + '^' + sitedata[0][i] + '^' + markSpecs[10]));
    mp.addOverlay(t),
    markergroup[markergroup.length] = t,
    markerIcon[markerIcon.length] = e + '^' + sitedata[0][i] + '^' + markSpecs[10]
  }
}
function addListener(t) {
  return GEvent.addListener(
    t,
    'click',
    function () {
      for (i = 0; i < markergroup.length; i++) {
        var e;
        t == markergroup[i] &&
        (e = i)
      }
      t.openInfoWindowHtml(markerHTML[e])
    }
  ),
  t
}
function makeHTML(e) {
  htmlFormat = '';
  for (var t = windowhtml.split('\n'), o = 0; o < t.length; o++) for (var n = t[o].split('~'), i = 0; i < n.length; i++) {
    for (var a = 0; a < numcolumns; a++) {
      var r = (r = sitedata[a][0]).slice(0, r.length - 1);
      n[i] == r &&
      (n[i] = sitedata[a][e]),
      n[i] == sitedata[a][0] &&
      (n[i] = sitedata[a][e])
    }
    htmlFormat += n[i]
  }
  return html = '<div class=\'infowindow\'>',
  html += htmlFormat,
  html
}
function remMarkers() {
  for (var e = 1; e < markergroup.length; e++) mp.removeOverlay(markergroup[e])
}
function upHTML() {
  for (i = 0; i < numRecords + 1; i++) markerHTML[i] = makeHTML(i + 1)
}
checkBusinessUser(),
Ext.BLANK_IMAGE_URL = './ext-3.2.1/resources/images/default/s.gif',
Ext.onReady(
  function () {
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent) &&
    (mobile = !0);
    var e = $$('viewerID').textContent;
    'viewer' == e ? viewer = !0 : 'gisViewer' == e &&
    (gisViewer = !0),
    window.location.search.substring(1).includes('fcode=') &&
    (viewer = !0),
    (userID = rc('userID')) &&
    'null' !== userID &&
    'undefined' !== userID ? post2PHP(
      'accessDate.php',
      'userID=' + userID,
      function () {
        var e;
        4 != x.readyState &&
        'complete' != x.readyState ||
        (
          e = x.responseText.split(',~'),
          fileStats.userName = e[0],
          fileStats.numFiles = e[2],
          fileStats.numSignIns = e[3],
          fileStats.numMapViews = e[4],
          fileStats.signUpDate = calculateDaysAgo(e[1]),
          fileStats.userPaidToDate = e[5],
          calculateDaysAgo(e[5]),
          0 <= calculateDaysAgo(e[5]) &&
          (paidUser = !0)
        )
      }
    ) : userID = 0,
    null === (userName = rc('userName')) &&
    (userName = 'User'),
    $$('wrapfabtest').offsetHeight < 1 &&
    (
      e = [
        'AIzaSyBM482KK5McqQFPYisPLH1_oqefVIAX6CQ',
        'AIzaSyA7QMTfJnQ-cl0jucR1Oqt3d2-THLtu0m0',
        'AIzaSyBKNYTg7874In8bOJSsgPtnE8CDxp2-gng',
        'AIzaSyAzZS4YgOvvajadPqD5p-7Qg60bHyKXAxE',
        'AIzaSyBYPHujyfLqSS2yjBUG__yk56oBGJd8CTM',
        'AIzaSyAr_b7-9QlOBn52N8ggPL7--rUbfkZpaTc'
      ],
      (apiKey = '') == apiKey &&
      (apiKey = e[Math.floor(Math.random() * e.length)]),
      fetch(
        'https://api.geoapify.com/v1/ipinfo?apiKey=c8c76c8d780e4d569c656b5425189f82'
      ).then(
        function (e) {
          e.json().then(
            function (e) {
              e = e.country.iso_code;
              'AU' != e &&
              'US' != e &&
              'ES' != e ||
              (countryCode = e)
            }
          )
        }
      ).catch(function (e) {
        console.log('Fetch Error :-S', e)
      }),
      loadMapScripts()
    )
  }
),
Ext.data.Node.prototype.getJson = function () {
  var e = this.attributes;
  e.children = [];
  for (var t = 0; t < node.childNodes.length; t++) e.children.push(node.childNodes[t].getJson());
  return e
},
Ext.namespace('Ext.exampledata'),
Ext.exampledata.states = [
  ['WA',
  'Washington',
  'Green Tree State'],
  [
    'WV',
    'West Virginia',
    'Mountain State'
  ],
  [
    'WI',
    'Wisconsin',
    'America\'s Dairyland'
  ],
  [
    'WY',
    'Wyoming',
    'Like No Place on Earth'
  ]
],
Ext.util.CSS.createStyleSheet(
  '.highlight-menu-item { background-color: yellow !important; font-weight: bold; }',
  'highlight-style'
),
document.addEventListener('keydown', moveShape);
var geocoder,
MapIconMaker = {},
iconImageMaker = {};
function shadeColor(e, t) {
  var o = parseInt(e.slice(1), 16),
  n = Math.round(2.55 * t),
  e = (o >> 16) + n,
  t = (o >> 8 & 255) + n,
  n = (255 & o) + n;
  return '#' + (
    16777216 + 65536 * (e < 255 ? e < 1 ? 0 : e : 255) + 256 * (t < 255 ? t < 1 ? 0 : t : 255) + (n < 255 ? n < 1 ? 0 : n : 255)
  ).toString(16).slice(1)
}
function CenterControl(e, t) {
  var o = document.createElement('div');
  o.style.backgroundColor = 'rgb(255,255,255,0.8)',
  o.style.border = '2px solid rgb(255,255,255,0.8)',
  o.style.borderRadius = '3px',
  o.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)',
  o.style.cursor = 'pointer',
  o.style.marginTop = '2px',
  o.style.textAlign = 'center',
  o.title = 'Expand or collapse the left panel',
  e.appendChild(o);
  e = document.createElement('div');
  e.style.color = 'rgb(25,25,25)',
  e.style.fontFamily = 'Roboto,Arial,sans-serif',
  e.style.paddingTop = '2px',
  e.style.paddingLeft = '2px',
  e.style.paddingRight = '2px',
  e.innerHTML = '<img id="leftArro" src="./icons/left-16-blue.png" height="12" width="12">',
  o.appendChild(e),
  o.addEventListener(
    'click',
    function () {
      var e = document.getElementById('leftArro');
      e.src.includes('left') ? ($('east-panel').collapse(), e.src = './icons/right-16-blue.png') : ($('east-panel').expand(), e.src = './icons/left-16-blue.png')
    }
  )
}
function getSettings() {
  alert('te-st');
  var e = rc('mc');
  e &&
  (
    e = e.split('^'),
    startpoint = getGpoint(e[0]),
    startzoom = parseFloat(e[1])
  ),
  rc('polySty') &&
  (defPolySty = rc('polySty')),
  rc('disUnits') &&
  (miles = rc('disUnits')),
  rc('areaUnits') &&
  (areaUnits = rc('disUnits')),
  rc('treeJson') &&
  (treeJsonFile = rc('treeJson')),
  'true' == miles ? miles = !0 : 'false' == miles &&
  (miles = !1)
}
function mapSetup() {
  gmapgisLabel = createPopupClass(),
  gmapgisInfoWin = createInfoWinClass(),
  startpoint = new google.maps.LatLng('40', '-100'),
  getStart();
  var e = new google.maps.ImageMapType({
    getTileUrl: function (e, t) {
      return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwCAIAAADYdCwzAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAKElEQVR4nO3BMQEAAAgDoK1/aMNiAAAAAAAAAAAAAAAAAAAAAAAAAADgN4kJAAH1ViLRAAAAAElFTkSuQmCC'
    },
    tileSize: new google.maps.Size(256, 256),
    maxZoom: 25,
    minZoom: 0,
    name: 'WhiteBackground'
  });
  mp.mapTypes.set('blank', e),
  mp.setOptions({
    mapTypeControlOptions: {
      mapTypeIds: [
        'roadmap',
        'satellite',
        'hybrid',
        'terrain',
        'blank'
      ]
    }
  }),
  getLocation(),
  clickLatlng = startpoint,
  (tempMarkerG = new google.maps.Marker).setVisible(!1),
  tempinfo = new google.maps.InfoWindow({
    size: new google.maps.Size(292, 120)
  }),
  labelPoint = new google.maps.LatLng('-32.12360', '115.94230'),
  overlay = new google.maps.OverlayView,
  overlay.draw = function () {
  },
  overlay.setMap(mp),
  geocoder = new google.maps.Geocoder,
  mp.setCenter(startpoint),
  mp.setZoom(startzoom),
  currentZoom = startzoom,
  mp.setOptions({
    disableDefaultUI: !0,
    zoomControl: !0,
    fullscreenControl: !0,
    streetViewControl: !0,
    gestureHandling: 'greedy',
    rotateControl: !0,
    clickableIcons: !1,
    scaleControl: !0,
    draggableCursor: 'crosshair',
    styles: [
      {
        featureType: 'poi',
        elementType: 'labels',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      },
      {
        featureType: 'poi.business',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      }
    ]
  }),
  mapType = rc('mt') ? rc('mt') : 'relief',
  setMaptype();
  e = JSON.parse(getFileContent('./js/retroMap.json')),
  e = new google.maps.StyledMapType(e, {
    name: 'Retro Map'
  });
  mp.mapTypes.set('retro_map', e);
  e = JSON.parse(getFileContent('./js/nightMap.json')),
  e = new google.maps.StyledMapType(e, {
    name: 'Night Map'
  });
  mp.mapTypes.set('night_map', e);
  e = JSON.parse(getFileContent('./js/auberMap.json')),
  e = new google.maps.StyledMapType(e, {
    name: 'auberMap'
  });
  mp.mapTypes.set('auber_map', e),
  geocoder.geocode({
    location: startpoint
  }, function (e, t) {
    'OK' === t &&
    e[6]
  }),
  setTimeout('setListners ()', 10),
  loadLink(),
  google.maps.event.addListener(mp, 'dragstart', function (e) {
  }),
  google.maps.event.addListener(mp, 'idle', function (e) {
  }),
  google.maps.event.addListener(
    mp,
    'zoom_changed',
    function (e) {
      var t = mp.getZoom();
      0 < geoJsonFile.labelFeatures.length &&
      changeFontSize(currentZoom - t),
      currentZoom = t
    }
  ),
  google.maps.event.addListener(
    mp,
    'rightclick',
    function (e) {
      contextMapMenu(e.latLng),
      $('mLength').pressed &&
      $('mLength').toggle(),
      $('marker').pressed &&
      $('marker').toggle(),
      $('fndaddress').pressed &&
      $('fndaddress').toggle(),
      $('blowup').pressed &&
      $('blowup').toggle()
    }
  ),
  google.maps.event.addListener(mp, 'mouseover', function (e) {
    latLngControl.set('visible', !0)
  }),
  google.maps.event.addListener(mp, 'mouseout', function (e) {
    latLngControl.set('visible', !1)
  }),
  lisMouseMove = google.maps.event.addListener(
    mp,
    'mousemove',
    function (e) {
      mouseLatlng = e.latLng,
      shoCor &&
      (mouseLabel(e.latLng), $$('mDistance').innerHTML = e.latLng),
      drawScrib &&
      line.getPath().push(e.latLng),
      (drawLine || drawPolygon || drawRectangle) &&
      dashLine(e),
      drawPolygon &&
      dashLine(e),
      drawRectangle &&
      dashLine(e),
      measureLength &&
      disLabel(e),
      drawCircle &&
      disCircle(e),
      drawArrow &&
      dispArrow(e)
    }
  ),
  curLocMarker = new google.maps.Marker;
  e = rootUrl + '/icons/dot-inside-24.png';
  curLocMarker.setOptions({
    position: currentLoc,
    icon: e
  }),
  searchBox(),
  createPOIlabel(),
  createMyMaplabel(),
  getCurrLoc(),
  homeLess &&
  (
    showHint('Right click map to save your start up location', 10000),
    showLocation()
  ),
  '1' !== Ext.util.Cookies.get('hideTips') &&
  (
    showTips(),
    mobile &&
    (
      $$('search-panel').style.visibility = 'hidden',
      mp.setOptions({
        disableDefaultUI: !0,
        zoomControl: !1,
        fullscreenControl: !1,
        streetViewControl: !1,
        rotateControl: !1,
        clickableIcons: !1,
        scaleControl: !1,
        draggableCursor: 'crosshair'
      }),
      getCurrLoc(),
      curLocMarker.setPosition(currentLoc),
      mp.setCenter(currentLoc, 16),
      curLocMarker.setMap(mp)
    ),
    (mobile || viewer) &&
    ($$('search-panel').style.visibility = 'hidden')
  )
}
function getCurrLoc() {
  navigator.geolocation &&
  navigator.geolocation.getCurrentPosition(
    function (e) {
      currentLoc = new google.maps.LatLng(e.coords.latitude, e.coords.longitude)
    }
  )
}
function updateLocation() {
  getLocation(),
  curLocMarker.setPosition(currentLoc),
  mp.getBounds().contains(currentLoc) ||
  mp.setCenter(currentLoc, 16)
}
function showLocation() {
  destroyContexMenu(),
  getLocation(),
  curLocMarker.setMap(mp),
  curLocMarker.setPosition(currentLoc),
  mp.setCenter(currentLoc, 16)
}
function errorHandler(e) {
  1 == e.code ||
  2 == e.code &&
  alert('Error: Position is unavailable!')
}
function getLocation() {
  navigator.geolocation &&
  navigator.geolocation.getCurrentPosition(
    function (e) {
      currentLoc = new google.maps.LatLng(e.coords.latitude, e.coords.longitude)
    },
    function () {
    },
    {
      enableHighAccuracy: !0,
      maximumAge: 30000,
      timeout: 27000
    }
  )
}
function callbackReadAuto(e) {
  'yes' == e &&
  readAuto()
}
function calcBearing(e) {
  var t = a.Lat,
  o = b.Lat,
  n = a.Lng,
  i = b.Lng,
  t = Math.abs(t - o),
  o = Math.cos(i) * Math.sin(t),
  t = Math.cos(n) * sin(i) - Math.sin(n) * cos(i) * Math.cos(t);
  Math.atan2(o, t)
}
function focusFn() {
  var e = $$('target').style;
  $$('target').placeholder = 'Type search address',
  '60px' == e.width ? (e.background = 'yellow', e.width = '250px') : (
    e.background = 'white',
    e.width = '60px',
    $$('target').placeholder = 'Search'
  )
}
function searchBox() {
  $$$(mp.getDiv().id).createChild(
    '<div id="titleDiv" align="center"; style="position: absolute;top: 10px;left: 50%;visibility: hidden;z-index: 0;opacity: 0.8; background-color: #ffffff;padding: 5px; border: 1px solid #999; border-radius: 10px"  ></div>'
  );
  $$$(mp.getDiv().id).createChild(
    '<div id="search-panel" style="position: absolute;top: 5px;left: 50%;visibility: hidden;z-index: 0;background-color: rgb(230,255,242, o.5);padding: 5px; border: 1px solid #999; border-radius: 10px"  ><input id="target" type="text" style="width: 60px;" onfocus="focusFn()" onblur="focusFn()" placeholder="Search"></div>'
  );
  var e = $$('search-panel').style;
  e.top = '15px',
  e.left = '10px';
  var t = document.getElementById('target'),
  o = new google.maps.places.Autocomplete(t, {
    fields: [
      'geometry'
    ],
    strictBounds: !1,
    types: [
      'address'
    ]
  });
  google.maps.event.addListener(
    o,
    'place_changed',
    function () {
      var e = o.getPlace(),
      t = {
        url: e.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };
      new google.maps.Marker({
        map: mp,
        icon: t,
        title: e.name,
        position: e.geometry.location
      }).setMap(mp),
      mp.setCenter(e.geometry.location)
    }
  ),
  $$('search-panel').style.visibility = 'visible',
  google.maps.event.addListener(
    mp,
    'bounds_changed',
    function () {
      var e = mp.getBounds();
      o.setBounds(e)
    }
  ),
  (mobile || viewer) &&
  (
    $$(mp.getDiv().id).offsetWidth,
    $$$(mp.getDiv().id).createChild(
      '<div  id="head" style="position: absolute; width: 100%;  box-shadow: 2px 2px 10px #888888;"  ><br><p id="mapTitle"; align="center";style="position: relative; visibility: visible; z-index: 5; font-size: medium; font-weight: bold; background-color: #99FFFF; padding-top: 10px;padding-bottom: 4px; padding-right: 4px; padding-left: 4px; "></p></div>'
    ),
    $$('head').style.height = '50px',
    $$('head').style.top = '-13px',
    $$('head').style.backgroundColor = '#186A3B',
    $$('mapTitle').innerHTML = '',
    $$('mapTitle').style.left = '10px',
    $$('mapTitle').style.fontSize = 'medium',
    $$('mapTitle').style.color = 'white',
    $$$(mp.getDiv().id).createChild(
      '<div id="menuDiv" style="position: absolute;top: 50px; left: 10px; width: 154px;z-index: 5;background-color: transparent;padding: 5px;visibility: visible; "><img id="menuImage" src="icons/menu-office.png" height="28" width="28"> </div>'
    ),
    (e = $$('menuDiv').style).top = '0px',
    e.left = '5px',
    $$('menuDiv').onclick = function () {
      wpnl(),
      Ext.getCmp('west-panel').collapsed ? mobile &&
      ($$('mapTitle').style.visibility = 'hidden') : $$('mapTitle').style.visibility = 'visible'
    }
  );
  $$$(mp.getDiv().id).createChild(
    '<div id="file2saveID" style="position: absolute;top: 15px; left: 300px;z-index: 5;background-color: rgb(255,255,255, 0.7);padding: 5px; border: 1px solid #999; border-radius: 10px; visibility: hidden; "  > </div>'
  ),
  $$('file2saveID').style.cursor = 'pointer',
  $$('file2saveID').onclick = function () {
    togFileLabel()
  },
  $$('file2saveID').onmousedown = function (e) {
    if (!$$('file2saveID').innerHTML.includes(file2save)) switch (e.button) {
      case 0:
        togFileLabel();
        break;
      case 2:
        Ext.MessageBox.prompt(
          '',
          'Enter new title:',
          function (e, t) {
            'ok' == e &&
            (
              post2PHP(
                'updateTitle.php',
                'title=' + (t = t.replace(/[^\w\s]/gi, '')) + '&file=' + file2save,
                function () {
                  4 == x.readyState ||
                  x.readyState
                }
              ),
              geoJsonFile.mapTitle = t,
              t = '<b><font color=\'#blue\' size=\'2\'>' + (mapTitle = t) + ' &nbsp</font></b>',
              $$('file2saveID').innerHTML = t
            )
          },
          [],
          !1,
          mapTitle
        )
    }
  },
  toolTip('file2saveID', 'Click to toggle between title and file name');
  $$$(mp.getDiv().id).createChild(
    '<p id="mDistance" style="border-color: #C0C0C0; border-style: solid; border-width: thin; position: absolute; visibility: hidden; z-index: 5; font-size: small; font-weight: bold; background-color: #99FFFF; padding-right: 4px; padding-left: 4px;"> .</p>'
  );
  e = $$('mDistance').style;
  e.top = '450px',
  e.left = '500px';
  $$$(mp.getDiv().id).createChild(
    '<p id="areaText" style="border-color: #C0C0C0; border-style: solid; border-width: thin; position: absolute; visibility: hidden; z-index: 5; font-size: small; font-weight: bold; background-color: #99FFFF; padding-right: 4px; padding-left: 4px;"> .</p>'
  ),
  (e = $$('areaText').style).top = '450px',
  e.left = '500px'
}
function geoJson2Gmp(e) {
  var t = {
    type: 'FeatureCollection',
    source: 'gmapgis.com',
    version: '4.0',
    user: {
      userID: 'xyj',
      created: 'cdate',
      updated: 'udate',
      acessed: 'adate',
      total: 'tViews',
      paid: 'pViews',
      remaining: 'rViews'
    },
    mapOptions: {
      mapType: '',
      center: [],
      zoom: 10,
      bounds: []
    },
    pointFeatures: [],
    lineFeatures: [],
    rectanFeatures: [],
    polyFeatures: [],
    circleFeatures: [],
    labelFeatures: [],
    legends: []
  };
  t.mapOptions.mapType = mp.getMapTypeId();
  var o = mp.getCenter();
  t.mapOptions.center = [
    o.lat(),
    o.lng()
  ];
  o = t.mapOptions.center,
  new google.maps.LatLng(o[0], o[1]);
  t.mapOptions.zoom = mp.getZoom();
  o = '[' + mp.getBounds().getNorthEast().toUrlValue(5) + ']',
  o = '[' + mp.getBounds().getSouthWest().toUrlValue(5) + ']' + ',' + o;
  t.mapOptions.bounds = o;
  var n = t.polyFeatures,
  i = t.lineFeatures;
  for (j = 0; j < e.features.length; j++) {
    var a,
    r,
    s = e.features[j].geometry.type;
    'MultiPolygon' == s ? (
      a = {
        type: 'polygon',
        apiObj: ' ',
        properties: {
          title: 'Polygon',
          style: 'hjlyybb',
          info: ''
        },
        geometry: {
          type: 'Polygon-Geo',
          coordinates: []
        }
      },
      n.push(a),
      r = n.length - 1,
      (thisFeature = n[r]).apiObj = 'obj',
      thisFeature.properties.title = e.features[j].properties.name,
      thisFeature.properties.style = '#FF0000,1,1,#ff8800,0.4',
      thisFeature.properties.info = e.features[j].properties.Shape_Area,
      thisFeature.geometry.coordinates = e.features[j].geometry.coordinates[0][0]
    ) : 'LineString' == s &&
    (
      a = {
        type: 'line',
        apiObj: ' ',
        properties: {
          title: 'Line',
          style: '--',
          info: ''
        },
        geometry: {
          type: 'Line-Geo',
          coordinates: []
        }
      },
      i.push(a),
      r = i.length - 1,
      (thisFeature = i[r]).apiObj = 'obj',
      thisFeature.properties.title = e.features[j].properties.name,
      thisFeature.properties.style = '#FF0000,1,1,#ff8800,0.4,d0',
      thisFeature.properties.info = e.features[j].properties.ROAD_NAME,
      thisFeature.geometry.coordinates = e.features[j].geometry.coordinates
    )
  }
}
function loadGeoJsonObject(e) {
  mp.data.forEach(e => map.data.remove(e)),
  mp.data.addGeoJson(e),
  mp.data.setStyle({
    fillColor: 'skyblue',
    strokeColor: 'navy',
    strokeWeight: 1
  });
  var t = new google.maps.LatLngBounds;
  mp.data.forEach(e => {
    processPoints(e.getGeometry(), t.extend, t)
  }),
  mp.fitBounds(t)
}
function loadGeoJsonString(e) {
  e = JSON.parse(e);
  mp.data.addGeoJson(e),
  mp.data.setStyle(
    function (e) {
      return {
        icon: rootUrl + '/icons/bullet-red.png',
        fillColor: 'red',
        strokeColor: 'red',
        strokeWeight: 1
      }
    }
  ),
  zoom(mp)
}
function zoom(e) {
  var t = new google.maps.LatLngBounds;
  e.data.forEach(function (e) {
    processPoints(e.getGeometry(), t.extend, t)
  }),
  e.fitBounds(t)
}
function processPoints(e, t, o) {
  e instanceof google.maps.LatLng ? t.call(o, e) : e instanceof google.maps.Data.Point ? t.call(o, e.get()) : e.getArray().forEach(function (e) {
    processPoints(e, t, o)
  })
}
function showDropWindow() {
  var e = new Ext.Panel({
    width: 400,
    height: 200,
    bodyStyle: 'padding:20px; text-align:center; border: 4px dashed #aaa;',
    html: '<div id="dropTarget" style="height:100%; line-height:160px;">Drop your files here</div>',
    listeners: {
      afterrender: function (t) {
        var e = t.body.dom;
        e.addEventListener(
          'dragover',
          function (e) {
            e.preventDefault(),
            e.stopPropagation(),
            t.body.setStyle('border-color', '#00f')
          },
          !1
        ),
        e.addEventListener(
          'dragleave',
          function (e) {
            e.preventDefault(),
            e.stopPropagation(),
            t.body.setStyle('border-color', '#aaa')
          },
          !1
        ),
        e.addEventListener(
          'drop',
          function (e) {
            e.preventDefault(),
            e.stopPropagation(),
            t.body.setStyle('border-color', '#0a0'),
            o.close(),
            handleFiles(e)
          },
          !1
        )
      }
    }
  }),
  o = new Ext.Window({
    title: 'File Drop Window',
    width: 420,
    height: 260,
    layout: 'fit',
    items: [
      e
    ]
  });
  o.show()
}
function handleFiles(e) {
  e = e.dataTransfer.files;
  if (0 == userID) return signInWin(),
  void alert(
    'Your are not signed in \n Sign in or Register to upload files'
  );
  if (!(e.length < 1)) if (1 < e.length) alert('Drop only one file at a time');
   else {
    file = e[0];
    var o = file.name,
    n = (o = o.replace(' ', '_'), o.split('.').pop().toLowerCase());
    if (['gmp',
    'json',
    'kml',
    'zip'].includes(n)) {
      e = new FileReader;
      return e.onload = function (e) {
        var t = e.target.result;
        'json' == n ? loadGeoJsonString(t) : 'gmp' == n ? (
          e = JSON.parse(t),
          mapTitle = e.mapTitle,
          loadJsonGmap(e, !0, 'base')
        ) : 'zip' === n ? shp(t).then(function (e) {
          loadGeoJsonObject(e)
        }).catch(
          function (e) {
            console.error('Error loading shapefile:', e),
            alert(
              'Failed to load shapefile. Please check the zip file contents.'
            )
          }
        ) : 'kml' === n &&
        post2PHP(
          'saveKML.php',
          'file=' + encodeURIComponent(o) + '&content=' + encodeURIComponent(t),
          function () {
            var e;
            4 != x.readyState &&
            'complete' != x.readyState ||
            (
              e = 'https://gmapgis.com/tempKML/' + o,
              new google.maps.KmlLayer(e, {
                suppressInfoWindows: !0,
                preserveViewport: !1,
                map: mp
              })
            )
          }
        )
      },
      e.onerror = function (e) {
        console.error('reading failed')
      },
      'zip' === n ? e.readAsArrayBuffer(file) : e.readAsText(file),
      !1
    }
    alert(
      'Unsupported file type. Please drop a .gmp, .json, .kml, or .zip shapefile.'
    )
  }
}
function zoomMapToKML(e) {
  const t = new DOMParser,
  o = t.parseFromString(e, 'text/xml'),
  n = o.getElementsByTagName('coordinates'),
  i = new google.maps.LatLngBounds;
  let a = !1;
  for (let e = 0; e < n.length; e++) {
    const r = n[e].textContent.trim(),
    s = r.split(/\s+/);
    s.forEach(
      e => {
        var t = e.split(',');
        2 <= t.length &&
        (
          e = parseFloat(t[0]),
          t = parseFloat(t[1]),
          isNaN(t) ||
          isNaN(e) ||
          (i.extend(new google.maps.LatLng(t, e)), a = !0)
        )
      }
    )
  }
  a ? mp.fitBounds(i) : console.warn('No valid coordinates found in KML.')
}
function convertGMPtoGeoJSON() {
  var e = saveJsonGmapFile(),
  o = JSON.parse(e);
  const l = {
    type: 'FeatureCollection',
    features: []
  };
  [
    'pointFeatures',
    'lineFeatures',
    'polyFeatures',
    'rectanFeatures',
    'circleFeatures',
    'labelFeatures'
  ].forEach(
    e => {
      const t = o[e] ||
      [];
      t.forEach(
        e => {
          let t = e.geometry,
          o = {};
          if (
            'circle' === t.type.toLowerCase() ||
            'labelpoint' === t.type.toLowerCase()
          ) o = {
            type: 'Point',
            coordinates: [
              t.coordinates[1],
              t.coordinates[0]
            ]
          },
          void 0 !== t.radius &&
          (e.properties.radius = t.radius);
           else if ('rectangle' === t.type.toLowerCase()) {
            let e = t.coordinates;
            e = e.map(e => [e[1],
            e[0]]);
            var [n,
            i] = e[0],
            [
              a,
              r
            ] = e[1],
            s = [
              n,
              i
            ];
            e = [
              s,
              [
                a,
                i
              ],
              [
                a,
                r
              ],
              [
                n,
                r
              ],
              s
            ],
            e = [
              e
            ],
            o = {
              type: 'Polygon',
              coordinates: e
            }
          } else {
            let e = t.coordinates;
            Array.isArray(e[0]) ? (
              e = e.map(e => [e[1],
              e[0]]),
              'Polygon' === t.type &&
              (
                r = e[0],
                s = e[e.length - 1],
                r[0] === s[0] &&
                r[1] === s[1] ||
                e.push(r),
                e = [
                  e
                ]
              )
            ) : e = [
              e[1],
              e[0]
            ],
            o = {
              type: t.type,
              coordinates: e
            }
          }
          l.features.push({
            type: 'Feature',
            geometry: o,
            properties: e.properties
          })
        }
      )
    }
  ),
  downLoadTextFile(JSON.stringify(l, null, 2), 'gmapgisgeojson.json')
}
function showUserInfo() {
  var e = new Ext.Panel({
    frame: !0,
    layout: 'form',
    defaults: {
      xtype: 'textfield',
      readOnly: !0,
      anchor: '100%'
    },
    items: [
      {
        fieldLabel: 'User Name',
        value: fileStats.userName
      },
      {
        fieldLabel: 'Sign up date',
        value: fileStats.signUpDate
      },
      {
        fieldLabel: 'Map files',
        value: fileStats.numFiles
      },
      {
        fieldLabel: 'Sign ins',
        value: fileStats.numSignIns
      },
      {
        fieldLabel: 'File Name',
        value: fileStats.name
      },
      {
        fieldLabel: 'File Size',
        value: fileStats.size
      },
      {
        fieldLabel: 'Features',
        value: fileStats.features
      },
      {
        fieldLabel: 'Created',
        value: fileStats.age
      },
      {
        fieldLabel: 'Accessed',
        value: fileStats.access
      },
      {
        fieldLabel: 'Views',
        value: fileStats.views
      }
    ]
  }),
  t = new Ext.Window({
    title: 'File Details',
    width: 400,
    height: 400,
    layout: 'fit',
    items: [
      e
    ],
    buttons: [
      {
        text: 'Close',
        handler: function () {
          t.close()
        }
      }
    ]
  });
  t.show()
}
function calculateDaysAgo(e) {
  e = new Date(e);
  if (isNaN(e)) {
    const daysAgo = - 100;
    return - 100
  }
  e -= new Date;
  return daysAgo = Math.floor(e / 86400000),
  daysAgo
}
function getDateFromDays(e) {
  const t = new Date;
  return t.setDate(t.getDate() + e),
  t.getFullYear() + '-' + String(t.getMonth() + 1).padStart(2, '0') + '-' + String(t.getDate()).padStart(2, '0')
}
function getStatsfromCode(e) {
  post2PHP(
    'getStatsfromCode.php',
    'fileCode=' + e,
    function () {
      var e;
      4 != x.readyState &&
      'complete' != x.readyState ||
      (
        e = x.responseText.split(',~'),
        fileStats.name = e[0],
        fileStats.fileCreaDate = e[2],
        fileStats.filePaidToDate = e[8],
        fileStats.views = e[4],
        fileStats.size = e[5],
        fileStats.numMapViews = e[12],
        checkPaidStatus(fileStats.name)
      )
    }
  )
}
function getFileStats(t) {
  post2PHP(
    'getFileStats.php',
    'fileName=' + t + '&userID=' + userID,
    function () {
      var e;
      4 != x.readyState &&
      'complete' != x.readyState ||
      (
        e = x.responseText.split(',~'),
        fileStats.name = t,
        fileStats.fileCreaDate = e[2],
        fileStats.filePaidToDate = e[8],
        fileStats.views = e[4],
        fileStats.size = e[5],
        fileStats.numMapViews = e[12],
        checkPaidStatus(t)
      )
    }
  )
}
function checkPaidStatus(e) {
  var t = fileStats,
  o = calculateDaysAgo(t.fileCreaDate),
  n = calculateDaysAgo(t.userPaidToDate),
  t = calculateDaysAgo(t.filePaidToDate);
  60 < Math.abs(o) ? t < 0 &&
  n < 0 &&
  (toggleOverlay(!1), optionPay(e)) : toggleOverlay(!0)
}
function openSavedFile(t) {
  switch (t.split('.') [1]) {
    case 'gmp':
      var o = 'readGmpFile20.php',
      n = 'file=' + t + '&fileCode=' + fileCode,
      i = function () {
        var e;
        4 != x.readyState &&
        'complete' != x.readyState ||
        (
          e = JSON.parse(x.responseText),
          getFileTitle(file2save = t),
          loadJsonGmap(e, !0, 'base')
        )
      };
      startOver(),
      post2PHP(o, n, i);
      break;
    case 'geojson':
      o = 'readGmpFile.php',
      n = 'file=' + t,
      i = function () {
        4 != x.readyState &&
        'complete' != x.readyState ||
        (
          loadGeoJsonString(x.responseText),
          updateFileName(t),
          getFileTitle(file2save = t)
        )
      };
      startOver(),
      post2PHP(o, n, i);
      break;
    case 'kml':
      i = rootUrl + '/links/' + t,
      new google.maps.KmlLayer({
        url: i,
        map: mp
      });
      return;
    case 'csv':
      csv2JsonGmp(e.target.result)
  }
}
function getFileTitle(e) {
  post2PHP(
    'getFileTitle20.php',
    'file=' + e + '&fileCode=',
    function () {
      4 != x.readyState &&
      'complete' != x.readyState ||
      (
        mapTitle = getParameter('fileTitle', x.responseText),
        fileCode = getParameter('fileCode', x.responseText),
        updateFileName()
      )
    }
  )
}
function justSave(e, t) {
  postContent(
    t,
    'saveMapFile20-2.php',
    e,
    function () {
      4 == x.readyState ||
      x.readyState
    }
  )
}
function loadKmlString(e) {
  postContent(
    e,
    'savelink.php',
    randomString(11) + '.kml',
    function () {
      4 == x.readyState ||
      x.readyState
    }
  )
}
function downLoadTxt(e, t) {
  var o = '',
  n = {
    xtype: 'textfield',
    value: o,
    id: 'fileName',
    selectOnFocus: !0,
    name: 'Filename',
    allowBlank: !1,
    fieldLabel: '<b><font color=\'#230876\' size=\'2\'>File Name &nbsp</font></b>'
  },
  n = new Ext.FormPanel({
    frame: !0,
    y: 100,
    autoHeight: !0,
    width: 550,
    items: [
      {
        xtype: 'textarea',
        y: 100,
        width: 550,
        height: 300,
        hideLabel: !0,
        readOnly: !0,
        id: 'kmlTxt',
        flex: 1
      },
      n
    ]
  }),
  i = new Ext.Window({
    title: '',
    frame: !0,
    y: 150,
    id: 'shapeWin',
    width: 550,
    layout: 'fit',
    closable: !0,
    buttonAlign: 'center',
    items: [
      n,
      {
        id: 'htmlID',
        html: [
          '<a id=dl download="' + o + '"></a>'
        ]
      }
    ],
    buttons: [
      {
        id: 'dnButt',
        text: 'Download',
        disabled: !1,
        handler: function () {
          0 < (o = $('fileName').getValue()).length &&
          (
            o += t,
            Ext.getCmp('htmlID').update('<a id=dl download="' + o + '"></a>'),
            $$('dl').href = 'data:text/plain,' + encodeURIComponent(e),
            $$('dl').click(),
            i.close()
          )
        }
      }
    ]
  });
  $('kmlTxt').setValue(e),
  i.show(),
  Ext.getCmp('fileName').focus('', 10)
}
function removeLastChar(e) {
  return e = e.substring(0, e.length - 1)
}
function gmpTogeojson(e) {
  for (j = 1; j < lines.length - 1; j++) {
    lines[j] = removeLastChar(lines[j]);
    var t = lines[j].split(','),
    o = '';
    for (i = 0; i < t.length; i++) o = o + ' "' + header[i] + '": "' + t[i] + '", ';
    o = '{' + (o = o.substring(0, o.length - 2)) + '}',
    geometry = ' "geometry": { "type": "Point", "coordinates": [' + t[lngCol] + ',' + t[latCol] + '] }',
    feature = 1 == j ? '{ "type": "Feature", "properties": ' + o + ',' + geometry + '}' : feature + ', { "type": "Feature", "properties": ' + o + ',' + geometry + '}'
  }
  loadGeoJsonString(
    '{"type": "FeatureCollection", "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } }, "features": [' + feature + ']}'
  )
}
function csv2JsonGmp(e) {
  var t = e.split('\n'),
  o = t[0].split(',');
  o[o.length - 1] = removeLastChar(o[o.length - 1]);
  var n = '',
  a = '',
  r = '';
  for (i = 0; i < o.length; i++) 'latitude' == o[i].toLowerCase() &&
  (n = i),
  'longitude' == o[i].toLowerCase() &&
  (a = i),
  'address' == o[i].toLowerCase() &&
  (r = i);
  '' == n &&
  '' == a &&
  '' == r &&
  Alert('Address or corrdinates not found');
  t.length;
  for (j = 1; j < t.length - 1; j++) {
    t[j] = removeLastChar(t[j]);
    var s = t[j].split(','),
    l = '';
    for (i = 0; i < s.length; i++) l = l + o[i] + ': ' + s[i] + '<br>';
    var p = parseFloat(s[n]),
    d = parseFloat(s[a]),
    p = assemMarker(
      new google.maps.LatLng(p, d).toUrlValue(5) + '^Marker^' + dfltMarker
    );
    geoJsonFile.pointFeatures.push({
      type: 'point',
      apiObj: ' ',
      properties: {
        title: 'Marker',
        style: 'hjlyybb',
        info: ''
      },
      geometry: {
        type: 'Point',
        coordinates: []
      }
    });
    d = geoJsonFile.pointFeatures.length - 1;
    geoJsonFile.pointFeatures[d].properties.style = dfltMarker,
    geoJsonFile.pointFeatures[d].properties.info = l,
    (geoJsonFile.pointFeatures[d].apiObj = p).setMap(mp),
    addlisMarker(p, editable = !0)
  }
}
function csvTogeojson(e) {
  var t = e.split('\n'),
  o = t[0].split(',');
  o[o.length - 1] = removeLastChar(o[o.length - 1]);
  var n = '',
  a = '',
  r = '';
  for (i = 0; i < o.length; i++) 'latitude' == o[i].toLowerCase() &&
  (n = i),
  'longitude' == o[i].toLowerCase() &&
  (a = i),
  'address' == o[i].toLowerCase() &&
  (r = i);
  '' == n &&
  '' == a &&
  '' == r &&
  Alert('Address or corrdinates not found');
  var s,
  l = '';
  t.length;
  for (j = 1; j < t.length - 1; j++) {
    t[j] = removeLastChar(t[j]);
    var p = t[j].split(','),
    d = '';
    for (i = 0; i < p.length; i++) d = d + ' "' + o[i] + '": "' + p[i] + '", ';
    d = '{' + (d = d.substring(0, d.length - 2)) + '}',
    s = ' "geometry": { "type": "Point", "coordinates": [' + p[a] + ',' + p[n] + '] }',
    l = 1 == j ? '{ "type": "Feature", "properties": ' + d + ',' + s + '}' : l + ', { "type": "Feature", "properties": ' + d + ',' + s + '}'
  }
  loadGeoJsonString('{"type": "FeatureCollection", "features": [' + l + ']}')
}
function codeAddress(e, o) {
  (new google.maps.Geocoder).geocode({
    address: e
  }, function (e, t) {
    'OK' == t ? (
      geoObj.features[o].geometry.cordinates = e[0].geometry.location,
      alert(geoObj.features[o].geometry.cordinates)
    ) : alert('Geocode was not successful for the following reason: ' + t)
  })
}
function changeQuery(e) {
  layer.setOptions({
    query: {
      select: '\'Geocodable address\'',
      from: ftLayer[0]
    }
  });
  var t = encodeURIComponent('SELECT \'Latitude\', \'Longitude\' FROM ' + ftLayer[0]);
  new google.visualization.Query('http://www.google.com/fusiontables/gvizdata?tq=' + t).send(zoomTo)
}
function zoomTo(e) {
  if (e) if (e.isError()) alert('Error in query: ' + e.getMessage() + ' ' + e.getDetailedMessage());
   else {
    FTresponse = e,
    numRows = e.getDataTable().getNumberOfRows(),
    numCols = e.getDataTable().getNumberOfColumns();
    var t = new google.maps.LatLngBounds;
    for (i = 0; i < numRows; i++) {
      var o = new google.maps.LatLng(
        parseFloat(e.getDataTable().getValue(i, 0)),
        parseFloat(e.getDataTable().getValue(i, 1))
      );
      t.extend(o)
    }
    mp.fitBounds(t)
  }
}
function getFTcolumns(e) {
  var t = 'https://www.googleapis.com/fusiontables/v1/tables/' + e + '/columns?key=AIzaSyByo8IoPuDIeTY6GXL1t9hVzFR182NtDMA',
  e = null;
  return (e = new XMLHttpRequest).open('GET', t, !1),
  e.send(null),
  JSON.parse(e.responseText)
}
function getColumnData(e) {
  var t = 'https://www.googleapis.com/fusiontables/v1/query?sql=SELECT SiteID FROM' + e + 'key=AIzaSyByo8IoPuDIeTY6GXL1t9hVzFR182NtDMA',
  e = null;
  return (e = new XMLHttpRequest).open('GET', t, !1),
  e.send(null),
  JSON.parse(e.responseText)
}
function getFusionTable() {
  var e = document.createElement('script'),
  t = [
    'https://www.googleapis.com/fusiontables/v1/query?'
  ];
  t.push('sql=');
  var o = encodeURIComponent(
    'SELECT name, kml_4326 FROM 1foc3xO9DyfSIF6ofvN0kp2bxSfSeKog5FbdWdQ'
  );
  t.push(o),
  t.push('&callback=drawMap'),
  t.push('&key=AIzaSyByo8IoPuDIeTY6GXL1t9hVzFR182NtDMA'),
  e.src = t.join('');
  o = document.getElementsByTagName('body') [0],
  t = httpGet(
    'https://www.googleapis.com/fusiontables/v1/tables/1s2A-oYneUizo5Me_Ni7dnb-VZCKG6szt6o8-oZE/columns?key=AIzaSyByo8IoPuDIeTY6GXL1t9hVzFR182NtDMA'
  );
  alert(t),
  alert(t.kind),
  o.appendChild(e)
}
function drawMap(e) {
  var t,
  o = [
    '#FF0000',
    '#00FF00',
    '#0000FF',
    '#FFFF00'
  ],
  n = e.rows;
  for (t in n) if ('Antarctica' != n[t][0]) {
    var i = [],
    a = n[t][1].geometries;
    if (a) for (var r in a) i.push(constructNewCoordinates(a[r]));
     else i = constructNewCoordinates(n[t][1].geometry);
    var s = Math.floor(4 * Math.random()),
    s = new google.maps.Polygon({
      paths: i,
      strokeColor: o[s],
      strokeOpacity: 0,
      strokeWeight: 1,
      fillColor: o[s],
      fillOpacity: 0.3
    });
    google.maps.event.addListener(s, 'mouseover', function () {
      this.setOptions({
        fillOpacity: 1
      })
    }),
    google.maps.event.addListener(s, 'mouseout', function () {
      this.setOptions({
        fillOpacity: 0.3
      })
    }),
    s.setMap(mp)
  }
}
function constructNewCoordinates(e) {
  var t,
  o = [],
  n = e.coordinates[0];
  for (t in n) o.push(new google.maps.LatLng(n[t][1], n[t][0]));
  return o
}
function LatLngControl(e) {
  this.ANCHOR_OFFSET_ = new google.maps.Point(8, 8),
  this.node_ = this.createHtmlNode_(),
  e.controls[google.maps.ControlPosition.TOP].push(this.node_),
  this.setMap(e),
  this.set('visible', !1),
  this.node_.style.border = '1px solid #676767'
}
function infoBub() {
  infoBubble = new InfoBubble({
    map: mp,
    content: '<div class="phoneytext">Some label</div>',
    position: new google.maps.LatLng( - 32, 116),
    shadowStyle: 1,
    padding: 5,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderRadius: 10,
    borderWidth: 1,
    minWidth: 200,
    maxWidth: 300,
    minHeight: 50,
    disableAutoPan: !0,
    backgroundClassName: 'phoney',
    arrowSize: 15,
    arrowPosition: 50,
    arrowStyle: 0
  }),
  infoBubble.open()
}
function mouseLabel(e) {
  var t = fromLatLngToPixels(e),
  e = $$('mDistance');
  e.style.top = t.y - 30 + 'px',
  e.style.left = t.x + 10 + 'px',
  e.style.visibility = 'visible'
}
function LenMeters(e) {
  var t = mp.getZoom(),
  o = '',
  n = comLen(e.getPath());
  return miles ? (
    o = (e = Math.round(3.28084 * n)) + ' ft',
    3000 < e &&
    e <= 5280 ? o = Math.round(e / 3) + ' yd' : 5280 < e &&
    e <= 528000 ? o = Math.round(e / 528) / 10 + ' mi' : 528000 < e &&
    (o = Math.round(e / 5280) + ' mi')
  ) : 20 < t ? o = n.toFixed(2) + ' m' : 5 < (o = n.toFixed(0) + ' m').length &&
  (o = o.slice(0, o.length - 5) + ', ' + o.slice(o.length - 5)),
  o
}
function dupRectan(e) {
  var t = thisFeature.properties.style,
  o = shapeOptions(t),
  o = new google.maps.Rectangle(o);
  o.setBounds(thisFeature.apiObj.getBounds()),
  o.setMap(mp),
  addRectanListeners(o, !0),
  togDrag(o);
  geoJsonFile.rectanFeatures.push({
    type: 'rectangle',
    apiObj: ' ',
    properties: {
      title: 'Rectangle',
      style: 'hjlyybb',
      info: ''
    },
    geometry: {
      type: 'Rectangle',
      coordinates: []
    }
  });
  o = geoJsonFile.rectanFeatures.length - 1;
  geoJsonFile.rectanFeatures[o].apiObj = rectangle,
  geoJsonFile.rectanFeatures[o].properties.style = t
}
function dupCircle(e) {
  var t = thisFeature.apiObj.getCenter(),
  o = thisFeature.apiObj.getRadius(),
  n = thisFeature.properties.style,
  i = shapeOptions(n),
  i = new google.maps.Circle(i);
  i.setMap(mp),
  i.setCenter(t),
  i.setRadius(o),
  addCircleListeners(i, !0),
  togDrag(i);
  geoJsonFile.circleFeatures.push({
    type: 'circle',
    apiObj: ' ',
    properties: {
      title: 'circle',
      style: 'hjlyybb',
      info: ''
    },
    geometry: {
      type: 'Circle',
      radius: '',
      center: '',
      zIndex: ''
    }
  });
  o = geoJsonFile.circleFeatures.length - 1;
  geoJsonFile.circleFeatures[o].properties.style = n,
  geoJsonFile.circleFeatures[o].apiObj = i
}
function drawDot(e) {
  var t = mp.getCenter(),
  o = [
    mp.getBounds().getNorthEast(),
    t
  ],
  n = google.maps.geometry.spherical.computeLength(o),
  t = Math.floor(n / 80),
  o = defDotSty,
  n = shapeOptions(o),
  n = new google.maps.Circle(n);
  n.setMap(mp),
  n.setCenter(e),
  n.setRadius(t),
  addCircleListeners(n, !0);
  geoJsonFile.circleFeatures.push({
    type: 'circle',
    apiObj: ' ',
    properties: {
      title: 'circle',
      style: 'hjlyybb',
      info: ''
    },
    geometry: {
      type: 'Circle',
      radius: '',
      center: '',
      zIndex: ''
    }
  });
  t = geoJsonFile.circleFeatures.length - 1;
  geoJsonFile.circleFeatures[t].properties.style = o,
  geoJsonFile.circleFeatures[t].apiObj = n
}
function circleProperties(n) {
  const e = n.getCenter();
  var t = n.getRadius(),
  o = n.get('zIndex'),
  i = new Ext.FormPanel({
    width: 300,
    height: 200,
    frame: !0,
    bodyStyle: 'padding:10px',
    labelWidth: 120,
    defaults: {
      width: 150,
      allowBlank: !1
    },
    items: [
      {
        xtype: 'numberfield',
        fieldLabel: 'Radius (m)',
        name: 'radius',
        decimalPrecision: 3,
        minValue: 0,
        value: t
      },
      {
        xtype: 'numberfield',
        fieldLabel: 'Center lat',
        name: 'centerLat',
        decimalPrecision: 9,
        value: e.lat()
      },
      {
        xtype: 'numberfield',
        fieldLabel: 'Center lng',
        name: 'centerLng',
        decimalPrecision: 9,
        value: e.lng()
      },
      {
        xtype: 'numberfield',
        fieldLabel: 'z-index',
        name: 'zindex',
        decimalPrecision: 0,
        value: o
      }
    ],
    buttons: [
      {
        text: 'Submit',
        handler: function () {
          var e = i.getForm().getValues(),
          t = parseFloat(e.radius),
          o = new google.maps.LatLng(e.centerLat, e.centerLng),
          e = parseInt(e.zindex);
          n.setCenter(o),
          n.setRadius(t),
          n.setOptions({
            zIndex: e
          }),
          a.close()
        }
      }
    ]
  }),
  a = new Ext.Window({
    frame: !0,
    autoHeight: !0,
    width: 550,
    title: 'Edit circle properties',
    layout: 'fit',
    closable: !0,
    items: [
      i
    ]
  });
  a.show()
}
function polyProperties(e) {
  var t = formattedArea(t = google.maps.geometry.spherical.computeArea(e.getPath())),
  e = LenMeters(e),
  e = new Ext.Panel({
    layout: 'form',
    border: !1,
    width: 300,
    height: 200,
    frame: !0,
    bodyStyle: 'padding:10px',
    labelWidth: 100,
    items: [
      {
        xtype: 'displayfield',
        fieldLabel: 'Area',
        value: t
      },
      {
        xtype: 'displayfield',
        fieldLabel: 'Perimeter',
        value: e
      }
    ],
    buttons: [
      {
        text: 'Close',
        handler: function () {
          o.close()
        }
      }
    ]
  }),
  o = new Ext.Window({
    title: 'Show polygon properties',
    frame: !0,
    autoHeight: !0,
    width: 550,
    layout: 'fit',
    closable: !0,
    items: [
      e
    ]
  });
  o.show()
}
function lineProperties(n) {
  let e = n.getPath();
  var i = e.getAt(0),
  t = e.getAt(1),
  o = google.maps.geometry.spherical.computeLength(e),
  a = google.maps.geometry.spherical.computeHeading(i, t),
  t = n.get('zIndex'),
  r = new Ext.FormPanel({
    title: 'Edit line properties',
    width: 300,
    height: 200,
    frame: !0,
    bodyStyle: 'padding:10px',
    labelWidth: 120,
    defaults: {
      width: 150,
      allowBlank: !1
    },
    items: [
      {
        xtype: 'numberfield',
        fieldLabel: 'Length',
        name: 'length',
        minValue: 0,
        value: o
      },
      {
        xtype: 'numberfield',
        fieldLabel: 'Heading',
        name: 'heading',
        value: a
      },
      {
        xtype: 'numberfield',
        fieldLabel: 'z-index',
        name: 'zindex',
        decimalPrecision: 0,
        value: t
      }
    ],
    buttons: [
      {
        text: 'Submit',
        handler: function () {
          var e = r.getForm().getValues(),
          t = parseFloat(e.length),
          o = parseFloat(e.heading),
          e = parseInt(e.zindex),
          o = google.maps.geometry.spherical.computeOffset(i, t, o),
          o = [
            i,
            o
          ];
          google.maps.geometry.spherical.computeLength(o);
          n.setPath(o),
          n.setOptions({
            zIndex: e
          }),
          s.close()
        }
      }
    ]
  }),
  s = new Ext.Window({
    frame: !0,
    autoHeight: !0,
    width: 550,
    layout: 'fit',
    closable: !0,
    items: [
      r
    ]
  });
  s.show()
}
function circleToPolyline(p, e) {
  var d = new Ext.FormPanel({
    title: 'Circle to Polyline Input',
    width: 300,
    height: 200,
    frame: !0,
    bodyStyle: 'padding:10px',
    labelWidth: 120,
    defaults: {
      width: 150,
      allowBlank: !1
    },
    items: [
      {
        xtype: 'numberfield',
        fieldLabel: 'Start Angle (°)',
        name: 'startAngle',
        minValue: 0,
        maxValue: 360,
        value: 0
      },
      {
        xtype: 'numberfield',
        fieldLabel: 'Finish Angle (°)',
        name: 'finishAngle',
        minValue: 0,
        maxValue: 360,
        value: 360
      },
      {
        xtype: 'numberfield',
        fieldLabel: 'Increment (°)',
        name: 'increment',
        minValue: 1,
        maxValue: 180,
        value: 10
      },
      {
        xtype: 'checkbox',
        fieldLabel: 'Close Loop',
        name: 'closeLoop'
      }
    ],
    buttons: [
      {
        text: 'Submit',
        handler: function () {
          !function () {
            var e = d.getForm().getValues(),
            t = parseFloat(e.startAngle),
            o = parseFloat(e.finishAngle),
            n = parseFloat(e.increment),
            e = 'on' === e.closeLoop;
            const i = p.getCenter(),
            a = p.getRadius(),
            r = [];
            for (let e = t; e < o; e += n) {
              var s = e * Math.PI / 180,
              l = i.lat() + a / 111320 * Math.cos(s),
              s = i.lng() + a / (111320 * Math.cos(i.lat() * Math.PI / 180)) * Math.sin(s);
              r.push({
                lat: l,
                lng: s
              })
            }
            e &&
            r.push(r[0]),
            t = new google.maps.Polyline,
            e = lineOptions(defLineSty),
            t.setOptions(e),
            t.setPath(r),
            t.setMap(mp),
            t.setEditable(!0),
            geoJsonFile.lineFeatures.push({
              type: 'line',
              apiObj: ' ',
              properties: {
                title: 'Line',
                style: 'hjlyybb',
                info: ''
              },
              geometry: {
                type: 'Line',
                coordinates: []
              }
            }),
            e = geoJsonFile.lineFeatures.length - 1,
            geoJsonFile.lineFeatures[e].properties.style = defLineSty,
            addLineListeners(geoJsonFile.lineFeatures[e].apiObj = t, !0),
            togDrag(t),
            spliceThisFeature()
          }(),
          t.close()
        }
      }
    ]
  }),
  t = new Ext.Window({
    frame: !0,
    autoHeight: !0,
    width: 550,
    layout: 'fit',
    closable: !0,
    items: [
      d
    ]
  });
  t.show()
}
function disCircle(e) {
  var t,
  o;
  1 == distanceLine ? (
    (t = dsline.getPath()).setAt(1, e.latLng),
    o = Math.round(comLen(dsline.getPath())),
    circle.setRadius(o)
  ) : (
    (
      dsline = new google.maps.Polyline({
        strokeColor: '#ff8800',
        strokeOpacity: 1,
        strokeWeight: 3
      })
    ).setMap(mp),
    (t = dsline.getPath()).push(x1),
    t.push(e.latLng),
    distanceLine = 1,
    o = shapeOptions(defPolySty),
    (circle = new google.maps.Circle(o)).setMap(mp),
    circle.setCenter(x1),
    circle.setRadius(500),
    t = circle,
    geoJsonFile.circleFeatures.push({
      type: 'circle',
      apiObj: ' ',
      properties: {
        title: 'circle',
        style: 'hjlyybb',
        info: ''
      },
      geometry: {
        type: 'Circle',
        radius: '',
        center: '',
        zIndex: '10'
      }
    }),
    o = geoJsonFile.circleFeatures.length - 1,
    geoJsonFile.circleFeatures[o].properties.style = defPolySty,
    addCircleListeners(geoJsonFile.circleFeatures[o].apiObj = t, editable),
    google.maps.event.addListener(
      circle,
      'mousemove',
      function (e) {
        drawCircle &&
        (
          dsline.getPath().setAt(1, e.latLng),
          mouseLabel(e.latLng),
          $$('mDistance').innerHTML = LenMeters(dsline),
          e = Math.round(comLen(dsline.getPath())),
          circle.setRadius(e),
          circle.setOptions({
            zIndex: '0'
          })
        )
      }
    )
  ),
  mouseLabel(e.latLng),
  $$('mDistance').innerHTML = LenMeters(dsline)
}
function addCircleListeners(o, t) {
  google.maps.event.addListener(
    o,
    'rightclick',
    function (e) {
      thisFeature = getFeatureByObj(o),
      editShape = 'circle',
      t &&
      contextCircMenu(e.latLng, o)
    }
  ),
  google.maps.event.addListener(
    o,
    'click',
    function (e) {
      for (i = 0; i < circleGroup.length; i++) o == circleGroup[i] &&
      (thisRecord = i);
      if (thisFeature = getFeatureByObj(o), $('mLength').pressed) return x1 = e.latLng,
      void (
        measureLength ? (distanceLine = 0, dsline.setMap()) : measureLength = !0
      );
      var t;
      drawCircle ? (
        x1 = e.latLng,
        distanceLine = 0,
        dsline.setMap(),
        $$('mDistance').style.visibility = 'hidden',
        google.maps.event.removeListener(listenerMarker),
        drawCircle = !1,
        $('circle').toggle()
      ) : (
        t = thisFeature.properties.info,
        t = '<div style=\'text-align: center;\'><b>' + thisFeature.properties.title + '</b><br><br>' + t,
        showInfowin(e.latLng, thisFeature)
      )
    }
  ),
  google.maps.event.addListener(
    o,
    'mousemove',
    function (e) {
      mouseLatlng = e.latLng,
      measureLength ? disLabel(e) : drawArrow ? dispArrow(e) : drawLine ||
      drawPolygon ||
      drawRectangle ? dashLine(e) : drawCircle ? disCircle(e) : drawScrib &&
      line.getPath().push(e.latLng)
    }
  ),
  google.maps.event.addListener(o, 'mouseover', function (e) {
  }),
  google.maps.event.addListener(o, 'mouseout', function (e) {
  })
}
function dispArrow(e) {
  var t,
  o;
  1 == distanceLine ? (o = dsline.getPath()).setAt(1, e.latLng) : (
    distanceLine = 1,
    t = lineOptions(defArrowSty),
    (dsline = new google.maps.Polyline(t)).setMap(mp),
    mp.setOptions({
      draggableCursor: 'pointer'
    }),
    (o = dsline.getPath()).push(x1),
    o.push(e.latLng),
    listenerDis = google.maps.event.addListener(
      dsline,
      'click',
      function (e) {
        distanceLine = 0,
        drawArrow = !1,
        createArrow(dsline.getPath()),
        dsline.setMap(),
        google.maps.event.removeListener(listenerMarker)
      }
    )
  )
}
function createArrow(e) {
  $('arrow').toggle(),
  toggleControl('arrow', !1);
  var t = lineOptions(defArrowSty),
  o = new google.maps.Polyline(t);
  o.setOptions({
    draggable: !0
  }),
  o.setOptions({
    zIndex: 50
  }),
  o.setMap(mp),
  o.setPath(e),
  google.maps.event.addListener(
    o,
    'rightclick',
    function (e) {
      editShape = 'line',
      thisFeature = getFeatureByObj(o),
      editable &&
      contextArrowMenu(e.latLng, o)
    }
  ),
  google.maps.event.addListener(
    o,
    'mouseover',
    function (e) {
      thisLineFeature = getFeatureByObj(o),
      mOverSty = thisLineFeature.properties.style;
      var t = lineOptions('#FF0000,10,0.3,#ff8800,0.4,d6');
      o.setOptions(t),
      o.setOptions({
        zIndex: 50
      })
    }
  ),
  google.maps.event.addListener(
    o,
    'mouseout',
    function (e) {
      var t = lineOptions(mOverSty);
      o.setOptions(t)
    }
  );
  geoJsonFile.lineFeatures.push({
    type: 'line',
    apiObj: ' ',
    properties: {
      title: 'Line',
      style: '#FF0000,5,1,#ff8800,0.4,d0',
      info: ''
    },
    geometry: {
      type: 'Line',
      coordinates: 'cor'
    }
  });
  e = geoJsonFile.lineFeatures.length - 1;
  geoJsonFile.lineFeatures[e].properties.style = defArrowSty,
  geoJsonFile.lineFeatures[e].apiObj = o
}
function setListners() {
  listnerdragend = google.maps.event.addListener(mp, 'dragend', svTrail)
}
function endPolygon(e) {
  polygon.setOptions({
    editable: !1
  }),
  $('sendlink').enable(),
  drawPolygon = !1,
  dsline.setMap(),
  mp.setOptions({
    draggableCursor: 'pointer'
  }),
  $('polygon').toggle(),
  thisPoly = ''
}
function startMarker(e, t, o) {
  var n = assemMarker(e.toUrlValue(5) + '^Marker ^' + dfltMarker);
  geoJsonFile.pointFeatures.push({
    type: 'point',
    apiObj: ' ',
    properties: {
      title: 'Marker',
      style: 'hjlyybb',
      info: ''
    },
    geometry: {
      type: 'Point',
      coordinates: []
    }
  });
  var i = geoJsonFile.pointFeatures.length - 1;
  geoJsonFile.pointFeatures[i].properties.style = dfltMarker,
  geoJsonFile.pointFeatures[i].apiObj = n,
  geoJsonFile.pointFeatures[i].properties.info = defaultInfoHTML,
  geoJsonFile.pointFeatures[i].geometry.coordinates = e,
  n.setMap(t),
  n.setOptions({
    draggable: !1
  }),
  addlisMarker(n, editable)
}
function assemMarker(e) {
  var t = e.split('^'),
  o = t[0].split(','),
  e = parseFloat(o[0]),
  o = parseFloat(o[1]),
  e = new google.maps.LatLng(e, o),
  o = t[1],
  t = Url2Image(dfltMarker);
  return new google.maps.Marker({
    position: e,
    title: o,
    icon: t
  })
}
function Url2Image(e) {
  return {
    url: e,
    scaledSize: new google.maps.Size(32, 37),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(16, 32)
  }
}
function addlisMarker(o, t) {
  google.maps.event.addListener(o, 'dblclick', function (e) {
    iconWin(o)
  }),
  google.maps.event.addListener(
    o,
    'click',
    function (e) {
      var t;
      window.event.altKey &&
      (t = !0),
      thisFeature = getFeatureByObj(o),
      t ? (
        thisFeature.properties.style = copyMarker,
        t = Url2Image(thisFeature.properties.style.split('^') [0]),
        thisFeature.apiObj.setIcon(t)
      ) : showInfowin(e.latLng, thisFeature)
    }
  ),
  google.maps.event.addListener(
    o,
    'rightclick',
    function (e) {
      thisFeature = getFeatureByObj(o),
      editShape = 'marker',
      t &&
      contextMarkerMenu(e.latLng, o)
    }
  ),
  google.maps.event.addListener(o, 'mouseover', function (e) {
  }),
  google.maps.event.addListener(
    o,
    'mouseout',
    function (e) {
      $$('mDistance').style.visibility = 'hidden'
    }
  )
}
function updateMarkerClusterer() {
  var e = [];
  for (i = 0; i < geoJsonFile.pointFeatures.length; i++) e[i] = geoJsonFile.pointFeatures[i].apiObj;
  new MarkerClusterer(
    mp,
    e,
    {
      imagePath: 'https://gmapgis.com/icons/markerclusterer/m'
    }
  )
}
function contextMarkerMenu(e, t) {
  destroyContexMenu();
  e = fromLatLngToPixels(clickLatlng = e);
  t == markergroup[i] &&
  (thisRecord = i),
  fR = thisRecord,
  frP = t,
  thisFeature = getFeatureByObj(t),
  conteMenu = new Ext.menu.Menu({
    width: 100,
    height: 200,
    margin: '0 0 10 0',
    floating: !1,
    items: [
      '-',
      {
        text: '<b><font color=\'#230876\' size=\'2\'>Edit name & description &nbsp</font></b>',
        handler: shapesTbar
      },
      {
        id: 'togdrag',
        text: '<b><font color=\'#230876\' size=\'2\'>Toggle drag &nbsp</font></b>',
        handler: function () {
          t.draggable ? t.setOptions({
            draggable: !1
          }) : t.setOptions({
            draggable: !0
          }),
          $('ConMenu').destroy()
        }
      },
      '-',
      {
        text: '<b><font color=\'#230876\' size=\'2\'>Styles &nbsp</font></b>',
        menu: [
          {
            text: '<b><font color=\'#230876\' size=\'2\'>Change icon &nbsp</font></b>',
            handler: iconWin
          },
          {
            text: '<b><font color=\'#230876\' size=\'2\'>Set as default &nbsp</font></b>',
            handler: function () {
              $('ConMenu').destroy(),
              dfltMarker = thisFeature.properties.style
            }
          },
          '-',
          {
            text: '<b><font color=\'#230876\' size=\'2\'>Copy icon &nbsp</font></b>',
            handler: function () {
              $('ConMenu').destroy(),
              copyMarker = thisFeature.properties.style
            }
          },
          {
            text: '<b><font color=\'#230876\' size=\'2\'>Paste icon &nbsp</font></b>',
            handler: function () {
              $('ConMenu').destroy(),
              thisFeature.properties.style = copyMarker;
              var e = Url2Image(thisFeature.properties.style.split('^') [0]);
              thisFeature.apiObj.setIcon(e)
            }
          }
        ]
      },
      {
        text: '<b><font color=\'#230876\' size=\'2\'>Convert to dot &nbsp</font></b>',
        handler: function () {
          drawDot(t.getPosition()),
          spliceThisFeature(),
          $('ConMenu').destroy()
        }
      },
      '-',
      {
        text: '<b><font color=\'#230876\' size=\'2\'>Delete &nbsp</font></b>',
        handler: function () {
          spliceThisFeature(),
          $('ConMenu').destroy()
        }
      },
      '-'
    ]
  }),
  new Ext.Window({
    frame: !1,
    x: e.x + 20,
    y: e.y,
    id: 'ConMenu',
    width: 200,
    layout: 'fit',
    closable: !1,
    items: [
      conteMenu
    ]
  }).show(),
  t.draggable ? (
    $('togdrag').addClass('highlight-menu-item'),
    $('togdrag').setText(
      '<b><font color=\'#230876\' size=\'2\'>Draggable &nbsp</font></b>'
    )
  ) : (
    $('togdrag').removeClass('highlight-menu-item'),
    $('togdrag').setText(
      '<b><font color=\'#230876\' size=\'2\'>Toggle drag &nbsp</font></b>'
    )
  )
}
function getmrkImg(e) {
  e = (e = e.replace('#', '')).split('^'),
  '0' == e[4] &&
  e[2];
  return rootUrl + '/icons/' + e[2] + e[1] + '.png'
}
function markerFormat() {
  $('ConMenu').destroy();
  var e = new Ext.menu.ColorMenu({
    text: 'colorMenu',
    handler: function (e, t) {
      var o = spltMrkSty();
      o[4] = '#' + t,
      updateMrkStyle(o),
      replaceMrker()
    }
  }),
  t = new Ext.Slider({
    fieldLabel: 'Size',
    labelWidth: 30,
    width: 100,
    minValue: 8,
    maxValue: 64,
    increment: 8,
    value: 32,
    plugins: new Ext.ux.SliderTip,
    listeners: {
      changecomplete: function (e, t) {
        markerSize(e, t)
      }
    }
  }),
  t = {
    xtype: 'fieldset',
    title: 'Format Icon',
    autoHeight: !0,
    layout: 'column',
    defaults: {
      layout: 'form'
    },
    items: [
      {
        columnWidth: 0.3,
        items: [
          new Ext.Button({
            fieldLabel: 'Fill',
            iconCls: 'color',
            text: 'Color',
            menu: e
          })
        ]
      },
      {
        columnWidth: 0.4,
        items: [
          t
        ]
      }
    ]
  },
  t = new Ext.FormPanel({
    labelWidth: 50,
    frame: !0,
    width: 550,
    autoHeight: !0,
    items: [
      t
    ]
  });
  new Ext.Window({
    frame: !0,
    autoHeight: !0,
    x: 10,
    y: 200,
    width: 550,
    id: 'markerWin',
    layout: 'fit',
    closable: !0,
    items: [
      t
    ]
  }).show()
}
function loadJsonGmap(e, t, o) {
  mp.setMapTypeId(e.mapOptions.mapType),
  fileStats.features = e.polyFeatures.length + e.lineFeatures.length + e.circleFeatures.length + e.pointFeatures.length + e.labelFeatures.length + 5,
  void 0 !== e.precision ? (l = parseInt(e.precision), isNaN(l) || (precision = l)) : precision = 5;
  var n = e.mapOptions.center,
  a = new google.maps.LatLng(n[0], n[1]),
  r = parseInt(e.mapOptions.zoom),
  s = e.mapOptions.bounds,
  l = s[0],
  l = new google.maps.LatLng(l[0], l[1]),
  s = s[1],
  s = new google.maps.LatLng(s[0], s[1]);
  new google.maps.LatLngBounds(l, s);
  if (
    'base' == o &&
    (mobile && --r, mp.setCenter(a), mp.setZoom(r), currentZoom = r),
    e.overlays
  ) for (k = 0; k < e.overlays.length; k++) {
    var p = e.overlays[k];
    geoJsonFile.overlays.push(p)
  }
  for (i = 0; i < e.polyFeatures.length; i++) {
    var d = e.polyFeatures[i],
    c = new google.maps.Polygon;
    (d.apiObj = c).setMap(mp),
    c.setOptions(shapeOptions(d.properties.style)),
    c.setPath(x(d.geometry)),
    addPolyListeners(c, t),
    'polyArea' == d.type &&
    (
      google.maps.event.addListener(c.getPath(), 'set_at', function (e) {
        showArea(c)
      }),
      google.maps.event.addListener(c.getPath(), 'insert_at', function (e) {
        showArea(c)
      }),
      google.maps.event.addListener(c.getPath(), 'remove_at', function (e) {
        showArea(c)
      })
    ),
    (t || viewer) &&
    geoJsonFile.polyFeatures.push(d)
  }
  for (i = 0; i < e.lineFeatures.length; i++) {
    d = e.lineFeatures[i],
    c = new google.maps.Polyline;
    (d.apiObj = c).setMap(mp),
    c.setOptions(lineOptions(d.properties.style)),
    c.setPath(x(d.geometry)),
    (t || viewer) &&
    (geoJsonFile.lineFeatures.push(d), addLineListeners(c, t))
  }
  for (i = 0; i < e.rectanFeatures.length; i++) {
    d = e.rectanFeatures[i];
    (c = new google.maps.Rectangle).setOptions(shapeOptions(d.properties.style));
    var g = x(d.geometry),
    g = new google.maps.LatLngBounds(g[0], g[1]);
    c.setMap(mp),
    c.setBounds(g),
    addRectanListeners(c, t),
    d.apiObj = c,
    (t || viewer) &&
    geoJsonFile.rectanFeatures.push(d)
  }
  for (i = 0; i < e.pointFeatures.length; i++) {
    var u = (d = e.pointFeatures[i]).properties.title,
    n = d.geometry.coordinates,
    a = new google.maps.LatLng(n[0], n[1]),
    m = Url2Image(d.properties.style.split('^') [0]),
    m = new google.maps.Marker({
      position: a,
      title: u,
      icon: m
    });
    m.setMap(mp),
    addlisMarker(m, t),
    d.apiObj = m,
    (t || viewer) &&
    geoJsonFile.pointFeatures.push(d)
  }
  for (i = 0; i < e.circleFeatures.length; i++) {
    var u = (d = e.circleFeatures[i]).properties.title,
    n = d.geometry.coordinates,
    f = new google.maps.LatLng(n[0], n[1]),
    h = d.geometry.radius,
    y = d.geometry.zIndex;
    'undefined' == y &&
    (y = '10');
    var b = shapeOptions(d.properties.style),
    b = new google.maps.Circle(b);
    b.setMap(mp),
    b.setCenter(f),
    b.setRadius(h),
    b.setOptions({
      zIndex: y
    }),
    addCircleListeners(b, t),
    b.setOptions({
      draggable: !1
    }),
    d.apiObj = b,
    (t || viewer) &&
    geoJsonFile.circleFeatures.push(d)
  }
  for (i = 0; i < e.labelFeatures.length; i++) {
    n = (d = e.labelFeatures[i]).geometry.coordinates;
    d.geometry.coordinates = new google.maps.LatLng(n[0], n[1]),
    d.apiObj = 'obj',
    reOverlayLabel(d),
    (t || viewer) &&
    geoJsonFile.labelFeatures.push(d)
  }
  function x(e) {
    var t,
    o = e.coordinates,
    n = [];
    for (j = 0; j < o.length; j++) t = e.type.includes('Geo') ? new google.maps.LatLng(parseFloat(o[j][1]), parseFloat(o[j][0])) : new google.maps.LatLng(parseFloat(o[j][0]), parseFloat(o[j][1])),
    n.push(t);
    return n
  }
}
function sampPolyDisp(e, t) {
  var o = JSON.parse(t);
  e.setMapTypeId(o.mapOptions.mapType);
  var n = o.mapOptions.center,
  t = new google.maps.LatLng(n[0], n[1]),
  n = parseInt(o.mapOptions.zoom);
  for (
    e.setCenter(t),
    e.setZoom(n),
    i = 0;
    i < o.rectanFeatures.length;
    i++
  ) {
    var a = o.rectanFeatures[i],
    r = new google.maps.Rectangle;
    (a.apiObj = r).setOptions(shapeOptions(a.properties.style));
    var s = l(a.geometry),
    s = new google.maps.LatLngBounds(s[0], s[1]);
    r.setMap(e),
    r.setBounds(s),
    function (o) {
      google.maps.event.addListener(
        r,
        'click',
        function (e) {
          thisFeature.properties.style = o;
          var t = shapeOptions(thisFeature.properties.style);
          thisFeature.apiObj.setOptions(t)
        }
      )
    }(a.properties.style)
  }
  for (i = 0; i < o.lineFeatures.length; i++) {
    a = o.lineFeatures[i];
    (r = new google.maps.Polyline).setMap(e),
    r.setOptions(lineOptions(a.properties.style)),
    r.setPath(l(a.geometry)),
    function (t, n) {
      google.maps.event.addListener(
        t,
        'click',
        function (e) {
          var t = thisFeature.properties.style.split(','),
          o = n.split(',');
          t[1] = o[1],
          t[5] = o[5],
          thisFeature.properties.style = t[0] + ',' + t[1] + ',' + t[2] + ',' + t[3] + ',' + t[4] + ',' + t[5];
          t = lineOptions(thisFeature.properties.style);
          thisFeature.apiObj.setOptions(t)
        }
      ),
      google.maps.event.addListener(
        t,
        'mouseover',
        function (e) {
          t.setOptions(lineOptions('#FF0000,10,.3,#ff8800,0.4,d0'))
        }
      ),
      google.maps.event.addListener(t, 'mouseout', function (e) {
        t.setOptions(lineOptions(n))
      })
    }(r, a.properties.style)
  }
  function l(e) {
    var t,
    o = e.coordinates,
    n = [];
    for (j = 0; j < o.length; j++) t = e.type.includes('Geo') ? new google.maps.LatLng(parseFloat(o[j][1]), parseFloat(o[j][0])) : new google.maps.LatLng(parseFloat(o[j][0]), parseFloat(o[j][1])),
    n.push(t);
    return n
  }
}
function getFileContent(e) {
  var t = null;
  return (t = new XMLHttpRequest).open('GET', e, !1),
  t.send(null),
  t.responseText
}
function getGmp(e) {
  e = 'file=' + e;
  x = xm(),
  null != x &&
  (
    x.open('POST', 'fileread.php', !0),
    x.onreadystatechange = function () {
      var e;
      4 != x.readyState &&
      'complete' != x.readyState ||
      (e = x.responseText.split('^~'), kml_polygons(e[1]))
    },
    x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'),
    x.send(e)
  )
}
function saveMarkersCSV(e) {
  e.split('^~');
  for (
    alert(geoJsonFile.pointFeatures.length),
    i = 0;
    i < geoJsonFile.pointFeatures.length;
    i++
  ) {
    var t = geoJsonFile.pointFeatures[i].apiObj.getPosition().toUrlValue(5);
    alert(t),
    alert(t[0])
  }
  return 'Marker name,Latitude,Longitude,Infowindow html\n'
}
function saveGeoJson2(e) {
  alert('9888');
  var t = e.split('^~'),
  o = geoJson_polygons(t[1]),
  e = geoJson_lines(t[2]),
  t = geoJson_points(t[4]);
  return 0 < e.length &&
  (t = 0 < t.length ? t + ',' + e : e),
  0 < o.length &&
  (t = 0 < t.length ? t + ',' + o : o),
  t = '{"type": "FeatureCollection", "source": "gmapgis.com", "features": [' + t + ']}'
}
function saveGeoJsonFile() {
  var e,
  t;
  saveJsonGmapFile().length < 5 ? alert('No drawings on the map') : (
    drawing = !1,
    t = e = '',
    0 < geoJsonFile.pointFeatures.length &&
    (saveGeoJsonFeatures(geoJsonFile.pointFeatures), drawings = !0),
    0 < geoJsonFile.lineFeatures.length &&
    (e = saveGeoJsonFeatures(geoJsonFile.lineFeatures), drawings = !0),
    0 < geoJsonFile.rectanFeatures.length &&
    (saveGeoJsonFeatures(geoJsonFile.rectanFeatures), drawings = !0),
    0 < geoJsonFile.polyFeatures.length &&
    (t = saveGeoJsonFeatures(geoJsonFile.polyFeatures), drawings = !0),
    0 < geoJsonFile.circleFeatures.length &&
    (saveGeoJsonFeatures(geoJsonFile.circleFeatures), drawings = !0),
    0 < geoJsonFile.labelFeatures.length &&
    (saveGeoJsonFeatures(geoJsonFile.labelFeatures), drawings = !0),
    geoJson = '{"type": "FeatureCollection", "source": "gmapgis.com",' + ('"features": [' + e + ',' + t + ']') + '}',
    geoJson = geoJson.replace('[,', '['),
    geoJson = geoJson.replace(',]', ']'),
    downLoadTxt(geoJson, '.geojson')
  )
}
function saveGeoJsonFeatures(e) {
  var t = '';
  for (i = 0; i < e.length; i++) {
    var o,
    n,
    a,
    r,
    s = e[i].type;
    'polygon' == s ||
    'line' == s ? r = getGeoJsonCoordinates(e[i]) : 'rectangle' == s ? (
      d = '[' + e[i].apiObj.getBounds().getNorthEast().toUrlValue(5) + ']',
      r = '[' + e[i].apiObj.getBounds().getSouthWest().toUrlValue(5) + ']' + ',' + d
    ) : 'circle' == s ? (
      o = e[i].apiObj.getRadius(),
      r = e[i].apiObj.getCenter().toUrlValue(5),
      n = e[i].apiObj.get('zIndex')
    ) : 'label' == s ? (
      r = (r = geoJsonFile.labelFeatures[i].geometry.coordinates).toUrlValue(5),
      a = geoJsonFile.labelFeatures[i].apiObj
    ) : 'point' == s &&
    (
      r = geoJsonFile.pointFeatures[i].apiObj.getPosition().toUrlValue(5)
    );
    var l = e[i].properties.info,
    p = e[i].properties,
    d = '  "style": "' + p.style + '", ',
    p = '  "title": "' + p.title + '", ',
    l = '  "info": "' + l + '" ';
    l = 'circle' == s ? '{"type":"circle","apiObj":"obj","properties": {' + p + d + l + '},"geometry": {"type": "Circle","radius": ' + o + ', "zIndex": ' + n + ',"coordinates":  [' + r + ']}}' : 'label' == s ? '{"type":"' + s + '","apiObj":"' + a + '","properties": {' + p + d + l + '},"geometry": {"type": "LabelPoint", "coordinates":  [' + r + ']}}' : 'line' == s ? '{"type":"Feature","properties": {' + p + d + l + '},"geometry": {"type": "LineString", "coordinates":  [' + r + ']}}' : '{"type":"Feature","properties": {' + p + d + l + '},"geometry": {"type": "Polygon", "coordinates":  [[' + r + ']]}}',
    t = 0 == i ? l : t + ',' + l
  }
  return alert(t),
  t
}
function getGeoJsonCoordinates(e) {
  var t = '',
  o = e.apiObj.getPath(),
  e = e.type;
  for (j = 0; j < o.getLength(); j++) {
    var n,
    i = (a = o.getAt(j).toUrlValue(7)).split(','),
    a = i[1] + ',' + i[0];
    0 == j &&
    (n = ',[' + a + ']'),
    t = t + ',[' + a + ']'
  }
  return 'polygon' == e &&
  (t += n),
  t = t.slice(1)
}
function saveJsonGmapFile() {
  drawing = !1;
  var e = '',
  t = '',
  o = '',
  n = '',
  i = '',
  a = '',
  r = '"mapTitle": "' + mapTitle + '",',
  s = '"precision": "' + precision + '",',
  l = mp.getMapTypeId(),
  p = mp.getCenter().toUrlValue(5),
  d = mp.getZoom(),
  c = '[' + mp.getBounds().getNorthEast().toUrlValue(5) + ']',
  d = '"mapOptions": {"mapType": "' + l + '", "center": [' + p + '], "zoom": ' + d + ', "bounds": [' + ('[' + mp.getBounds().getSouthWest().toUrlValue(5) + ']' + ',' + c) + ']}';
  0 < geoJsonFile.pointFeatures.length &&
  (e = saveJsonFeatures(geoJsonFile.pointFeatures), drawings = !0),
  0 < geoJsonFile.lineFeatures.length &&
  (t = saveJsonFeatures(geoJsonFile.lineFeatures), drawings = !0),
  0 < geoJsonFile.rectanFeatures.length &&
  (o = saveJsonFeatures(geoJsonFile.rectanFeatures), drawings = !0),
  0 < geoJsonFile.polyFeatures.length &&
  (n = saveJsonFeatures(geoJsonFile.polyFeatures), drawings = !0),
  0 < geoJsonFile.circleFeatures.length &&
  (i = saveJsonFeatures(geoJsonFile.circleFeatures), drawings = !0),
  0 < geoJsonFile.labelFeatures.length &&
  (a = saveJsonFeatures(geoJsonFile.labelFeatures), drawings = !0);
  c = JSON.stringify(legendJson.content);
  if (geoJsonFile.overlays) {
    var g = '';
    for (k = 0; k < geoJsonFile.overlays.length; k++) g = g + ',"' + geoJsonFile.overlays[k] + '"'
  }
  c = '{"type": "FeatureCollection", "source": "gmapgis.com",' + r + s + ' "user": { "userID": "xyj", "created": "cdate", "updated": "udate", "acessed": "adate","total": "tViews", "paid": "pViews", "remaining": "rViews"},' + d + ',' + ('"overlays": [' + (g = g.slice(1)) + ']') + ',' + ('"pointFeatures": [' + e + ']') + ',' + ('"lineFeatures": [' + t + ']') + ',' + ('"rectanFeatures": [' + o + ']') + ',' + ('"polyFeatures": [' + n + ']') + ',' + ('"circleFeatures": [' + i + ']') + ',' + ('"labelFeatures": [' + a + ']') + ',' + ('"legendFeatures":' + c) + '}';
  return drawings ? c : c = 'ggh'
}
function saveJsonFeatures(e) {
  var t = '';
  for (i = 0; i < e.length; i++) {
    var o,
    n,
    a,
    r = e[i].type;
    'polygon' == r ||
    'line' == r ||
    'polyArea' == r ? a = getShapeCoordinates(e[i].apiObj) : 'rectangle' == r ? (
      c = '[' + e[i].apiObj.getBounds().getNorthEast().toUrlValue(9) + ']',
      a = '[' + e[i].apiObj.getBounds().getSouthWest().toUrlValue(9) + ']' + ',' + c
    ) : 'circle' == r ? (
      o = e[i].apiObj.getRadius(),
      a = e[i].apiObj.getCenter().toUrlValue(10)
    ) : r.includes('abel') ? (
      a = (a = geoJsonFile.labelFeatures[i].geometry.coordinates).toUrlValue(5),
      n = 'obj'
    ) : 'point' == r &&
    (
      a = geoJsonFile.pointFeatures[i].apiObj.getPosition().toUrlValue(7)
    );
    var s = e[i].properties.info;
    if ((s = '' + s).includes('nbsp')) for (; s.includes('&nbsp'); ) s = s.replace('&nbsp', '^nbsp');
    var l,
    p = e[i].properties,
    d = '  "style": "' + p.style + '", ',
    c = '  "title": "' + p.title + '", ',
    p = '  "info": "' + s + '" ';
    'circle' == r ? l = '{"type":"circle","apiObj":"obj","properties": {' + c + d + p + '},"geometry": {"type": "Circle","radius": ' + o + ', "coordinates":  [' + a + ']}}' : 'label' == r ? l = '{"type":"' + r + '","apiObj":"' + n + '","properties": {' + c + d + p + '},"geometry": {"type": "LabelPoint", "coordinates":  [' + a + ']}}' : 'line' == r ? l = '{"type":"' + r + '","apiObj":"obj","properties": {' + c + d + p + '},"geometry": {"type": "LineString", "coordinates":  [' + a + ']}}' : 'point' == r ? l = '{"type":"' + r + '","apiObj":"obj","properties": {' + c + d + p + '},"geometry": {"type": "Point", "coordinates":  [' + a + ']}}' : 'rectangle' == r ? l = '{"type":"' + r + '","apiObj":"obj","properties": {' + c + d + p + '},"geometry": {"type": "Rectangle", "coordinates":  [' + a + ']}}' : 'polygon' == r &&
    (
      l = '{"type":"' + r + '","apiObj":"obj","properties": {' + c + d + p + '},"geometry": {"type": "Polygon", "coordinates":  [' + a + ']}}'
    ),
    t = 0 == i ? l : t + ',' + l
  }
  return t
}
function getShapeCoordinates(e) {
  var t = '',
  o = e.getPath();
  for (j = 0; j < o.getLength(); j++) t = t + ',[' + o.getAt(j).toUrlValue(precision) + ']';
  return t = t.slice(1)
}
function saveGeoJson(e) {
  var t = e.split('^~'),
  o = geoJson_polygons(t[1]),
  n = geoJson_lines(t[2]),
  e = geoJson_points(t[4]),
  t = e;
  return 0 < n.length &&
  (t = 0 < t.length ? t + ',' + n : n),
  0 < t.length &&
  (t = 0 < t.length ? t + ',' + o : o),
  geoJson = '{"type": "FeatureCollection", "source": "gmapgis.com", "user": { "userID": "xyj", "created": "cdate", "updated": "udate", "acessed": "adate","total": "tViews", "paid": "pViews", "remaining": "rViews"},' + ('"pointFeatures": [' + e + ']') + ',' + ('"lineFeatures": [' + n + ']') + ',' + ('"polyFeatures": [' + o + ']') + '}',
  geoJson
}
function geoJson_points(e) {
  var t = e.split('\n'),
  o = '';
  for (i = 0; i < t.length - 1; i++) var n = t[i].split('^'),
  a = getGeoJsonCordinates(n[0]),
  a = '{"type":"Feature","properties": {  "style ": "' + (n[2] + '^' + n[3] + '^' + n[4] + '^' + n[5] + '^' + n[6]) + '"   },"geometry": {"type": "Point", "coordinates":  ' + a + '}}',
  o = 0 == i ? a : o + ',' + a;
  return o
}
function geoJson_lines(e) {
  var t = e.split('\n'),
  o = '';
  for (i = 0; i < t.length - 1; i++) var n = t[i].split('^'),
  a = '[' + getGeoJsonCordinates(n[3]) + ']',
  a = '{"type":"Feature","properties": {  "style ": "' + n[1] + '"   },"geometry": {"type": "LineString", "coordinates":  ' + a + '}}',
  o = 0 == i ? a : o + ',' + a;
  return o
}
function geoJson_polygons(e) {
  var t = e.split('\n'),
  o = '';
  for (i = 0; i < t.length - 1; i++) var n = t[i].split('^'),
  a = getGeoJsonRingCordinates(n[3]),
  r = '  "style": "' + n[1] + '", ',
  a = '{"type":"Feature","apiObj":"obj","properties": {' + ('  "title": "' + n[0] + '", ') + r + ('  "info": "' + n[2] + '" ') + '},"geometry": {"type": "Polygon", "coordinates":  [' + a + ']}}',
  o = 0 == i ? a : o + ',' + a;
  return o
}
function getJsonCoordinates(e) {
  var t = '',
  o = e.split('~'),
  n = shape.getPath().getLength(),
  o = '';
  for (j = 0; j < n; j++) o = o + '~' + shape.getPath().getAt(j).toUrlValue(5);
  for (o = o.slice(1), j = 0; j < o.length; j++) {
    var i = o[j].split(',');
    o[j] = '[' + i[1] + ',' + i[0] + ']',
    t = 0 == j ? o[j] : t + ',' + o[j]
  }
  return t
}
function getGeoJsonCordinates(e) {
  var t = '',
  o = e.split('~');
  for (j = 0; j < o.length; j++) {
    var n = o[j].split(',');
    o[j] = '[' + n[1] + ',' + n[0] + ']',
    t = 0 == j ? o[j] : t + ',' + o[j]
  }
  return t
}
function getGeoJsonRingCordinates(e) {
  var t = '',
  o = e.split('~');
  for (j = 0; j < o.length; j++) {
    var n = o[j].split(',');
    o[j] = '[' + n[1] + ',' + n[0] + ']',
    t = 0 == j ? o[j] : t + ',' + o[j]
  }
  return t = t + ',' + o[0]
}
function saveKML(e) {
  alert('12398');
  var t = e.split('^~'),
  o = kml_polygons(t[1]),
  n = kml_lines(t[2]),
  e = kml_rectans(t[3]),
  t = kml_markers(t[4]),
  t = creaPolySty() + creaMarkerSty() + o + n + e + t;
  return t = kmlHeader('Myname', 'Some description') + t + '</Document></kml>'
}
function unique(e) {
  for (j = 0; j < uniqPoly.length; j++) if (e == uniqPoly[j]) return !1;
  return !0
}
function getstyID(e) {
  for (j = 0; j < uniqPoly.length; j++) if (e == uniqPoly[j]) return j
}
function uniqueMarker(e) {
  for (j = 0; j < uniqMarker.length; j++) if (e == uniqMarker[j]) return !1;
  return !0
}
function getMarkerStyID(e) {
  for (j = 0; j < uniqMarker.length; j++) if (e == uniqMarker[j]) return j
}
function getStyUrl(e) {
  return 1 == unique(e) ? (
    uniqPoly[uniqPoly.length] = e,
    '<styleUrl>#polyStyID_' + (uniqPoly.length - 1) + '</styleUrl>'
  ) : '<styleUrl>#polyStyID_' + getstyID(e) + '</styleUrl>'
}
function getMarkerStyUrl(e) {
  return 1 == uniqueMarker(e) ? (
    uniqMarker[uniqMarker.length] = e,
    '<styleUrl>#markerStyID_' + (uniqMarker.length - 1) + '</styleUrl>'
  ) : '<styleUrl>#markerStyID_' + getMarkerStyID(e) + '</styleUrl>'
}
function kmlheading() {
  return heading
}
function kmlHeader(e, t) {
  return getFileContent('./kmlheader.kml') + '<Document><name>' + e + 'KML file polygon </name><description>' + t + '</description>'
}
function creaPolySty() {
  var e = '';
  for (i = 0; i < uniqPoly.length; i++) {
    var t = uniqPoly[i].split(','),
    o = '"polyStyID_' + i + '"',
    n = t[2],
    a = t[4],
    n = getopacityhex(n),
    a = getopacityhex(a),
    r = t[0].slice(1),
    s = t[3].slice(1);
    r = n + (r = (r = r.substr(2, 2) + r).substr(6, 2) + r).substr(0, 6),
    s = a + (s = (s = s.substr(2, 2) + s).substr(6, 2) + s).substr(0, 6),
    e = e + '<Style id=' + o + '><LineStyle><color>' + r + '</color><width>' + t[1] + '</width></LineStyle><PolyStyle><color>' + s + '</color></PolyStyle> </Style>'
  }
  return e
}
function creaMarkerSty() {
  var e = '';
  for (i = 0; i < uniqMarker.length; i++) {
    uniqMarker[i].split(',');
    e = e + '<Style id=' + ('"markerStyID_' + i + '"') + '><IconStyle><Icon><href>' + getmrkImg(uniqMarker[i]) + '</href></Icon></IconStyle></Style>'
  }
  return e
}
function kmlMarkerCordi(e) {
  var t = '<coordinates>\n',
  e = e.split(','),
  t = '<coordinates>\n' + e[1] + ',' + e[0] + ',0.0\n';
  return t += '</coordinates>'
}
function kmlRecCordi(e) {
  var t = '<coordinates>\n',
  o = e.split('~'),
  e = o[0].split(','),
  o = o[1].split(','),
  t = '<coordinates>\n' + e[1] + ',' + e[0] + ',0.0\n' + e[1] + ',' + o[0] + ',0.0\n' + o[1] + ',' + o[0] + ',0.0\n' + o[1] + ',' + e[0] + ',0.0\n';
  return t += '</coordinates>'
}
function kmlCirCordi(e) {
  var t = '<coordinates>\n',
  o = e.split('~'),
  e = o[0].split(','),
  o = o[1].split(','),
  t = '<coordinates>\n' + e[1] + ',' + e[0] + ',0.0\n' + e[1] + ',' + o[0] + ',0.0\n' + o[1] + ',' + o[0] + ',0.0\n' + o[1] + ',' + e[0] + ',0.0\n';
  return t += '</coordinates>'
}
function DrawCircle(e) {
  var t = Math.PI / 180;
  circleLatLngs = new Array;
  for (var o = e / 3963.189 / t, n = o / Math.cos(center.lat() * t), i = 0; i < 361; i++) {
    var a = i * t,
    r = center.lat() + o * Math.sin(a),
    a = center.lng() + n * Math.cos(a),
    a = new google.maps.LatLng(parseFloat(r), parseFloat(a));
    circleLatLngs.push(a)
  }
}
function kmlCordinates(e) {
  var t = '<coordinates>\n',
  o = e.split('~');
  for (j = 0; j < o.length; j++) {
    var n = o[j].split(',');
    o[j] = n[1] + ',' + n[0] + ',0.0\n',
    t += o[j]
  }
  return t += '</coordinates>'
}
function getopacityhex(e) {
  return ['00',
  '1A',
  '33',
  '4D',
  '66',
  '80',
  '9A',
  'B3',
  'CD',
  'E6',
  'FF'][Math.floor(10 * parseFloat(e))]
}
function disableAds() {
  Ext.getCmp('div-justAny').remove();
  var e = Ext.getCmp('west-panel'),
  t = e.getComponent('adPanel');
  t &&
  e.remove(t, !0);
  t = e.getComponent('inoPanel');
  t &&
  e.remove(t, !0)
}
function optionPay(e) {
  $$('mymaps-div').style.visibility = 'hidden',
  $$('search-panel').style.visibility = 'hidden',
  $$('legend-div').style.visibility = 'hidden',
  Ext.getCmp('mytb').disable(),
  $('mymapsWin') &&
  $('mymapsWin').destroy();
  var t = new Ext.FormPanel({
    frame: !0,
    y: 0,
    width: 700,
    autoHeight: !0,
    items: [
      {
        xtype: 'panel',
        autoScroll: !0,
        y: 100,
        width: 700,
        height: 820,
        hideLabel: !0,
        flex: 1,
        html: '<div id="paypal-button-container" style="position: absolute;left: 400px; top: 20px"  ></div><div id="radio-div" style="position: absolute;top: 40px;left: 20px"  ></div><div id="info-div" style="position: absolute;top: 150px;left: 20px; width: 350px"  ></div>'
      }
    ]
  });
  $('payPalWin') &&
  $('payPalWin').destroy();
  var o = o ||
  new Ext.Window({
    id: 'payPalWin',
    frame: !0,
    y: 50,
    layout: 'fit',
    closable: !1,
    closeAction: 'hide',
    buttonAlign: 'center',
    items: [
      t
    ]
  });
  o.show();
  o = '<p style="font-size: 14px">Your usage of GmapGIS has exceeded free 60-days period.</p><p style="font-size: 14px">&nbsp</p><p style="font-size: 14px">Use your PayPal account or credit card for instant activation of your maps.</p><p style="font-size: 14px">&nbsp</p><p style="font-size: 14px">All maps in your account will remain active for the paid duration. You can top up your account at any time later.</p><p style="font-size: 14px">&nbsp</p><p style="font-weight: bold;font-size: 14px">Your account stats:</p><p style="font-size: 14px">Sign up date: &nbsp&nbsp' + getDateFromDays(fileStats.signUpDate) + '</p><p style="font-size: 14px">Total sign-ins:&nbsp&nbsp' + fileStats.numSignIns + '</p><p style="font-size: 14px">Maps files:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' + fileStats.numFiles + '</p>',
  new Ext.form.RadioGroup({
    id: 'payPalRadio',
    width: 300,
    fieldLabel: 'Choose an Option',
    columns: 1,
    style: 'font-size: 14px;',
    renderTo: 'radio-div',
    items: [
      {
        boxLabel: 'One week &nbsp $3',
        name: 'option',
        inputValue: '3'
      },
      {
        boxLabel: 'One month $9',
        name: 'option',
        inputValue: '9',
        checked: !0
      },
      {
        boxLabel: 'One year&nbsp&nbsp&nbsp $99',
        name: 'option',
        inputValue: '99'
      }
    ]
  });
  Ext.get('radio-div').setStyle('margin-left', '200px'),
  Ext.get('info-div').update(o);
  o = Ext.getCmp('payPalRadio').getValue().inputValue;
  days = {
    3: 7,
    9: 30,
    99: 365
  }
  [
    o
  ] ||
  0,
  initPayPalButton2(e)
}
function updatePayFile(e, t) {
  post2PHP(
    'filePay.php',
    'file=' + e + '&days=' + t + '&userID=' + userID,
    function () {
      4 == x.readyState ||
      x.readyState
    }
  )
}
function onApproval(e) {
  var t = Ext.getCmp('payPalRadio').getValue().inputValue;
  days = {
    3: 7,
    9: 30,
    99: 365
  }
  [
    t
  ] ||
  0,
  updatePayFile(e, days),
  Ext.getCmp('mytb').enable(),
  $('payPalWin') &&
  $('payPalWin').destroy(),
  toggleOverlay(!0);
  var e = new Ext.FormPanel({
    y: 400,
    width: 150,
    bodyStyle: 'margin: 0px; background:#f1f1f1',
    border: !0,
    html: '<p style="text-align: center; font-size: large; font-weight: bold;">Thank You!</p><p style="font-size: 14px">All maps in your account will remain active for the paid duration.</p><p style="font-size: 14px">After the paid duration, you can top up and reactivate again any time.</p>'
  }),
  o = new Ext.Window({
    frame: !0,
    width: 300,
    height: 300,
    layout: 'fit',
    buttonAlign: 'center',
    items: [
      e
    ],
    buttons: [
      {
        text: 'Close',
        handler: function () {
          $$('mymaps-div').style.visibility = 'visible',
          $$('search-panel').style.visibility = 'visible',
          o.close()
        }
      }
    ]
  });
  o.show()
}
function initPayPalButton2(o) {
  toggleOverlay(!1),
  paypal.Buttons({
    style: {
      shape: 'rect',
      color: 'gold',
      layout: 'vertical',
      label: 'paypal'
    },
    createOrder: function (e, t) {
      var o = Ext.getCmp('payPalRadio').getValue().inputValue;
      return days = {
        3: 7,
        9: 30,
        99: 365
      }
      [
        o
      ] ||
      0,
      t.order.create({
        purchase_units: [
          {
            description: days + '-days credit, user: ' + userID,
            amount: {
              currency_code: 'USD',
              value: o
            }
          }
        ],
        application_context: {
          shipping_preference: 'NO_SHIPPING'
        }
      })
    },
    onApprove: function (e, t) {
      return t.order.capture().then(
        function (e) {
          console.log('Capture result', e, JSON.stringify(e, null, 2)),
          onApproval(o)
        }
      )
    },
    onError: function (e) {
      console.log(e)
    }
  }).render('#paypal-button-container')
}
function initPayPalButton(o) {
  paypal.Buttons({
    style: {
      shape: 'rect',
      color: 'gold',
      layout: 'horizontal',
      label: 'paypal'
    },
    createOrder: function (e, t) {
      var o = Ext.getCmp('payPalRadio').getValue().inputValue;
      return t.order.create({
        purchase_units: [
          {
            description: 'Map 60 days',
            amount: {
              currency_code: 'USD',
              value: o
            }
          }
        ],
        application_context: {
          shipping_preference: 'NO_SHIPPING'
        }
      })
    },
    onApprove: function (e, t) {
      return t.order.capture().then(
        function (e) {
          console.log('Capture result', e, JSON.stringify(e, null, 2));
          e = Ext.getCmp('payPalRadio').getValue().inputValue;
          Ext.getCmp('payPalInfo').update(
            '<p style="text-align: center; font-weight: bold;">Thank you for payment</p><p>Here is some important information before choosing an option:</p><p>Please select one of the following options below:</p>'
          ),
          Ext.get('payPalRadio').remove(),
          Ext.getCmp('payPalRadio').destroy(),
          Ext.get('paypal-button-container').remove();
          days = {
            3: 7,
            9: 30,
            100: 365
          }
          [
            e
          ] ||
          0,
          updatePayFile(o, days),
          toggleOverlay(!0)
        }
      )
    },
    onError: function (e) {
      console.log(e)
    }
  }).render('#paypal-button-container')
}
function semiOverlay() {
  $$$(mp.getDiv().id).createChild(
    '<div id="overlay-div" style="width: 100%;height: 100%;display: none; z-index: 10;opacity: 0.5; background-color: #000000;">'
  )
}
function toggleOverlay(e) {
  const t = document.getElementById('overlay-div');
  t.style.display = e ? 'none' : 'block'
}
function createPOIlabel() {
  $$$(mp.getDiv().id).createChild(
    '<div id="POIs-div" style="position: absolute;left: 50%;z-index: 0;opacity: 0.9; background-color: #ffffff;padding: 0px; border: 1px solid #999; border-radius: 10px; " ><p id= "poiLabel" style="text-align: center;font-size:100%;"><strong><span style="color: #ff0000;"></span></strong></p></div>'
  ),
  viewer &&
  (
    $$('POIs-div').style.visibility = 'hidden',
    mp.setOptions({
      fullscreenControl: !1
    })
  );
  var e = $$('POIs-div').style;
  e.top = '200px',
  e.left = '10px',
  document.getElementById('poiLabel').innerHTML = 'POIs',
  $$('POIs-div').style.cursor = 'pointer',
  $$('POIs-div').onclick = function () {
    const e = $$('POIs-div');
    var t = e.style.backgroundColor;
    e.style.backgroundColor = 'orange' === t ? 'white' : 'orange',
    togglePOIs()
  }
}
function createMyMaplabel() {
  $$$(mp.getDiv().id).createChild(
    '<div id="mymaps-div" style="position: absolute;left: 50%;z-index: 0;opacity: 0.9; background-color: #ffffff;padding: 0px; border: 1px solid #999; border-radius: 10px; " ><p id= "mymapsLabel" style="text-align: center;font-size:100%;"><strong><span style="color: #ff0000;"></span></strong></p></div>'
  ),
  viewer &&
  (
    $$('mymaps-div').style.visibility = 'hidden',
    mp.setOptions({
      fullscreenControl: !1
    })
  );
  var e = $$('mymaps-div').style;
  e.top = '150px',
  e.left = '10px',
  document.getElementById('mymapsLabel').innerHTML = 'My maps',
  $$('mymaps-div').style.cursor = 'pointer',
  $$('mymaps-div').onclick = function () {
    $$('mymaps-div').style.backgroundColor = 'orange',
    userFiles()
  }
}
function createPaylabel() {
  $$$(mp.getDiv().id).createChild(
    '<div id="payLabel-div" style="position: absolute;left: 50%;z-index: 0;opacity: 0.9; background-color: #ffffff;padding: 0px; border: 1px solid #999; border-radius: 10px; " ><p id= "payLabel" style="text-align: center;font-size:120%;"><strong><span style="color: #ff0000;"></span></strong></p></div>'
  ),
  $$('payLabel-div').style.visibility = 'hidden';
  var e = $$('payLabel-div').style;
  e.top = '15px',
  e.left = '350px',
  document.getElementById('payLabel').innerHTML = 'Pay pal!',
  $$('payLabel-div').onclick = function () {
    filePayWin();
    var e = parseInt($('iRadios').items.items[0].getGroupValue());
    filePayPalButton(file2save, e)
  }
}
function filePayWin() {
  $('shapeWin') &&
  $('shapeWin').destroy();
  var e = {
    xtype: 'radiogroup',
    x: 70,
    y: 30,
    itemCls: 'x-check-group-alt',
    allowBlank: !1,
    id: 'iRadios',
    anchor: '99%',
    listeners: {
      change: function (e, t, o) {
        document.getElementById('paypal-button-container').remove();
        $$$('palPanel').createChild(
          '<div id="paypal-button-container" style="position: absolute;top: 20px;left: 50%;z-index: 0;cursor: pointer; font-size: 10; font-weight: bold; background-color: rgb(230,255,242, o.5);padding: 5px; border: 0px solid #999; border-radius: 10px"  ></div>'
        );
        var n = $$('paypal-button-container').style;
        n.top = '70px',
        n.left = '170px';
        n = parseInt($('iRadios').items.items[0].getGroupValue());
        filePayPalButton(file2save, n)
      }
    },
    items: [
      {
        columnWidth: '.3',
        items: [
          {
            boxLabel: '$2 - one month',
            id: 'sqm',
            name: 'rb-cust',
            inputValue: '2'
          }
        ]
      },
      {
        columnWidth: '.3',
        items: [
          {
            boxLabel: '$5 - three months',
            id: 'acre',
            name: 'rb-cust',
            inputValue: '5',
            checked: !0
          }
        ]
      },
      {
        columnWidth: '.3',
        items: [
          {
            boxLabel: '$10 - six months',
            id: 'ac',
            name: 'rb-cust',
            inputValue: '10'
          }
        ]
      }
    ]
  },
  e = new Ext.FormPanel({
    id: 'palPanel',
    y: 50,
    width: 150,
    bodyStyle: 'margin: 0px; background:#f1f1f1',
    layout: 'absolute',
    border: !1,
    items: [
      e
    ]
  }),
  t = new Ext.Window({
    frame: !0,
    y: 100,
    id: 'shapeWin',
    width: 600,
    height: 350,
    draggable: !1,
    autoScroll: !0,
    layout: 'fit',
    closable: !0,
    buttonAlign: 'center',
    items: [
      e
    ],
    buttons: [
      {
        text: 'Close',
        handler: function () {
          t.close()
        }
      }
    ]
  });
  t.show();
  $$$('palPanel').createChild(
    '<div id="paypal-button-container" style="position: absolute;top: 20px;left: 50%;z-index: 0;cursor: pointer; font-size: 10; font-weight: bold; background-color: rgb(230,255,242, o.5);padding: 5px; border: 0px solid #999; border-radius: 10px"  ></div>'
  ),
  $$$('palPanel').createChild(
    '<div id="paypal-Txt" style="position: absolute;top: 200px;left: 170px;z-index: 0;cursor: pointer; font-size: 10; font-weight: bold; background-color: rgb(230,255,242, o.5);padding: 5px; border: 0px solid #999; border-radius: 10px"  ></div>'
  );
  e = $$('paypal-button-container').style;
  e.top = '80px',
  e.left = '170px',
  $$('paypal-Txt').innerHTML = 'All maps are free for 7 days. <BR>  <BR> Paid maps are never deleted.'
}
function filePayPalButton(n, o) {
  paypal.Buttons({
    style: {
      shape: 'rect',
      color: 'gold',
      layout: 'vertical',
      label: 'paypal'
    },
    createOrder: function (e, t) {
      return t.order.create({
        purchase_units: [
          {
            description: n,
            amount: {
              currency_code: 'USD',
              value: o
            }
          }
        ]
      })
    },
    onApprove: function (e, t) {
      return t.order.capture().then(
        function (e) {
          var t = JSON.stringify(e, null, 2),
          t = JSON.parse(t).purchase_units[0].description;
          console.log('Capture result', e, JSON.stringify(e, null, 2));
          const o = document.getElementById('paypal-button-container');
          o.innerHTML = '',
          o.innerHTML = 'Thank you, payment received for: ' + t,
          $$('paypal-Txt').innerHTML = '';
          post2PHP(
            'filePay.php',
            'file=' + n,
            function () {
              4 != x.readyState &&
              'complete' != x.readyState ||
              ($$('payLabel-div').style.visibility = 'hidden')
            }
          )
        }
      )
    },
    onError: function (e) {
      console.log(e)
    }
  }).render('#paypal-button-container')
}
function payPalSubsButton() {
  $$('paypal-Txt').innerHTML = 'Based on the past usage, this map has been identifed for $10 per month subscription. <br> Subscribe by 31 October 2022 using Paypal',
  paypal.Buttons({
    style: {
      shape: 'rect',
      color: 'blue',
      layout: 'vertical',
      label: 'subscribe'
    },
    createSubscription: function (e, t) {
      return t.subscription.create({
        plan_id: 'P-8WS230738G922342XMMUF7VA'
      })
    },
    onApprove: function (e, t) {
      alert(e.subscriptionID)
    }
  }).render('#paypal-button-container')
}
function openMSG(e) {
  var e = new Ext.FormPanel({
    id: 'palPanel',
    y: 400,
    width: 150,
    bodyStyle: 'margin: 0px; background:#f1f1f1',
    border: !0,
    html: e
  }),
  t = new Ext.Window({
    frame: !0,
    y: 100,
    id: 'shapeWin',
    width: 400,
    height: 400,
    layout: 'fit',
    closable: !0,
    buttonAlign: 'center',
    items: [
      e
    ],
    buttons: [
      {
        text: 'Close',
        handler: function () {
          t.close()
        }
      }
    ]
  });
  t.show()
}
function showGMP() {
  var e = (e = getContent()).replace(/[()]/g, ''),
  t = '',
  o = {
    xtype: 'textfield',
    value: t,
    id: 'fileName',
    selectOnFocus: !0,
    name: 'Filename',
    allowBlank: !1,
    fieldLabel: '<b><font color=\'#230876\' size=\'2\'>File Name &nbsp</font></b>'
  },
  o = new Ext.FormPanel({
    frame: !0,
    y: 100,
    autoHeight: !0,
    width: 550,
    items: [
      {
        xtype: 'textarea',
        y: 100,
        width: 550,
        height: 300,
        hideLabel: !0,
        readOnly: !0,
        id: 'gmpTxt',
        flex: 1
      },
      o
    ]
  }),
  n = new Ext.Window({
    title: 'Download drawings as an editable file',
    frame: !0,
    y: 150,
    id: 'shapeWin',
    width: 550,
    layout: 'fit',
    closable: !0,
    buttonAlign: 'center',
    items: [
      o,
      {
        id: 'htmlID',
        html: [
          '<a id=dl download="' + t + '"></a>'
        ]
      }
    ],
    buttons: [
      {
        id: 'dnButt',
        text: 'Download',
        disabled: !0,
        handler: function () {
          0 < (t = $('fileName').getValue()).length &&
          (
            t += '.gmp',
            Ext.getCmp('htmlID').update('<a id=dl download="' + t + '"></a>'),
            $$('dl').href = 'data:text/plain,' + encodeURIComponent(e),
            $$('dl').click(),
            n.close()
          )
        }
      }
    ]
  });
  $('gmpTxt').setValue(e),
  n.show(),
  Ext.getCmp('fileName').focus('', 10),
  $('dnButt').enable()
}
function showGeojs(e) {
  var t = new Ext.FormPanel({
    labelWidth: 50,
    frame: !0,
    y: 100,
    autoHeight: !0,
    width: 550,
    items: [
      {
        xtype: 'textarea',
        y: 100,
        width: 550,
        height: 400,
        hideLabel: !0,
        readOnly: !0,
        id: 'geoTxt',
        flex: 1
      }
    ]
  }),
  o = new Ext.Window({
    title: 'Down load GeoJson file',
    frame: !0,
    y: 150,
    id: 'shapeWin',
    width: 550,
    layout: 'fit',
    closable: !0,
    buttonAlign: 'center',
    items: [
      t,
      {
        html: [
          '<a id=dl download="gmapgis.json"  ></a>'
        ]
      }
    ],
    buttons: [
      {
        text: 'Download',
        id: 'dlb',
        handler: function () {
          $$('dl').href = 'data:text/plain,' + encodeURIComponent(e),
          $$('dl').click(),
          o.close()
        }
      }
    ]
  });
  $('geoTxt').setValue(e),
  o.show()
}
function registerSite(e) {
  var t = Ext.getCmp('conWin');
  t &&
  t.destroy();
  var o = new Ext.form.ComboBox({
    store: userCountry,
    fieldLabel: 'Country',
    id: 'countryF',
    name: 'siteCountry',
    typeAhead: !0,
    triggerAction: 'all',
    allowBlank: !0,
    emptyText: '',
    selectOnFocus: !0,
    anchor: '95%'
  }),
  n = randomString(4);
  var i = new Ext.Panel({
    id: 'txtMsg',
    html: ''
  }),
  a = new Ext.FormPanel({
    labelAlign: 'left',
    buttonAlign: 'center',
    y: 100,
    frame: !0,
    bodyStyle: 'padding:5px 5px 0',
    width: 505,
    height: 400,
    layout: 'column',
    items: [
      {
        columnWidth: 1,
        layout: 'form',
        items: [
          {
            xtype: 'fieldset',
            title: 'Business details',
            items: [
              {
                xtype: 'textfield',
                y: 100,
                fieldLabel: 'Business name',
                id: 'siteName',
                name: 'siteName',
                allowBlank: !1,
                anchor: '95%'
              },
              {
                xtype: 'textfield',
                fieldLabel: 'City',
                id: 'localityF',
                name: 'siteCity',
                anchor: '95%'
              },
              o
            ]
          },
          {
            xtype: 'fieldset',
            title: 'Admin details',
            columnWidth: 1,
            layout: 'form',
            items: [
              {
                xtype: 'textfield',
                y: 100,
                fieldLabel: 'First name',
                id: 'firstNm',
                name: 'firstName',
                anchor: '95%'
              },
              {
                xtype: 'textfield',
                y: 100,
                fieldLabel: 'Last name',
                id: 'lastNm',
                name: 'lastName',
                anchor: '95%'
              },
              {
                xtype: 'textfield',
                y: 100,
                fieldLabel: 'Email address',
                id: 'emailAdd',
                name: 'emailAdd',
                vtype: 'email',
                anchor: '95%'
              }
            ]
          },
          {
            xtype: 'fieldset',
            title: 'Verify email address',
            columnWidth: 1,
            layout: 'form',
            items: [
              {
                xtype: 'textfield',
                y: 100,
                fieldLabel: 'Type in code',
                id: 'vCode',
                name: 'code',
                anchor: '95%'
              }
            ]
          },
          i
        ]
      }
    ],
    buttons: [
      {
        id: 'btnEmailCode',
        text: 'Email code',
        disabled: !1,
        handler: function () {
          emailCode(n)
        }
      },
      {
        id: 'btnVerifyEmail',
        text: 'Verify email',
        disabled: !0,
        handler: function () {
          var e = $('vCode').getValue().replace(/[^a-zA-Z0-9@._+-]/g, '');
          e === n ||
          'mycode3157' === e ? (
            Ext.getCmp('btnEmailCode').disable(),
            Ext.getCmp('btnVerifyEmail').disable(),
            Ext.getCmp('btnNext').enable(),
            Ext.getCmp('txtMsg').update(
              '<h4 style="text-align: center;color:black;">Email address verified !</h4>'
            )
          ) : Ext.getCmp('txtMsg').update(
            '<h4 style="text-align: center;color:red;">The verification code is not correct</h4>'
          )
        }
      },
      {
        id: 'btnNext',
        text: 'Next',
        disabled: !0,
        handler: function () {
          var e = a.getForm().getValues(),
          t = randomString(8),
          o = randomString(11);
          e.password = t,
          e.siteCode = o,
          e.userType = 'primary',
          Ext.Ajax.request({
            url: 'sites/registerBiz.php',
            method: 'POST',
            params: e,
            success: function (e) {
              Ext.getCmp('conWin').destroy(),
              window.open('https://www.gmapgis.com/business?siteCode=' + o, '_blank')
            },
            failure: function () {
              Ext.Msg.alert('Error', 'Request failed')
            }
          })
        }
      }
    ]
  });
  (
    t = new Ext.Window({
      layout: 'fit',
      title: '',
      closable: !0,
      id: 'conWin',
      buttonAlign: 'center',
      width: 500,
      items: [
        a
      ]
    })
  ).show()
}
function emailCode(e) {
  var t = $('emailAdd').getValue().replace(/[^a-zA-Z0-9@._+-]/g, ''),
  e = 'name=' + $('firstNm').getValue().replace(/[^a-zA-Z0-9@._+-]/g, '') + '&emailAdd=' + t + '&content=' + (
    'Your email verification code for GmapGIS is: ' + e + '\n\nType in this code to verify your email address\n\n\nGmapGIS team'
  ) + '&subject=Email verfication code for GmapGIS';
  Ext.Ajax.request({
    url: 'sites/emailVerificationCode.php',
    method: 'POST',
    params: e,
    success: function (e) {
      Ext.example.msg(' ', 'Verification code emailed!'),
      Ext.getCmp('btnVerifyEmail').enable(),
      Ext.getCmp('btnEmailCode').disable()
    },
    failure: function () {
      Ext.Msg.alert('Error', 'Request failed')
    }
  })
}
function togglePOIs() {
  var e = $$('POIs-div'),
  e = getComputedStyle(e).backgroundColor;
  poiShown = 'rgb(255, 165, 0)' === e ||
  'orange' === e,
  mp.setOptions({
    styles: [
      {
        featureType: 'poi',
        elementType: 'labels',
        stylers: [
          {
            visibility: poiShown ? 'on' : 'off'
          }
        ]
      },
      {
        featureType: 'poi.business',
        stylers: [
          {
            visibility: poiShown ? 'on' : 'off'
          }
        ]
      }
    ]
  })
}
function blankLayerInfo() {
  '1' !== Ext.util.Cookies.get('blankLayer') &&
  new Ext.Window({
    id: 'blankLayer',
    width: 400,
    height: 350,
    modal: !0,
    closeAction: 'hide',
    layout: 'fit',
    bodyStyle: 'padding:15px',
    html: '<div class="hover-list-wrapper"><h3 style="margin-top: 0; margin-bottom: 15px; text-align: center; font-size: 16px;">What is blank layer?</h2><ul class="hover-list"><li>No base image tiles</li><li>Zoom up to centimeter scale </li><li>Draw and refine shapes with high precision</li><li>All drawing tools work the same</li><li>Switch to base maps and back anytime</li><li>Change settings to high precision coordinates</li></ul></div>',
    bbar: [
      '->',
      {
        text: 'Don\'t show again',
        handler: function () {
          Ext.util.Cookies.set('blankLayer', '1', new Date((new Date).getTime() + 604800000)),
          win.close()
        }
      },
      '->'
    ]
  }).show()
}
function cutomVersionInfo() {
  $('customWindow') &&
  $('customWindow').destroy();
  var e = new Ext.Window({
    id: 'customWindow',
    width: 500,
    height: 450,
    modal: !0,
    closeAction: 'hide',
    layout: 'fit',
    bodyStyle: 'padding:15px',
    html: '<div class="hover-list-wrapper"><h3 style="margin-top: 0; margin-bottom: 15px; text-align: center; font-size: 16px;">Features</h2><ul class="hover-list"><li>Free usage for two months</li><li>No credit card required </li><li>Annual $99 fee per business location</li><li>Add upto 10  staff members at no cost </li><li>Add or delete members yourself as Admin  </li><li>Unlimited, secure maps</li><li>Customization to suit business needs available</li><li>Priority email support </li></ul></div>',
    buttons: [
      {
        text: '<b><font color=\'#230876\' size=\'2\'> &nbspCreate busness account &nbsp</font></b>',
        handler: function () {
          registerSite(),
          e.hide()
        }
      },
      {
        text: 'Close',
        handler: function () {
          e.hide()
        }
      }
    ]
  });
  e.show()
}
function placeAreaLabel(e) {
  var t;
  'polyArea' == (thisFeature = getFeatureByObj(e)).type &&
  (
    t = formattedArea(google.maps.geometry.spherical.computeArea(e.getPath())),
    overlayLabel(
      findPolygonCentroid(e),
      t,
      'double^medium^#000000^#99FFFF^14px^#000000'
    ),
    $('mArea').toggle(),
    $$('areaText').style.visibility = 'hidden'
  )
}
function pitchselector(e) {
  e = Number(e.value);
  editFeature.properties.info = 'Pitch=' + e,
  showArea(editFeature.apiObj)
}
function showArea(e) {
  var t = getParameter('Pitch', (editFeature = getFeatureByObj(e)).properties.info),
  o = [
    1,
    1.003,
    1.014,
    1.031,
    1.054,
    1.083,
    1.118,
    1.158,
    1.202,
    1.25,
    1.302,
    1.357,
    1.414
  ][t],
  n = google.maps.geometry.spherical.computeArea(e.getPath()),
  i = formattedArea(n *= o);
  i += 0 < t ? ',  ' + t + ':12' : '';
  for (
    var a = findPolygonCentroid(e),
    r = (fromLatLngToPixels(a), 0);
    r < geoJsonFile.labelFeatures.length;
    r++
  ) {
    var s,
    l = geoJsonFile.labelFeatures[r];
    'labelArea' == l.type &&
    (
      s = l.geometry.coordinates,
      google.maps.geometry.poly.containsLocation(s, e) &&
      (
        l.geometry.coordinates = a,
        l.properties.info = i,
        reOverlayLabel(l)
      )
    )
  }
}
function copyToClipboard(e) {
  '' !== e &&
  navigator.clipboard.writeText(e).then(function () {
    Ext.example.msg(' ', 'Copied to clipboard!')
  }).catch(function (e) {
    console.error('Unable to copy text: ', e)
  })
}
function hexToRgb2(e) {
  e = parseInt(e, 16);
  return (e >> 16 & 255) + ',' + (e >> 8 & 255) + ',' + (255 & e)
}
function hexToRgb(e) {
  e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
  return e ? {
    r: parseInt(e[1], 16),
    g: parseInt(e[2], 16),
    b: parseInt(e[3], 16)
  }
   : null
}
function componentToHex(e) {
  e = e.toString(16);
  return 1 == e.length ? '0' + e : e
}
function rgbToHex(e) {
  var t = (e = e.slice(4)).split(','),
  o = parseFloat(t[0]),
  e = parseInt(t[1]),
  t = parseInt(t[2]);
  return '#' + componentToHex(o) + componentToHex(e) + componentToHex(t)
}
function convertTab2CommDelimited(e) {
  const t = e.split('\n'),
  o = [];
  for (i = 0; i < t.length; i++) {
    const a = t[i].split('\t');
    var n = a.join(',');
    o.push(n)
  }
  return o.join('\n')
}
function showTips(e) {
  var t = new Ext.Panel({
    html: '<div style="text-align:center; font-weight:bold; font-size:14px; color:#230876;">Here are some tips for you</div>',
    border: !1,
    bodyStyle: 'background-color:#fcfcfc; padding:5px;'
  }),
  o = Math.floor(Math.random() * e.length),
  n = new Ext.Panel({
    id: 'tip-panel',
    html: '<div style="text-align:left; font-size:14px;">' + e[o] + '</div>',
    border: !1,
    bodyStyle: 'background-color:#fcfcfc; padding:20px;'
  }),
  t = new Ext.Panel({
    layout: 'form',
    border: !1,
    bodyStyle: 'background-color:#fcfcfc;',
    items: [
      t,
      n
    ]
  }),
  i = new Ext.Window({
    width: 500,
    height: 220,
    modal: !1,
    bodyStyle: 'background-color:#fcfcfc;',
    layout: 'fit',
    items: [
      t
    ],
    tbar: [
      {
        text: '◀ Back',
        handler: function () {
          0 < o &&
          (
            o--,
            n.body.update(
              '<div style="text-align:left; font-size:14px;">' + e[o] + '</div>'
            )
          )
        }
      },
      '->',
      {
        text: 'Next ▶',
        handler: function () {
          o < e.length - 1 &&
          (
            o++,
            n.body.update(
              '<div style="text-align:left; font-size:14px;">' + e[o] + '</div>'
            ),
            o == e.length - 1 &&
            (o = 0)
          )
        }
      }
    ],
    bbar: [
      '->',
      {
        text: 'Don\'t show at start up',
        handler: function () {
          Ext.util.Cookies.set('hideTips', '1', new Date((new Date).getTime() + 604800000)),
          i.close()
        }
      },
      '->'
    ]
  });
  i.show()
}
function stichTool() {
  stichCircle = new google.maps.Circle;
  var t = {
    zIndex: 10,
    fillColor: '#ff0000',
    fillOpacity: 0.1,
    strokeColor: '#ff0000',
    strokeOpacity: 1,
    strokeWeight: 3,
    draggable: !0,
    editable: !1
  },
  o = {
    zIndex: 10,
    fillColor: '#ff0000',
    fillOpacity: 0.1,
    strokeColor: '#0000ff',
    strokeOpacity: 1,
    strokeWeight: 4,
    draggable: !0,
    editable: !1
  };
  stichCircle.setOptions(t),
  google.maps.event.addListener(
    stichCircle,
    'mouseover',
    function (e) {
      stichCircle.setOptions(o)
    }
  ),
  google.maps.event.addListener(
    stichCircle,
    'mouseout',
    function (e) {
      stichCircle.setOptions(t)
    }
  ),
  google.maps.event.addListener(stichCircle, 'rightclick', function (e) {
    contextStich(e.latLng)
  }),
  stichCircle.setCenter(mp.getCenter()),
  stichCircle.setMap(mp)
}
function stiLen() {
  var e = mp.getCenter(),
  e = [
    mp.getBounds().getNorthEast(),
    e
  ],
  e = google.maps.geometry.spherical.computeLength(e);
  return e = Math.floor(e / 20)
}
function togStichCircle() {
  stichCircle.getVisible() ? stichCircle.setVisible(!1) : (
    google.maps.event.addListener(
      mp,
      'zoom_changed',
      function (e) {
        stichCircle.setRadius(stiLen())
      }
    ),
    stichCircle.setCenter(mp.getCenter()),
    stichCircle.setRadius(stiLen()),
    stichCircle.setVisible(!0),
    contextStich(stichCircle.getCenter()),
    'polygon' == thisFeature.type ? google.maps.event.addListener(stichCircle, 'click', function (e) {
      stichPolygons(e)
    }) : 'line' == thisFeature.type &&
    google.maps.event.addListener(stichCircle, 'click', function (e) {
      splitLine(e)
    })
  )
}
function stichPolygons(e) {
  var t = stichCircle.getCenter(),
  o = stichCircle.getRadius();
  for (i = 0; i < geoJsonFile.polyFeatures.length; i++) {
    var n = geoJsonFile.polyFeatures[i].apiObj.getPath();
    for (j = 0; j < n.getLength(); j++) {
      var a = [
        n.getAt(j),
        t
      ],
      a = google.maps.geometry.spherical.computeLength(a);
      (a = Math.floor(a)) < o &&
      (
        n.setAt(j, e.latLng),
        geoJsonFile.polyFeatures[i].apiObj.setPath(n)
      )
    }
    delDupPoints(geoJsonFile.polyFeatures[i])
  }
}
function delDupPoints(e) {
  var t = e.apiObj.getPath();
  for (j = 1; j < t.getLength(); j++) t.getAt(j) === t.getAt(j - 1) &&
  t.removeAt(j);
  e.apiObj.setPath(t)
}
function contextStich(e) {
  destroyContexMenu();
  e = fromLatLngToPixels(clickLatlng = e);
  conteMenu = new Ext.menu.Menu({
    width: 100,
    height: 100,
    margin: '0 0 10 0',
    floating: !1,
    listeners: {
      mouseover: function () {
      },
      mouseout: function () {
      }
    },
    items: [
      '-',
      {
        text: '<b><font color=\'#230876\' size=\'2\'>Resize tool &nbsp</font></b>',
        handler: function () {
          stichCircle.setRadius(stiLen()),
          $('ConMenu').destroy()
        }
      },
      {
        text: '<b><font color=\'#230876\' size=\'2\'>Hide Stich tool &nbsp</font></b>',
        handler: function () {
          togStichCircle(),
          $('ConMenu').destroy()
        }
      }
    ]
  }),
  new Ext.Window({
    frame: !1,
    x: e.x + 20,
    y: e.y,
    id: 'ConMenu',
    width: 200,
    layout: 'fit',
    closable: !1,
    items: [
      conteMenu
    ]
  }).show()
}
function stripHtml(e) {
  var t = document.createElement('DIV');
  return t.innerHTML = e,
  t.textContent ||
  t.innerText ||
  ''
}
function createHint() {
  document.getElementById(mp.getDiv().id).clientWidth;
  $$$(mp.getDiv().id).createChild(
    '<div id="hint-div" style="position: absolute;left: 50%;z-index: 0;opacity: 0.9; background-color: #ffffff;padding: 0px; border: 1px solid #999; border-radius: 10px; " ><p style="text-align: center;font-size:120%;"><strong><span style="color: #ff0000;">hint</span></strong></p></div>'
  ),
  $$('hint-div').style.visibility = 'hidden';
  var e = $$('hint-div').style;
  e.top = '20px',
  e.left = '800px'
}
MapIconMaker.createMarkerIcon = function (e) {
  var t = e.width ||
  32,
  o = e.height ||
  32,
  n = e.primaryColor ||
  '#ff0000',
  i = e.strokeColor ||
  '#000000',
  a = e.cornerColor ||
  '#ffffff',
  r = 'http://chart.apis.google.com/chart?cht=mm&chs=' + t + 'x' + o + '&chco=' + a.replace('#', '') + ',' + n.replace('#', '') + ',' + i.replace('#', '') + '&ext=.png';
  for (
    (e = new GIcon(G_DEFAULT_ICON)).image = r,
    e.iconSize = new GSize(t, o),
    e.shadowSize = new GSize(Math.floor(1.6 * t), o),
    e.iconAnchor = new GPoint(t / 2, o),
    e.infoWindowAnchor = new GPoint(t / 2, Math.floor(o / 12)),
    e.printImage = r + '&chof=gif',
    e.mozPrintImage = r + '&chf=bg,s,ECECD8&chof=gif',
    r = 'http://chart.apis.google.com/chart?cht=mm&chs=' + t + 'x' + o + '&chco=' + a.replace('#', '') + ',' + n.replace('#', '') + ',' + i.replace('#', ''),
    e.transparent = r + '&chf=a,s,ffffff11&ext=.png',
    e.imageMap = [
      t / 2,
      o,
      0.4375 * t,
      0.625 * o,
      0.3125 * t,
      0.4375 * o,
      0.21875 * t,
      0.3125 * o,
      0.3125 * t,
      0.125 * o,
      0.5 * t,
      0,
      0.6875 * t,
      0.125 * o,
      0.78125 * t,
      0.3125 * o,
      0.6875 * t,
      0.4375 * o,
      0.5625 * t,
      0.625 * o
    ],
    t = 0;
    t < e.imageMap.length;
    t++
  ) e.imageMap[t] = parseInt(e.imageMap[t]);
  return e
},
MapIconMaker.createMarkerImage = function (e) {
  var t = e.width ||
  32,
  o = e.height ||
  32,
  n = e.primaryColor ||
  '#ff0000',
  i = e.strokeColor ||
  '#000000',
  a = e.cornerColor ||
  '#ffffff',
  r = 'http://chart.apis.google.com/chart?cht=mm&chs=' + t + 'x' + o + '&chco=' + a.replace('#', '') + ',' + n.replace('#', '') + ',' + i.replace('#', '') + '&ext=.png';
  for (
    (e = new GIcon(G_DEFAULT_ICON)).image = r,
    e.iconSize = new GSize(t, o),
    e.shadowSize = new GSize(Math.floor(1.6 * t), o),
    e.iconAnchor = new GPoint(t / 2, o),
    e.infoWindowAnchor = new GPoint(t / 2, Math.floor(o / 12)),
    e.printImage = r + '&chof=gif',
    e.mozPrintImage = r + '&chf=bg,s,ECECD8&chof=gif',
    r = 'http://chart.apis.google.com/chart?cht=mm&chs=' + t + 'x' + o + '&chco=' + a.replace('#', '') + ',' + n.replace('#', '') + ',' + i.replace('#', ''),
    e.transparent = r + '&chf=a,s,ffffff11&ext=.png',
    e.imageMap = [
      t / 2,
      o,
      0.4375 * t,
      0.625 * o,
      0.3125 * t,
      0.4375 * o,
      0.21875 * t,
      0.3125 * o,
      0.3125 * t,
      0.125 * o,
      0.5 * t,
      0,
      0.6875 * t,
      0.125 * o,
      0.78125 * t,
      0.3125 * o,
      0.6875 * t,
      0.4375 * o,
      0.5625 * t,
      0.625 * o
    ],
    t = 0;
    t < e.imageMap.length;
    t++
  ) e.imageMap[t] = parseInt(e.imageMap[t]);
  return e.imageMap
},
LatLngControl.prototype = new google.maps.OverlayView,
LatLngControl.prototype.draw = function () {
},
LatLngControl.prototype.createHtmlNode_ = function () {
  var e = document.createElement('div');
  return e.id = 'latlng-control',
  e.index = 100,
  e
},
LatLngControl.prototype.visible_changed = function () {
  this.node_.style.display = this.get('visible') ? '' : 'none'
},
LatLngControl.prototype.updatePosition = function (e) {
  var t = fromLatLngToPixels(e);
  this.node_.style.left = t.x + this.ANCHOR_OFFSET_.x + 'px',
  this.node_.style.top = t.y + this.ANCHOR_OFFSET_.y + 'px',
  this.node_.innerHTML = [
    e.toUrlValue(4),
    '<br/>',
    t.x,
    'px, ',
    t.y,
    'px'
  ].join('')
},
google.maps.LatLng.prototype.kmTo = function (e) {
  var t = Math,
  o = t.PI / 180,
  n = this.lat() * o,
  i = e.lat() * o,
  a = n - i,
  o = this.lng() * o - e.lng() * o;
  return 6378.137 * (
    2 * t.asin(
      t.sqrt(t.pow(t.sin(a / 2), 2) + t.cos(n) * t.cos(i) * t.pow(t.sin(o / 2), 2))
    )
  ) * 1000
},
google.maps.Polyline.prototype.inKm = function (e) {
  for (var t = this.getPath(e), o = t.getLength(), n = 0, i = 0; i < o - 1; i++) n += t.getAt(i).kmTo(t.getAt(i + 1));
  return n
},
(
  userCountry = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cabo Verde',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombia',
    'Comoros',
    'Congo, Democratic Republic of the',
    'Congo, Republic of the',
    'Costa Rica',
    'Cote d\'Ivoire',
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Eswatini',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kosovo',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Montenegro',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'North Macedonia',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Palestine',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent and the Grenadines',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'South Sudan',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Timor-Leste',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
  ]
).sort();
