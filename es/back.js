export default {

  /* Steps */
  _st: {
    received: 'Solicitud recibida por el servidor...',
    starting: 'Comenzando...',
    fetchingData: 'Recuperando datos...',
    fetchingTweets: 'Recuperando tuits...',
    computingData: 'Analizando datos...',
    generatingImage: 'Generando imagen...',
    uploadingMedia: 'Cargando imagen...',
    publishingTweet: 'Publicando tuit...',
    savingResults: 'Guardando resultados...',
  },

  /* Features */
  _ft: {
    'twitter-activity': {
      basedOnLastDays: 'Based on the last {days} days...', // TODO
      countingTweets: '... and counting {count} tweets:', // TODO
      interactionsReceived: 'Interactions received', // TODO
      last30Days: '*: last 30 days', // TODO
      tweetingHours: 'Tweeting hours', // TODO
      tweetRepartition: 'Tweet repartition', // TODO
    },
    'first-follower': {
      yourFirstFollowerIs: 'Your first follower is', // TODO
      dateFormat: 'on {month}/{day}/{year} at {hour}:{minute}:{second}', // TODO
    },
    'first-following': {
      yourFirstFollowingIs: 'Your first following is', // TODO
      dateFormat: 'on {month}/{day}/{year} at {hour}:{minute}:{second}', // TODO
    },
    'first-to-follow': {
      youAreNotFollowing: 'Usted no está siguiendo a {user}...',
      notFollowingYou: '{user} no lo está siguiendo...',
      youFollowed: 'Usted siguió a {user}: ',
      followedYou: '{user} lo siguió: ',
      dateFormat: 'el {day}/{month}/{year} a las {hour}:{minute}:{second}',
      dateFormat2: 'el {day}/{month}/{year} a las {hour}h',
    },
    friendships: {
      average: 'Amistades promedio de',
      following: 'Usted lo está siguiendo',
      'not-following': 'Usted no lo está siguiendo',
      followed_by: 'Él lo sigue',
      'not-followed_by': 'Él no lo sigue',
      notifications_enabled: 'Usted es notificado cuando él tuitea',
      'not-notifications_enabled': 'Usted no es notificado cuando él tuitea',
      blocking: 'Usted lo bloqueó',
      'not-blocking': 'Usted no lo bloqueó',
      blocked_by: 'Él lo bloqueó',
      'not-blocked_by': 'Él no lo bloqueó',
      muting: 'Usted lo silenció',
      'not-muting': 'Usted no lo silenció',
      want_retweets: 'Usted ve sus retuits',
      'not-want_retweets': 'Usted no ve sus retuits',
      marked_spam: 'Usted lo marcó como spam',
      'not-marked_spam': 'Usted no lo marcó como spam',
    },
    'tweet-rate': {
      average: '{user} tuitea en promedio...',
      tweetsPerDay: '{count} veces al día',
    },
    'common-friends': {
      friendsRemaining: '... y {count} otros amigos!',
      noFriends: 'Sin amigos en común...',
      commonFriends: 'Tengo {count} amigos en común con {user}!',
      noCommonFriends: 'No tengo amigos en común con {user}...',
    },
    valentine: 'Su Valentine {year} es',
    'stolen-kiss': 'Su Stolen Kiss es',
    'hidden-twin': 'Su Hidden Twin es',
    'secret-crush': 'Su Secret Crush es',
    'may-day': 'Le doy un Lily-del-Valle 💐 a',
    'halloween-duo': 'Su Halloween Duo es',
    'new-years-kiss': "My New Year's Kiss is",
  },

  /* Tweet content */
  _tw: {
    'first-to-follow': '{text}',
    friendships: '{text}',
    'top-friends': '{users}',
    'famous-followers': '{users}',
    'common-friends': '{text}',
    'tweet-rate': '{text}',
    'emoji-mood': '{emojis}',
    valentine: 'Este año eres mío {user}! ❤️\nY tú, ¿quién será el tuyo?',
    'twitter-activity': "Here's my account statistics from the past {days} days. Do you have better interactions?", // TODO
    'first-follower': 'I just discovered my first follower on Twitter, it\'s {user} and they followed me {date}!\nWho\'s your first follower?', // TODO
    'first-following': 'I just discovered my first following on Twitter, it\'s {user} and I followed them {date}!\nWho\'s your first following?', // TODO
    'secret-crush': '{user} te ama en secreto! 😳\n¿Quién te ama a ti en secreto?',
    'hidden-twin': '{user} es mi gemelo secreto 😱\n¡Descubre quién es el tuyo!',
    'stolen-kiss': '{user} te besaría a la vuelta de la esquina... 😏\nY a ti, ¿quién te besaría?',
    'may-day': '{user}, ¡Te doy mi mejor ramo de lily-del-valle! 💐\n¿A quién le darás el tuyo?',
    'halloween-duo': 'Ni siquiera tengo que disfrazarme este año para dar miedo, estoy con {user}! 🎃👻\nY tú, ¿con quién vas a asustar más?',
    'new-years-kiss': "I'm preparing my best last year kiss and first of the next year {user} 😘💕\nAnd you, who will you kiss at midnight?",
  },

}
