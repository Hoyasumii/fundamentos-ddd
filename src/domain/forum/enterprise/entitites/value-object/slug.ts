export class Slug {
  public value: string;

  /**
   * Creates a new Slug from a given string value.
   * @param {string} value - The string value from which to create the Slug.
   */
  constructor(value: string) {
    this.value = value;
  }

  /**
   * Creates a Slug from a given text. The text is normalized to Unicode
   * NFKD, lowercased, trimmed, and then has any whitespace replaced with
   * dashes. Additionally, any non-word characters (except dashes) are
   * removed, any underscores are replaced with dashes, and any duplicate
   * dashes are merged into one. Finally, any trailing dashes are removed.
   *
   * @param {string} text - The text to create a Slug from.
   * @returns {Slug} A Slug created from the given text.
   */
  static createFromText(text: string): Slug {
    const slugText = text
      .normalize("NFKD")
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "")
      .replace(/_/g, "-")
      .replace(/--+/g, "-")
      .replace(/-$/g, "");

    return new Slug(slugText);
  }
}
