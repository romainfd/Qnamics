import vuetifyColors from 'vuetify/lib/util/colors'
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
    name: 'Admin Qnamics',
    email: 'admin@mail.com',
    createdAt: '27/02/2021',
    admin: true
  }, {
    id: '123456789',
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
    price: {
      today: {
        labels: hoursInDay,
        datasets: [{
          data: priceOverDay,
          backgroundColor: '#34c369',
          fill: false,
          borderColor: '#4BC0C0',
          tension: 0.1
        }]
      },
      '3days': {
        labels: [
          ...hoursInDay,
          ...(hoursInDay.map(h => 'D+1 ' + h)),
          ...(hoursInDay.map(h => 'D+2 ' + h))],
        datasets: [{
          data: [...priceOverDay, ...otherPriceOverDay, ...priceOverDay],
          backgroundColor: '#34c369',
          fill: false,
          borderColor: '#4BC0C0',
          tension: 0.1
        }]
      }
    },
    energyMix: {
      today: {
        labels: hoursInDay,
        datasets: generateEnergyMix().datasets.values
      },
      '3days': {
        labels: [
          ...hoursInDay,
          ...(hoursInDay.map(h => 'D+1 ' + h)),
          ...(hoursInDay.map(h => 'D+2 ' + h))],
        datasets: generateEnergyMix(72).datasets.values
      }
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
    cities: ['Oldenburg', 'Osnabr??ck St??dte', 'Osnabr??ck', 'Vechta', 'Wesermarsch', 'Wilhelmshaven St??dte', 'Wittmund', 'Bochum St??dte', 'Dortmund St??dte', 'Ennepe-Ruhr', 'Hagen St??dte', 'Hamm St??dte', 'Herne St??dte', 'Hochsauerlandkreis', 'M??rkischer Kreis', 'Olpe', 'Siegen-Wittgenstein', 'Ostalbkreis', 'Rems-Murr-Kreis', 'Schw??bisch Hall', 'Stuttgart St??dte', 'Alb-Donau', 'Biberach', 'Bodensee', 'Ravensburg', 'Reutlingen', 'Sigmaringen', 'T??bingen', 'Ulm St??dte', 'Zollernalbkreis', 'Ansbach St??dte', 'Ansbach', 'Erlangen-H??chstadt', 'Erlangen St??dte', 'F??rth St??dte', 'Breisgau-Hochschwarzwald', 'Emmendingen', 'Freiburg', 'Konstanz', 'L??rrach', 'Ortenaukreis', 'Rottweil', 'Schwarzwald-Baar-Kreis', 'Tuttlingen', 'Waldshut', 'Baden-Baden St??dte', 'Calw', 'Enz', 'Freudenstadt', 'Heidelberg St??dte', 'Karlsruhe St??dte', 'Karlsruhe', 'Mannheim St??dte', 'Neckar-Odenwald-Kreis', 'Pforzheim St??dte', 'Rastatt', 'Rhein-Neckar-Kreis', 'B??blingen', 'Esslingen', 'G??ppingen', 'Heidenheim', 'Heilbronn city St??dte', 'Heilbronn', 'Hohenlohe', 'Ludwigsburg', 'Main-Tauber', 'F??rth', 'Neustadt-Bad Windsheim', 'Nuremberg St??dte', 'N??rnberger Land', 'Roth', 'Schwabach St??dte', 'Wei??enburg-Gunzenhausen', 'Deggendorf', 'Dingolfing-Landau', 'Freyung-Grafenau', 'Kelheim', 'Landshut St??dte', 'Landshut', 'Passau St??dte', 'Passau', 'Regen', 'Rottal-Inn', 'Straubing-Bogen', 'Straubing St??dte', 'Alt??tting', 'Bad T??lz-Wolfratshausen', 'Berchtesgadener Land', 'Dachau', 'Ebersberg', 'Eichst??tt', 'Erding', 'Freising', 'F??rstenfeldbruck', 'Garmisch-Partenkirchen', 'Ingolstadt St??dte', 'Landsberg', 'Miesbach', 'M??hldorf', 'M??nchen', 'Munich St??dte', 'Neuburg-Schrobenhausen', 'Pfaffenhofen', 'Rosenheim St??dte', 'Rosenheim', 'Starnberg', 'Traunstein', 'Weilheim-Schongau', 'Bamberg St??dte', 'Bamberg', 'Bayreuth St??dte', 'Bayreuth', 'Coburg St??dte', 'Coburg', 'Forchheim', 'Hof St??dte', 'Hof', 'Kronach', 'Kulmbach', 'Lichtenfels', 'Wunsiedel', 'Amberg-Sulzbach', 'Amberg St??dte', 'Cham', 'Neumarkt', 'Neustadt', 'Regensburg St??dte', 'Regensburg', 'Schwandorf', 'Tirschenreuth', 'Weiden St??dte', 'Aichach-Friedberg', 'Augsburg St??dte', 'Augsburg', 'Dillingen', 'Donau-Ries', 'G??nzburg', 'Kaufbeuren St??dte', 'Kempten St??dte', 'Lindau', 'Memmingen St??dte', 'Neu-Ulm', 'Oberallg??u', 'Ostallg??u', 'Unterallg??u', 'Aschaffenburg St??dte', 'Aschaffenburg', 'Bad Kissingen', 'Ha??berge', 'Kitzingen', 'Main-Spessart', 'Miltenberg', 'Rh??n-Grabfeld', 'Schweinfurt St??dte', 'Schweinfurt', 'W??rzburg St??dte', 'W??rzburg', 'Berlin', 'Barnim', 'Brandenburg an der Havel St??dte', 'Cottbus St??dte', 'Dahme-Spreewald', 'Elbe-Elster', 'Frankfurt am Oder St??dte', 'Havelland', 'M??rkisch-Oderland', 'Oberhavel', 'Oberspreewald-Lausitz', 'Oder-Spree', 'Ostprignitz-Ruppin', 'Potsdam-Mittelmark', 'Potsdam St??dte', 'Prignitz', 'Spree-Nei??e', 'Teltow-Fl??ming', 'Uckermark', 'Bremen St??dte', 'Hamburg St??dte', 'Bergstra??e', 'Darmstadt-Dieburg', 'Darmstadt St??dte', 'Frankfurt am Main St??dte', 'Gro??-Gerau', 'Hochtaunuskreis', 'Main-Kinzig-Kreis', 'Main-Taunus-Kreis St??dte', 'Odenwaldkreis', 'Offenbach am Main St??dte', 'Offenbach', 'Rheingau-Taunus-Kreis', 'Wetteraukreis', 'Wiesbaden St??dte', 'Gie??en', 'Lahn-Dill-Kreis', 'Limburg-Weilburg', 'Marburg-Biedenkopf', 'Vogelsbergkreis', 'Fulda', 'Hersfeld-Rotenburg', 'Kassel St??dte', 'Kassel', 'Schwalm-Eder-Kreis', 'Waldeck-Frankenberg', 'Werra-Mei??ner-Kreis', 'Bad Doberan', 'Demmin', 'Greifswald St??dte', 'G??strow', 'Ludwigslust', 'Mecklenburg-Strelitz', 'M??ritz', 'Neubrandenburg St??dte', 'Nordvorpommern', 'Nordwestmecklenburg', 'Ostvorpommern', 'Parchim', 'Rostock St??dte', 'R??gen', 'Schwerin St??dte', 'Stralsund St??dte', 'Uecker-Randow', 'Wismar St??dte', 'Braunschweig St??dte', 'Gifhorn', 'Goslar', 'G??ttingen', 'Helmstedt', 'Northeim', 'Osterode', 'Peine', 'Salzgitter St??dte', 'Wolfenb??ttel', 'Wolfsburg St??dte', 'Diepholz', 'Hamelin-Pyrmont', 'Hanover', 'Hildesheim', 'Holzminden', 'Nienburg', 'Schaumburg', 'Celle', 'Cuxhaven', 'Harburg', 'L??chow-Dannenberg', 'L??neburg', 'Osterholz', 'Rotenburg', 'Soltau-Fallingbostel', 'Stade', 'Uelzen', 'Verden', 'Ammerland', 'Aurich', 'Cloppenburg', 'Emden St??dte', 'Emsland', 'Friesland', 'Grafschaft Bentheim', 'Leer', 'Oldenburg St??dte', 'Soest', 'Unna', 'Bielefeld St??dte', 'G??tersloh', 'Herford', 'H??xter', 'Lippe', 'Minden-L??bbecke', 'Paderborn', 'Cleves', 'Duisburg St??dte', 'D??sseldorf St??dte', 'Essen St??dte', 'Krefeld St??dte', 'Mettmann', 'M??nchengladbach St??dte', 'M??lheim St??dte', 'Oberhausen St??dte', 'Remscheid St??dte', 'Rhein-Kreis Neuss', 'Solingen St??dte', 'Viersen', 'Wesel', 'Wuppertal St??dte', 'Aachen St??dte', 'Aachen', 'Bonn St??dte', 'Cologne St??dte', 'D??ren', 'Euskirchen', 'Heinsberg', 'Leverkusen St??dte', 'Oberbergischer Kreis', 'Rhein-Erft-Kreis', 'Rhein-Sieg', 'Rheinisch-Bergischer Kreis', 'Borken', 'Bottrop St??dte', 'Coesfeld', 'Gelsenkirchen St??dte', 'M??nster St??dte', 'Recklinghausen', 'Steinfurt', 'Warendorf', 'Ahrweiler', 'Altenkirchen', 'Bad Kreuznach', 'Birkenfeld', 'Cochem-Zell', 'Koblenz Coblenz St??dte', 'Mayen-Koblenz', 'Neuwied', 'Rhein-Hunsr??ck', 'Rhein-Lahn', 'Westerwaldkreis', 'Alzey-Worms', 'Bad D??rkheim', 'Donnersbergkreis', 'Frankenthal St??dte', 'Germersheim', 'Kaiserslautern St??dte', 'Kaiserslautern', 'Kusel', 'Landau St??dte', 'Ludwigshafen St??dte', 'Mainz-Bingen', 'Mainz St??dte', 'Neustadt St??dte', 'Rhein-Pfalz-Kreis', 'Speyer Spires St??dte', 'S??dliche Weinstra??e', 'S??dwestpfalz', 'Worms St??dte', 'Zweibr??cken St??dte', 'Bernkastel-Wittlich', 'Bitburg-Pr??m', 'Trier-Saarburg', 'Trier St??dte', 'Vulkaneifel', 'Merzig-Wadern', 'Neunkirchen', 'Saarbr??cken St??dte', 'Saarlouis', 'Saarpfalz', 'Sankt Wendel', 'Anhalt-Zerbst', 'Bernburg', 'Bitterfeld', 'Dessau St??dte', 'K??then', 'Wittenberg', 'Aschersleben-Sta??furt', 'Burgenlandkreis', 'Halle St??dte', 'Mansfelder Land', 'Merseburg-Querfurt', 'Saalkreis', 'Sangerhausen', 'Wei??enfels', 'Altmarkkreis Salzwedel', 'B??rdekreis', 'Halberstadt', 'Jerichower Land', 'Magdeburg St??dte', 'Ohrekreis', 'Quedlinburg', 'Sch??nebeck', 'Stendal', 'Wernigerode', 'Annaberg', 'Aue-Schwarzenberg', 'Chemnitz St??dte', 'Chemnitzer Land', 'Freiberg', 'Mittlerer Erzgebirgskreis', 'Mittweida', 'Plauen St??dte', 'Stollberg', 'Vogtlandkreis', 'Zwickau St??dte', 'Zwickauer Land', 'Bautzen', 'Dresden St??dte', 'G??rlitz St??dte', 'Kamenz', 'L??bau-Zittau', 'Mei??en', 'Niederschlesischer Oberlausitzkreis', 'Riesa-Gro??enhain', 'S??chsische Schweiz', 'Wei??eritzkreis', 'Delitzsch', 'D??beln', 'Leipzig St??dte', 'Leipziger Land', 'Muldentalkreis', 'Torgau-Oschatz', 'Dithmarschen', 'Flensburg St??dte', 'Kiel St??dte', 'Lauenburg', 'L??beck St??dte', 'Neum??nster St??dte', 'Nordfriesland', 'Ostholstein', 'Pinneberg', 'Pl??n', 'Rendsburg-Eckernf??rde', 'Schleswig-Flensburg', 'Segeberg', 'Steinburg', 'Stormarn', 'Altenburger Land', 'Eichsfeld', 'Erfurt St??dte', 'Gera St??dte', 'Gotha', 'Greiz', 'Hildburghausen', 'Ilm-Kreis', 'Jena St??dte', 'Kyffh??userkreis', 'Nordhausen', 'Saale-Holzland', 'Saale-Orla', 'Saalfeld-Rudolstadt', 'Schmalkalden-Meiningen', 'S??mmerda', 'Sonneberg', 'Suhl St??dte', 'Unstrut-Hainich', 'Wartburgkreis', 'Weimar St??dte', 'Weimarer Land'],
    city: {
      consumption: [1, 2, 0],
      price: []
    },
    cards: [{
      color: vuetifyColors.orange.lighten5,
      label: 'Revenue',
      value: 64.3,
      unit: 'M???',
      values: [
        ...randomArray(2.7, 0.3, 8, 'revenue'),
        ...randomArray(3, 0.3, 8, 'revenue2'),
        ...randomArray(3.3, 0.3, 8, 'revenue3')
      ],
      keys: hoursInDay
    }, {
      color: vuetifyColors.lightBlue.lighten5,
      label: 'Profit',
      value: 2.1,
      unit: 'M???',
      values: [
        ...randomArray(0.09, 0.01, 8, 'profit'),
        ...randomArray(0.1, 0.01, 8, 'profit2'),
        ...randomArray(0.11, 0.01, 8, 'profit3')
      ],
      keys: hoursInDay
    }, {
      color: vuetifyColors.red.lighten5,
      label: 'Average price',
      value: 0.34,
      unit: 'ct???/kWh',
      values: randomArray(0.34, 0.03, 24, 'prices'),
      keys: hoursInDay
    }, {
      color: vuetifyColors.green.lighten5,
      label: 'Energy provided',
      value: 123.7,
      unit: 'MWh',
      values: [
        ...randomArray(4.5, 0.5, 8, 'energy'),
        ...randomArray(5, 0.5, 8, 'energy'),
        ...randomArray(5.5, 0.5, 8, 'energy')
      ],
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
      return null
    }
    commit(SET_CURRENT_USER, user)
    return user
  },

  getUser ({ commit, state }, id) {
    // ToDo: remove sensible user information
    return state.users.find(u => u.id === id)
  },

  async getGeoData ({ commit, state }) {
    // ToDo: call backend to get both geo data + consumptions / Qnamics data
    // 1. Geo data
    // Cities
    // const response = await fetch('https://raw.githubusercontent.com/isellsoap/deutschlandGeoJSON/main/4_kreise/4_niedrig.geo.json')
    const response = await fetch('/cities.json')
    // Regions
    // const response = await fetch('https://raw.githubusercontent.com/isellsoap/deutschlandGeoJSON/main/3_regierungsbezirke/4_niedrig.geo.json')
    const data = (await response.json()).features
    // 2. Qnamics data
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

  async getAreaData ({ commit, state, dispatch }, areaName) {
    if (!state.geodata) {
      await dispatch('getGeoData')
    }
    const areaData = state.geodata.find(a => a.properties.NAME_3 === areaName)
    if (areaData) {
      let data = areaData.properties
      data = {
        cards: [{
          color: vuetifyColors.green.lighten5,
          label: 'Price sold',
          value: 34,
          unit: 'ct???/kWh',
          values: randomArray(32, 8, 24, 'prices-' + data.NAME_3),
          keys: hoursInDay
        }, {
          color: vuetifyColors.orange.lighten5,
          label: 'Spot price paid',
          value: 29,
          unit: 'ct???/kWh',
          values: randomArray(27, 6, 24, 'spot-' + data.NAME_3),
          keys: hoursInDay
        }, {
          color: vuetifyColors.lightBlue.lighten5,
          label: 'Profit',
          value: 24,
          unit: '%',
          values: [
            ...randomArray(20, 4, 8, 'profit-' + data.NAME_3),
            ...randomArray(24, 4, 8, 'profit2-' + data.NAME_3),
            ...randomArray(28, 4, 8, 'profit3-' + data.NAME_3)
          ],
          keys: hoursInDay
        }, {
          color: vuetifyColors.red.lighten5,
          label: 'Profit over customer lifetime',
          value: 19,
          unit: '%',
          values: [
            ...randomArray(17, 2, 8, 'profit-' + data.NAME_3),
            ...randomArray(19, 2, 8, 'profit2-' + data.NAME_3),
            ...randomArray(21, 2, 8, 'profit3-' + data.NAME_3)
          ],
          keys: hoursInDay
        }],
        energyMix: generateEnergyMix(),
        ...data
      }
      return data
    }
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

function generateEnergyMix (length = 24) {
  return {
    // Ref.: https://pbs.twimg.com/media/Ef7u_oxWoAAHisk.jpg (H1 2020 in Germany)
    values: [33.9, 27.7, 13.9, 5.8, 8.7, 4.4, 2.0, 0.7, 0.7, 2.1],
    keys: ['Oil', 'Gas', 'Coal', 'Nuclear', 'Biomass', 'Wind', 'Solar', 'Hydro', 'Geothermal', 'Others'],
    colors: [
      vuetifyColors.red.lighten3,
      vuetifyColors.grey.lighten2,
      vuetifyColors.brown.lighten3,
      vuetifyColors.purple.lighten3,
      vuetifyColors.lime.lighten2,
      vuetifyColors.teal.lighten3,
      vuetifyColors.amber.lighten3,
      vuetifyColors.lightBlue.lighten3,
      vuetifyColors.lightGreen.lighten3,
      vuetifyColors.blueGrey.lighten3
    ],
    datasets: {
      values: [{
        label: 'Oil',
        data: randomArray(33.9, 4, length, 'energyMix1'),
        backgroundColor: vuetifyColors.red.lighten3,
        fill: true
      }, {
        label: 'Gas',
        data: randomArray(27.7, 2.5, length, 'energyMix2'),
        backgroundColor: vuetifyColors.grey.lighten2,
        fill: true
      }, {
        label: 'Coal',
        data: randomArray(13.9, 2, length, 'energyMix3'),
        backgroundColor: vuetifyColors.brown.lighten3,
        fill: true
      }, {
        label: 'Nuclear',
        data: randomArray(5.8, -2, length, 'energyMix1'),
        backgroundColor: vuetifyColors.purple.lighten3,
        fill: true
      }, {
        label: 'Biomass',
        data: randomArray(8.7, -2, length, 'energyMix2'),
        backgroundColor: vuetifyColors.lime.lighten2,
        fill: true
      }, {
        label: 'Wind',
        data: randomArray(4.4, -1.5, length, 'energyMix3'),
        backgroundColor: vuetifyColors.teal.lighten3,
        fill: true
      }, {
        label: 'Solar',
        data: randomArray(2, -1, length, 'energyMix1'),
        backgroundColor: vuetifyColors.amber.lighten3,
        fill: true
      }, {
        label: 'Hydro',
        data: randomArray(0.7, -0.5, length, 'energyMix2'),
        backgroundColor: vuetifyColors.lightBlue.lighten3,
        fill: true
      }, {
        label: 'Geothermal',
        data: randomArray(0.7, -0.5, length, 'energyMix3'),
        backgroundColor: vuetifyColors.lightGreen.lighten3,
        fill: true
      }, {
        label: 'Others',
        data: randomArray(2.1, -1, length, 'energyMix1'),
        backgroundColor: vuetifyColors.blueGrey.lighten3,
        fill: true
      }],
      keys: hoursInDay
    }
  }
}
