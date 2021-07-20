const seedrandom = require('seedrandom')
const { SET_CURRENT_USER, SET_GEO_DATA, colors } = require('./constants')

export const state = () => ({
  auth: {
    loggedIn: false,
    user: {
      id: -1,
      name: 'Incognito Mode',
      email: 'test@mail.com',
      createdAt: '27/02/2021'
    }
  },
  users: [{
    id: '-1',
    name: 'Incognito Mode',
    email: 'test@mail.com',
    createdAt: '27/02/2021'
  }, {
    id: '13463279',
    name: "Corey O'Meara",
    email: 'corey@mail.com',
    createdAt: '27/02/2021'
  }, {
    id: '1783432',
    name: 'John Doe',
    email: 'john@mail.com',
    createdAt: '27/02/2021'
  }],
  current: {
    price: 30.88,
    greenShare: 31
  },
  daily: {
    totalAmount: 28.9,
    averagePrice: 29.34
  },
  consumptions: {
    week: {
      greenShares: [0.12, 0.28, 0.18, 0.21, 0.23, 0.17, 0.21],
      total: 221.3,
      values: [38.8, 30.7, 23.4, 27.4, 28, 49.4, 23.6],
      keys: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    },
    month: {
      greenShares: [0.12, 0.28, 0.18, 0.21],
      total: 755.2,
      values: [214.5, 195.8, 123.6, 221.3],
      keys: ['W1', 'W2', 'W3', 'W4']
    },
    year: {
      total: 5583.3,
      greenShares: [0.13, 0.12, 0.21, 0.18, 0.23, 0.27, 0.31],
      values: [832.4, 795.8, 823.6, 821.3, 732.7, 802.3, 775.2],
      keys: ['January', 'February', 'March', 'April', 'May', 'June', 'July']
    }
  },
  forecast: {
    today: {
      keys: hoursInDay,
      values: priceOverDay
    },
    '3days': {
      keys: [
        ...hoursInDay,
        ...(hoursInDay.map(h => 'D+1 ' + h)),
        ...(hoursInDay.map(h => 'D+2 ' + h))],
      values: [...priceOverDay, ...otherPriceOverDay, ...priceOverDay]
    }
  },
  metrics: {
    greenShare: 28.3,
    co2Saved: 765,
    moneySaved: 324
  },
  equivalents: {
    co2saved: [{
      amount: 10,
      description: 'Berlin - New-York flights',
      icon: 'mdi-airplane-takeoff'
    }, {
      amount: 216,
      description: 'days of streaming',
      icon: 'mdi-youtube-tv'
    }, {
      amount: 3.5,
      description: 'days of driving',
      icon: 'mdi-car'
    }],
    moneySaved: [{
      amount: 123,
      description: 'kg of fruits',
      icon: 'mdi-fruit-cherries'
    }, {
      amount: 21,
      description: 'days of energy supply',
      icon: 'mdi-flash'
    }]
  },
  admin: {
    cities: ['Oldenburg', 'Osnabrück Städte', 'Osnabrück', 'Vechta', 'Wesermarsch', 'Wilhelmshaven Städte', 'Wittmund', 'Bochum Städte', 'Dortmund Städte', 'Ennepe-Ruhr', 'Hagen Städte', 'Hamm Städte', 'Herne Städte', 'Hochsauerlandkreis', 'Märkischer Kreis', 'Olpe', 'Siegen-Wittgenstein', 'Ostalbkreis', 'Rems-Murr-Kreis', 'Schwäbisch Hall', 'Stuttgart Städte', 'Alb-Donau', 'Biberach', 'Bodensee', 'Ravensburg', 'Reutlingen', 'Sigmaringen', 'Tübingen', 'Ulm Städte', 'Zollernalbkreis', 'Ansbach Städte', 'Ansbach', 'Erlangen-Höchstadt', 'Erlangen Städte', 'Fürth Städte', 'Breisgau-Hochschwarzwald', 'Emmendingen', 'Freiburg', 'Konstanz', 'Lörrach', 'Ortenaukreis', 'Rottweil', 'Schwarzwald-Baar-Kreis', 'Tuttlingen', 'Waldshut', 'Baden-Baden Städte', 'Calw', 'Enz', 'Freudenstadt', 'Heidelberg Städte', 'Karlsruhe Städte', 'Karlsruhe', 'Mannheim Städte', 'Neckar-Odenwald-Kreis', 'Pforzheim Städte', 'Rastatt', 'Rhein-Neckar-Kreis', 'Böblingen', 'Esslingen', 'Göppingen', 'Heidenheim', 'Heilbronn city Städte', 'Heilbronn', 'Hohenlohe', 'Ludwigsburg', 'Main-Tauber', 'Fürth', 'Neustadt-Bad Windsheim', 'Nuremberg Städte', 'Nürnberger Land', 'Roth', 'Schwabach Städte', 'Weißenburg-Gunzenhausen', 'Deggendorf', 'Dingolfing-Landau', 'Freyung-Grafenau', 'Kelheim', 'Landshut Städte', 'Landshut', 'Passau Städte', 'Passau', 'Regen', 'Rottal-Inn', 'Straubing-Bogen', 'Straubing Städte', 'Altötting', 'Bad Tölz-Wolfratshausen', 'Berchtesgadener Land', 'Dachau', 'Ebersberg', 'Eichstätt', 'Erding', 'Freising', 'Fürstenfeldbruck', 'Garmisch-Partenkirchen', 'Ingolstadt Städte', 'Landsberg', 'Miesbach', 'Mühldorf', 'München', 'Munich Städte', 'Neuburg-Schrobenhausen', 'Pfaffenhofen', 'Rosenheim Städte', 'Rosenheim', 'Starnberg', 'Traunstein', 'Weilheim-Schongau', 'Bamberg Städte', 'Bamberg', 'Bayreuth Städte', 'Bayreuth', 'Coburg Städte', 'Coburg', 'Forchheim', 'Hof Städte', 'Hof', 'Kronach', 'Kulmbach', 'Lichtenfels', 'Wunsiedel', 'Amberg-Sulzbach', 'Amberg Städte', 'Cham', 'Neumarkt', 'Neustadt', 'Regensburg Städte', 'Regensburg', 'Schwandorf', 'Tirschenreuth', 'Weiden Städte', 'Aichach-Friedberg', 'Augsburg Städte', 'Augsburg', 'Dillingen', 'Donau-Ries', 'Günzburg', 'Kaufbeuren Städte', 'Kempten Städte', 'Lindau', 'Memmingen Städte', 'Neu-Ulm', 'Oberallgäu', 'Ostallgäu', 'Unterallgäu', 'Aschaffenburg Städte', 'Aschaffenburg', 'Bad Kissingen', 'Haßberge', 'Kitzingen', 'Main-Spessart', 'Miltenberg', 'Rhön-Grabfeld', 'Schweinfurt Städte', 'Schweinfurt', 'Würzburg Städte', 'Würzburg', 'Berlin', 'Barnim', 'Brandenburg an der Havel Städte', 'Cottbus Städte', 'Dahme-Spreewald', 'Elbe-Elster', 'Frankfurt am Oder Städte', 'Havelland', 'Märkisch-Oderland', 'Oberhavel', 'Oberspreewald-Lausitz', 'Oder-Spree', 'Ostprignitz-Ruppin', 'Potsdam-Mittelmark', 'Potsdam Städte', 'Prignitz', 'Spree-Neiße', 'Teltow-Fläming', 'Uckermark', 'Bremen Städte', 'Hamburg Städte', 'Bergstraße', 'Darmstadt-Dieburg', 'Darmstadt Städte', 'Frankfurt am Main Städte', 'Groß-Gerau', 'Hochtaunuskreis', 'Main-Kinzig-Kreis', 'Main-Taunus-Kreis Städte', 'Odenwaldkreis', 'Offenbach am Main Städte', 'Offenbach', 'Rheingau-Taunus-Kreis', 'Wetteraukreis', 'Wiesbaden Städte', 'Gießen', 'Lahn-Dill-Kreis', 'Limburg-Weilburg', 'Marburg-Biedenkopf', 'Vogelsbergkreis', 'Fulda', 'Hersfeld-Rotenburg', 'Kassel Städte', 'Kassel', 'Schwalm-Eder-Kreis', 'Waldeck-Frankenberg', 'Werra-Meißner-Kreis', 'Bad Doberan', 'Demmin', 'Greifswald Städte', 'Güstrow', 'Ludwigslust', 'Mecklenburg-Strelitz', 'Müritz', 'Neubrandenburg Städte', 'Nordvorpommern', 'Nordwestmecklenburg', 'Ostvorpommern', 'Parchim', 'Rostock Städte', 'Rügen', 'Schwerin Städte', 'Stralsund Städte', 'Uecker-Randow', 'Wismar Städte', 'Braunschweig Städte', 'Gifhorn', 'Goslar', 'Göttingen', 'Helmstedt', 'Northeim', 'Osterode', 'Peine', 'Salzgitter Städte', 'Wolfenbüttel', 'Wolfsburg Städte', 'Diepholz', 'Hamelin-Pyrmont', 'Hanover', 'Hildesheim', 'Holzminden', 'Nienburg', 'Schaumburg', 'Celle', 'Cuxhaven', 'Harburg', 'Lüchow-Dannenberg', 'Lüneburg', 'Osterholz', 'Rotenburg', 'Soltau-Fallingbostel', 'Stade', 'Uelzen', 'Verden', 'Ammerland', 'Aurich', 'Cloppenburg', 'Emden Städte', 'Emsland', 'Friesland', 'Grafschaft Bentheim', 'Leer', 'Oldenburg Städte', 'Soest', 'Unna', 'Bielefeld Städte', 'Gütersloh', 'Herford', 'Höxter', 'Lippe', 'Minden-Lübbecke', 'Paderborn', 'Cleves', 'Duisburg Städte', 'Düsseldorf Städte', 'Essen Städte', 'Krefeld Städte', 'Mettmann', 'Mönchengladbach Städte', 'Mülheim Städte', 'Oberhausen Städte', 'Remscheid Städte', 'Rhein-Kreis Neuss', 'Solingen Städte', 'Viersen', 'Wesel', 'Wuppertal Städte', 'Aachen Städte', 'Aachen', 'Bonn Städte', 'Cologne Städte', 'Düren', 'Euskirchen', 'Heinsberg', 'Leverkusen Städte', 'Oberbergischer Kreis', 'Rhein-Erft-Kreis', 'Rhein-Sieg', 'Rheinisch-Bergischer Kreis', 'Borken', 'Bottrop Städte', 'Coesfeld', 'Gelsenkirchen Städte', 'Münster Städte', 'Recklinghausen', 'Steinfurt', 'Warendorf', 'Ahrweiler', 'Altenkirchen', 'Bad Kreuznach', 'Birkenfeld', 'Cochem-Zell', 'Koblenz Coblenz Städte', 'Mayen-Koblenz', 'Neuwied', 'Rhein-Hunsrück', 'Rhein-Lahn', 'Westerwaldkreis', 'Alzey-Worms', 'Bad Dürkheim', 'Donnersbergkreis', 'Frankenthal Städte', 'Germersheim', 'Kaiserslautern Städte', 'Kaiserslautern', 'Kusel', 'Landau Städte', 'Ludwigshafen Städte', 'Mainz-Bingen', 'Mainz Städte', 'Neustadt Städte', 'Rhein-Pfalz-Kreis', 'Speyer Spires Städte', 'Südliche Weinstraße', 'Südwestpfalz', 'Worms Städte', 'Zweibrücken Städte', 'Bernkastel-Wittlich', 'Bitburg-Prüm', 'Trier-Saarburg', 'Trier Städte', 'Vulkaneifel', 'Merzig-Wadern', 'Neunkirchen', 'Saarbrücken Städte', 'Saarlouis', 'Saarpfalz', 'Sankt Wendel', 'Anhalt-Zerbst', 'Bernburg', 'Bitterfeld', 'Dessau Städte', 'Köthen', 'Wittenberg', 'Aschersleben-Staßfurt', 'Burgenlandkreis', 'Halle Städte', 'Mansfelder Land', 'Merseburg-Querfurt', 'Saalkreis', 'Sangerhausen', 'Weißenfels', 'Altmarkkreis Salzwedel', 'Bördekreis', 'Halberstadt', 'Jerichower Land', 'Magdeburg Städte', 'Ohrekreis', 'Quedlinburg', 'Schönebeck', 'Stendal', 'Wernigerode', 'Annaberg', 'Aue-Schwarzenberg', 'Chemnitz Städte', 'Chemnitzer Land', 'Freiberg', 'Mittlerer Erzgebirgskreis', 'Mittweida', 'Plauen Städte', 'Stollberg', 'Vogtlandkreis', 'Zwickau Städte', 'Zwickauer Land', 'Bautzen', 'Dresden Städte', 'Görlitz Städte', 'Kamenz', 'Löbau-Zittau', 'Meißen', 'Niederschlesischer Oberlausitzkreis', 'Riesa-Großenhain', 'Sächsische Schweiz', 'Weißeritzkreis', 'Delitzsch', 'Döbeln', 'Leipzig Städte', 'Leipziger Land', 'Muldentalkreis', 'Torgau-Oschatz', 'Dithmarschen', 'Flensburg Städte', 'Kiel Städte', 'Lauenburg', 'Lübeck Städte', 'Neumünster Städte', 'Nordfriesland', 'Ostholstein', 'Pinneberg', 'Plön', 'Rendsburg-Eckernförde', 'Schleswig-Flensburg', 'Segeberg', 'Steinburg', 'Stormarn', 'Altenburger Land', 'Eichsfeld', 'Erfurt Städte', 'Gera Städte', 'Gotha', 'Greiz', 'Hildburghausen', 'Ilm-Kreis', 'Jena Städte', 'Kyffhäuserkreis', 'Nordhausen', 'Saale-Holzland', 'Saale-Orla', 'Saalfeld-Rudolstadt', 'Schmalkalden-Meiningen', 'Sömmerda', 'Sonneberg', 'Suhl Städte', 'Unstrut-Hainich', 'Wartburgkreis', 'Weimar Städte', 'Weimarer Land'],
    city: {
      consumption: [1, 2, 0],
      price: []
    },
    cards: [{
      label: 'Revenue',
      value: 64.3,
      unit: 'M€',
      values: randomArray(3, 0.3, 24, 'revenue'),
      keys: hoursInDay
    }, {
      label: 'Profit',
      value: 2.1,
      unit: 'M€',
      values: randomArray(0.1, 0.01, 24, 'profit'),
      keys: hoursInDay
    }, {
      label: 'Average price',
      value: 0.34,
      unit: 'ct€/kWh',
      values: randomArray(0.13, 0.02, 24, 'prices'),
      keys: hoursInDay
    }, {
      label: 'Energy provided',
      value: 123.7,
      unit: 'MWh',
      values: randomArray(5, 0.5, 24, 'energy'),
      keys: hoursInDay
    }]
  }
})

