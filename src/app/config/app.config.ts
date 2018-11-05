import {InjectionToken} from '@angular/core';

export let APP_CONFIG = new InjectionToken('app.config');

export const AppConfig = {
  routes: {
    collection: 'collection',
    error404: '404'
  },
  endpoints: {
    productsBaseUrl: 'https://api.shutterstock.com',
    productsGetPath: '/v2/images/search'

  },
  snackBarDuration: 3000,
  repositoryURL: '',
  defultSHContent: '[{"id":"1","name":"You and your fellow chefs must prepare a variety of orders before the customers storm out",' +
  '"imgUrl":"https://images-na.ssl-images-amazon.com/images/I/81d5WaADUkL._AC_SL1500_.jpg","description":""},{"id":"2","name":"After waking from a 100-year slumber, Link must explore the wild to regain his memories and save Hyrule  ","imgUrl":"https://images-na.ssl-images-amazon.com/images/I/51Ox7m6-OIL.jpg","description":""},{"id":"3","name":"Experience wireless local multiplayer with up to four friends!  ' +
  '","imgUrl":"https://images-na.ssl-images-amazon.com/images/I/5106%2Bo7NWBL.jpg","description":""},{"id":"4","name":"The game also has a single player mode with ten unique acts, each with ten stages.  ","imgUrl":"https://images-na.ssl-images-amazon.com/images/I/519li%2B4i3pL.jpg","description":""},{"id":"5","name":"Explore huge 3D kingdoms filled with secrets and surprises, including costumes for Mario and lots of ways to interact with the diverse environments","imgUrl":"https://images-na.ssl-images-amazon.com/images/I/51cE%2B9FaiWL.jpg","description":""},{"id":"6","name":"Paper pals Snip and Clip must cut each other into the right shapes to overcome tricky obstacles in this updated version of the game.","imgUrl":"https://images-na.ssl-images-amazon.com/images/I/51aIvAdlpxL.jpg","description":""},{"id":"7","name":"A new Mario tennis game is bringing a new level of skill and competition to the Nintendo Switch system","imgUrl":"https://images-na.ssl-images-amazon.com/images/I/91TvX36nF-L._AC_SL1500_.jpg","description":""},{"id":"8","name":"Welcome to kawawii island, a paradise resort where friends and family can Enjoy 50+ co-op and competitive activities","imgUrl":"https://images-na.ssl-images-amazon.com/images/I/91o-u7ja9VL._AC_SL1500_.jpg","description":""},{"id":"9","name":"You move into a brand new suburb and notice your slightly odd neighbor is hiding something in his basements","imgUrl":"https://images-na.ssl-images-amazon.com/images/I/71owoBXiZ6L._AC_SL1414_.jpg","description":""},{"id":"10","name":"Discover tons of community creations and share the adventure with friends across different platforms!","imgUrl":"https://images-na.ssl-images-amazon.com/images/I/51DOsGI%2BdPL.jpg","description":""}]',
  avaliableSHContent: '[{"id":"12","name":"New weapons - New dual-wielding Splat Dualies join the action, complete with a new Dodge Roll move",' +
  '"imgUrl":"https://images-na.ssl-images-amazon.com/images/I/51pyJjc0FXL.jpg","description":""},{"id":"13","name":"Extensive Battle-Car customizations with more than 100 billion possible combinations.","imgUrl":"https://images-na.ssl-images-amazon.com/images/I/51dXGqzmdxL.jpg","description":""},{"id":"14","name":"Four lengthy episodes with outrageous landscapes, dramatic boss battles and secret surprises' +
  '","imgUrl":"https://images-na.ssl-images-amazon.com/images/I/61IfFm8YfEL.jpg","description":""},{"id":"15","name":"Over 600 items and weapons,Over 1,000 hours of gameplay,5 unique modes of play","imgUrl":"https://images-na.ssl-images-amazon.com/images/I/811ytQfzHQL._AC_SL1500_.jpg","description":""},{"id":"16","name":"There is no taking cover or stopping to regenerate health as you beat back Hell\'sraging demon hordes","imgUrl":"https://images-na.ssl-images-amazon.com/images/I/51wpYc7zMHL.jpg","description":""},{"id":"17","name":"Use motion controls to battle with melee weapons, aim your bow, or pick locks, exclusively on Nintendo Switch","imgUrl":"https://images-na.ssl-images-amazon.com/images/I/51N-r9fiMmL.jpg","description":""},{"id":"18","name":"New branching paths that lead to different areas and new playable characters, new moves, and new gameplay modes","imgUrl":"https://images-na.ssl-images-amazon.com/images/I/71kI6N9DHkL._AC_SL1280_.jpg","description":""},{"id":"19","name":"Signs of the end times draw powerful heroes from all over sanctuary to Rise up and defeat an evil Reborn","imgUrl":"https://images-na.ssl-images-amazon.com/images/I/91Uur%2BgwgdL._AC_SL1500_.jpg","description":""},{"id":"20","name":"From the creators of South Park, Trey Parker and Matt Stone, comes South Park: The Fractured but Whole",' +
  '"imgUrl":"https://images-na.ssl-images-amazon.com/images/I/81Ijh9l%2BhPL._SL1500_.jpg","description":""},{"id":"21","name":"Winner of over 50 E3 awards and nominations, including Best Strategy Game",' +
  '"imgUrl":"https://images-na.ssl-images-amazon.com/images/I/51P-Nwq2AFL.jpg","description":""}]'

};
