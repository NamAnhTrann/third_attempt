import type {
  EldermereChoice,
  EldermerePath,
  HomepageText,
  IntroLanguage,
  LanguageId,
  ShrineAnswer,
  ShrineBeat,
  StaticMemorySlide,
  TrainStop,
} from './homepage.models';

export const INTRO_LANGUAGES: IntroLanguage[] = [
    { id: 'english', label: 'English', nativeLabel: 'English' },
    { id: 'cantonese', label: 'Cantonese', nativeLabel: '繁體中文' },
  ];

export const HOMEPAGE_TEXT: HomepageText = {
    aria: {
      journey: 'Train journey love story',
      mobileRoute: 'Mobile train route',
      beginStory: 'Begin the story',
      nextMemory: 'Go to the next memory',
    },
    intro: {
      credit: 'Credit: Frieren The Anime',
      title: 'Memories Lane',
      languagePrompt: 'Choose language',
      ready: 'Ready When You Are',
      back: 'Back',
      next: 'Next',
    },
    common: {
      arrival: 'Arrival at Eldermere',
      restart: 'Restart',
      continue: 'Continue',
      mainQuest: 'Main quest',
      asked: 'Asked',
      jolie: 'Jolie',
    },
    eldermere: {
      speaker: 'Elowen',
      answerLabel: 'Elowen answers',
      topics: 'Topics',
      askEverything: 'Ask everything before choosing a path',
      choosePath: 'Choose a path',
      askAnother: 'Ask another question',
      mainQuestAccepted: 'Main quest accepted',
      shrineTitle: 'The Memory Shrine',
      shrineHint: 'Walk softly. Some candles remember the hands that lit them.',
      pathsOpen: 'There are two paths open to you now.',
    },
    shrine: {
      title: 'Memorial Shrine',
      statueAnswers: 'The statue answers',
      waiting: 'The shrine is waiting for your answer',
      claimMemory: 'Claim the memory',
      questionLabel: 'Shrine question',
      questionTitle: 'Where did the first memory begin?',
      questionPrompt: 'What did she tell him to do if he could not find her first day of class?',
      wrongSpeaker: 'Old Lady (Elowen)',
      wrongAnswer:
        'No. That sounds ordinary, but this memory did not begin ordinarily. It began with something playful enough to stay. Try again.',
      achieved: 'First Memory achieved',
      clueTitle: 'The First Approach',
    },
    nightfall: {
      eyebrow: 'Nightfall in Eldermere',
      title: 'After the Shrine',
      finalButton: 'The night keeps the question',
    },
    ending: {
      eyebrow: 'Nightfall in Eldermere',
      title: 'To be continued...',
      finalButton: 'The next memory is waiting',
    },
  };

export const INTRO_COPY_LINES: string[] = [
  'An interactive fantasy story about memories that were forgotten, moments that stayed, and the journey to understand what they became.',
  'You will play as Frieren, carrying your own name through each town and every memory.',
  'Your task is to explore, choose, solve, and uncover the missing pieces left behind.',
  'Some memories are not meant to be rushed.',
  'Maybe, when the journey ends, you will find something worth returning to :D'
  ];

export const ARRIVAL_MEMORY_SLIDES: StaticMemorySlide[] = [
    {
      eyebrow: 'Arrival at Eldermere',
      lines: [
        "It has been a long by carriage, through the sleeping woods and stone paths. Finally, the lark of Eldermere appeared beneath the morning's light. It walls were pale beneathe the afternoon sun, stretching across the valley.",
        'Ahead, the bridge led towards the town entrance, they began walking toward the entrance of Eldermere, ready to explore The Town Of Memories',
      ],
    },
    {
      eyebrow: 'Arrival at Eldermere',
      title: 'Inside Eldermere',
      lines: [
        'The town was quiet, but not empty! Flags moved gently above the stone streets, old houses leaned toward the warmth lights of the sun, and the fountain in the square flows softly beneath the morning breezes.',
        'For a moment, everything felt quiet...',
        'The air around the fountain grew slightly... and slightly...',
        "Jolie's noticed an old lady stood beneath the shade nearby the archway... watching them as if she had been waiting there for a long time",
      ],
    },
  ];

export const EMOTIONAL_DIALOGUE: Record<string, string> = {
    'Welcome to Eldermere, the Town of Memories. Most visitors come here looking for something they lost.':
      'Hm... welcome to Eldermere, the Town of Memories. Most visitors come here looking for something they lost.',
    'But memories are not lost things. They are living things. If you touch them carelessly, they may answer in ways you do not expect.':
      'But... memories are not lost things. They are living things. If you touch them carelessly, they may answer in ways you do not expect.',
    'What kind of memories does this town keep?':
      'What kind of memories does this town keep...?',
    'The ones people pretend are small. A first word. A quiet promise. A goodbye they laughed through. Those are the memories that stay the longest.':
      'The ones people pretend are small... a first word, a quiet promise, a goodbye they laughed through. Those are the memories that stay the longest.',
    'We are only passing through.': 'We are only passing through... right?',
    'Everyone says that when they first arrive. Yet Eldermere is rarely a place people simply pass through. The town only opens its roads to those willing to look back.':
      'Everyone says that when they first arrive. Yet... Eldermere is rarely a place people simply pass through. The town only opens its roads to those willing to look back.',
    'Are you the one who called us here?': 'Are you the one who called us here...?',
    'No. I only listen when the lake speaks. And today, it whispered of a memory that has followed you farther than you realise.':
      'No... I only listen when the lake speaks. And today, it whispered of a memory that has followed you farther than you realise.',
    'What do you want from us?': 'What do you want from us?',
    'Nothing. But the town may ask something of you. A little honesty. A little courage. And perhaps one memory you have not yet understood.':
      'Nothing. But... the town may ask something of you. A little honesty. A little courage. And perhaps one memory you have not yet understood.',
    'Take us to the Memory Shrine.': 'Then... take us to the Memory Shrine.',
    'Then walk softly. The shrine does not punish loud footsteps, but it remembers them.':
      'Then walk softly. The shrine does not punish loud footsteps... but it remembers them.',
    'There are two paths open to you now.': 'There are two paths open to you now...',
    'This is the Memorial Shrine.': 'Hm... this is the Memorial Shrine.',
    'It does not look like a shrine.': 'It does not look like a shrine...',
    'No. It does not ask to be noticed.': 'No. It does not ask to be noticed.',
    'Long ago, before Eldermere had walls, people came here to leave names behind. Not because they wanted to forget them, but because they were afraid no one else would remember.':
      'Long ago... before Eldermere had walls, people came here to leave names behind. Not because they wanted to forget them, but because they were afraid no one else would remember.',
    'Names of the dead?': 'Names of the dead...?',
    'Some. But not only them. Names of people they loved, friends who left, promises they could not keep, even names they never had the courage to speak aloud.':
      'Some. But... not only them. Names of people they loved, friends who left, promises they could not keep, even names they never had the courage to speak aloud.',
    'That sounds painful.': 'That sounds painful...',
    'It can be. But memory is not always pain.':
      'It can be. But memory is not always pain.',
    'Then what is it?': 'Then... what is it?',
    'Proof. That someone was here. That something happened. That a small moment once mattered enough to stay.':
      'Proof. That someone was here. That something happened. That a small moment once mattered enough to stay.',
    'People often think memories must be large to be important. A battle. A farewell. A great promise beneath the stars.':
      'People often think memories must be large to be important. A battle... a farewell... a great promise beneath the stars.',
    'But most memories begin smaller than that. A look. A sentence. A laugh. A word sent without knowing it would be kept.':
      'But most memories begin smaller than that. A look... a sentence... a laugh... a word sent without knowing it would be kept.',
    'That is why I brought you here first. Not to show you a great memory, but to ask whether you can recognise a small one.':
      'That is why I brought you here first. Not to show you a great memory... but to ask whether you can recognise a small one.',
    'So the shrine tests visitors?': 'So... the shrine tests visitors?',
    'Not exactly. A test decides whether you are worthy. The shrine is kinder than that.':
      'Not exactly. A test decides whether you are worthy. The shrine is kinder than that.',
    'Then what does it do?': 'Then what does it do?',
    'It asks whether you are honest.': 'It asks whether you are honest.',
    'Honest about what?': 'Honest about what...?',
    'About where the memory began.': 'About where the memory began.',
    'Listen carefully. The shrine speaks plainly, but people often answer with what they wish were true.':
      'Listen carefully. The shrine speaks plainly... but people often answer with what they wish were true.',
    'Do not choose the most beautiful answer. Choose the true one.':
      'Do not choose the most beautiful answer. Choose the true one.',
    'No. That sounds ordinary, but this memory did not begin ordinarily. It began with something playful enough to stay. Try again.':
      'No... that sounds ordinary, but this memory did not begin ordinarily. It began with something playful enough to stay. Try again.',
    'Yes. That was the beginning. Not a grand meeting. Not a dramatic promise.':
      'Yes... that was the beginning. Not a grand meeting. Not a dramatic promise.',
    'Just a message through Instagram, light and playful. If you could not find her, you should try screaming her name.':
      'Just a message through Instagram, light and playful. If you could not find her... you should try screaming her name.',
    'That is a strange first instruction.': 'That is a strange first instruction...',
    'Maybe. But some people enter a memory exactly like that. They arrive with a sentence you did not expect, and somehow, the day becomes easier to remember.':
      'Maybe. But some people enter a memory exactly like that. They arrive with a sentence you did not expect... and somehow, the day becomes easier to remember.',
    'So that was the first clue?': 'So... that was the first clue?',
    'Yes. The first clue is important because it became the place everything started from.':
      'Yes. The first clue is important because it became the place everything started from.',
    'A group project and an Instagram message.':
      'A group project... and an Instagram message.',
    'Many stories begin with less. The next memory is not kept here. It is somewhere louder. A memory carried by sound. The first laugh.':
      'Many stories begin with less. The next memory is not kept here... it is somewhere louder. A memory carried by sound. The first laugh.',
    'We should head back now, before the forest grows dark. Eldermere is gentle in the morning, but hostile creatures wander closer after sunset.':
      'We should head back now, before the forest grows dark. Eldermere is gentle in the morning... but hostile creatures wander closer after sunset.',
    'If that was the beginning... what else did he remember?':
      'If that was the beginning... what else did he remember?',
    'Are you coming?': 'Are you coming?',
    'I’ll catch up.': 'I’ll catch up...',
    'Alone?': 'Alone?',
    'The forest is not kind after sunset.':
      'The forest is not kind after sunset.',
    'I know. I just need to think for a little while.':
      'I know... I just need to think for a little while.',
    'Then do not wander too far.': 'Then do not wander too far.',
    'Some hostile creatures do not hunt loudly. They wait for quiet footsteps.':
      'Some hostile creatures do not hunt loudly. They wait for quiet footsteps.',
    'Do not take too long.': 'Do not take too long.',
    'If you can’t find me, try screaming my name.':
      'If you can’t find me... try screaming my name.',
    'I thought it was just a message.': 'I thought it was just a message...',
    'Just something silly to make things less awkward.':
      'Just something silly... to make things less awkward.',
    'But he remembered it.': 'But... he remembered it.',
    'Did I say other things like that?': 'Did I say other things like that?',
    'Small things. Careless things. Things I forgot five minutes later.':
      'Small things... careless things... things I forgot five minutes later.',
    'Maybe I forgot because I was only living the moment.':
      'Maybe I forgot because I was only living the moment...',
    'But he remembered because the moment became something else to him.':
      'But he remembered because the moment became something else to him.',
    'Maybe memories do not always announce themselves.':
      'Maybe memories do not always announce themselves...',
    'Maybe they begin as nothing.': 'Maybe they begin as nothing.',
    'Then one day, someone looks back and realises it was the start of everything.':
      'Then one day, someone looks back and realises... it was the start of everything.',
    'If he kept that first message...': 'If he kept that first message...',
    'Then what did I keep?': 'Then what did I keep?',
  };

