import type { LanguageId } from './homepage.models';

export class HomepageCopy {
  constructor(
    private readonly translations: Record<LanguageId, Record<string, string>>,
    private readonly emotionalDialogue: Record<string, string>,
  ) {}

  translate(languageId: LanguageId, text?: string): string {
    if (!text) {
      return '';
    }

    return this.translations[languageId][text] ?? text;
  }

  emotional(languageId: LanguageId, text?: string): string {
    if (!text) {
      return '';
    }

    if (languageId !== 'english') {
      return this.translate(languageId, text);
    }

    return this.emotionalDialogue[text] ?? this.translate(languageId, text);
  }
}
