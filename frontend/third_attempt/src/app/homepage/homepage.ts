import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { HomepageCopy } from './homepage.copy';
import {
  ARRIVAL_MEMORY_SLIDES,
  ELDERMERE_CHOICES,
  ELDERMERE_PATHS,
  EMOTIONAL_DIALOGUE,
  EPILOGUE_BEATS,
  HOMEPAGE_TEXT,
  INTRO_COPY_LINES,
  INTRO_LANGUAGES,
  NIGHTFALL_BEATS,
  SHRINE_AFTER_BEATS,
  SHRINE_ANSWERS,
  SHRINE_INTRO_BEATS,
  STOPS,
  TRANSLATED_TEXT,
} from './homepage.data';
import type {
  EldermereChoice,
  EldermerePath,
  LanguageId,
  ShrineBeat,
} from './homepage.models';

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
  showFirstClueAchievedPopup = false;
  nightfallStep = 0;
  epilogueStep = 0;
  introCopyStep = 0;
  selectedIntroLanguage: LanguageId = 'english';

  private readonly copy = new HomepageCopy(TRANSLATED_TEXT, EMOTIONAL_DIALOGUE);
  private observer?: IntersectionObserver;
  private revealedWords = new Set<string>();
  private openNotes = new Set<string>();

  readonly introLanguages = INTRO_LANGUAGES;
  readonly homepageText = HOMEPAGE_TEXT;
  readonly introCopyLines = INTRO_COPY_LINES;
  readonly arrivalMemorySlides = ARRIVAL_MEMORY_SLIDES;
  readonly nightfallBeats = NIGHTFALL_BEATS;
  readonly eldermereChoices = ELDERMERE_CHOICES;
  readonly eldermerePaths = ELDERMERE_PATHS;
  readonly shrineIntroBeats = SHRINE_INTRO_BEATS;
  readonly shrineAnswers = SHRINE_ANSWERS;
  readonly shrineAfterBeats = SHRINE_AFTER_BEATS;
  readonly epilogueBeats = EPILOGUE_BEATS;
  readonly stops = STOPS;
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
    if (event.target !== this.desktopJourney?.nativeElement) {
      return;
    }

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

  selectIntroLanguage(languageId: LanguageId): void {
    this.selectedIntroLanguage = languageId;
  }

  advanceIntroCopy(): void {
    this.introCopyStep = Math.min(
      this.introCopyStep + 1,
      this.introCopyLines.length - 1,
    );
  }

  retreatIntroCopy(): void {
    this.introCopyStep = Math.max(this.introCopyStep - 1, 0);
  }

  get currentIntroCopy(): string {
    return this.introCopyLines[this.introCopyStep];
  }

  get currentIntroCopyList(): string[] {
    return [this.currentIntroCopy];
  }

  translateText(text?: string): string {
    return this.copy.translate(this.selectedIntroLanguage, text);
  }

  emotionalDialogueText(text?: string): string {
    return this.copy.emotional(this.selectedIntroLanguage, text);
  }

  advanceEldermereDialogue(): void {
    this.eldermereStep = Math.min(this.eldermereStep + 1, 2);
  }

  retreatEldermereDialogue(): void {
    if (this.showMainQuestPopup || this.showSideQuestPopup) {
      this.showMainQuestPopup = false;
      this.showSideQuestPopup = false;
      return;
    }

    this.eldermereStep = Math.max(this.eldermereStep - 1, 0);
  }

  get canRetreatEldermereDialogue(): boolean {
    return this.eldermereStep > 0 || this.showMainQuestPopup || this.showSideQuestPopup;
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
    this.eldermereStep = 6;
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

  get currentNightfallBeat(): ShrineBeat | undefined {
    return this.nightfallBeats[this.nightfallStep];
  }

  get currentNightfallBeatList(): ShrineBeat[] {
    return this.currentNightfallBeat ? [this.currentNightfallBeat] : [];
  }

  get currentEpilogueBeat(): ShrineBeat | undefined {
    return this.epilogueBeats[this.epilogueStep];
  }

  get currentEpilogueBeatList(): ShrineBeat[] {
    return this.currentEpilogueBeat ? [this.currentEpilogueBeat] : [];
  }

  get isNightfallComplete(): boolean {
    return this.nightfallStep === this.nightfallBeats.length - 1;
  }

  get isEpilogueComplete(): boolean {
    return this.epilogueStep === this.epilogueBeats.length - 1;
  }

  getShrineSpeakerClass(speaker: string): string {
    return `speaker-line--${speaker
      .toLowerCase()
      .replace(/\s*\(.+\)/, '')
      .replaceAll(' ', '-')}`;
  }

  getNightfallBeatClass(speaker: string): string {
    if (speaker === "Jolie's inner thought") {
      return 'border-l border-[rgba(246,215,238,0.55)] bg-white/[0.04] px-4 py-3 text-[rgba(246,215,238,0.88)]';
    }

    if (speaker === 'Narrator') {
      return 'border-l border-white/25 px-4 py-2 text-white/62';
    }

    if (speaker === 'Jolie') {
      return 'border-l border-[rgba(116,232,221,0.55)] bg-[rgba(116,232,221,0.05)] px-4 py-3 text-[rgba(205,255,252,0.9)]';
    }

    if (speaker === 'Fern') {
      return 'border-l border-[rgba(164,214,154,0.55)] bg-[rgba(164,214,154,0.05)] px-4 py-3 text-[rgba(224,247,218,0.9)]';
    }

    if (speaker === 'Old Lady') {
      return 'border-l border-[rgba(217,164,111,0.6)] bg-[rgba(217,164,111,0.05)] px-4 py-3 text-[rgba(255,226,184,0.9)]';
    }

    return 'border-l border-[rgba(217,164,111,0.45)] pl-4 text-white/76';
  }

  getDialogueAnimationName(step: number): string {
    return step % 2 === 0 ? 'homepage-dialogue-line' : 'homepage-dialogue-line-alt';
  }

  advanceNightfall(): void {
    this.nightfallStep = Math.min(
      this.nightfallStep + 1,
      this.nightfallBeats.length - 1,
    );
  }

  retreatNightfall(): void {
    this.nightfallStep = Math.max(this.nightfallStep - 1, 0);
  }

  resetNightfall(): void {
    this.nightfallStep = 0;
  }

  advanceEpilogue(): void {
    this.epilogueStep = Math.min(
      this.epilogueStep + 1,
      this.epilogueBeats.length - 1,
    );
  }

  retreatEpilogue(): void {
    this.epilogueStep = Math.max(this.epilogueStep - 1, 0);
  }

  resetEpilogue(): void {
    this.epilogueStep = 0;
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

  retreatShrineScene(): void {
    if (this.showFirstClueAchievedPopup) {
      this.showFirstClueAchievedPopup = false;
      return;
    }

    if (this.shrineSolved) {
      if (this.shrineAfterStep > 0) {
        this.shrineAfterStep -= 1;
        return;
      }

      this.shrineSolved = false;
      this.selectedShrineAnswerId = undefined;
      this.shrineWrongAnswer = false;
      return;
    }

    if (this.shrineWrongAnswer) {
      this.selectedShrineAnswerId = undefined;
      this.shrineWrongAnswer = false;
      return;
    }

    this.shrineSceneStep = Math.max(this.shrineSceneStep - 1, 0);
  }

  get canRetreatShrineScene(): boolean {
    return (
      this.shrineSceneStep > 0 ||
      this.shrineSolved ||
      this.shrineWrongAnswer ||
      this.showFirstClueAchievedPopup
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
    if (this.shrineAfterStep === this.shrineAfterBeats.length - 1) {
      this.showFirstClueAchievedPopup = true;
      return;
    }

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
    this.showFirstClueAchievedPopup = false;
  }

  continueEldermereAfterReply(): void {
    this.eldermereStep =
      this.completedEldermereChoiceIds.length === this.eldermereChoices.length
        ? 4
        : 2;
  }

  showEldermerePaths(): void {
    this.eldermereStep = 5;
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