export const NIGHTFALL_BEATS: ShrineBeat[] = [
    {
      speaker: 'Narration',
      text:
        'After leaving the Memorial Shrine, the forest path felt colder than before.',
    },
    {
      speaker: 'Narration',
      text:
        'The old lady walked slowly ahead, guiding them back toward Eldermere before the night grew too deep. Fern followed beside her, quiet but watchful, still thinking about the shrine’s question.',
    },
    {
      speaker: 'Narration',
      text: 'Jolie stayed behind.',
    },
    {
      speaker: 'Narration',
      text: 'Not far.',
    },
    {
      speaker: 'Narration',
      text: 'Just enough to let the others move ahead without her.',
    },
    {
      speaker: 'Narration',
      text: 'The words from the shrine had followed her all the way through the trees.',
    },
    {
      speaker: 'Narration',
      text: 'A group project.',
    },
    {
      speaker: 'Narration',
      text: 'An Instagram message.',
    },
    {
      speaker: 'Narration',
      text: 'A sentence she had written without thinking much of it.',
    },
    {
      speaker: "Jolie's inner thought",
      text: 'If that was the beginning... what else did he remember?',
    },
    {
      speaker: 'Narration',
      text: 'Fern stopped and looked back.',
    },
    {
      speaker: 'Fern',
      text: 'Are you coming?',
    },
    {
      speaker: 'Narration',
      text:
        'Jolie looked toward the path back to town, then toward the darker road beside the forest.',
    },
    {
      speaker: 'Jolie',
      text: 'I’ll catch up.',
    },
    {
      speaker: 'Narration',
      text: 'Fern frowned slightly.',
    },
    {
      speaker: 'Fern',
      text: 'Alone?',
    },
    {
      speaker: 'Narration',
      text: 'The old lady turned around. Her expression was calm, but serious.',
    },
    {
      speaker: 'Old Lady',
      text: 'The forest is not kind after sunset.',
    },
    {
      speaker: 'Narration',
      text: 'Jolie gave a small nod.',
    },
    {
      speaker: 'Jolie',
      text: 'I know. I just need to think for a little while.',
    },
    {
      speaker: 'Narration',
      text:
        'The old lady studied her for a moment. Then she looked toward the moonlit trees.',
    },
    {
      speaker: 'Old Lady',
      text: 'Then do not wander too far.',
    },
    {
      speaker: 'Old Lady',
      text:
        'Some hostile creatures do not hunt loudly. They wait for quiet footsteps.',
    },
    {
      speaker: 'Narration',
      text: 'Fern hesitated.',
    },
    {
      speaker: 'Fern',
      text: 'Do not take too long.',
    },
    {
      speaker: 'Narration',
      text: 'Jolie gave another small nod, but she did not answer right away.',
    },
    {
      speaker: 'Narration',
      text:
        'Jolie watched as Fern and the old lady continued down the forest path. Their figures grew smaller between the trees, then disappeared into the dark green shadows leading back toward Eldermere.',
    },
    {
      speaker: 'Narration',
      text: 'For a while, Jolie stayed where she was.',
    },
    {
      speaker: 'Narration',
      text: 'The forest became quiet around her.',
    },
    {
      speaker: 'Narration',
      text: 'Not empty.',
    },
    {
      speaker: 'Narration',
      text: 'Just quiet enough for every thought to sound louder.',
    },
    {
      speaker: 'Narration',
      text:
        'She turned away from the path back to town and walked deeper beneath the trees. The ground was uneven, covered with roots, fallen leaves, and old stones hidden beneath the grass. Above her, the branches twisted together, blocking most of the moonlight.',
    },
    {
      speaker: 'Narration',
      text: 'She did not know exactly where she was going.',
    },
    {
      speaker: 'Narration',
      text: 'She only knew she was not ready to return yet.',
    },
    {
      speaker: 'Narration',
      text:
        'After some time, she found an old tree with roots large enough to shelter beneath. The roots curved around the ground like the walls of a small room, dark and quiet, hidden from the path.',
    },
    {
      speaker: 'Narration',
      text: 'Jolie stopped there.',
    },
    {
      speaker: 'Narration',
      text:
        'She gathered a few dry branches, made a small fire, and sat close enough to feel its warmth against the cold night air.',
    },
    {
      speaker: 'Narration',
      text: 'Then she opened her books.',
    },
    {
      speaker: 'Narration',
      text:
        'Their pages caught the firelight softly. Notes, old words, and half-finished thoughts rested in front of her, but she was not really reading.',
    },
    {
      speaker: 'Narration',
      text: 'Her eyes moved across the page, yet her mind kept returning to the shrine.',
    },
    {
      speaker: 'Narration',
      text: 'A group project.',
    },
    {
      speaker: 'Narration',
      text: 'An Instagram message.',
    },
    {
      speaker: 'Narration',
      text: 'A playful sentence.',
    },
    {
      speaker: "Jolie's inner thought",
      text: 'If you can’t find me, try screaming my name.',
    },
    {
      speaker: 'Narration',
      text: 'Back then, it had felt simple.',
    },
    {
      speaker: 'Narration',
      text: 'Too simple to matter.',
    },
    {
      speaker: 'Narration',
      text:
        'Just a message sent to make things easier. Maybe to make the first meeting less awkward. Maybe because being playful felt safer than being too formal.',
    },
    {
      speaker: 'Narration',
      text:
        'But now, sitting alone beneath the roots of an old tree, Jolie wondered if simple things were the easiest to underestimate.',
    },
    {
      speaker: "Jolie's inner thought",
      text: 'I thought it was just a message.',
    },
    {
      speaker: "Jolie's inner thought",
      text: 'Just something silly to make things less awkward.',
    },
    {
      speaker: "Jolie's inner thought",
      text: 'But he remembered it.',
    },
    {
      speaker: 'Narration',
      text: 'The fire cracked softly beside her.',
    },
    {
      speaker: 'Narration',
      text: 'The forest around her stayed still.',
    },
    {
      speaker: 'Narration',
      text:
        'Jolie lowered her gaze to the open book in her lap, but the words blurred into the same question again and again.',
    },
    {
      speaker: "Jolie's inner thought",
      text: 'If that was the beginning... what else did he remember?',
    },
    {
      speaker: 'Narration',
      text: 'She turned a page, though she had not finished reading the last one.',
    },
    {
      speaker: 'Narration',
      text: 'The movement gave her hands something to do.',
    },
    {
      speaker: 'Narration',
      text: 'That was easier than sitting completely still with the thought.',
    },
    {
      speaker: "Jolie's inner thought",
      text: 'Did I say other things like that?',
    },
    {
      speaker: "Jolie's inner thought",
      text: 'Small things. Careless things. Things I forgot five minutes later.',
    },
    {
      speaker: 'Narration',
      text: 'She stared at the fire.',
    },
    {
      speaker: 'Narration',
      text: 'Its warmth reached her hands, but not the strange feeling in her chest.',
    },
    {
      speaker: "Jolie's inner thought",
      text: 'Maybe I forgot because I was only living the moment.',
    },
    {
      speaker: "Jolie's inner thought",
      text: 'But he remembered because the moment became something else to him.',
    },
    {
      speaker: 'Narration',
      text: 'That thought made her feel quiet.',
    },
    {
      speaker: 'Narration',
      text: 'Not guilty exactly.',
    },
    {
      speaker: 'Narration',
      text: 'But careful.',
    },
    {
      speaker: 'Narration',
      text: 'As if the past had become a fragile object in her hands.',
    },
    {
      speaker: 'Narration',
      text: 'The shrine had not shown her a grand confession.',
    },
    {
      speaker: 'Narration',
      text: 'It had not shown a dramatic promise.',
    },
    {
      speaker: 'Narration',
      text: 'It had not shown a goodbye under rain or anything that would obviously belong in a story.',
    },
    {
      speaker: 'Narration',
      text: 'It had shown a beginning so ordinary that she almost missed the weight of it.',
    },
    {
      speaker: 'Narration',
      text: 'And somehow, that made it harder to ignore.',
    },
    {
      speaker: "Jolie's inner thought",
      text: 'Maybe memories do not always announce themselves.',
    },
    {
      speaker: "Jolie's inner thought",
      text: 'Maybe they begin as nothing.',
    },
    {
      speaker: "Jolie's inner thought",
      text:
        'Then one day, someone looks back and realises it was the start of everything.',
    },
    {
      speaker: 'Narration',
      text: 'The fire shifted.',
    },
    {
      speaker: 'Narration',
      text: 'A small spark rose, then disappeared into the dark.',
    },
    {
      speaker: 'Narration',
      text: 'Jolie closed the book halfway, keeping one finger between the pages.',
    },
    {
      speaker: 'Narration',
      text: 'She looked into the forest.',
    },
    {
      speaker: 'Narration',
      text: 'Somewhere beyond the trees, Eldermere was waiting.',
    },
    {
      speaker: 'Narration',
      text: 'Fern was probably already annoyed.',
    },
    {
      speaker: 'Narration',
      text: 'The old lady was probably pretending not to worry.',
    },
    {
      speaker: 'Narration',
      text: 'But Jolie did not move yet.',
    },
    {
      speaker: 'Narration',
      text:
        'For the first time since entering Eldermere, she felt that the town was not only showing his memories.',
    },
    {
      speaker: 'Narration',
      text: 'It was asking her to remember too.',
    },
    {
      speaker: "Jolie's inner thought",
      text: 'If he kept that first message...',
    },
    {
      speaker: "Jolie's inner thought",
      text: 'Then what did I keep?',
    },
    {
      speaker: 'Narration',
      text: 'The night gave no answer.',
    },
    {
      speaker: 'Narration',
      text:
        'Only the fire stayed with her, small and warm beneath the old tree, while the question remained open on the page.',
    },
  ];

