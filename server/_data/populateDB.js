/* eslint-disable */
export default function populateDB(r) {
  r.table('articles')
    .delete()
    .run()
    .then((result) => {
      console.log(result);
      r.table('articles')
      .insert(data)
      .run()
      .then((result) => {
        console.log(result);
      })
      .error((err) => {
        console.log(err);
      });
    })
    .error((err) => {
      console.log(err);
    });
}

const data = [
  { title: "EU-Swiss share trading row: What does it mean?", topics: [1], country: "United States" },
  { title: "US-Iran tensions: How social media reacted", topics: [1], country: "United States" },
  { title: "Marianne Williamson: Presidential hopeful winning Reddit votes", topics: [1], country: "United States" },
  { title: "'My struggle transcends race'", topics: [1], country: "United States" },
  { title: "Sudan crisis: New sense of hope for young revolutionaries", topics: [1], country: "United States" },
  { title: "Japan urges UK to avoid no-deal Brexit", topics: [1], country: "United Kingdom" },
  { title: "United Kingdom profile - Media", topics: [1], country: "United Kingdom" },
  { title: "Nazanin Zaghari-Ratcliffe ends Iran hunger strike after 15 days", topics: [1], country: "United Kingdom" },
  { title: "New Edinburgh Castle governor is Robert the Bruce descendant", topics: [1], country: "United Kingdom" },
  { title: "Willie Frazer, founder of Families Acting for Innocent Relatives, dies", topics: [1], country: "United Kingdom" },
  { title: "'Victim fashion': Netherlands rail defends controversial campaign amid backlash", topics: [1], country: "Netherlands" },
  { title: "Holocaust: Dutch rail firm NS confirms compensation", topics: [1], country: "Netherlands" },
  { title: "Punk band Crows has 'unique' guitar stolen from van", topics: [1], country: "Netherlands" },
  { title: "Italy migrant boat: Rescue captain accused of trying to sink police boat", topics: [1], country: "Netherlands" },
  { title: "Leicester father expects 'no justice' over MH17 crash", topics: [1], country: "Netherlands" },
  { title: "Ursula von der Leyen: Merkel ally nominated for EU top job", topics: [1], country: "Germany" },
  { title: "Germany's far-right AfD party fails to win first mayor", topics: [1], country: "Germany" },
  { title: "Economic clouds gather over Germany", topics: [1], country: "Germany" },
  { title: "Angela Merkel: Germany's shrewd political survivor", topics: [1], country: "Germany" },
  { title: "Germany's Merkel vows to carry on despite coalition setback", topics: [1], country: "Germany" },
  { title: "George Osborne and wife Frances announce divorce", topics: [1], country: "France" },
  { title: "Climate change: Heatwave made 'at least' five times more likely by warming", topics: [1], country: "France" },
  { title: "D-Day anniversary events in northern France", topics: [1], country: "France" },
  { title: "Prehistoric stone engraved with horses found in France", topics: [1], country: "France" },
  { title: "France jails imam over Channel migrant crossings", topics: [1], country: "France" },
  { title: "Ukraine fury as Russia gets back Council of Europe voting rights", topics: [1], country: "Russia" },
  { title: "Facebook: Nick Clegg says 'no evidence' Russia influenced Brexit", topics: [1], country: "Russia" },
  { title: "Russia suspends Georgia flights after violent clashes", topics: [1], country: "Russia" },
  { title: "Russia and Putin: Is president's popularity in decline?", topics: [1], country: "Russia" },
  { title: "MH17 crash: Putin says Russia 'absolutely disagrees' with evidence", topics: [1], country: "Russia" },
  { title: "Trump offers to help Canada in rift with China", topics: [1], country: "China" },
  { title: "Searching for truth in China's Uighur 're-education' camps", topics: [1], country: "China" },
  { title: "Faith in ruins: China's vanishing beards and mosques", topics: [1], country: "China" },
  { title: "Xi in North Korea: Kim hails 'invincible' ties with China", topics: [1], country: "China" },
  { title: "Apple warns Trump that more China tariffs will help rivals", topics: [1], country: "China" },
  { title: "India elephants' 1,900-mile train journey suspended after protest", topics: [1], country: "India" },
  { title: "Did the world's tallest statue bring development to India?", topics: [1], country: "India" },
  { title: "Bihar encephalitis deaths reveal cracks in India healthcare", topics: [1], country: "India" },
  { title: "India tent collapse: Desperate search for survivors", topics: [1], country: "India" },
  { title: "Jharkhand: Arrests over lynching of India Muslim man", topics: [1], country: "India" },
  { title: "Trump reveals Mexico migrant plan by waving document around", topics: [1], country: "Mexico" },
  { title: "Mexico says sale of presidential plane will curb illegal migration", topics: [1], country: "Mexico" },
  { title: "Mexico to deploy forces on Guatemala border", topics: [1], country: "Mexico" },
  { title: "Mexico 'has 45 days to curb migrant flow to US'", topics: [1], country: "Mexico" },
  { title: "US Border Patrol investigate ‘disturbing’ secret Facebook group", topics: [1], country: "Mexico" },
  { title: "'Football pitch' of Amazon forest lost every minute", topics: [1], country: "Brazil" },
  { title: "Neymar gives statement to police in Brazil amid rape allegation", topics: [1], country: "Brazil" },
  { title: "What's gone wrong with Brazil's economy?", topics: [1], country: "Brazil" },
  { title: "Brazil economy contracts for the first time since 2016", topics: [1], country: "Brazil" },
  { title: "Jair Bolsonaro: Man who stabbed Brazil's leader is 'mentally ill'", topics: [1], country: "Brazil" },
];
