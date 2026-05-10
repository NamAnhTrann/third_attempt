import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

type StoryLine = {
  before: string;
  hidden?: string;
  after?: string;
};

type TrainStop = {
  id: string;
  stop: string;
  station: string;
  title: string;
  lines: StoryLine[];
  noteLabel: string;
  note?: string;
};

type EldermereChoice = {
  id: string;
  prompt: string;
  reply: string;
};

type EldermerePath = {
  id: string;
  option: string;
  reply: string;
  narration: string;
  scene: string;
  theme: string;
  task: string;
  focus: string;
};

type ShrineBeat = {
  speaker: string;
  text: string;
};

type ShrineAnswer = {
  id: string;
  label: string;
};

@Component({
  selector: 'app-homepage',
  imports: [NgTemplateOutlet],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Homepage implements AfterViewInit, OnDestroy {
  @ViewChild('desktopJourney') desktopJourney?: ElementRef<HTMLElement>;

  activeStopIndex = 0;
  eldermereStep = 0;
  completedEldermereChoiceIds: string[] = [];
  selectedEldermereChoice?: EldermereChoice;
  selectedEldermerePath?: EldermerePath;
  showMainQuestPopup = false;
  showSideQuestPopup = false;
  shrineSceneStep = 0;
  shrineAfterStep = 0;
  selectedShrineAnswerId?: string;
  shrineSolved = false;
  shrineWrongAnswer = false;

  readonly eldermereChoices: EldermereChoice[] = [
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

  readonly eldermerePaths: EldermerePath[] = [
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
    {
      id: 'duelist',
      option: 'Take us to the other person.',
      reply:
        'Then keep your hand near your staff. Some memories do not cry when they are hurt. Some become teeth.',
      narration:
        'Elowen leads them toward the market shadow, where sunlight no longer reaches the stones. Somewhere ahead, metal scrapes against the ground.',
      scene: 'The Forgotten Duelist',
      theme: 'conflict, regret, emotional fight',
      task: 'battle scene or dialogue-fight system',
      focus: 'misunderstanding, pride, things left unsaid',
    },
  ];

  readonly shrineIntroBeats: ShrineBeat[] = [
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

  readonly shrineAnswers: ShrineAnswer[] = [
    { id: 'wait', label: 'Wait quietly near the classroom' },
    { id: 'message', label: 'Send another message' },
    { id: 'scream', label: 'Try screaming her name' },
    { id: 'group', label: 'Ask the group where she was' },
  ];

  readonly shrineAfterBeats: ShrineBeat[] = [
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
        'You may continue to the next place. But remember this: do not search only for the moments that looked important. Search for the ones that stayed.',
    },
  ];

  readonly stops: TrainStop[] = [
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
      id: 'almost',
      stop: 'Stop 02',
      station: 'The Almost',
      title: 'The Almost',
      lines: [
        {
          before:
            'City lights blurred past the window, and for a while it felt like timing might be kind.',
        },
        {
          before: 'We were close enough to name it, but careful enough to call it ',
          hidden: 'nothing',
          after: '.',
        },
      ],
      noteLabel: 'folded stub',
      note: 'There are almosts that stay bright because they never had to survive daylight.',
    },
    {
      id: 'distance',
      stop: 'Stop 03',
      station: 'The Distance',
      title: 'The Distance',
      lines: [
        {
          before:
            'Rain kept drawing lines on the glass, turning the outside world into something unreachable.',
        },
        {
          before: 'I learned that missing someone can be quiet, almost ',
          hidden: 'disciplined',
          after: ', and still take up the whole carriage.',
        },
      ],
      noteLabel: 'wet ticket',
      note: 'Some nights I only wanted the train to slow down enough for one honest sentence.',
    },
    {
      id: 'unsaid',
      stop: 'Stop 04',
      station: 'Things Left Unsaid',
      title: 'Things Left Unsaid',
      lines: [
        {
          before:
            'The platform emptied. Announcements softened. Every sentence I kept became heavier than luggage.',
        },
        {
          before: 'If love had been simpler, maybe I would have said ',
          hidden: 'stay',
          after: ' without making it a burden.',
        },
      ],
      noteLabel: 'station stamp',
      note: 'Not every silence was fear. Some of it was care wearing the wrong coat.',
    },
    {
      id: 'goodbye',
      stop: 'Final Stop',
      station: 'Still Here',
      title: 'Goodbye, or Still Here',
      lines: [
        {
          before:
            'Morning arrived pale and careful, like it did not want to wake the parts of us still sleeping.',
        },
        {
          before: 'If this is goodbye, let it be gentle. If not, I will remain ',
          hidden: 'here',
          after: ', somewhere after the last announcement.',
        },
      ],
      noteLabel: 'arrival mark',
      note: 'The doors open. The story does not ask you to turn back. It only leaves the light on.',
    },
  ];

  private observer?: IntersectionObserver;
  private revealedWords = new Set<string>();
  private openNotes = new Set<string>();

  get routeProgress(): number {
    return (this.activeStopIndex / (this.stops.length - 1)) * 100;
  }

  ngAfterViewInit(): void {
    this.setupMobileObserver();
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  onDesktopSlideChange(event: Event): void {
    const swiper = event.target as HTMLElement & { swiper?: { activeIndex?: number } };
    const activeIndex = swiper.swiper?.activeIndex;

    if (typeof activeIndex === 'number') {
      this.activeStopIndex = activeIndex;
    }
  }

  goToStop(index: number): void {
    this.activeStopIndex = index;

    const swiper = this.desktopJourney?.nativeElement as HTMLElement & {
      swiper?: { slideTo: (index: number) => void };
    };

    if (swiper?.swiper) {
      swiper.swiper.slideTo(index);
      return;
    }

    document
      .querySelector<HTMLElement>(`.mobile-route [data-stop-index="${index}"]`)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  goToBeginningMemory(
    event: MouseEvent,
    childJourney: HTMLElement & { swiper?: { slideNext: () => void } },
  ): void {
    event.stopPropagation();
    childJourney.swiper?.slideNext();
  }

  advanceEldermereDialogue(): void {
    this.eldermereStep = Math.min(this.eldermereStep + 1, 2);
  }

  chooseEldermereDialogue(choiceId: string): void {
    this.selectedEldermereChoice = this.eldermereChoices.find(
      (choice) => choice.id === choiceId,
    );
    this.selectedEldermerePath = undefined;
    if (!this.completedEldermereChoiceIds.includes(choiceId)) {
      this.completedEldermereChoiceIds = [
        ...this.completedEldermereChoiceIds,
        choiceId,
      ];
    }
    this.eldermereStep = 3;
  }

  chooseEldermerePath(pathId: string): void {
    this.selectedEldermerePath = this.eldermerePaths.find(
      (path) => path.id === pathId,
    );
    this.eldermereStep = 5;
    this.showMainQuestPopup = pathId === 'shrine';
    this.showSideQuestPopup = pathId === 'duelist';
  }

  continueMainQuest(
    event?: MouseEvent,
    childJourney?: HTMLElement & { swiper?: { slideNext: () => void } },
  ): void {
    event?.stopPropagation();
    this.showMainQuestPopup = false;

    if (childJourney?.swiper) {
      childJourney.swiper.slideNext();
      return;
    }

    this.goToStop(1);
  }

  continueSideQuest(): void {
    this.showSideQuestPopup = false;
  }

  get currentShrineBeat(): ShrineBeat | undefined {
    return this.shrineIntroBeats[this.shrineSceneStep];
  }

  get currentShrineAfterBeat(): ShrineBeat | undefined {
    return this.shrineAfterBeats[this.shrineAfterStep];
  }

  get currentShrineBeatList(): ShrineBeat[] {
    return this.currentShrineBeat ? [this.currentShrineBeat] : [];
  }

  get currentShrineAfterBeatList(): ShrineBeat[] {
    return this.currentShrineAfterBeat ? [this.currentShrineAfterBeat] : [];
  }

  getShrineSpeakerClass(speaker: string): string {
    return `speaker-line--${speaker.toLowerCase().replaceAll(' ', '-')}`;
  }

  get isShrineQuestionOpen(): boolean {
    return (
      !this.shrineSolved && this.shrineSceneStep >= this.shrineIntroBeats.length
    );
  }

  advanceShrineScene(): void {
    this.shrineSceneStep = Math.min(
      this.shrineSceneStep + 1,
      this.shrineIntroBeats.length,
    );
  }

  chooseShrineAnswer(answerId: string): void {
    this.selectedShrineAnswerId = answerId;
    this.shrineSolved = answerId === 'scream';
    this.shrineWrongAnswer = !this.shrineSolved;

    if (this.shrineSolved) {
      this.shrineAfterStep = 0;
    }
  }

  continueShrineAfterAnswer(): void {
    this.shrineAfterStep = Math.min(
      this.shrineAfterStep + 1,
      this.shrineAfterBeats.length - 1,
    );
  }

  resetShrineScene(): void {
    this.shrineSceneStep = 0;
    this.shrineAfterStep = 0;
    this.selectedShrineAnswerId = undefined;
    this.shrineSolved = false;
    this.shrineWrongAnswer = false;
  }

  continueEldermereAfterReply(): void {
    this.eldermereStep =
      this.completedEldermereChoiceIds.length === this.eldermereChoices.length
        ? 4
        : 2;
  }

  hasCompletedEldermereChoice(choiceId: string): boolean {
    return this.completedEldermereChoiceIds.includes(choiceId);
  }

  resetEldermereConversation(): void {
    this.eldermereStep = 0;
    this.completedEldermereChoiceIds = [];
    this.selectedEldermereChoice = undefined;
    this.selectedEldermerePath = undefined;
    this.showMainQuestPopup = false;
    this.showSideQuestPopup = false;
  }

  revealHiddenWord(stopId: string, lineIndex: number): void {
    this.revealedWords.add(this.hiddenWordKey(stopId, lineIndex));
  }

  isHiddenWordRevealed(stopId: string, lineIndex: number): boolean {
    return this.revealedWords.has(this.hiddenWordKey(stopId, lineIndex));
  }

  toggleNote(stopId: string): void {
    if (this.openNotes.has(stopId)) {
      this.openNotes.delete(stopId);
      return;
    }

    this.openNotes.add(stopId);
  }

  isNoteOpen(stopId: string): boolean {
    return this.openNotes.has(stopId);
  }

  private setupMobileObserver(): void {
    const mobileStops = document.querySelectorAll<HTMLElement>(
      '.mobile-route .train-stop',
    );

    this.observer = new IntersectionObserver(
      (entries) => {
        const visibleStop = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visibleStop) {
          return;
        }

        const index = Number(
          visibleStop.target.getAttribute('data-stop-index') ?? 0,
        );

        this.activeStopIndex = index;
      },
      {
        root: document.querySelector('.mobile-route'),
        threshold: [0.42, 0.68],
      },
    );

    mobileStops.forEach((stop) => this.observer?.observe(stop));
  }

  private hiddenWordKey(stopId: string, lineIndex: number): string {
    return `${stopId}-${lineIndex}`;
  }
}