export const EPILOGUE_BEATS: ShrineBeat[] = [
    {
      speaker: 'Narration',
      text: 'Jolie made her way back to Eldermere as night settled over the town.',
    },
    {
      speaker: 'Narration',
      text:
        'The streets had grown still, and the warmth from the windows made the whole place feel like it was keeping secrets.',
    },
    {
      speaker: 'Narration',
      text: 'She had returned from the shrine.',
    },
    {
      speaker: 'Narration',
      text: 'But the memory had followed her back.',
    },
    {
      speaker: 'Narration',
      text: 'A group project.',
    },
    {
      speaker: 'Narration',
      text: 'An Instagram message.',
    },
    {
      speaker: 'Narration',
      text: 'A playful line she had almost forgotten.',
    },
    {
      speaker: "Jolie's inner thought",
      text: 'If he remembered that...',
    },
    {
      speaker: "Jolie's inner thought",
      text: 'What else did he remember?',
    },
    {
      speaker: 'Narrator',
      text: 'Somewhere beyond Eldermere, the next memory was already waiting.',
    },
    {
      speaker: 'Narrator',
      text: 'To be continued...',
    },
  ];

export const TRANSLATED_TEXT: Record<LanguageId, Record<string, string>> = {
    english: {},
    japanese: {
      Prologue: 'プロローグ',
      English: '英語',
      Japanese: '日本語',
      Cantonese: '広東語',
      'The Town of Memories': '記憶の町',
      'An interactive story about searching through missing memories, following the clues she left behind, and trying to find the way back to her.':
        '失われた記憶を探し、彼女が残した手がかりをたどり、最後の光が消える前にもう一度彼女へ辿り着こうとする、静かなインタラクティブストーリー。',
      'Choose language': '言語を選ぶ',
      'Arrival at Eldermere': 'エルダーメア到着',
      'Inside Eldermere': 'エルダーメアの中へ',
      'Memorial Shrine': '追憶の祠',
      Restart: '最初から',
      Continue: '続ける',
      'Elowen answers': 'エロウェンの答え',
      'Main quest': 'メインクエスト',
      'Side quest': 'サイドクエスト',
      Asked: '質問済み',
      Topics: '話題',
      'Ask everything before choosing a path': '道を選ぶ前に、すべて尋ねる',
      'Choose a path': '道を選ぶ',
      'Ask another question': 'もう一つ尋ねる',
      'Main quest accepted': 'メインクエスト受注',
      'Side quest discovered': 'サイドクエスト発見',
      'The Memory Shrine': '記憶の祠',
      'The Forgotten Duelist': '忘れられた決闘者',
      'Walk softly. Some candles remember the hands that lit them.':
        '静かに歩いて。火を灯した手を覚えている蝋燭もある。',
      'The market shadow stirs. Some memories do not ask to be healed. They ask to be answered.':
        '市場の影が揺れる。癒やしを求めない記憶もある。ただ、答えを求めている。',
      'Keep it': '心に留める',
      'Claim the clue': '手がかりを受け取る',
      'First clue achieved': '最初の手がかりを獲得',
      'The First Approach': '最初の接近',
      'A group project. A small glowing window. A playful line that made the beginning impossible to forget.':
        'グループ課題。小さく光る画面。始まりを忘れられなくした、少し茶目っ気のある一言。',
      'It has been a long by carriage, through the sleeping woods and stone paths. Finally, the lark of Eldermere appeared beneath the morning\'s light. It walls were pale beneathe the afternoon sun, stretching across the valley.':
        '眠る森と石畳を抜け、長い馬車の旅が続いた。やがて朝の光の下に、エルダーメアの姿が見えてきた。谷に沿って、淡い壁が午後の陽に伸びていた。',
      'Ahead, the bridge led towards the town entrance, they began walking toward the entrance of Eldermere, ready to explore The Town Of Memories':
        '前方の橋は町の入口へ続いていた。彼らは記憶の町、エルダーメアへ足を踏み入れていく。',
      'The town was quiet, but not empty! Flags moved gently above the stone streets, old houses leaned toward the warmth lights of the sun, and the fountain in the square flows softly beneath the morning breezes.':
        '町は静かだった。でも、空っぽではなかった。石畳の上で旗が揺れ、古い家々は陽の温もりへ身を寄せ、広場の噴水は朝風の中でやわらかく流れていた。',
      'For a moment, everything felt quiet...': '一瞬、すべてが静かに感じられた……',
      'The air around the fountain grew slightly... and slightly...':
        '噴水のまわりの空気が、少しずつ、ほんの少しずつ変わっていく……',
      'Jolie\'s noticed an old lady stood beneath the shade nearby the archway... watching them as if she had been waiting there for a long time':
        'ジョリーは、門の近くの影に立つ老婦人に気づいた。まるで長いあいだ待っていたかのように、こちらを見つめていた。',
      Narration: '語り',
      'Old Lady (Elowen)': '老婦人（エロウェン）',
      Jolie: 'ジョリー',
      Fern: 'フェルン',
      'Memory Clue 01': '記憶の手がかり 01',
      'The statue answers': '像が答える',
      'Shrine question': '祠の問い',
      'Where did the first memory begin?': '最初の記憶はどこから始まったのか',
      'The shrine is waiting for your answer': '祠はあなたの答えを待っている',
      'Moss darkens across the stone. A pale line of light opens beneath the statue\'s hands, and the clearing grows quiet enough to hear a memory arrive.':
        '苔が石の上で深く影を落とす。像の手の下に淡い光が開き、広場は記憶が訪れる音さえ聞こえるほど静かになった。',
      'I began with a group of strangers, a shared task, and a name not yet familiar. Before the work truly began, someone reached out from a small glowing window. Not with a formal greeting. Not with a serious promise. With a playful line, as if finding her was already part of the adventure.':
        'それは、知らない人たちの集まり、共有された課題、まだ馴染みのない名前から始まった。本当に作業が始まる前、小さく光る窓から誰かが声をかけてきた。堅い挨拶でも、重い約束でもなく、彼女を探すことまで冒険の一部みたいな、遊び心のある一言で。',
      'What did she tell him to do if he could not find her first day of class?':
        '授業初日に彼女を見つけられなかったら、彼女は彼に何をするよう言った？',
      'No. That sounds ordinary, but this memory did not begin ordinarily. It began with something playful enough to stay. Try again.':
        'いいえ。それは普通に聞こえるけれど、この記憶は普通には始まらなかった。残り続けるほど、少し遊び心のあるものから始まったの。もう一度。',
      'Wait quietly near the classroom': '教室の近くで静かに待つ',
      'Send another message': 'もう一度メッセージを送る',
      'Try screaming her name': '彼女の名前を叫んでみる',
      'Ask the group where she was': 'グループに彼女の場所を聞く',
      'What kind of memories does this town keep?':
        'この町はどんな記憶を保っているの？',
      'The ones people pretend are small. A first word. A quiet promise. A goodbye they laughed through. Those are the memories that stay the longest.':
        '人が小さなものだと思い込もうとする記憶よ。最初の言葉。静かな約束。笑いながら通り過ぎた別れ。そういうものほど、長く残るの。',
      'We are only passing through.': '私たちは通り過ぎるだけ。',
      'Everyone says that when they first arrive. Yet Eldermere is rarely a place people simply pass through. The town only opens its roads to those willing to look back.':
        '最初に来た人はみんなそう言うわ。でもエルダーメアは、ただ通り過ぎられる場所ではあまりない。振り返る覚悟のある人にだけ、道を開くの。',
      'Are you the one who called us here?':
        '私たちをここへ呼んだのはあなた？',
      'No. I only listen when the lake speaks. And today, it whispered of a memory that has followed you farther than you realise.':
        'いいえ。私は湖が話すときに耳を澄ませるだけ。今日は、あなたが思うより遠くまでついてきた記憶のことを囁いていたわ。',
      'What do you want from us?': '私たちに何を望んでいるの？',
      'Nothing. But the town may ask something of you. A little honesty. A little courage. And perhaps one memory you have not yet understood.':
        '何も。ただ、この町はあなたたちに何かを求めるかもしれない。少しの正直さ。少しの勇気。そして、まだ理解していない記憶を一つ。',
      'Take us to the Memory Shrine.': '記憶の祠へ連れて行って。',
      'Then walk softly. The shrine does not punish loud footsteps, but it remembers them.':
        'なら、静かに歩いて。祠は大きな足音を罰しない。でも覚えているわ。',
      'Elowen begins walking toward a narrow road lined with white flowers. The air grows colder with each step, and the sound of the fountain fades behind them.':
        'エロウェンは白い花が並ぶ細い道へ歩き出した。一歩ごとに空気は冷たくなり、噴水の音は背後で薄れていった。',
      'emotional, reflective, puzzle-based': '感情的、内省的、謎解き',
      'light candles in the correct memory order': '正しい記憶の順番で蝋燭に火を灯す',
      'first message, first laugh, first thought that stayed':
        '最初のメッセージ、最初の笑い、残り続けた最初の思い',
      'Then keep your hand near your staff. Some memories do not cry when they are hurt. Some become teeth.':
        'なら杖から手を離さないで。傷ついた記憶は泣かないこともある。牙になるものもある。',
      'Elowen leads them toward the market shadow, where sunlight no longer reaches the stones. Somewhere ahead, metal scrapes against the ground.':
        'エロウェンは彼らを市場の影へ導いた。そこでは陽の光がもう石畳に届かない。前方のどこかで、金属が地面を擦る音がした。',
      'conflict, regret, emotional fight': '衝突、後悔、感情の戦い',
      'battle scene or dialogue-fight system': '戦闘シーン、または対話型の戦い',
      'misunderstanding, pride, things left unsaid':
        '誤解、誇り、言えなかったこと',
      'Welcome to Eldermere, the Town of Memories. Most visitors come here looking for something they lost.':
        '記憶の町、エルダーメアへようこそ。ここに来る人の多くは、失くした何かを探しているの。',
      'But memories are not lost things. They are living things. If you touch them carelessly, they may answer in ways you do not expect.':
        'でも記憶は失くし物ではないわ。生きているものよ。雑に触れれば、思いがけない返事をすることもある。',
      'Elowen turns toward the street. Her smile remains, but her eyes become serious.':
        'エロウェンは通りへ向き直った。微笑みは残っていたが、その目は真剣になっていた。',
      'There are two paths open to you now.': '今、あなたたちには二つの道が開いている。',
      'Stop 01': '停車駅 01',
      'Stop 02': '停車駅 02',
      'Stop 03': '停車駅 03',
      'Stop 04': '停車駅 04',
      'Final Stop': '終着駅',
      Eldermere: 'エルダーメア',
      'The Almost': 'もう少しだったもの',
      'The Distance': '距離',
      'Things Left Unsaid': '言えなかったこと',
      'Still Here': 'まだここに',
      'Goodbye, or Still Here': 'さよなら、あるいはまだここに',
      'Welcome to Eldermere, The Town Of Memories ':
        'エルダーメア、記憶の町へようこそ',
      'Insipred By @her_movie_finds + Frieren The Anime':
        '@her_movie_finds とアニメ「葬送のフリーレン」から着想',
      "A combinations of Frieren vibes + Jolie's Film Reviews":
        'フリーレンの空気感と Jolie の映画レビューを合わせたもの',
      'City lights blurred past the window, and for a while it felt like timing might be kind.':
        '窓の外で街の灯りが滲んで流れ、しばらくの間、タイミングは優しいもののように思えた。',
      'We were close enough to name it, but careful enough to call it ':
        '名前をつけられるほど近く、でも',
      nothing: '何でもないもの',
      '.': '。',
      'folded stub': '折られた半券',
      'There are almosts that stay bright because they never had to survive daylight.':
        '昼の光を生き延びなくてよかったからこそ、明るいまま残る「もう少し」もある。',
      'Rain kept drawing lines on the glass, turning the outside world into something unreachable.':
        '雨はガラスに線を描き続け、外の世界を手の届かないものに変えていった。',
      'I learned that missing someone can be quiet, almost ':
        '誰かを恋しく思うことは静かで、ほとんど',
      disciplined: '律儀',
      ', and still take up the whole carriage.':
        'でありながら、それでも車両全体を満たしてしまうのだと知った。',
      'wet ticket': '濡れた切符',
      'Some nights I only wanted the train to slow down enough for one honest sentence.':
        'ある夜は、たった一つの正直な言葉を言えるくらい、列車がゆっくりになってほしかった。',
      'The platform emptied. Announcements softened. Every sentence I kept became heavier than luggage.':
        'ホームは空になった。アナウンスはやわらいだ。飲み込んだ言葉は、荷物より重くなった。',
      'If love had been simpler, maybe I would have said ':
        'もし愛がもっと単純だったなら、きっと',
      stay: 'いて',
      ' without making it a burden.': 'と言っても、それを重荷にせずに済んだのかもしれない。',
      'station stamp': '駅のスタンプ',
      'Not every silence was fear. Some of it was care wearing the wrong coat.':
        '沈黙のすべてが恐れだったわけではない。その一部は、間違った上着を着た思いやりだった。',
      'Morning arrived pale and careful, like it did not want to wake the parts of us still sleeping.':
        '朝は淡く、慎重にやって来た。まだ眠っている私たちの部分を起こしたくないみたいに。',
      'If this is goodbye, let it be gentle. If not, I will remain ':
        'これが別れなら、どうかやさしいものでありますように。そうでないなら、私は',
      here: 'ここ',
      ', somewhere after the last announcement.':
        'にいる。最後のアナウンスの、その少し先で。',
      'arrival mark': '到着印',
      'The doors open. The story does not ask you to turn back. It only leaves the light on.':
        '扉が開く。物語は振り返れとは言わない。ただ、灯りを残しておくだけ。',
      'Nightfall in Eldermere': 'エルダーメアの夜',
      'After the Shrine': '祠のあとで',
      "Jolie's inner thought": 'ジョリーの心の声',
      Narrator: '語り手',
      'The night keeps the question': '夜は問いを抱いたまま',
      'The sky above Eldermere had turned deep blue. The rooftops sat quietly beneath the moon, and the town that once looked bright and welcoming now felt slower, softer, almost distant.':
        'エルダーメアの空は深い青に変わっていた。屋根は月の下で静かに並び、明るく迎えてくれた町は、今ではもっと遅く、やわらかく、どこか遠く感じられた。',
      'She looked across the quiet town, trying to remember the moment the way he must have remembered it.':
        '彼女は静かな町を見渡し、彼が覚えていたはずの形で、その瞬間を思い出そうとした。',
      'Back then, it had not felt important. It was just a message. Just something she typed without thinking too much. Just a way to make the first meeting less awkward.':
        'あのとき、それは大切なものには感じられなかった。ただのメッセージだった。深く考えずに打っただけの言葉。最初の出会いを少し気まずくなくするためのもの。',
      'I didn’t think he would remember that.':
        '彼がそれを覚えているなんて思わなかった。',
      'I didn’t even know I had given him something to remember.':
        '私が彼に、覚えておくものを渡していたことさえ知らなかった。',
      'Jolie lowered her eyes. For a moment, she wondered how many small things had passed between them without her noticing.':
        'ジョリーは目を伏せた。ほんの一瞬、気づかないまま二人の間を通り過ぎた小さなものが、いくつあったのだろうと思った。',
      'A message. A look. A pause in conversation. A joke that made the silence easier. Things she had forgotten because they felt too simple to hold onto.':
        'メッセージ。視線。会話の間。沈黙を少し楽にした冗談。単純すぎて留めておくものではないと思い、忘れてしまったものたち。',
      'How many moments did I leave behind without knowing?':
        '知らないうちに、私はいくつの瞬間を置いてきたんだろう。',
      'And how many of them did he carry?':
        'そのうち、彼はいくつ抱えていたんだろう。',
      'The night air moved gently through Eldermere. The town was still, but her mind was not.':
        '夜気がエルダーメアをやさしく通り抜けた。町は静かだった。でも彼女の心は静かではなかった。',
      'She kept thinking about the shrine. Not because it had shown something dramatic. But because it had shown something small. Something real.':
        '彼女は祠のことを考え続けた。劇的なものを見せられたからではない。小さなものを見せられたから。本物のものを。',
      'Maybe memories do not always announce themselves.':
        '記憶は、いつも自分から名乗るわけではないのかもしれない。',
      'Maybe they begin as nothing.': '最初は何でもないものとして始まるのかもしれない。',
      'Then one day, someone looks back and realises it was the start of everything.':
        'そしてある日、誰かが振り返って、それがすべての始まりだったと気づく。',
      'She looked toward the moon. The first clue had been found. But somehow, it felt less like an answer and more like a question.':
        '彼女は月を見上げた。最初の手がかりは見つかった。でもなぜか、それは答えというより問いのように感じられた。',
      'If that was the beginning... what else did he remember?':
        'それが始まりだったなら……彼は他に何を覚えていたんだろう。',
      'The shrine was behind them now, but its words had not fully disappeared. A group project. An Instagram message. A playful sentence that seemed small at the time.':
        '祠はもう背後にあった。それでも、その言葉はまだ消えきっていなかった。グループ課題。Instagramのメッセージ。そのときは小さく思えた、遊び心のある一言。',
      'So that was the first memory he kept?':
        'それが、彼が覚えていた最初の記憶だったの？',
      'Back then, she had not thought much of it. She had only sent a message because they were in the same group, because they needed to find each other, because it was easier to be playful than awkward.':
        'あのとき、彼女は深く考えていなかった。同じグループだったから、会う必要があったから、気まずいよりも冗談っぽくする方が楽だったから、ただメッセージを送っただけだった。',
      'If you can’t find me, try screaming my name.':
        '見つからなかったら、私の名前を叫んでみて。',
      'She almost smiled. It sounded silly now. But maybe that was why it stayed.':
        '彼女は少しだけ笑いそうになった。今ではばかみたいに聞こえる。でも、だからこそ残ったのかもしれない。',
      'Some memories did not become important because they were beautiful. Some became important because they were ordinary, and somehow, someone remembered them anyway.':
        '美しかったから大切になったわけではない記憶もある。普通だったからこそ、そしてそれでも誰かが覚えていたからこそ、大切になった記憶もある。',
    },
    cantonese: {
      Prologue: '序章',
      English: '英文',
      Japanese: '日文',
      Cantonese: '廣東話',
      'The Town of Memories': '記憶之城',
      'A quiet interactive story about searching through missing memories, following the clues she left behind, and trying to find the way back to her before the last light fades.':
        '一個安靜嘅互動故事，關於喺失落嘅記憶入面尋找，跟住佢留下嘅線索，喺最後一點光消失之前，試住搵返通往佢身邊嘅路。',
      'Choose language': '選擇語言',
      'Arrival at Eldermere': '抵達 Eldermere',
      'Inside Eldermere': '走進 Eldermere',
      'Memorial Shrine': '紀念神殿',
      Restart: '重新開始',
      Continue: '繼續',
      'Elowen answers': 'Elowen 回答',
      'Main quest': '主線任務',
      'Side quest': '支線任務',
      Asked: '已問',
      Topics: '話題',
      'Ask everything before choosing a path': '揀路之前，先問晒所有嘢',
      'Choose a path': '選擇道路',
      'Ask another question': '再問一條問題',
      'Main quest accepted': '已接受主線任務',
      'Side quest discovered': '發現支線任務',
      'The Memory Shrine': '記憶神殿',
      'The Forgotten Duelist': '被遺忘嘅決鬥者',
      'Walk softly. Some candles remember the hands that lit them.':
        '輕輕咁行。有啲蠟燭，仲記得曾經點亮佢嘅手。',
      'The market shadow stirs. Some memories do not ask to be healed. They ask to be answered.':
        '市場嘅陰影開始郁。有啲記憶唔係想被治癒，只係想有人回答。',
      'Keep it': '收好佢',
      'Claim the clue': '領取線索',
      'First clue achieved': '獲得第一條線索',
      'The First Approach': '最初嘅靠近',
      'A group project. A small glowing window. A playful line that made the beginning impossible to forget.':
        '一個小組功課。一個細細發光嘅視窗。一句玩笑說話，令個開始再都忘記唔到。',
      'It has been a long by carriage, through the sleeping woods and stone paths. Finally, the lark of Eldermere appeared beneath the morning\'s light. It walls were pale beneathe the afternoon sun, stretching across the valley.':
        '馬車行咗好耐，穿過沉睡嘅樹林同石路。終於，Eldermere 喺晨光之下出現，淡色嘅城牆喺午後陽光入面伸展過山谷。',
      'Ahead, the bridge led towards the town entrance, they began walking toward the entrance of Eldermere, ready to explore The Town Of Memories':
        '前面條橋通向城鎮入口，佢哋開始向 Eldermere 行去，準備探索呢座記憶之城。',
      'The town was quiet, but not empty! Flags moved gently above the stone streets, old houses leaned toward the warmth lights of the sun, and the fountain in the square flows softly beneath the morning breezes.':
        '城鎮好靜，但唔係空嘅。旗幟喺石街上方輕輕飄動，舊屋靠向溫暖嘅陽光，廣場嘅噴泉喺晨風入面柔柔咁流動。',
      'For a moment, everything felt quiet...': '有一刻，所有嘢都靜咗落嚟……',
      'The air around the fountain grew slightly... and slightly...':
        '噴泉周圍嘅空氣，一點一點咁變得唔同……',
      'Jolie\'s noticed an old lady stood beneath the shade nearby the archway... watching them as if she had been waiting there for a long time':
        'Jolie 留意到拱門附近嘅陰影下企住一位老婆婆，望住佢哋，好似已經喺度等咗好耐。',
      Narration: '旁白',
      'Old Lady (Elowen)': '老婆婆（Elowen）',
      Jolie: 'Jolie',
      Fern: 'Fern',
      'Memory Clue 01': '記憶線索 01',
      'The statue answers': '石像回應',
      'Shrine question': '神殿之問',
      'Where did the first memory begin?': '第一段記憶由邊度開始？',
      'The shrine is waiting for your answer': '神殿正等緊你嘅答案',
      'Moss darkens across the stone. A pale line of light opens beneath the statue\'s hands, and the clearing grows quiet enough to hear a memory arrive.':
        '青苔喺石上變得更深。石像雙手之下透出一線淡光，空地靜到好似聽到記憶行近。',
      'I began with a group of strangers, a shared task, and a name not yet familiar. Before the work truly began, someone reached out from a small glowing window. Not with a formal greeting. Not with a serious promise. With a playful line, as if finding her was already part of the adventure.':
        '一開始只係一班陌生人、一份共同功課，同一個未熟悉嘅名字。功課真正開始之前，有人從一個細細發光嘅視窗伸手過嚟。唔係正式問候，唔係沉重承諾，而係一句玩笑，好似搵到佢本身已經係冒險一部分。',
      'What did she tell him to do if he could not find her first day of class?':
        '如果第一日上堂搵唔到佢，佢叫佢做咩？',
      'No. That sounds ordinary, but this memory did not begin ordinarily. It began with something playful enough to stay. Try again.':
        '唔係。聽落好普通，但呢段記憶唔係普通咁開始。佢係由一句夠玩味、夠留下嘅說話開始。再試一次。',
      'Wait quietly near the classroom': '喺課室附近靜靜等',
      'Send another message': '再發一個訊息',
      'Try screaming her name': '試吓大叫佢個名',
      'Ask the group where she was': '問小組佢喺邊',
      'What kind of memories does this town keep?':
        '呢個城鎮收藏住啲咩記憶？',
      'The ones people pretend are small. A first word. A quiet promise. A goodbye they laughed through. Those are the memories that stay the longest.':
        '就係啲人扮到好細微嘅記憶。第一句說話。一個安靜嘅承諾。一個笑住講過嘅再見。呢啲記憶，反而留得最耐。',
      'We are only passing through.': '我哋只係路過。',
      'Everyone says that when they first arrive. Yet Eldermere is rarely a place people simply pass through. The town only opens its roads to those willing to look back.':
        '啱啱嚟到嘅人都係咁講。但 Eldermere 好少只係畀人路過。呢個城鎮只會向願意回望嘅人打開道路。',
      'Are you the one who called us here?': '係你叫我哋嚟呢度？',
      'No. I only listen when the lake speaks. And today, it whispered of a memory that has followed you farther than you realise.':
        '唔係。我只係喺湖水開口時聆聽。今日，佢低聲講起一段跟住你哋比你想像中更遠嘅記憶。',
      'What do you want from us?': '你想我哋做啲咩？',
      'Nothing. But the town may ask something of you. A little honesty. A little courage. And perhaps one memory you have not yet understood.':
        '冇乜。但呢個城鎮可能會向你哋要求少少嘢。少少誠實。少少勇氣。或者一段你仲未明白嘅記憶。',
      'Take us to the Memory Shrine.': '帶我哋去記憶神殿。',
      'Then walk softly. The shrine does not punish loud footsteps, but it remembers them.':
        '咁就輕輕咁行。神殿唔會懲罰太響嘅腳步，但佢會記得。',
      'Elowen begins walking toward a narrow road lined with white flowers. The air grows colder with each step, and the sound of the fountain fades behind them.':
        'Elowen 向一條種滿白花嘅窄路行去。每行一步，空氣就凍一啲，噴泉聲喺身後慢慢淡開。',
      'emotional, reflective, puzzle-based': '感性、反思、解謎',
      'light candles in the correct memory order': '按正確記憶次序點亮蠟燭',
      'first message, first laugh, first thought that stayed':
        '第一個訊息、第一次笑、第一個留低嘅念頭',
      'Then keep your hand near your staff. Some memories do not cry when they are hurt. Some become teeth.':
        '咁你隻手就唔好離開法杖。有啲記憶受傷時唔會喊，佢哋會變成牙齒。',
      'Elowen leads them toward the market shadow, where sunlight no longer reaches the stones. Somewhere ahead, metal scrapes against the ground.':
        'Elowen 帶佢哋走向市場陰影嗰邊，陽光已經照唔到石路。前面某處，有金屬刮過地面嘅聲音。',
      'conflict, regret, emotional fight': '衝突、後悔、情感戰鬥',
      'battle scene or dialogue-fight system': '戰鬥場景或者對話戰鬥系統',
      'misunderstanding, pride, things left unsaid':
        '誤會、自尊、冇講出口嘅說話',
      'Welcome to Eldermere, the Town of Memories. Most visitors come here looking for something they lost.':
        '歡迎嚟到 Eldermere，記憶之城。大部分嚟到呢度嘅人，都係想搵返失去咗嘅嘢。',
      'But memories are not lost things. They are living things. If you touch them carelessly, they may answer in ways you do not expect.':
        '但記憶唔係失物。記憶係活住嘅。如果你亂咁觸碰，佢可能會用你估唔到嘅方式回答你。',
      'Elowen turns toward the street. Her smile remains, but her eyes become serious.':
        'Elowen 轉身望向街道。佢嘅笑容仲喺度，但眼神變得認真。',
      'There are two paths open to you now.': '而家有兩條路喺你哋面前打開。',
      'Stop 01': '第一站',
      'Stop 02': '第二站',
      'Stop 03': '第三站',
      'Stop 04': '第四站',
      'Final Stop': '終點站',
      Eldermere: 'Eldermere',
      'The Almost': '差啲就係',
      'The Distance': '距離',
      'Things Left Unsaid': '未講出口嘅說話',
      'Still Here': '仲喺度',
      'Goodbye, or Still Here': '再見，或者仲喺度',
      'Welcome to Eldermere, The Town Of Memories ':
        '歡迎嚟到 Eldermere，記憶之城',
      'Insipred By @her_movie_finds + Frieren The Anime':
        '靈感來自 @her_movie_finds 同《葬送的芙莉蓮》',
      "A combinations of Frieren vibes + Jolie's Film Reviews":
        'Frieren 嘅氛圍加 Jolie 嘅電影評論',
      'City lights blurred past the window, and for a while it felt like timing might be kind.':
        '城市燈光喺窗外糊成一片，有一陣間，好似連時間都變得溫柔。',
      'We were close enough to name it, but careful enough to call it ':
        '我哋近到可以為佢命名，但又小心到只敢叫佢做',
      nothing: '冇嘢',
      '.': '。',
      'folded stub': '摺起嘅票尾',
      'There are almosts that stay bright because they never had to survive daylight.':
        '有啲「差啲就係」之所以一直發光，係因為佢從來唔需要捱過日光。',
      'Rain kept drawing lines on the glass, turning the outside world into something unreachable.':
        '雨一直喺玻璃上畫線，將窗外世界變成一個碰唔到嘅地方。',
      'I learned that missing someone can be quiet, almost ':
        '我學識咗，掛住一個人可以好安靜，甚至近乎',
      disciplined: '自律',
      ', and still take up the whole carriage.':
        '，但仍然可以佔滿成個車廂。',
      'wet ticket': '濕咗嘅車票',
      'Some nights I only wanted the train to slow down enough for one honest sentence.':
        '有啲夜晚，我只係想列車慢到足夠畀我講一句真心話。',
      'The platform emptied. Announcements softened. Every sentence I kept became heavier than luggage.':
        '月台空咗，廣播聲變柔。每一句冇講出口嘅說話，都變得比行李更重。',
      'If love had been simpler, maybe I would have said ':
        '如果愛可以簡單啲，可能我會講',
      stay: '留低',
      ' without making it a burden.': '，而唔會令佢變成負擔。',
      'station stamp': '車站印章',
      'Not every silence was fear. Some of it was care wearing the wrong coat.':
        '唔係每一種沉默都係害怕。有啲只係穿錯外套嘅溫柔。',
      'Morning arrived pale and careful, like it did not want to wake the parts of us still sleeping.':
        '清晨蒼白又小心咁到嚟，好似唔想叫醒我哋仍然瞓緊嘅部分。',
      'If this is goodbye, let it be gentle. If not, I will remain ':
        '如果呢個係再見，希望佢溫柔啲。如果唔係，我會留喺',
      here: '呢度',
      ', somewhere after the last announcement.':
        '，喺最後一次廣播之後嘅某個地方。',
      'arrival mark': '到站印記',
      'The doors open. The story does not ask you to turn back. It only leaves the light on.':
        '門打開。故事冇叫你回頭，只係為你留住一盞燈。',
      'Nightfall in Eldermere': 'Eldermere 入夜',
      'After the Shrine': '神殿之後',
      "Jolie's inner thought": 'Jolie 心入面嘅諗法',
      Narrator: '旁白',
      'The night keeps the question': '夜色留住咗個問題',
      'The sky above Eldermere had turned deep blue. The rooftops sat quietly beneath the moon, and the town that once looked bright and welcoming now felt slower, softer, almost distant.':
        'Eldermere 上空變成深藍色。屋頂喺月光下靜靜坐住，原本明亮又歡迎人嘅城鎮，依家變得慢啲、柔啲，甚至有啲遙遠。',
      'She looked across the quiet town, trying to remember the moment the way he must have remembered it.':
        '佢望住安靜嘅城鎮，試住用佢可能記住嘅方式，去諗返嗰一刻。',
      'Back then, it had not felt important. It was just a message. Just something she typed without thinking too much. Just a way to make the first meeting less awkward.':
        '嗰陣，佢唔覺得重要。只係一個訊息。只係佢冇諗太多就打出嚟嘅字。只係令第一次見面冇咁尷尬嘅方法。',
      'I didn’t think he would remember that.':
        '我冇諗過佢會記得嗰句。',
      'I didn’t even know I had given him something to remember.':
        '我甚至唔知道自己曾經畀咗一樣值得記住嘅嘢佢。',
      'Jolie lowered her eyes. For a moment, she wondered how many small things had passed between them without her noticing.':
        'Jolie 垂低眼。有一刻，佢諗緊到底有幾多小事，曾經喺佢哋之間經過，而佢冇留意到。',
      'A message. A look. A pause in conversation. A joke that made the silence easier. Things she had forgotten because they felt too simple to hold onto.':
        '一個訊息。一個眼神。一段對話中嘅停頓。一個令沉默舒服啲嘅笑話。因為太簡單，所以佢冇握住、最後忘記咗嘅嘢。',
      'How many moments did I leave behind without knowing?':
        '我到底喺唔知情之下，留下咗幾多瞬間？',
      'And how many of them did he carry?':
        '而當中又有幾多，係佢一直帶住？',
      'The night air moved gently through Eldermere. The town was still, but her mind was not.':
        '夜風輕輕穿過 Eldermere。城鎮好靜，但佢個心唔靜。',
      'She kept thinking about the shrine. Not because it had shown something dramatic. But because it had shown something small. Something real.':
        '佢一直諗住神殿。唔係因為佢展示咗啲戲劇性嘅嘢，而係因為佢展示咗一樣細小嘅嘢。一樣真實嘅嘢。',
      'Maybe memories do not always announce themselves.':
        '可能記憶唔一定會自己宣告出現。',
      'Maybe they begin as nothing.': '可能佢哋一開始只係冇乜嘢。',
      'Then one day, someone looks back and realises it was the start of everything.':
        '然後有一日，有人回望，先發現嗰個原來係一切嘅開始。',
      'She looked toward the moon. The first clue had been found. But somehow, it felt less like an answer and more like a question.':
        '佢望向月亮。第一條線索已經搵到。但唔知點解，佢感覺唔似答案，反而更似一條問題。',
      'If that was the beginning... what else did he remember?':
        '如果嗰個就係開始……咁佢仲記得啲咩？',
      'The shrine was behind them now, but its words had not fully disappeared. A group project. An Instagram message. A playful sentence that seemed small at the time.':
        '神殿已經喺佢哋身後，但佢講過嘅說話仲未完全消失。一個小組功課。一個 Instagram 訊息。一句當時覺得好細微嘅玩笑說話。',
      'So that was the first memory he kept?':
        '原來嗰個就係佢一直留住嘅第一段記憶？',
      'Back then, she had not thought much of it. She had only sent a message because they were in the same group, because they needed to find each other, because it was easier to be playful than awkward.':
        '嗰陣佢冇諗太多。佢只係因為同一組、因為要搵到對方、因為玩笑比尷尬容易啲，所以先發咗個訊息。',
      'If you can’t find me, try screaming my name.':
        '如果你搵唔到我，就試吓大叫我個名。',
      'She almost smiled. It sounded silly now. But maybe that was why it stayed.':
        '佢差啲笑咗。依家聽落好傻。但可能就係因為咁，佢先留低咗。',
      'Some memories did not become important because they were beautiful. Some became important because they were ordinary, and somehow, someone remembered them anyway.':
        '有啲記憶唔係因為美麗先重要。有啲係因為普通，而偏偏有人記得，所以先變得重要。',
      'A group project and an Instagram message.':
        '一個小組功課同一個 Instagram 訊息。',
      'A group project.': '一個小組功課。',
      'A playful line she had almost forgotten.':
        '一句佢差啲已經唔記得嘅玩笑說話。',
      'A playful sentence.': '一句玩笑說話。',
      'A sentence she had written without thinking much of it.':
        '一句佢當時冇諗太多就寫低嘅說話。',
      'A small spark rose, then disappeared into the dark.':
        '一粒細細嘅火星升起，然後消失喺黑暗入面。',
      'About where the memory began.': '關於段記憶係喺邊度開始。',
      'After leaving the Memorial Shrine, the forest path felt colder than before.':
        '離開紀念神殿之後，森林小路比之前感覺更凍。',
      'After some time, she found an old tree with roots large enough to shelter beneath. The roots curved around the ground like the walls of a small room, dark and quiet, hidden from the path.':
        '過咗一陣，佢搵到一棵老樹，樹根大到可以喺下面避一避。啲根沿住地面彎起，好似一間細房嘅牆，黑暗、安靜，仲畀小路遮住咗。',
      'Alone?': '一個人？',
      'An Instagram message.': '一個 Instagram 訊息。',
      'An interactive fantasy story about memories that were forgotten, moments that stayed, and the journey to understand what they became.':
        '一個互動奇幻故事，關於被遺忘嘅記憶、留下嚟嘅瞬間，同埋一段去理解佢哋最後變成咩嘅旅程。',
      'And somehow, that made it harder to ignore.':
        '但唔知點解，正正因為咁，佢反而更難忽視。',
      'Are you coming?': '你嚟唔嚟？',
      'As if the past had become a fragile object in her hands.':
        '好似過去變成咗一件脆弱嘅嘢，落喺佢手入面。',
      'At the end of the path stood a moss-covered statue, older than the houses in town, peaceful as if it had been waiting without becoming tired.':
        '小路盡頭企住一座鋪滿青苔嘅石像，比鎮入面啲屋仲古老，安靜得好似等咗好耐都未覺得攰。',
      Back: '返回',
      'Back then, it had felt simple.': '嗰陣，佢覺得好簡單。',
      'Begin the story': '開始故事',
      beginning: '開始',
      'But careful.': '但變得小心。',
      'But he remembered because the moment became something else to him.':
        '但佢記得，因為嗰一刻對佢嚟講已經變成咗另一樣嘢。',
      'But he remembered it.': '但佢記得咗。',
      'But Jolie did not move yet.': '但 Jolie 仲未郁。',
      'But most memories begin smaller than that. A look. A sentence. A laugh. A word sent without knowing it would be kept.':
        '但大部分記憶其實由更細嘅嘢開始。一個眼神。一句說話。一聲笑。一句送出去時根本唔知道會被留住嘅字。',
      'But now, sitting alone beneath the roots of an old tree, Jolie wondered if simple things were the easiest to underestimate.':
        '但而家，Jolie 一個人坐喺老樹根下面，佢開始諗，係咪越簡單嘅嘢，就越容易被低估。',
      'But the memory had followed her back.': '但段記憶跟住佢返咗嚟。',
      called: '被呼喚',
      cantonese: '廣東話',
      'Claim the memory': '領取記憶',
      'Credit: Frieren The Anime': '靈感來源：Frieren 動畫',
      'Did I say other things like that?': '我有冇講過其他咁樣嘅說話？',
      'Do not choose the most beautiful answer. Choose the true one.':
        '唔好揀最靚嘅答案。揀真實嗰個。',
      'Do not take too long.': '唔好太耐。',
      Elowen: 'Elowen',
      english: '英文',
      'Fern frowned slightly.': 'Fern 微微皺起眉。',
      'Fern hesitated.': 'Fern 猶豫咗一下。',
      'Fern stopped and looked back.': 'Fern 停低，回頭望佢。',
      'Fern was probably already annoyed.': 'Fern 可能已經有啲嬲。',
      'First Memory achieved': '第一段記憶已完成',
      'For a while, Jolie stayed where she was.':
        '有一段時間，Jolie 企喺原地冇郁。',
      'For the first time since entering Eldermere, she felt that the town was not only showing his memories.':
        '自從入到 Eldermere 之後，佢第一次覺得，呢個城鎮唔只係展示緊佢嘅記憶。',
      'Go to the next memory': '前往下一段記憶',
      group: '小組',
      'Her eyes moved across the page, yet her mind kept returning to the shrine.':
        '佢雙眼掃過書頁，但個心一直返去神殿嗰度。',
      'Honest about what?': '對咩誠實？',
      'I know. I just need to think for a little while.':
        '我知。我只係需要諗一陣。',
      'I thought it was just a message.': '我以為嗰個只係一個訊息。',
      'I’ll catch up.': '我一陣追返你哋。',
      'If he kept that first message...': '如果佢一直留住第一個訊息……',
      'If he remembered that...': '如果佢連嗰個都記得……',
      'In Progress!': '製作中！',
      'It asks whether you are honest.': '佢問你係咪誠實。',
      'It can be. But memory is not always pain.':
        '可以係。但記憶唔一定永遠都係痛。',
      'It does not look like a shrine.': '佢睇落唔似神殿。',
      'It had not shown a dramatic promise.': '佢冇展示一個戲劇性嘅承諾。',
      'It had not shown a goodbye under rain or anything that would obviously belong in a story.':
        '佢冇展示雨中告別，亦冇展示任何一睇就似故事情節嘅畫面。',
      'It had shown a beginning so ordinary that she almost missed the weight of it.':
        '佢展示嘅開始太普通，普通到佢差啲錯過咗當中嘅重量。',
      'It was asking her to remember too.': '佢亦都係叫佢去記返。',
      'Its warmth reached her hands, but not the strange feeling in her chest.':
        '火嘅暖意傳到佢雙手，但傳唔到胸口嗰種奇怪感覺。',
      'Jolie closed the book halfway, keeping one finger between the pages.':
        'Jolie 將本書半合埋，一隻手指仲夾喺書頁之間。',
      'Jolie gave a small nod.': 'Jolie 輕輕點咗點頭。',
      'Jolie gave another small nod, but she did not answer right away.':
        'Jolie 又輕輕點咗點頭，但冇即刻回答。',
      'Jolie looked toward the path back to town, then toward the darker road beside the forest.':
        'Jolie 望向返城鎮嘅路，然後又望向森林旁邊更暗嘅路。',
      'Jolie lowered her gaze to the open book in her lap, but the words blurred into the same question again and again.':
        'Jolie 垂低眼望住膝上打開嘅書，但啲字一次又一次模糊成同一個問題。',
      'Jolie made her way back to Eldermere as night settled over the town.':
        '夜色落喺城鎮上時，Jolie 慢慢行返 Eldermere。',
      'Jolie stayed behind.': 'Jolie 留咗喺後面。',
      'Jolie stopped there.': 'Jolie 喺嗰度停低。',
      'Jolie watched as Fern and the old lady continued down the forest path. Their figures grew smaller between the trees, then disappeared into the dark green shadows leading back toward Eldermere.':
        'Jolie 睇住 Fern 同老婦人繼續沿住森林小路行。佢哋嘅身影喺樹影之間越嚟越細，最後消失喺通往 Eldermere 嘅深綠陰影入面。',
      'Just a message sent to make things easier. Maybe to make the first meeting less awkward. Maybe because being playful felt safer than being too formal.':
        '只係一個為咗令事情容易啲而發出嘅訊息。可能係想令第一次見面冇咁尷尬。可能係因為玩笑比太正式更安全。',
      'Just a message through Instagram, light and playful. If you could not find her, you should try screaming her name.':
        '只係一個透過 Instagram 發出、輕鬆又帶啲玩笑嘅訊息。如果你搵唔到佢，就試吓大叫佢個名。',
      'Just enough to let the others move ahead without her.':
        '只係啱啱好，可以畀其他人冇佢都繼續行前。',
      'Just quiet enough for every thought to sound louder.':
        '靜到每一個念頭都變得更大聲。',
      'Just something silly to make things less awkward.':
        '只係一樣傻傻哋、用嚟令事情冇咁尷尬嘅嘢。',
      keeps: '留住',
      'Listen carefully. The shrine speaks plainly, but people often answer with what they wish were true.':
        '聽清楚。神殿講得好直接，但人往往會用自己希望係真嘅嘢去回答。',
      'Long ago, before Eldermere had walls, people came here to leave names behind. Not because they wanted to forget them, but because they were afraid no one else would remember.':
        '好耐以前，喺 Eldermere 仲未有城牆之前，人哋會嚟呢度留下名字。唔係因為佢哋想忘記，而係因為佢哋驚冇其他人會記得。',
      Lunareth: 'Lunareth',
      'Many stories begin with less. The next memory is not kept here. It is somewhere louder. A memory carried by sound. The first laugh.':
        '好多故事嘅開始比呢個仲少。下一段記憶唔係收喺呢度。佢喺一個更嘈、更有聲音嘅地方。一段由聲音帶住嘅記憶。第一聲笑。',
      'Maybe I forgot because I was only living the moment.':
        '可能我忘記，係因為我當時只係活喺嗰一刻。',
      'Maybe, when the journey ends, you will find something worth returning to :D':
        '可能旅程完結嗰陣，你會搵到一樣值得返去嘅嘢 :D',
      'Maybe. But some people enter a memory exactly like that. They arrive with a sentence you did not expect, and somehow, the day becomes easier to remember.':
        '可能係。但有啲人就係咁樣走入一段記憶。佢哋帶住一句你冇諗過會聽到嘅說話出現，然後唔知點解，嗰日就變得更容易記住。',
      'Memories Lane': '記憶之路',
      message: '訊息',
      'Mobile train route': '手機版列車路線',
      'Names of the dead?': '死者嘅名字？',
      Next: '下一步',
      'No. It does not ask to be noticed.': '唔係。佢唔要求人注意佢。',
      'Not empty.': '但唔係空嘅。',
      'Not exactly. A test decides whether you are worthy. The shrine is kinder than that.':
        '唔完全係。考驗係決定你值唔值得。神殿比呢個溫柔。',
      'Not far.': '唔遠。',
      'Not guilty exactly.': '唔完全係內疚。',
      'Old Lady': '老婦人',
      'Only the fire stayed with her, small and warm beneath the old tree, while the question remained open on the page.':
        '只有火陪住佢，細細哋、暖暖哋，喺老樹下面燃住；而問題仍然攤開喺書頁上。',
      passing: '路過',
      'People often think memories must be large to be important. A battle. A farewell. A great promise beneath the stars.':
        '人哋成日以為記憶一定要好大先重要。一場戰鬥。一場告別。星空下嘅偉大承諾。',
      'Proof. That someone was here. That something happened. That a small moment once mattered enough to stay.':
        '證明。證明有人曾經喺度。證明有啲事發生過。證明一個細小瞬間曾經重要到足以留下。',
      'Ready When You Are': '你準備好就可以開始',
      scream: '大叫',
      'She did not know exactly where she was going.':
        '佢唔太清楚自己究竟要去邊。',
      'She gathered a few dry branches, made a small fire, and sat close enough to feel its warmth against the cold night air.':
        '佢執咗幾枝乾樹枝，生咗一個細火，坐近到可以喺寒冷夜風入面感到一點暖意。',
      'She had returned from the shrine.': '佢已經由神殿返嚟。',
      'She looked into the forest.': '佢望入森林深處。',
      'She only knew she was not ready to return yet.':
        '佢只知道自己仲未準備好返去。',
      'She stared at the fire.': '佢望住火。',
      'She turned a page, though she had not finished reading the last one.':
        '佢翻咗一頁，雖然上一頁其實仲未睇完。',
      'She turned away from the path back to town and walked deeper beneath the trees. The ground was uneven, covered with roots, fallen leaves, and old stones hidden beneath the grass. Above her, the branches twisted together, blocking most of the moonlight.':
        '佢轉身離開返城鎮嘅路，行入更深嘅樹影之下。地面凹凸不平，鋪滿樹根、落葉，同埋藏喺草下面嘅舊石。頭頂上，樹枝交纏，擋住咗大部分月光。',
      shrine: '神殿',
      'Small things. Careless things. Things I forgot five minutes later.':
        '細小嘅事。冇留心嘅事。五分鐘之後我就忘記咗嘅事。',
      'So that was the first clue?': '所以嗰個就係第一條線索？',
      'So the shrine tests visitors?': '所以神殿會考驗訪客？',
      'Some hostile creatures do not hunt loudly. They wait for quiet footsteps.':
        '有啲敵意生物唔會大聲狩獵。佢哋會等安靜嘅腳步聲。',
      'Some memories are not meant to be rushed.':
        '有啲記憶唔應該被催促。',
      'Some. But not only them. Names of people they loved, friends who left, promises they could not keep, even names they never had the courage to speak aloud.':
        '有啲係。但唔止係佢哋。仲有佢哋愛過嘅人、離開咗嘅朋友、守唔到嘅承諾，甚至係佢哋一直冇勇氣講出口嘅名字。',
      'Somewhere beyond Eldermere, the next memory was already waiting.':
        '喺 Eldermere 之外某個地方，下一段記憶已經等緊。',
      'Somewhere beyond the trees, Eldermere was waiting.':
        '喺樹林之外，Eldermere 正等住。',
      'Spoiler: card game :> ': '劇透：卡牌遊戲 :> ',
      'That is a strange first instruction.': '呢個第一個指示都幾奇怪。',
      'That is why I brought you here first. Not to show you a great memory, but to ask whether you can recognise a small one.':
        '所以我先帶你哋嚟呢度。唔係為咗畀你哋睇一段偉大嘅記憶，而係想問你哋，認唔認得出一段細小嘅記憶。',
      'That sounds painful.': '聽落好痛。',
      'That thought made her feel quiet.': '嗰個念頭令佢安靜落嚟。',
      'That was easier than sitting completely still with the thought.':
        '咁樣總好過同嗰個念頭一齊完全靜止咁坐住。',
      'The fire cracked softly beside her.': '火喺佢身邊輕輕爆響。',
      'The fire shifted.': '火光晃動咗一下。',
      'The First Approach: She first approached through Instagram during a group project. "If you cannot find me, try screaming my name."':
        '第一次接近：佢喺小組功課期間，第一次透過 Instagram 接近佢。「如果你搵唔到我，就試吓大叫我個名。」',
      'The forest around her stayed still.': '佢身邊嘅森林仍然靜止。',
      'The forest became quiet around her.': '佢身邊嘅森林變得安靜。',
      'The forest is not kind after sunset.': '日落之後，森林唔會仁慈。',
      'The movement gave her hands something to do.':
        '呢個動作至少畀佢雙手有啲嘢可以做。',
      'The next memory is waiting': '下一段記憶正等住',
      'The night gave no answer.': '夜晚冇畀任何答案。',
      'The old lady studied her for a moment. Then she looked toward the moonlit trees.':
        '老婦人望咗佢一陣。然後望向月光下嘅樹。',
      'The old lady turned around. Her expression was calm, but serious.':
        '老婦人轉過身。佢神情平靜，但好認真。',
      'The old lady walked slowly ahead, guiding them back toward Eldermere before the night grew too deep. Fern followed beside her, quiet but watchful, still thinking about the shrine’s question.':
        '老婦人慢慢行喺前面，趁夜色未太深之前帶佢哋返 Eldermere。Fern 跟喺佢身邊，安靜但警覺，仲諗住神殿嗰個問題。',
      'The old lady was probably pretending not to worry.':
        '老婦人大概扮緊唔擔心。',
      'The path to the shrine was quieter than the town square. Stone slowly disappeared beneath grass and roots.':
        '通往神殿嘅小路比城鎮廣場安靜。石路慢慢消失喺草同樹根下面。',
      'The shrine had not shown her a grand confession.':
        '神殿冇畀佢睇一場宏大嘅告白。',
      'The statue had not moved. The forest had not changed. But the memory felt clearer now. Not larger. Not more dramatic. Just clearer.':
        '石像冇郁。森林冇變。但段記憶而家變得更清楚。唔係更大。唔係更戲劇性。只係更清楚。',
      'The streets had grown still, and the warmth from the windows made the whole place feel like it was keeping secrets.':
        '街道已經靜落嚟，窗入面透出嘅暖光令成個地方好似收藏住秘密。',
      'The words from the shrine had followed her all the way through the trees.':
        '神殿嘅說話一路跟住佢穿過樹林。',
      'Their pages caught the firelight softly. Notes, old words, and half-finished thoughts rested in front of her, but she was not really reading.':
        '書頁柔柔咁接住火光。筆記、舊字句，同半完成嘅念頭攤喺佢面前，但佢其實冇真正睇入眼。',
      'Then do not wander too far.': '咁就唔好行得太遠。',
      'Then she opened her books.': '然後佢打開啲書。',
      'Then what did I keep?': '咁我又留住咗啲咩？',
      'Then what does it do?': '咁佢做咩？',
      'Then what is it?': '咁記憶係咩？',
      'This is the Memorial Shrine.': '呢度就係紀念神殿。',
      'To be continued...': '待續……',
      'Too simple to matter.': '簡單到好似唔重要。',
      'Train journey love story': '列車旅程愛情故事',
      'Trees leaned over the path, their branches crossing above like old hands. Behind them, Eldermere faded into footsteps, leaves, and distant birds.':
        '樹木向小路傾斜，樹枝喺上方交錯，好似一雙雙古老嘅手。喺佢哋身後，Eldermere 漸漸融入腳步聲、葉聲同遠處鳥聲之中。',
      wait: '等待',
      want: '想要',
      'We should head back now, before the forest grows dark. Eldermere is gentle in the morning, but hostile creatures wander closer after sunset.':
        '我哋而家應該返去，趁森林仲未完全變暗。Eldermere 朝早係溫柔嘅，但日落之後，有敵意嘅生物會行近。',
      'What else did he remember?': '佢仲記得啲咩？',
      'Yes. That was the beginning. Not a grand meeting. Not a dramatic promise.':
        '係。嗰個就係開始。唔係盛大嘅相遇。唔係戲劇性嘅承諾。',
      'Yes. The first clue is important because it became the place everything started from.':
        '係。第一條線索好重要，因為佢變成咗一切開始嘅地方。',
      'You will play as Frieren, carrying your own name through each town and every memory.':
        '你會扮演 Frieren，帶住你自己嘅名字，穿過每個城鎮同每一段記憶。',
      'Your task is to explore, choose, solve, and uncover the missing pieces left behind.':
        '你要探索、選擇、解開謎題，揭開被留下嘅缺口。',
      '繁體中文': '繁體中文',
    },
  };