export const getters = {
  isAuthenticated (state) {
    return state.auth.loggedIn
  },

  loggedInUser (state) {
    return state.auth.user
  },

  currentData (state) {
    return state.current
  },

  dailyData (state) {
    return state.daily
  },

  consumptions (state) {
    // ToDo: should get user specific data
    const consumptions = {}
    // Compute all the green shares values
    Object.keys(state.consumptions).forEach((window) => {
      consumptions[window] = {
        renewable: elementwiseOperation(
          state.consumptions[window].greenShares,
          state.consumptions[window].values,
          (gs, v) => Math.round(gs * v * 100) / 100
        ),
        nonRenewable: elementwiseOperation(
          state.consumptions[window].greenShares,
          state.consumptions[window].values,
          (gs, v) => Math.round((1 - gs) * v * 100) / 100
        ),
        ...state.consumptions[window]
      }
    })
    return consumptions
  },

  forecast (state) {
    return state.forecast
  },

  equivalents (state) {
    return state.equivalents
  },

  metrics (state) {
    return state.metrics
  },

  adminCards (state) {
    return state.admin.cards
  }
}

export const actions = {
  logInUser ({ commit, state }, email) {
    const user = state.users.find(u => u.email === email)
    if (!user) {
      return false
    }
    commit(SET_CURRENT_USER, user)
    return true
  },

  getUser ({ commit, state }, id) {
    // ToDo: remove sensible user information
    return state.users.find(u => u.id === id)
  },

  async getGeoData ({ commit, state }) {
    // ToDo: call backend to get both geo data + consumptions / Q.ON data
    // 1. Geo data
    // Cities
    // const response = await fetch('https://raw.githubusercontent.com/isellsoap/deutschlandGeoJSON/main/4_kreise/4_niedrig.geo.json')
    const response = await fetch('/cities.json')
    // Regions
    // const response = await fetch('https://raw.githubusercontent.com/isellsoap/deutschlandGeoJSON/main/3_regierungsbezirke/4_niedrig.geo.json')
    const data = (await response.json()).features
    // 2. Q.ON data
    for (const area of data) {
      const minGreenShare = 0.11
      const maxGreenShare = 0.35
      const greenShares = randomArray(
        (maxGreenShare + minGreenShare) / 2,
        (maxGreenShare - minGreenShare) / 2,
        24,
        'shares-' + area.properties.NAME_3
      )
      area.properties.energy = {
        keys: hoursInDay,
        consumptions: randomArray(30, 10, 24, area.properties.NAME_3),
        prices: randomArray(32, 8, 24, 'prices-' + area.properties.NAME_3),
        greenShares,
        color: greenShareToColor(greenShares[greenShares.length - 1], minGreenShare, maxGreenShare)
      }
    }
    // 3. Store
    commit(SET_GEO_DATA, data)
    return data
  },

  getCityData ({ commit, state }, cityName) {
    return state.geodata.find(c => c.properties.NAME_3 === cityName)
  }
}

