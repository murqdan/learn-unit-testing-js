exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('items')
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('items').insert([
        {
          id: 1,
          title: 'SpaceX Dragon',
          description:
            "Dragon is a reusable cargo spacecraft developed by SpaceX, an American private space transportation company. Dragon is launched into orbit by the company's Falcon 9 two-stage-to-orbit launch vehicle.",
          imgurl: './img/SpaceX/16581815487_9e81c03b89_k.jpg'
        },
        {
          id: 2,
          title: 'Falcon Heavy',
          description:
            'Falcon Heavy is the most powerful operational rocket in the world by a factor of two. With the ability to lift into orbit nearly 64 metric tons (141,000 lb)---a mass greater than a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost. Falcon Heavy draws upon the proven heritage and reliability of Falcon 9.',
          imgurl: './img/SpaceX/16763231836_ed07079cc1_k.jpg'
        },
        {
          id: 3,
          title: 'Falcon 9',
          description:
            'Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit. Falcon 9 is the first orbital class rocket capable of reflight. SpaceX believes rocket reusability is the key breakthrough needed to reduce the cost of access to space and enable people to live on other planets. Falcon 9 was designed from the ground up for maximum reliability. Falcon 9’s simple two-stage configuration minimizes the number of separation events -- and with nine first-stage engines, it can safely complete its mission even in the event of an engine shutdown.',
          imgurl: './img/SpaceX/24585667074_fa5239e138_k.jpg'
        }
      ]);
    });
};