export const ELDERMERE_CHOICES: EldermereChoice[] = [
    {
      id: 'keeps',
      prompt: 'What kind of memories does this town keep?',
      reply:
        'The ones people pretend are small. A first word. A quiet promise. A goodbye they laughed through. Those are the memories that stay the longest.',
    },
    {
      id: 'passing',
      prompt: 'We are only passing through.',
      reply:
        'Everyone says that when they first arrive. Yet Eldermere is rarely a place people simply pass through. The town only opens its roads to those willing to look back.',
    },
    {
      id: 'called',
      prompt: 'Are you the one who called us here?',
      reply:
        'No. I only listen when the lake speaks. And today, it whispered of a memory that has followed you farther than you realise.',
    },
    {
      id: 'want',
      prompt: 'What do you want from us?',
      reply:
        'Nothing. But the town may ask something of you. A little honesty. A little courage. And perhaps one memory you have not yet understood.',
    },
  ];

export const ELDERMERE_PATHS: EldermerePath[] = [
    {
      id: 'shrine',
      option: 'Take us to the Memory Shrine.',
      reply:
        'Then walk softly. The shrine does not punish loud footsteps, but it remembers them.',
      narration:
        'Elowen begins walking toward a narrow road lined with white flowers. The air grows colder with each step, and the sound of the fountain fades behind them.',
      scene: 'The Memory Shrine',
      theme: 'emotional, reflective, puzzle-based',
      task: 'light candles in the correct memory order',
      focus: 'first message, first laugh, first thought that stayed',
    },

  ];

