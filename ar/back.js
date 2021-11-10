export default {

  /* Steps */
  _st: {
    received: 'تم استقبال الطلب من قبل الخادم...',
    starting: 'جاري البدأ...',
    fetchingData: 'جاري جلب البيانات...',
    fetchingTweets: 'جاري جلب التغريدات...',
    computingData: 'حساب البيانات...',
    generatingImage: 'جاري إنشاء الصورة...',
    uploadingMedia: 'جاري تحميل الصورة...',
    publishingTweet: 'جاري نشر الصورة...',
    savingResults: 'جاري حفظ النتائج...',
  },

  /* Features */
  _ft: {
    'twitter-activity': {
      basedOnLastDays: 'بناءً على الأيام {days} الماضية...',
      countingTweets: '...و عد {count} التغريدات:',
      interactionsReceived: 'تم إستلام التفاعلات',
      last30Days: '*: آخر 30 يوم',
      tweetingHours: 'ساعات التغريد',
      tweetRepartition: 'توزيع التغريدات',
    },
    'first-follower': {
      yourFirstFollowerIs: 'أول مُتابِع لك هو',
      dateFormat: 'في {month}/{day}/{year} في {hour}:{minute}:{second}',
    },
    'first-following': {
      yourFirstFollowingIs: 'أول مُتابَعة لك هي',
      dateFormat: 'في {month}/{day}/{year} في {hour}:{minute}:{second}',
    },
    'first-to-follow': {
      youAreNotFollowing: "أنت لا تتابع {user}...",
      notFollowingYou: '{user} لا يُتابعك...',
      youFollowed: 'أنت مُتابع لـ {user}: ',
      followedYou: '{user} يُتابِعك: ',
      dateFormat: 'في {month}/{day}/{year} في {hour}:{minute}:{second}',
      dateFormat2: 'في {month}/{day}/{year} في الساعة {hour}',
    },
    friendships: {
      average: 'متوسط الصداقات',
      following: 'أنت تُتابعه',
      'not-following': "أنت لا تٌتابعه",
      followed_by: 'انَّهُ يتابعكَ',
      'not-followed_by': "انَّهُ لا يُتابِعك",
      notifications_enabled: 'يتم إرسال لك إشعار عندما يُغرِد',
      'not-notifications_enabled': "لا يتم إرسال لك إشعار عندما يُغرِد",
      blocking: 'لقد قُمت بحظرِه',
      'not-blocking': "أنت لم تقُم بحظرِه",
      blocked_by: 'لقد قام بحظرك',
      'not-blocked_by': "لم يقُوم بحظرِك",
      muting: 'لقد قُمت بكتمِه',
      'not-muting': "أنت لم تقُم بكتمِه",
      want_retweets: 'أنت ترى إعادات تغريدِه',
      'not-want_retweets': "أنت لا ترى إعادات تغريدِه",
      marked_spam: 'لقد قُمت بوضع علامة عليهِ كإزعاجٍ',
      'not-marked_spam': "أنت لم تقُم بِوضعِ علامة عليه كإزعاجٍ",
    },
    'tweet-rate': {
      average: 'متوسط تغريدات {user}...',
      tweetsPerDay: '{count} مرة في اليوم',
    },
    'common-friends': {
      friendsRemaining: '...و {count} أصدقاء آخرين!',
      noFriends: 'لا أصدِقاء مُشتركين...',
      commonFriends: 'لدي {count} أصدِقاء مُشتركين مع {user}!',
      noCommonFriends: 'ليس لدي أي أصدقاء مُشتركين مع {user}...',
    },
    valentine: 'عيد الحب الخاص بك {year} هو',
    'stolen-kiss': 'قبلتك المسلوبة هي',
    'hidden-twin': 'توأمك المخفي هو',
    'secret-crush': 'مُعجبك السري هو',
    'may-day': 'أعطي كونفالاريا أيار 💐 إلى',
    'halloween-duo': 'الثنائي الخاص بك في عيد الهالوين هو',
    'new-years-kiss': "قُبلتي للسنة الجديدة هي",
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
    valentine: "هذا العام أنت مُلكي {user}! ❤️\nوأنت من سيكون مُلكَك؟",
    'twitter-activity': "هذه إحصائيات حسابي في الأيام {days} الماضية. هل لديك تفاعلات أفضل؟",
    'first-follower': 'اكتشفت للتو أول مُتابع لي على تويتر، انَّهُ {user} و تابعني {date}!\nمن هو أول مُتابع لك على تويتر؟',
    'first-following': 'اكتشفت للتو أول شخص تابعته على تويتر، انَّهُ {user} ولقد تابعته {date}!\nمن هو أول من تابعته على تويتر؟',
    'secret-crush': '{user} يحبُني سريًا! 😳\nمن يُحبك في السر؟',
    'hidden-twin': '{user} هو توأمي السري 😱\nاكتشف من هو توأمك السري!',
    'stolen-kiss': '{user} سوف أقبلك حول الزاوية 😏\nوأنت من سيفعل لك ذلك؟',
    'may-day': 'سأعطيك أفضل باقة من كونفالاريا أيار يا {user}! 💐\nوأنت من ستُعطي؟',
    'halloween-duo': "لست مضطرًا حتى لارتداء الملابس هذا العام لأكون مخيفًا، أنا مع {user}! 🎃👻\nوأنت مع من ستُخيف أكثر؟",
    'new-years-kiss': "أنا أقوم بالإستعداد لأفضلِ قبلةٍ لدي العام الماضي والأول من العام المُقبل {user} 😘💕\nوأنت من ستٌقبله عند مُنتصف الليل؟",
  },

}
