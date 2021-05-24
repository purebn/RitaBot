// -----------------
// Global variables
// -----------------

// Codebeat:disable[LOC,ABC,BLOCK_NESTING,ARITY]

const time = {
   "long": 60000,
   "short": 20000
};

// ------------------
// Update Bot Status
// ------------------

// eslint-disable-next-line consistent-return
module.exports = function run (bot, status, config, writable = true)
{

   const activevar = [
      `State Of Survival | !t help`,
      `for messages to translate | Hi Arrow`,
      "messages to translate | <3 RR",
      `!t help commands | BOW 4 Life`,
      "translations | BOW 4 Life",
      `v.${config.version} | BOW Server Translator`,
      `!t help modules | BOW Server Translator`
   ];
   const statusvar = [
      "PLAYING",
      "WATCHING",
      "LISTENING",
      "WATCHING",
      "WATCHING",
      "PLAYING",
      "WATCHING"
   ];
   const statusMap =
   {
      "busy" ()
      {

         bot.setPresence({
            "status": "dnd"
         });

      },

      "free" ()
      {

         bot.setPresence({
            "status": "online"
         });

      },

      "online" ()
      {

         // Run this on stratup
         bot.setPresence({
            "activities": {
               "name": activevar[0]
            },
            "status": "online"

         });
         setInterval(
            // Every 20 seconds generate a random number and update status to that
            function res ()
            {

               const actID = Math.floor(Math.random() * 6);
               bot.setPresence({

                  "activities": {
                     "name": activevar[actID],
                     "type": statusvar[actID]
                  },
                  "status": "online"
               });

            },
            time.short
         );

      }
   };

   if (Object.prototype.hasOwnProperty.call(
      status && statusMap,
      status
   ) && writable)
   {

      return statusMap[status]();

   }

};
