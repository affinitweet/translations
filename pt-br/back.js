export default {

  /* Steps */
  _st: {
    received: 'Solicitação recebida pelo servidor...',
    starting: 'Iniciando...',
    fetchingData: 'Obtendo dados...',
    fetchingTweets: 'Obtendo tweets...',
    computingData: 'Computando dados...',
    generatingImage: 'Gerando imagem...',
    uploadingMedia: 'Enviando imagem...',
    publishingTweet: 'Publicando tweet...',
    savingResults: 'Salvando resultados...',
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
      youAreNotFollowing: 'Você não está seguindo {user}...',
      notFollowingYou: '{user} não está seguindo você...',
      youFollowed: 'Você seguiu {user}: ',
      followedYou: '{user} seguiu você: ',
      dateFormat: 'em {day}/{month}/{year} às {hour}:{minute}:{second}',
      dateFormat2: 'em {day}/{month}/{year} às {hour}h',
    },
    friendships: {
      average: 'Média de amizades de',
      following: 'Você o(a) segue',
      'not-following': 'Você não o(a) segue',
      followed_by: 'Ele(a) segue você',
      'not-followed_by': 'Ele(a) não está te seguindo',
      notifications_enabled: 'Você é notificado quando ele(a) tweeta',
      'not-notifications_enabled': 'Você não é notificado quando ele(a) tweeta',
      blocking: 'Você o(a) bloqueou',
      'not-blocking': 'Você não o(a) bloqueou',
      blocked_by: 'Ele(a) te bloqueou',
      'not-blocked_by': 'Ele(a) não te bloqueou',
      muting: 'Você o(a) silenciou',
      'not-muting': 'Você não o(a) silenciou',
      want_retweets: 'Você vê os retweets dele(a)',
      'not-want_retweets': 'Você não vê os retweets dele(a)',
      marked_spam: 'Você o(a) marcou como spam',
      'not-marked_spam': 'Você não o(a) marcou como spam',
    },
    'tweet-rate': {
      average: '{user} tweets em média...',
      tweetsPerDay: '{count} vezes por dia',
    },
    'common-friends': {
      friendsRemaining: '... e {count} outros amigos!',
      noFriends: 'Nenhum amigo em comum...',
      commonFriends: 'Tenho {count} amigos em comum com {user}!',
      noCommonFriends: 'Não tenho amigos em comum com {user}...',
    },
    valentine: 'Seu Valentine de {year} é',
    'stolen-kiss': 'Seu Stolen Kiss é',
    'hidden-twin': 'Seu Hidden Twin é',
    'secret-crush': 'Seu Secret Crush é',
    'may-day': 'Eu dou um Lírio-do-Vale 💐 para',
    'halloween-duo': 'Sua dupla de Halloween é',
    'new-years-kiss': 'O meu beijo de Ano Novo é',
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
    valentine: 'Este ano você é meu(minha) {user}! ❤️\nE você, quem será seu?',
    'twitter-activity': "Here's my account statistics from the past {days} days. Do you have better interactions?", // TODO
    'first-follower': 'I just discovered my first follower on Twitter, it\'s {user} and they followed me {date}!\nWho\'s your first follower?', // TODO
    'first-following': 'I just discovered my first following on Twitter, it\'s {user} and I followed them {date}!\nWho\'s your first following?', // TODO
    'secret-crush': '{user} te ama secretamente! 😳\nQuem te ama secretamente?',
    'hidden-twin': '{user} é o meu gêmeo escondido 😱\nDescubra quem é o seu!',
    'stolen-kiss': '{user} te beijaria ao virar da esquina... 😏\nE você, quem o faria?',
    'may-day': '{user}, eu te dou meu melhor buquê de lírio-do-vale! 💐\nA quem você dará o seu?',
    'halloween-duo': 'Eu nem sequer tenho que me vestir este ano para ser assustador, estou com {user}! 🎃👻\nE você, com quem vai assustar mais?',
    'new-years-kiss': 'Estou preparando meu último beijo do ano e o primeiro do ano seguinte para você {user} 😘💕\nE você, quem vai beijar à meia-noite?',
  },

}
