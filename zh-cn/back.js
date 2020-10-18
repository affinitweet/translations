export default {

  /* Steps */
  _st: {
    received: '收到服务器返回的信息...',
    starting: '已开始...',
    fetchingData: '获取数据...',
    fetchingTweets: '获取推文...',
    computingData: '计算数据...',
    generatingImage: '生成图像...',
    uploadingMedia: '正在上传图片...',
    publishingTweet: '发布推文...',
    savingResults: '保存结果...',
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
      youAreNotFollowing: '您没有关注 {user}...',
      notFollowingYou: '{user} 没有关注您...',
      youFollowed: '您关注了 {user}: ',
      followedYou: '{user} 关注了您: ',
      dateFormat: '于 {year}年{month}月{day}日 {hour}:{minute}:{second}',
      dateFormat2: '于 {month}年{day}月{year}日 {hour}时',
    },
    friendships: {
      average: '友谊平衡',
      following: '您关注了他',
      'not-following': '您没有关注他',
      followed_by: '他关注了您',
      'not-followed_by': '他没有关注您',
      notifications_enabled: '他在发推时您会收到通知',
      'not-notifications_enabled': '他在发推时您不会收到通知',
      blocking: '您屏蔽了他',
      'not-blocking': '您没有屏蔽他',
      blocked_by: '他屏蔽了您',
      'not-blocked_by': '他没有屏蔽您',
      muting: '您静音了他',
      'not-muting': '您没有把他静音',
      want_retweets: '您可以看到他的转推',
      'not-want_retweets': '您无法看到他的转推',
      marked_spam: '您把他标记为了滥用账户',
      'not-marked_spam': '您没有把他标记为滥用账户',
    },
    'tweet-rate': {
      average: '{user} 发推平均...',
      tweetsPerDay: '每天 {count} 次',
    },
    'common-friends': {
      friendsRemaining: '... 和 {count} 是朋友！',
      noFriends: '没有共同的朋友...',
      commonFriends: '我与 {user} 是 {count} 的共同好友！',
      noCommonFriends: '我与 {user} 没有共同的朋友...',
    },
    valentine: '您的 {year} 情人节的伴侣是',
    'stolen-kiss': '与您偷吻的是',
    'hidden-twin': '您的隐藏双胞胎是',
    'secret-crush': '您的暗恋是',
    'may-day': '我将一把铃兰 💐 给了',
    'halloween-duo': '您的万圣节伙伴是',
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
    valentine: '今年 {user} 是我的! ❤️\n谁又是你们的呢？',
    'twitter-activity': "Here's my account statistics from the past {days} days. Do you have better interactions?", // TODO
    'first-follower': 'I just discovered my first follower on Twitter, it\'s {user} and they followed me {date}!\nWho\'s your first follower?', // TODO
    'first-following': 'I just discovered my first following on Twitter, it\'s {user} and I followed them {date}!\nWho\'s your first following?', // TODO
    'secret-crush': '被 {user} 暗恋着！😳\n而你，谁暗恋着你呢？',
    'hidden-twin': '{user} 是我隐藏的双胞胎 😱\n也找出谁是你的双胞胎吧！',
    'stolen-kiss': '{user} 会在街角亲吻您...😏\n而你，是谁来吻呢？',
    'may-day': '{user}, 最好的一束铃兰递给你！💐\n而你，会给谁呢？',
    'halloween-duo': '今年我甚至不用打扮成吓人的样子, 因为我和 {user} 在一起! 🎃👻\n而你，你最怕谁？',
    'new-years-kiss': '我准备了一年的最好的吻，在明年第一时间献给 {user} 😘💕\n而你准备将新年之吻给谁呢？',
  },

}