export const SHRINE_INTRO_BEATS: ShrineBeat[] = [
    {
      speaker: 'Narration',
      text:
        'The path to the shrine was quieter than the town square. Stone slowly disappeared beneath grass and roots.',
    },
    {
      speaker: 'Narration',
      text:
        'Trees leaned over the path, their branches crossing above like old hands. Behind them, Eldermere faded into footsteps, leaves, and distant birds.',
    },
    {
      speaker: 'Narration',
      text:
        'At the end of the path stood a moss-covered statue, older than the houses in town, peaceful as if it had been waiting without becoming tired.',
    },
    {
      speaker: 'Old Lady (Elowen)',
      text: 'This is the Memorial Shrine.',
    },
    {
      speaker: 'Jolie',
      text: 'It does not look like a shrine.',
    },
    {
      speaker: 'Old Lady (Elowen)',
      text: 'No. It does not ask to be noticed.',
    },
    {
      speaker: 'Old Lady (Elowen)',
      text:
        'Long ago, before Eldermere had walls, people came here to leave names behind. Not because they wanted to forget them, but because they were afraid no one else would remember.',
    },
    {
      speaker: 'Fern',
      text: 'Names of the dead?',
    },
    {
      speaker: 'Old Lady (Elowen)',
      text:
        'Some. But not only them. Names of people they loved, friends who left, promises they could not keep, even names they never had the courage to speak aloud.',
    },
    {
      speaker: 'Jolie',
      text: 'That sounds painful.',
    },
    {
      speaker: 'Old Lady (Elowen)',
      text: 'It can be. But memory is not always pain.',
    },
    {
      speaker: 'Jolie',
      text: 'Then what is it?',
    },
    {
      speaker: 'Old Lady (Elowen)',
      text:
        'Proof. That someone was here. That something happened. That a small moment once mattered enough to stay.',
    },
    {
      speaker: 'Old Lady (Elowen)',
      text:
        'People often think memories must be large to be important. A battle. A farewell. A great promise beneath the stars.',
    },
    {
      speaker: 'Old Lady (Elowen)',
      text:
        'But most memories begin smaller than that. A look. A sentence. A laugh. A word sent without knowing it would be kept.',
    },
    {
      speaker: 'Old Lady (Elowen)',
      text:
        'That is why I brought you here first. Not to show you a great memory, but to ask whether you can recognise a small one.',
    },
    {
      speaker: 'Fern',
      text: 'So the shrine tests visitors?',
    },
    {
      speaker: 'Old Lady (Elowen)',
      text:
        'Not exactly. A test decides whether you are worthy. The shrine is kinder than that.',
    },
    {
      speaker: 'Jolie',
      text: 'Then what does it do?',
    },
    {
      speaker: 'Old Lady (Elowen)',
      text: 'It asks whether you are honest.',
    },
    {
      speaker: 'Jolie',
      text: 'Honest about what?',
    },
    {
      speaker: 'Old Lady (Elowen)',
      text: 'About where the memory began.',
    },
    {
      speaker: 'Old Lady (Elowen)',
      text:
        'Listen carefully. The shrine speaks plainly, but people often answer with what they wish were true.',
    },
    {
      speaker: 'Old Lady (Elowen)',
      text: 'Do not choose the most beautiful answer. Choose the true one.',
    },
  ];

