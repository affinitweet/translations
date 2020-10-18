export default {

  /* Layouts */
  _lt: {

    default: {
      cookiesBanner: 'Vi använder cookies 🍪 för att erbjuda den bästa upplevelsen. Genom att fortsätta använda vår hemsida accepterar du vår cookies policy. {button}',
      readMore: 'Läs mer...',
    },

  },

  /* Common */
  _cm: {
    lastRevision: 'Senast uppdaterad:',
    contactUs: 'Kontakta oss',
    followUs: 'Följ oss',
    reviewUs: 'Recensera oss',
    close: 'Stäng',
    cancel: 'Avbryt',
  },

  /* Languages */
  _lg: {
    french: 'Franska',
    english: 'Engelska',
    polish: 'Polska',
    spanish: 'Spanska',
    swedish: 'Svenska',
    turkish: 'Turkiska',
    indonesian: 'Indonesiska',
    portuguese: 'Portuguesiska',
    simplifiedChinese: 'Kinesiska (förenklad)',
    traditionalChinese: 'Kinesiska (traditionell)',
  },

  /* Pluralization */
  _pl: {
    seconds: 'sekund | sekund | sekunder',
    features: 'feature | features | features', // TODO
  },

  /* Components */
  _cp: {

    /* Header component */
    header: {
      sidebarHint: 'Upptäck alla våra material genom att klicka på menyikonen här! 😉',
      logIn: 'Logga in',
      myAccount: 'Mitt konto',
      switchAccount: 'Byt konto',
      logout: 'Logga ut',
    },

    /* Footer component */
    footer: {
      madeWithLove: 'Affinitweet är en Twitterbaserad statistik och underhållningsplattform skapad 2015 med ❤️ i Frankrike.',
      allRightsReserved: 'All rights reserved.',
      about: 'Om',
      changelog: 'Ändringslogg',
      legal: 'Legal',
      partners: 'Partner',
    },

    stateButton: {
      hold: 'Håll för att bekräfta',
      submit: 'Klicka för att bekräfta',
      loading: 'Handling pågår...',
      cancel: 'Avbryt',
    },

    clearHistory: {
      title: 'Rensa historia',
      description: 'Genom att rensa din historia kommer all information och bilder på dina nuverande sparade resultat raderas.',
      description2: 'Du kommer inte att kunna se dina tidigare resultat efter denna rensning, vill du verkligen genomföra handlingen?',
      holdButton: 'Håll för att rensa',
      loadingButton: 'Rensar historia...',
      successModal: 'Din historia har rensats.',
    },

    deleteAccount: {
      title: 'Radera konto',
      description: 'Gick något fel? Berätta för oss på vårt Twitter-konto så vi kan förbättra oss själva!',
      description2: 'Genom att radera ditt konto kommer all data på dig raderas, inklusive din historia. Ingen data behålls och du kommer automatiskt loggas ut från Affinitweet.',
      description3: 'Du kommer inte att kunna hämta ditt nuvarande konto efter denna radering, vill du verkligen genomföra handlingen?',
      holdButton: 'Håll för att radera',
      loadingButton: 'Raderar konto...',
      successModal: 'Ditt konto har raderats.',
    },

  },

  /* Features */
  _ft: {

    new: 'Nytt',
    popular: 'Populärt',
    real: 'Riktigt',
    fun: 'Nöje',

    list: {

      friendships: {
        description: 'Allt du behöver för att veta om länkarna mellan dig och en användare! 🙌',
        longDescription: 'Som tack för Friendships kommer du veta hur mycket du är vänner med en annan användare du väljer: ju fler blå pellets ni har, destu starkare är länkarna! Skriv in Twitter-namnet på den valda personen och upptäck era Friendships!',
      },
      'common-friends': {
        description: 'Upptäck vänner du har gemensamt med en annan användare! 👥',
        longDescription: 'Gemensamma vänner-funktionen låter dig upptäcka de prenumerationer/vänner du har gemensamt med någon annan. Har ni samma smaker och hur mycket?',
      },
      'top-friends': {
        description: 'Upptäck dina bästa Twitter-vänner på senaste tiden! 🤗',
        longDescription: 'Toppvänner-funktioner låter dig veta vilka dina bästa vänner är på Twitter. Vi etablerar en ranking genom att analysera informationen som skickas och mottagits av ditt konto. Efter det räknar vi, lägger till och sorterar dem för att generera dina toppvänner!',
      },
      'famous-followers': {
        description: 'Upptäck de mest populära personerna bland dina följare! 💅',
        longDescription: 'Famous Followers låter dig veta vilka personer som har flest följare bland dina egna. Vi samlar var och en av dina följare och deras antal följare för att sedan sortera och generera dina Famous Followers!',
      },
      valentine: {
        description: 'Vi vet vem ditt Valentine kommer att bli i år... Du då? 💏',
        longDescription: 'Vi håller algoritmen för detta hemligt. Allt vi kan säga är att vi försöker hålla oss till verkligheten, kommer våran Valentine nöja dig... ?',
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
        description: 'Någon älskar dig i hemiglet... och döljer det från det... 😳',
        longDescription: 'Vi håller algoritmen för detta hemligt. Allt vi kan säga är att din Secret Crush kommer imponera dig, bra eller dåligt?',
      },
      'hidden-twin': {
        description: 'Ja, du har en hemlig tvilling... vem fan är det? 🤔',
        longDescription: 'Vi håller algoritmen för detta hemligt. Allt vi kan säga är att din Hidden Twin kommer att imponera dig, bra eller dåligt?',
      },
      'stolen-kiss': {
        description: 'Vem vill sno en kyss från dig på ett gatohörn? 💋',
        longDescription: 'Vi håller algoritmen för detta hemligt. Allt vi kan säga är att din Stolen Kiss kommer att imponera dig, bra eller dåligt?',
      },
      'may-day': {
        description: 'Vem är din bästa bukett till i år? 💐',
        longDescription: 'Vi håller algoritmen för detta hemligt. Allt vi kan säga är att du kommer att göra någon väldigt lycklig!',
      },
      'halloween-duo': {
        description: 'Vem kommer du att vara räddast med i år? 🎃👻',
        longDescription: 'Vi håller algoritmen för detta hemligt. Allt vi kan säga är att ni kommer att vara kuslig på Halloween i år!',
      },
      'tweet-rate': {
        description: 'Jämför din tweet takt med en annan användares! 📊',
        longDescription: 'Tweet Rate låter dig veta medianen av antalet tweets du publicerar om dygnet sedan du registrerade på Twitter och jämför dig med en annan! Är du den mest aktiva?',
      },
      'first-to-follow': {
        description: 'Lista ut om du har följt en användare och tvärtom! 😮',
        longDescription: 'First To Follow låter dig upptäcka datumet och tiden du följde en annan användare på Twitter, och tvärtom! Vem följde den andra först?',
      },
      'emoji-mood': {
        description: 'Vilka emojis tweetar du som mest? 🤖',
        longDescription: 'Tack vare Emoji Mood kommer du att upptäcka vilka emoticons du har tweetat på sistone... Skulle du vilja slå vad på din TOPP 3?',
      },
      'new-years-kiss': {
        description: 'Vem kommer du att kyssa i år under misteln? 😘',
        longDescription: 'Vi håller algoritmen för detta hemligt. Allt vi kan säga är att du kommer kyssa någon vid midnatt!',
      },

    },

  },

  /* Pages */
  _pg: {

    /* Welcome page */
    welcome: {
      title: 'Welcome', // TODO
      welcomeToAffinitweet: 'Welcome to Affinitweet&nbsp;&nbsp;🎉', // TODO
      helloYou: 'Hello {username}&nbsp;&nbsp;😊', // TODO
      proudToWelcomeYou: 'Hi {username}, we are delighted to make your acquaintance and happy to welcome you among our more than 6 million users!', // TODO
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
      letsGo: 'Let\'s go!', // TODO
    },

    /* Home page */
    index: {
      title: 'Hem',
      description: 'Det bästa stället att ha roligt med dina vänner på Twitter! Se din statistiker och mer!',
      titleH1: 'Det bästa stället att ha roligt med dina vänner på Twitter!',
      titleH2: 'Se dina statistiker och mer!',
      highlights: 'Highlights',
      generatedResults: 'Vackra genererade resultat',
      generatedResultsDescription: 'Affinitweet is known for their very beautiful generated pictures, we are using the best tools for your results.',
      userConsentPrivacy: 'Användarmedgivande & integritet',
      userConsentPrivacyDescription: 'Everything we do on Affinitweet with your data is explained in our privacy policy, no surprise, no auto-follow or auto-tweet.',
      worldFamousLeader: 'Världens berömde ledare',
      worldFamousLeaderDescription: 'Affinitweet opened in february 2014 and more than two million users use our services, everywhere in the world.',
      fastRealTimeResults: 'Snabba och realtidsbaserade resultat',
      fastRealTimeResultsDescription: "We built Affinitweet on the last web technologies, so it's as fast as possible with real-time on feature pages.",
      noAdsNoVirus: 'Ingen påträngande reklam, inga virus',
      noAdsNoVirusDescription: 'Affinitweet har skapats enbart för nöjes skull, det finns inga virus och enbart ads på hela hemsidan (inga popups, inga omdirigeringar).',
      multilingualOpen: 'Flerspråkigt & öppet',
      multilingualOpenDescription: 'Affinitweet är tillgängligt på flera olika språk och alla kan bidra och lägga till sitt eget.',
      trustpilotH1: 'Se våra användares recensioner på Trustpilot!',
      trustpilotH2: 'Vi är betygsatta med {rate} av våra användare, kommer du att recensera oss härnäst?',
      trustpilotButton: 'Se & skicka in en recension',
      statistics: 'Statistik',
      totalUsers: '6 milljoner',
      totalUsersDescription: 'Användare litar på oss och använder våra tjänster',
      monthlyUsers: '400 000',
      monthlyUsersDescription: 'Unika användare som återkommer i genomsnitt var månad',
      totalFeatures: '20 milljoner',
      totalFeaturesDoneDescription: 'Funktioner gjorda sedan vi öppnade 2014',
      features: 'Funktioner',
      latestNews: 'Senaste nytt',
      getInTouch: 'Kontakta oss!',
      getInTouchP1: 'Vi finns tillgängligt närsomhelst på vårt Twitter-konto {twitterName}.',
      getInTouchP2: 'Följ oss och notifieras om uppdateringar med kommande ting!',
      getInTouchP3: 'Skicka gärna en tweet eller direkt meddelande till oss om du har någon fråga, något förslag eller bugg att rapportera.',
      getInTouchP4: 'För kommersiella syften kan du kontakta oss via e-post, se vår sida för {pageName}.',
    },

    /* User profile page */
    profile: {
      title: 'Profil',
      description: 'Konto, inställningar och historia till ditt konto.',
      joinBeta: 'Join the Beta program to test our features before they get released to public!', // TODO
      betaTerms: 'The Beta program is free of charge. Some features might not work and can be modified at anytime until they get published.', // TODO
      applyForFree: 'Apply for free', // TODO
      noThanks: 'No, thanks', // TODO
      profile: 'Profil',
      history: 'Historia',
      preferences: 'Inställningar',
      language: 'Språk',
      by: 'av',
      addLanguage: 'Lägg till språk...',
      contributeOnGitHub: 'bidra på GitHub',
      account: 'Konto',
      followers: 'Följare',
      followings: 'Följande',
      noHistory: 'Ingen historiedata.',
      autoTweet: 'Tweeta resultat',
      autoTweetDescription: 'Kryssa i detta alternativ för att automatiskt tweeta dina resultat. En tweet kommer att publiceras så fort resultaten är redo, inget mer.',
      saveResults: 'Spara resultat',
      saveResultsDescription: 'Kryssa i detta alternativ för att spara dina resultat i historian (funktionsnamn + bild + tid). Som standard bevarar vi inte dina resultat.',
      emojis: 'Emojis-paket',
      iOSemojis: 'iOS (Apple)',
      iOSemojisDescription: 'Dina resultat kommer att generas med iOS Emojis.',
      androidEmojis: 'Android (Google)',
      androidEmojisDescription: 'Dina resultat kommer att genereras med Android Emojis.',
      clearHistory: 'Rensa historia',
      clearHistoryDescription: 'Rensa din Affinitweet-resultathistoria.',
      deleteAccount: 'Radera konto',
      deleteAccountDescription: 'Radera ditt Affinitweet-konto, allt kommer att förloras.',
      show: 'Vy',
      showMore: 'Visa mer...',
      saved: 'Sparad',
    },

    /* Feature page */
    feature: {
      login: 'Logga in för att fortsätta...',
      startFeature: 'Då kör vi!',
      betaFeature: 'This feature is currently in beta and is available for users being part of the Beta program only. You can apply for this program if you want to test this feature.', // TODO
      applyForFree: 'Apply for free', // TODO
      results: 'Här är dina resultat!',
      tweetResults: 'Tweeta resultat',
      tweetingResults: 'Tweetar...',
      requireAutoTweetDescription: 'Vill du aktivera automatisk tweetning av resultat? Du kommer att kunna avaktivera detta alternativ från din profil.',
      yesEnable: 'Ja, aktivera',
      no: 'Nej',
      retry: 'Börja om!',
      doYouWantToKnowMore: 'Vill du lära dig mer om ditt Twitter-konto?',
      discoverOtherFeatures: 'Upptäck fler funktioner',
    },

    /* Features listing page */
    features: {
      title: 'Funktioner',
      description: 'Upptäck alla våra funktioner för att veta allt om ditt Twitter-konto.',
      searchFeatures: 'Sök på funktioner... (ex: Top Friends, Valentine...)',
      noFeatureFound: 'Tyvärr matchar inga funktioner den här sökningen... 😔',
      resetSearch: 'Nollställ sökning',
      letsGo: 'Då kör vi!',
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

    /* Legal page */
    legal: {
      title: 'Legal',
      description: 'Information about us and cookies.',
      intro: 'In accordance with Article 6 of the law n° 2004-575 of 21 June 2004 on trust in the digital economy, users of the site {site} are informed of the identity of the various parties involved in its implementation and monitoring:',
      owner: 'Owner',
      creator: 'Creator',
      publisher: 'Publication manager',
      publisherText: 'The person responsible for publication is a natural person.',
      webmaster: 'Webmaster',
      host: 'Host',
      requestAddress: 'Full address available on request by email at {email}.',
      warningCookies: 'About cookies',
      p1: 'A cookie is a small text file sent to your browser via the website you are viewing. With this cookie, information about your visit is stored on the website, such as your preferred language and other settings. This may facilitate your next visit to this site and make it more useful to you. Cookies play an important role. Without cookies, using the Web could be much more frustrating.',
      t1: 'What is the applicable legal frame?',
      p2: "In amending Article 5(3) of Directive 2002/58/EC by adopting Directive 2009/136/EC, the European legislator laid down the principle that the storage of information on a user's equipment or access to information already stored should only be carried out with the user's prior consent, unless these actions are strictly necessary for the provider to deliver a service expressly requested by the user. Article 32-II of the law of 6 January 1978 takes over this principle.",
      t2: 'This site uses cookies for the following purposes:',
      'l1-1': 'To help us recognize your browser and to save the preferences you have set in your previous visits to this site',
      'l1-2': 'To help us measure and study the effectiveness of our online interactive content, features, advertising and other communications',
      'l1-3': 'To monitor the analytical data on the site, the use made of the site by users and to improve the services and content of this site.',
      t3: 'How do I delete cookies linked to my browser?',
      p3: "You can choose to disable cookies in your browser at any time by following the instructions provided in your browser's help files. You can also set your cookies directly in your browser settings:",
    },

    /* Terms of service page */
    terms: {
      title: 'Terms of service',
      description: 'Consult our general terms and conditions of use.',
      h1: 'Terms',
      p1: 'By accessing the website at {url}, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.',
      h2: 'Use Licence',
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
      h4: 'Limitations',
      p2: "In no event shall Affinitweet or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Affinitweet's website, even if Affinitweet or a Affinitweet authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.",
      h5: 'Accuracy of materials',
      p3: "The materials appearing on Affinitweet's website could include technical, typographical, or photographic errors. Affinitweet does not warrant that any of the materials on its website are accurate, complete or current. Affinitweet may make changes to the materials contained on its website at any time without notice. However Affinitweet does not make any commitment to update the materials.",
      h6: 'Links',
      p4: "Affinitweet has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Affinitweet of the site. Use of any such linked website is at the user's own risk.",
      h7: 'Modifications',
      p5: 'Affinitweet may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.',
      h8: 'Governing Law',
      p6: 'These terms and conditions are governed by and construed in accordance with the laws of France and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.',
    },

    /* Data and privacy page */
    privacy: {
      title: 'Data and privacy',
      description: 'Information on how we retrieve, analyze and store your data.',
      intro: 'We take the privacy of data very seriously and in the course of our business, we want to inform our users about what we do with it. You will find below all the necessary information concerning the storage and processing of this data. Information about cookies is also available on {thatPage}.',
      storage: 'Storage',
      personalData: 'Personal data',
      p1: 'When you log into Affinitweet, we collect the information from your Twitter profile that we need in order to offer you our services. Among this information, we store your:',
      'l1-1': 'unique Twitter ID',
      'l1-2': 'username (@)',
      'l1-3': 'name',
      'l1-4': 'authentication token',
      'l1-5': 'authentication token secret',
      'l1-6': 'language',
      p2: 'The other information you can see on your profile is temporarily stored in your session, just log out to delete it.',
      i1: 'Information: these data can be deleted in their entirety and immediately on simply clicking on {button} at the bottom of {yourProfile}.',
      results: 'Results',
      p3: 'By default, Affinitweet does not store the results of what you do. However, you can activate this option to have a history of your results in your profile. Among this information, we store:',
      'l2-1': 'the user to whom the result belongs',
      'l2-2': 'the name of the feature',
      'l2-3': 'the timestamp of the result',
      i2: 'Information: these data can be deleted in their entirety and immediately by simply clicking on {button} at the bottom of {yourProfile}.',
      computing: 'Processing',
      p4: 'When you perform the various features present on the site, we make calls to the Twitter API with your previously stored tokens.',
      i3: 'Information: we use your tokens to be able being as accurate as possible in our results. Thus, if you follow one or more users with a protected account for example, we will be able to include them in the results if necessary.',
      p5: "Here's what we can be led to get:",
      'l3-1': 'your feed',
      'l3-2': 'your tweets/retweets',
      'l3-3': 'your mentions',
      'l3-4': 'your followers',
      'l3-5': 'your followings',
      p6: 'This information is only collected and processed, we do not store it.',
      publish: 'Publication',
      p7: 'When you log in to Affinitweet, we ask for basic read access to your account and write access. We will not carry out any action without your express request by activating an option from the site.',
      i4: 'Information: you can revoke the access you gave us when you logged in at any time from your {yourTwitterProfile}.',
      autoTweet: 'Automatic tweet',
      p8: 'In order to be able to use certain features, we may ask you to enable the automatic tweet option for results. If you agree to enable this option, a tweet will be published for each result with the generated image.',
      i5: 'Information: you can deactivate this option at any time from {yourProfile} in the {button} section.',
      question: 'Any questions?',
      p9: 'If you have any questions about Affinitweet, please do not hesitate to contact us via Twitter or email, we will be happy to answer you!',
      thatPage: 'this page',
      yourProfile: 'your profile',
      yourTwitterProfile: 'your Twitter profile',
    },

  },

  /* Errors */
  _er: {
    cooldown: 'Detta material har en %{cooldown} sekunders nedkylning. Var god försök igen om:',
    unknown: 'Ett fel har uppstått. Vårt team har notifierats.',
    unknownFeature: 'Okänt material.',
    unavailableFeature: 'Otillgängligt material.',
    betaFeature: "You can't use beta features until you're appart of the Beta program.", // TODO
    invalidEmail: 'Email is invalid.', // TODO
    selfUsername: 'Skriv ett annat användarnamn än dig själv.',
    badUsername: 'Dåligt användarnamn.',
    notEnoughData: 'Inte tillräckligt med data.',
    accountProtected: 'Du kan inte använda detta material medan ditt konto är skyddat.',
    targetAccountProtectedAndNotFollowing: "You can't use this feature because the targeted user is protected and not following you.", // TODO
    refreshPage: 'Vänligen ladda om sidan.',
    timeout: 'Timeout exceeded.',
    twitterError: 'Twitter skickade ett fel:',
    twitterErrors: {
      32: 'Kunde inte autentisera dig.',
      34: 'Ledsen, den sida existerar inte.',
      50: 'Användare hittades ej.',
      63: 'Användaren har avlysats.',
      64: 'Ditt konto är avlysat och har inte tillåtelse att använda detta material.',
      87: 'Klienten har inte tillåtelse att utföra denna handling.',
      88: 'Rate limit exceeded. Försök igen om 15 minuter',
      89: 'Ogiltigt eller utgånget token. Vänligen koppla upp dig igen.',
      99: 'Kan inte verifiera dina referenser.',
      130: 'Över kapaciteten.',
      131: 'Internt fel.',
      135: 'Kunde inte autentisera dig.',
      144: 'Inget status funnet med det ID:et.',
      179: 'Ledsen, du är inte auktoriserad för att se denna status.',
      185: 'Användaren är över gränsen för dagliga statusuppdateringar.',
      186: 'Tweeten behöver vara lite kortare.',
      187: 'Statusen är en kopia.',
      220: 'Dina referenser ger inte tillgång till denna resurs.',
      261: 'Applikationen kan inte genomföra skrifthandlingar.',
      326: 'För att skydda våra användare från spam och annan skadlig aktivitet har detta konto tillfälligen låsts.',
    },
  },

}
