export default {

  /* Steps */
  _st: {
    received: '收到服務器返回的信息...',
    starting: '已開始...',
    fetchingData: '獲取數據...',
    fetchingTweets: '獲取推文...',
    computingData: '計算數據...',
    generatingImage: '生成圖像...',
    uploadingMedia: '正在上傳圖片...',
    publishingTweet: '發布推文...',
    savingResults: '保存結果...',
  },

  /* Feature */
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
      youAreNotFollowing: '您沒有關註 {user}...',
      notFollowingYou: '{user} 沒有關註您...',
      youFollowed: '您關註了 {user}: ',
      followedYou: '{user} 關註了您: ',
      dateFormat: '於 {year}年{month}月{day}日 {hour}:{minute}:{second}',
      dateFormat2: '於 {month}年{day}月{year}日 {hour}時',
    },
    friendships: {
      average: '友誼平衡',
      following: '您關註了他',
      'not-following': '您沒有關註他',
      followed_by: '他關註了您',
      'not-followed_by': '他沒有關註您',
      notifications_enabled: '他在發推時您會收到通知',
      'not-notifications_enabled': '他在發推時您不會收到通知',
      blocking: '您屏蔽了他',
      'not-blocking': '您沒有屏蔽他',
      blocked_by: '他屏蔽了您',
      'not-blocked_by': '他沒有屏蔽您',
      muting: '您靜音了他',
      'not-muting': '您沒有把他靜音',
      want_retweets: '您可以看到他的轉推',
      'not-want_retweets': '您無法看到他的轉推',
      marked_spam: '您把他標記為了濫用賬戶',
      'not-marked_spam': '您沒有把他標記為濫用賬戶',
    },
    'tweet-rate': {
      average: '{user} 發推平均...',
      tweetsPerDay: '每天 {count} 次',
    },
    'common-friends': {
      friendsRemaining: '... 和 {count} 是朋友！',
      noFriends: '沒有共同的朋友...',
      commonFriends: '我與 {user} 是 {count} 的共同好友！',
      noCommonFriends: '我與 {user} 沒有共同的朋友...',
    },
    valentine: '您的 {year} 情人節的伴侶是',
    'stolen-kiss': '與您偷吻的是',
    'hidden-twin': '您的隱藏雙胞胎是',
    'secret-crush': '您的暗戀是',
    'may-day': '我將一把鈴蘭 💐 給了',
    'halloween-duo': '您的萬聖節夥伴是',
    'new-years-kiss': '我的新年之吻是',
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
    valentine: '今年 {user} 是我的! ❤️\n誰又是妳們的呢？',
    'twitter-activity': "Here's my account statistics from the past {days} days. Do you have better interactions?", // TODO
    'first-follower': 'I just discovered my first follower on Twitter, it\'s {user} and they followed me {date}!\nWho\'s your first follower?', // TODO
    'first-following': 'I just discovered my first following on Twitter, it\'s {user} and I followed them {date}!\nWho\'s your first following?', // TODO
    'secret-crush': '被 {user} 暗戀著！😳\n誰暗戀著妳呢？',
    'hidden-twin': '{user} 是我隱藏的雙胞胎 😱\n也找出誰是妳的雙胞胎吧！',
    'stolen-kiss': '{user} 會在街角親吻您...😏\n而你，是誰來吻呢？',
    'may-day': '{user}, 最好的一束鈴蘭遞給你！💐\n而你，會給誰呢？',
    'halloween-duo': '今年我甚至不用打扮成嚇人的樣子，因為我和 {user} 在一起! 🎃👻\n而你，你最怕誰？',
    'new-years-kiss': '我準備了一年的最好的吻，在明年第一時間獻給 {user} 😘💕\n而你準備將新年之吻給誰呢？',
  },

}
