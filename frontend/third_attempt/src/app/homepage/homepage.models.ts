export type StoryLine = {
  before: string;
  hidden?: string;
  after?: string;
};

export type TrainStop = {
  id: string;
  stop: string;
  station: string;
  title: string;
  lines: StoryLine[];
  noteLabel: string;
  note?: string;
};

export type EldermereChoice = {
  id: string;
  prompt: string;
  reply: string;
};

export type EldermerePath = {
  id: string;
  option: string;
  reply: string;
  narration: string;
  scene: string;
  theme: string;
  task: string;
  focus: string;
};

export type ShrineBeat = {
  speaker: string;
  text: string;
};

export type ShrineAnswer = {
  id: string;
  label: string;
};

export type LanguageId = 'english' | 'cantonese';

export type IntroLanguage = {
  id: LanguageId;
  label: string;
  nativeLabel: string;
};

export type StaticMemorySlide = {
  eyebrow: string;
  title?: string;
  lines: string[];
};

export type HomepageText = {
  aria: {
    journey: string;
    mobileRoute: string;
    beginStory: string;
    nextMemory: string;
  };
  intro: {
    credit: string;
    title: string;
    languagePrompt: string;
    ready: string;
    back: string;
    next: string;
  };
  common: {
    arrival: string;
    restart: string;
    continue: string;
    mainQuest: string;
    asked: string;
    jolie: string;
  };
  eldermere: {
    speaker: string;
    answerLabel: string;
    topics: string;
    askEverything: string;
    choosePath: string;
    askAnother: string;
    mainQuestAccepted: string;
    shrineTitle: string;
    shrineHint: string;
    pathsOpen: string;
  };
  shrine: {
    title: string;
    statueAnswers: string;
    waiting: string;
    claimMemory: string;
    questionLabel: string;
    questionTitle: string;
    questionPrompt: string;
    wrongSpeaker: string;
    wrongAnswer: string;
    achieved: string;
    clueTitle: string;
  };
  nightfall: {
    eyebrow: string;
    title: string;
    finalButton: string;
  };
  ending: {
    eyebrow: string;
    title: string;
    finalButton: string;
  };
};