export const SHRINE_ANSWERS: ShrineAnswer[] = [
    { id: 'wait', label: 'Wait quietly near the classroom' },
    { id: 'message', label: 'Send another message' },
    { id: 'scream', label: 'Try screaming her name' },
    { id: 'group', label: 'Ask the group where she was' },
  ];

export const SHRINE_AFTER_BEATS: ShrineBeat[] = [
    {
      speaker: 'Old Lady (Elowen)',
      text: 'Yes. That was the beginning. Not a grand meeting. Not a dramatic promise.',
    },
    {
      speaker: 'Old Lady (Elowen)',
      text:
        'Just a message through Instagram, light and playful. If you could not find her, you should try screaming her name.',
    },
    {
      speaker: 'Jolie',
      text: 'That is a strange first instruction.',
    },
    {
      speaker: 'Old Lady (Elowen)',
      text:
        'Maybe. But some people enter a memory exactly like that. They arrive with a sentence you did not expect, and somehow, the day becomes easier to remember.',
    },
    {
      speaker: 'Memory Clue 01',
      text:
        'The First Approach: She first approached through Instagram during a group project. "If you cannot find me, try screaming my name."',
    },
    {
      speaker: 'Narration',
      text:
        'The statue had not moved. The forest had not changed. But the memory felt clearer now. Not larger. Not more dramatic. Just clearer.',
    },
    {
      speaker: 'Jolie',
      text: 'So that was the first clue?',
    },
    {
      speaker: 'Old Lady (Elowen)',
      text:
        'Yes. The first clue is important because it became the place everything started from.',
    },
    {
      speaker: 'Fern',
      text: 'A group project and an Instagram message.',
    },
    {
      speaker: 'Old Lady (Elowen)',
      text:
        'Many stories begin with less. The next memory is not kept here. It is somewhere louder. A memory carried by sound. The first laugh.',
    },
    {
  speaker: 'Old Lady (Elowen)',
  text:
    'We should head back now, before the forest grows dark. Eldermere is gentle in the morning, but hostile creatures wander closer after sunset.',
}
  ];

export const STOPS: TrainStop[] = [
    {
      id: 'beginning',
      stop: 'Stop 01',
      station: 'Eldermere',
      title: 'Eldermere',
      lines: [
        {
          before: ' ',
          hidden: 'Welcome to Eldermere, The Town Of Memories ',
        },
      ],
      noteLabel: 'Insipred By @her_movie_finds + Frieren The Anime',
      note: "A combinations of Frieren vibes + Jolie's Film Reviews"
  
    },
    {
      id: 'Lunareth',
      stop: 'Stop 02',
      station: 'Lunareth',
      title: 'Lunareth',
      lines: [
        {
          before:
            'In Progress!',
        },
        {
          before: 'Spoiler: card game :> ',
          hidden: '',
          after: '.',
        },
      ],
      noteLabel: 'folded stub',
      note: 'There are almosts that stay bright because they never had to survive daylight.',
    },
    
  ];
