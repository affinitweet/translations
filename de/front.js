export default {

  /* Layouts */
  _lt: {

    default: {
      cookiesBanner: 'Wir verwenden Cookies 🍪, um das beste Erlebnis zu bieten. Wenn Sie unsere Website weiter nutzen, stimmen Sie unserer Cookie-Richtlinie zu. {Button}',
      readMore: 'Mehr lesen...',
    },

  },

  /* Common */
  _cm: {
    lastRevision: 'Zuletzt aktualisiert:',
    contactUs: 'Kontaktieren Sie uns',
    followUs: 'Folgen Sie uns',
    reviewUs: 'Bewerten Sie uns',
    close: 'Schließen',
    cancel: 'Abbrechen',
  },

  /* Languages */
  _lg: {
    french: 'Französisch',
    english: 'Englisch',
    polish: 'Polnisch',
    spanish: 'Spanisch',
    swedish: 'Schwedisch',
    turkish: 'Türkisch',
    indonesian: 'Indonesisch',
    portuguese: 'Portugiesisch',
    simplifiedChinese: 'Vereinfachtes Chinesisch',
    traditionalChinese: 'Traditionelles Chinesisch',
    dutch: 'Niederländisch',
    german: 'Deutsch',
    arabic: 'arabisch',
  },

  /* Pluralization */
  _pl: {
    seconds: 'Sekunden | Sekunde | Sekunden',
    features: 'Funktionen | Funktion | Funktionen',
    results: 'result | result | results', // TODO
  },

  /* Components */
  _cp: {

    /* Header component */
    header: {
      logIn: 'Anmelden',
      helloYou: 'Hello {username} 👋🏻', // TODO
      myAccount: 'Mein Konto',
      switchAccount: 'Konto wechseln',
      logout: 'Abmelden',
    },

    /* Footer component */
    footer: {
      madeWithLove: 'Affinitweet ist eine Twitter-basierte Statistik- und Unterhaltungsplattform, die 2015 mit ❤️ in Frankreich gegründet wurde.',
      allRightsReserved: 'Alle Rechte vorbehalten.',
      stripeClimate: '1% of our revenue is donated to CO₂ reduction initiatives.', // TODO
      about: 'Über',
      changelog: 'Änderungsliste',
      legal: 'Rechtliches',
      partners: 'Partner',
    },

    stateButton: {
      hold: 'Halten zum Bestätigen',
      submit: 'Klicken zum Bestätigen',
      loading: 'Aktion in Arbeit...',
      cancel: 'Abbrechen',
    },

    clearHistory: {
      title: 'Verlauf löschen',
      description: 'Durch das Bereinigen Ihres Verlaufs werden alle Informationen und Bilder Ihrer aktuell gespeicherten Ergebnisse gelöscht.',
      description2: 'Sie werden Ihre vorherigen Ergebnisse nach dieser Reinigung nicht mehr sehen können, wollen Sie diese Aktion wirklich durchführen?',
      holdButton: 'Halten zum Löschen',
      loadingButton: 'Verlauf löschen...',
      successModal: 'Ihr Verlauf wurde gelöscht.',
    },

    deleteAccount: {
      title: 'Konto löschen',
      description: 'Ist etwas schief gelaufen? Sagen Sie es uns auf unserem Twitter-Account, damit wir uns verbessern können!',
      description2: 'Durch die Löschung Ihres Kontos werden alle Daten über Sie gelöscht, einschließlich Ihres Verlaufs. Es werden keine Daten aufbewahrt und Sie werden automatisch bei Affinitweet abgemeldet.',
      description3: 'Sie können Ihr aktuelles Konto nach dieser Löschung nicht wiederherstellen, wollen Sie diese Aktion wirklich durchführen?',
      holdButton: 'Halten zum Löschen',
      loadingButton: 'Konto löschen...',
      successModal: 'Ihr Konto wurde gelöscht.',
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

    new: 'Neu',
    popular: 'Beliebt',
    real: 'Real',
    fun: 'Spaß',
    beta: 'Beta', // TODO
    others: 'Others', // TODO

    list: {

      friendships: {
        description: 'Alles, was Sie über die Verbindungen zwischen Ihnen und einem Benutzer wissen müssen! 🙌',
        longDescription: 'Dank Friendships wissen Sie, wie sehr Sie mit einem anderen Benutzer Ihrer Wahl befreundet sind: je mehr blaue Kügelchen Sie haben, desto stärker sind die Verbindungen! Geben Sie den Twitter-Spitznamen der gewählten Person ein und entdecken Sie Ihre Freundschaften!',
      },
      'common-friends': {
        description: 'Entdecken Sie Ihre gemeinsamen Freunde mit einem anderen Benutzer! 👥',
        longDescription: 'Mit den Gemeinsamen Freunden können Sie die Abonnements/Freunde entdecken, die Sie mit einer anderen Person gemeinsam haben. Haben Sie die gleichen Vorlieben und wie viel?',
      },
      'top-friends': {
        description: 'Entdecken Sie Ihre besten Twitter-Freunde der letzten Zeit! 🤗',
        longDescription: 'Mit den Top Friends können Sie erfahren, wer Ihre besten Freunde auf Twitter sind. Wir erstellen eine Rangliste, indem wir die Informationen analysieren, die von Ihrem Konto gesendet und empfangen werden. Dann zählen, addieren und sortieren wir sie, um Ihre Top-Freunde zu generieren!',
      },
      'famous-followers': {
        description: 'Entdecken Sie die beliebtesten Personen unter Ihren Followern! 💅',
        longDescription: 'Mit den Famous Followers können Sie wissen, welche Personen die meisten Follower unter Ihren Followern haben. Wir sammeln jeden Ihrer Follower und deren Anzahl an Followern und sortieren sie, um Ihre Famous Followers zu generieren!',
      },
      valentine: {
        description: 'Wir wissen, wer Ihr Valentin dieses Jahr sein wird... Was ist mit Ihnen? 💏',
        longDescription: 'Wir halten den Algorithmus dieser Funktion geheim. Alles, was wir sagen können, ist, dass wir versuchen, uns an die Realität zu halten, wird unser Valentine Sie begeistern? ?',
      },
      'twitter-activity': {
        description: 'Entdecken Sie die Zusammenfassung Ihrer Aktivitäten und Ihre Twitter-Statistiken 📊.',
        longDescription: 'Dank der Twitter-Aktivität wissen Sie, wann Sie am häufigsten tweeten, wie viele Interaktionen (Impressionen, Retweets, Likes, Antworten) Sie insgesamt haben und wie Ihre Tweets verteilt sind.',
      },
      'first-follower': {
        description: 'Entdecken Sie, wer die erste Person ist, die Ihnen auf Twitter folgt 1️⃣',
        longDescription: 'Dank des First Follower wissen Sie, wer Ihr erster Follower ist und wann er Ihnen gefolgt ist (oder der älteste, denn wenn Ihnen in der Zwischenzeit nicht mehr gefolgt wurde, können wir das nicht wissen).',
      },
      'first-following': {
        description: 'Entdecken Sie, wer die erste Person ist, der Sie auf Twitter gefolgt sind 1️⃣',
        longDescription: 'Dank des ersten Folgens wissen Sie, wer Ihr erster Follower ist und wann Sie ihm gefolgt sind (oder der älteste, denn wenn Sie in der Zwischenzeit Leuten nicht mehr gefolgt sind, können wir das nicht wissen).',
      },
      'secret-crush': {
        description: 'Jemand liebt dich im Geheimen... und versteckt es vor dir... 😳',
        longDescription: 'Wir halten den Algorithmus dieser Funktion geheim. Wir können nur sagen, dass Ihr Secret Crush Sie beeindrucken wird, gut oder schlecht?',
      },
      'hidden-twin': {
        description: 'Ja, Sie haben einen versteckten Zwilling.... wer zum Teufel ist es? 🤔',
        longDescription: 'Wir halten den Algorithmus dieser Funktion geheim. Wir können nur sagen, dass Ihr Hidden Twin Sie beeindrucken wird, gut oder schlecht?',
      },
      'stolen-kiss': {
        description: 'Wer will Ihnen an einer Straßenecke einen Kuss klauen? 💋',
        longDescription: 'Wir halten den Algorithmus dieser Funktion geheim. Wir können nur sagen, dass Ihr Stolen Kiss Sie beeindrucken wird, gut oder schlecht?',
      },
      'may-day': {
        description: 'Wer ist Ihr bester Strauß für dieses Jahr? 💐',
        longDescription: 'Wir halten den Algorithmus dieser Funktion geheim. Wir können nur sagen, dass Sie jemanden sehr glücklich machen werden!',
      },
      'halloween-duo': {
        description: 'Vor wem werden Sie dieses Jahr am meisten Angst haben? 🎃👻',
        longDescription: 'Wir halten den Algorithmus dieser Funktion geheim. Wir können nur sagen, dass Sie dieses Jahr zu Halloween gruselig sein werden!',
      },
      'tweet-rate': {
        description: 'Vergleichen Sie Ihre Tweet-Rate mit der eines anderen Benutzers! 📊',
        longDescription: 'Mit der Tweet-Rate können Sie die durchschnittliche Anzahl der Tweets, die Sie pro Tag veröffentlichen, seit Sie sich bei Twitter registriert haben, ermitteln und sich mit anderen Personen vergleichen! Sind Sie der aktivste?',
      },
      'first-to-follow': {
        description: 'Finden Sie heraus, wann Sie einem Benutzer gefolgt sind und umgekehrt! 😮',
        longDescription: 'Mit "First To Follow" können Sie das Datum und die Uhrzeit herausfinden, zu der Sie einer anderen Person auf Twitter gefolgt sind - und andersherum! Wer ist dem anderen zuerst gefolgt?',
      },
      'emoji-mood': {
        description: 'Was sind die Emojis, die Sie am häufigsten tweeten? 🤖',
        longDescription: 'Dank der Emoji-Stimmung erfahren Sie, welche Emotionen Sie in letzter Zeit am meisten getwittert haben... Wären Sie bereit, auf Ihre TOP 3 zu wetten?',
      },
      'new-years-kiss': {
        description: 'Wen werden Sie dieses Jahr unter dem Mistelzweig küssen? 😘',
        longDescription: 'Wir halten den Algorithmus dieser Funktion geheim. Alles, was wir sagen können, ist, dass Sie um Mitternacht jemanden küssen werden!',
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
      title: 'Willkommen',
      welcomeToAffinitweet: 'Willkommen bei Affinitweet&nbsp;&nbsp;🎉',
      helloYou: 'Hallo {username}&nbsp;&nbsp;😊',
      proudToWelcomeYou: 'Hallo {username}, wir sind erfreut, Ihre Bekanntschaft zu machen und freuen uns, Sie unter unseren mehr als 10 Millionen Benutzern begrüßen zu dürfen!',
      onboardingCreation: 'Wir freuen uns, Sie wieder bei uns zu haben! Wir haben dieses kleine Onboarding erstellt, um sicherzustellen, dass Sie alles vor allen anderen wissen...',
      next: 'Weiter',
      littleQuestion: 'Kurze Frage...',
      doYouWantToFollowUs: 'Wir aktualisieren Affinitweet regelmäßig. Möchten Sie uns auf Twitter folgen, um zu erfahren, wann neue Funktionen zur Verfügung stehen?',
      iWantToFollowYou: 'Ich möchte Ihnen folgen 😊',
      iDontWantToFollowYou: 'Nein, danke, ich bin erst mal zufrieden!',
      great: 'Großartig&nbsp;&nbsp;🥰',
      doYouWantToEnableNotifications: 'Und wenn Sie schon dabei sind, möchten Sie über unsere Tweets benachrichtigt werden, damit Sie unsere neuen Funktionen als Erster testen können?',
      iWantToBeNotified: 'Ich möchte auch benachrichtigt werden 😇',
      iDontWantToBeNotified: 'Nein, ich will nur die Tweets!',
      noProblem: 'Kein Problem&nbsp;&nbsp;😉',
      noProblemDescription: 'Ihr habt ja recht, wir kennen uns kaum! Vielleicht beim nächsten Mal dann, wir hoffen, Sie haben Spaß auf Affinitweet 💜',
      nice: 'Schön&nbsp;&nbsp;🤗',
      niceDescription: 'Hopp... hopp... und hopp!<br />Das war\'s, Sie folgen uns jetzt auf Twitter! Vielen Dank und viel Spaß auf Affinitweet 💜',
      awesome: 'Fantastisch&nbsp;&nbsp;😍',
      awesomeDescription: 'Hopp... hopp... und hopp!<br /><br />Das war\'s, Sie folgen uns jetzt auf Twitter und die Benachrichtigungen wurden aktiviert! Vielen Dank und viel Spaß auf Affinitweet 💜',
      uhoh: 'Uh oh... 😕',
      uhohDescription: 'Twitter, du hast ein Problem...<br />Leider ist Twitter im Moment nicht in der Lage, dich dazu zu bringen, uns zu folgen. Bitte <u>Klicken Sie auf den Follow-Button</u> um es zu tun 😊',
      letsGo: 'Los geht\'s!',
    },

    /* Home page */
    index: {
      title: 'Startseite',
      description: 'Your Twitter account, more fun 😎 and more pro 🧑‍💻', // TODO
      titleH1: 'Your Twitter account,', // TODO
      titleH1s: 'more {fun} {emojiFun} more {pro} {emojiPro}', // TODO
      fun: 'fun', // TODO
      pro: 'pro', // TODO
      titleH2: 'Rediscover your Twitter account through dozens of exclusive features and tools to manage your account like a pro.', // TODO
      heresWhyAffinitweetIsNumberOne: "Here's why Affinitweet is the 1{sup} choice", // TODO
      sup: 'st', // TODO
      forALotOfUsers: 'for more than 10 million users worldwide', // TODO
      generatedResults: 'Schön generierte Ergebnisse',
      generatedResultsDescription: 'Affinitweet ist bekannt für seine sehr schönen generierten Bilder, wir verwenden die besten Tools für Ihre Ergebnisse.',
      userConsentPrivacy: 'Benutzereinwilligung & Datenschutz',
      userConsentPrivacyDescription: 'Alles, was wir auf Affinitweet mit Ihren Daten machen, ist in unserer Datenschutzerklärung erklärt, keine Überraschung, kein Auto-Follow oder Auto-Tweet.',
      worldFamousLeader: 'Weltberühmter Führer',
      worldFamousLeaderDescription: 'Affinitweet wurde im Februar 2015 eröffnet und mehr als 10 Millionen Nutzer nutzen unsere Dienste, überall auf der Welt.',
      fastRealTimeResults: 'Schnelle Echtzeit-Ergebnisse',
      fastRealTimeResultsDescription: 'Wir haben Affinitweet auf den neuesten Web-Technologien aufgebaut, so dass es so schnell wie möglich mit Echtzeit auf Funktionsseiten ist.',
      noAdsNoVirus: 'Keine aufdringliche Werbung, kein Virus',
      noAdsNoVirusDescription: 'Affinitweet wurde nur zum Spaß erstellt, es gibt keinen Virus und nur 2 Anzeigen auf der gesamten Website (keine Popups, keine Weiterleitungen).',
      multilingualOpen: 'Mehrsprachig & offen',
      multilingualOpenDescription: 'Affinitweet ist in verschiedenen Sprachen verfügbar und jeder kann seinen Beitrag leisten und seine eigenen hinzufügen.',
      new: 'New', // TODO
      proTools: 'Professional tools', // TODO
      toManageYourTwitterAsAPro: 'to manage your Twitter account like a pro', // TODO
      discoverOurTools: 'Discover our tools', // TODO
      whatOurUsersSaid: 'What people say about us', // TODO
      ifYouNeedMoreTrust: 'if it takes more people and opinions to convince you', // TODO
      funFeatures: 'Entertaining features', // TODO
      unlimitedAndFree: 'interesting or fun, free and without limits', // TODO
      totalUsers: '10 Millionen',
      totalUsersDescription: 'Anwender vertrauen uns und nutzen unsere Dienste',
      monthlyUsers: '400 000',
      monthlyUsersDescription: 'Einzigartige User, die im Durchschnitt jeden Monat wiederkommen',
      totalFeatures: '36 Millionen',
      totalFeaturesDoneDescription: 'Seit unserer Eröffnung 2015 durchgeführte Funktionen',
      ourFeatures: 'Unsere Funktionen',
      seeDetailedList: 'Siehe detaillierte Liste',
      getInTouch: 'Nehmen Sie Kontakt auf!',
      getInTouchP1: 'Wir sind jederzeit über unseren Twitter-Account {twitterName} erreichbar.',
      getInTouchP2: 'Folgen Sie uns und lassen Sie sich über Updates und kommende Dinge informieren!',
      getInTouchP3: 'Sie können uns gerne einen Tweet oder eine Direktnachricht senden, wenn Sie Fragen, Anregungen oder Fehler haben.',
      getInTouchP4: 'Für kommerzielle Zwecke können Sie uns per E-Mail kontaktieren, siehe unsere Seite {pageName}.',
    },

    /* User profile page */
    profile: {
      title: 'Profil',
      description: 'Konto, Einstellungen und Verlauf Ihres Profils.',
      joinBeta: 'Nehmen Sie am Beta-Programm teil, um unsere Funktionen zu testen, bevor sie für die Öffentlichkeit freigegeben werden!',
      betaTerms: 'Das Beta-Programm ist kostenlos. Einige Funktionen funktionieren möglicherweise nicht und können bis zur Veröffentlichung jederzeit geändert werden.',
      applyForFree: 'Kostenlos bewerben',
      noThanks: 'Nein, danke',
      profile: 'Profil',
      history: 'Verlauf',
      preferences: 'Einstellungen',
      language: 'Sprache',
      by: 'von',
      addLanguage: 'Sprache hinzufügen...',
      contributeOnGitHub: 'auf GitHub mitwirken',
      account: 'Konto',
      followers: 'Follower',
      following: 'Folge ich',
      noHistory: 'Keine Verlaufsdaten.',
      autoTweet: 'Tweete Ergebnisse',
      autoTweetDescription: 'Aktivieren Sie diese Option, um Ihre Ergebnisse automatisch zu tweeten. Ein Tweet wird veröffentlicht, sobald die Ergebnisse fertig sind, mehr nicht.',
      saveResults: 'Ergebnisse speichern',
      saveResultsDescription: 'Aktivieren Sie diese Option, um Ihre Ergebnisse im Verlauf zu speichern (Funktionsname + Bild + Zeit). Standardmäßig speichern wir Ihre Ergebnisse nicht.',
      emojis: 'Emojis pack',
      iOSemojis: 'iOS (Apple)',
      iOSemojisDescription: 'Ihre Ergebnisse werden mit iOS-Emojis erzeugt.',
      androidEmojis: 'Android (Google)',
      androidEmojisDescription: 'Ihre Ergebnisse werden mit Android-Emojis erzeugt.',
      clearHistory: 'Verlauf löschen',
      clearHistoryDescription: 'Löschen Sie Ihren Affinitweet-Ergebnisverlauf.',
      deleteAccount: 'Konto löschen',
      deleteAccountDescription: 'Löschen Sie Ihr Affinitweet-Konto, ist alles verloren.',
      show: 'Ansehen',
      showMore: 'Mehr anzeigen...',
      saved: 'Gespeichert',
    },

    /* Feature page */
    feature: {
      login: 'Anmelden, um fortzufahren...',
      startFeature: "Los geht's!",
      betaFeature: 'Diese Funktion befindet sich derzeit in der Beta-Phase und ist nur für Benutzer verfügbar, die Teil des Beta-Programms sind. Sie können sich für dieses Programm bewerben, wenn Sie diese Funktion testen möchten.',
      applyForFree: 'Kostenlos bewerben',
      results: 'Hier sind Ihre Ergebnisse!',
      tweetResults: 'Tweete Ergebnisse',
      tweetingResults: 'Tweeten...',
      requireAutoTweetDescription: 'Möchten Sie Auto-Tweet-Ergebnisse aktivieren? Sie können diese Option in Ihrem Profil deaktivieren.',
      yesEnable: 'Ja, aktivieren',
      no: 'Nein',
      retry: 'Erneut versuchen!',
      doYouWantToKnowMore: 'Möchten Sie mehr über Ihr Twitter-Konto erfahren?',
      discoverOtherFeatures: 'Mehr Funktionen entdecken',
    },

    /* Features listing page */
    features: {
      title: 'Features',
      description: 'Entdecken Sie alle unsere Funktionen, um alles über Ihren Twitter-Account zu erfahren.',
      ourFeatures: "Here's a list of all our features {theyAreAllFree} you can try in no time that generate an image based on your Twitter account! If you're looking for a particular feature, you can use the search box below to see what we have to offer.", // TODO
      theyAreAllFree: 'entirely free', // TODO
      searchFeatures: 'Suchfunktionen... (z. B.: Top Friends, Valentine...)',
      noFeatureFound: 'Unfortunately no feature matches this search... 😔',
      resetSearch: 'Reset search',
      letsGo: 'Los geht\'s!',
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
      title: 'Beta Programm',
      description: 'Bewerben Sie sich kostenlos für das Beta-Programm und testen Sie unsere Beta-Funktionen, bevor sie für die Öffentlichkeit freigegeben werden!',
      betaProgramDescription: 'Das Beta-Programm wurde geschaffen, um neue Funktionen zu testen, bevor sie für die Öffentlichkeit freigegeben werden, um sicherzustellen, dass sie wie erwartet funktionieren. Indem Sie Teil dieses Programms sind, können Sie sie testen.',
      currentBetaFeatures: 'Es gibt derzeit eine Reihe von Funktionen im Beta-Programm:',
      noCurrentBetaFeatures: 'Es gibt derzeit keine Funktion im Beta-Programm, aber es werden bald weitere folgen!',
      fewThingsToKnow: 'Ein paar Dinge, die Sie über das Beta-Programm wissen sollten:',
      li1: 'Es ist 100% kostenlos',
      li2: 'Es gibt eine begrenzte Anzahl von Plätzen',
      li3: 'Sie können es verlassen, wann Sie wollen',
      li4: 'Dedizierter & vorrangiger Support auf Twitter per DM',
      li5: 'Beta-Funktionen funktionieren möglicherweise nicht wie erwartet',
      li6: 'Beta-Funktionen können sich jederzeit ändern',
      thanksForInterest: 'Vielen Dank für Ihr Interesse an dem Beta-Programm 💜',
      alreadyApplied: 'Sie sind bereits im Beta-Programm,<br />Vielen Dank für Ihr Interesse 💜',
      leaveBetaProgram: 'Verlassen Sie das Beta-Programm',
      leavingTerms: 'Wenn Sie das Beta-Programm verlassen, können Sie sich möglicherweise nicht erneut bewerben, wenn keine freien Plätze vorhanden sind.',
      placesAvailable: '500 Plätze verfügbar! 🎟',
      proPlace: 'Here\'s your privileged place 👑', // TODO
      accountEligible: 'Ihr Konto ist berechtigt, sich für das Beta-Programm zu bewerben und es sind nur noch wenige Plätze frei!',
      yourEmailAddress: 'Ihre E-Mail Adresse...',
      applyForFree: 'Kostenlos bewerben',
      applyTerms: 'Mit der Anmeldung zum Beta-Programm erklären Sie sich damit einverstanden, Benachrichtigungs- und Werbe-E-Mails zu erhalten (maximal 1 pro Woche).',
      noPlaceAvailable: 'Kein Platz vorhanden 😕.',
      betaProgramFull: 'Leider ist das Beta-Programm voll und wir können zur Zeit keinen kostenlosen Zugang gewähren, aber Sie können trotzdem versuchen, sich einen Zugang zu verdienen, indem Sie die Methoden im nächsten Block anwenden!',
      keepUpdated: 'Wir werden Sie informieren, sobald ein neuer kostenloser Zugang auf {ourTwitterAccount} verfügbar ist.',
      ourTwitterAccount: 'unser Twitter-Konto',
      or: 'oder',
      earnYourAccess: 'Verdienen Sie sich Ihren Zugang! 🎁',
      writeReview: '#1 - Schreiben Sie eine Bewertung über uns {onTrustpilot} und senden Sie uns deren Link auf unserem Twitter-Account per DM, wir werden Ihnen dann einen Zugang einrichten.',
      onTrustpilot: 'auf Trustpilot',
      winContest: 'oder #2 - Nehmen Sie an unseren Wettbewerben auf {ourTwitterAccount} teil, um einen Zugang zu gewinnen, folgen Sie uns und aktivieren Sie Benachrichtigungen, um auf dem Laufenden zu bleiben.',
      randomDraws: 'Jedes dieser Gewinnspiele endet mit einer zufälligen Auslosung auf {pickaw}, so dass jeder eine Chance auf den Gewinn hat.',
      welcomeToTheBetaProgram: 'Willkommen zum Beta-Programm! Sie können jetzt unsere Beta-Funktionen testen 😊.',
      seeYouSoonBetaProgram: 'Danke, dass Sie Teil des Beta-Programms sind, ich kann es kaum erwarten, Sie bald zu sehen!',
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
      title: 'Legal',
      description: 'Informationen über uns und Cookies.',
      intro: 'Gemäß Artikel 6 des Gesetzes Nr. 2004-575 vom 21. Juni 2004 über das Vertrauen in die digitale Wirtschaft werden die Nutzer der Website {site} über die Identität der verschiedenen an der Umsetzung und Überwachung beteiligten Parteien informiert:',
      owner: 'Eigentümer',
      publisher: 'Leiter der Veröffentlichung',
      publisherText: 'Die für die Veröffentlichung verantwortliche Person ist eine natürliche Person.',
      host: 'Host',
      requestAddress: 'Die vollständige Adresse erhalten Sie auf Anfrage per E-Mail an {email}.',
      warningCookies: 'Über Cookies',
      p1: 'Ein Cookie ist eine kleine Textdatei, die über die von Ihnen betrachtete Website an Ihren Browser gesendet wird. Mit diesem Cookie werden Informationen über Ihren Besuch auf der Website gespeichert, wie z. B. Ihre bevorzugte Sprache und andere Einstellungen. Dies kann Ihren nächsten Besuch auf dieser Website erleichtern und sie für Sie nützlicher machen. Cookies spielen eine wichtige Rolle. Ohne Cookies könnte die Nutzung des Webs sehr viel frustrierender sein.',
      t1: 'Welcher rechtliche Rahmen ist anwendbar?',
      p2: 'Mit der Änderung von Artikel 5 Absatz 3 der Richtlinie 2002/58/EG durch den Erlass der Richtlinie 2009/136/EG hat der europäische Gesetzgeber den Grundsatz festgelegt, dass die Speicherung von Informationen auf dem Gerät eines Nutzers oder der Zugriff auf bereits gespeicherte Informationen nur mit vorheriger Zustimmung des Nutzers erfolgen sollte, es sei denn, diese Maßnahmen sind unbedingt erforderlich, damit der Anbieter einen vom Nutzer ausdrücklich angeforderten Dienst erbringen kann. Artikel 32-II des Gesetzes vom 6. Januar 1978 übernimmt diesen Grundsatz.',
      t2: 'Diese Website verwendet Cookies für die folgenden Zwecke:',
      'l1-1': 'Um uns zu helfen, Ihren Browser zu erkennen und die Einstellungen zu speichern, die Sie bei Ihren früheren Besuchen auf dieser Website vorgenommen haben',
      'l1-2': 'Um uns zu helfen, die Effektivität unserer interaktiven Online-Inhalte, Funktionen, Werbung und anderer Kommunikation zu messen und zu untersuchen',
      'l1-3': 'Zur Überwachung der analytischen Daten auf der Website, der Nutzung der Website durch die Benutzer und zur Verbesserung der Dienstleistungen und Inhalte dieser Website.',
      t3: 'Wie lösche ich mit meinem Browser verknüpfte Cookies?',
      p3: 'Sie können Cookies in Ihrem Browser jederzeit deaktivieren, indem Sie die Anweisungen in den Hilfedateien Ihres Browsers befolgen. Sie können Ihre Cookies auch direkt in den Einstellungen Ihres Browsers setzen:',
    },

    /* Terms of service page */
    terms: {
      title: 'Nutzungsbedingungen',
      description: 'Beachten Sie unsere allgemeinen Nutzungsbedingungen.',
      h1: 'Bedingungen',
      p1: 'Durch den Zugriff auf die Website unter {url} erklären Sie sich mit diesen Nutzungsbedingungen und allen geltenden Gesetzen und Vorschriften einverstanden und stimmen zu, dass Sie für die Einhaltung aller geltenden lokalen Gesetze verantwortlich sind. Wenn Sie mit einer dieser Bedingungen nicht einverstanden sind, ist es Ihnen untersagt, diese Website zu nutzen oder darauf zuzugreifen. Die auf dieser Website enthaltenen Materialien sind durch geltendes Urheber- und Markenrecht geschützt.',
      h2: 'Nutzungslizenz',
      'l1-1': 'Es wird die Erlaubnis erteilt, eine Kopie der Materialien (Informationen oder Software) auf der Website von Affinitweet für den persönlichen, nicht-kommerziellen Gebrauch vorübergehend herunterzuladen. Dies ist die Gewährung einer Lizenz, nicht eine Übertragung des Eigentums, und unter dieser Lizenz dürfen Sie nicht:',
      'l2-1': 'die Materialien zu verändern oder zu kopieren;',
      'l2-2': 'die Materialien für kommerzielle Zwecke oder für eine öffentliche Darstellung (kommerziell oder nicht kommerziell) zu verwenden;',
      'l2-3': 'zu versuchen, eine auf der Website von Affinitweet enthaltene Software zu dekompilieren oder zurückzuentwickeln;',
      'l2-4': 'Urheberrechts- oder andere Eigentumsvermerke aus den Materialien zu entfernen; oder',
      'l2-5': 'die Materialien an eine andere Person weiterzugeben oder die Materialien auf einem anderen Server zu "spiegeln".',
      'l1-2': 'Diese Lizenz erlischt automatisch, wenn Sie eine dieser Einschränkungen verletzen, und kann von Affinitweet jederzeit beendet werden. Nach Beendigung der Betrachtung dieser Materialien oder nach Beendigung dieser Lizenz müssen Sie alle heruntergeladenen Materialien in Ihrem Besitz, ob in elektronischem oder gedrucktem Format, vernichten.',
      h3: 'Haftungsausschluss',
      'l3-1': 'Die Materialien auf der Website von Affinitweet werden im Ist-Zustand zur Verfügung gestellt. Affinitweet gibt keine Garantien, weder ausdrücklich noch stillschweigend, und lehnt hiermit alle anderen Garantien ab, einschließlich, ohne Einschränkung, stillschweigende Garantien oder Bedingungen der Marktgängigkeit, Eignung für einen bestimmten Zweck oder Nicht-Verletzung von geistigem Eigentum oder anderen Rechtsverletzungen.',
      'l3-2': 'Darüber hinaus übernimmt Affinitweet keine Gewähr für die Richtigkeit, die wahrscheinlichen Ergebnisse oder die Verlässlichkeit der Nutzung der Materialien auf seiner Website oder in sonstiger Weise in Bezug auf diese Materialien oder auf Websites, die mit dieser Website verlinkt sind, und macht keine Zusicherungen.',
      h4: 'Einschränkungen',
      p2: 'In keinem Fall sind Affinitweet oder seine Zulieferer haftbar für Schäden (einschließlich, aber nicht beschränkt auf Schäden durch Datenverlust oder Gewinn oder aufgrund von Geschäftsunterbrechungen), die sich aus der Nutzung oder Unmöglichkeit der Nutzung der Materialien auf der Website von Affinitweet ergeben, selbst wenn Affinitweet oder ein von Affinitweet autorisierter Vertreter mündlich oder schriftlich über die Möglichkeit solcher Schäden informiert wurde. Da einige Gerichtsbarkeiten keine Beschränkungen von stillschweigenden Garantien oder Haftungsbeschränkungen für Folgeschäden oder zufällige Schäden zulassen, gelten diese Beschränkungen möglicherweise nicht für Sie.',
      h5: 'Genauigkeit der Materialien',
      p3: 'Die Materialien auf der Website von Affinitweet können technische, typografische oder fotografische Fehler enthalten. Affinitweet übernimmt keine Garantie für die Richtigkeit, Vollständigkeit oder Aktualität der Materialien auf seiner Website. Affinitweet kann jederzeit und ohne Vorankündigung Änderungen an den Materialien auf seiner Website vornehmen. Affinitweet geht jedoch keine Verpflichtung ein, die Materialien zu aktualisieren.',
      h6: 'Verknüpfungen',
      p4: 'Affinitweet hat nicht alle mit der Website von Affinitweet verlinkten Seiten überprüft und ist nicht verantwortlich für die Inhalte der verlinkten Seiten. Die Aufnahme eines Links bedeutet nicht, dass Affinitweet die Website billigt. Die Nutzung einer solchen verlinkten Website erfolgt auf eigenes Risiko des Nutzers.',
      h7: 'Modifikationen',
      p5: 'Affinitweet kann diese Nutzungsbedingungen für seine Website jederzeit ohne vorherige Ankündigung überarbeiten. Durch die Nutzung dieser Website erklären Sie sich mit der jeweils aktuellen Version dieser Nutzungsbedingungen einverstanden.',
      h8: 'Geltendes Recht',
      p6: 'Diese Bedingungen unterliegen den Gesetzen Frankreichs und werden in Übereinstimmung mit diesen ausgelegt, und Sie unterwerfen sich unwiderruflich der ausschließlichen Zuständigkeit der Gerichte in diesem Staat oder an diesem Ort.',
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
      title: 'Daten und Privatsphäre',
      description: 'Informationen darüber, wie wir Ihre Daten abrufen, analysieren und speichern.',
      intro: 'Wir nehmen den Schutz von Daten sehr ernst und möchten unsere Nutzer im Rahmen unserer Geschäftstätigkeit darüber informieren, was wir mit diesen Daten tun. Im Folgenden finden Sie alle notwendigen Informationen über die Speicherung und Verarbeitung dieser Daten. Informationen zu Cookies finden Sie auch auf {thatPage}.',
      storage: 'Speicherung',
      personalData: 'Persönliche Daten',
      p1: 'Wenn Sie sich bei Affinitweet anmelden, sammeln wir die Informationen aus Ihrem Twitter-Profil, die wir benötigen, um Ihnen unsere Dienste anbieten zu können. Unter diesen Informationen speichern wir Ihre:',
      'l1-1': 'einzigartige Twitter-ID',
      'l1-2': 'Benutzername (@)',
      'l1-3': 'Name',
      'l1-4': 'Authentifizierungstoken',
      'l1-5': 'Authentifizierungs-Token Geheimnis',
      'l1-6': 'Sprache',
      p2: 'Die anderen Informationen, die Sie in Ihrem Profil sehen können, werden vorübergehend in Ihrer Sitzung gespeichert, melden Sie sich einfach ab, um sie zu löschen.',
      i1: 'Information: Diese Daten können vollständig und sofort gelöscht werden, indem Sie einfach auf die Schaltfläche {button} unten in {yourProfile} klicken.',
      results: 'Ergebnisse',
      p3: 'Standardmäßig speichert Affinitweet die Ergebnisse Ihrer Aktionen nicht. Sie können jedoch diese Option aktivieren, um eine Historie Ihrer Ergebnisse in Ihrem Profil zu haben. Unter diesen Informationen, speichern wir:',
      'l2-1': 'der Benutzer, zu dem das Ergebnis gehört',
      'l2-2': 'der Name der Funktion',
      'l2-3': 'den Zeitstempel des Ergebnisses',
      i2: 'Information: Diese Daten können vollständig und sofort gelöscht werden, indem Sie einfach auf die {button} am unteren Rand von {yourProfile} klicken.',
      computing: 'Verarbeitung',
      p4: 'Wenn Sie die verschiedenen Funktionen auf der Website ausführen, rufen wir die Twitter-API mit Ihren zuvor gespeicherten Token auf.',
      i3: 'Information: Wir verwenden Ihre Token, um in unseren Ergebnissen so genau wie möglich sein zu können. Wenn Sie also z. B. einem oder mehreren Nutzern mit einem geschützten Konto folgen, können wir diese ggf. in den Ergebnissen berücksichtigen.',
      p5: 'Hier ist das, was wir bekommen können:',
      'l3-1': 'Ihr Feed',
      'l3-2': 'Ihre Tweets/Retweets',
      'l3-3': 'Ihre Erwähnungen',
      'l3-4': 'Ihre Follower',
      'l3-5': 'Ihre Personen denen sie folgen',
      p6: 'Diese Informationen werden nur erhoben und verarbeitet, wir speichern sie nicht.',
      publish: 'Veröffentlichung',
      p7: 'Wenn Sie sich bei Affinitweet anmelden, bitten wir Sie um einen grundlegenden Lesezugriff auf Ihr Konto und einen Schreibzugriff. Wir führen keine Aktion ohne Ihren ausdrücklichen Wunsch durch Aktivierung einer Option von der Seite aus durch.',
      i4: 'Information: Sie können den Zugang, den Sie uns bei der Anmeldung gewährt haben, jederzeit in Ihrem {yourTwitterProfile} widerrufen.',
      autoTweet: 'Automatischer Tweet',
      p8: 'Um bestimmte Funktionen nutzen zu können, bitten wir Sie möglicherweise, die Option "Automatischer Tweet" für Ergebnisse zu aktivieren. Wenn Sie zustimmen, diese Option zu aktivieren, wird für jedes Ergebnis ein Tweet mit dem generierten Bild veröffentlicht.',
      i5: 'Information: Sie können diese Option jederzeit unter {yourProfile} im Abschnitt {button} deaktivieren.',
      question: 'Haben Sie Fragen?',
      p9: 'Wenn Sie Fragen zu Affinitweet haben, zögern Sie bitte nicht, uns über Twitter oder per E-Mail zu kontaktieren, wir werden Ihnen gerne antworten!',
      thatPage: 'diese Seite',
      yourProfile: 'Ihr Profil',
      yourTwitterProfile: 'Ihr Twitter-Profil',
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
    cooldown: 'Diese Funktion hat eine Abklingzeit von %{cooldown} Sekunden. Bitte versuchen Sie es erneut in:',
    unknown: 'Es ist ein Fehler aufgetreten. Unser Team wurde benachrichtigt.',
    unknownFeature: 'Unbekannte Funktion.',
    unavailableFeature: 'Nicht verfügbare Funktion.',
    betaFeature: 'Sie können die Beta-Funktionen erst nutzen, wenn Sie Teil des Beta-Programms sind.',
    invalidEmail: 'E-Mail ist ungültig.',
    selfUsername: 'Geben Sie einen anderen Benutzernamen als sich selbst ein.',
    badUsername: 'Falscher Benutzername.',
    notEnoughData: 'Nicht genug Tweets zum Analysieren.',
    errorWhileRendering: 'Fehler bei der Bilderzeugung.',
    accountProtected: 'Sie können diese Funktion nicht verwenden, solange Ihr Konto geschützt ist.',
    targetAccountProtectedAndNotFollowing: 'Sie können diese Funktion nicht verwenden, da der anvisierte Benutzer geschützt ist und Ihnen nicht folgt.',
    refreshPage: 'Please refresh the page.', // TODO
    timeout: 'Timeout überschritten.',
    twitterError: 'Twitter gab einen Fehler zurück:',
    twitterErrors: {
      32: 'Sie konnten nicht authentifiziert werden.',
      34: 'Sorry, diese Seite existiert nicht.',
      50: 'Benutzer nicht gefunden.',
      63: 'Der Benutzer wurde gesperrt.',
      64: 'Ihr Konto ist gesperrt und darf nicht auf diese Funktion zugreifen.',
      87: 'Der Client darf diese Aktion nicht durchführen.',
      88: 'Ratengrenze überschritten. Wiederholung in 15 Minuten',
      89: 'Ungültiges oder abgelaufenes Token. Bitte verbinden Sie sich erneut.',
      99: 'Ihre Anmeldeinformationen konnten nicht verifiziert werden.',
      130: 'Überkapazität.',
      131: 'Interner Fehler.',
      135: 'Sie konnten nicht authentifiziert werden.',
      144: 'Kein Status mit dieser ID gefunden.',
      179: 'Tut mir leid, Sie sind nicht berechtigt, diesen Status zu sehen.',
      185: 'Der Benutzer hat das tägliche Limit für Statusaktualisierungen überschritten.',
      186: 'Der Tweet muss etwas kürzer sein.',
      187: 'Status ist ein Duplikat.',
      220: 'Ihre Anmeldedaten erlauben keinen Zugriff auf diese Ressource.',
      261: 'Application cannot perform write actions.',
      326: 'To protect our users from spam and other malicious activity, this account is temporarily locked.',
    },
  },

}
