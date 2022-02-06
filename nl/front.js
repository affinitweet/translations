export default {

  /* Layouts */
  _lt: {

    default: {
      cookiesBanner: 'We gebruiken cookies 🍪 om je de beste ervaring te bieden. Als je doorgaat naar onze website, ga ja akkoord met ons cookiebeleid. {button}',
      readMore: 'Meer hierover...',
    },

  },

  /* Common */
  _cm: {
    lastRevision: 'Laatst bijgewerkt:',
    contactUs: 'Contact opnemen',
    followUs: 'Volgen',
    reviewUs: 'Beoordelen',
    close: 'Sluiten',
    cancel: 'Annuleren',
  },

  /* Languages */
  _lg: {
    french: 'Frans',
    english: 'Engels',
    polish: 'Pools',
    spanish: 'Spaans',
    swedish: 'Zweeds',
    turkish: 'Turks',
    indonesian: 'Indonesisch',
    portuguese: 'Portugees',
    simplifiedChinese: 'Vereenvoudigd Chinees',
    traditionalChinese: 'Traditioneel Chinees',
    dutch: 'Nederlands',
    german: 'Duits',
  },

  /* Pluralization */
  _pl: {
    seconds: 'seconden | seconde | seconden',
    features: 'functies | functie | functies',
    results: 'result | result | results', // TODO
  },

  /* Components */
  _cp: {

    /* Header component */
    header: {
      logIn: 'Inloggen',
      helloYou: 'Hello {username} 👋🏻', // TODO
      myAccount: 'Mijn account',
      switchAccount: 'Account wijzigen',
      logout: 'Uitloggen',
    },

    /* Footer component */
    footer: {
      madeWithLove: 'Affinitweet is een op Twitter gebaseerd statistiek- en vermaakplatform, in 2015 met ❤️ gemaakt in Frankrijk.',
      allRightsReserved: 'Alle rechten voorbehouden.',
      stripeClimate: '1% of our revenue is donated to CO₂ reduction initiatives.', // TODO
      about: 'Over',
      changelog: 'Changelos',
      legal: 'Juridisch',
      partners: 'Partners',
    },

    stateButton: {
      hold: 'Houd ingedrukt om te bevestigen',
      submit: 'Klik om te bevestigen',
      loading: 'Actie wordt uitgevoerd...',
      cancel: 'Annuleren',
    },

    clearHistory: {
      title: 'Geschiedenis legen',
      description: 'Door je geschiedenis te legen worden alle informatie en afbeeldingen van je opgeslagen resultaten verwijderd.',
      description2: 'Je kunt je vorige resultaten hierna niet meer zien, wil je deze actie echt uitvoeren?',
      holdButton: 'Houd ingedrukt om te legen',
      loadingButton: 'Geschiedenis legen...',
      successModal: 'Je geschiedenis is geleegd.',
    },

    deleteAccount: {
      title: 'Account verwijderen',
      description: 'Is er iets misgegaan? Laat het ons weten op Twitter en help ons te verbeteren!',
      description2: 'Door je account te verwijderen wordt al je data verwijderd, waaronder je geschiedenis. Er wordt niks behouden en je wordt automatisch uitgelogd op Affinitweet.',
      description3: 'Je kunt je account hierna niet meer terugzetten, wil je deze actie echt uitvoeren?',
      holdButton: 'Houd ingedrukt om te verwijderen',
      loadingButton: 'Account verwijderen...',
      successModal: 'Je account is verwijderd.',
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

    new: 'Nieuw',
    popular: 'Populair',
    real: 'Echt',
    fun: 'Plezier',
    beta: 'Beta', // TODO
    others: 'Others', // TODO

    list: {

      friendships: {
        description: 'Alles wat je moet weten over de connectie tussen jou en een gebruiker! 🙌',
        longDescription: 'Met Friendships kun je zien hoe goed je bent bevriend met een andere gebruiker: hoe meer bolletjes, des te sterker de connectie! Voer de Twitter-naam van een gebruiker in en ontdek Friendships!',
      },
      'common-friends': {
        description: 'Ontdek je gemeeschappelijke vrienden met een andere gebruiker! 👥',
        longDescription: 'Common Friends staat je toe om abonnementen/vrienden die je deelt met anderen te zien. Hebben jullie dezelfde smaak?',
      },
      'top-friends': {
        description: 'Ontdek je beste Twitter-vrienden! 🤗',
        longDescription: 'In Top Friends wie je beste vrienden zijn op Twitter. We maken een lijst op basis van de informatie die verzonden en ontvangen wordt van je account. Daarna tellen we, berekenen we en sorteren we ze om je Top Friends te maken!',
      },
      'famous-followers': {
        description: 'Vind je populairste volger! 💅',
        longDescription: 'Met Famous Followers kun je zien welk van je volgers de meeste volgers heeft. We bekijken al je volgers en hoeveel volgers zij hebben en sorteren ze om je Famous Followers te vormen!',
      },
      valentine: {
        description: 'Wij weten al wie je valentijn is dit jaar... Jij ook? 💏',
        longDescription: 'Hoe dit werkt, is ons geheimpje. Wat we wel kunnen zeggen is dat we zo realistisch mogelijk blijven. Zal je blij zijn met je valentijn... ?',
      },
      'twitter-activity': {
        description: 'Bekijk een overzicht van je Twitter-activiteit en -statistieken 📊',
        longDescription: 'Dankzij Twitter Activity weet je wanneer je het vaakst tweet, hoeveel interacties (impressies, retweets, vind-ik-leuks, reacties) je hebt in totaal en de verspreiding van je tweets.',
      },
      'first-follower': {
        description: 'Vind uit wie je eerste volger op Twitter is 1️⃣',
        longDescription: 'Dankzij First Follower weet je wie je eerste volger is en wanneer deze je heeft gevolgd (of je oudste volger, want als je je eerste hebt ontvolgd kunnen we deze niet achterhalen).',
      },
      'first-following': {
        description: 'Discover who\'s the first person you followed on Twitter 1️⃣',
        longDescription: 'Dankzij First Following weet je wie je als eerst hebt gevolgd en wanneer je dit hebt gedaan (of je oudste volgend, want als je je eerste hebt ontvolgd kunnen we deze niet achterhalen).',
      },
      'secret-crush': {
        description: 'Stiekem houdt iemand van je... maar zegt het niet... 😳',
        longDescription: 'Hoe dit werkt, is ons geheimpje. Wat we wel kunnen zeggen is dat je Secret Crush je (on)aangenaam zal verassen...',
      },
      'hidden-twin': {
        description: 'Ja, je hebt een geheime tweeling... wie o wie? 🤔',
        longDescription: 'Hoe dit werkt, is ons geheimpje. Wat we wel kunnen zeggen is dat je Hidden Twin je (on)aangenaam zal verassen...',
      },
      'stolen-kiss': {
        description: 'Wie wilt je kus afpakken in het steegje achter? 💋',
        longDescription: 'Hoe dit werkt, is ons geheimpje. Wat we wel kunnen zeggen is dat je Stolen Kiss je (on)aangenaam zal verassen...',
      },
      'may-day': {
        description: 'Voor wie is je bos bloemen dit jaar? 💐',
        longDescription: 'Hoe dit werkt, is ons geheimpje. Wat we wel kunnen zeggen is dat je iemand dolblij zult maken!',
      },
      'halloween-duo': {
        description: 'Met wie ben jij dit jaar het bangst? 🎃👻',
        longDescription: 'Hoe dit werkt, is ons geheimpje. Wat we wel kunnen zeggen is dat je dit jaar met Halloween heel eng zult zijn!',
      },
      'tweet-rate': {
        description: 'Vergelijk je tweetsnelheid met iemand anders! 📊',
        longDescription: 'In Tweet Rate zie je het gemiddeld aantal tweets dat je plaatst per dag sinds je Twitter hebt en kun je dit vergelijken met een ander! Ben jij het meest actief?',
      },
      'first-to-follow': {
        description: 'Zie wanneer je iemand gevolgd hebt en andersom! 😮',
        longDescription: 'Met First To Follow kun je de datum en tijd ontdekken waarop je een ander gevolgd hebt op Twitter, en andersom! Wie was er eerst?',
      },
      'emoji-mood': {
        description: 'Welke emojis tweet je het vaakst? 🤖',
        longDescription: 'Dankzij Emoji Mood weet je over welke emoties je het vaakst tweet... Wil je wedden?',
      },
      'new-years-kiss': {
        description: 'Wie kus jij dit jaar onder de mistletoe? 😘',
        longDescription: 'Hoe dit werkt, is ons geheimpje. Wat we wel kunnen zeggen is dat je om middernacht iemand zult zoenen!',
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
      title: 'Welkom',
      welcomeToAffinitweet: 'Welkom op Affinitweet&nbsp;&nbsp;🎉',
      helloYou: 'Hallo {username}&nbsp;&nbsp;😊',
      proudToWelcomeYou: 'Hoi {username}, aangenaam kennis te maken. Welkom aan boord met onze meer dan 10 miljoen gebruikers!',
      onboardingCreation: 'We zijn blij je weer terug te hebben! We hebben deze onboarding in elkaar gezet zodat jij alles weet voordat anderen het weten...',
      next: 'Volgende',
      littleQuestion: 'Vraagje...',
      doYouWantToFollowUs: 'We updaten Affinitweet vaak, wil je ons volgen op Twitter om te zien wanneer we nieuwe functies uitbrengen?',
      iWantToFollowYou: 'Ik wil je volgen 😊',
      iDontWantToFollowYou: 'Nee, bedankt voor het aanbod!',
      great: 'Geweldig&nbsp;&nbsp;🥰',
      doYouWantToEnableNotifications: 'Nu je hier toch bent, wil je ook meldingen ontvangen over onze tweets zodat je de eerste bent om onze functies te testen?',
      iWantToBeNotified: 'Ik wil ook meldingen ontvangen 😇',
      iDontWantToBeNotified: 'Nee, alleen de tweets zien is goed genoeg voor mij!',
      noProblem: 'Geen probleem&nbsp;&nbsp;😉',
      noProblemDescription: 'Je hebt ook gelijk, we kennen elkaar amper! Misschien een andere keer dan maar. We hopen dat je plezier hebt met Affinitweet 💜',
      nice: 'Te gek&nbsp;&nbsp;🤗',
      niceDescription: 'Tik... tik... en tik!<br />Gelukt, je volgt ons nu op Twitter! Heel erg bedankt en veel plezier met Affinitweet 💜',
      awesome: 'Super&nbsp;&nbsp;😍',
      awesomeDescription: 'Tik... tik... en tik!<br />Gelukt, je volgt ons nu op Twitter en meldingen zijn ingeschakeld! Heel erg bedankt en veel plezier met Affinitweet 💜',
      uhoh: 'Oei... 😕',
      uhohDescription: 'Twitter, je hebt een probleempje...<br />Helaas kan Twitter je ons momenteel niet laten volgen. <u>Klik op de volgknop</u> om het zelf te doen 😊',
      letsGo: 'Klaar voor de start, af!',
    },

    /* Home page */
    index: {
      title: 'Start',
      description: 'Your Twitter account, more fun 😎 and more pro 🧑‍💻', // TODO
      titleH1: 'Your Twitter account,', // TODO
      titleH1s: 'more {fun} {emojiFun} more {pro} {emojiPro}', // TODO
      fun: 'fun', // TODO
      pro: 'pro', // TODO
      titleH2: 'Rediscover your Twitter account through dozens of exclusive features and tools to manage your account like a pro.', // TODO
      heresWhyAffinitweetIsNumberOne: "Here's why Affinitweet is the 1{sup} choice", // TODO
      sup: 'st', // TODO
      forALotOfUsers: 'for more than 10 million users worldwide', // TODO
      generatedResults: 'Prachtige, gegenereerde resultaten',
      generatedResultsDescription: 'Affinitweet staat bekend om zijn prachtige, gegenereerde afbeeldingen. We gebruiken de beste tools voor je resultaten.',
      userConsentPrivacy: 'Gebruikerstoestemming en -privacy',
      userConsentPrivacyDescription: 'Alles wat we met je data doen op Affinitweet is uitgelegd in ons privacybeleid. Geen verassingen, geen automatisch volgen en geen automatische tweets.',
      worldFamousLeader: 'Wereldbekende marktleider',
      worldFamousLeaderDescription: 'Affinitweet is geopend in februari 2015 en meer dan 10 miljoen gebruikers gebruiken onze diensten, overal ter wereld.',
      fastRealTimeResults: 'Razendsnelle, realtime resultaten',
      fastRealTimeResultsDescription: 'We hebben Affinitweet gebouwd met de nieuwste websnufjes, dus het is zo snel mogelijk en realtime.',
      noAdsNoVirus: 'Geen advertenties en virussen',
      noAdsNoVirusDescription: 'Affinitweet is puur voor vermaak gebouwd, dus geen virussen en maar 2 advertenties over de hele website (geen pop-ups of doorverwijzingen).',
      multilingualOpen: 'Meertalig en open',
      multilingualOpenDescription: 'Affinitweet is beschikbaar in meerdere talen en iedereen kan meehelpen en eigen talen toevoegen.',
      new: 'New', // TODO
      proTools: 'Professional tools', // TODO
      toManageYourTwitterAsAPro: 'to manage your Twitter account like a pro', // TODO
      discoverOurTools: 'Discover our tools', // TODO
      whatOurUsersSaid: 'What people say about us', // TODO
      ifYouNeedMoreTrust: 'if it takes more people and opinions to convince you', // TODO
      funFeatures: 'Entertaining features', // TODO
      unlimitedAndFree: 'interesting or fun, free and without limits', // TODO
      totalUsers: '10 miljoen',
      totalUsersDescription: 'Gebruikers die ons en onze diensten vertrouwen',
      monthlyUsers: '400 000',
      monthlyUsersDescription: 'Gemiddeld aantal unieke gebruikers die elke maand terugkomen',
      totalFeatures: '36 miljoen',
      totalFeaturesDoneDescription: 'Functies af sinds we geopend zijn in 2015',
      ourFeatures: 'Onze functies',
      seeDetailedList: 'Gedetailleerde lijst openen',
      getInTouch: 'Praat met ons!',
      getInTouchP1: 'We zijn altijd beschikbaar op ons Twitter-account {twitterName}.',
      getInTouchP2: 'Volg ons en wees op de hoogte van nieuwe updates en nieuws!',
      getInTouchP3: 'Voel je vrij om naar ons te tweeten of een bericht te sturen als je vragen, suggesties of problemen hebt.',
      getInTouchP4: 'Voor zakelijke doelenden kun je contact met ons opnemen via e-mail, kijk eens op de pagina {pageName}.',
    },

    /* User profile page */
    profile: {
      title: 'Profiel',
      description: 'Account, instellingen en geschiedenis op je profiel.',
      joinBeta: 'Neem deel aan het bèta-programma om functies te proberen voordat ze gelanceerd worden!',
      betaTerms: 'Het bèta-programma is geheel gratis. Sommige functies werken mogelijk niet en kunnen aangepast worden voordat ze worden uitgebracht.',
      applyForFree: 'Gratis aanmelden',
      noThanks: 'Nee, bedankt',
      profile: 'Profiel',
      history: 'Geschiedenis',
      preferences: 'Voorkeuren',
      language: 'Taal',
      by: 'door',
      addLanguage: 'Taal toevoegen...',
      contributeOnGitHub: 'bijdragen op GitHub',
      account: 'Account',
      followers: 'Volgers',
      following: 'Volgend',
      noHistory: 'Geen geschiedenisdata.',
      autoTweet: 'Resultaten tweeten',
      autoTweetDescription: 'Vink deze optie aan om resultaten automatisch te tweeten. Er wordt een tweet geplaatst wanneer de resultaten klaar zijn, dat is alles.',
      saveResults: 'Resultaten opslaan',
      saveResultsDescription: 'Vink deze optie aan om resultaten in geschiedenis op te slaan (functienaam + afbeelding + tijd). Standaard worden je resultaten niet opgeslagen.',
      emojis: 'Emojipakket',
      iOSemojis: 'iOS (Apple)',
      iOSemojisDescription: 'Je resultaten worden gegenereerd met iOS-emojis.',
      androidEmojis: 'Android (Google)',
      androidEmojisDescription: 'Je resultaten worden gegenereerd met Android-emojis.',
      clearHistory: 'Geschiedenis legen',
      clearHistoryDescription: 'Leeg je Affinitweet-resultatengeschiedenis.',
      deleteAccount: 'Account verwijderen',
      deleteAccountDescription: 'Verwijder je Affinitweet-account. Alles zal worden verloren.',
      show: 'weergeven',
      showMore: 'Meer weergeven...',
      saved: 'Opgeslagen',
    },

    /* Feature page */
    feature: {
      login: 'Log in om verder te gaan...',
      startFeature: 'Laten we gaan!',
      betaFeature: 'Deze functie is momenteel in de bèta en is uitsluitend beschikbaar voor gebruikers in het bèta-programma. Je kunt je aanmelden voor dit programma als je deze functie wilt testen.',
      applyForFree: 'Gratis aanmelden',
      results: 'Dit zijn je resultaten!',
      tweetResults: 'Resultaten tweeten',
      tweetingResults: 'Tweeten...',
      requireAutoTweetDescription: 'Wil je resultaten automatisch tweeten? Je kunt deze optie altijd uitschakelen in je profiel.',
      yesEnable: 'Ja, inschakelen',
      no: 'Nee',
      retry: 'Opnieuw proberen!',
      doYouWantToKnowMore: 'Wil je meer te weten komen over je Twitter-account?',
      discoverOtherFeatures: 'Meer functies ontdekken',
    },

    /* Features listing page */
    features: {
      title: 'Functies',
      description: 'Ontdek al onze functies en kom alles te weten over je Twitter-account.',
      ourFeatures: "Here's a list of all our features {theyAreAllFree} you can try in no time that generate an image based on your Twitter account! If you're looking for a particular feature, you can use the search box below to see what we have to offer.", // TODO
      theyAreAllFree: 'entirely free', // TODO
      searchFeatures: 'Zoeken naar functies... (bijv. Top Friends, Valentine...)',
      noFeatureFound: 'Helaas zijn er geen functies die overeenkomen met je zoekopdracht... 😔',
      resetSearch: 'Zoekopdracht resetten',
      letsGo: 'Laten we gaan!',
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
      title: 'Bèta-programma',
      description: 'Meld je gratis aan voor het bèta-programma en probeer onze bèta-functies voordat ze uitgebracht worden!',
      betaProgramDescription: 'Het bèta-programma is gemaakt zodat jij functies kan proberen voor ze uitgebracht worden, zodat ze werken zoals verwacht. Als je deeneemt aan dit programma, kun je deze functies testen.',
      currentBetaFeatures: 'Er zijn momenteel {amount} {features} in het bèta-programma:',
      noCurrentBetaFeatures: 'Er zijn momenteel geen functies in het bèta-programma, maar deze komen binnenkort!',
      fewThingsToKnow: 'Een paar dingen die je moet weten:',
      li1: 'Het is compleet gratis',
      li2: 'Er is een beperkt aantal plaatsen',
      li3: 'Het programma is geheel vrijblijvend',
      li4: 'Hogere prioriteit voor ondersteuning in Twitter-DM\'s',
      li5: 'Bèta-functies werken mogelijk niet zoals verwacht',
      li6: 'Bèta-functies kunnen op elk moment aangepast worden',
      thanksForInterest: 'Bedankt voor je interesse in het bèta-programma 💜',
      alreadyApplied: 'Je zit al in het bèta-programma,<br />heel erg bedankt voor je interesse 💜',
      leaveBetaProgram: 'Bèta-programma verlaten',
      leavingTerms: 'Als je het bèta-programma verlaat, kun je je mogelijk niet meer aanmelden als er geen vrije plaatsen over zijn.',
      placesAvailable: '500 plaatsen! 🎟',
      proPlace: 'Here\'s your privileged place 👑', // TODO
      accountEligible: 'Je kunt je met je account aanmelden voor het bèta-programma en er zijn nog weinig vrije plaatsen over!',
      yourEmailAddress: 'Je e-mailadres...',
      applyForFree: 'Gratis aanmelden',
      applyTerms: 'Door je aan te melden voor ons bèta-programma, ga je ermee akkoord dat je meldingen en e-mails kunt ontvangen (maximaal 1 per week).',
      noPlaceAvailable: 'Geen plaats meer 😕',
      betaProgramFull: 'Helaas is het bèta-programma vol en kunnen we momenteel geen gratis toegang geven, maar je kunt het nog steeds verdienen met de methoden in het volgende blok!',
      keepUpdated: 'We laten het je weten wanneer gratis toegang weer beschikbaar is via {ourTwitterAccount}.',
      ourTwitterAccount: 'ons Twitter-account',
      or: 'of',
      earnYourAccess: 'Verdien toegang! 🎁',
      writeReview: '#1 — Beoordeel ons {onTrustpilot} en stuur een link naar je review in onze Twitter-DM\'s. Dan geven we je toegang.',
      onTrustpilot: 'op Trustpilot',
      winContest: 'of #2 — Neem deel aan onze wedstrijden op {ourTwitterAccount} om toegang te verdienen. Volg ons en zet meldingen aan om op de hoogte te blijven.',
      randomDraws: 'Deze wedstrijden endigen allemaal met een willekeurige trekking via {pickaw}, zodat iedereen een gelijke kans heeft om te winnen.',
      welcomeToTheBetaProgram: 'Welkom in het bèta-programma! Je kunt onze bèta-functies nu testen 😊',
      seeYouSoonBetaProgram: 'Bedankt dat je deel bent van ons bèta-programma, we kunnen niet wachten om je weer te zien!',
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
      title: 'Juridische informatie',
      description: 'Informatie over ons en ons cookiegebruik.',
      intro: 'Om overeen te komen met Artikel 6 van wet n° 2004-575 van 21 juni 2004 met betrekking tot vertrouwen in de digitale economie, worden gebruikers van de site {site} geïnformeerd over de identiteit van verscheidene partijen die te maken hebben met implementatie en monitoring van de site:',
      owner: 'Eigenaar',
      publisher: 'Publicatiemanager',
      publisherText: 'De persoon die publicatie beheert is een neutraal persoon.',
      host: 'Host',
      requestAddress: 'Volledig adres vertrekt via e-mail op {email}.',
      warningCookies: 'Over cookies',
      p1: 'Een cookie is een klein tekstbestandje dat via een website naar je browser wordt gestuurd. In deze cookie wordt informatie over je bezoek opgeslagen op de website, zoals je voorkeurstaal en andere instellingen. Deze kunnen bij je volgende bezoek gebruikt worden om je bezoek prettiger te maken. Cookies hebben een belangrijke rol. Zonder cookies zou het web veel frustrerender kunnen zijn.',
      t1: 'Wat is het toepasselijke juridische kader?',
      p2: "In amending Article 5(3) of Directive 2002/58/EC by adopting Directive 2009/136/EC, the European legislator laid down the principle that the storage of information on a user's equipment or access to information already stored should only be carried out with the user's prior consent, unless these actions are strictly necessary for the provider to deliver a service expressly requested by the user. Article 32-II of the law of 6 January 1978 takes over this principle.",
      t2: 'This site uses cookies for the following purposes:',
      'l1-1': 'To help us recognize your browser and to save the preferences you have set in your previous visits to this site',
      'l1-2': 'To help us measure and study the effectiveness of our online interactive content, features, advertising and other communications',
      'l1-3': 'To monitor the analytical data on the site, the use made of the site by users and to improve the services and content of this site.',
      t3: 'Hoe verwijder ik cookies uit mijn browser?',
      p3: 'Je kunt cookies altijd uitschakelen in je browser door de instructies in de documentatie van je browser op te volgen. Je kunt je cookies ook direct in je instellingen instellen:',
    },

    /* Terms of service page */
    terms: {
      title: 'Servicevoorwaarden',
      description: 'Raadpleeg onze algemene voorwaarden en onze servicevoorwaarden.',
      h1: 'Voorwaarden',
      p1: 'By accessing the website at {url}, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.',
      h2: 'Gebruikslicentie',
      'l1-1': "Permission is granted to temporarily download one copy of the materials (information or software) on Affinitweet's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:",
      'l2-1': 'modify or copy the materials;',
      'l2-2': 'use the materials for any commercial purpose, or for any public display (commercial or non-commercial);',
      'l2-3': "attempt to decompile or reverse engineer any software contained on Affinitweet's website;",
      'l2-4': 'remove any copyright or other proprietary notations from the materials; or',
      'l2-5': 'transfer the materials to another person or "mirror" the materials on any other server.',
      'l1-2': 'This license shall automatically terminate if you violate any of these restrictions and may be terminated by Affinitweet at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.',
      h3: 'Disclaimer',
      'l3-1': "The materials on Affinitweet's website are provided on an 'as is' basis. Affinitweet makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.",
      'l3-2': 'Further, Affinitweet does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.',
      h4: 'Limitaties',
      p2: "In no event shall Affinitweet or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Affinitweet's website, even if Affinitweet or a Affinitweet authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.",
      h5: 'Accuraatheid van materialen',
      p3: "The materials appearing on Affinitweet's website could include technical, typographical, or photographic errors. Affinitweet does not warrant that any of the materials on its website are accurate, complete or current. Affinitweet may make changes to the materials contained on its website at any time without notice. However Affinitweet does not make any commitment to update the materials.",
      h6: 'Links',
      p4: "Affinitweet has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Affinitweet of the site. Use of any such linked website is at the user's own risk.",
      h7: 'Modificaties',
      p5: 'Affinitweet may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.',
      h8: 'Governing Law',
      p6: 'These terms and conditions are governed by and construed in accordance with the laws of France and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.',
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
      title: 'Data en privacy',
      description: 'Informatie over hoe we data verzamelen, analyseren en opslaan.',
      intro: 'We nemen de privacy van data erg serieus en we informeren gebruikers over wat we ermee doen. Hieronder vind je alle noodzakelijke informatie met betrekking tot de opslag en verwerking van deze data. Informatie over cookies is ook beschikbaar op {thatPage}.',
      storage: 'Opslag',
      personalData: 'Persoonlijke data',
      p1: 'Als je inlogt op Affinitweet, verzamelen we informatie van je Twitter-profiel die we nodig hebben om onze diensten aan te bieden. Deze informatie omvat onder andere je:',
      'l1-1': 'unieke Twitter-ID',
      'l1-2': 'gebruikersnaam (@)',
      'l1-3': 'naam',
      'l1-4': 'authenticatietoken',
      'l1-5': 'authenticatietoken-secret',
      'l1-6': 'taal',
      p2: 'De andere informatie die je kunt zien op je profiel is tijdelijk opgeslagen in je sessie, je kunt uitloggen om het te verwijderen.',
      i1: 'Informatie: deze data kan onmiddelijk in zijn geheel worden verwijderd door te klikken op {button} onderin {yourProfile}.',
      results: 'Resultaten',
      p3: 'Standaard slaat Affinitweet geen resultaten op van wat je doet. Je kunt deze optie wel inschakelen om een resultatengeschiedenis te hebben op je profiel. Deze informatie omvat onder andere:',
      'l2-1': 'de gebruiker waar het resultaat toe behoort',
      'l2-2': 'de naam van de functie',
      'l2-3': 'de tijd waarop het resultaat gegenereerd is',
      i2: 'Informatie: deze data kan onmiddelijk in zijn geheel worden verwijderd door te klikken op {button} onderin {yourProfile}}.',
      computing: 'Verwerking',
      p4: 'Wanneer je van de verscheidene functies op onze site gebruikmaakt, nemen we contact op met de Twitter-API met je eerder opgeslagen tokens.',
      i3: 'Informatie: we gebruiken je tokens om zo nauwkeurig mogelijk te zijn in je resultaten. Hierdoor kunnen we, als je mensen met een beschermd account volgt, hen in resultaten verwerken wanneer nodig.',
      p5: 'Dit is wat we kunnen krijgen:',
      'l3-1': 'je feed',
      'l3-2': 'je tweets/retweets',
      'l3-3': 'je vermeldingen',
      'l3-4': 'je volgers',
      'l3-5': 'je volgend',
      p6: 'Deze informatie wordt verzameld en verwerkt, maar nooit opgeslagen.',
      publish: 'Publicatie',
      p7: 'Wanneer je inlogt op Affinitweet, vragen we je om lees- en schrijftoegang voor je account. We ondernemen geen acties zonder dat jij erom vraagt door een optie te activeren op deze site.',
      i4: 'Informatie: je kunt ten allen tijde vanaf {yourTwitterProfile} onze toegang intrekken.',
      autoTweet: 'Automatisch tweeten',
      p8: 'Om bepaalde functies te gebruiken, kunnen we je vragen om automatisch inschakelen in te schakelen voor je resultaten. Als je akkoord gaat en deze optie inschakelt, wordt er een tweet verzonden met een gegenereerde afbeelding als je een resultaat ontvangt.',
      i5: 'Informatie: je kunt deze optie ten allen tijde uitschakelen in {yourProfile} in de sectie {button}.',
      question: 'Vragen?',
      p9: 'Als je vragen hebt over Affinitweet, schroom dan niet om oms te benaderen via Twitter of e-mail, we helpen je graag!',
      thatPage: 'deze pagina',
      yourProfile: 'je profiel',
      yourTwitterProfile: 'je Twitter-profiel',
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
    cooldown: 'Deze functie heeft een afkoeltijd van %{cooldown} seconden. Probeer het opnieuw over:',
    unknown: 'Er is een fout opgetreden. Ons team is op de hoogte gesteld.',
    unknownFeature: 'Onbekende functie.',
    unavailableFeature: 'Onbeschikbare functie.',
    betaFeature: 'Je kunt geen bèta-functies gebruiken totdat je deel uitmaakt van het bèta-programma.',
    invalidEmail: 'Ongeldige e-mail.',
    selfUsername: 'Typ een andere gebruikersnaam dan jijzelf.',
    badUsername: 'Ongeldige gebruikersnaam.',
    notEnoughData: 'Niet genoeg tweets om te analyseren.',
    errorWhileRendering: 'Fout bij genereren van afbeelding.',
    accountProtected: 'Je kunt deze functie niet gebruiken als je account beschermd wordt.',
    targetAccountProtectedAndNotFollowing: 'Je kunt deze functie niet gebruiken omdat de doelgebruiker beschermd wordt en je niet volgt.',
    refreshPage: 'Please refresh the page.', // TODO
    timeout: 'Time-out overschreden.',
    twitterError: 'Twitter heeft een fout teruggezonden:',
    twitterErrors: {
      32: 'Kon je niet authoriseren.',
      34: 'Sorry, die pagina bestaat niet.',
      50: 'Gebruiker niet gevonden.',
      63: 'Gebruiker is geschorst.',
      64: 'Je account is geschorst en kan deze functie niet gebruiken.',
      87: 'Cliënt mag deze functie niet gebruiken.',
      88: 'Rate-limiet overschreden. Probeer opnieuw na 15 minuten.',
      89: 'Ongeldige of verlopen token. Verbind opnieuw.',
      99: 'Kon je gegevens niet verifiëren.',
      130: 'Over capaciteit.',
      131: 'Interne fout.',
      135: 'Kon je niet authoriseren.',
      144: 'Geen status gevonden voor ID.',
      179: 'Sorry, je kunt deze status niet bekijken.',
      185: 'Gebruiker heeft dagelijkse statusupdatelimiet overschreden.',
      186: 'Tweet moet iets korter zijn.',
      187: 'Status is een duplicaat.',
      220: 'Je gegevens geven je geen toegang tot deze bron.',
      261: 'Applicatie kan geen data schrijven.',
      326: 'Om onze gebruikers voor spam en andere kwaadaardige activiteit te beschermen, is dit account tijdelijk uitgeschakeld.',
    },
  },

}
