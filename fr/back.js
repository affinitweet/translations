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
      youAreNotFollowing: 'Vous ne suivez pas {user}...',
      notFollowingYou: '{user} ne vous suit pas...',
      youFollowed: 'Vous avez suivi {user} :',
      followedYou: '{user} vous a suivi :',
      dateFormat: 'à {hour}:{minute}:{second} le {day}/{month}/{year}',
      dateFormat2: 'le {day}/{month}/{year} à {hour}h',
    },
    friendships: {
      average: 'Moyenne des amitiés Twitter de',
      following: 'Vous le suivez',
      'not-following': 'Vous ne le suivez pas',
      followed_by: 'Il vous suit',
      'not-followed_by': 'Il ne vous suit pas',
      notifications_enabled: 'Vous êtes notifié quand il tweete',
      'not-notifications_enabled': "Vous n'êtes pas notifié quand il tweete",
      blocking: "Vous l'avez bloqué",
      'not-blocking': "Vous ne l'avez pas bloqué",
      blocked_by: 'Il vous a bloqué',
      'not-blocked_by': 'Il ne vous a pas bloqué',
      muting: "Vous l'avez mis en sourdine",
      'not-muting': "Vous ne l'avez pas mis en sourdine",
      want_retweets: 'Vous voyez ses retweets',
      'not-want_retweets': 'Vous avez caché ses retweets',
      marked_spam: "Vous l'avez marqué comme spam",
      'not-marked_spam': "Vous ne l'avez pas marqué comme spam",
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
