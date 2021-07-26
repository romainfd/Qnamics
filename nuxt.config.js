export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Q.ON',
    title: 'Q.ON',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/persistedState.js', mode: 'client' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/device'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-leaflet'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    // For custom variables to work | Ref.: https://vuetifyjs.com/en/features/sass-variables/#nuxt-install
    treeShake: true,
    theme: {
      dark: false,
      themes: {
        light: {}
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  generate: {
    // Generating dynamic pages so they are accessible through direct URL
    routes (callback) {
      const cities = ['Oldenburg', 'Osnabrück Städte', 'Osnabrück', 'Vechta', 'Wesermarsch', 'Wilhelmshaven Städte', 'Wittmund', 'Bochum Städte', 'Dortmund Städte', 'Ennepe-Ruhr', 'Hagen Städte', 'Hamm Städte', 'Herne Städte', 'Hochsauerlandkreis', 'Märkischer Kreis', 'Olpe', 'Siegen-Wittgenstein', 'Ostalbkreis', 'Rems-Murr-Kreis', 'Schwäbisch Hall', 'Stuttgart Städte', 'Alb-Donau', 'Biberach', 'Bodensee', 'Ravensburg', 'Reutlingen', 'Sigmaringen', 'Tübingen', 'Ulm Städte', 'Zollernalbkreis', 'Ansbach Städte', 'Ansbach', 'Erlangen-Höchstadt', 'Erlangen Städte', 'Fürth Städte', 'Breisgau-Hochschwarzwald', 'Emmendingen', 'Freiburg', 'Konstanz', 'Lörrach', 'Ortenaukreis', 'Rottweil', 'Schwarzwald-Baar-Kreis', 'Tuttlingen', 'Waldshut', 'Baden-Baden Städte', 'Calw', 'Enz', 'Freudenstadt', 'Heidelberg Städte', 'Karlsruhe Städte', 'Karlsruhe', 'Mannheim Städte', 'Neckar-Odenwald-Kreis', 'Pforzheim Städte', 'Rastatt', 'Rhein-Neckar-Kreis', 'Böblingen', 'Esslingen', 'Göppingen', 'Heidenheim', 'Heilbronn city Städte', 'Heilbronn', 'Hohenlohe', 'Ludwigsburg', 'Main-Tauber', 'Fürth', 'Neustadt-Bad Windsheim', 'Nuremberg Städte', 'Nürnberger Land', 'Roth', 'Schwabach Städte', 'Weißenburg-Gunzenhausen', 'Deggendorf', 'Dingolfing-Landau', 'Freyung-Grafenau', 'Kelheim', 'Landshut Städte', 'Landshut', 'Passau Städte', 'Passau', 'Regen', 'Rottal-Inn', 'Straubing-Bogen', 'Straubing Städte', 'Altötting', 'Bad Tölz-Wolfratshausen', 'Berchtesgadener Land', 'Dachau', 'Ebersberg', 'Eichstätt', 'Erding', 'Freising', 'Fürstenfeldbruck', 'Garmisch-Partenkirchen', 'Ingolstadt Städte', 'Landsberg', 'Miesbach', 'Mühldorf', 'München', 'Munich Städte', 'Neuburg-Schrobenhausen', 'Pfaffenhofen', 'Rosenheim Städte', 'Rosenheim', 'Starnberg', 'Traunstein', 'Weilheim-Schongau', 'Bamberg Städte', 'Bamberg', 'Bayreuth Städte', 'Bayreuth', 'Coburg Städte', 'Coburg', 'Forchheim', 'Hof Städte', 'Hof', 'Kronach', 'Kulmbach', 'Lichtenfels', 'Wunsiedel', 'Amberg-Sulzbach', 'Amberg Städte', 'Cham', 'Neumarkt', 'Neustadt', 'Regensburg Städte', 'Regensburg', 'Schwandorf', 'Tirschenreuth', 'Weiden Städte', 'Aichach-Friedberg', 'Augsburg Städte', 'Augsburg', 'Dillingen', 'Donau-Ries', 'Günzburg', 'Kaufbeuren Städte', 'Kempten Städte', 'Lindau', 'Memmingen Städte', 'Neu-Ulm', 'Oberallgäu', 'Ostallgäu', 'Unterallgäu', 'Aschaffenburg Städte', 'Aschaffenburg', 'Bad Kissingen', 'Haßberge', 'Kitzingen', 'Main-Spessart', 'Miltenberg', 'Rhön-Grabfeld', 'Schweinfurt Städte', 'Schweinfurt', 'Würzburg Städte', 'Würzburg', 'Berlin', 'Barnim', 'Brandenburg an der Havel Städte', 'Cottbus Städte', 'Dahme-Spreewald', 'Elbe-Elster', 'Frankfurt am Oder Städte', 'Havelland', 'Märkisch-Oderland', 'Oberhavel', 'Oberspreewald-Lausitz', 'Oder-Spree', 'Ostprignitz-Ruppin', 'Potsdam-Mittelmark', 'Potsdam Städte', 'Prignitz', 'Spree-Neiße', 'Teltow-Fläming', 'Uckermark', 'Bremen Städte', 'Hamburg Städte', 'Bergstraße', 'Darmstadt-Dieburg', 'Darmstadt Städte', 'Frankfurt am Main Städte', 'Groß-Gerau', 'Hochtaunuskreis', 'Main-Kinzig-Kreis', 'Main-Taunus-Kreis Städte', 'Odenwaldkreis', 'Offenbach am Main Städte', 'Offenbach', 'Rheingau-Taunus-Kreis', 'Wetteraukreis', 'Wiesbaden Städte', 'Gießen', 'Lahn-Dill-Kreis', 'Limburg-Weilburg', 'Marburg-Biedenkopf', 'Vogelsbergkreis', 'Fulda', 'Hersfeld-Rotenburg', 'Kassel Städte', 'Kassel', 'Schwalm-Eder-Kreis', 'Waldeck-Frankenberg', 'Werra-Meißner-Kreis', 'Bad Doberan', 'Demmin', 'Greifswald Städte', 'Güstrow', 'Ludwigslust', 'Mecklenburg-Strelitz', 'Müritz', 'Neubrandenburg Städte', 'Nordvorpommern', 'Nordwestmecklenburg', 'Ostvorpommern', 'Parchim', 'Rostock Städte', 'Rügen', 'Schwerin Städte', 'Stralsund Städte', 'Uecker-Randow', 'Wismar Städte', 'Braunschweig Städte', 'Gifhorn', 'Goslar', 'Göttingen', 'Helmstedt', 'Northeim', 'Osterode', 'Peine', 'Salzgitter Städte', 'Wolfenbüttel', 'Wolfsburg Städte', 'Diepholz', 'Hamelin-Pyrmont', 'Hanover', 'Hildesheim', 'Holzminden', 'Nienburg', 'Schaumburg', 'Celle', 'Cuxhaven', 'Harburg', 'Lüchow-Dannenberg', 'Lüneburg', 'Osterholz', 'Rotenburg', 'Soltau-Fallingbostel', 'Stade', 'Uelzen', 'Verden', 'Ammerland', 'Aurich', 'Cloppenburg', 'Emden Städte', 'Emsland', 'Friesland', 'Grafschaft Bentheim', 'Leer', 'Oldenburg Städte', 'Soest', 'Unna', 'Bielefeld Städte', 'Gütersloh', 'Herford', 'Höxter', 'Lippe', 'Minden-Lübbecke', 'Paderborn', 'Cleves', 'Duisburg Städte', 'Düsseldorf Städte', 'Essen Städte', 'Krefeld Städte', 'Mettmann', 'Mönchengladbach Städte', 'Mülheim Städte', 'Oberhausen Städte', 'Remscheid Städte', 'Rhein-Kreis Neuss', 'Solingen Städte', 'Viersen', 'Wesel', 'Wuppertal Städte', 'Aachen Städte', 'Aachen', 'Bonn Städte', 'Cologne Städte', 'Düren', 'Euskirchen', 'Heinsberg', 'Leverkusen Städte', 'Oberbergischer Kreis', 'Rhein-Erft-Kreis', 'Rhein-Sieg', 'Rheinisch-Bergischer Kreis', 'Borken', 'Bottrop Städte', 'Coesfeld', 'Gelsenkirchen Städte', 'Münster Städte', 'Recklinghausen', 'Steinfurt', 'Warendorf', 'Ahrweiler', 'Altenkirchen', 'Bad Kreuznach', 'Birkenfeld', 'Cochem-Zell', 'Koblenz Coblenz Städte', 'Mayen-Koblenz', 'Neuwied', 'Rhein-Hunsrück', 'Rhein-Lahn', 'Westerwaldkreis', 'Alzey-Worms', 'Bad Dürkheim', 'Donnersbergkreis', 'Frankenthal Städte', 'Germersheim', 'Kaiserslautern Städte', 'Kaiserslautern', 'Kusel', 'Landau Städte', 'Ludwigshafen Städte', 'Mainz-Bingen', 'Mainz Städte', 'Neustadt Städte', 'Rhein-Pfalz-Kreis', 'Speyer Spires Städte', 'Südliche Weinstraße', 'Südwestpfalz', 'Worms Städte', 'Zweibrücken Städte', 'Bernkastel-Wittlich', 'Bitburg-Prüm', 'Trier-Saarburg', 'Trier Städte', 'Vulkaneifel', 'Merzig-Wadern', 'Neunkirchen', 'Saarbrücken Städte', 'Saarlouis', 'Saarpfalz', 'Sankt Wendel', 'Anhalt-Zerbst', 'Bernburg', 'Bitterfeld', 'Dessau Städte', 'Köthen', 'Wittenberg', 'Aschersleben-Staßfurt', 'Burgenlandkreis', 'Halle Städte', 'Mansfelder Land', 'Merseburg-Querfurt', 'Saalkreis', 'Sangerhausen', 'Weißenfels', 'Altmarkkreis Salzwedel', 'Bördekreis', 'Halberstadt', 'Jerichower Land', 'Magdeburg Städte', 'Ohrekreis', 'Quedlinburg', 'Schönebeck', 'Stendal', 'Wernigerode', 'Annaberg', 'Aue-Schwarzenberg', 'Chemnitz Städte', 'Chemnitzer Land', 'Freiberg', 'Mittlerer Erzgebirgskreis', 'Mittweida', 'Plauen Städte', 'Stollberg', 'Vogtlandkreis', 'Zwickau Städte', 'Zwickauer Land', 'Bautzen', 'Dresden Städte', 'Görlitz Städte', 'Kamenz', 'Löbau-Zittau', 'Meißen', 'Niederschlesischer Oberlausitzkreis', 'Riesa-Großenhain', 'Sächsische Schweiz', 'Weißeritzkreis', 'Delitzsch', 'Döbeln', 'Leipzig Städte', 'Leipziger Land', 'Muldentalkreis', 'Torgau-Oschatz', 'Dithmarschen', 'Flensburg Städte', 'Kiel Städte', 'Lauenburg', 'Lübeck Städte', 'Neumünster Städte', 'Nordfriesland', 'Ostholstein', 'Pinneberg', 'Plön', 'Rendsburg-Eckernförde', 'Schleswig-Flensburg', 'Segeberg', 'Steinburg', 'Stormarn', 'Altenburger Land', 'Eichsfeld', 'Erfurt Städte', 'Gera Städte', 'Gotha', 'Greiz', 'Hildburghausen', 'Ilm-Kreis', 'Jena Städte', 'Kyffhäuserkreis', 'Nordhausen', 'Saale-Holzland', 'Saale-Orla', 'Saalfeld-Rudolstadt', 'Schmalkalden-Meiningen', 'Sömmerda', 'Sonneberg', 'Suhl Städte', 'Unstrut-Hainich', 'Wartburgkreis', 'Weimar Städte', 'Weimarer Land']
      const users = [-1, 13463279, 123456789]
      // areas
      const areasRoutes = cities.map(c => `/admin/area/${c}`)
      const usersRoutes = users.map(u => `/user/${u}`)
      callback(null, [...areasRoutes, ...usersRoutes])
    }
  }
}
