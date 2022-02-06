export default {

  /* Layouts */
  _lt: {

    default: {
      cookiesBanner: '我们使用 cookies 🍪 来为您提供更好的使用体验。如果您继续访问我们的网站，则代表您同意我们的 cookies 策略。 {button}',
      readMore: '阅读更多...',
    },

  },

  /* Common */
  _cm: {
    lastRevision: '最新版本：',
    contactUs: 'Contact us', // TODO
    followUs: 'Follow us', // TODO
    reviewUs: '评价我们',
    close: 'Close', // TODO
    cancel: 'Cancel', // TODO
  },

  /* Languages */
  _lg: {
    french: '法语',
    english: '英语',
    polish: '波兰语',
    spanish: '西班牙语',
    swedish: 'Swedish', // TODO
    turkish: '土耳其语',
    indonesian: '印尼语',
    portuguese: '葡萄牙语',
    simplifiedChinese: '简体中文',
    traditionalChinese: '繁體中文',
    dutch: 'Dutch', // TODO
    german: '德语',
    arabic: '阿拉伯',
  },

  /* Pluralization */
  _pl: {
    seconds: '秒 | 秒 | 秒',
    features: 'feature | features | features', // TODO
    results: 'result | result | results', // TODO
  },

  /* Components */
  _cp: {

    /* Header component */
    header: {
      logIn: 'Log in', // TODO
      helloYou: 'Hello {username} 👋🏻', // TODO
      myAccount: '我的账户',
      switchAccount: '切换账户',
      logout: '登出',
    },

    /* Footer component */
    footer: {
      madeWithLove: 'Affinitweet is a Twitter-based statistics and entertainment platform created in 2015 with ❤️ in France.', // TODO
      allRightsReserved: '版权所有。',
      stripeClimate: '1% of our revenue is donated to CO₂ reduction initiatives.', // TODO
      about: '关于',
      changelog: '更新日志',
      legal: '法律信息',
      partners: '伙伴',
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

    new: '新',
    popular: '流行的',
    real: '主要功能',
    fun: '趣味功能',
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
      generatedResults: '生成漂亮的图片',
      generatedResultsDescription: 'Affinitweet 以可以生成非常漂亮的图片而闻名，是我们获得统计图片最好的工具。',
      userConsentPrivacy: '保护您的知情权和隐私权',
      userConsentPrivacyDescription: '在我们的隐私政策中对您在 Affinitweet 上面的数据都有解释，无须担心。我们不会自动跟踪您或自动发送推文。',
      worldFamousLeader: '世界上有名的人都在用',
      worldFamousLeaderDescription: 'Affinitweet 创立于 2015 年 2 月，至今有超过 1000 万的用户在使用我们的服务，遍布于世界各地。',
      fastRealTimeResults: '快速获得实时的结果',
      fastRealTimeResultsDescription: 'Affinitweet 使用了最新的网络技术，使您可以实时地在页面中快速获得您的所需。',
      noAdsNoVirus: '没有嵌入式广告和病毒',
      noAdsNoVirusDescription: 'Affinitweet 是为了娱乐而创立的，没有病毒，整个网站上也只有两个广告（没有弹出式窗口，也没有网页重定向行为）',
      multilingualOpen: '多语言支持的开放平台',
      multilingualOpenDescription: 'Affinitweet 目前支持多种语言，并且每个人都可以添加自己的语言。',
      new: 'New', // TODO
      proTools: 'Professional tools', // TODO
      toManageYourTwitterAsAPro: 'to manage your Twitter account like a pro', // TODO
      discoverOurTools: 'Discover our tools', // TODO
      whatOurUsersSaid: 'What people say about us', // TODO
      ifYouNeedMoreTrust: 'if it takes more people and opinions to convince you', // TODO
      funFeatures: 'Entertaining features', // TODO
      unlimitedAndFree: 'interesting or fun, free and without limits', // TODO
      totalUsers: '1000 万',
      totalUsersDescription: '信任并使用我们服务的用户',
      monthlyUsers: '400 000',
      monthlyUsersDescription: '平均每个月都会来访的回头客',
      totalFeatures: '3600 万',
      totalFeaturesDoneDescription: '自 2015 年创立以来带来的功能',
      ourFeatures: 'Our features', // TODO
      seeDetailedList: 'See detailed list', // TODO
      getInTouch: '联系我们 ',
      getInTouchP1: '您可以随时关注我们的 Twitter 帐户 {twitterName} ',
      getInTouchP2: '可以第一时间获得功能更新提醒和即将推出的功能的信息。',
      getInTouchP3: '如果您有任何问题、建议，或是错误反馈，请随时向我们发送推文或直接发送消息。',
      getInTouchP4: '如果需要商业洽谈，您可以通过电子邮件联系我们，请查看我们的 {pageName} 页面。',
    },

    /* User profile page */
    profile: {
      title: '个人资料',
      description: 'Account, settings and history of your profile.', // TODO
      joinBeta: 'Join the Beta program to test our features before they get released to public!', // TODO
      betaTerms: 'The Beta program is free of charge. Some features might not work and can be modified at anytime until they get published.', // TODO
      applyForFree: 'Apply for free', // TODO
      noThanks: 'No, thanks', // TODO
      profile: '个人资料',
      history: '历史记录',
      preferences: '偏好',
      language: '语言',
      by: '来自',
      addLanguage: '添加语言...',
      contributeOnGitHub: '在 GitHub 上提交贡献',
      account: '帐户',
      followers: '粉丝',
      following: '关注者',
      noHistory: '没有历史数据。',
      autoTweet: '生成完毕后自动发布结果', // TODO
      autoTweetDescription: '选中此选项可自动发布生成结果。一旦内容生成完毕，将自动发送推文，只会发布一次。', // TODO
      saveResults: '保存生成结果', // TODO
      saveResultsDescription: '选中此选项可以保存生成结果（包括功能名称和生成时间）。在默认情况下， Affinitweet 不会把这些生成结果存储在数据库中。', // TODO
      emojis: '表情符号',
      iOSemojis: 'iOS (苹果)',
      iOSemojisDescription: '您的生成结果中的表情符号将采用 iOS 样式。',
      androidEmojis: 'Android (谷歌)',
      androidEmojisDescription: '您的生成结果中的表情符号将采用 Android 样式。',
      clearHistory: '清除历史记录',
      clearHistoryDescription: '清除您在 Affinitweet 中生成的结果的历史记录。',
      deleteAccount: '删除账户',
      deleteAccountDescription: '删除您的 Affinitweet 账户，将会丢失所有数据。',
      show: 'view', // TODO
      showMore: '显示更多...',
      saved: '已保存。',
    },

    /* Feature page */
    feature: {
      login: '请登录以继续...',
      startFeature: '让我们开始吧！',
      betaFeature: 'This feature is currently in beta and is available for users being part of the Beta program only. You can apply for this program if you want to test this feature.', // TODO
      applyForFree: 'Apply for free', // TODO
      results: '这是您的生成结果！',
      tweetResults: '推文结果',
      tweetingResults: '正在发送推文...',
      requireAutoTweetDescription: '您要开启自动发送推文吗？您可以随时在您的个人设定中关闭自动发送。',
      yesEnable: '是的，启用',
      no: '不要开启',
      retry: '重试！',
      doYouWantToKnowMore: 'Do you want to learn more about your Twitter account?',
      discoverOtherFeatures: 'Discover more features',
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
      title: 'Legal', // TODO
      description: 'Information about us and cookies.', // TODO
      intro: '根据2004年6月21日数字经济法案2004-575号第6条，网站 {site} 的用户应被告知参与其实施和监测的各方的身份：',
      owner: '所有者',
      publisher: '出版管理',
      publisherText: '负责出版的人是一个自然人。',
      host: '地址',
      requestAddress: '可通过电子邮件 {email} 索取完整地址。',
      warningCookies: '关于 cookies',
      p1: 'Cookie 是通过您正在查看的网站保存到您的浏览器的小文本文件。使用此 cookie，有关您访问的信息将存储在网站上，例如您的首选语言和其他设置。这可能有助于您下次访问此网站并使您更加便利。Cookie 起着重要作用。没有 cookie，使用互联网的体验可能会大幅下降。',
      t1: '适用的法律框架是什么？',
      p2: '通过采用指令 2009/366/EC 修订指令 2002/58/EC 第 5(3) 条，欧洲立法者制定了一项原则，即只能在用户设备上存储信息或访问已存储的信息。在用户事先同意的情况下，除非这些操作对于提供商提供用户明确要求的服务是非常必要的。1978年1月6日的法律第32-II条接管了这一原则。',
      t2: '本网站使用 cookie 用于以下目的：',
      'l1-1': '帮助我们识别您的浏览器并保存您之前访问此网站时设置的偏好设置',
      'l1-2': '帮助我们衡量和研究在线互动内容，功能，广告和其他通信的有效性',
      'l1-3': '监控站点上的分析数据，用户对站点的使用以及改进本站点的服务和内容。',
      t3: '如何删除保存到浏览器的 cookie ？',
      p3: '您可以按照浏览器帮助文件中提供的说明随时选择在浏览器中禁用 cookie 。您还可以直接在浏览器设置中设置 cookie：',
    },

    /* Terms of service page */
    terms: {
      title: '服务条款',
      description: 'Consult our general terms and conditions of use.', // TODO
      h1: '条款',
      p1: '访问 {url} 网站，即表示您同意遵守这些服务条款，所有适用法律和法规，并同意您有责任遵守任何适用的当地法律。如果您不同意这些条款，则禁止您使用或访问本网站。本网站包含的材料受适用的版权和商标法保护。',
      h2: '使用许可',
      'l1-1': '允许在 Affinitweet 网站上临时下载一份材料（信息或软件），仅用于个人非商业短暂观看。这是授予许可，而不是转让所有权，根据本许可，您不得：',
      'l2-1': '修改或复制材料;',
      'l2-2': '将这些材料用于任何商业目的，或用于任何公共展示（商业或非商业）;',
      'l2-3': '尝试对 Affinitweet 网站上包含的任何软件进行反编译或反向工程;',
      'l2-4': '从材料中删除任何版权或其他专有注释;',
      'l2-5': '或者将材料转移给另一个人或任何其他“镜像”服务器上。',
      'l1-2': '如果您违反任何这些限制，本许可将自动终止，并且可能随时被 Affinitweet 终止。在终止您查看这些材料或终止本许可后，您必须销毁您拥有的任何下载材料，无论是电子格式还是印刷格式。',
      h3: '免责声明',
      'l3-1': 'Affinitweet 网站上的资料按「原样」提供。Affinitweet 不做任何明示或暗示的保证，特此声明并否认所有其他保证，包括但不限于适销性，适用于特定用途或不侵犯知识产权或其他侵权行为的暗示保证或条件。',
      'l3-2': '此外，Affinitweet 不保证或就材料在其网站上使用的准确性，可能的结果或可靠性或与此类材料或与本网站链接的任何网站有关的任何陈述。',
      h4: '限制',
      p2: '在任何情况下，Affinitweet 或其供应商均不对因在 Affinitweet 网站上使用或无法使用这些材料而导致的任何损害（包括但不限于因数据或利润损失或由于业务中断造成的损害）承担责任，即使Affinitweet 或 Affinitweet 授权代表已经口头或书面通知了此类损害的可能性。由于某些司法管辖区不允许对隐含担保或对间接或附带损害的责任限制进行限制，因此这些限制可能对您不适用。',
      h5: '材料的准确性',
      p3: 'Affinitweet 网站上出现的资料可能包括技术，印刷或照片错误。Affinitweet 不保证其网站上的任何材料准确，完整或最新。Affinitweet 可随时更改其网站上包含的材料，恕不另行通知。但Affinitweet 不承诺更新材料。',
      h6: '链接',
      p4: 'Affinitweet 尚未审查与其网站链接的所有网站，并且不对任何此类链接网站的内容负责。包含任何链接并不意味着 Affinitweet 对该网站的认可。使用任何此类链接网站的风险由用户自行承担。',
      h7: '修改',
      p5: 'Affinitweet 可随时修改其网站的这些服务条款，恕不另行通知。使用本网站即表示您同意受当时这些服务条款的约束。',
      h8: '适用法律',
      p6: '这些条款和条件受法国法律管辖并依据法律解释，您应无条件地服从该州或地区法院的专属管辖权。',
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
      title: '数据和隐私',
      description: 'Information on how we retrieve, analyze and store your data.', // TODO
      intro: '我们非常重视数据的隐私，在我们的业务过程中，我们希望告知用户我们如何处理它。您将在下面找到有关此数据的存储和处理的所有必要信息。有关cookie的信息也可在 {thatPage} 此页面上找到。',
      storage: '存储',
      personalData: '个人资料',
      p1: '当您登录 Affinitweet 时，我们会从您的 Twitter 个人资料中收集我们需要的信息，以便为您提供我们的服务。在这些信息中，我们存储您的：',
      'l1-1': '特有 Twitter ID',
      'l1-2': '用户名 (@)',
      'l1-3': '名称',
      'l1-4': '身份验证令牌',
      'l1-5': '身份验证令牌密钥',
      'l1-6': '语言',
      p2: '您可以在个人资料中看到的其他信息暂时存储在您的会话中，只需注销即可将其删除。',
      i1: '信息：这些数据可以完整删除，只需点击 {yourProfile} 底部的 {button} 即可立即删除。',
      results: '生成结果',
      p3: '默认情况下，Affinitweet 不会存储您所执行操作的结果。但是，您可以激活此选项，以在您的个人资料中显示结果的历史记录。在这些信息中，我们存储：',
      'l2-1': '结果所属的用户',
      'l2-2': '功能的名称',
      'l2-3': '结果的时间戳',
      i2: '信息：只需单击 {yourProfile} 底部的 {button} ，即可完整删除这些数据。',
      computing: '处理',
      p4: '当您执行网站上的各种功能时，我们会使用您之前存储的令牌调用 Twitter API。',
      i3: '信息：我们使用您的令牌在我们的结果中尽可能准确。因此，如果您跟随一个或多个受保护帐户的用户，我们将能够在必要时将其包含在结果中。',
      p5: '以下是我们可以获得的结果：',
      'l3-1': '您的简介',
      'l3-2': '您的推文/转发',
      'l3-3': '您的提及',
      'l3-4': '您的粉丝',
      'l3-5': '您的关注',
      p6: '此信息仅被收集和处理，我们不存储它。',
      publish: '发布',
      p7: '当您登录 Affinitweet 时，我们要求您对帐户的基本读取权限和写入权限。未经您的明确请求，我们不会通过激活网站上的选项来执行任何操作。',
      i4: '信息：您可以随时从您的 {yourTwitterProfile} 中撤消您向我们提供的访问权限。',
      autoTweet: '自动发布推文',
      p8: '为了能够使用某些功能，我们可能会要求您为结果启用自动推文选项。如果您同意启用此选项，则将针对生成的图像为每个结果发布推文。',
      i5: '信息：您可以随时从 {button} 部分的 {yourProfile} 停用此选项。',
      question: '有任何问题？',
      p9: '如果您对 Affinitweet 有任何疑问，请不要犹豫，通过 Twitter 或电子邮件与我们联系，我们将很乐意为您解答！',
      thatPage: '这个页面',
      yourProfile: '您的资料',
      yourTwitterProfile: '您的 Twitter 资料',
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
    cooldown: 'This feature have a %{cooldown} seconds cooldown. Please retry in:', // TODO
    unknown: '发生了一个错误。已自动报告给我们的团队。',
    unknownFeature: '未知。',
    unavailableFeature: 'Unavailable feature.', // TODO
    betaFeature: "You can't use beta features until you're appart of the Beta program.", // TODO
    invalidEmail: 'Email is invalid.', // TODO
    selfUsername: '不要输入自己。',
    badUsername: '错误的用户名。',
    notEnoughData: '数据不够。', // TODO
    errorWhileRendering: 'Error while generating image.', // TODO
    accountProtected: '您的账户启用了保护推文功能，所以您无法使用这项功能。',
    targetAccountProtectedAndNotFollowing: "You can't use this feature because the targeted user is protected and not following you.", // TODO
    refreshPage: 'Please refresh the page.', // TODO
    timeout: '请求超时。',
    twitterError: 'Twitter 返回了一个错误：',
    twitterErrors: {
      32: '验证失败。',
      34: '抱歉，该页面不存在。',
      50: '找不到用户。',
      63: '用户已被暂停。',
      64: '您的帐户已被暂停，不允许访问此功能。',
      87: '客户端不被允许执行此操作。',
      88: '超出限额。请在15分钟后再试。',
      89: '令牌无效或过期。请重新登录。',
      99: '无法验证您的凭据。',
      130: '超出负载。',
      131: '内部错误。',
      135: '无法验证您的账户。',
      144: '找不到该ID的状态。',
      179: '抱歉，您无权查看此状态。',
      185: '用户超过每日状态更新限制。',
      186: '推文需要更短一些。',
      187: '请不要发送重复推文。',
      220: '您提供的凭据不允许访问此资源。',
      261: '应用程序无法执行写入操作。',
      326: '为了保护我们的用户免受垃圾邮件和其他恶意活动的侵害，此帐户暂时被锁定。',
    },
  },

}
