et {a,m,d,p,l} = allPokemons();
let battle = (atk, def) => {
   /**
      receive an atk and defender
      get a random number
      let that select atk move
      move would affect def hp
      return atk move + def new hp
      //math
      what to return?
    */
   console.log(`${atk.name} is attacking ${def.name}!`);
   let atkHP = atk.hp;
   let defHP = def.hp;
   //while(atkHP > 0 || defHP > 0){
      let useMove = getRandomInt(4);
      defHP = defHP - atk.moves[useMove].power;
      console.log(`${atk.name} used ${atk.moves[useMove].name}`);
      console.log(`${def.name}'s hp is now ` + (defHP));
      defHP = defHP - atk.moves[useMove].power;
      console.log(`${def.name}'s hp is now ` + (defHP));
   //}
}
battle(a,m);
function getRandomInt(max) {
   return Math.floor(Math.random() * max);
 }
function allPokemons() {
   return {
       a: {
         name: 'Arcanine',
         hp: 100,
         fainted: false,
         type: 'fire',
         moves: [
           { name: 'Flamethrower', power: 35, pp: 4 },
           { name: 'Bite', power: 20, pp: 10 },
           { name: 'Extreme Speed', power: 30, pp: 5 },
           { name: 'Fire Blast', power: 40, pp: 3 },
         ],
       },
       m:
       {
         name: 'Mew',
         hp: 80,
         fainted: false,
         type: 'psychic',
         moves: [
           { name: 'Psychic', power: 40, pp: 5 },
           { name: 'Aura Sphere', power: 35, pp: 8 },
           { name: 'Shadow Ball', power: 30, pp: 10 },
           { name: 'Transform', power: 0, pp: 5 },
         ],
       },
       d: {
         name: 'Dragonite',
         hp: 120,
         fainted: false,
         type: 'dragon',
         moves: [
           { name: 'Dragon Claw', power: 45, pp: 4 },
           { name: 'Fly', power: 30, pp: 5 },
           { name: 'Thunder Punch', power: 35, pp: 8 },
           { name: 'Outrage', power: 50, pp: 3 },
         ],
       },
       l: {
         name: 'Lapras',
         hp: 110,
         fainted: false,
         type: 'water',
         moves: [
           { name: 'Surf', power: 40, pp: 5 },
           { name: 'Ice Beam', power: 35, pp: 8 },
           { name: 'Hydro Pump', power: 50, pp: 3 },
           { name: 'Sing', power: 0, pp: 15 },
         ],
       },
       p:{
           name: 'Pikachu',
           hp: 20,
           fainted: false,
           type: 'electric',
           moves: [
             { name: 'Thunderbolt', power: 40, pp: 5 },
             { name: 'Quick Attack', power: 20, pp: 10 },
             { name: 'Electro Ball', power: 35, pp: 8 },
             { name: 'Iron Tail', power: 30, pp: 8 },
           ],
         },
   };
}