export default {

  /* Layouts */
  _lt: {

    default: {
      cookiesBanner: 'Usamos cookies 🍪 para proporcionar la mejor experiencia. Al continuar utilizando nuestro sitio web, usted acepta nuestra política de cookies. {button}',
      readMore: 'Leer más...',
    },

  },

  /* Common */
  _cm: {
    lastRevision: 'Última revisión:',
    contactUs: 'Contáctanos',
    followUs: 'Síguenos',
    reviewUs: 'Denos una reseña',
    close: 'Close', // TODO
    cancel: 'Cancel', // TODO
  },

  /* Languages */
  _lg: {
    french: 'Francés',
    english: 'Inglés',
    polish: 'Polaco',
    spanish: 'Español',
    swedish: 'Swedish', // TODO
    turkish: 'Turco',
    indonesian: 'Indonesian',
    portuguese: 'Portugués',
    simplifiedChinese: 'Chino Simplificado',
    traditionalChinese: 'Chino Tradicional',
    dutch: 'Holandés',
    german: 'Alemán',
  },

  /* Pluralization */
  _pl: {
    seconds: 'segundo | segundo | segundos',
    features: 'feature | feature | features', // TODO
    results: 'result | result | results', // TODO
  },

  /* Components */
  _cp: {

    /* Header component */
    header: {
      logIn: 'Log in', // TODO
      helloYou: 'Hello {username} 👋🏻', // TODO
      myAccount: 'Mi cuenta',
      switchAccount: 'Cambiar cuenta',
      logout: 'Cerrar sesión',
    },

    /* Footer component */
    footer: {
      madeWithLove: 'Affinitweet es una plataforma de estadísticas y entretenimiento basada en Twitter creada en 2015 con ❤️ en Francia.',
      allRightsReserved: 'Todos los derechos reservados.',
      stripeClimate: '1% of our revenue is donated to CO₂ reduction initiatives.', // TODO
      about: 'Sobre nosotros',
      changelog: 'Actualizaciones',
      legal: 'Notas legales',
      partners: 'Socios',
    },

    stateButton: {
      hold: 'Hold to confirm', // TODO
      submit: 'Click to confirm', // TODO
      loading: 'Action in process...', // TODO
      cancel: 'Cancel', // TODO
    },

    clearHistory: {
      title: 'Clear history', // TODO
      description: 'By cleaning up your history, all information and images of your currently saved results will be deleted.', // TODO
      description2: 'You won\'t be able to see your previous results after this cleaning, do you really want to perform this action?', // TODO
      holdButton: 'Hold to clear', // TODO
      loadingButton: 'Clearing history...', // TODO
      successModal: 'Your history has been cleared.', // TODO
    },

    deleteAccount: {
      title: 'Delete account', // TODO
      description: 'Did something go wrong? Tell us on our Twitter account so we can improve!', // TODO
      description2: 'By deleting your account, all data about you will be deleted, including your history. No data will be kept and you will be automatically logged out of Affinitweet.', // TODO
      description3: 'You will not be able to retrieve your current account after this deletion, do you really want to perform this action?', // TODO
      holdButton: 'Hold to delete', // TODO
      loadingButton: 'Deleting account...', // TODO
      successModal: 'Your account has been deleted.', // TODO
    },

    twitterDM: {
      startWritingToPreview: 'Start writing to preview your content here!', // TODO
      now: 'Now', // TODO
    },

    welcomeMessage: {
      creationDate: 'Created {date} with {source}', // TODO
      soon: 'soon', // TODO
      draft: 'Draft', // TODO
      inactive: 'Inactive', // TODO
      active: 'Active', // TODO
      submit: 'Submit', // TODO
      cancel: 'Cancel', // TODO
      edit: 'Edit', // TODO
      enable: 'Enable', // TODO
      disable: 'Disable', // TODO
      delete: 'Delete', // TODO
      writeContent: 'Write the content of your message', // TODO
      writeContentPlaceholder: 'Write your Welcome Message here...', // TODO
      addOptionalMedia: 'Add a media (optionnal)', // TODO
      filePlaceholder: 'Drag & drop a media or click here 🖼', // TODO
      selectMessageType: 'Select the type of message', // TODO
      classic: 'Classic', // TODO
      button: 'Buttons', // TODO
      buttonLabelPlaceholder: 'Label', // TODO
      buttonURLPlaceholder: 'https://...', // TODO
      quickReply: 'Quick Reply', // TODO
      quickReplyPlaceholder: 'Label', // TODO
      quickReplyDescriptionPlaceholder: 'Description', // TODO
      previewResult: 'Preview your Welcome Message in real-time', // TODO
      confirmDeleting: 'Are you sure you want to delete this Welcome Message?', // TODO
      confirmEnabling: 'Are you sure you want to enable this Welcome Message? It will disable the other one currently active.', // TODO
      confirmDisabling: 'Are you sure you want to disable this Welcome Message ', // TODO
    },

    welcomeMessageEditor: {
      twitterDocumentation: "What's a Welcome Message ? (Twitter)", // TODO
      helpdeskDocumentation: 'How does the Welcome Message Editor work?', // TODO
      fetchingWelcomeMessages: 'Fetching Welcome Messages...', // TODO
      addWelcomeMessage: 'Add a Welcome Message', // TODO
    },

    deepLinkGenerator: {
      twitterDocumentation: "What's a Deep Link ? (Twitter)", // TODO
      helpdeskDocumentation: 'How does the Deep Link Generator work?', // TODO
      inputPlaceholder: 'Write the content that will be pre-filled to the user!', // TODO
      attachWelcomeMessage: 'Attach a Welcome Message', // TODO
      youDontHaveWelcomeMessageYet: "You don't have any Welcome Message yet.", // TODO
      createNewWelcomeMessage: 'Create a new Welcome Message', // TODO
      copyLink: 'Copy link', // TODO
      copied: 'Copied', // TODO
      generatedLinkWillBeHere: 'The link to add to the tweet will be generated here.', // TODO
    },

    idUsernameConverter: {
      helpdeskDocumentation: 'How does the ID <> Username Converter work?', // TODO
      entryFormat: 'Entry format', // TODO
      inputPlaceholder: 'Write or paste one or more IDs/usernames here!', // TODO
      copied: 'Copied', // TODO
      converting: 'Converting...', // TODO
      noResult: 'No result.', // TODO
      errorOccured: 'An error occured.', // TODO
      viewProfileOnTwitter: 'View profile on Twitter', // TODO
    },

    friendsFollowersManager: {
      helpdeskDocumentation: 'How does the Friends/Followers Manager work?', // TODO
      lastUpdate: 'Last update {date}', // TODO
      updateButton: 'Update', // TODO
      all: 'All', // TODO
      followers: 'Followers', // TODO
      following: 'Following', // TODO
      mutuals: 'Mutuals', // TODO
      filters: {
        title: 'Filters', // TODO
        protected: 'Private accounts', // TODO
        verified: 'Verified accounts', // TODO
      },
      search: 'Search...', // TODO
      fetching: 'Fetching data...', // TODO
      noResults: 'Aucun résultat ne correspond à ta recherche, essaie autrement !', // TODO
      name: 'Name', // TODO
      relationship: 'Relationship', // TODO
      tweets: 'Tweets', // TODO
      registration: 'Registration', // TODO
      showMore: 'Show {step} more {results} ({currentShowed}/{totalResults})', // TODO
      screenTooSmall: 'Screen too small', // TODO
      screenTooSmallDescription: "The Friends/Followers Manager is a comprehensive tool displaying a lot of data, the use on mobile was not made possible to not degrade the experience. You can try to switch to landscape mode to see if it works, if it doens't work you will have to use a larger screen size 😇", // TODO
    },

    managerItem: {
      followingYou: 'Following you', // TODO
      followedByYou: 'Followed', // TODO
      mutualFollow: 'Mutual follow', // TODO
      showProfile: 'Show profile', // TODO
      follow: 'Follow', // TODO
      unfollow: 'Unfollow', // TODO
      sendDM: 'Send a DM', // TODO
      block: 'Block', // TODO
      reportAndBlock: 'Report and block', // TODO
    },

  },

  /* Features */
  _ft: {

    new: 'Nuevas',
    popular: 'Populares',
    real: 'Real',
    fun: 'Diversión',
    beta: 'Beta', // TODO
    others: 'Others', // TODO

    list: {

      friendships: {
        description: 'Everything you need to know about the links between you and a user! 🙌', // TODO
        longDescription: 'Thanks to Friendships you will know how much you are friends with another user of your choice: the more blue pellets you have, the stronger the links are! Enter the Twitter nickname of the chosen person and discover your Friendships!', // TODO
      },
      'common-friends': {
        description: 'Discover your friends in common with another user! 👥', // TODO
        longDescription: 'The Common Friends allows you to discover the subscriptions/friends you have in common with another person. Do you have the same tastes, and how much?', // TODO
      },
      'top-friends': {
        description: 'Discover your best Twitter friends of late! 🤗', // TODO
        longDescription: 'The Top Friends allows you to know who your best friends are on Twitter. We establish a ranking by analyzing the information sent and received by your account. Then we count, add and sort them to generate your Top Friends!', // TODO
      },
      'famous-followers': {
        description: 'Discover the most popular people in your followers! 💅', // TODO
        longDescription: 'The Famous Followers allows you to know which people have the most followers among your followers. We collect each of your followers and their number of followers and sort them to generate your Famous Followers!', // TODO
      },
      valentine: {
        description: 'We know who your Valentine will be this year... What about you? 💏', // TODO
        longDescription: 'We keep the algorithm of this feature secret. All we can say is that we are trying to stick to reality, will our Valentine delight you... ?', // TODO
      },
      'twitter-activity': {
        description: 'Discover the summary of your activity and your Twitter statistics 📊', // TODO
        longDescription: 'Thanks to Twitter Activity, you will know when you tweet most often, how many interactions (impressions, retweets, likes, replies) you have in total and the distribution of your tweets.', // TODO
      },
      'first-follower': {
        description: 'Discover who\'s the first person who followed you on Twitter 1️⃣', // TODO
        longDescription: 'Thanks to the First Follower, you\'ll know who is your first follower and when they followed you (or the oldest one, because if you\'ve been unfollowed in the meantime, we can\'t know).', // TODO
      },
      'first-following': {
        description: 'Discover who\'s the first person you followed on Twitter 1️⃣', // TODO
        longDescription: 'Thanks to the First Following, you\'ll know who is your first following and when you followed them (or the oldest one, because if you\'ve unfollowed people in the meantime, we can\'t know).', // TODO
      },
      'secret-crush': {
        description: 'Someone loves you in secret... and hides it from you... 😳', // TODO
        longDescription: 'We keep the algorithm of this feature secret. All we can say is that your Secret Crush will impress you, good or bad?', // TODO
      },
      'hidden-twin': {
        description: 'Yes, you have a hidden twin.... who the hell is it? 🤔', // TODO
        longDescription: 'We keep the algorithm of this feature secret. All we can say is that your Hidden Twin will impress you, good or bad?', // TODO
      },
      'stolen-kiss': {
        description: 'Who wants to steal a kiss from you on a street corner? 💋', // TODO
        longDescription: 'We keep the algorithm of this feature secret. All we can say is that your Stolen Kiss will impress you, good or bad?', // TODO
      },
      'may-day': {
        description: 'Who\'s your best bouquet for this year? 💐', // TODO
        longDescription: 'We keep the algorithm of this feature secret. All we can say is that you\'re going to make someone very happy!', // TODO
      },
      'halloween-duo': {
        description: 'Who will you be most afraid with this year? 🎃👻', // TODO
        longDescription: 'We keep the algorithm of this feature secret. All we can say is that you\'re going to be scary for Halloween this year!', // TODO
      },
      'tweet-rate': {
        description: 'Compare your tweet rate with another user! 📊', // TODO
        longDescription: 'The Tweet Rate allows you to know the average number of tweets you publish per day since you registered on Twitter and compare yourself with another person! Are you the most active?', // TODO
      },
      'first-to-follow': {
        description: 'Find out when you\'ve been following a user and vice versa! 😮', // TODO
        longDescription: 'The First To Follow allows you to discover the date and time you followed another person on Twitter, and vice versa! Who followed the other first?', // TODO
      },
      'emoji-mood': {
        description: 'What are the emojis you tweet the most? 🤖', // TODO
        longDescription: 'Thanks to the Emoji Mood, you will discover which emotions you have been tweeting the most recently... Would you be willing to bet on your TOP 3?', // TODO
      },
      'new-years-kiss': {
        description: 'Who are you going to kiss this year under the mistletoe? 😘', // TODO
        longDescription: 'We keep the algorithm of this feature secret. All we can say is that you will kiss someone at midnight!', // TODO
      },

    },

  },

  /* Tools */
  _tl: {

    list: {

      'id-username-converter': { description: 'Convert IDs to usernames and vice versa in real time.' }, // TODO

      'welcome-message-editor': { description: 'Manage your Welcome Messages automatically displayed when someone wants to send you a private message.' }, // TODO

      'deep-link-generator': { description: 'Create custom links to your private messages.' }, // TODO

      'friends-followers-manager': { description: 'View and manage your following and followers easily and quickly.' }, // TODO

    },

  },

  /* Pages */
  _pg: {

    /* Welcome page */
    welcome: {
      title: 'Welcome', // TODO
      welcomeToAffinitweet: 'Welcome to Affinitweet&nbsp;&nbsp;🎉', // TODO
      helloYou: 'Hello {username}&nbsp;&nbsp;😊', // TODO
      proudToWelcomeYou: 'Hi {username}, we are delighted to make your acquaintance and happy to welcome you among our more than 10 million users!', // TODO
      onboardingCreation: 'We are delighted to have you back with us! We created this little onboarding to make sure you know everything before everyone else...', // TODO
      next: 'Next', // TODO
      littleQuestion: 'Quick question...', // TODO
      doYouWantToFollowUs: 'We update Affinitweet regularly, do you want to follow us on Twitter to find out when new features will be available?', // TODO
      iWantToFollowYou: 'I want to follow you 😊', // TODO
      iDontWantToFollowYou: 'No thanks, I\'m good for now!', // TODO
      great: 'Great&nbsp;&nbsp;🥰', // TODO
      doYouWantToEnableNotifications: 'So, while you\'re at it, do you want to be notified of our tweets so you can be the first to test our new features?', // TODO
      iWantToBeNotified: 'I also want to be notified 😇', // TODO
      iDontWantToBeNotified: 'No, I just want the tweets!', // TODO
      noProblem: 'No problem&nbsp;&nbsp;😉', // TODO
      noProblemDescription: 'After all you\'re right, we hardly know each other! Maybe next time then, we hope you\'ll have fun on Affinitweet 💜', // TODO
      nice: 'Nice&nbsp;&nbsp;🤗', // TODO
      niceDescription: 'Hop... hop... and hop!<br />That\'s it, you\'re now following us on Twitter! Thanks a lot and have fun on Affinitweet 💜', // TODO
      awesome: 'Awesome&nbsp;&nbsp;😍', // TODO
      awesomeDescription: 'Hop... hop... and hop!<br /><br />That\'s it, you\'re now following us on Twitter and notifications have been enabled! Thanks a lot and have fun on Affinitweet 💜', // TODO
      uhoh: 'Uh oh... 😕', // TODO
      uhohDescription: 'Twitter, you\'ve got a problem...<br />Unfortunately Twitter isn\'t able to make you follow us at the moment. Please <u>click on the follow button</u> to do it 😊', // TODO
      letsGo: 'Let\'s go!', // TODO
    },

    /* Home page */
    index: {
      title: 'Home', // TODO
      description: 'Your Twitter account, more fun 😎 and more pro 🧑‍💻', // TODO
      titleH1: 'Your Twitter account,', // TODO
      titleH1s: 'more {fun} {emojiFun} more {pro} {emojiPro}', // TODO
      fun: 'fun', // TODO
      pro: 'pro', // TODO
      titleH2: 'Rediscover your Twitter account through dozens of exclusive features and tools to manage your account like a pro.', // TODO
      heresWhyAffinitweetIsNumberOne: "Here's why Affinitweet is the 1{sup} choice", // TODO
      sup: 'st', // TODO
      forALotOfUsers: 'for more than 10 million users worldwide', // TODO
      generatedResults: 'Hermosos resultados generados',
      generatedResultsDescription: 'Affinitweet es conocido por sus bellas imágenes generadas, estamos utilizando las mejores herramientas para sus resultados.',
      userConsentPrivacy: 'Consentimiento del usuario y privacidad',
      userConsentPrivacyDescription: 'Todo lo que hacemos en Affinitweet con sus datos está explicado en nuestra política de privacidad, sin sorpresas, sin seguimiento automático o tuiteo automático.',
      worldFamousLeader: 'Líder mundialmente famoso',
      worldFamousLeaderDescription: 'Affinitweet se inauguró en febrero de 2015 y más de 10 millones de usuarios usan nuestros servicios en todo el mundo.',
      fastRealTimeResults: 'Resultados rápidos y en tiempo real',
      fastRealTimeResultsDescription: 'Creamos Affinitweet con las últimas tecnologías web, por lo que es lo más rápido posible con páginas de funciones en tiempo real.',
      noAdsNoVirus: 'Sin anuncios intrusivos, sin virus',
      noAdsNoVirusDescription: 'Affinitweet se ha creado solo por diversión, no hay virus y solo hay 2 anuncios en todo el sitio web (sin ventanas emergentes, sin redirecciones).',
      multilingualOpen: 'Multilingüe y abierto',
      multilingualOpenDescription: 'Affinitweet está disponible en varios idiomas y cualquiera puede contribuir y agregar el suyo propio.',
      new: 'New', // TODO
      proTools: 'Professional tools', // TODO
      toManageYourTwitterAsAPro: 'to manage your Twitter account like a pro', // TODO
      discoverOurTools: 'Discover our tools', // TODO
      whatOurUsersSaid: 'What people say about us', // TODO
      ifYouNeedMoreTrust: 'if it takes more people and opinions to convince you', // TODO
      funFeatures: 'Entertaining features', // TODO
      unlimitedAndFree: 'interesting or fun, free and without limits', // TODO
      totalUsers: '10 millones',
      totalUsersDescription: 'Los usuarios confían en nosotros y usan nuestros servicios',
      monthlyUsers: '400 000',
      monthlyUsersDescription: 'Usuarios únicos que regresan en promedio cada mes',
      totalFeatures: '36 millones',
      totalFeaturesDoneDescription: 'Funciones hechas desde nuestra apertura en 2015',
      ourFeatures: 'Our features', // TODO
      seeDetailedList: 'See detailed list', // TODO
      getInTouch: '¡Contáctenos!',
      getInTouchP1: 'Estamos disponibles en cualquier momento en nuestra cuenta de Twitter {twitterName}.',
      getInTouchP2: '¡Síganos y reciba notificaciones sobre actualizaciones y novedades!',
      getInTouchP3: 'No dude en enviarnos un tweet o mensaje directo si tiene alguna pregunta, sugerencia o error.',
      getInTouchP4: 'Para fines comerciales, puede contactarnos por correo electrónico, consulte nuestra página {pageName}.',
    },

    /* User profile page */
    profile: {
      title: 'Perfil',
      description: 'Account, settings and history of your profile.', // TODO
      joinBeta: 'Join the Beta program to test our features before they get released to public!', // TODO
      betaTerms: 'The Beta program is free of charge. Some features might not work and can be modified at anytime until they get published.', // TODO
      applyForFree: 'Apply for free', // TODO
      noThanks: 'No, thanks', // TODO
      profile: 'Perfil',
      history: 'Historial',
      preferences: 'Preferencias',
      language: 'Idioma',
      by: 'por',
      addLanguage: 'Agregar idioma...',
      contributeOnGitHub: 'contribuir en GitHub',
      account: 'Cuenta',
      followers: 'Seguidores',
      following: 'Seguidos',
      noHistory: 'Sin datos de historial.',
      autoTweet: 'Tuitear resultados',
      autoTweetDescription: 'Marque esta opción para auto-tuitear resultados. Se publicará un tuit una vez que los resultados estén listos, no más.', // TODO
      saveResults: 'Guardar resultados',
      saveResultsDescription: 'Marque esta opción para guardar sus resultados (nombre de la función + hora). Por defecto, Affinitweet no almacena sus resultados en su base de datos.', // TODO
      emojis: 'Paquete de Emojis',
      iOSemojis: 'iOS (Apple)',
      iOSemojisDescription: 'Sus resultados se generarán con Emojis de iOS.',
      androidEmojis: 'Android (Google)',
      androidEmojisDescription: 'Sus resultados se generarán con Emojis de Android.',
      clearHistory: 'Borrar historial',
      clearHistoryDescription: 'Borrar su historial de resultados Affinitweet.',
      deleteAccount: 'Eliminar cuenta',
      deleteAccountDescription: 'Eliminar su cuenta de Affinitweet, todo se perderá.',
      show: 'view', // TODO
      showMore: 'Mostrar más...',
      saved: 'Guardado',
    },

    /* Feature page */
    feature: {
      login: 'Inicie sesión para continuar...',
      startFeature: '¡Vamos!',
      betaFeature: 'This feature is currently in beta and is available for users being part of the Beta program only. You can apply for this program if you want to test this feature.', // TODO
      applyForFree: 'Apply for free', // TODO
      results: '¡Aquí están sus resultados!',
      tweetResults: 'Resultados del tuit',
      tweetingResults: 'Tuiteando...',
      requireAutoTweetDescription: '¿Desea habilitar los resultados de tuit automático? Podrá desactivar esta opción desde su perfil.',
      yesEnable: 'Sí, habilite',
      no: 'No',
      retry: '¡Reintentar!',
      doYouWantToKnowMore: 'Do you want to learn more about your Twitter account?', // TODO
      discoverOtherFeatures: 'Discover more features', // TODO
    },

    /* Features listing page */
    features: {
      title: 'Features', // TODO
      description: 'Discover all our features to know everything about your Twitter account.', // TODO
      ourFeatures: "Here's a list of all our features {theyAreAllFree} you can try in no time that generate an image based on your Twitter account! If you're looking for a particular feature, you can use the search box below to see what we have to offer.", // TODO
      theyAreAllFree: 'entirely free', // TODO
      searchFeatures: 'Search features... (ex: Top Friends, Valentine...)', // TODO
      noFeatureFound: 'Unfortunately no feature matches this search... 😔', // TODO
      resetSearch: 'Reset search', // TODO
      letsGo: 'Let\'s go!', // TODO
    },

    /* Tool page */
    tool: {
      restrictedTool: 'This tool is in preview mode because it is reserved for Pro users. The data displayed are fake in order to simulate the use of the tool.', // TODO
      becomePro: 'Become Pro', // TODO
    },

    /* Tools listing page */
    tools: {
      title: 'Tools', // TODO
      description: "Here's a list of all our tools to improve the management of your Twitter account in various ways. These tools are part of {affinitweetPro}, a one-time purchase that gives you access to all these tools and more, forever.", // TODO
    },

    /* Beta program page */
    'beta-program': {
      title: 'Beta program',
      description: 'Apply to the Beta program for free and try our beta features before they get released to the public!', // TODO
      betaProgramDescription: "The Beta program has been created to test new features before they get released to the public to be sure that they're working as expected. By being part of this program, you will be able to test them.", // TODO
      currentBetaFeatures: 'There\'s currently {amount} {features} in the Beta program:', // TODO
      noCurrentBetaFeatures: 'There\'s currently no feature in the Beta program, but more are coming soon!', // TODO
      fewThingsToKnow: 'Few things to know about the Beta program:', // TODO
      li1: "It's 100% free of charge", // TODO
      li2: "There's a limited number of places", // TODO
      li3: 'You can leave it when you want', // TODO
      li4: 'Dedicated & priority support on Twitter by DM', // TODO
      li5: 'Beta features might not work as expected', // TODO
      li6: 'Beta features can change at anytime', // TODO
      thanksForInterest: 'Thank you for your interest regarding the Beta program 💜', // TODO
      alreadyApplied: "You're already in the Beta program,<br />thank you so much for your interest 💜", // TODO
      leaveBetaProgram: 'Leave the Beta program', // TODO
      leavingTerms: "If you leave the Beta Program, you may not be able to apply again if there's no available places.", // TODO
      placesAvailable: '500 places available! 🎟', // TODO
      proPlace: 'Here\'s your privileged place 👑', // TODO
      accountEligible: 'Your account is eligible to apply for the Beta program and few places are available!', // TODO
      yourEmailAddress: 'Your email address...', // TODO
      applyForFree: 'Apply for free', // TODO
      applyTerms: 'By applying to the Beta program, you agree to receive notification & promotion emails (1 per week maximum).', // TODO
      noPlaceAvailable: 'No place available 😕', // TODO
      betaProgramFull: "Unfortunately, the Beta program is full and we can't give free access at this time, but you can still try to earn an access by using the methods in the next block!", // TODO
      keepUpdated: 'We will let you know when new free access will be available on {ourTwitterAccount}.', // TODO
      ourTwitterAccount: 'our Twitter Account', // TODO
      or: 'or', // TODO
      earnYourAccess: 'Earn your access! 🎁', // TODO
      writeReview: '#1 — Write a review about us {onTrustpilot} and send us its link on our Twitter account by DM, we will then give you an access.', // TODO
      onTrustpilot: 'on Trustpilot', // TODO
      winContest: 'or #2 — Participate in our contests on {ourTwitterAccount} to win an access, follow us and enable notifications to keep updated.', // TODO
      randomDraws: 'Each of these contests ends with a random draw made on {pickaw}, so everyone have a chance to win.', // TODO
      welcomeToTheBetaProgram: 'Welcome to the Beta program! You can now test our Beta features 😊', // TODO
      seeYouSoonBetaProgram: 'Thanks for being part of the Beta program, can\'t wait to see you soon!', // TODO
    },

    pro: {
      title: 'Affinitweet Pro', // TODO
      description: 'Access exclusive tools and much more with Affinitweet Pro! 👑', // TODO
      alreadyLookedLikeAPro: "You already looked like a Pro, but now it's official.",
      welcomeHome: 'Welcome home, {username}', // TODO
      thanksForYourTrust: 'Thank you very much for your purchase and your trust {username} !', // TODO
      accessToOurBestTools: 'You now have access to our {bestTools} and much more, so enjoy', // TODO
      bestTools: 'best tools', // TODO
      couponExpireIn: 'Expire {expireIn}', // TODO
      heresACoupon: "Here's a discount code you can share with a friend to {saveMoney} on their Affinitweet Pro (or you can use it for another Twitter account you own 😌). Fantastic, right?",
      saveMoney: 'save 20%', // TODO
      shareYourCoupon: 'But hurry up! This code is unique and is {availableSevenDays} ! 🔥', // TODO
      availableSevenDays: 'available only 7 days after your purchase', // TODO
      whatIsAffinitweetPro: 'Affinitweet Pro is an offer to meet the high demand for new features for more professional needs, in the form of {uniquePurchase}.', // TODO
      uniquePurchase: 'one-time purchase valid for life: no subscription or renewal', // TODO
      newToolsWillCome: 'Many tools are already present and new ones are under development and will continue to be developed as time goes by. By becoming a Pro, here are the advantages you will be able to enjoy:', // TODO
      proAdvantages: {
        proTools: 'Access to our Pro tools', // TODO
        proToolsDescription: 'Take advantage of all the tools we offer, and those to come.', // TODO
        betaProgram: 'Privileged access to the Beta program', // TODO
        betaProgramDescription: 'Test future features and tools in development before anyone else.', // TODO
        removedAds: 'Advertisement removal', // TODO
        removedAdsDescription: 'Navigate much faster and easier on Affinitweet without ads.', // TODO
        priorityQueue: 'Priority queue', // TODO
        priorityQueueDescription: 'Save time and generate your results in priority during busy periods.', // TODO
        unlimitedHistory: 'Unlimited and detailed history', // TODO
        unlimitedHistoryDescription: 'Preserves the results of the features without any time limit.', // TODO
        thankYouPage: 'Thank you page', // TODO
        thankYouPageDescription: "Appearance on the thank you page, because we can't thank you enough.",
      },
      resetPurchase: 'Reset my purchase', // TODO
      resetPurchaseNotice: 'By leaving Affinitweet Pro, you will lose access to your benefits. You will be able to re-purchase at any time without any problem.', // TODO
      uniquePurchaseLifetimeAccess: 'One-time purchase, life-time access', // TODO
      satisfiedOrRefundedUnder7Days: 'Satisfied or refunded under 7 days', // TODO
      loginToBecomePro: 'Log in to become Pro', // TODO
      becomePro: 'Become Pro', // TODO
      contactUs: 'Contact us', // TODO
      orVerified: 'or verified', // TODO
      seeYouSoon: 'Thanks for being part of the Pro users, do not hesitate to come back later 😊', // TODO
    },

    'thank-you': {
      title: 'Thank you', // TODO
      description: 'This page lists all the users who support us through their {affinitweetPro} purchase. There are currently {number} and we wanted to thank each of them once again publicly 💜', // TODO
      searchPlaceholder: 'Search an awesome user 😍', // TODO
    },

    /* Legal page */
    legal: {
      title: 'Notas legales',
      description: 'Information about us and cookies.', // TODO
      intro: 'De acuerdo con el artículo 6 de la ley n° 2004-575 del 21 de junio de 2004 sobre la confianza en la economía digital, los usuarios del sitio {site} están informados de la identidad de las diversas partes involucradas en su implementación y supervisión:',
      owner: 'Propietario',
      publisher: 'Gerente de publicación',
      publisherText: 'La persona responsable de la publicación es una persona natural.',
      host: 'Host',
      requestAddress: 'Dirección completa disponible a petición por correo electrónico a {email}.',
      warningCookies: 'Acerca de las cookies',
      p1: 'Una cookie es un pequeño archivo de texto enviado a su navegador a través del sitio web que está viendo. Con esta cookie, la información sobre su visita se almacena en el sitio web, como su idioma preferido y otras configuraciones. Esto puede facilitar su próxima visita a este sitio y hacerlo más útil para usted. Las cookies juegan un papel importante. Sin cookies, usar la Web podría ser mucho más frustrante.',
      t1: '¿Cuál es el marco legal aplicable?',
      p2: 'Enmendando el artículo 5(3) de la Directiva 2002/58/CE mediante la adopción de la Directiva 2009/136/CE, el legislador europeo estableció el principio de que el almacenamiento de información sobre el equipo de un usuario o el acceso a información ya almacenada solo debería llevarse a cabo con el consentimiento previo del usuario, a menos que estas acciones sean estrictamente necesarias para que el proveedor entregue un servicio expresamente solicitado por el usuario. El artículo 32-II de la ley del 6 de enero de 1978 recoge este principio.',
      t2: 'Este sitio utiliza cookies para los siguientes propósitos:',
      'l1-1': 'Para ayudarnos a reconocer su navegador y guardar las preferencias que ha configurado en sus visitas anteriores a este sitio',
      'l1-2': 'Para ayudarnos a medir y estudiar la efectividad de nuestro contenido interactivo en línea, funciones, publicidad y otras comunicaciones',
      'l1-3': 'Para supervisar los datos analíticos en el sitio, el uso que los usuarios hacen del sitio y para mejorar los servicios y el contenido de este sitio.',
      t3: '¿Cómo elimino las cookies vinculadas a mi navegador?',
      p3: 'Puede elegir desactivar las cookies en su navegador en cualquier momento siguiendo las instrucciones proporcionadas en los archivos de ayuda de su navegador. También puede configurar sus cookies directamente en la configuración de su navegador:',
    },

    /* Terms of service page */
    terms: {
      title: 'Términos de Servicio',
      description: 'Consult our general terms and conditions of use.', // TODO
      h1: 'Términos',
      p1: 'Al acceder al sitio web en {url}, acepta cumplir con estos términos de servicio, todas las leyes y normas aplicables, y acepta que es responsable del cumplimiento de las leyes locales aplicables. Si no está de acuerdo con alguno de estos términos, tiene prohibido utilizar o acceder a este sitio. Los materiales contenidos en este sitio web están protegidos por la ley aplicable de derechos de autor y marcas comerciales.',
      h2: 'Usar Licencia',
      'l1-1': 'Se concede permiso para descargar temporalmente una copia de los materiales (información o software) en el sitio web de Affinitweet para visualización transitoria personal y no comercial. Esta es la concesión de una licencia, no una transferencia de título, y bajo esta licencia usted no puede:',
      'l2-1': 'modificar o copiar los materiales;',
      'l2-2': 'usar los materiales para cualquier propósito comercial, o para cualquier exhibición pública (comercial o no comercial);',
      'l2-3': 'intentar descompilar o aplicar ingeniería inversa a cualquier software contenido en el sitio web de Affinitweet;',
      'l2-4': 'eliminar cualquier copyright u otra nota de propiedad de los materiales; o',
      'l2-5': 'transferir los materiales a otra persona o "reflejar" los materiales en cualquier otro servidor.',
      'l1-2': 'Esta licencia terminará automáticamente si usted viola alguna de estas restricciones y Affinitweet puede rescindirla en cualquier momento. Al finalizar su visualización de estos materiales o al finalizar esta licencia, debe destruir cualquier material descargado en su posesión, ya sea en formato electrónico o impreso.',
      h3: 'Aclaratoria',
      'l3-1': "Los materiales en el sitio web de Affinitweet se proporcionan 'tal cual'. Affinitweet no ofrece garantías, explícitas o implícitas, y por lo mismo rechaza y niega todas las demás garantías, incluyendo, sin limitación, las garantías implícitas o las condiciones de comerciabilidad, idoneidad para un fin determinado o la no infracción de la propiedad intelectual u otra violación de derechos.",
      'l3-2': 'Además, Affinitweet no garantiza ni hace ninguna declaración con respecto a la precisión, los resultados probables o la confiabilidad del uso de los materiales en su sitio web o, por otra parte, relacionados con dichos materiales o en cualquier sitio vinculado a este sitio.',
      h4: 'Limitaciones',
      p2: 'En ningún caso Affinitweet ni sus proveedores serán responsables de los daños (incluyendo, sin limitación, los daños por pérdida de datos o beneficios, o por interrupción del negocio) que surjan del uso o la imposibilidad de utilizar los materiales en el sitio web de Affinitweet, incluso si Affinitweet o un representante autorizado de Affinitweet ha sido notificado oralmente o por escrito de la posibilidad de tal daño. Debido a que algunas jurisdicciones no permiten limitaciones sobre garantías implícitas, o limitaciones de responsabilidad por daños consecuentes o incidentales, estas limitaciones pueden no aplicarse a usted.',
      h5: 'Precisión de los materiales',
      p3: 'Los materiales que aparecen en el sitio web de Affinitweet podrían incluir errores técnicos, tipográficos o fotográficos. Affinitweet no garantiza que ninguno de los materiales en su sitio web sea preciso, completo o actual. Affinitweet puede realizar cambios en los materiales contenidos en su sitio web en cualquier momento sin previo aviso. Sin embargo, Affinitweet no se compromete a actualizar los materiales.',
      h6: 'Enlaces',
      p4: 'Affinitweet no ha revisado todos los sitios vinculados a su sitio web y no es responsable de los contenidos de dicho sitio vinculado. La inclusión de cualquier enlace no implica el respaldo por parte de Affinitweet del sitio. El uso de cualquier sitio web vinculado es bajo el propio riesgo del usuario.',
      h7: 'Modificaciones',
      p5: 'Affinitweet puede revisar estos términos de servicio para su sitio web en cualquier momento sin previo aviso. Al utilizar este sitio web, usted acepta estar sujeto a la actual versión de estos términos de servicio.',
      h8: 'Ley que Rige',
      p6: 'Estos términos y condiciones se rigen y se interpretan de conformidad con las leyes de Francia y usted se somete irrevocablemente a la jurisdicción exclusiva de los tribunales en ese Estado o ubicación.',
      'h9-1': 'Terms of sale', // TODO
      p7: "Affinitweet Pro is sold as a one-time purchase, at different prices depending on the influence of the user's Twitter account. When the customer's Twitter account gains influence and exceeds a new threshold, no extra charge is made or requested.", // TODO
      p8: 'Under certain conditions, the user may not be able to proceed with an online purchase and may need to contact the Affinitweet team to receive the full benefits of Affinitweet Pro.', // TODO
      p9: 'Prices displayed may fluctuate at any time, without the customer being able to request a refund for the difference.', // TODO
      'h9-2': 'Refund policy', // TODO
      p10: 'Affinitweet offers a 7-day "money back" policy, starting from the date of purchase, only if: (1) the promotional code generated at the end of the purchase has not been used ; and (2) the user has not received a refund in the past.', // TODO
      p11: "If these conditions are met, the customer can make a refund request by sending an email to {email} which will be processed and accepted as soon as possible. The refund will be effective on the customer's bank account within 5 to 10 days from the date of processing the request, and will result in the immediate cancellation of all Affinitweet Pro benefits.", // TODO
      p12: 'On the contrary, if these conditions aren\'t met, Affinitweet reserves the right not to grant the refund request. In the same way, no refund or transfer of benefits will take place, even after the 7 day period, if the Twitter account becomes unusable in any way (suspended by Twitter, change of account, etc...): Affinitweet Pro is associated with the Twitter account on which the purchase was made. The customer will then have to log in with the new account and make a new purchase.', // TODO
      p13: 'In very rare cases, some tools might not work (fully or partially) if the user has a private Twitter account with more than 75000 followers or followings. The customer will not be able to claim a refund outside of the 7 day period.', // TODO
    },

    /* Data and privacy page */
    privacy: {
      title: 'Datos y privacidad',
      description: 'Information on how we retrieve, analyze and store your data.', // TODO
      intro: 'Nos tomamos muy en serio la privacidad de los datos y, en el curso de nuestro negocio, queremos informar a nuestros usuarios sobre lo que hacemos con él. A continuación encontrará toda la información necesaria sobre el almacenamiento y procesamiento de esta información. La información sobre las cookies también está disponible en {thatPage}.',
      storage: 'Almacenamiento',
      personalData: 'Información personal',
      p1: 'Cuando inicia sesión en Affinitweet, recopilamos la información de su perfil de Twitter que necesitamos para poder ofrecerle nuestros servicios. Entre esta información, almacenamos su:',
      'l1-1': 'ID único de Twitter',
      'l1-2': 'nombre de usuario (@)',
      'l1-3': 'nombre',
      'l1-4': 'token de autenticación',
      'l1-5': 'secreto del token de autenticación',
      'l1-6': 'idioma',
      p2: 'La otra información que puede ver en su perfil se almacena temporalmente en su sesión, simplemente cierre la sesión para eliminarla.',
      i1: 'Información: estos datos se pueden eliminar en su totalidad e inmediatamente simplemente haciendo clic en {button} en la parte inferior de {yourProfile}.',
      results: 'Resultados',
      p3: 'Por defecto, Affinitweet no almacena los resultados de lo que usted hace. Sin embargo, puede activar esta opción para tener un historial de sus resultados en su perfil. Entre esta información, almacenamos:',
      'l2-1': 'el usuario al que pertenece el resultado',
      'l2-2': 'el nombre de la función',
      'l2-3': 'la marca de tiempo del resultado',
      i2: 'Información: estos datos se pueden eliminar en su totalidad e inmediatamente simplemente haciendo clic en {button} en la parte inferior de {yourProfile}.',
      computing: 'Procesando',
      p4: 'Cuando realiza las diversas funciones presentes en el sitio, hacemos llamadas a la API de Twitter con sus tokens almacenados previamente.',
      i3: 'Información: utilizamos sus tokens para poder ser lo más precisos posible en nuestros resultados. Por lo tanto, si sigue a uno o más usuarios con una cuenta protegida, por ejemplo, podremos incluirlos en los resultados si es necesario.',
      p5: 'Esto es lo que podemos llegar a obtener:',
      'l3-1': 'su feed',
      'l3-2': 'sus tuits/retuits',
      'l3-3': 'sus menciones',
      'l3-4': 'sus seguidores',
      'l3-5': 'ysus seguidos',
      p6: 'Esta información solo se recopila y procesa, no la almacenamos.',
      publish: 'Publicación',
      p7: 'Cuando inicia sesión en Affinitweet, solicitamos acceso de lectura básico a su cuenta y acceso de escritura. No realizaremos ninguna acción sin su expresa solicitud activando una opción del sitio.',
      i4: 'Información: puede revocar el acceso que nos dio cuando inició sesión en cualquier momento desde {yourTwitterProfile}.',
      autoTweet: 'Tuit automático',
      p8: 'Para poder utilizar ciertas funciones, podemos solicitarle que habilite la opción de tuit automático para obtener resultados. Si acepta habilitar esta opción, se publicará un tuit para cada resultado con la imagen generada.',
      i5: 'Información: puede desactivar esta opción en cualquier momento desde {yourProfile} en la sección {button}.',
      question: '¿Alguna pregunta?',
      p9: 'Si tiene alguna pregunta sobre Affinitweet, por favor no dude en contactarnos vía Twitter o correo electrónico, ¡estaremos encantados de responderle!',
      thatPage: 'esta página',
      yourProfile: 'su perfil',
      yourTwitterProfile: 'su perfil de Twitter',
    },

  },

  /* Errors */
  _er: {
    back: 'Back', // TODO
    reload: 'Reload', // TODO
    400: 'Bad request 🤨', // TODO
    401: 'Unauthenticated 🙄', // TODO
    402: 'Payment required 😬', // TODO
    403: 'Forbidden 😕', // TODO
    404: 'This page could not be found 😢', // TODO
    405: 'Method not allowed 🧐', // TODO
    500: 'The server returned an error 😧', // TODO
    detailed400: 'It seems there is a problem in the request.<br/>Retry again or contact us for more information.', // TODO
    detailed401: 'You must be logged in to access this page.<br/>Log in and then retry.', // TODO
    detailed402: 'You cannot access this page because it requires payment.', // TODO
    detailed403: "You don't have the rights to access this page.<br/>Please refer to the owner of the team.", // TODO
    detailed404: "It seems that the page you are looking for does not exist or no longer exists. Please contact us if it's a dead link.", // TODO
    detailed405: 'The method used to access this page is not allowed.', // TODO
    detailed500: 'The server has returned an error. Try to reload the page in a few moments.', // TODO
    cooldown: 'Esta función tiene un tiempo de reutilización de %{cooldown} segundos. Por favor vuelva a intentarlo en:',
    unknown: 'Ha ocurrido un error. Nuestro equipo ha sido notificado.',
    unknownFeature: 'Función desconocida.',
    unavailableFeature: 'Unavailable feature.', // TODO
    betaFeature: "You can't use beta features until you're appart of the Beta program.", // TODO
    invalidEmail: 'Email is invalid.', // TODO
    selfUsername: 'Escriba un nombre de usuario diferente al de usted.',
    badUsername: 'Nombre de usuario incorrecto.',
    notEnoughData: 'No hay suficientes datos.', // TODO
    errorWhileRendering: 'Error while generating image.', // TODO
    accountProtected: 'No puede utilizar esta función mientras su cuenta esté protegida.',
    targetAccountProtectedAndNotFollowing: "You can't use this feature because the targeted user is protected and not following you.", // TODO
    refreshPage: 'Please refresh the page.', // TODO
    timeout: 'Tiempo de espera excedido.',
    twitterError: 'Twitter devolvió un error:',
    twitterErrors: {
      32: 'Usted no pudo ser autenticado.',
      34: 'Disculpe, esa página no existe.',
      50: 'Usuario no encontrado.',
      63: 'El usuario ha sido suspendido',
      64: 'Su cuenta está suspendida y no tiene permitido acceder a esta función.',
      87: 'El cliente no tiene permitido realizar esta acción.',
      88: 'Límite de velocidad excedido. Reintentar en 15 minutos',
      89: 'Token inválido o vencido. Por favor reconecte',
      99: 'No se pueden verificar sus credenciales.',
      130: 'Sobre capacidad.',
      131: 'Error interno.',
      135: 'Usted no pudo ser autenticado.',
      144: 'No se ha encontrado ningún estado con esa ID.',
      179: 'Disculpe, no está autorizado para ver este estado.',
      185: 'El usuario supera el límite de actualización de estado diario.',
      186: 'El tuit necesita ser un poco más corto.',
      187: 'El estado es un duplicado.',
      220: 'Sus credenciales no permiten el acceso a este recurso.',
      261: 'La aplicación no puede realizar acciones de escritura.',
      326: 'Para proteger a nuestros usuarios del spam y otra actividad maliciosa, esta cuenta está bloqueada temporalmente.',
    },
  },

}
