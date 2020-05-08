export default {

  /* Steps */
  _st: {
    received: 'Requête reçue par le serveur...',
    starting: 'Initialisation...',
    fetchingData: 'Récupération des données...',
    fetchingTweets: 'Récupération des tweets...',
    computingData: 'Analyse des données...',
    generatingImage: "Génération de l'image...",
    uploadingMedia: "Envoi de l'image...",
    publishingTweet: 'Publication du tweet...',
    savingResults: 'Sauvegarde des résultats...',
  },

  /* Features */
  _ft: {
    'first-to-follow': {
      youAreNotFollowing: 'Tu ne suis pas {user}...',
      notFollowingYou: '{user} ne te suis pas...',
      youFollowed: 'Tu as suivi {user} :',
      followedYou: '{user} t\'a suivi :',
      dateFormat: 'à {hour}:{minute}:{second} le {day}/{month}/{year}',
      dateFormat2: 'le {day}/{month}/{year} à {hour}h',
    },
    friendships: {
      average: 'Moyenne des amitiés Twitter de',
      following: 'Tu le/la suis',
      'not-following': 'Tu ne le/la suis pas',
      followed_by: 'Il/elle te suit',
      'not-followed_by': 'Il/elle ne te suit pas',
      notifications_enabled: 'Tu es notifié.e quand il/elle tweete',
      'not-notifications_enabled': "Tu n'es pas notifié.e quand il/elle tweete",
      blocking: "Tu l'as bloqué.e",
      'not-blocking': "Tu ne l'as pas bloqué.e",
      blocked_by: 'Il/elle t\'a bloqué.e',
      'not-blocked_by': 'Il/elle ne t\'a pas bloqué.e',
      muting: "Tu l'as mis.e en sourdine",
      'not-muting': "Tu ne l'as pas mis.e en sourdine",
      want_retweets: 'Tu vois ses retweets',
      'not-want_retweets': 'Tu as caché ses retweets',
      marked_spam: "Tu l'as marqué.e comme spam",
      'not-marked_spam': "Tu ne l'as pas marqué.e comme spam",
    },
    'tweet-rate': {
      average: '{user} tweete en moyenne...',
      tweetsPerDay: '{count} fois par jour',
    },
    'common-friends': {
      friendsRemaining: '... et {count} autres amis !',
      noFriends: 'Aucun ami en commun...',
      commonFriends: 'Je partage {count} amis en commun avec {user} !',
      noCommonFriends: 'Je ne partage aucun ami en commun avec {user}...',
    },
    valentine: 'Mon Valentine {year} est',
    'stolen-kiss': 'Mon Stolen Kiss est',
    'hidden-twin': 'Mon Hidden Twin est',
    'secret-crush': 'Mon Secret Crush est',
    'may-day': "J'offre mon muguet 💐 à",
    'halloween-duo': 'Mon Halloween Duo est',
    'new-years-kiss': "Mon New Year's Kiss est",
  },

  /* Tweet content */
  _tw: {
    'first-to-follow': '#Affinitweet First To Follow\n{text}\nvia affinitweet.com/first-to-follow',
    friendships: '#Affinitweet Friendships\n{text}\nvia https://affinitweet.com/friendships',
    'top-friends': '#Affinitweet Top Friends\n{users}\nvia https://affinitweet.com/top-friends',
    'famous-followers': '#Affinitweet Famous Followers\n{users}\nvia https://affinitweet.com/famous-followers',
    'common-friends': '#Affinitweet Common Friends\n{text}\nhttps://affinitweet.com/common-friends',
    'tweet-rate': '#Affinitweet Tweet Rate\n\nhttps://affinitweet.com/tweet-rate',
    'emoji-mood': '#Affinitweet Emoji Mood\n{emojis}\nvia https://affinitweet.com/emoji-mood',
    valentine: '#Affinitweet Valentine\nCette année tu es à moi {user} ! ❤️\nEt toi, avec qui te retrouveras-tu ?\nvia https://affinitweet.com/valentine',
    'secret-crush': "#Affinitweet Secret Crush\n{user} t'aime secrètement ! 😳\nDécouvre qui t'aime en secret !\nvia https://affinitweet.com/secret-crush",
    'hidden-twin': '#Affinitweet Hidden Twin\n{user} est mon jumeau caché 😱\nDécouvre vite qui est le tien !\nvia https://affinitweet.com/hidden-twin',
    'stolen-kiss': "#Affinitweet Stolen Kiss\n{user} t'embrasserait bien au coin d'une rue... 😏\nEt toi, qui t'embrasserait ?\nvia https://affinitweet.com/stolen-kiss",
    'may-day': "#Affinitweet May Day\n{user}, je t'offre mon plus beau bouquet de muguet cette année ! 💐\nÀ qui offriras-tu le tien ?\nvia https://affinitweet.com/may-day",
    'halloween-duo': '#Affinitweet Halloween Duo\nMême pas besoin de me déguiser cette année pour faire peur, je suis avec {user} ! 🎃👻\nEt toi, avec qui seras-tu ?\nvia https://affinitweet.com/halloween-duo',
    'new-years-kiss': "#Affinitweet New Year's Kiss\nJe te prépare mon dernier baiser de l'année et le premier de l'année suivante {user} !🙈😍\nEt toi, qui vas-tu embrasser à minuit ?\nvia https://affinitweet.com/new-years-kiss",
  },

}