export const mutations = {
  [SET_CURRENT_USER] (state, user) {
    state.auth.user = user
  },

  [SET_GEO_DATA] (state, geodata) {
    state.geodata = geodata
  }
}

function elementwiseOperation (arr1, arr2, ope) {
  // simple helper as we found nothing doing that online
  if (arr1.length !== arr2.length) {
    return []
  }
  const res = []
  for (let i = 0; i < arr1.length; i++) {
    res.push(ope(arr1[i], arr2[i]))
  }
  return res
}

const hoursInDay = ['0h', '1h', '2h', '3h', '4h', '5h', '6h', '7h', '8h', '9h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h', '18h', '19h', '20h', '21h', '22h', '23h']
// from numpy import random; [round(20 + 20 * random.random(), 1) for _ in range(24)]
// + manual moves to have a nice shape
const priceOverDay = [37.63, 33.75, 34.74, 35.36, 39.6, 39.08, 28.90, 25.54, 29.59, 24.87, 31.93, 28.44, 24.78, 23.60, 25.11, 25.67, 29.05, 28.44, 33.97, 35.45, 32.94, 39.73, 31.55, 36.46]
const otherPriceOverDay = priceOverDay.map(price => price * (1 + 0.1 * Math.random())) // 10% variation

function randomArray (value, variation, length, seed) {
  const arr = []
  const rng = seedrandom(seed)
  for (let i = 0; i < length; i++) {
    arr.push(value + variation * (1 - 2 * rng()))
  }
  return arr
}

function greenShareToColor (greenShare, min, max) {
  const index = parseInt((greenShare - min) / (max - min) * colors.length)
  return colors[index]
}
